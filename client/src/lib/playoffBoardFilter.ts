import type { PlayoffRound, PlayoffSeries } from "./playoffData";

export type PlayoffBoardMode = "active" | "all";

const ROUND_RANK: Record<PlayoffRound, number> = {
  "first-round": 1,
  "conference-semifinals": 2,
  "conference-finals": 3,
  finals: 4,
};

function usable(series: PlayoffSeries[]): PlayoffSeries[] {
  return series.filter((s) => s.higherTeam !== "TBD" && s.lowerTeam !== "TBD");
}

export function seriesHasLiveGame(s: PlayoffSeries): boolean {
  return s.games.some((g) => g.status === "live");
}

function peakRoundForTeams(series: PlayoffSeries[]): Map<string, number> {
  const teamPeak = new Map<string, number>();
  for (const s of series) {
    const r = ROUND_RANK[s.round] ?? 1;
    for (const t of [s.higherTeam, s.lowerTeam]) {
      teamPeak.set(t, Math.max(teamPeak.get(t) ?? 0, r));
    }
  }
  return teamPeak;
}

/** Default board: current postseason round only — hides completed and orphaned early-round rows. */
export function filterPlayoffBoard(series: PlayoffSeries[], mode: PlayoffBoardMode): PlayoffSeries[] {
  const base = usable(series);
  if (mode === "all") return base;

  const teamPeak = peakRoundForTeams(base);
  const incomplete = base.filter((s) => s.status !== "complete");
  const peakIncomplete =
    incomplete.length > 0 ? Math.max(...incomplete.map((s) => ROUND_RANK[s.round] ?? 1)) : 0;

  return base.filter((s) => {
    if (seriesHasLiveGame(s)) return true;
    if (s.status === "complete") return false;

    const round = ROUND_RANK[s.round] ?? 1;
    const teamsAtPeak = [s.higherTeam, s.lowerTeam].every(
      (t) => (teamPeak.get(t) ?? 0) <= round || round >= peakIncomplete,
    );
    if (!teamsAtPeak) return false;

    return round >= peakIncomplete || Boolean(s.eliminationGame);
  });
}

export function sortPlayoffBoard(series: PlayoffSeries[]): PlayoffSeries[] {
  return [...series].sort((a, b) => {
    const liveA = seriesHasLiveGame(a) ? 1 : 0;
    const liveB = seriesHasLiveGame(b) ? 1 : 0;
    if (liveB !== liveA) return liveB - liveA;
    const roundDelta = (ROUND_RANK[b.round] ?? 0) - (ROUND_RANK[a.round] ?? 0);
    if (roundDelta !== 0) return roundDelta;
    if (a.status === "active" && b.status !== "active") return -1;
    if (b.status === "active" && a.status !== "active") return 1;
    return a.seriesId.localeCompare(b.seriesId);
  });
}

export function playoffBoardCounts(series: PlayoffSeries[]) {
  const all = usable(series);
  const active = filterPlayoffBoard(series, "active");
  return { all: all.length, active: active.length, live: all.filter(seriesHasLiveGame).length };
}
