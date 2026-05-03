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
export async function fetchESPNCachedWithMeta(espnDate) {
  const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`;
  ensureCacheDir();

  const meta = {
    espnDate,
    usedDiskCacheFallback: false,
    usedEmptyFallback: false,
    liveFetchSucceeded: false,
  };

  try {
    const res = await fetchWithRetry(url, {}, { maxRetries: 3, baseDelayMs: 2000 });
    const data = await res.json();

    // Cache successful response
    writeFileSync(cachePath(espnDate), JSON.stringify(data), "utf8");
    console.log(`  [espn] Fetched and cached data for ${espnDate}`);
    meta.liveFetchSucceeded = true;
    return { data, meta };
  } catch (err) {
    console.warn(`  [espn] Live fetch failed for ${espnDate}: ${err.message}`);

    // Try cache fallback
    try {
      const cached = JSON.parse(readFileSync(cachePath(espnDate), "utf8"));
      console.warn(`  [espn] Using cached data for ${espnDate}`);
      meta.usedDiskCacheFallback = true;
      console.warn(
        `[data-quality] ESPN_DISK_CACHE_FALLBACK date=${espnDate} — live ESPN unavailable`,
      );
      return { data: cached, meta };
    } catch {
      // Last resort: return empty scoreboard so generation can proceed
      // Claude will generate content without specific game data
      meta.usedEmptyFallback = true;
      console.warn(`  [espn] No cached data for ${espnDate} — using empty scoreboard`);
      console.warn(
        `[data-quality] ESPN_EMPTY_FALLBACK date=${espnDate} — downstream jobs should review snapshot`,
      );
      return {
        data: { events: [], day: { date: espnDate }, leagues: [] },
        meta,
      };
    }
  }
}

/** @returns {Promise<object>} ESPN API response */
export async function fetchESPNCached(espnDate) {
  const { data } = await fetchESPNCachedWithMeta(espnDate);
  return data;
}

export function parseGames(espnData) {
  const events = espnData?.events ?? [];
  return events.map((e) => {
    const comp = e?.competitions?.[0];
    if (!comp) {
      return null;
    }
    const home = comp.competitors?.find((c) => c.homeAway === "home");
    const away = comp.competitors?.find((c) => c.homeAway === "away");
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
      homeScore: done ? parseInt(home?.score ?? "0", 10) : null,
      awayTeam: away?.team?.abbreviation ?? "",
      awayTeamFull: away?.team?.displayName ?? "",
      awayRecord: away?.records?.[0]?.summary ?? "",
      awayScore: done ? parseInt(away?.score ?? "0", 10) : null,
      time: comp.status?.type?.shortDetail ?? "",
      venue: comp.venue?.fullName ?? "",
      tv:
        (comp.broadcasts || [])
          .map((b) => b.names?.join(", "))
          .filter(Boolean)
          .join(" / ") || "Local",
      leaders,
    };
  }).filter(Boolean);
}
