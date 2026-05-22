import {
  bracketMeta as staticBracketMeta,
  confFinalsSeries,
  confSemisSeries,
  firstRoundSeries,
  type PlayoffSeries,
} from "../../lib/playoffBracketData";
import { deriveBracketMetaFromLive, overlayBracketWithLiveBoard } from "../../lib/playoffBracketOverlay";
import { mergePlayoffSeriesWithLive } from "../../lib/playoffLiveMerge";
import { useLiveScores } from "../../lib/useLiveScores";
import { playoffSeries } from "../../lib/playoffData";
import {
  bracketSeriesLeadLine,
  lastBracketFinalScoreLine,
  playoffsHrefForBracketSeries,
} from "../../lib/playoffBracketBridge";
import { getTeamColor } from "../../lib/teamColors";

function BracketNode({ series }: { series: PlayoffSeries }) {
  const href = playoffsHrefForBracketSeries(series);
  const lastScore = lastBracketFinalScoreLine(series);
  const lead = bracketSeriesLeadLine(series);
  const leader =
    series.higherWins > series.lowerWins
      ? series.higherTeam
      : series.lowerWins > series.higherWins
        ? series.lowerTeam
        : null;
  const accent = leader ? getTeamColor(leader) : "rgba(255,255,255,0.2)";

  return (
    <a
      href={href}
      className="block rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 transition-colors hover:border-sky-500/40 hover:bg-sky-500/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
      style={{ borderLeftWidth: 3, borderLeftColor: accent }}
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <span className="text-[9px] font-bold uppercase tracking-wider text-white/40">
          {series.higherSeed}-{series.lowerSeed}
        </span>
        <span className="mono-data text-sm font-black text-white">
          {series.higherWins}–{series.lowerWins}
        </span>
      </div>
      <div className="text-sm font-bold text-white leading-tight">
        {series.higherTeam}
        <span className="text-white/25 font-normal px-1">vs</span>
        {series.lowerTeam}
      </div>
      <div className="mt-1 text-[10px] text-amber-400/90 font-semibold">{lead}</div>
      {lastScore ? (
        <div className="mt-0.5 text-[10px] mono-data text-white/50">Last: {lastScore}</div>
      ) : null}
      <div className="mt-1 text-[9px] text-sky-400/80 font-semibold uppercase tracking-wide">Series intel →</div>
    </a>
  );
}

function BracketRoundColumn({ title, series }: { title: string; series: PlayoffSeries[] }) {
  if (series.length === 0) return null;
  return (
    <div className="flex flex-col gap-2 min-w-[168px]">
      <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">{title}</div>
      {series.map((s) => (
        <BracketNode key={s.seriesId} series={s} />
      ))}
    </div>
  );
}

function ConferenceBracket({ label, r1, r2, cf }: { label: string; r1: PlayoffSeries[]; r2: PlayoffSeries[]; cf: PlayoffSeries[] }) {
  return (
    <div className="min-w-0">
      <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50 mb-3">{label}</h3>
      <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory">
        <BracketRoundColumn title="First round" series={r1} />
        <BracketRoundColumn title="Semifinals" series={r2} />
        <BracketRoundColumn title="Conf finals" series={cf} />
      </div>
    </div>
  );
}

export function PlayoffBracketBoard() {
  const { data: liveData } = useLiveScores();
  const liveBoard = mergePlayoffSeriesWithLive(playoffSeries, liveData?.games);

  const r1 = overlayBracketWithLiveBoard(firstRoundSeries, liveBoard);
  const r2 = overlayBracketWithLiveBoard(confSemisSeries, liveBoard);
  const cf = overlayBracketWithLiveBoard(confFinalsSeries, liveBoard);
  const meta = deriveBracketMetaFromLive(liveBoard);

  const eastR1 = r1.filter((s) => s.conference === "east");
  const eastR2 = r2.filter((s) => s.conference === "east");
  const eastCf = cf.filter((s) => s.conference === "east");
  const westR1 = r1.filter((s) => s.conference === "west");
  const westR2 = r2.filter((s) => s.conference === "west");
  const westCf = cf.filter((s) => s.conference === "west");

  return (
    <section className="mb-8 rounded-2xl border border-white/[0.08] bg-[#07101c]/80 p-4 sm:p-5">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-400/90 mb-1">Bracket</h2>
          <p className="text-sm text-white/80 leading-snug">{meta.currentRound}</p>
        </div>
        <p className="text-[10px] mono-data text-white/35">
          ESPN sync · {meta.lastUpdated}
          {staticBracketMeta.lastUpdated !== meta.lastUpdated ? ` · narrative ${staticBracketMeta.lastUpdated}` : ""}
        </p>
      </div>
      <p className="text-xs text-white/45 mb-4">{meta.nextMilestone}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ConferenceBracket label="Western Conference" r1={westR1} r2={westR2} cf={westCf} />
        <ConferenceBracket label="Eastern Conference" r1={eastR1} r2={eastR2} cf={eastCf} />
      </div>
      <p className="mt-4 text-[10px] text-white/35">
        Tap a matchup for the expanded series board — scores sync from ESPN on the live grid below.
      </p>
    </section>
  );
}
