import type { PlayoffSeries, PlayoffSeriesGame } from "./playoffData";
import type { LiveGame } from "./espnApi";

function norm(abbr: string): string {
  const u = abbr.toUpperCase();
  if (u === "NY") return "NYK";
  if (u === "SA") return "SAS";
  return u;
}

function matchLiveGame(game: PlayoffSeriesGame, live: LiveGame[]): LiveGame | undefined {
  const home = norm(game.homeTeam);
  const away = norm(game.awayTeam);
  return live.find(
    (lg) =>
      (norm(lg.homeTeam) === home && norm(lg.awayTeam) === away) ||
      (norm(lg.homeTeam) === away && norm(lg.awayTeam) === home),
  );
}

/** Overlay ESPN live scores onto synced playoff rows for in-progress games. */
export function mergePlayoffSeriesWithLive(
  series: PlayoffSeries[],
  liveGames: LiveGame[] | undefined,
): PlayoffSeries[] {
  if (!liveGames?.length) return series;

  return series.map((s) => {
    const games = s.games.map((g) => {
      if (g.status !== "live" && g.status !== "scheduled") return g;
      const lg = matchLiveGame(g, liveGames);
      if (!lg || lg.status !== "in") return g;

      const home = norm(g.homeTeam);
      const homeScore = norm(lg.homeTeam) === home ? lg.homeScore : lg.awayScore;
      const awayScore = norm(lg.homeTeam) === home ? lg.awayScore : lg.homeScore;

      return {
        ...g,
        status: "live" as const,
        homeScore,
        awayScore,
        time: lg.statusDetail || lg.clock || g.time,
      };
    });

    return { ...s, games };
  });
}
