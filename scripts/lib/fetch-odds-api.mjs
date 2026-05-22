// fetch-odds-api.mjs — The Odds API (https://the-odds-api.com) spread ingest.
//
// Requires ODDS_API_KEY. Returns { games: [{ awayTeam, homeTeam, closingSpread }] }
// compatible with sync-line-movement.mjs mergeExternalSpreads.

import { fetchWithRetry } from "./retry.mjs";
import { abbrFromFullName } from "./team-names.mjs";

const ODDS_API = "https://api.the-odds-api.com/v4/sports/basketball_nba/odds";

/**
 * Pick consensus closing spread from first US bookmaker with spreads market.
 * @param {object} event
 * @returns {{ awayTeam: string, homeTeam: string, closingSpread: string } | null}
 */
export function parseOddsEvent(event) {
  const homeName = event.home_team;
  const awayName = event.away_team;
  const homeAbbr = abbrFromFullName(homeName);
  const awayAbbr = abbrFromFullName(awayName);
  if (!homeAbbr || !awayAbbr) return null;

  const bookmakers = event.bookmakers ?? [];
  for (const book of bookmakers) {
    const market = (book.markets ?? []).find((m) => m.key === "spreads");
    if (!market?.outcomes?.length) continue;

    const byName = new Map(market.outcomes.map((o) => [o.name, o.point]));
    const homePoint = byName.get(homeName);
    const awayPoint = byName.get(awayName);
    if (homePoint == null || awayPoint == null) continue;

    const favoriteAbbr = homePoint < awayPoint ? homeAbbr : awayAbbr;
    const favoritePoint = Math.min(homePoint, awayPoint);
    const spread = `${favoriteAbbr} ${favoritePoint > 0 ? "+" : ""}${favoritePoint}`;

    return { awayTeam: awayAbbr, homeTeam: homeAbbr, closingSpread: spread };
  }

  return null;
}

/**
 * @returns {Promise<{ games: object[], source: string, fetchedAt: string, remainingRequests?: string } | null>}
 */
export async function fetchOddsApiSpreads(apiKey) {
  if (!apiKey?.trim()) return null;

  const url = new URL(ODDS_API);
  url.searchParams.set("apiKey", apiKey.trim());
  url.searchParams.set("regions", "us");
  url.searchParams.set("markets", "spreads");
  url.searchParams.set("oddsFormat", "american");

  const res = await fetchWithRetry(url.toString(), {}, { maxRetries: 2, baseDelayMs: 1500 });
  const remaining = res.headers.get("x-requests-remaining") ?? undefined;
  const events = await res.json();

  if (!Array.isArray(events)) {
    throw new Error(typeof events?.message === "string" ? events.message : "Unexpected Odds API response");
  }

  const games = [];
  for (const event of events) {
    const row = parseOddsEvent(event);
    if (row) games.push(row);
  }

  return {
    games,
    source: "the-odds-api",
    fetchedAt: new Date().toISOString(),
    remainingRequests: remaining,
  };
}
