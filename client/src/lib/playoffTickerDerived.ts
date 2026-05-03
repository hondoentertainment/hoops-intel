// Short ticker lines synthesized from synced `playoffSeries` (prepend on Home ticker during playoffs).

import type { PlayoffSeries } from "./playoffData";
import { nextPendingGame } from "./playoffAnalytics";
import { playoffSeries, isPlayoffsActive } from "./playoffData";

export interface TickerPulseItem {
  text: string;
  type: "score" | "alert" | "news" | "injury";
}

const MAX_FINAL_ROWS = 14;
const MAX_PERF_SNIP = 42;

/** Build factual FINAL: lines from completed playoff games (all rounds). Exported for tests. */
export function buildPlayoffFinalScoreTickerItems(series: PlayoffSeries[]): TickerPulseItem[] {
  type Row = {
    date: string;
    gameNumber: number;
    awayTeam: string;
    homeTeam: string;
    awayScore: number;
    homeScore: number;
    topPerformer?: string;
    topLine?: string;
  };

  const acc: Row[] = [];
  for (const s of series) {
    for (const g of s.games) {
      if (g.status !== "final") continue;
      if (g.homeScore == null || g.awayScore == null) continue;
      acc.push({
        date: g.date,
        gameNumber: g.gameNumber,
        awayTeam: g.awayTeam,
        homeTeam: g.homeTeam,
        awayScore: g.awayScore,
        homeScore: g.homeScore,
        topPerformer: g.topPerformer,
        topLine: g.topLine,
      });
    }
  }

  acc.sort((a, b) => {
    const d = b.date.localeCompare(a.date);
    if (d !== 0) return d;
    return b.gameNumber - a.gameNumber;
  });

  const seen = new Set<string>();
  const out: TickerPulseItem[] = [];
  for (const g of acc) {
    const key = `${g.date}|${g.awayTeam}|${g.homeTeam}|${g.awayScore}|${g.homeScore}`;
    if (seen.has(key)) continue;
    seen.add(key);

    let perf = "";
    if (g.topPerformer && g.topLine) {
      const snip = g.topLine.replace(/\s*·\s*/g, " ").trim().slice(0, MAX_PERF_SNIP);
      perf = ` · ${g.topPerformer} ${snip}${g.topLine.length > MAX_PERF_SNIP ? "…" : ""}`;
    }

    out.push({
      type: "score",
      text: `FINAL: ${g.awayTeam} ${g.awayScore}, ${g.homeTeam} ${g.homeScore} — G${g.gameNumber}${perf}`,
    });
    if (out.length >= MAX_FINAL_ROWS) break;
  }

  return out;
}

/** Finals-only schedule / series-summary ticker rows (NBA Finals + next game hints). */
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

  const MAX_ROWS = 10;
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

/**
 * Full playoff wire: verified final scores from ESPN-synced `playoffSeries`, then NBA Finals
 * scheduling rows, then (on Home) editorial `tickerItems` are appended separately.
 */
export function playoffTickerWireItems(): TickerPulseItem[] {
  if (!isPlayoffsActive()) return [];
  return [...buildPlayoffFinalScoreTickerItems(playoffSeries), ...playoffTickerDerivedItems()];
}
