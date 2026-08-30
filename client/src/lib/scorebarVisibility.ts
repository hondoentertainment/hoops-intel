import type { LiveGame } from "./espnApi";

/** Games that belong on the homepage ticker. Future preseason slates stay hidden in the offseason. */
export function scorebarGamesToShow(games: LiveGame[], offseason: boolean): LiveGame[] {
  if (!offseason) return games;
  return games.filter((g) => g.status === "in" || g.status === "post");
}

export function shouldShowLiveScorebar(games: LiveGame[], offseason: boolean): boolean {
  return scorebarGamesToShow(games, offseason).length > 0;
}
