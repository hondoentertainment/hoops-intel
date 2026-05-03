#!/usr/bin/env node
// check-playoff-series.mjs — Playoff push-notification dispatcher.
//
// Loads the latest playoff-series snapshot (written by fetch-playoff-series.mjs),
// diffs against a `series_snapshots` table in Supabase, and fires push
// notifications for two events:
//   1. Elimination game imminent — fires ~2 hours before tip when a team
//      faces elimination (opponent has 3 wins)
//   2. Series clincher — fires immediately after a series-ending final
//
// Run every 30 min during playoff hours via GitHub Actions.
//
// Required env vars:
//   SUPABASE_URL         — https://xyz.supabase.co
//   SUPABASE_SERVICE_KEY — service-role key
//   PUSH_API_URL         — full URL of api/push-notify
//   PUSH_API_SECRET      — shared secret
//
// Required Supabase table (run once):
//   create table public.series_snapshots (
//     series_id text primary key,
//     higher_wins int not null,
//     lower_wins int not null,
//     status text not null,
//     elimination_notified_game int,   -- last gameNumber for which we fired an elim push
//     clincher_notified boolean default false,
//     updated_at timestamptz default now()
//   );
//   alter table public.series_snapshots enable row level security;
//   create policy "Service role only" on public.series_snapshots using (false);

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

const REQUIRED = ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"];
const requireEnv = process.argv.includes("--require-env");
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  const msg = `[check-playoff-series] Missing env: ${missing.join(", ")}`;
  if (requireEnv) {
    console.error(`❌ ${msg} (fail — --require-env)`);
    process.exit(1);
  }
  console.log(`[check-playoff-series] Skipping — ${msg}`);
  process.exit(0);
}

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, PUSH_API_URL, PUSH_API_SECRET } = process.env;

async function supabaseFetch(table, opts = {}) {
  const method = opts.method ?? "GET";
  const url = `${SUPABASE_URL}/rest/v1/${table}${opts.query ? "?" + opts.query : ""}`;
  const res = await fetch(url, {
    method,
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: method === "POST" ? "return=representation,resolution=merge-duplicates" : "count=exact",
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase ${method} ${table} ${res.status}: ${text}`);
  }
  return res.status === 204 ? null : res.json();
}

async function firePush({ topic, title, body, teamAbbr, url }) {
  const res = await fetch(PUSH_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret: PUSH_API_SECRET, topic, title, body, teamAbbr, url }),
  });
  if (!res.ok) throw new Error(`push-notify ${res.status}: ${await res.text().catch(() => "")}`);
  return res.json();
}

function loadSnapshot() {
  const path = join(ROOT, ".daily-data", "playoff-series.json");
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (err) {
    console.warn(`[check-playoff-series] No snapshot at ${path}: ${err.message}`);
    return null;
  }
}

function isEliminationImminent(series) {
  if (series.status !== "active") return false;
  const next = series.games.find((g) => g.status === "scheduled");
  if (!next) return false;
  return series.higherWins === 3 || series.lowerWins === 3;
}

async function main() {
  const snap = loadSnapshot();
  if (!snap || !snap.series?.length) {
    console.log("[check-playoff-series] No playoff snapshot found — exiting clean.");
    return;
  }

  const prior = await supabaseFetch("series_snapshots", { query: "select=*" });
  const priorById = new Map(prior.map((r) => [r.series_id, r]));

  for (const s of snap.series) {
    const prev = priorById.get(s.seriesId);

    // ── Clincher: status just flipped to complete ──────────
    if (s.status === "complete" && (!prev || !prev.clincher_notified)) {
      const winner = s.winner;
      const loser = winner === s.higherTeam ? s.lowerTeam : s.higherTeam;
      const winnerWins = Math.max(s.higherWins, s.lowerWins);
      const loserWins = Math.min(s.higherWins, s.lowerWins);
      try {
        await firePush({
          topic: "series-clincher",
          title: `🏆 ${winner} advances!`,
          body: `${winner} clinches the series over ${loser} ${winnerWins}-${loserWins}.`,
          teamAbbr: winner,
          url: `https://hoopsintel.net/playoffs`,
        });
        console.log(`[clincher] ${s.seriesId} — ${winner} advances`);
      } catch (err) {
        console.error(`[clincher] push failed for ${s.seriesId}:`, err.message);
      }
    }

    // ── Elimination: one side at 3 wins, next game scheduled ──
    const elimGame = isEliminationImminent(s) ? s.games.find((g) => g.status === "scheduled") : null;
    const alreadyNotified = prev?.elimination_notified_game === elimGame?.gameNumber;
    if (elimGame && !alreadyNotified) {
      const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
      const trailing = leader === s.higherTeam ? s.lowerTeam : s.higherTeam;
      const both = [leader, trailing];
      for (const team of both) {
        try {
          await firePush({
            topic: "elimination-game",
            title: `⚠ Elimination Game: ${trailing} @ ${leader}`,
            body: `${trailing} face elimination. Game ${elimGame.gameNumber} tips ${elimGame.time ?? elimGame.date}.`,
            teamAbbr: team,
            url: `https://hoopsintel.net/playoffs`,
          });
        } catch (err) {
          console.error(`[elim] push failed for ${team}:`, err.message);
        }
      }
      console.log(`[elim] ${s.seriesId} — Game ${elimGame.gameNumber} elimination push fired`);
    }

    // ── Upsert snapshot row ────────────────────────────────
    await supabaseFetch("series_snapshots", {
      method: "POST",
      body: [
        {
          series_id: s.seriesId,
          higher_wins: s.higherWins,
          lower_wins: s.lowerWins,
          status: s.status,
          elimination_notified_game: elimGame?.gameNumber ?? prev?.elimination_notified_game ?? null,
          clincher_notified: s.status === "complete" ? true : (prev?.clincher_notified ?? false),
          updated_at: new Date().toISOString(),
        },
      ],
    });
  }

  console.log(`[check-playoff-series] Processed ${snap.series.length} series`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
