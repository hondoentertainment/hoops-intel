// Watch Priority Ranker — Tonight's Watch Guide
// Route: /watch-guide

import { useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { CampDeskEmpty, DeskLoopLinks } from "../components/enhanced/EnhancedUi";
import { assessContentFreshness, freshnessHeroMeta } from "../lib/dataTrust";
import { watchGuideData } from "../lib/watchGuideData";

// ═══════════════════════════════════════════════════════════
// FACTOR BAR
// ═══════════════════════════════════════════════════════════

const FACTOR_LABELS: { key: keyof (typeof watchGuideData.games)[0]["factors"]; label: string; color: string }[] = [
  { key: "starPower", label: "Stars", color: "#F59E0B" },
  { key: "playoffImplications", label: "Playoffs", color: "var(--hi-accent-text,#146a8c)" },
  { key: "rivalry", label: "Rivalry", color: "#F43F5E" },
  { key: "entertainment", label: "Entertain", color: "#10B981" },
  { key: "storyline", label: "Story", color: "#A855F7" },
];

function FactorBars({ factors }: { factors: (typeof watchGuideData.games)[0]["factors"] }) {
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-3 min-[480px]:grid-cols-5">
      {FACTOR_LABELS.map(({ key, label, color }) => {
        const value = factors[key];
        const pct = (value / 20) * 100;
        return (
          <div key={key}>
            <div
              className="text-xs font-medium text-center mb-1 leading-4"
              style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-body)" }}
            >
              {label === "Entertain" ? "Entertainment" : label}
            </div>
            <div
              className="rounded-full overflow-hidden mx-auto"
              style={{ height: "4px", background: "rgba(255,255,255,0.06)" }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, background: color }}
              />
            </div>
            <div
              className="text-[10px] text-center mt-0.5 tabular-nums font-bold"
              style={{ color, fontFamily: "var(--hi-font-mono)" }}
            >
              {value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WATCH SCORE BAR
// ═══════════════════════════════════════════════════════════

function WatchScoreBar({ score }: { score: number }) {
  const color =
    score >= 85 ? "#10B981" :
    score >= 70 ? "var(--hi-accent)" :
    score >= 55 ? "#F59E0B" :
    "#F43F5E";

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "6px", background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${score}%`, background: color }}
        />
      </div>
      <span
        className="text-sm font-bold tabular-nums w-8 text-right"
        style={{ color, fontFamily: "var(--hi-font-mono)" }}
      >
        {score}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// GAME CARD
// ═══════════════════════════════════════════════════════════

function GameCard({ game, featured }: { game: (typeof watchGuideData.games)[0]; featured?: boolean }) {
  const [expanded, setExpanded] = useState(featured || false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        background: featured
          ? "linear-gradient(135deg, rgba(142,200,240,0.08) 0%, rgba(16,185,129,0.05) 100%)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${featured ? "rgba(142,200,240,0.2)" : "rgba(255,255,255,0.06)"}`,
        borderLeft: featured ? "3px solid var(--hi-accent)" : `3px solid rgba(255,255,255,0.08)`,
      }}
    >
      <div className="p-5">
        {/* Top row: rank, teams, time, tv */}
        <div className="flex items-center gap-3 mb-3">
          {/* Rank */}
          <div
            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
            style={{
              background: game.rank <= 2
                ? "rgba(142,200,240,0.12)"
                : "rgba(255,255,255,0.04)",
              color: game.rank <= 2 ? "var(--hi-accent-text,#146a8c)" : "var(--hi-muted,#5c5c58)",
              fontFamily: "var(--hi-font-display)",
            }}
          >
            {game.rank}
          </div>

          {/* Teams */}
          <div className="flex-1 min-w-0">
            <div
              className="text-base font-bold"
              style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-body)" }}
            >
              {game.awayTeam} @ {game.homeTeam}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span
                className="text-xs"
                style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-mono)" }}
              >
                {game.time}
              </span>
              <span
                className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                style={{
                  background: game.tv === "ESPN"
                    ? "rgba(244,63,94,0.12)"
                    : "rgba(255,255,255,0.04)",
                  color: game.tv === "ESPN" ? "#F43F5E" : "var(--hi-muted,#5c5c58)",
                  fontFamily: "var(--hi-font-display)",
                }}
              >
                {game.tv}
              </span>
              {game.mustWatch && (
                <span
                  className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(16,185,129,0.12)",
                    color: "#10B981",
                    fontFamily: "var(--hi-font-display)",
                  }}
                >
                  MUST WATCH
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Watch Score */}
        <WatchScoreBar score={game.watchScore} />

        {/* Headline */}
        <p
          className="text-sm font-semibold mt-3 mb-2"
          style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
        >
          {game.headline}
        </p>

        {/* Key matchup */}
        <div
          className="text-xs mb-3"
          style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-mono)" }}
        >
          Key Matchup: {game.keyMatchup}
        </div>

        {/* Factor breakdown */}
        <FactorBars factors={game.factors} />

        {/* Expandable storyline */}
        {!featured && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-xs font-semibold transition-all hover:opacity-80"
            style={{ color: "var(--hi-accent-text,#146a8c)", fontFamily: "var(--hi-font-body)" }}
          >
            {expanded ? "Hide Storyline \u25B2" : "Full Storyline \u25BC"}
          </button>
        )}

        {expanded && (
          <p
            className="text-sm leading-relaxed mt-3 pt-3 border-t"
            style={{
              color: "var(--hi-muted,#5c5c58)",
              fontFamily: "var(--hi-font-body)",
              borderColor: "var(--hi-muted,#5c5c58)",
            }}
          >
            {game.storyline}
          </p>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// CALLOUT CARD
// ═══════════════════════════════════════════════════════════

function CalloutCard({ type, game, reason }: {
  type: "topPick" | "sleeper" | "skipIt";
  game: (typeof watchGuideData.games)[0];
  reason: string;
}) {
  const config = {
    topPick: {
      icon: "\u{1F3C6}",
      title: "Top Pick of the Night",
      bgGrad: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(142,200,240,0.06) 100%)",
      border: "rgba(16,185,129,0.2)",
      titleColor: "#10B981",
    },
    sleeper: {
      icon: "\u{1F634}",
      title: "Sleeper Pick",
      bgGrad: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(142,200,240,0.06) 100%)",
      border: "rgba(168,85,247,0.2)",
      titleColor: "#A855F7",
    },
    skipIt: {
      icon: "\u{1F6AB}",
      title: "Skip It",
      bgGrad: "linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(251,146,60,0.05) 100%)",
      border: "rgba(244,63,94,0.15)",
      titleColor: "#F43F5E",
    },
  };
  const c = config[type];

  return (
    <div
      className="rounded-xl p-5"
      style={{ background: c.bgGrad, border: `1px solid ${c.border}` }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{c.icon}</span>
        <div>
          <h3
            className="text-sm font-bold uppercase tracking-wider mb-1"
            style={{ color: c.titleColor, fontFamily: "var(--hi-font-display)" }}
          >
            {c.title}
          </h3>
          <p
            className="text-base font-bold mb-1"
            style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-body)" }}
          >
            {game.awayTeam} @ {game.homeTeam} {"\u00B7"} {game.time}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
          >
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════

export default function WatchGuide() {
  const data = watchGuideData;
  const freshness = assessContentFreshness(data.generatedDate || data.displayDate);
  const topGame = data.games[data.topPick.gameIndex];
  const sleeperGame = data.games[data.sleeper.gameIndex];
  const skipGame = data.games[data.skipIt.gameIndex];
  const slateOpen = data.games.length > 0 && Boolean(topGame);

  return (
    <ToolPageLayout
      subtitle="WATCH GUIDE"
      sectionLabel="Watch guide"
      title="Tonight's watch guide"
      description={freshness.state === "stale" ? "This ranking is past the daily freshness window." : data.date}
      heroMeta={freshnessHeroMeta(data.generatedDate || data.displayDate, data.displayDate) ?? undefined}
      maxWidth="md"
      headerToolbarExtra={
        <span
          className="text-xs whitespace-nowrap"
          style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
        >
          {data.games.length} games tonight
        </span>
      }
    >
        {freshness.state === "stale" ? (
          <p
            className="text-xs mb-4"
            role="status"
            data-testid="content-may-be-outdated"
            style={{ color: "var(--hi-warn,#c2410c)" }}
          >
            May be outdated. Last generated {data.displayDate || data.generatedDate}. Not today’s desk.
          </p>
        ) : null}

        {!slateOpen ? (
          <>
          <CampDeskEmpty
            title="No games on the board"
            body="Season desk is coming. The desk, tools, archive, and Ask stay live. Hoops Intel is not inventing a watch ranking — the slate stays empty until ESPN posts tip-offs (~Oct 1)."
            pill="NOT TONIGHT"
            footnote={data.nightOverview || data.topPick.reason}
          />
          </>
        ) : (
          <>
        {/* Top Pick Callout */}
        <CalloutCard type="topPick" game={topGame} reason={data.topPick.reason} />

        {/* #1 Featured Game */}
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "var(--hi-accent-text,#146a8c)", fontFamily: "var(--hi-font-display)" }}
          >
            Game of the Night
          </h2>
          <GameCard game={data.games[0]} featured />
        </div>

        {/* Ranked List */}
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "var(--hi-accent-text,#146a8c)", fontFamily: "var(--hi-font-display)" }}
          >
            Full Rankings
          </h2>
          <div className="space-y-3">
            {data.games.slice(1).map((game) => (
              <GameCard key={`${game.awayTeam}-${game.homeTeam}`} game={game} />
            ))}
          </div>
        </div>

        {/* Sleeper Pick */}
        <CalloutCard type="sleeper" game={sleeperGame} reason={data.sleeper.reason} />

        {/* Skip It */}
        <CalloutCard type="skipIt" game={skipGame} reason={data.skipIt.reason} />
          </>
        )}

        <div
          className="rounded-xl p-4"
          data-testid="watch-factor-legend"
          style={{
            background: "var(--hi-canvas-soft,#fafaf8)",
            border: "1px solid var(--hi-border-soft, rgba(10,10,10,0.06))",
          }}
        >
          <h3
            className="text-xs font-semibold mb-3"
            style={{ color: "var(--hi-text-secondary,#5c5c58)" }}
          >
            Watch score factors
          </h3>
          <ul className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-5 list-none m-0 p-0">
            {FACTOR_LABELS.map(({ key, label, color }) => (
              <li key={key} className="flex items-center gap-2 min-h-11 sm:flex-col sm:justify-center sm:text-center sm:gap-1.5">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: color }}
                  aria-hidden
                />
                <span className="text-sm font-medium leading-5" style={{ color: "var(--hi-text,#0a0a0a)" }}>
                  {label === "Entertain" ? "Entertainment" : label}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm mt-3" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
            Each factor is scored 0–20. Watch Score is the sum of all five.
          </p>
        </div>

        <DeskLoopLinks intro="Continue the pre-game loop" />

        {/* Footer spacer */}
        <div className="h-12" />
    </ToolPageLayout>
  );
}
