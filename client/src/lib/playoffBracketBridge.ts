// Links editorial bracket nodes (`playoffBracketData`) to the live ESPN board (`playoffData`).

import type { PlayoffSeries as BracketSeries, PlayoffGame } from "./playoffBracketData";
import { playoffSeriesForMatchup } from "./playoffData";

export function lastBracketFinalGame(s: BracketSeries): PlayoffGame | undefined {
  const finals = s.games.filter(
    (g) => g.status === "final" && g.homeScore != null && g.awayScore != null && g.homeScore !== g.awayScore,
  );
  if (finals.length === 0) return undefined;
  return finals.reduce((a, b) => (a.gameNumber > b.gameNumber ? a : b));
}

export function bracketSeriesLeadLine(s: BracketSeries): string {
  if (s.status === "complete" && s.winner) {
    const hi = Math.max(s.higherWins, s.lowerWins);
    const lo = Math.min(s.higherWins, s.lowerWins);
    return `${s.winner} wins ${hi}-${lo}`;
  }
  const hi = Math.max(s.higherWins, s.lowerWins);
  const lo = Math.min(s.higherWins, s.lowerWins);
  if (hi === lo) return `Tied ${hi}-${lo}`;
  const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
  return `${leader} leads ${hi}-${lo}`;
}

export function lastBracketFinalScoreLine(s: BracketSeries): string | undefined {
  const g = lastBracketFinalGame(s);
  if (!g || g.awayScore == null || g.homeScore == null) return undefined;
  return `${g.awayTeam} ${g.awayScore}-${g.homeScore} ${g.homeTeam}`;
}

/** Deep-link to the synced series card when teams match; otherwise bracket id. */
export function playoffsHrefForBracketSeries(s: BracketSeries): string {
  const live =
    playoffSeriesForMatchup(s.higherTeam, s.lowerTeam) ??
    playoffSeriesForMatchup(s.lowerTeam, s.higherTeam);
  const id = live?.seriesId ?? s.seriesId;
  return `/playoffs#series-card-${id}`;
}
