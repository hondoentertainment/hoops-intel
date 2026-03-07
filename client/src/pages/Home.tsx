import { useState } from "react";
import {
  pulseEdition,
  narrative,
  tickerItems,
  gameResults,
  pulseIndex,
  statLeaders,
  mediaReactions,
  injuryUpdates,
  gamePreviews,
  rookieWatch,
  fantasyAlerts,
  eastStandings,
  westStandings,
} from "../lib/pulseData";
import { getTeamColor } from "../lib/teamColors";

// ═══════════════════════════════════════════════════════════
// TICKER BAR — Scrolling news ticker at top of page
// ═══════════════════════════════════════════════════════════

function TickerBar() {
  const items = [...tickerItems, ...tickerItems]; // Duplicate for seamless scroll
  const textColors: Record<string, string> = {
    score: "text-slate-300",
    injury: "text-amber-400",
    news: "text-sky-400",
    alert: "text-emerald-400",
  };
  const dotColors: Record<string, string> = {
    score: "bg-slate-400",
    injury: "bg-amber-400",
    news: "bg-sky-400",
    alert: "bg-emerald-400",
  };

  return (
    <div
      className="relative overflow-hidden border-b"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.4)",
      }}
    >
      <div className="flex items-center">
        <div
          className="flex-shrink-0 px-4 py-2.5 z-10 flex items-center gap-2"
          style={{ background: "#0EA5E9", minWidth: 90 }}
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="section-label text-white text-xs font-bold tracking-widest">
            LIVE
          </span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-track">
            {items.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 px-6 py-2.5 whitespace-nowrap"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[item.type]}`}
                />
                <span className={`text-xs font-medium ${textColors[item.type]}`}>
                  {item.text}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HEADER — Sticky navigation bar
// ═══════════════════════════════════════════════════════════

function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: "rgba(5, 13, 26, 0.95)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
              }}
            >
              HI
            </div>
            <div>
              <div className="display-heading text-white text-lg leading-none">
                HOOPS INTEL
              </div>
              <div className="section-label" style={{ fontSize: "0.6rem" }}>
                DAILY INTELLIGENCE
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {["Scores", "Pulse Index", "Injuries", "Tonight", "Archive"].map(
              (label) => (
                <a
                  key={label}
                  href={
                    label === "Archive"
                      ? "/archive"
                      : `#${label.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-xs font-medium transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#0EA5E9")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                >
                  {label}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <div
              className="px-3 py-1 rounded text-xs font-medium"
              style={{
                background: "rgba(14,165,233,0.15)",
                color: "#0EA5E9",
                border: "1px solid rgba(14,165,233,0.3)",
              }}
            >
              {pulseEdition.date}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════════
// HERO SECTION — Main headline and narrative
// ═══════════════════════════════════════════════════════════

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, rgba(5,13,26,0.3) 0%, rgba(5,13,26,0.85) 70%, #050D1A 100%), url('/assets/hero-bg.webp') center/cover no-repeat`,
        minHeight: 380,
      }}
    >
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl animate-fade-up">
          <div className="section-label mb-3">{pulseEdition.edition}</div>
          <h1
            className="display-heading text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {narrative.headline}
          </h1>
          <p
            className="text-base mb-6 max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            {narrative.subhead}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#scores"
              className="px-5 py-2.5 rounded text-sm font-semibold text-white transition-all"
              style={{ background: "#0EA5E9" }}
            >
              View All Scores
            </a>
            <a
              href="#tonight"
              className="px-5 py-2.5 rounded text-sm font-semibold transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Tonight's Games
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-px pulse-line"
        style={{
          background:
            "linear-gradient(to right, transparent, #0EA5E9, transparent)",
        }}
      />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// GAME CARD — Individual game result card
// ═══════════════════════════════════════════════════════════

function GameCard({ game }: { game: (typeof gameResults)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const homeWin = game.homeScore > game.awayScore;
  const awayWin = game.awayScore > game.homeScore;

  return (
    <div
      className="glass-card rounded-lg overflow-hidden transition-all duration-200 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
      style={{
        borderLeft: `3px solid ${getTeamColor(homeWin ? game.homeTeam : game.awayTeam)}`,
      }}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="text-center w-12">
              <div
                className="section-label mb-0.5"
                style={{
                  color: awayWin ? "#0EA5E9" : "rgba(255,255,255,0.4)",
                }}
              >
                {game.awayTeam}
              </div>
              <div
                className={`mono-data font-bold text-2xl ${awayWin ? "pulse-glow-blue" : ""}`}
                style={{
                  color: awayWin ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
              >
                {game.awayScore}
              </div>
            </div>
            <div
              className="text-xs text-center"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              @
            </div>
            <div className="text-center w-12">
              <div
                className="section-label mb-0.5"
                style={{
                  color: homeWin ? "#0EA5E9" : "rgba(255,255,255,0.4)",
                }}
              >
                {game.homeTeam}
              </div>
              <div
                className={`mono-data font-bold text-2xl ${homeWin ? "pulse-glow-blue" : ""}`}
                style={{
                  color: homeWin ? "#ffffff" : "rgba(255,255,255,0.5)",
                }}
              >
                {game.homeScore}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div
              className="text-xs font-medium px-2 py-0.5 rounded mb-1"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              FINAL
            </div>
            <div className="text-xs" style={{ color: "#0EA5E9" }}>
              {expanded ? "\u25B2 Less" : "\u25BC More"}
            </div>
          </div>
        </div>
        <div
          className="flex items-center gap-2 py-2 px-3 rounded"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "#0EA5E9" }}
          />
          <div>
            <span className="text-xs font-semibold text-white">
              {game.topPerformer}
            </span>
            <span
              className="text-xs ml-2 mono-data"
              style={{ color: "#10B981" }}
            >
              {game.topLine}
            </span>
          </div>
        </div>
      </div>
      {expanded && (
        <div
          className="px-4 pb-4 text-sm leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.65)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="pt-3">{game.recap}</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCORES SECTION
// ═══════════════════════════════════════════════════════════

function ScoresSection() {
  return (
    <section id="scores" className="py-10">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="section-label mb-1">MARCH 1, 2026</div>
            <h2 className="display-heading text-white text-2xl">
              Last Night's Scores
            </h2>
          </div>
          <div
            className="mono-data text-sm px-3 py-1 rounded"
            style={{
              background: "rgba(14,165,233,0.1)",
              color: "#0EA5E9",
              border: "1px solid rgba(14,165,233,0.2)",
            }}
          >
            {gameResults.length} GAMES
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {gameResults.map((game) => (
            <GameCard key={game.gameId} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// NARRATIVE SECTION
// ═══════════════════════════════════════════════════════════

function NarrativeSection() {
  return (
    <section
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="section-label mb-2">NARRATIVE OF THE NIGHT</div>
            <h3 className="display-heading text-white text-xl mb-4">
              {narrative.headline}
            </h3>
            {narrative.body.map((paragraph: string, i: number) => (
              <p
                key={i}
                className="text-sm leading-relaxed mb-4"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <div className="section-label mb-3">
              STAT LEADERS · MAR 1
            </div>
            <div className="space-y-3">
              {statLeaders.map((stat: any, i: number) => (
                <div key={i} className="glass-card rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div
                        className="text-xs font-medium mb-1"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {stat.category.toUpperCase()}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {stat.player}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {stat.context}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="mono-data text-2xl font-bold"
                        style={{ color: "#0EA5E9" }}
                      >
                        {stat.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// PULSE INDEX SECTION
// ═══════════════════════════════════════════════════════════

function PulseIndexSection() {
  return (
    <section
      id="pulse-index"
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="section-label mb-2">DAILY RANKINGS</div>
        <h2 className="display-heading text-white text-2xl mb-6">
          Pulse Index
        </h2>
        <div className="space-y-2">
          {pulseIndex.map((player: any) => {
            const isUp = player.trend === "up";
            const isDown = player.trend === "down";
            return (
              <div
                key={player.rank}
                className="glass-card rounded-lg p-4 flex items-center gap-4"
              >
                <div
                  className="mono-data text-2xl font-bold w-8 text-center"
                  style={{ color: "#0EA5E9" }}
                >
                  {player.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">
                      {player.player}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {player.team}
                    </span>
                    <span
                      className={`text-xs ${isUp ? "text-emerald-400" : isDown ? "text-rose-400" : "text-slate-400"}`}
                    >
                      {isUp ? "\u25B2" : isDown ? "\u25BC" : "\u25CF"}
                    </span>
                  </div>
                  <div
                    className="mono-data text-xs mb-1"
                    style={{ color: "#10B981" }}
                  >
                    {player.keyStats}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {player.note}
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="mono-data text-lg font-bold"
                    style={{ color: "#0EA5E9" }}
                  >
                    {player.indexScore}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {player.teamRecord}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS SECTION
// ═══════════════════════════════════════════════════════════

function MediaReactionsSection() {
  const sentimentColors: Record<string, { color: string; bg: string }> = {
    hot: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
    cold: { color: "#0EA5E9", bg: "rgba(14,165,233,0.1)" },
    neutral: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
  };

  return (
    <section
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="section-label mb-2">AROUND THE LEAGUE</div>
        <h2 className="display-heading text-white text-2xl mb-6">
          Media Reactions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {mediaReactions.map((reaction: any, i: number) => {
            const sc = sentimentColors[reaction.sentiment] || sentimentColors.neutral;
            return (
              <div key={i} className="glass-card rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ background: sc.bg, color: sc.color }}
                  >
                    {reaction.sentiment.toUpperCase()}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {reaction.topic}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  "{reaction.quote}"
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">
                    {reaction.author}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {reaction.outlet}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES SECTION
// ═══════════════════════════════════════════════════════════

function InjurySection() {
  const statusStyles: Record<string, { color: string; bg: string }> = {
    out: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
    questionable: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    probable: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
    "day-to-day": { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
    returning: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
  };

  return (
    <section
      id="injuries"
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="section-label mb-2">INJURY WIRE</div>
        <h2 className="display-heading text-white text-2xl mb-6">
          Injury Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {injuryUpdates.map((injury: any, i: number) => {
            const ss = statusStyles[injury.status] || statusStyles.out;
            return (
              <div key={i} className="glass-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">
                      {injury.player}
                    </span>
                    <span
                      className="text-xs px-1.5 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {injury.team}
                    </span>
                  </div>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded uppercase"
                    style={{ background: ss.bg, color: ss.color }}
                  >
                    {injury.status}
                  </span>
                </div>
                <div
                  className="text-xs mb-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {injury.injury}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {injury.timeline}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// TONIGHT'S GAMES SECTION
// ═══════════════════════════════════════════════════════════

function TonightSection() {
  return (
    <section
      id="tonight"
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="section-label mb-2">TONIGHT'S SLATE</div>
        <h2 className="display-heading text-white text-2xl mb-6">
          Game Previews
        </h2>
        <div className="space-y-3">
          {gamePreviews.map((preview: any, i: number) => (
            <GamePreviewCard key={i} preview={preview} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GamePreviewCard({ preview }: { preview: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`glass-card rounded-lg overflow-hidden ${preview.featured ? "ring-1 ring-sky-500/40" : ""}`}
    >
      <div
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="section-label">{preview.awayTeam}</div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {preview.awayRecord}
              </div>
            </div>
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              @
            </div>
            <div className="text-center">
              <div className="section-label">{preview.homeTeam}</div>
              <div
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {preview.homeRecord}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-white">{preview.time}</div>
            <div
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {preview.tv}
            </div>
          </div>
          <div className="text-right ml-4">
            <div
              className="mono-data text-xs"
              style={{ color: "#0EA5E9" }}
            >
              {preview.spread}
            </div>
            <div
              className="mono-data text-xs"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              O/U {preview.overUnder}
            </div>
          </div>
        </div>
        {preview.featured && (
          <div
            className="mt-2 text-xs font-semibold px-2 py-0.5 rounded inline-block"
            style={{
              background: "rgba(14,165,233,0.15)",
              color: "#0EA5E9",
            }}
          >
            FEATURED GAME
          </div>
        )}
      </div>
      {expanded && (
        <div
          className="px-4 pb-4 space-y-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="pt-3">
            <div
              className="text-xs font-medium mb-1"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              KEY MATCHUP
            </div>
            <div className="text-sm text-white">{preview.keyMatchup}</div>
          </div>
          <div>
            <div
              className="text-xs font-medium mb-1"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              STORYLINE
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              {preview.storyline}
            </p>
          </div>
          <div>
            <div
              className="text-xs font-medium mb-1"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              PREDICTION
            </div>
            <p className="text-sm" style={{ color: "#10B981" }}>
              {preview.prediction}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH & FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

function RookieAndFantasySection() {
  return (
    <section
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Rookie Watch */}
          <div>
            <div className="section-label mb-2">ROOKIE WATCH</div>
            <h3 className="display-heading text-white text-xl mb-4">
              Top Rookies
            </h3>
            <div className="space-y-2">
              {rookieWatch.map((rookie: any) => (
                <div
                  key={rookie.rank}
                  className="glass-card rounded-lg p-3 flex items-center gap-3"
                >
                  <div
                    className="mono-data text-lg font-bold w-6 text-center"
                    style={{ color: "#0EA5E9" }}
                  >
                    {rookie.rank}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">
                      {rookie.player}{" "}
                      <span
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {rookie.team}
                      </span>
                    </div>
                    <div
                      className="mono-data text-xs"
                      style={{ color: "#10B981" }}
                    >
                      {rookie.statLine}
                    </div>
                    <div
                      className="text-xs mt-1"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {rookie.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fantasy Alerts */}
          <div>
            <div className="section-label mb-2">FANTASY ALERTS</div>
            <h3 className="display-heading text-white text-xl mb-4">
              Roster Moves
            </h3>
            <div className="space-y-2">
              {fantasyAlerts.map((alert: any, i: number) => {
                const actionColors: Record<string, { color: string; bg: string }> = {
                  add: { color: "#10B981", bg: "rgba(16,185,129,0.1)" },
                  drop: { color: "#F43F5E", bg: "rgba(244,63,94,0.1)" },
                  hold: { color: "#F59E0B", bg: "rgba(245,158,11,0.1)" },
                  stream: { color: "#0EA5E9", bg: "rgba(14,165,233,0.1)" },
                };
                const ac = actionColors[alert.action] || actionColors.hold;
                return (
                  <div key={i} className="glass-card rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded uppercase"
                        style={{ background: ac.bg, color: ac.color }}
                      >
                        {alert.action}
                      </span>
                      <span className="text-sm font-semibold text-white">
                        {alert.player}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        {alert.team}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {alert.reason}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// STANDINGS SECTION
// ═══════════════════════════════════════════════════════════

function StandingsSection() {
  const renderConference = (
    title: string,
    standings: any[]
  ) => (
    <div>
      <h3 className="display-heading text-white text-lg mb-3">{title}</h3>
      <div className="glass-card rounded-lg overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.04)" }}>
              <th className="text-left px-3 py-2 section-label">#</th>
              <th className="text-left px-3 py-2 section-label">TEAM</th>
              <th className="text-center px-3 py-2 section-label">W</th>
              <th className="text-center px-3 py-2 section-label">L</th>
              <th className="text-center px-3 py-2 section-label">PCT</th>
              <th className="text-center px-3 py-2 section-label">GB</th>
              <th className="text-center px-3 py-2 section-label">STRK</th>
              <th className="text-center px-3 py-2 section-label">L10</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team: any) => (
              <tr
                key={team.team}
                className="border-t"
                style={{
                  borderColor: "rgba(255,255,255,0.04)",
                  background:
                    team.rank <= 6
                      ? "transparent"
                      : "rgba(245,158,11,0.03)",
                }}
              >
                <td className="px-3 py-2 mono-data" style={{ color: "#0EA5E9" }}>
                  {team.rank}
                </td>
                <td className="px-3 py-2 font-semibold text-white">
                  {team.team}
                </td>
                <td className="text-center px-3 py-2 mono-data">{team.wins}</td>
                <td className="text-center px-3 py-2 mono-data">{team.losses}</td>
                <td className="text-center px-3 py-2 mono-data">{team.pct}</td>
                <td className="text-center px-3 py-2 mono-data">{team.gb}</td>
                <td
                  className="text-center px-3 py-2 mono-data"
                  style={{
                    color: team.streak.startsWith("W")
                      ? "#10B981"
                      : "#F43F5E",
                  }}
                >
                  {team.streak}
                </td>
                <td className="text-center px-3 py-2 mono-data">{team.last10}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section
      className="py-10 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container">
        <div className="section-label mb-2">CONFERENCE STANDINGS</div>
        <h2 className="display-heading text-white text-2xl mb-6">Standings</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {renderConference("Eastern Conference", eastStandings)}
          {renderConference("Western Conference", westStandings)}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// FOOTER
// ═══════════════════════════════════════════════════════════

function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="container text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center font-bold text-white text-xs"
            style={{
              background: "linear-gradient(135deg, #0EA5E9, #0284C7)",
            }}
          >
            HI
          </div>
          <span className="display-heading text-white text-sm">
            HOOPS INTEL
          </span>
        </div>
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Daily NBA Intelligence · Updated Every Morning · {pulseEdition.edition}
        </p>
        <a
          href="/archive"
          className="text-xs mt-2 inline-block"
          style={{ color: "#0EA5E9" }}
        >
          View Archive →
        </a>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
// HOME PAGE — Main export
// ═══════════════════════════════════════════════════════════

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      <Header />
      <TickerBar />
      <HeroSection />
      <ScoresSection />
      <NarrativeSection />
      <PulseIndexSection />
      <MediaReactionsSection />
      <InjurySection />
      <TonightSection />
      <RookieAndFantasySection />
      <StandingsSection />
      <Footer />
    </div>
  );
}
