#!/usr/bin/env node
// fetch-espn-data.mjs — Fetch ESPN data once and save snapshot for all section generators.
// No API key needed. Runs in <10 seconds.
// Usage: node scripts/fetch-espn-data.mjs

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toESPNDate, toISODate, toDisplayDate } from "./lib/dates.mjs";
import { fetchESPNCached, parseGames } from "./lib/espn-cache.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".daily-data");

function getLastEditionNumber() {
  try {
    const pulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
    const m = pulse.match(/No\.\s*(\d+)/);
    return m ? parseInt(m[1]) : 62;
  } catch {
    return 62;
  }
}

function getCurrentStandings() {
  try {
    const pulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
    // Extract east/west standings arrays via regex
    const eastMatch = pulse.match(/export\s+const\s+eastStandings\s*=\s*(\[[\s\S]*?\]);/);
    const westMatch = pulse.match(/export\s+const\s+westStandings\s*=\s*(\[[\s\S]*?\]);/);
    return {
      east: eastMatch ? eval(eastMatch[1]) : [],
      west: westMatch ? eval(westMatch[1]) : [],
    };
  } catch {
    return { east: [], west: [] };
  }
}

async function main() {
  mkdirSync(DATA_DIR, { recursive: true });

  const yesterdayESPN = toESPNDate(-1);
  const todayESPN = toESPNDate(0);
  const editionDate = toDisplayDate(0);
  const editionISO = toISODate(0);
  const editionNo = getLastEditionNumber() + 1;

  console.log(`📅 Fetching ESPN data for Edition No. ${editionNo} — ${editionDate}`);
  console.log(`   Yesterday: ${yesterdayESPN} | Today: ${todayESPN}`);

  let finalGames = [];
  let scheduledGames = [];

  try {
    const [yesterdayData, todayData] = await Promise.all([
      fetchESPNCached(yesterdayESPN),
      fetchESPNCached(todayESPN),
    ]);
    const yesterdayGames = parseGames(yesterdayData);
    const todayGames = parseGames(todayData);
    finalGames = yesterdayGames.filter((g) => g.status === "final");
    scheduledGames = todayGames.filter((g) => g.status !== "final");
  } catch (err) {
    console.error(`ESPN fetch failed: ${err.message}`);
    console.log("Writing snapshot with empty game data — sections can use manual input.");
  }

  const standings = getCurrentStandings();

  const snapshot = {
    editionNo,
    editionDate,
    editionISO,
    yesterdayESPN,
    todayESPN,
    finalGames,
    scheduledGames,
    currentStandings: standings,
    fetchedAt: new Date().toISOString(),
  };

  const outPath = join(DATA_DIR, "espn-snapshot.json");
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`✅ Snapshot written: ${finalGames.length} final, ${scheduledGames.length} scheduled`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
