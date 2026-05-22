// Short ticker lines synthesized from synced `playoffSeries` (prepend on Home ticker during playoffs).

import type { PlayoffSeries } from "./playoffData";
import { nextPendingGame, todayISOLocal } from "./playoffAnalytics";
import { playoffSeries, isPlayoffsActive } from "./playoffData";

export interface TickerPulseItem {
  text: string;
  type: "score" | "alert" | "news" | "injury";
}

const MAX_FINAL_ROWS = 14;
const MAX_PERF_SNIP = 42;

function seriesLeadText(s: PlayoffSeries): string {
  if (s.summary?.trim()) return s.summary.trim();
  const hi = Math.max(s.higherWins, s.lowerWins);
  const lo = Math.min(s.higherWins, s.lowerWins);
  if (hi === lo) return `${s.higherTeam} and ${s.lowerTeam} tied ${hi}-${lo}`;
  const leader = s.higherWins > s.lowerWins ? s.higherTeam : s.lowerTeam;
  return `${leader} leads ${hi}-${lo}`;
}

/** Live playoff games — highest ticker priority. */
export function buildPlayoffLiveTickerItems(series: PlayoffSeries[]): TickerPulseItem[] {
  const out: TickerPulseItem[] = [];
  for (const s of series) {
    for (const g of s.games) {
      if (g.status !== "live") continue;
      if (g.homeScore == null || g.awayScore == null) continue;
      out.push({
        type: "alert",
        text: `LIVE: ${g.awayTeam} ${g.awayScore} · ${g.homeTeam} ${g.homeScore} — ${seriesLeadText(s)}`,
      });
    }
  }
  return out;
}

/** Active series ledger lines for wire context (e.g. "OKC leads 1-0"). */
export function buildPlayoffSeriesLeadItems(series: PlayoffSeries[]): TickerPulseItem[] {
  return series
    .filter((s) => s.status === "active" && s.higherTeam !== "TBD" && s.lowerTeam !== "TBD")
    .slice(0, 6)
    .map((s) => ({
      type: "news" as const,
      text: `PLAYOFFS: ${s.higherTeam}-${s.lowerTeam} · ${seriesLeadText(s)}`,
    }));
}

/** Build factual FINAL: lines from completed playoff games (all rounds). Exported for tests. */
export function buildPlayoffFinalScoreTickerItems(series: PlayoffSeries[]): TickerPulseItem[] {
  const today = todayISOLocal();

  type Row = {
    date: string;
    gameNumber: number;
    awayTeam: string;
    homeTeam: string;
    awayScore: number;
    homeScore: number;
    topPerformer?: string;
    topLine?: string;
    seriesLead?: string;
  };

  const acc: Row[] = [];
  for (const s of series) {
    const lead = seriesLeadText(s);
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
        seriesLead: lead,
      });
    }
  }

  acc.sort((a, b) => {
    const aToday = a.date === today ? 1 : 0;
    const bToday = b.date === today ? 1 : 0;
    if (aToday !== bToday) return bToday - aToday;
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

    const leadBit = g.seriesLead ? ` · ${g.seriesLead}` : "";

    out.push({
      type: "score",
      text: `FINAL: ${g.awayTeam} ${g.awayScore}, ${g.homeTeam} ${g.homeScore} — G${g.gameNumber}${leadBit}${perf}`,
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
 * Full playoff wire: live games, then today's finals, then series ledger, then historical finals,
 * then NBA Finals scheduling rows; on Home, editorial `tickerItems` are appended separately.
 */
export function playoffTickerWireItems(): TickerPulseItem[] {
  if (!isPlayoffsActive()) return [];

  const live = buildPlayoffLiveTickerItems(playoffSeries);
  const finals = buildPlayoffFinalScoreTickerItems(playoffSeries);
  const leads = buildPlayoffSeriesLeadItems(playoffSeries);

  const liveKeys = new Set(live.map((i) => i.text));
  const finalKeys = new Set(finals.map((i) => i.text));
  const dedupedLeads = leads.filter((i) => !liveKeys.has(i.text) && !finalKeys.has(i.text));

  return [...live, ...finals, ...dedupedLeads, ...playoffTickerDerivedItems()];
}
