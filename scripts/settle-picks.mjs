#!/usr/bin/env node
// settle-picks.mjs — Settle Pick'em rows from committed gameResults in pulseData.ts
// via RPC settle_picks_for_game (service role). Safe to skip when picks table missing.
//
// Env: SUPABASE_URL, SUPABASE_SERVICE_KEY

import { extractPulseExport } from "./lib/read-pulse-exports.mjs";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_KEY;

function winnerAbbr(game) {
  if (game.status !== "final") return null;
  const hs = Number(game.homeScore);
  const as = Number(game.awayScore);
  if (!Number.isFinite(hs) || !Number.isFinite(as)) return null;
  return hs >= as ? game.homeTeam : game.awayTeam;
}

async function rpcSettle(gameId, winner) {
  const res = await fetch(`${url}/rest/v1/rpc/settle_picks_for_game`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ p_game_id: gameId, p_correct_team: winner }),
  });
  const text = await res.text().catch(() => "");
  if (!res.ok) {
    console.warn(`[settle-picks] RPC ${res.status} for ${gameId}: ${text.slice(0, 240)}`);
    return -1;
  }
  let n = -1;
  try {
    const j = JSON.parse(text);
    if (Array.isArray(j) && j.length > 0) {
      const row = j[0];
      if (row && typeof row === "object" && typeof row.settle_picks_for_game === "number")
        n = row.settle_picks_for_game;
      else if (typeof row === "number") n = row;
    } else if (typeof j === "number") {
      n = j;
    }
  } catch {
    const trimmed = text.replace(/[^\d\-]/g, "").trim();
    if (trimmed) n = Number.parseInt(trimmed, 10);
  }
  if (!Number.isFinite(n)) n = -1;
  return n;
}

async function main() {
  if (!url || !key) {
    console.log("[settle-picks] SKIP — SUPABASE_URL or SUPABASE_SERVICE_KEY unset");
    process.exit(0);
  }

  const gameResults = extractPulseExport("gameResults");
  if (!Array.isArray(gameResults)) {
    console.log("[settle-picks] No gameResults export — exiting");
    process.exit(0);
  }

  let calls = 0;
  let updated = 0;
  let errors = 0;

  for (const g of gameResults) {
    if (!g || typeof g.gameId !== "string") continue;
    const w = winnerAbbr(g);
    if (!w) continue;
    calls++;
    const n = await rpcSettle(g.gameId, w);
    if (n < 0) errors++;
    else updated += Math.max(n, 0);
  }

  console.log(`[settle-picks] Final games evaluated: ${calls}, rows patched (Σ): ${updated}, rpc errors: ${errors}`);
  if (errors > 0) process.exit(1);
}

main().catch((e) => {
  console.error("[settle-picks] Fatal:", e);
  process.exit(1);
});
