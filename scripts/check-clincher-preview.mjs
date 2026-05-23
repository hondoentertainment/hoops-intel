#!/usr/bin/env node
// check-clincher-preview.mjs — Daytime preview when eliminationSeries() has a clincher tonight.

import { extractPulseExport, extractPlayoffExport } from "./lib/read-pulse-exports.mjs";
import { pushAlreadySent, pushMarkSent } from "./lib/push-dispatch-log.mjs";
import { firePushNotify } from "./lib/push-fire.mjs";
import { editionDateKey, eliminationSeries, gameOnEditionDate } from "./lib/push-slate.mjs";

const REQUIRED = ["SUPABASE_URL", "SUPABASE_SERVICE_KEY", "PUSH_API_URL", "PUSH_API_SECRET"];
const missing = REQUIRED.filter((k) => !process.env[k]);
if (missing.length) {
  console.log(`[check-clincher-preview] Skipping — missing env: ${missing.join(", ")}`);
  process.exit(0);
}

const { SUPABASE_URL, SUPABASE_SERVICE_KEY, PUSH_API_URL, PUSH_API_SECRET } = process.env;

function scheduledClincherTonight(series, editionKey) {
  const next = series.games?.find((g) => g.status === "scheduled");
  if (!next) return null;
  if (!gameOnEditionDate(next, editionKey)) return null;
  return next;
}

async function main() {
  const edition = extractPulseExport("pulseEdition");
  const editionKey = editionDateKey(edition?.date);
  const playoffSeries = extractPlayoffExport("playoffSeries") || [];
  const clinchers = eliminationSeries(playoffSeries);

  if (!clinchers.length) {
    console.log("[check-clincher-preview] No elimination series on the board — nothing to send.");
    return;
  }

  let fired = 0;
  for (const s of clinchers) {
    const game = scheduledClincherTonight(s, editionKey);
    if (!game) continue;

    const eventKey = `clincher-preview:${s.seriesId}:g${game.gameNumber}`;
    if (await pushAlreadySent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey)) continue;

    const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
    const trailing = leader === s.higherTeam ? s.lowerTeam : s.higherTeam;
    const away = game.awayTeam ?? trailing;
    const home = game.homeTeam ?? leader;

    for (const team of [leader, trailing]) {
      try {
        await firePushNotify({
          pushApiUrl: PUSH_API_URL,
          pushApiSecret: PUSH_API_SECRET,
          payload: {
            topic: "clincher-preview",
            title: `⚠ Clincher tonight: ${trailing} @ ${leader}`,
            body: `${s.summary} · Game ${game.gameNumber}${game.time ? ` · ${game.time}` : ""}${game.tv ? ` · ${game.tv}` : ""}`,
            teamAbbr: team,
            url: `https://hoopsintel.net/playoffs#series-card-${s.seriesId}`,
          },
        });
      } catch (err) {
        console.error(`[clincher-preview] push failed for ${team}:`, err.message);
      }
    }

    await pushMarkSent(SUPABASE_URL, SUPABASE_SERVICE_KEY, eventKey);
    console.log(`[clincher-preview] ${s.seriesId} — Game ${game.gameNumber} (${away} @ ${home})`);
    fired++;
  }

  console.log(`[check-clincher-preview] Checked ${clinchers.length} elimination series, fired ${fired}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
