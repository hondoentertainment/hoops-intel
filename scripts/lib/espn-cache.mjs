// ESPN data caching layer.
// Caches fetched ESPN data to disk so generation can survive transient API failures.

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { fetchWithRetry } from "./retry.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const CACHE_DIR = join(__dirname, "..", "..", ".espn-cache");

function ensureCacheDir() {
  mkdirSync(CACHE_DIR, { recursive: true });
}

function cachePath(espnDate) {
  return join(CACHE_DIR, `scoreboard-${espnDate}.json`);
}

/**
 * Fetch ESPN scoreboard with retry + disk cache fallback.
 * On success, caches to disk. On failure, returns cached data if available.
 * @param {string} espnDate - YYYYMMDD format
 * @returns {Promise<object>} ESPN API response
 */
export async function fetchESPNCached(espnDate) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`;
  ensureCacheDir();

  try {
    const res = await fetchWithRetry(url, {}, { maxRetries: 3, baseDelayMs: 2000 });
    const data = await res.json();

    // Cache successful response
    writeFileSync(cachePath(espnDate), JSON.stringify(data), "utf8");
    console.log(`  [espn] Fetched and cached data for ${espnDate}`);
    return data;
  } catch (err) {
    console.warn(`  [espn] Live fetch failed for ${espnDate}: ${err.message}`);

    // Try cache fallback
    try {
      const cached = JSON.parse(readFileSync(cachePath(espnDate), "utf8"));
      console.warn(`  [espn] Using cached data for ${espnDate}`);
      return cached;
    } catch {
      throw new Error(`ESPN API failed and no cached data for ${espnDate}: ${err.message}`);
    }
  }
}

export function parseGames(espnData) {
  return (espnData.events || []).map((e) => {
    const comp = e.competitions[0];
    const home = comp.competitors.find((c) => c.homeAway === "home");
    const away = comp.competitors.find((c) => c.homeAway === "away");
    const done = comp.status?.type?.completed ?? false;

    const leaders = (comp.leaders || []).map((l) => ({
      category: l.name,
      player: l.leaders?.[0]?.athlete?.displayName ?? "",
      team: l.leaders?.[0]?.team?.abbreviation ?? "",
      value: l.leaders?.[0]?.displayValue ?? "",
    }));

    return {
      status: done ? "final" : "scheduled",
      homeTeam: home?.team?.abbreviation ?? "",
      homeTeamFull: home?.team?.displayName ?? "",
      homeRecord: home?.records?.[0]?.summary ?? "",
      homeScore: done ? parseInt(home?.score ?? "0") : null,
      awayTeam: away?.team?.abbreviation ?? "",
      awayTeamFull: away?.team?.displayName ?? "",
      awayRecord: away?.records?.[0]?.summary ?? "",
      awayScore: done ? parseInt(away?.score ?? "0") : null,
      time: comp.status?.type?.shortDetail ?? "",
      venue: comp.venue?.fullName ?? "",
      tv: (comp.broadcasts || []).map((b) => b.names?.join(", ")).filter(Boolean).join(" / ") || "Local",
      leaders,
    };
  });
}
