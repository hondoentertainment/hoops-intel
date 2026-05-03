/**
 * Resolve winning team abbreviation from finalized box score rows shipped in editions.
 */

export interface FinalGameLite {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
}

export function winnerAbbrFromFinalGame(game: FinalGameLite): string | null {
  if ((game.status || "").toLowerCase() !== "final") return null;
  const hs = Number(game.homeScore);
  const as = Number(game.awayScore);
  if (!Number.isFinite(hs) || !Number.isFinite(as)) return null;
  return hs >= as ? game.homeTeam : game.awayTeam;
}
