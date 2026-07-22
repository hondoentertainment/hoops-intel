#!/usr/bin/env node
// check-rival-tonight.mjs — Fire rival-topic pushes when both teams in a subscribed pair play tonight.

import { extractPulseExport } from "./lib/read-pulse-exports.mjs";
import { pushAlreadySent, pushMarkSent, pushLogFetch } from "./lib/push-dispatch-log.mjs";
import { firePushNotify } from "./lib/push-fire.mjs";
import {
  editionDateKey,
  findHeadToHeadPreview,
  previewForTeam,
  teamsOnSlate,
} from "./lib/push-slate.mjs";

const REQUIRED = ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"];
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.log(`[check-rival-tonight] Skipping — missing env: ${missing.join(", ")}`);
  process.exit(0);
}

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, PUSH_API_URL, PUSH_API_SECRET } = process.env;

function addPair(seen, pairs, x, y) {
  const a = x?.trim?.().toUpperCase?.() ?? String(x || "").trim().toUpperCase();
  const b = y?.trim?.().toUpperCase?.() ?? String(y || "").trim().toUpperCase();
  if (!a || !b || a.length !== 3 || b.length !== 3 || a === b) return;
  const key = [a, b].sort().join("-");
  if (seen.has(key)) return;
  seen.add(key);
  pairs.push({ a: key.split("-")[0], b: key.split("-")[1], key });
}

async function fetchDistinctRivalPairs() {
  // First pair stays denormalized on rival_abbr_*; rival_pairs carries extras.
  const rows = await pushLogFetch(SUPABASE_URL, SUPABASE_SERVICE_KEY, "push_subscriptions", {
    query:
      "select=rival_abbr_a,rival_abbr_b,rival_pairs&rival_abbr_a=not.is.null&rival_abbr_b=not.is.null",
  });
  const seen = new Set();
  const pairs = [];
  for (const row of rows || []) {
    if (Array.isArray(row.rival_pairs)) {
      for (const p of row.rival_pairs) {
        if (Array.isArray(p) && p.length >= 2) addPair(seen, pairs, p[0], p[1]);
      }
    }
    addPair(seen, pairs, row.rival_abbr_a, row.rival_abbr_b);
  }
  return pairs;
}

function formatMatchupPreview(g) {
  return `${g.awayTeam} @ ${g.homeTeam}${g.time ? ` · ${g.time}` : ""}`;
}

async function main() {
  const edition = extractPulseExport("pulseEdition");
  const previews = extractPulseExport("gamePreviews") || [];
  const dateKey = editionDateKey(edition?.date);

  if (!previews.length) {
    console.log("[check-rival-tonight] No game previews — nothing to send.");
    return;
  }

  let pairs;
  try {
    pairs = await fetchDistinctRivalPairs();
  } catch (err) {
    console.error("[check-rival-tonight] Failed to load rival pairs:", err.message);
    return;
  }

  if (!pairs.length) {
    console.log("[check-rival-tonight] No rival_abbr subscriptions — nothing to send.");
    return;
  }

  const slate = teamsOnSlate(previews);
  let fired = 0;

  for (const pair of pairs) {
    if (!slate.has(pair.a) || !slate.has(pair.b)) continue;

    const eventKey = `rival:${dateKey}:${pair.key}`;
    if (await pushAlreadySent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey)) continue;

    const headToHead = findHeadToHeadPreview(previews, pair.a, pair.b);
    let title;
    let body;
    let rivalAway;
    let rivalHome;

    if (headToHead) {
      rivalAway = headToHead.awayTeam;
      rivalHome = headToHead.homeTeam;
      title = `Rivalry night: ${rivalAway} @ ${rivalHome}`;
      body = `${headToHead.spread ?? "Lines on the board"} · ${headToHead.time ?? "Tip TBD"}${headToHead.tv ? ` · ${headToHead.tv}` : ""}`;
    } else {
      const previewA = previewForTeam(previews, pair.a);
      const previewB = previewForTeam(previews, pair.b);
      rivalAway = pair.a;
      rivalHome = pair.b;
      title = `Both rivals play tonight: ${pair.a} & ${pair.b}`;
      body = [previewA && formatMatchupPreview(previewA), previewB && formatMatchupPreview(previewB)]
        .filter(Boolean)
        .join(" · ");
    }

    try {
      await firePushNotify({
        pushApiUrl: PUSH_API_URL,
        pushApiSecret: PUSH_API_SECRET,
        payload: {
          topic: "rival",
          title,
          body,
          rivalAway,
          rivalHome,
          url: "https://hoopsintel.net/#scores",
        },
      });
      await pushMarkSent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey);
      console.log(`[rival] sent for ${pair.a} / ${pair.b}`);
      fired++;
    } catch (err) {
      console.error(`[rival] failed ${pair.a}/${pair.b}:`, err.message);
    }
  }

  console.log(`[check-rival-tonight] Checked ${pairs.length} rival pair(s), fired ${fired}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
