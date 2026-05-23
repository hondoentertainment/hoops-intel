#!/usr/bin/env node
// fetch-line-odds.mjs — Line ingest: The Odds API (when ODDS_API_KEY set) + optional manual JSON.
//
// Writes .daily-data/odds-external.json then syncs lineMovementData.ts via sync-line-movement.
//
// Manual override file shape:
//   { "games": [{ "awayTeam": "BOS", "homeTeam": "LAL", "closingSpread": "BOS -2.5" }] }

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { loadLocalEnv } from "./load-local-env.mjs";
import { extractPulseExport } from "./lib/read-pulse-exports.mjs";
import { appendOddsQuotaSummary, fetchOddsApiSpreads } from "./lib/fetch-odds-api.mjs";
import { syncLineClosers } from "./sync-line-movement.mjs";

loadLocalEnv();

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const EXTERNAL_ODDS = join(ROOT, ".daily-data", "odds-external.json");

async function main() {
  const previews = extractPulseExport("gamePreviews") || [];
  if (!previews.length) {
    console.log("[fetch-line-odds] No gamePreviews in pulseData — skipping.");
    process.exit(0);
  }

  mkdirSync(join(ROOT, ".daily-data"), { recursive: true });

  let payload = null;
  const apiKey = process.env.ODDS_API_KEY;

  if (apiKey?.trim()) {
    try {
      payload = await fetchOddsApiSpreads(apiKey);
      if (payload?.games?.length) {
        writeFileSync(EXTERNAL_ODDS, JSON.stringify(payload, null, 2), "utf8");
        console.log(
          `[fetch-line-odds] Odds API → ${payload.games.length} spread(s) (remaining requests: ${payload.remainingRequests ?? "?"})`,
        );
      } else {
        console.warn("[fetch-line-odds] Odds API returned no parseable spreads.");
      }
    } catch (err) {
      console.warn(`[fetch-line-odds] Odds API failed: ${err.message}`);
      if (process.env.GITHUB_ACTIONS === "true") {
        appendOddsQuotaSummary({
          note: `_Odds API fetch failed: ${err.message}_`,
        });
      }
    }
  } else {
    console.log("[fetch-line-odds] ODDS_API_KEY not set — skipping live sportsbook fetch.");
    if (process.env.GITHUB_ACTIONS === "true") {
      appendOddsQuotaSummary({
        note: "_`ODDS_API_KEY` not set — live sportsbook fetch skipped; pulse spreads used as closers._",
      });
    }
  }

  if (!payload?.games?.length && existsSync(EXTERNAL_ODDS)) {
    console.log("[fetch-line-odds] Using existing odds-external.json on disk.");
  } else if (!payload?.games?.length) {
    console.log("[fetch-line-odds] No external odds — pulse spreads used as closers.");
  }

  syncLineClosers({ useExternal: existsSync(EXTERNAL_ODDS) });
  console.log("[fetch-line-odds] Done.");
}

main().catch((err) => {
  console.error("[fetch-line-odds] Fatal:", err);
  process.exit(1);
});
