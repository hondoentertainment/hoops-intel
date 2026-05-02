import { useState } from "react";
import { getTeamColor } from "../../lib/teamColors";
import type { PlayoffSeries } from "../../lib/playoffData";
import { seriesIntel } from "../../lib/playoffData";
import { nextPendingGame } from "../../lib/playoffAnalytics";
import { ExpandedSeriesPanel } from "./ExpandedSeriesPanel";
import { IntelSignals } from "./IntelSignals";
import {
  heroSentence,
  lastFinalGame,
  lastFinalGameFromGames,
  momentumLabel,
  sortSeries,
} from "./dashboardDerive";
import { SeriesTracker } from "./SeriesTracker";

function TeamMark({ team }: { team: string }) {
  const c = getTeamColor(team);
  return (
    <div
      className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center font-black text-[11px] text-white tracking-tight shadow-lg"
      style={{
        background: `linear-gradient(145deg, ${c}ee, ${c}66)`,
        boxShadow: `0 8px 24px ${c}33`,
      }}
    >
      {team}
    </div>
  );
}

interface SeriesCardProps {
  series: PlayoffSeries;
  defaultExpanded?: boolean;
}

export function SeriesCard({ series, defaultExpanded = false }: SeriesCardProps) {
  const [open, setOpen] = useState(defaultExpanded);
  const [focusedGame, setFocusedGame] = useState<number | undefined>(undefined);

  const last = lastFinalGame(series);
  const nx = nextPendingGame(series);
  const momentum = momentumLabel(series);
  const statusLabel =
    series.status === "complete" ? "Final" : series.status === "active" ? "In progress" : "Scheduled";

  const intel = seriesIntel[series.seriesId];

  return (
    <article
      className={[
        "group rounded-2xl border transition-all duration-200 ease-out",
        open ? "border-sky-500/35 bg-[#081424]" : "border-white/[0.08] bg-[#07101c]/90 hover:border-white/15 hover:bg-[#081424]",
        "backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full text-left p-4 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            <TeamMark team={series.higherTeam} />
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {series.higherTeam} vs {series.lowerTeam}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-white/50 border border-white/[0.08]">
                  {series.round.replace("-", " ")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-1.5 items-center">
                <span className="mono-data text-xl sm:text-2xl font-black text-white">
                  {series.higherWins}–{series.lowerWins}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide"
                  style={{
                    background: statusLabel === "Final" ? "rgba(244,63,94,0.12)" : "rgba(52,211,153,0.12)",
                    color: statusLabel === "Final" ? "#fb7185" : "#34d399",
                  }}
                >
                  {statusLabel}
                </span>
                <span className="text-lg" title="Momentum tilt">
                  {momentum === "hot" ? "🔥" : momentum === "split" ? "⚡️" : "❄️"}
                </span>
              </div>
            </div>
          </div>
          <TeamMark team={series.lowerTeam} />
        </div>

        <SeriesTracker
          games={series.games}
          higherTeam={series.higherTeam}
          lowerTeam={series.lowerTeam}
          highlightedGame={focusedGame ?? lastFinalGameFromGames(series.games)?.gameNumber}
          onHighlight={(n) => {
            setFocusedGame(n);
            setOpen(true);
          }}
        />

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
          <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 border border-white/[0.05]">
            <span className="text-white/40 uppercase text-[9px] block mb-0.5">Last</span>
            <span className="text-white/85 mono-data leading-snug">
              {last
                ? `${last.awayTeam} ${last.awayScore} @ ${last.homeTeam} ${last.homeScore} (Final)`
                : "— awaiting first final"}
            </span>
          </div>
          <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 border border-white/[0.05]">
            <span className="text-white/40 uppercase text-[9px] block mb-0.5">Next</span>
            <span className="text-white/80 leading-snug">
              {nx ? `${nx.time ?? nx.date}` : "Calendar TBD"}
            </span>
          </div>
          <div className="rounded-lg bg-sky-500/[0.08] px-2 py-1.5 border border-sky-500/20">
            <span className="text-sky-300/80 uppercase text-[9px] block mb-0.5">Insight</span>
            <span className="text-white/90 leading-snug line-clamp-2">{heroSentence(series)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 text-[10px] text-white/40">
          <span className="group-hover:text-sky-400/80 transition-colors">{open ? "Collapse" : "Tap for intel layer"}</span>
          <span className="mono-data">{open ? "▴" : "▾"}</span>
        </div>
      </button>

      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden min-h-0">
          <div className="px-4 pb-4">
            <IntelSignals series={series} />
            <ExpandedSeriesPanel series={series} intel={intel} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function sortedSeriesCardsData(seriesList: PlayoffSeries[]): PlayoffSeries[] {
  return [...seriesList].sort(sortSeries);
}
