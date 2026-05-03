import { useEffect, useMemo, useState } from "react";
import { playoffSeries, playoffMovers } from "../../lib/playoffData";
import { nextPendingGame, playoffSnapshot, todayISOLocal } from "../../lib/playoffAnalytics";
import {
  buildTakeaways,
  formatShortDate,
  heroSentence,
  lastFinalGame,
  pickHeroPool,
  usableSeries,
} from "./dashboardDerive";
import { getTeamColor } from "../../lib/teamColors";
import { PlayoffsSkeleton } from "./PlayoffsSkeleton";
import { SeriesCard, sortedSeriesCardsData } from "./SeriesCard";
import { TakeawaysSection } from "./TakeawaysSection";
import SiteHeader from "../../components/SiteHeader";
import { PlayoffMoversDesk } from "./PlayoffMoversDesk";

function StickyRibbon() {
  const snap = playoffSnapshot(playoffSeries, todayISOLocal());
  return (
    <div
      className="sticky top-14 z-30 border-b border-white/[0.06] backdrop-blur-xl sm:top-14"
      style={{ background: "rgba(5,10,18,0.92)" }}
    >
      <div className="container py-2 px-4">
        <div className="flex items-center justify-between gap-2 overflow-x-auto text-[10px] sm:text-xs mono-data text-white/65 pb-0.5">
          <span className="whitespace-nowrap text-amber-400/90 font-bold shrink-0">LIVE BOARD</span>
          <div className="flex items-center gap-3 sm:gap-5 min-w-max">
            <span className="whitespace-nowrap">
              <span className="text-emerald-400">{snap.teamsRemaining}</span> teams
            </span>
            <span className="whitespace-nowrap">
              <span className="text-rose-400">{snap.teamsEliminated}</span> out
            </span>
            <span className="whitespace-nowrap">
              <span className="text-sky-400">{snap.gamesPlayed}</span> finals
            </span>
            <span className="whitespace-nowrap">
              <span className="text-amber-400">{snap.matchPointSeries}</span> match pt
            </span>
            {snap.liveGames > 0 ? (
              <span className="flex items-center gap-1 text-emerald-300 whitespace-nowrap">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {snap.liveGames} live
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardHeader() {
  return <SiteHeader subtitle="PLAYOFF COMMAND" subtitleAccent />;
}

function SeriesHeroStrip({
  pool,
  heroIx,
  onSelect,
}: {
  pool: ReturnType<typeof pickHeroPool>;
  heroIx: number;
  onSelect: (i: number) => void;
}) {
  if (pool.length === 0) return null;
  const mod = heroIx % pool.length;

  return (
    <div className="mb-8 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/55">Series snapshot</h1>
        <div className="flex gap-1.5 shrink-0">
          {pool.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Highlight series ${i + 1}`}
              aria-current={mod === i}
              onClick={() => onSelect(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${mod === i ? "w-8 bg-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.45)]" : "w-1.5 bg-white/25 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-thin [scrollbar-width:thin]">
          {pool.map((s, i) => {
            const last = lastFinalGame(s);
            const nx = nextPendingGame(s);
            const leadColor = getTeamColor(s.higherWins >= s.lowerWins ? s.higherTeam : s.lowerTeam);

            return (
              <article
                key={s.seriesId}
                className={`snap-start shrink-0 w-[min(92vw,440px)] rounded-2xl border bg-gradient-to-br from-[#0c1829]/95 to-[#050914]/98 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-transform duration-300 ${mod === i ? "ring-1 ring-sky-500/50 scale-[1.01]" : ""}`}
                style={{ borderColor: `${leadColor}44`, borderLeftWidth: 3, borderLeftColor: leadColor }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="text-base sm:text-xl font-black text-white tracking-tight leading-tight">
                    {s.higherTeam}{" "}
                    <span className="text-white/30 font-normal px-1">vs</span> {s.lowerTeam}
                  </div>
                  <div className="mono-data text-xl sm:text-2xl font-black text-white whitespace-nowrap">
                    {s.higherWins}–{s.lowerWins}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 border border-white/[0.06]">
                    <div className="text-[9px] uppercase text-white/40 mb-0.5">Last result</div>
                    <div className="text-white/92 leading-snug mono-data">
                      {last ? `${last.awayTeam} ${last.awayScore} · ${last.homeTeam} ${last.homeScore}` : "Awaiting Game 1 final"}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white/[0.04] px-2 py-1.5 border border-white/[0.06]">
                    <div className="text-[9px] uppercase text-white/40 mb-0.5">Next game</div>
                    <div className="text-white/85">{nx ? `${nx.time ?? formatShortDate(nx.date)}` : "Broadcast TBD"}</div>
                  </div>
                  <div className="rounded-lg bg-sky-500/[0.1] px-2 py-1.5 border border-sky-500/25">
                    <div className="text-[9px] uppercase text-sky-400/85 mb-0.5">Key insight</div>
                    <div className="text-white/90 leading-snug text-[11px] line-clamp-3">{heroSentence(s)}</div>
                  </div>
                </div>
                <div className="mt-3 flex justify-end">
                  <button type="button" onClick={() => onSelect(i)} className="text-[10px] font-bold uppercase tracking-wide text-sky-400 hover:text-sky-300">
                    Set hero ▸
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function PlayoffsPage() {
  const [heroIx, setHeroIx] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const dataKey = playoffSeries.map((s) => `${s.seriesId}-${s.higherWins}-${s.lowerWins}`).join("|");

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setHydrated(true));
    return () => window.cancelAnimationFrame(id);
  }, [dataKey]);

  const usable = useMemo(() => usableSeries(playoffSeries), [dataKey]);
  const pool = useMemo(() => pickHeroPool(playoffSeries), [dataKey]);
  const takeaways = useMemo(() => buildTakeaways(playoffSeries, playoffMovers), [dataKey]);
  const gridSeries = useMemo(() => sortedSeriesCardsData(usable.length ? usable : playoffSeries), [usable, dataKey]);

  const jumpMustWatch = () => {
    const id = takeaways.mustWatch?.seriesId;
    if (!id) return;
    window.requestAnimationFrame(() => {
      document.getElementById(`series-card-${id}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  const hasBoard = playoffSeries.length > 0;

  return (
    <div className="min-h-screen pb-14" style={{ background: "var(--hi-bg-page, #050d12)" }}>
      <DashboardHeader />
      <StickyRibbon />

      <main className="container px-4 py-6 max-w-[1400px] mx-auto">
        {!hydrated ? (
          <PlayoffsSkeleton />
        ) : !hasBoard ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <p className="text-white/70 text-sm mb-3">Postseason telemetry is syncing — no series rows on file yet.</p>
            <a href="/" className="text-sky-400 text-sm font-semibold">
              ← Return to Hoops Intel Today
            </a>
          </div>
        ) : (
          <>
            <SeriesHeroStrip pool={pool} heroIx={heroIx} onSelect={setHeroIx} />
            <TakeawaysSection data={takeaways} onMustWatch={jumpMustWatch} />
            <PlayoffMoversDesk />

            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/55">Series grid</h2>
              <span className="text-[10px] text-white/35 mono-data">{gridSeries.length} matchups tracked</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {gridSeries.map((s) => (
                <div key={s.seriesId} id={`series-card-${s.seriesId}`} className="scroll-mt-28">
                  <SeriesCard series={s} />
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-white/[0.06] py-8 mt-8">
        <div className="container px-4 flex flex-wrap items-center justify-between gap-4 text-[10px] text-white/30">
          <span>Hoops Intel · Bloomberg-style playoff stack</span>
          <div className="flex gap-4">
            <a href="/pick-em" className="hover:text-sky-400/90">
              Pick ’Em
            </a>
            <a href="/" className="hover:text-sky-400/90">
              Edition
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
