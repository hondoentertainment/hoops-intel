// Coach's Corner — Weekly Tactical Breakdowns
import { useState } from "react";
import { tacticsData, type TacticalBreakdown } from "../lib/tacticsData";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskPanel, SeasonChip } from "../components/enhanced/EnhancedUi";

// ═══════════════════════════════════════════════════════════
// SCHEME GRADE BADGE
// ═══════════════════════════════════════════════════════════

function SchemeGradeBadge({ grade }: { grade: string }) {
  const color =
    grade.startsWith("A") ? "#10B981" :
    grade.startsWith("B") ? "var(--hi-accent)" :
    grade.startsWith("C") ? "#F59E0B" :
    "#F43F5E";

  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-lg"
      style={{
        background: `${color}15`,
        color,
        border: `1px solid ${color}40`,
        fontFamily: "var(--hi-font-display)",
      }}
    >
      {grade}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// RANK INDICATOR
// ═══════════════════════════════════════════════════════════

function RankIndicator({ label, rank, total = 30 }: { label: string; rank: number; total?: number }) {
  const pct = ((total - rank) / total) * 100;
  const color =
    rank <= 5 ? "#10B981" :
    rank <= 10 ? "var(--hi-accent)" :
    rank <= 20 ? "#F59E0B" :
    "#F43F5E";

  return (
    <div className="flex-1">
      <div
        className="text-xs mb-1"
        style={{
          color: "var(--hi-text-secondary,#5c5c58)",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </div>
      <div className="flex items-center gap-2">
        <div
          className="flex-1 rounded-full overflow-hidden"
          style={{ height: "4px", background: "rgba(255,255,255,0.07)" }}
        >
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: color }}
          />
        </div>
        <span
          className="text-xs font-bold tabular-nums w-6 text-right"
          style={{ color, fontFamily: "var(--hi-font-mono)" }}
        >
          {rank}
        </span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// STYLE BADGE
// ═══════════════════════════════════════════════════════════

function StyleBadge({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div>
      <div
        className="text-xs mb-0.5"
        style={{
          color: "var(--hi-text-secondary,#5c5c58)",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.06em",
          fontSize: "0.65rem",
        }}
      >
        {label}
      </div>
      <span
        className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded"
        style={{
          background: `${color}12`,
          color,
          border: `1px solid ${color}30`,
          fontFamily: "var(--hi-font-body)",
          fontSize: "0.7rem",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TACTICAL CARD
// ═══════════════════════════════════════════════════════════

function TacticalCard({ breakdown }: { breakdown: TacticalBreakdown }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Header: Team + Coach + Grade */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-lg font-bold"
              style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)", letterSpacing: "0.02em" }}
            >
              {breakdown.team}
            </span>
            <span
              className="text-sm"
              style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {breakdown.coach}
            </span>
          </div>
        </div>
        <SchemeGradeBadge grade={breakdown.schemeGrade} />
      </div>

      {/* Offense / Defense style badges */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <StyleBadge label="OFFENSE" value={breakdown.offenseStyle} color="var(--hi-accent)" />
        <StyleBadge label="DEFENSE" value={breakdown.defenseScheme} color="#10B981" />
      </div>

      {/* Rank indicators */}
      <div className="flex gap-4 mb-4">
        <RankIndicator label="PACE" rank={breakdown.paceRank} />
        <RankIndicator label="ORtg" rank={breakdown.offRatingRank} />
        <RankIndicator label="DRtg" rank={breakdown.defRatingRank} />
      </div>

      {/* Key Play */}
      <div
        className="rounded-lg px-4 py-3 mb-4"
        style={{
          background: "rgba(142,200,240,0.05)",
          border: "1px solid rgba(142,200,240,0.1)",
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-xs font-semibold"
            style={{
              color: "var(--hi-accent-text,#146a8c)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.08em",
            }}
          >
            KEY PLAY: {breakdown.keyPlay.name}
          </span>
          <div className="flex gap-3">
            <span
              className="text-xs tabular-nums"
              style={{ color: "#F59E0B", fontFamily: "var(--hi-font-mono)" }}
            >
              {breakdown.keyPlay.frequency}
            </span>
            <span
              className="text-xs tabular-nums"
              style={{ color: "#10B981", fontFamily: "var(--hi-font-mono)" }}
            >
              {breakdown.keyPlay.efficiency}
            </span>
          </div>
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
        >
          {breakdown.keyPlay.description}
        </p>
      </div>

      {/* Weekly Adjustment */}
      <div className="mb-3">
        <div
          className="text-xs font-semibold mb-1"
          style={{
            color: "#F59E0B",
            fontFamily: "var(--hi-font-display)",
            letterSpacing: "0.06em",
          }}
        >
          THIS WEEK&apos;S ADJUSTMENT
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
        >
          {breakdown.weeklyAdjustment}
        </p>
      </div>

      {/* Expandable Narrative */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-medium transition-colors"
        style={{ color: "var(--hi-accent-text,#146a8c)", fontFamily: "var(--hi-font-body)" }}
      >
        {expanded ? "Hide analysis" : "Read full analysis"} {expanded ? "▲" : "▼"}
      </button>
      {expanded && (
        <p
          className="text-sm leading-relaxed mt-2"
          style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
        >
          {breakdown.narrative}
        </p>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HOT SEAT CARD
// ═══════════════════════════════════════════════════════════

function HotSeatCard({ coach, team, reason, temperature }: {
  coach: string;
  team: string;
  reason: string;
  temperature: "scorching" | "warm" | "lukewarm";
}) {
  const config = {
    scorching: { flames: "\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25", color: "#F43F5E", bg: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.2)" },
    warm: { flames: "\uD83D\uDD25\uD83D\uDD25", color: "#F59E0B", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
    lukewarm: { flames: "\uD83D\uDD25", color: "var(--hi-muted,#5c5c58)", bg: "var(--hi-muted,#5c5c58)", border: "var(--hi-muted,#5c5c58)" },
  }[temperature];

  return (
    <div
      className="rounded-xl px-5 py-4"
      style={{
        background: config.bg,
        border: `1px solid ${config.border}`,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="text-base font-bold"
            style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
          >
            {coach}
          </span>
          <span
            className="text-sm"
            style={{ color: config.color, fontFamily: "var(--hi-font-display)" }}
          >
            {team}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{config.flames}</span>
          <span
            className="text-xs font-semibold uppercase"
            style={{ color: config.color, fontFamily: "var(--hi-font-display)", letterSpacing: "0.06em" }}
          >
            {temperature}
          </span>
        </div>
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
      >
        {reason}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// COACH'S CORNER PAGE
// ═══════════════════════════════════════════════════════════

export default function CoachCorner() {
  const {
    generatedDate,
    weekLabel,
    weeklyNarrative,
    schemeOfTheWeek,
    breakdowns,
    trendingTactics,
    coachHotSeat,
  } = tacticsData;

  return (
    <ToolPageLayout
      subtitle="COACH CORNER"
      sectionLabel="Weekly tactical breakdown"
      title="Coach's Corner"
      description="Scheme analysis & tactical trends across the NBA"
    >
        <div className="flex items-center gap-3 flex-wrap mb-8">
          <SeasonChip>{weekLabel}</SeasonChip>
          <span className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
            Generated {generatedDate}
          </span>
        </div>

        <DeskPanel kicker="Weekly narrative" className="mb-8">
          <p className="text-sm leading-relaxed" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
            {weeklyNarrative}
          </p>
        </DeskPanel>

        {/* Scheme of the Week */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-3"
            style={{
              color: "#F59E0B",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.1em",
            }}
          >
            SCHEME OF THE WEEK
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(142,200,240,0.05))",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-sm font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  color: "#F59E0B",
                  fontFamily: "var(--hi-font-display)",
                }}
              >
                {schemeOfTheWeek.team}
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {schemeOfTheWeek.title}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {schemeOfTheWeek.description}
            </p>
          </div>
        </div>

        {/* Team Tactical Cards Grid */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "var(--hi-text-secondary,#5c5c58)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.1em",
            }}
          >
            FEATURED TEAM BREAKDOWNS
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {breakdowns.map((b) => (
              <TacticalCard key={b.team} breakdown={b} />
            ))}
          </div>
        </div>

        {/* Trending Tactics */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "var(--hi-text-secondary,#5c5c58)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.1em",
            }}
          >
            TRENDING TACTICS
          </div>
          <div className="space-y-4">
            {trendingTactics.map((t) => (
              <div
                key={t.title}
                className="rounded-xl px-5 py-4"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    className="text-base font-bold"
                    style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
                  >
                    {t.title}
                  </span>
                  <div className="flex gap-1">
                    {t.teams.map((team) => (
                      <span
                        key={team}
                        className="text-xs font-semibold px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(142,200,240,0.1)",
                          color: "var(--hi-accent-text,#146a8c)",
                          fontFamily: "var(--hi-font-display)",
                        }}
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
                >
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach Hot Seat */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "var(--hi-text-secondary,#5c5c58)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.1em",
            }}
          >
            COACH HOT SEAT
          </div>
          <div className="space-y-3">
            {coachHotSeat.map((c) => (
              <HotSeatCard key={c.coach} {...c} />
            ))}
          </div>
        </div>
    </ToolPageLayout>
  );
}
