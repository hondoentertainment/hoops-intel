#!/usr/bin/env node
// check-injuries.mjs — NBA injury status monitor
// Polls ESPN's injury API, diffs against the last snapshot stored in Supabase,
// and fires push notifications for any player whose status changed.
//
// Run by GitHub Actions every 30 min during game hours (see .github/workflows/injury-check.yml).
//
// Required env vars:
//   SUPABASE_URL        — e.g. https://xyz.supabase.co
//   SUPABASE_ANON_KEY   — public anon key (used for reads if RLS policy allows)
//   SUPABASE_SERVICE_KEY — service-role key (bypasses RLS; used for upsert/reads here)
//   PUSH_API_URL        — full URL of the push-notify endpoint
//                         e.g. https://hoopsintel.net/api/push-notify
//   PUSH_API_SECRET     — shared secret verified by api/push-notify.ts
//
// Supabase tables required — run this SQL once:
//
// -- Run this in Supabase:
// -- create table public.injury_snapshots (
// --   player_id text primary key,
// --   player_name text not null,
// --   team text not null,
// --   status text not null,
// --   injury_type text,
// --   updated_at timestamptz default now()
// -- );
// -- alter table public.injury_snapshots enable row level security;
// -- create policy "Service role only" on public.injury_snapshots using (false);

// ── Env var validation ─────────────────────────────────────────────────────

const REQUIRED_ENV = [
  'SUPABASE_URL',
  'SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_KEY',
  'PUSH_API_URL',
  'PUSH_API_SECRET',
];

const requireEnv = process.argv.includes('--require-env');
const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missing.length > 0) {
  const msg = `[check-injuries] Missing env vars: ${missing.join(', ')}`;
  if (requireEnv) {
    console.error(`❌ ${msg} (fail — --require-env)`);
    console.error('[check-injuries] Add secrets to enable workflows; see references/push-notifications.md');
    process.exit(1);
  }
  console.log(`[check-injuries] Skipping — ${msg}`);
  console.log('[check-injuries] Add these as GitHub repository secrets to enable this workflow.');
  process.exit(0);
}

const SUPABASE_URL         = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
const PUSH_API_URL         = process.env.PUSH_API_URL;
const PUSH_API_SECRET      = process.env.PUSH_API_SECRET;

// ── ESPN injury API ────────────────────────────────────────────────────────

const ESPN_INJURIES_URL =
  'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/injuries';

/**
 * @typedef {{ playerId: string; playerName: string; team: string; status: string; injuryType: string | null }} InjuryRecord
 */

/**
 * Fetches the current NBA injury report from ESPN.
 * @returns {Promise<InjuryRecord[]>}
 */
async function fetchESPNInjuries() {
  const res = await fetch(ESPN_INJURIES_URL);
  if (!res.ok) {
    throw new Error(`ESPN injuries API returned ${res.status}: ${await res.text().catch(() => '')}`);
  }

  const data = await res.json();
  // ESPN response shape:
  // { injuries: [ { team: { abbreviation }, injuries: [ { athlete, status, details } ] } ] }
  const records = [];

  for (const teamGroup of data.injuries ?? []) {
    const teamAbbr = teamGroup.team?.abbreviation ?? teamGroup.team?.displayName ?? 'UNK';

    for (const entry of teamGroup.injuries ?? []) {
      const playerId   = entry.athlete?.id ?? null;
      const playerName = entry.athlete?.displayName ?? entry.athlete?.fullName ?? null;
      const status     = entry.status ?? entry.type?.description ?? null;
      const injuryType = entry.details?.type ?? entry.longComment ?? null;

      if (!playerId || !playerName || !status) continue; // skip incomplete rows

      records.push({
        playerId,
        playerName,
        team: teamAbbr,
        status,
        injuryType: injuryType ?? null,
      });
    }
  }

  return records;
}

// ── Supabase helpers ───────────────────────────────────────────────────────

/**
 * Generic Supabase REST fetch using the service-role key.
 * @param {string} table
 * @param {{ method?: string; query?: string; body?: unknown }} opts
 * @returns {Promise<unknown>}
 */
async function supabaseFetch(table, { method = 'GET', query = '', body } = {}) {
  const url = `${SUPABASE_URL}/rest/v1/${table}${query ? `?${query}` : ''}`;
  const headers = {
    apikey:          SUPABASE_SERVICE_KEY,
    Authorization:   `Bearer ${SUPABASE_SERVICE_KEY}`,
    'Content-Type':  'application/json',
    Prefer:          method === 'POST' ? 'return=representation,resolution=merge-duplicates' : 'count=exact',
  };

  const res = await fetch(url, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase ${method} ${table} failed ${res.status}: ${text}`);
  }

  // DELETE / PATCH may return 204 No Content
  if (res.status === 204) return null;
  return res.json();
}

/**
 * Loads the most recent injury snapshot from Supabase.
 * Returns a map of playerId -> InjuryRecord.
 * @returns {Promise<Map<string, InjuryRecord>>}
 */
async function loadSnapshot() {
  const rows = await supabaseFetch('injury_snapshots', { query: 'select=*' });
  const map = new Map();
  for (const row of rows ?? []) {
    map.set(row.player_id, {
      playerId:    row.player_id,
      playerName:  row.player_name,
      team:        row.team,
      status:      row.status,
      injuryType:  row.injury_type ?? null,
    });
  }
  return map;
}

/**
 * Persists the new injury snapshot to Supabase (upsert by player_id).
 * @param {InjuryRecord[]} records
 */
async function saveSnapshot(records) {
  if (records.length === 0) return;

  // Supabase upsert — POST with Prefer: resolution=merge-duplicates
  const rows = records.map((r) => ({
    player_id:   r.playerId,
    player_name: r.playerName,
    team:        r.team,
    status:      r.status,
    injury_type: r.injuryType,
    updated_at:  new Date().toISOString(),
  }));

  await supabaseFetch('injury_snapshots', { method: 'POST', body: rows });
}

// ── Push notification sender ───────────────────────────────────────────────

/**
 * Calls api/push-notify to fire a push notification for an injury status change.
 * @param {{ playerName: string; team: string; oldStatus: string; newStatus: string }} change
 */
async function fireInjuryNotification({ playerName, team, oldStatus, newStatus }) {
  const payload = {
    secret:    PUSH_API_SECRET,
    topic:     'injury',
    title:     `🚨 Injury Alert: ${playerName}`,
    body:      `${playerName} (${team}) status changed: ${oldStatus} → ${newStatus}`,
    teamAbbr:  team,
    // url could point to a player page once deep links are implemented
    // url: `https://hoopsintel.net/players/${playerSlug}`,
  };

  const res = await fetch(PUSH_API_URL, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`push-notify returned ${res.status}: ${text}`);
  }

  const result = await res.json();
  console.log(
    `[check-injuries] Notification sent for ${playerName}: sent=${result.sent}, failed=${result.failed}`
  );
}

// ── Diff logic ─────────────────────────────────────────────────────────────

/**
 * Compares fresh ESPN data against the stored snapshot and returns players
 * whose injury status has changed.
 * @param {InjuryRecord[]} fresh
 * @param {Map<string, InjuryRecord>} snapshot
 * @returns {{ playerName: string; team: string; oldStatus: string; newStatus: string }[]}
 */
function diffInjuries(fresh, snapshot) {
  const changes = [];

  for (const record of fresh) {
    const prev = snapshot.get(record.playerId);

    if (!prev) {
      // Brand-new injury report — treat as a change from "Available"
      // to avoid spamming on first run; only report if status is notable
      if (/out|doubtful|questionable/i.test(record.status)) {
        changes.push({
          playerName: record.playerName,
          team:       record.team,
          oldStatus:  'Available',
          newStatus:  record.status,
        });
      }
      continue;
    }

    // Normalise for comparison (case-insensitive, trim whitespace)
    const prevStatus = prev.status.trim().toLowerCase();
    const nextStatus = record.status.trim().toLowerCase();

    if (prevStatus !== nextStatus) {
      changes.push({
        playerName: record.playerName,
        team:       record.team,
        oldStatus:  prev.status,
        newStatus:  record.status,
      });
    }
  }

  // Also catch players who recovered and are no longer in the report
  for (const [playerId, prev] of snapshot) {
    const stillInjured = fresh.some((r) => r.playerId === playerId);
    if (!stillInjured && !/available/i.test(prev.status)) {
      changes.push({
        playerName: prev.playerName,
        team:       prev.team,
        oldStatus:  prev.status,
        newStatus:  'Available',
      });
    }
  }

  return changes;
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('[check-injuries] Starting injury status check…');

  // 1. Fetch current injury report from ESPN
  console.log('[check-injuries] Fetching ESPN injury report…');
  let fresh;
  try {
    fresh = await fetchESPNInjuries();
    console.log(`[check-injuries] ESPN returned ${fresh.length} injury records`);
  } catch (err) {
    console.error('[check-injuries] ESPN fetch failed:', err.message);
    process.exit(1);
  }

  // 2. Load yesterday's snapshot from Supabase
  console.log('[check-injuries] Loading stored snapshot from Supabase…');
  let snapshot;
  try {
    snapshot = await loadSnapshot();
    console.log(`[check-injuries] Snapshot has ${snapshot.size} records`);
  } catch (err) {
    console.error('[check-injuries] Snapshot load failed:', err.message);
    process.exit(1);
  }

  // 3. Diff — find status changes
  const changes = diffInjuries(fresh, snapshot);
  console.log(`[check-injuries] Found ${changes.length} status change(s)`);

  // 4. Fire a push notification for each changed player
  //    Process sequentially to avoid rate-limiting the push endpoint
  let notified = 0;
  let notifyErrors = 0;

  for (const change of changes) {
    console.log(
      `[check-injuries] ${change.playerName} (${change.team}): ` +
      `"${change.oldStatus}" → "${change.newStatus}"`
    );
    try {
      await fireInjuryNotification(change);
      notified++;
    } catch (err) {
      // Log but continue — one failure shouldn't block the rest
      console.error(
        `[check-injuries] Failed to notify for ${change.playerName}:`,
        err.message
      );
      notifyErrors++;
    }
  }

  // 5. Persist new snapshot (upsert so it's ready for next run)
  console.log('[check-injuries] Saving new snapshot to Supabase…');
  try {
    await saveSnapshot(fresh);
    console.log(`[check-injuries] Snapshot updated with ${fresh.length} records`);
  } catch (err) {
    // Non-fatal — log and continue; next run will re-diff against old snapshot
    console.error('[check-injuries] Snapshot save failed:', err.message);
  }

  console.log(
    `[check-injuries] Done — changes: ${changes.length}, ` +
    `notified: ${notified}, notify errors: ${notifyErrors}`
  );
}

main().catch((err) => {
  console.error('[check-injuries] Unhandled error:', err);
  process.exit(1);
});
