// Short ticker lines synthesized from synced `playoffSeries` (prepend on Home ticker during playoffs).

import { nextPendingGame } from "./playoffAnalytics";
import { playoffSeries, isPlayoffsActive } from "./playoffData";

export interface TickerPulseItem {
  text: string;
  type: "score" | "alert" | "news" | "injury";
}

const MAX_ROWS = 10;

/** One row per real matchup (both teams known), capped for ticker length. */
export function playoffTickerDerivedItems(): TickerPulseItem[] {
  if (!isPlayoffsActive()) return [];

  const usable = playoffSeries.filter((s) => s.higherTeam !== "TBD" && s.lowerTeam !== "TBD");

  const out: TickerPulseItem[] = [];
  if (usable.length === 0 && playoffSeries.some((s) => s.higherTeam === "TBD" || s.lowerTeam === "TBD")) {
    out.push({
      type: "news",
      text: "PLAYOFF BOARD · ESPN sync in progress — TBD placeholders clear when matchups lock.",
    });
    return out;
  }

  for (const s of usable.slice(0, MAX_ROWS)) {
    const nx = nextPendingGame(s);
    const sched = nx
      ? ` · Next G${nx.gameNumber}: ${nx.awayTeam}@${nx.homeTeam}${nx.time ? ` (${nx.time})` : ""}`
      : "";
    out.push({
      type: "score",
      text: `${s.higherTeam}-${s.lowerTeam}: ${s.summary}.${sched}`,
    });
  }

  return out;
}
