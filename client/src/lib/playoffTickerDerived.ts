// Short ticker lines synthesized from synced `playoffSeries` (prepend on Home ticker during playoffs).

import { nextPendingGame } from "./playoffAnalytics";
import { playoffSeries, isPlayoffsActive } from "./playoffData";

export interface TickerPulseItem {
  text: string;
  type: "score" | "alert" | "news" | "injury";
}

const MAX_ROWS = 10;

/** Finals-only ticker lines from synced `playoffSeries` (early rounds use pulseData ticker). */
export function playoffTickerDerivedItems(): TickerPulseItem[] {
  if (!isPlayoffsActive()) return [];

  const finalsRows = playoffSeries.filter((s) => s.round === "finals");
  if (finalsRows.length === 0) return [];

  const usable = finalsRows.filter((s) => s.higherTeam !== "TBD" && s.lowerTeam !== "TBD");

  const out: TickerPulseItem[] = [];
  if (usable.length === 0 && finalsRows.some((s) => s.higherTeam === "TBD" || s.lowerTeam === "TBD")) {
    out.push({
      type: "news",
      text: "NBA FINALS · ESPN sync in progress — matchup placeholders clear when the series locks.",
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
