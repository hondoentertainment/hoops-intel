// Momentum Engine Page — Real-time narrative momentum shifts
// Visualizes game momentum swings, clutch plays, and AI-generated narratives

import { useState } from "react";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskPanel, SeasonChip } from "../components/enhanced/EnhancedUi";
import { momentumData } from "../lib/momentumData";
import type { MomentumSwing } from "../lib/momentumData";

// ═══════════════════════════════════════════════════════════
// IMPACT BADGE
// ═══════════════════════════════════════════════════════════

function ImpactBadge({ impact }: { impact: "game-changing" | "significant" | "notable" }) {
  const styles = {
    "game-changing": { color: "#F43F5E", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.25)" },
    significant: { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.25)" },
    notable: { color: "var(--hi-accent)", bg: "rgba(142,200,240,0.12)", border: "rgba(142,200,240,0.25)" },
  };
  const s = styles[impact];
  return (
    <span
      className="inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded"
      style={{
        color: s.color,
        background: s.bg,
        border: `1px solid ${s.border}`,
        fontFamily: "var(--hi-font-display)",
        letterSpacing: "0.04em",
      }}
    >
      {impact.toUpperCase().replace("-", " ")}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// WIN PROBABILITY BADGE
// ═══════════════════════════════════════════════════════════

function WinProbBadge({ shift }: { shift: number }) {
  const positive = shift > 0;
  const color = positive ? "#10B981" : "#F43F5E";
  const bg = positive ? "rgba(16,185,129,0.12)" : "rgba(244,63,94,0.12)";
  return (
    <span
      className="inline-flex items-center text-xs font-bold px-2 py-0.5 rounded"
      style={{
        color,
        background: bg,
        fontFamily: "var(--hi-font-mono)",
        fontSize: "0.7rem",
      }}
    >
      {positive ? "+" : ""}{shift}% WP
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// MOMENTUM TIMELINE BAR
// ═══════════════════════════════════════════════════════════

function MomentumTimeline({ game }: { game: MomentumSwing }) {
  const segments = game.swings.map((swing, i) => {
    const isHome = swing.momentum === "home";
    const color = isHome ? "#F59E0B" : "var(--hi-accent)";
    const weight =
      swing.impact === "game-changing" ? 3 : swing.impact === "significant" ? 2 : 1;
    const totalWeight = game.swings.reduce(
      (sum, s) => sum + (s.impact === "game-changing" ? 3 : s.impact === "significant" ? 2 : 1),
      0
    );
    const widthPct = (weight / totalWeight) * 100;

    return (
      <div
        key={i}
        className="h-full transition-all relative group"
        style={{
          width: `${widthPct}%`,
          background: color,
          opacity: swing.impact === "game-changing" ? 1 : swing.impact === "significant" ? 0.7 : 0.45,
        }}
        title={`${swing.quarter} ${swing.timestamp} — ${swing.runScore} (${swing.keyPlayer})`}
      />
    );
  });

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="text-xs font-semibold"
          style={{
            color: "#F59E0B",
            fontFamily: "var(--hi-font-display)",
            letterSpacing: "0.04em",
          }}
        >
          {game.teams.home}
        </span>
        <span
          className="text-xs"
          style={{
            color: "var(--hi-text-secondary,#8a8a86)",
            fontFamily: "var(--hi-font-display)",
            letterSpacing: "0.06em",
          }}
        >
          MOMENTUM FLOW
        </span>
        <span
          className="text-xs font-semibold"
          style={{
            color: "var(--hi-accent)",
            fontFamily: "var(--hi-font-display)",
            letterSpacing: "0.04em",
          }}
        >
          {game.teams.away}
        </span>
      </div>
      <div
        className="flex rounded-full overflow-hidden gap-px"
        style={{ height: "8px", background: "rgba(255,255,255,0.05)" }}
      >
        {segments}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// GAME MOMENTUM CARD
// ═══════════════════════════════════════════════════════════

function GameCard({ game, isGameOfTheNight }: { game: MomentumSwing; isGameOfTheNight: boolean }) {
  const [expanded, setExpanded] = useState(isGameOfTheNight);
  const winner = game.finalScore.away > game.finalScore.home ? "away" : "home";

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: isGameOfTheNight
          ? "1px solid rgba(142,200,240,0.3)"
          : "1px solid rgba(255,255,255,0.06)",
        ...(isGameOfTheNight
          ? { boxShadow: "0 0 30px rgba(142,200,240,0.08)" }
          : {}),
      }}
    >
      {/* Game of the Night badge */}
      {isGameOfTheNight && (
        <div
          className="px-4 py-1.5 text-center"
          style={{
            background: "rgba(142,200,240,0.1)",
            borderBottom: "1px solid rgba(142,200,240,0.15)",
          }}
        >
          <span
            className="text-xs font-bold"
            style={{
              color: "var(--hi-accent)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.12em",
            }}
          >
            GAME OF THE NIGHT
          </span>
        </div>
      )}

      <div className="p-5">
        {/* Score header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="text-lg font-bold"
              style={{
                color: winner === "away" ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--hi-font-display)",
              }}
            >
              {game.teams.away}
            </span>
            <span
              className="text-2xl font-bold tabular-nums"
              style={{
                color: winner === "away" ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--hi-font-mono)",
              }}
            >
              {game.finalScore.away}
            </span>
          </div>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "var(--hi-text-secondary,#8a8a86)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.08em",
            }}
          >
            FINAL
          </span>
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-bold tabular-nums"
              style={{
                color: winner === "home" ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--hi-font-mono)",
              }}
            >
              {game.finalScore.home}
            </span>
            <span
              className="text-lg font-bold"
              style={{
                color: winner === "home" ? "#fff" : "rgba(255,255,255,0.5)",
                fontFamily: "var(--hi-font-display)",
              }}
            >
              {game.teams.home}
            </span>
          </div>
        </div>

        {/* Momentum timeline */}
        <MomentumTimeline game={game} />

        {/* Clutch plays */}
        {game.clutchPlays.length > 0 && (
          <div className="mb-3">
            <div
              className="text-xs font-semibold mb-2"
              style={{
                color: "var(--hi-text-secondary,#8a8a86)",
                fontFamily: "var(--hi-font-display)",
                letterSpacing: "0.08em",
              }}
            >
              CLUTCH PLAYS
            </div>
            <div className="space-y-2">
              {game.clutchPlays.map((play, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                      <span
                        className="text-sm font-bold"
                        style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
                      >
                        {play.player}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "var(--hi-accent)", fontFamily: "var(--hi-font-display)" }}
                      >
                        {play.team}
                      </span>
                      <span
                        className="text-xs tabular-nums"
                        style={{
                          color: "var(--hi-text-secondary,#8a8a86)",
                          fontFamily: "var(--hi-font-mono)",
                          fontSize: "0.65rem",
                        }}
                      >
                        {play.timeRemaining}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
                    >
                      {play.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <WinProbBadge shift={play.winProbabilityShift} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Expand/collapse button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-center py-2 rounded-lg transition-colors"
          style={{
            background: expanded ? "rgba(142,200,240,0.08)" : "rgba(255,255,255,0.03)",
            color: expanded ? "var(--hi-accent)" : "rgba(255,255,255,0.4)",
            fontFamily: "var(--hi-font-display)",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            border: "none",
            cursor: "pointer",
          }}
        >
          {expanded ? "COLLAPSE DETAILS ▲" : "SHOW SWING DETAILS ▼"}
        </button>

        {/* Expanded section: swing details + narrative */}
        {expanded && (
          <div className="mt-4 space-y-4">
            {/* Swing details */}
            <div>
              <div
                className="text-xs font-semibold mb-2"
                style={{
                  color: "var(--hi-text-secondary,#8a8a86)",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.08em",
                }}
              >
                MOMENTUM SWINGS
              </div>
              <div className="space-y-2">
                {game.swings.map((swing, i) => (
                  <div
                    key={i}
                    className="rounded-lg px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderLeft: `3px solid ${swing.momentum === "home" ? "#F59E0B" : "var(--hi-accent)"}`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-xs font-bold tabular-nums"
                        style={{
                          color: "var(--hi-muted,#5c5c58)",
                          fontFamily: "var(--hi-font-mono)",
                        }}
                      >
                        {swing.quarter} {swing.timestamp}
                      </span>
                      <span
                        className="text-xs font-bold"
                        style={{
                          color: swing.momentum === "home" ? "#F59E0B" : "var(--hi-accent)",
                          fontFamily: "var(--hi-font-display)",
                        }}
                      >
                        {swing.runScore}
                      </span>
                      <ImpactBadge impact={swing.impact} />
                    </div>
                    <p
                      className="text-sm leading-relaxed mb-1"
                      style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
                    >
                      {swing.description}
                    </p>
                    <span
                      className="text-xs"
                      style={{ color: "var(--hi-text-secondary,#8a8a86)", fontFamily: "var(--hi-font-body)" }}
                    >
                      Key player: {swing.keyPlayer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative */}
            <div
              className="rounded-lg px-4 py-3"
              style={{
                background: "rgba(142,200,240,0.04)",
                border: "1px solid rgba(142,200,240,0.1)",
              }}
            >
              <div
                className="text-xs font-semibold mb-1.5"
                style={{
                  color: "var(--hi-accent)",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.08em",
                }}
              >
                AI NARRATIVE
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
              >
                {game.narrative}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TOP CLUTCH PERFORMER CARD
// ═══════════════════════════════════════════════════════════

function ClutchPerformerCard() {
  const { topClutchPerformer } = momentumData;
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(16,185,129,0.04)",
        border: "1px solid rgba(16,185,129,0.15)",
      }}
    >
      <div
        className="text-xs font-semibold mb-3"
        style={{
          color: "#10B981",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.1em",
        }}
      >
        TOP CLUTCH PERFORMER
      </div>
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center font-bold text-lg leading-none"
          style={{
            background: "rgba(16,185,129,0.12)",
            color: "#10B981",
            fontFamily: "var(--hi-font-mono)",
          }}
        >
          {topClutchPerformer.clutchRating.toFixed(1)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="text-lg font-bold"
              style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
            >
              {topClutchPerformer.player}
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--hi-accent)", fontFamily: "var(--hi-font-display)" }}
            >
              {topClutchPerformer.team}
            </span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
          >
            {topClutchPerformer.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MOMENTUM ENGINE PAGE
// ═══════════════════════════════════════════════════════════

export default function Momentum() {
  const { date, games, gameOfTheNight } = momentumData;
  const gotnGame = games.find((g) => g.gameId === gameOfTheNight);
  const otherGames = games.filter((g) => g.gameId !== gameOfTheNight);

  return (
    <ToolPageLayout
      subtitle="MOMENTUM ENGINE"
      sectionLabel="Daily momentum analysis"
      title="Momentum engine"
      description="AI-analyzed momentum shifts, clutch plays, and game narratives"
    >
        <div className="flex items-center gap-3 flex-wrap mb-8">
          <SeasonChip>{date}</SeasonChip>
          <span className="text-xs" style={{ color: "var(--hi-text-secondary,#8a8a86)" }}>
            {games.length} games analyzed
          </span>
        </div>

        <DeskPanel kicker="How it works" className="mb-8">
          <p className="text-sm leading-relaxed" style={{ color: "var(--hi-text-secondary,#8a8a86)" }}>
            The Momentum Engine tracks scoring runs, momentum shifts, and clutch plays across every game. AI analyzes play-by-play data to identify the critical swings that decided each game&apos;s outcome. Win Probability (WP) shifts show how each play changed the game&apos;s trajectory.
          </p>
        </DeskPanel>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span
            className="text-xs"
            style={{ color: "var(--hi-text-secondary,#8a8a86)", fontFamily: "var(--hi-font-body)" }}
          >
            Momentum:
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: "#F59E0B" }} />
            <span
              className="text-xs font-semibold"
              style={{ color: "#F59E0B", fontFamily: "var(--hi-font-display)" }}
            >
              Home
            </span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: "var(--hi-accent)" }} />
            <span
              className="text-xs font-semibold"
              style={{ color: "var(--hi-accent)", fontFamily: "var(--hi-font-display)" }}
            >
              Away
            </span>
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--hi-text-secondary,#8a8a86)", fontFamily: "var(--hi-font-body)" }}
          >
            |
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--hi-text-secondary,#8a8a86)", fontFamily: "var(--hi-font-body)" }}
          >
            Impact:
          </span>
          <ImpactBadge impact="game-changing" />
          <ImpactBadge impact="significant" />
          <ImpactBadge impact="notable" />
        </div>

        {/* Game of the Night (featured) */}
        {gotnGame && (
          <div className="mb-6">
            <GameCard game={gotnGame} isGameOfTheNight={true} />
          </div>
        )}

        {/* Top Clutch Performer */}
        <div className="mb-6">
          <ClutchPerformerCard />
        </div>

        {/* Other games grid */}
        <div
          className="text-xs font-semibold mb-4"
          style={{
            color: "var(--hi-text-secondary,#8a8a86)",
            fontFamily: "var(--hi-font-display)",
            letterSpacing: "0.1em",
          }}
        >
          ALL GAMES
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          {otherGames.map((game) => (
            <GameCard key={game.gameId} game={game} isGameOfTheNight={false} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Footer note */}
        <div
          className="rounded-lg px-5 py-4 text-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="text-xs font-semibold mb-1"
            style={{
              color: "#F59E0B",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.08em",
            }}
          >
            UPDATED DAILY
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--hi-text-secondary,#8a8a86)", fontFamily: "var(--hi-font-body)" }}
          >
            Momentum analysis is generated after all games complete each night
          </p>
        </div>
    </ToolPageLayout>
  );
}
