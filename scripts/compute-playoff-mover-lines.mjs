#!/usr/bin/env node
// Computes playoffLine stats for PlayoffPulseMover rows from finalized games in
// .daily-data/playoff-series.json + ESPN summary box scores.
// Prints JSON suggestion to stdout; does not mutate files automatically.

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SNAP = join(ROOT, ".daily-data/playoff-series.json");

function isoToEspnDate(iso) {
  return iso.replace(/-/g, "");
}

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} ${res.status}`);
  return res.json();
}

async function findEventId(espnDate, homeAbbr, awayAbbr) {
  const board = await fetchJson(
    `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${espnDate}`,
  );
  for (const ev of board.events ?? []) {
    const comp = ev.competitions?.[0];
    const teams = comp?.competitors ?? [];
    const home = teams.find((c) => c.homeAway === "home")?.team?.abbreviation;
    const away = teams.find((c) => c.homeAway === "away")?.team?.abbreviation;
    if (home === homeAbbr && away === awayAbbr) return String(ev.id);
  }
  return null;
}

function parseFgPct(fgPair) {
  const m = String(fgPair || "0-0").match(/^(\d+)-(\d+)$/);
  if (!m) return null;
  const m1 = Number(m[1]);
  const a = Number(m[2]);
  if (!a) return null;
  return Math.round((m1 / a) * 1000) / 10;
}

function parsePlayersFromSummary(summary) {
  const out = [];
  const sides = summary?.boxscore?.players ?? [];
  for (const side of sides) {
    const team = side.team?.abbreviation ?? "";
    const lbls = side.statistics?.[0]?.labels ?? [];
    const idx = {
      pts: lbls.indexOf("PTS"),
      reb: lbls.indexOf("REB"),
      ast: lbls.indexOf("AST"),
      min: lbls.indexOf("MIN"),
      fg: lbls.indexOf("FG"),
    };
    if (idx.pts < 0) continue;
    for (const row of side.statistics?.[0]?.athletes ?? []) {
      const nm = row.athlete?.displayName ?? "";
      const stats = row.stats ?? [];
      const minPlayed = stats[idx.min] ?? "";
      if (nm && !String(minPlayed).includes(":") && parseInt(minPlayed, 10) < 14) continue;
      const pts = parseInt(stats[idx.pts], 10) || 0;
      const reb = parseInt(stats[idx.reb], 10) || 0;
      const ast = parseInt(stats[idx.ast], 10) || 0;
      const fgPct = parseFgPct(stats[idx.fg]);
      out.push({
        name: nm,
        team,
        pts,
        reb,
        ast,
        fgPct,
        fgStr: stats[idx.fg],
        minPlayed,
      });
    }
  }
  return out;
}

async function main() {
  const raw = JSON.parse(readFileSync(SNAP, "utf8"));
  /** @type {Array<{gameNumber:number, date:string, homeTeam:string, awayTeam:string, status:string}>} */
  const finals = [];
  for (const s of raw.series ?? []) {
    for (const g of s.games ?? []) {
      if (g.status !== "final") continue;
      finals.push({
        seriesId: s.seriesId,
        gameNumber: g.gameNumber,
        date: g.date,
        homeTeam: g.homeTeam,
        awayTeam: g.awayTeam,
      });
    }
  }

  /** @type Map<string,{pts:number,rebs:number,asts:number,games:number,name:string,team:string,shots:number}> */
  const agg = new Map();

  function key(nm, tm) {
    return `${nm}|${tm}`;
  }

  const gameRows = [];

  for (const g of finals) {
    const espnDate = isoToEspnDate(g.date);
    const gid = await findEventId(espnDate, g.homeTeam, g.awayTeam);
    if (!gid) {
      gameRows.push({ ...g, error: `no ESPN event for ${espnDate} ${g.awayTeam}@${g.homeTeam}` });
      continue;
    }
    const summary = await fetchJson(
      `https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${gid}`,
    );
    const players = parsePlayersFromSummary(summary);
    gameRows.push({ seriesId: g.seriesId, game: `${g.awayTeam}@${g.homeTeam}`, gid, leaders: players.length });
    for (const p of players) {
      const k = key(p.name, p.team);
      if (!agg.has(k)) {
        agg.set(k, {
          name: p.name,
          team: p.team,
          pts: 0,
          rebs: 0,
          asts: 0,
          games: 0,
          fgSum: 0,
          fgW: 0,
        });
      }
      const a = agg.get(k);
      a.pts += p.pts;
      a.rebs += p.reb;
      a.asts += p.ast;
      a.games += 1;
      if (p.fgPct != null) {
        a.fgSum += p.fgPct;
        a.fgW += 1;
      }
    }
  }

  const list = [...agg.values()].filter((a) => a.games > 0);
  list.sort((x, y) => y.pts / y.games - x.pts / x.games);

  const fmt = (a) =>
    `${(a.pts / a.games).toFixed(1)} PPG · ${(a.rebs / a.games).toFixed(1)} RPG · ${(a.asts / a.games).toFixed(1)} APG`;

  const fmtFg = (a) => {
    const fgAvg = a.fgW ? a.fgSum / a.fgW : null;
    return fgAvg != null ? `${(a.pts / a.games).toFixed(1)} PPG · ${fgAvg.toFixed(1)}% FG` : fmt(a);
  };

  const fallbackFallerStar = [...list]
    .filter((a) => a.pts / a.games < 22 && a.fgW > 0)
    .sort((a, b) => {
      const ra = a.pts / a.games;
      const rb = b.pts / b.games;
      const fa = a.fgSum / a.fgW;
      const fb = b.fgSum / b.fgW;
      return fa - fb || ra - rb;
    });

  console.log(JSON.stringify({ games: gameRows, topByPpg: list.slice(0, 25).map((a) => ({ ...a, line: fmt(a), ppg: a.pts / a.games })) }, null, 2));

  const pick = [];
  for (let i = 0; i < Math.min(3, list.length); i++) pick.push(list[i]);
  console.error("\n— Suggested movers (edit notes manually) —\n");

  pick.forEach((a, ix) =>
    console.error(
      `#${ix + 1} ${a.name} (${a.team})\n   playoffLine: "${fmt(a)}" (${a.games} GP)\n`,
    ),
  );

  const f =
    fallbackFallerStar.find((a) =>
      ["Ant", "Anthony", "Nikola", "Shai", "LeBron"].some((pfx) =>
        String(a.name).includes(pfx),
      ),
    ) || fallbackFallerStar[0];
  if (f) {
    console.error(
      `Faller candidate ${f.name} (${f.team})\n   playoffLine: "${fmtFg(f)}"\n`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
