/**
 * Compare user Pick'em choices vs editorial desk picks from pulseData gamePreviews.
 */

import { parseWinnerFromPrediction } from "./editionPredictionStats";
import { winnerAbbrFromFinalGame, type FinalGameLite } from "./pickSettlement";

export interface GamePreviewPickLike {
  homeTeam: string;
  awayTeam: string;
  prediction?: string;
  gameId?: string;
}

export interface BeatDeskPickRow {
  gameId: string;
  matchup: string;
  userPick: string | null;
  deskPick: string | null;
  agree: boolean | null;
  userCorrect: boolean | null;
  deskCorrect: boolean | null;
  winner: string | null;
  final: boolean;
}

export interface BeatTheDeskSummary {
  picksCompared: number;
  agreeCount: number;
  userWins: number;
  userLosses: number;
  userPending: number;
  deskWins: number;
  deskLosses: number;
  deskPending: number;
  userBeatDesk: number;
  deskBeatUser: number;
  rows: BeatDeskPickRow[];
}

export function deskPickForGame(game: GamePreviewPickLike): string | null {
  return parseWinnerFromPrediction(game.prediction ?? "");
}

export function gameIdForPreview(game: GamePreviewPickLike, editionDate: string): string {
  if (game.gameId) return game.gameId;
  const dateCompact = editionDate.replace(/-/g, "");
  return `${game.awayTeam}-${game.homeTeam}-${dateCompact}`;
}

export function readUserPicksForEdition(editionDate: string): Record<string, string> {
  if (typeof localStorage === "undefined") return {};
  try {
    const raw = localStorage.getItem(`hoops-intel-picks-${editionDate}`);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function indexResults(
  results: (FinalGameLite & { gameId?: string })[],
  editionDate: string,
): Map<string, FinalGameLite & { gameId?: string }> {
  const map = new Map<string, FinalGameLite & { gameId?: string }>();
  const dateCompact = editionDate.replace(/-/g, "");
  for (const r of results) {
    if (r.gameId) map.set(r.gameId, r);
    map.set(`${r.awayTeam}-${r.homeTeam}-${dateCompact}`, r);
    map.set(`${r.homeTeam}-${r.awayTeam}-${dateCompact}`, r);
  }
  return map;
}

export function computeBeatTheDesk(
  games: GamePreviewPickLike[],
  editionDate: string,
  results: (FinalGameLite & { gameId?: string })[] = [],
): BeatTheDeskSummary {
  const userPicks = readUserPicksForEdition(editionDate);
  const resultsById = indexResults(results, editionDate);

  let picksCompared = 0;
  let agreeCount = 0;
  let userWins = 0;
  let userLosses = 0;
  let userPending = 0;
  let deskWins = 0;
  let deskLosses = 0;
  let deskPending = 0;
  let userBeatDesk = 0;
  let deskBeatUser = 0;
  const rows: BeatDeskPickRow[] = [];

  for (const g of games) {
    const gameId = gameIdForPreview(g, editionDate);
    const deskPick = deskPickForGame(g);
    const userPick = userPicks[gameId] ?? null;
    const result = resultsById.get(gameId);
    const winner = result ? winnerAbbrFromFinalGame(result) : null;
    const final = winner !== null;

    const agree = userPick && deskPick ? userPick === deskPick : null;
    if (userPick && deskPick) {
      picksCompared += 1;
      if (agree) agreeCount += 1;
    }

    let userCorrect: boolean | null = null;
    let deskCorrect: boolean | null = null;

    if (final && userPick) {
      userCorrect = userPick === winner;
      if (userCorrect) userWins += 1;
      else userLosses += 1;
    } else if (userPick) {
      userPending += 1;
    }

    if (final && deskPick) {
      deskCorrect = deskPick === winner;
      if (deskCorrect) deskWins += 1;
      else deskLosses += 1;
    } else if (deskPick) {
      deskPending += 1;
    }

    if (final && userPick && deskPick) {
      if (userCorrect && !deskCorrect) userBeatDesk += 1;
      if (deskCorrect && !userCorrect) deskBeatUser += 1;
    }

    rows.push({
      gameId,
      matchup: `${g.awayTeam} @ ${g.homeTeam}`,
      userPick,
      deskPick,
      agree,
      userCorrect,
      deskCorrect,
      winner,
      final,
    });
  }

  return {
    picksCompared,
    agreeCount,
    userWins,
    userLosses,
    userPending,
    deskWins,
    deskLosses,
    deskPending,
    userBeatDesk,
    deskBeatUser,
    rows,
  };
}
