/**
 * Transparency helpers: compare Pulse-ranked stars to final scores from the edition.
 * Pure logic — tested without Supabase so Pick’em accountability can cite methodology.
 */

export interface GameFinalRow {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: string;
}

export interface PulsePlayerRow {
  rank: number;
  player: string;
  team: string;
}

function winningAbbr(game: Pick<GameFinalRow, "homeTeam" | "awayTeam" | "homeScore" | "awayScore">): string {
  return game.homeScore >= game.awayScore ? game.homeTeam : game.awayTeam;
}

/** Game involving this team abbreviation (handles home/away). */
export function gameForTeam(
  games: GameFinalRow[],
  teamAbbr: string,
): GameFinalRow | undefined {
  const u = teamAbbr.toUpperCase();
  return games.find(
    (g) =>
      g.status === "final" &&
      (g.homeTeam.toUpperCase() === u || g.awayTeam.toUpperCase() === u),
  );
}

/**
 * For each Pulse row in `topPlayers`, sees if they played in a finalized game listed
 * in `games` whose winner matches their Pulse team. Rows with no matching game omitted.
 */
export function computePulseTopAlignment(
  games: GameFinalRow[],
  topPlayers: PulsePlayerRow[],
  opts?: { topN?: number },
): {
  sampled: number;
  onWinningSide: number;
  ratePct: number | null;
  details: Array<{
    rank: number;
    player: string;
    team: string;
    aligned: boolean | null;
  }>;
} {
  const n = opts?.topN ?? topPlayers.length;
  const slice = [...topPlayers].sort((a, b) => a.rank - b.rank).slice(0, n);

  let sampled = 0;
  let onWinningSide = 0;

  const details = slice.map((p) => {
    const g = gameForTeam(games, p.team);
    if (!g) {
      return {
        rank: p.rank,
        player: p.player,
        team: p.team,
        aligned: null,
      };
    }
    sampled++;
    const wins = winningAbbr(g);
    const ok = wins === p.team.toUpperCase();
    if (ok) onWinningSide++;
    return { rank: p.rank, player: p.player, team: p.team, aligned: ok };
  });

  return {
    sampled,
    onWinningSide,
    ratePct: sampled === 0 ? null : Math.round((100 * onWinningSide) / sampled),
    details,
  };
}
