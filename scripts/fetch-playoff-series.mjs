#!/usr/bin/env node
// fetch-playoff-series.mjs — Normalize ESPN playoff series state and write a snapshot.
//
// ESPN's scoreboard endpoint exposes per-game series info (summary, title,
// gameNumber) on `event.competitions[0].series` during the postseason.
// We aggregate the last ~3 weeks of scoreboards to reconstruct each series.
//
// Usage:   node scripts/fetch-playoff-series.mjs
// Output:  .daily-data/playoff-series.json
//
// The snapshot is consumed by assemble-pulse-data.mjs to regenerate
// client/src/lib/playoffData.ts on each daily run.

import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toESPNDate } from "./lib/dates.mjs";
import { fetchESPNCached } from "./lib/espn-cache.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".daily-data");

// Pull scoreboards back to April 15, 2026 (start of Play-In / Round 1 window)
// to reconstruct series state without needing a dedicated ESPN endpoint.
const DAYS_BACK = 21;
const DAYS_AHEAD = 7;

function isPlayoffEvent(event) {
  const comp = event.competitions?.[0];
  if (!comp) return false;
  const season = comp.status?.type?.description ?? "";
  if (/Playoffs|Finals|Conference/i.test(season)) return true;
  if (comp.series?.title) return true;
  return false;
}

function conferenceFromSeries(series) {
  const t = (series?.title ?? "").toLowerCase();
  if (t.includes("east")) return "east";
  if (t.includes("west")) return "west";
  if (t.includes("finals") && !t.includes("conference")) return "finals";
  return null;
}

function roundFromSeries(series) {
  const t = (series?.title ?? "").toLowerCase();
  if (t.includes("first round")) return "first-round";
  if (t.includes("semifinal")) return "conference-semifinals";
  if (t.includes("conference finals")) return "conference-finals";
  if (t.includes("nba finals") || t === "finals") return "finals";
  return "first-round";
}

function seriesKey(homeAbbr, awayAbbr) {
  return [homeAbbr, awayAbbr].sort().join("-");
}

function upsertGame(series, game) {
  const existing = series.games.find((g) => g.gameNumber === game.gameNumber);
  if (existing) Object.assign(existing, game);
  else series.games.push(game);
}

function buildSummary(s) {
  if (s.status === "upcoming") return "Series tied 0-0";
  if (s.status === "complete") {
    const winnerWins = Math.max(s.higherWins, s.lowerWins);
    const loserWins = Math.min(s.higherWins, s.lowerWins);
    return `${s.winner} wins ${winnerWins}-${loserWins}`;
  }
  if (s.higherWins === s.lowerWins) return `Series tied ${s.higherWins}-${s.lowerWins}`;
  const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
  return `${leader} leads ${Math.max(s.higherWins, s.lowerWins)}-${Math.min(s.higherWins, s.lowerWins)}`;
}

async function main() {
  mkdirSync(DATA_DIR, { recursive: true });
  const seriesMap = new Map(); // seriesKey -> series object

  for (let offset = -DAYS_BACK; offset <= DAYS_AHEAD; offset++) {
    const espnDate = toESPNDate(offset);
    let data;
    try {
      data = await fetchESPNCached(espnDate);
    } catch (err) {
      console.warn(`  [playoffs] skip ${espnDate}: ${err.message}`);
      continue;
    }
    for (const event of data.events ?? []) {
      if (!isPlayoffEvent(event)) continue;
      const comp = event.competitions[0];
      const home = comp.competitors.find((c) => c.homeAway === "home");
      const away = comp.competitors.find((c) => c.homeAway === "away");
      if (!home || !away) continue;

      const homeAbbr = home.team?.abbreviation ?? "";
      const awayAbbr = away.team?.abbreviation ?? "";
      const key = seriesKey(homeAbbr, awayAbbr);

      const conference = conferenceFromSeries(comp.series) ?? "east";
      const round = roundFromSeries(comp.series);
      const gameNumber = comp.series?.gameNumber ?? (comp.series?.summary?.match(/Game\s*(\d+)/i)?.[1] ? parseInt(RegExp.$1) : 1);
      const done = comp.status?.type?.completed ?? false;
      const live = comp.status?.type?.state === "in";

      if (!seriesMap.has(key)) {
        // First time we see this pair — seed from ESPN series info
        seriesMap.set(key, {
          seriesId: `${conference[0].toUpperCase()}-${homeAbbr}-${awayAbbr}`,
          conference,
          round,
          higherSeed: parseInt(home.curatedRank?.current ?? home.rank ?? "0") || 0,
          lowerSeed: parseInt(away.curatedRank?.current ?? away.rank ?? "0") || 0,
          higherTeam: homeAbbr,
          lowerTeam: awayAbbr,
          higherWins: 0,
          lowerWins: 0,
          status: "upcoming",
          summary: "",
          games: [],
        });
      }
      const series = seriesMap.get(key);

      upsertGame(series, {
        gameNumber,
        date: espnDate.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"),
        homeTeam: homeAbbr,
        awayTeam: awayAbbr,
        homeScore: done ? parseInt(home.score ?? "0") : null,
        awayScore: done ? parseInt(away.score ?? "0") : null,
        status: done ? "final" : live ? "live" : "scheduled",
        time: comp.status?.type?.shortDetail ?? "",
        tv: (comp.broadcasts ?? []).map((b) => b.names?.join(", ")).filter(Boolean).join(" / ") || "",
      });
    }
  }

  // Derive wins + status + summary per series
  for (const series of seriesMap.values()) {
    let higherWins = 0;
    let lowerWins = 0;
    for (const g of series.games) {
      if (g.status !== "final") continue;
      const higherIsHome = series.higherTeam === g.homeTeam;
      const higherScore = higherIsHome ? g.homeScore : g.awayScore;
      const lowerScore = higherIsHome ? g.awayScore : g.homeScore;
      if (higherScore > lowerScore) higherWins++;
      else lowerWins++;
    }
    series.higherWins = higherWins;
    series.lowerWins = lowerWins;
    const totalFinal = series.games.filter((g) => g.status === "final").length;
    if (higherWins >= 4) {
      series.status = "complete";
      series.winner = series.higherTeam;
    } else if (lowerWins >= 4) {
      series.status = "complete";
      series.winner = series.lowerTeam;
    } else if (totalFinal > 0) {
      series.status = "active";
    } else {
      series.status = "upcoming";
    }
    series.eliminationGame = series.status !== "complete" && (higherWins === 3 || lowerWins === 3);
    series.summary = buildSummary(series);
    series.games.sort((a, b) => a.gameNumber - b.gameNumber);
  }

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    seriesCount: seriesMap.size,
    series: [...seriesMap.values()].sort((a, b) => {
      if (a.conference !== b.conference) return a.conference.localeCompare(b.conference);
      return a.higherSeed - b.higherSeed;
    }),
  };

  const outPath = join(DATA_DIR, "playoff-series.json");
  writeFileSync(outPath, JSON.stringify(snapshot, null, 2), "utf8");
  console.log(`✅ Wrote ${snapshot.seriesCount} playoff series to ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
