#!/usr/bin/env node
// fetch-playoff-series.mjs — Reconstruct NBA playoff series from ESPN scoreboards.
//
// During the postseason, each game carries `competitions[0].series` metadata.
// We scan a window of dates, aggregate by matchup (pair of teams), derive
// wins, elimination flags, and stable seriesIds compatible with BracketPicker + Series Intel.
//
// Dedupes phantom rows when ESPN exposes placeholder future-round games under the wrong round
// label (same franchise in two simultaneous series). Resolved per conference+round by preferring
// series with more finals on the board.
//
// Output: .daily-data/playoff-series.json
// Next:   node scripts/sync-playoff-data.mjs

import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { toESPNDate } from "./lib/dates.mjs";
import { fetchESPNCached } from "./lib/espn-cache.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const DATA_DIR = join(ROOT, ".daily-data");

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

/** ESPN abbreviations → conference when `series.title` omits Eastern/Western. */
const TEAM_CONFERENCE = {
  ATL: "east",
  BOS: "east",
  BKN: "east",
  CHA: "east",
  CHI: "east",
  CLE: "east",
  DET: "east",
  IND: "east",
  MIA: "east",
  MIL: "east",
  NY: "east",
  NYK: "east",
  ORL: "east",
  PHI: "east",
  TOR: "east",
  WAS: "east",
  DAL: "west",
  DEN: "west",
  GSW: "west",
  HOU: "west",
  LAC: "west",
  LAL: "west",
  MEM: "west",
  MIN: "west",
  NOP: "west",
  OKC: "west",
  PHX: "west",
  POR: "west",
  SAC: "west",
  SA: "west",
  SAS: "west",
  UTA: "west",
};

function conferenceForTeam(abbr) {
  if (!abbr || abbr === "TBD") return null;
  return TEAM_CONFERENCE[String(abbr).toUpperCase()] ?? null;
}

function conferenceFromSeries(series, homeAbbr, awayAbbr) {
  const t = (series?.title ?? "").toLowerCase();
  if (t.includes("eastern")) return "east";
  if (t.includes("western")) return "west";
  if (/nba finals/.test(t) && !t.includes("conference")) return "finals";
  const hc = conferenceForTeam(homeAbbr);
  const ac = conferenceForTeam(awayAbbr);
  if (hc && ac) {
    if (hc === ac) return hc;
    return "finals";
  }
  return hc ?? ac ?? "east";
}

function roundFromSeries(series) {
  const t = (series?.title ?? "").toLowerCase();
  if (t.includes("first round")) return "first-round";
  if (t.includes("semifinal")) return "conference-semifinals";
  if (t.includes("conference finals")) return "conference-finals";
  if (t.includes("nba finals")) return "finals";
  return "first-round";
}

function roundRank(round) {
  switch (round) {
    case "first-round":
      return 1;
    case "conference-semifinals":
      return 2;
    case "conference-finals":
      return 3;
    case "finals":
      return 4;
    default:
      return 1;
  }
}

/** Lower numeric seed = better (NBA convention). */
function playoffSeed(c) {
  const raw = c?.curatedRank?.current ?? c?.rank ?? c?.seed ?? c?.team?.seed;
  const n = parseInt(String(raw ?? "").replace(/\D/g, "") || "99", 10);
  return Number.isFinite(n) && n > 0 && n < 99 ? n : 99;
}

function seriesKey(homeAbbr, awayAbbr) {
  return [homeAbbr, awayAbbr].sort().join("-");
}

function buildSeriesId(conference, round, higherTeam, lowerTeam) {
  const r = roundRank(round);
  const prefix = conference === "east" ? "E" : conference === "west" ? "W" : "F";
  return `${prefix}${r}-${higherTeam}-${lowerTeam}`;
}

function upsertGame(series, game) {
  const existing = series.games.find((g) => g.gameNumber === game.gameNumber);
  if (existing) Object.assign(existing, game);
  else series.games.push(game);
}

/** Pull box-score leader into `topPerformer` / `topLine`; removes ephemeral `espnEventId`. */
async function hydrateTopLines(seriesMap) {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  for (const series of seriesMap.values()) {
    for (const g of series.games) {
      if (g.status !== "final" || !g.espnEventId) continue;
      try {
        const res = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${g.espnEventId}`,
        );
        if (!res.ok) continue;
        const summary = await res.json();
        let leader = null;
        for (const side of summary.boxscore?.players ?? []) {
          const lbls = side.statistics?.[0]?.labels ?? [];
          const iPts = lbls.indexOf("PTS");
          const iReb = lbls.indexOf("REB");
          const iAst = lbls.indexOf("AST");
          if (iPts < 0) continue;
          for (const row of side.statistics?.[0]?.athletes ?? []) {
            const stats = row.stats ?? [];
            const pts = parseInt(stats[iPts], 10) || 0;
            const reb = parseInt(stats[iReb], 10) || 0;
            const ast = parseInt(stats[iAst], 10) || 0;
            if (!leader || pts > leader.pts) {
              leader = {
                pts,
                reb,
                ast,
                name: row.athlete?.displayName ?? row.athlete?.shortName ?? "Unknown",
              };
            }
          }
        }
        if (leader) {
          g.topPerformer = leader.name;
          g.topLine = `${leader.pts} PTS · ${leader.reb} REB · ${leader.ast} AST`;
        }
      } catch (err) {
        console.warn(`  [playoffs] top line event ${g.espnEventId}: ${err.message}`);
      }
      delete g.espnEventId;
      await sleep(80);
    }
  }
}

function buildSummary(s) {
  if (s.status === "upcoming") return "Series tied 0-0";
  if (s.status === "complete") {
    const w = Math.max(s.higherWins, s.lowerWins);
    const l = Math.min(s.higherWins, s.lowerWins);
    return `${s.winner} wins ${w}-${l}`;
  }
  if (s.higherWins === s.lowerWins) return `Series tied ${s.higherWins}-${s.lowerWins}`;
  const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
  return `${leader} leads ${Math.max(s.higherWins, s.lowerWins)}-${Math.min(s.higherWins, s.lowerWins)}`;
}

function matchupMapKey(series) {
  return [series.higherTeam, series.lowerTeam].sort().join("-");
}

/** Prefer series that already have final games over pure schedule placeholders sharing a team. */
function seriesEvidenceScore(s) {
  const finalN = s.games.filter((g) => g.status === "final").length;
  let sc = finalN * 1000 + s.games.length * 10;
  if (s.status === "complete") sc += 500;
  if (s.status === "active") sc += 200;
  const lastDate = [...s.games.map((g) => g.date)].sort().pop() ?? "";
  sc += Number(lastDate.replace(/-/g, "")) || 0;
  return sc;
}

/**
 * @param {Map<string, object>} seriesMap
 * @returns {Map<string, object>}
 */
function dedupeSeriesByConferenceRound(seriesMap) {
  const byBucket = new Map();
  for (const s of seriesMap.values()) {
    const b = `${s.conference}::${s.round}`;
    if (!byBucket.has(b)) byBucket.set(b, []);
    byBucket.get(b).push(s);
  }
  const out = new Map();
  for (const bucket of byBucket.values()) {
    bucket.sort((a, b) => seriesEvidenceScore(b) - seriesEvidenceScore(a));
    const usedTeams = new Set();
    for (const s of bucket) {
      const { higherTeam: t1, lowerTeam: t2 } = s;
      if (!t1 || !t2) continue;
      if (usedTeams.has(t1) || usedTeams.has(t2)) {
        console.warn(`  [playoffs] skip phantom overlap ${s.seriesId} (${t1} vs ${t2})`);
        continue;
      }
      usedTeams.add(t1);
      usedTeams.add(t2);
      out.set(matchupMapKey(s), s);
    }
  }
  return out;
}

async function main() {
  mkdirSync(DATA_DIR, { recursive: true });
  /** @type Map<string, object> */
  const seriesMap = new Map();

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
      if (!homeAbbr || !awayAbbr) continue;
      if (homeAbbr === "TBD" || awayAbbr === "TBD") continue;

      const key = seriesKey(homeAbbr, awayAbbr);
      const conference = conferenceFromSeries(comp.series, homeAbbr, awayAbbr);
      const round = roundFromSeries(comp.series);

      const hs = playoffSeed(home);
      const as = playoffSeed(away);
      const homeHigher = hs <= as;

      const higherTeam = homeHigher ? homeAbbr : awayAbbr;
      const lowerTeam = homeHigher ? awayAbbr : homeAbbr;
      const higherSeed = homeHigher ? hs : as;
      const lowerSeed = homeHigher ? as : hs;

      const gm = comp.series?.summary?.match(/Game\s*(\d+)/i);
      const gameNumber = comp.series?.gameNumber ?? (gm ? parseInt(gm[1], 10) : 1);
      const done = comp.status?.type?.completed ?? false;
      const live = comp.status?.type?.state === "in";

      if (!seriesMap.has(key)) {
        seriesMap.set(key, {
          seriesId: buildSeriesId(conference, round, higherTeam, lowerTeam),
          conference,
          round,
          higherSeed,
          lowerSeed,
          higherTeam,
          lowerTeam,
          higherWins: 0,
          lowerWins: 0,
          status: "upcoming",
          summary: "",
          games: [],
        });
      }
      const series = seriesMap.get(key);
      // Refresh metadata from the latest ESPN row (round text improves over time).
      series.seriesId = buildSeriesId(conference, round, series.higherTeam, series.lowerTeam);
      series.conference = conference;
      series.round = round;

      upsertGame(series, {
        gameNumber,
        ...(done ? { espnEventId: String(event.id) } : {}),
        date: espnDate.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3"),
        homeTeam: homeAbbr,
        awayTeam: awayAbbr,
        homeScore: done ? parseInt(home.score ?? "0", 10) : null,
        awayScore: done ? parseInt(away.score ?? "0", 10) : null,
        status: done ? "final" : live ? "live" : "scheduled",
        time: comp.status?.type?.shortDetail ?? "",
        tv: (comp.broadcasts ?? []).map((b) => b.names?.join(", ")).filter(Boolean).join(" / ") || "",
      });
    }
  }

  for (const series of seriesMap.values()) {
    let higherWins = 0;
    let lowerWins = 0;
    for (const g of series.games) {
      if (g.status !== "final") continue;
      const hs = g.homeScore ?? 0;
      const as = g.awayScore ?? 0;
      if (hs === as) continue;
      const winner = hs > as ? g.homeTeam : g.awayTeam;
      if (winner === series.higherTeam) higherWins++;
      else if (winner === series.lowerTeam) lowerWins++;
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

  // ESPN sometimes surfaces upcoming games for hypothetical later-round dates while still tagging
  // rows as current round — that creates impossible overlaps (same team "twice"). Keep the
  // highest-evidence series per team within each conference+round bucket.
  const seriesDedupedMap = dedupeSeriesByConferenceRound(seriesMap);

  console.log("  [playoffs] Hydrating top performers from box scores…");
  await hydrateTopLines(seriesDedupedMap);

  for (const s of seriesDedupedMap.values()) {
    for (const g of s.games) delete g.espnEventId;
  }

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    seriesCount: seriesDedupedMap.size,
    series: [...seriesDedupedMap.values()].sort((a, b) => {
      if (a.conference !== b.conference) return String(a.conference).localeCompare(String(b.conference));
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
