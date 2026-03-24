// Watch Priority Ranker — Tonight's Watch Guide
// Route: /watch-guide

import { useState } from "react";
import { watchGuideData } from "../lib/watchGuideData";

// ═══════════════════════════════════════════════════════════
// FACTOR BAR
// ═══════════════════════════════════════════════════════════

const FACTOR_LABELS: { key: keyof (typeof watchGuideData.games)[0]["factors"]; label: string; color: string }[] = [
  { key: "starPower", label: "Stars", color: "#F59E0B" },
  { key: "playoffImplications", label: "Playoffs", color: "#0EA5E9" },
  { key: "rivalry", label: "Rivalry", color: "#F43F5E" },
  { key: "entertainment", label: "Entertain", color: "#10B981" },
  { key: "storyline", label: "Story", color: "#A855F7" },
];

function FactorBars({ factors }: { factors: (typeof watchGuideData.games)[0]["factors"] }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {FACTOR_LABELS.map(({ key, label, color }) => {
        const value = factors[key];
        const pct = (value / 20) * 100;
        return (
          <div key={key}>
            <div
              className="text-[9px] uppercase tracking-wider text-center mb-1"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {label}
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
              style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
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
    score >= 70 ? "#0EA5E9" :
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
        style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
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
          ? "linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(16,185,129,0.05) 100%)"
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${featured ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.06)"}`,
        borderLeft: featured ? "3px solid #0EA5E9" : `3px solid rgba(255,255,255,0.08)`,
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
                ? "rgba(14,165,233,0.12)"
                : "rgba(255,255,255,0.04)",
              color: game.rank <= 2 ? "#0EA5E9" : "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
            }}
          >
            {game.rank}
          </div>

          {/* Teams */}
          <div className="flex-1 min-w-0">
            <div
              className="text-base font-bold"
              style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
            >
              {game.awayTeam} @ {game.homeTeam}
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {game.time}
              </span>
              <span
                className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded"
                style={{
                  background: game.tv === "ESPN"
                    ? "rgba(244,63,94,0.12)"
                    : "rgba(255,255,255,0.04)",
                  color: game.tv === "ESPN" ? "#F43F5E" : "rgba(255,255,255,0.35)",
                  fontFamily: "'Barlow Condensed', sans-serif",
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
                    fontFamily: "'Barlow Condensed', sans-serif",
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
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {game.headline}
        </p>

        {/* Key matchup */}
        <div
          className="text-xs mb-3"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace" }}
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
            style={{ color: "#0EA5E9", fontFamily: "'DM Sans', sans-serif" }}
          >
            {expanded ? "Hide Storyline \u25B2" : "Full Storyline \u25BC"}
          </button>
        )}

        {expanded && (
          <p
            className="text-sm leading-relaxed mt-3 pt-3 border-t"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'DM Sans', sans-serif",
              borderColor: "rgba(255,255,255,0.06)",
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
      bgGrad: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(14,165,233,0.06) 100%)",
      border: "rgba(16,185,129,0.2)",
      titleColor: "#10B981",
    },
    sleeper: {
      icon: "\u{1F634}",
      title: "Sleeper Pick",
      bgGrad: "linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(14,165,233,0.06) 100%)",
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
            style={{ color: c.titleColor, fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {c.title}
          </h3>
          <p
            className="text-base font-bold mb-1"
            style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
          >
            {game.awayTeam} @ {game.homeTeam} {"\u00B7"} {game.time}
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
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
  const topGame = data.games[data.topPick.gameIndex];
  const sleeperGame = data.games[data.sleeper.gameIndex];
  const skipGame = data.games[data.skipIt.gameIndex];

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{
          background: "rgba(5,13,26,0.92)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-opacity"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {"\u2190"} Hoops Intel
          </a>
          <div
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.games.length} games tonight
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1
            className="text-2xl font-black uppercase tracking-wider mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}
          >
            Tonight's Watch Guide
          </h1>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.date}
          </p>
        </div>

        {/* Top Pick Callout */}
        <CalloutCard type="topPick" game={topGame} reason={data.topPick.reason} />

        {/* #1 Featured Game */}
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Game of the Night
          </h2>
          <GameCard game={data.games[0]} featured />
        </div>

        {/* Ranked List */}
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
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

        {/* Legend */}
        <div
          className="rounded-xl p-4"
          style={{
            background: "rgba(255,255,255,0.015)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <h3
            className="text-[10px] font-bold uppercase tracking-wider mb-2"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Watch Score Factors
          </h3>
          <div className="grid grid-cols-5 gap-2 text-center">
            {FACTOR_LABELS.map(({ label, color }) => (
              <div key={label}>
                <div
                  className="w-3 h-3 rounded-full mx-auto mb-1"
                  style={{ background: color }}
                />
                <div
                  className="text-[9px] uppercase tracking-wider"
                  style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-[10px] text-center mt-2"
            style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Each factor scored 0-20. Watch Score = sum of all factors.
          </p>
        </div>

        {/* Footer spacer */}
        <div className="h-12" />
      </main>
    </div>
  );
}
