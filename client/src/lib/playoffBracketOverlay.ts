import type { PlayoffSeries as BracketSeries } from "./playoffBracketData";
import { playoffSeries, type PlayoffSeries as LiveSeries } from "./playoffData";

const ROUND_TO_NUM: Record<LiveSeries["round"], number> = {
  "first-round": 1,
  "conference-semifinals": 2,
  "conference-finals": 3,
  finals: 4,
};

function norm(t: string): string {
  const u = t.toUpperCase();
  if (u === "NY") return "NYK";
  if (u === "SA") return "SAS";
  return u;
}

function teamsMatch(a: BracketSeries, b: LiveSeries): boolean {
  const setA = new Set([norm(a.higherTeam), norm(a.lowerTeam)]);
  const setB = new Set([norm(b.higherTeam), norm(b.lowerTeam)]);
  return setA.size === setB.size && [...setA].every((t) => setB.has(t));
}

function findLiveBoard(bracket: BracketSeries, liveBoard: LiveSeries[]): LiveSeries | undefined {
  const targetRound = bracket.round;
  return liveBoard.find(
    (s) => ROUND_TO_NUM[s.round] === targetRound && teamsMatch(bracket, s),
  );
}

/** Overlay editorial bracket nodes with ESPN-synced scores from `playoffData`. */
export function overlayBracketWithLiveBoard(
  series: BracketSeries[],
  liveBoard: LiveSeries[] = playoffSeries,
): BracketSeries[] {
  return series.map((b) => {
    const live = findLiveBoard(b, liveBoard);
    if (!live) return b;

    return {
      ...b,
      higherWins: live.higherWins,
      lowerWins: live.lowerWins,
      status: live.status === "upcoming" ? "active" : live.status,
      winner: live.winner,
      eliminationGame: live.eliminationGame,
      games: live.games.map((g) => ({
        gameNumber: g.gameNumber,
        date: g.date,
        time: g.time,
        tv: g.tv,
        homeTeam: g.homeTeam,
        awayTeam: g.awayTeam,
        homeScore: g.homeScore,
        awayScore: g.awayScore,
        status: g.status,
        topPerformer: g.topPerformer,
        topPerformerLine: g.topLine,
      })),
    };
  });
}

export function deriveBracketMetaFromLive(liveBoard: LiveSeries[] = playoffSeries) {
  const cf = liveBoard.filter((s) => s.round === "conference-finals");
  const active = liveBoard.filter((s) => s.status !== "complete");
  const liveN = liveBoard.filter((s) => s.games.some((g) => g.status === "live")).length;

  const parts: string[] = [];
  for (const s of cf) {
    parts.push(`${s.higherTeam} vs ${s.lowerTeam}: ${s.summary}`);
  }

  return {
    lastUpdated: new Date().toISOString().slice(0, 10),
    currentRound:
      cf.length > 0
        ? `Conference Finals${liveN ? ` · ${liveN} live` : ""}`
        : "Playoffs — synced board",
    nextMilestone: parts[0] ?? "Follow series cards for next tip times.",
    teamsRemaining: new Set(
      active.flatMap((s) => [norm(s.higherTeam), norm(s.lowerTeam)]),
    ).size,
  };
}
