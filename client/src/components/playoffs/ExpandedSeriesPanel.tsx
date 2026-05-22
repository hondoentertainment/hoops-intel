import { useCallback, useState } from "react";
import { nextPendingGame } from "../../lib/playoffAnalytics";
import type { PlayoffSeries, SeriesIntel } from "../../lib/playoffData";
import { resolveSeriesIntel } from "../../lib/playoffData";
import {
  heroSentence,
  keyStatLabel,
  lastFinalGame,
  lastGameSummaryLine,
  trendLine,
  whyItMatters,
} from "./dashboardDerive";

interface ExpandedSeriesPanelProps {
  series: PlayoffSeries;
  intel?: SeriesIntel;
}

function seriesShareSnippet(series: PlayoffSeries): { text: string; url: string } {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const url = `${origin}/playoffs#series-card-${series.seriesId}`;
  const text = `${series.higherTeam} ${series.higherWins}–${series.lowerWins} ${series.lowerTeam} · ${series.summary}\n${url}`;
  return { text, url };
}

export function ExpandedSeriesPanel({ series, intel }: ExpandedSeriesPanelProps) {
  const intelRow = intel ?? resolveSeriesIntel(series);
  const last = lastFinalGame(series);
  const nx = nextPendingGame(series);
  const why = whyItMatters(series, intelRow.narrative);
  const [copied, setCopied] = useState(false);
  const share = seriesShareSnippet(series);

  const copyShare = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(share.text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable */
    }
  }, [share.text]);

  return (
    <div className="border-t border-white/[0.06] mt-3 pt-3 space-y-3 animate-[fadeSlide_0.22s_ease-out]">
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="rounded-lg border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.06] to-transparent px-3 py-2.5">
        <div className="text-[9px] font-bold uppercase tracking-wider text-violet-300/90 mb-2">H2H series intel</div>
        <p className="text-[11px] text-white/75 leading-relaxed">
          <span className="font-semibold text-white/88">Regular season:</span> {intelRow.regularSeasonH2H}
        </p>
        <p className="text-[11px] text-white/75 leading-relaxed mt-2">
          <span className="font-semibold text-white/88">Playoff history:</span> {intelRow.playoffHistory}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-white/[0.03] px-3 py-2 border border-white/[0.05]">
          <div className="text-[9px] font-bold uppercase tracking-wider text-white/40 mb-1">Last game</div>
          <p className="text-xs text-white/80 leading-relaxed">{lastGameSummaryLine(series)}</p>
          {last?.topPerformer ? (
            <div className="mono-data text-[11px] text-sky-300/90 mt-1.5">★ {last.topPerformer}</div>
          ) : null}
          {last?.topLine ? <div className="mono-data text-[10px] text-white/55 mt-0.5">{last.topLine}</div> : null}
        </div>
        <div className="rounded-lg bg-white/[0.03] px-3 py-2 border border-white/[0.05]">
          <div className="text-[9px] font-bold uppercase tracking-wider text-white/40 mb-1">Next</div>
          {nx ? (
            <p className="text-xs text-white/85">
              Game {nx.gameNumber} · {nx.time ?? nx.date}
              {nx.tv ? <span className="text-white/50"> · {nx.tv}</span> : null}
            </p>
          ) : (
            <p className="text-xs text-white/50">Schedule TBD · check scoreboard refresh.</p>
          )}
          <p className="text-[11px] text-emerald-300/80 mt-1.5 leading-snug">{heroSentence(series)}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-2">
        <div className="rounded-lg bg-black/30 px-2 py-2 border border-white/[0.06]">
          <div className="text-[9px] uppercase text-white/38">Key stat</div>
          <div className="text-[11px] text-white/75 mt-0.5 leading-snug">{keyStatLabel(series)}</div>
        </div>
        <div className="rounded-lg bg-black/30 px-2 py-2 border border-white/[0.06]">
          <div className="text-[9px] uppercase text-white/38">Series trend</div>
          <div className="text-[11px] text-white/75 mt-0.5 leading-snug">{trendLine(series)}</div>
        </div>
        <div className="rounded-lg bg-black/30 px-2 py-2 border border-white/[0.06] sm:col-span-1">
          <div className="text-[9px] uppercase text-white/38">Why it matters</div>
          <div className="text-[11px] text-white/78 mt-0.5 leading-snug">{why}</div>
        </div>
      </div>

      <div className="rounded-lg bg-sky-500/[0.06] px-3 py-2 border border-sky-500/20">
        <div className="text-[9px] font-bold uppercase text-sky-400/90 mb-1">Tape room</div>
        <p className="text-[11px] text-white/70 leading-relaxed">{intelRow.keyMatchup}</p>
        <p className="text-[10px] text-white/48 leading-snug mt-1.5 line-clamp-3">{intelRow.narrative}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-dashed border-white/10 px-3 py-2">
        <div className="min-w-0 flex-1">
          <div className="text-[9px] font-bold uppercase text-white/40 mb-0.5">Share series</div>
          <p className="text-[10px] text-white/50 mono-data truncate" title={share.url}>
            {share.url.replace(/^https?:\/\//, "")}
          </p>
        </div>
        <button
          type="button"
          onClick={copyShare}
          className="tap-target shrink-0 rounded-lg border border-sky-500/35 bg-sky-500/10 px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-sky-300 hover:bg-sky-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60"
          aria-label={copied ? "Series link copied" : `Copy share link for ${series.higherTeam} vs ${series.lowerTeam}`}
        >
          {copied ? "Copied ✓" : "Copy link"}
        </button>
      </div>

      <div className="flex items-center justify-between rounded-lg border border-dashed border-white/10 px-3 py-2 text-[10px] text-white/40">
        <span>Highlights ingest</span>
        <span className="mono-data text-white/30">clips · roadmap</span>
      </div>
    </div>
  );
}
