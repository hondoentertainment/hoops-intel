// Derived playoff metrics from live ESPN-synced `playoffSeries` (playoffData.ts).

import type { PlayoffSeries, PlayoffSeriesGame } from "./playoffData";

export type WatchUrgency =
  | "eliminated"
  | "elimination"
  | "trailing"
  | "leading"
  | "tied"
  | "advancing";

export interface LiveEliminationRow {
  team: string;
  opponent: string;
  situation: string;
  gameInfo: string;
  urgency: WatchUrgency;
}

export interface TeamSeriesStats {
  team: string;
  gamesPlayed: number;
  ppg: number;
  oppPpg: number;
  margin: number;
}

export interface SeriesScoringEdge {
  seriesId: string;
  higher: TeamSeriesStats;
  lower: TeamSeriesStats;
  avgTotalPoints: number;
  /** Average absolute margin per game — lower = toss-up series */
  avgMargin: number;
}

export interface PlayoffSnapshot {
  teamsRemaining: number;
  teamsEliminated: number;
  gamesPlayed: number;
  seriesActive: number;
  seriesComplete: number;
  matchPointSeries: number;
  liveGames: number;
  scheduledToday: number;
  nextMilestone: string;
}

/** Local calendar date `YYYY-MM-DD` (user's timezone). */
export function todayISOLocal(): string {
  const n = new Date();
  const y = n.getFullYear();
  const m = String(n.getMonth() + 1).padStart(2, "0");
  const d = String(n.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function finalGames(games: PlayoffSeriesGame[]): PlayoffSeriesGame[] {
  return games.filter(
    (g) =>
      g.status === "final" &&
      g.homeScore != null &&
      g.awayScore != null &&
      g.homeScore !== g.awayScore,
  );
}

function teamTotalsInGame(team: string, g: PlayoffSeriesGame): { pf: number; pa: number } | null {
  if (g.homeTeam === team) return { pf: g.homeScore!, pa: g.awayScore! };
  if (g.awayTeam === team) return { pf: g.awayScore!, pa: g.homeScore! };
  return null;
}

export function scoringEdgeForSeries(s: Pick<PlayoffSeries, "seriesId" | "higherTeam" | "lowerTeam" | "games">): SeriesScoringEdge | null {
  const done = finalGames(s.games);
  if (done.length === 0) return null;

  let hPf = 0;
  let hPa = 0;
  let lPf = 0;
  let lPa = 0;
  let marginSum = 0;
  let totalPts = 0;

  for (const g of done) {
    const ht = teamTotalsInGame(s.higherTeam, g);
    const lt = teamTotalsInGame(s.lowerTeam, g);
    if (!ht || !lt) continue;
    hPf += ht.pf;
    hPa += ht.pa;
    lPf += lt.pf;
    lPa += lt.pa;
    marginSum += Math.abs(ht.pf - ht.pa);
    totalPts += (g.homeScore ?? 0) + (g.awayScore ?? 0);
  }

  const hn = done.length;
  const ln = done.length;

  return {
    seriesId: s.seriesId,
    higher: {
      team: s.higherTeam,
      gamesPlayed: hn,
      ppg: Math.round((hPf / hn) * 10) / 10,
      oppPpg: Math.round((hPa / hn) * 10) / 10,
      margin: Math.round(((hPf - hPa) / hn) * 10) / 10,
    },
    lower: {
      team: s.lowerTeam,
      gamesPlayed: ln,
      ppg: Math.round((lPf / ln) * 10) / 10,
      oppPpg: Math.round((lPa / ln) * 10) / 10,
      margin: Math.round(((lPf - lPa) / ln) * 10) / 10,
    },
    avgTotalPoints: Math.round((totalPts / done.length) * 10) / 10,
    avgMargin: Math.round((marginSum / done.length) * 10) / 10,
  };
}

function loserOf(s: PlayoffSeries): string | undefined {
  if (s.status !== "complete" || !s.winner) return undefined;
  return s.higherTeam === s.winner ? s.lowerTeam : s.higherTeam;
}

export function playoffSnapshot(series: PlayoffSeries[], todayIso: string): PlayoffSnapshot {
  const allTeams = new Set<string>();
  const losers = new Set<string>();

  let gamesPlayed = 0;
  let seriesComplete = 0;
  let seriesActive = 0;
  let matchPoint = 0;
  let liveGames = 0;
  let scheduledToday = 0;

  for (const s of series) {
    allTeams.add(s.higherTeam);
    allTeams.add(s.lowerTeam);

    const l = loserOf(s);
    if (l) losers.add(l);

    for (const g of s.games) {
      if (g.status === "final") gamesPlayed++;
      else if (g.status === "live") liveGames++;
      if (g.date === todayIso && g.status !== "final") scheduledToday++;
    }

    if (s.status === "complete") seriesComplete++;
    else if (s.status === "active") seriesActive++;

    if (s.eliminationGame && s.status !== "complete") matchPoint++;
  }

  const teamsEliminated = losers.size;
  const teamsRemaining = Math.max(0, allTeams.size - teamsEliminated);

  let nextMilestone = "";
  if (matchPoint > 0) nextMilestone = `${matchPoint} series at match point`;
  else if (scheduledToday > 0) nextMilestone = `${scheduledToday} game${scheduledToday === 1 ? "" : "s"} on the calendar today`;
  else if (liveGames > 0) nextMilestone = `${liveGames} live now`;
  else nextMilestone = `${seriesActive + seriesComplete} series tracked`;

  return {
    teamsRemaining,
    teamsEliminated,
    gamesPlayed,
    seriesActive,
    seriesComplete,
    matchPointSeries: matchPoint,
    liveGames,
    scheduledToday,
    nextMilestone,
  };
}

/** Next game in the series that is not yet final (scheduled or live). */
export function nextPendingGame(s: PlayoffSeries): PlayoffSeriesGame | undefined {
  const pending = s.games.filter((g) => g.status !== "final");
  if (pending.length === 0) return undefined;
  pending.sort((a, b) => a.gameNumber - b.gameNumber);
  return pending[0];
}

function formatShortDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const d = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function gameBlurb(g: PlayoffSeriesGame): string {
  const date = formatShortDate(g.date);
  const when = [date, g.time].filter(Boolean).join(" · ");
  return `${g.awayTeam} @ ${g.homeTeam}${when ? ` — ${when}` : ""}${g.tv ? ` · ${g.tv}` : ""}`;
}

/** Human-readable standings line for two teams */
function ledger(hTeam: string, hW: number, lTeam: string, lW: number): string {
  if (hW === lW) return `${hTeam} and ${lTeam} tied ${hW}-${lW}`;
  const leadTeam = hW > lW ? hTeam : lTeam;
  const trailTeam = hW > lW ? lTeam : hTeam;
  const hi = Math.max(hW, lW);
  const lo = Math.min(hW, lW);
  return `${leadTeam} leads ${trailTeam} ${hi}-${lo}`;
}

export function buildLiveEliminationRows(series: PlayoffSeries[]): LiveEliminationRow[] {
  const rows: LiveEliminationRow[] = [];

  const tieLineFor = (s: PlayoffSeries) => ledger(s.higherTeam, s.higherWins, s.lowerTeam, s.lowerWins);

  for (const s of series) {
    const upcoming = nextPendingGame(s);
    const info = upcoming ? gameBlurb(upcoming) : s.summary;

    if (s.status === "complete" && s.winner) {
      const out = loserOf(s)!;
      const win = s.winner;
      rows.push({
        team: out,
        opponent: win,
        situation: `${out} eliminated (${tieLineFor(s)})`,
        gameInfo: "Series complete",
        urgency: "eliminated",
      });
      rows.push({
        team: win,
        opponent: out,
        situation: `${win} advances (${tieLineFor(s)})`,
        gameInfo: "Series complete",
        urgency: "advancing",
      });
      continue;
    }

    const hw = s.higherWins;
    const lw = s.lowerWins;

    if (hw === lw) {
      const u: WatchUrgency = s.eliminationGame ? "elimination" : "tied";
      const sit = s.eliminationGame
        ? `Next win advances — ${s.higherTeam} and ${s.lowerTeam} locked at ${hw}-${lw}`
        : `Series knotted ${hw}-${lw}`;
      rows.push({
        team: s.higherTeam,
        opponent: s.lowerTeam,
        situation: sit,
        gameInfo: info,
        urgency: u,
      });
      rows.push({
        team: s.lowerTeam,
        opponent: s.higherTeam,
        situation: sit,
        gameInfo: info,
        urgency: u,
      });
      continue;
    }

    const higherLeads = hw > lw;
    const leaderTeam = higherLeads ? s.higherTeam : s.lowerTeam;
    const trailerTeam = higherLeads ? s.lowerTeam : s.higherTeam;
    const leadW = Math.max(hw, lw);
    const trailW = Math.min(hw, lw);

    const matchPointForLeader = leadW === 3 && trailW < 3;

    rows.push({
      team: leaderTeam,
      opponent: trailerTeam,
      situation: matchPointForLeader ? `${leaderTeam} can clinch (${tieLineFor(s)})` : `${leaderTeam} leads (${tieLineFor(s)})`,
      gameInfo: info,
      urgency: matchPointForLeader ? "advancing" : "leading",
    });
    rows.push({
      team: trailerTeam,
      opponent: leaderTeam,
      situation: matchPointForLeader ? `${trailerTeam} faces elimination (${tieLineFor(s)})` : `${trailerTeam} trails (${tieLineFor(s)})`,
      gameInfo: info,
      urgency: matchPointForLeader ? "elimination" : "trailing",
    });
  }

  rows.sort((a, b) => {
    const order: Record<WatchUrgency, number> = {
      elimination: 0,
      eliminated: 1,
      tied: 2,
      trailing: 3,
      leading: 4,
      advancing: 5,
    };
    return order[a.urgency] - order[b.urgency] || a.team.localeCompare(b.team);
  });

  return rows;
}

export function sortedSeriesByCompetitiveness(series: PlayoffSeries[]): PlayoffSeries[] {
  const scored = series.map((s) => {
    const edge = scoringEdgeForSeries(s);
    const key = edge ? edge.avgMargin : 999;
    return { s, key };
  });
  scored.sort((a, b) => a.key - b.key);
  return scored.map((x) => x.s);
}
