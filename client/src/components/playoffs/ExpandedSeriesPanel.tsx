import { nextPendingGame } from "../../lib/playoffAnalytics";
import type { PlayoffSeries, SeriesIntel } from "../../lib/playoffData";
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

export function ExpandedSeriesPanel({ series, intel }: ExpandedSeriesPanelProps) {
  const last = lastFinalGame(series);
  const nx = nextPendingGame(series);
  const why = whyItMatters(series, intel?.narrative);

  return (
    <div className="border-t border-white/[0.06] mt-3 pt-3 space-y-3 animate-[fadeSlide_0.22s_ease-out]">
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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

      {intel ? (
        <div className="rounded-lg bg-sky-500/[0.06] px-3 py-2 border border-sky-500/20">
          <div className="text-[9px] font-bold uppercase text-sky-400/90 mb-1">Tape room</div>
          <p className="text-[11px] text-white/70 leading-relaxed">{intel.keyMatchup}</p>
        </div>
      ) : null}

      <div className="flex items-center justify-between rounded-lg border border-dashed border-white/10 px-3 py-2 text-[10px] text-white/40">
        <span>Highlights ingest</span>
        <span className="mono-data text-white/30">clips · roadmap</span>
      </div>
    </div>
  );
}
