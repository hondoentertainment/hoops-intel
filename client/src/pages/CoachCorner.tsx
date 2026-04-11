// Coach's Corner — Weekly Tactical Breakdowns
import { useState } from "react";
import { tacticsData, type TacticalBreakdown } from "../lib/tacticsData";

// ═══════════════════════════════════════════════════════════
// SCHEME GRADE BADGE
// ═══════════════════════════════════════════════════════════

function SchemeGradeBadge({ grade }: { grade: string }) {
  const color =
    grade.startsWith("A") ? "#10B981" :
    grade.startsWith("B") ? "#0EA5E9" :
    grade.startsWith("C") ? "#F59E0B" :
    "#F43F5E";

  return (
    <span
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg font-bold text-lg"
      style={{
        background: `${color}15`,
        color,
        border: `1px solid ${color}40`,
        fontFamily: "'Barlow Condensed', sans-serif",
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
    rank <= 10 ? "#0EA5E9" :
    rank <= 20 ? "#F59E0B" :
    "#F43F5E";

  return (
    <div className="flex-1">
      <div
        className="text-xs mb-1"
        style={{
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Barlow Condensed', sans-serif",
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
          style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
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
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Barlow Condensed', sans-serif",
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
          fontFamily: "'DM Sans', sans-serif",
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
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            >
              {breakdown.team}
            </span>
            <span
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {breakdown.coach}
            </span>
          </div>
        </div>
        <SchemeGradeBadge grade={breakdown.schemeGrade} />
      </div>

      {/* Offense / Defense style badges */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <StyleBadge label="OFFENSE" value={breakdown.offenseStyle} color="#0EA5E9" />
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
          background: "rgba(14,165,233,0.05)",
          border: "1px solid rgba(14,165,233,0.1)",
        }}
      >
        <div className="flex items-center justify-between mb-1.5">
          <span
            className="text-xs font-semibold"
            style={{
              color: "#0EA5E9",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            KEY PLAY: {breakdown.keyPlay.name}
          </span>
          <div className="flex gap-3">
            <span
              className="text-xs tabular-nums"
              style={{ color: "#F59E0B", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {breakdown.keyPlay.frequency}
            </span>
            <span
              className="text-xs tabular-nums"
              style={{ color: "#10B981", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {breakdown.keyPlay.efficiency}
            </span>
          </div>
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
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
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          THIS WEEK&apos;S ADJUSTMENT
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {breakdown.weeklyAdjustment}
        </p>
      </div>

      {/* Expandable Narrative */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs font-medium transition-colors"
        style={{ color: "#0EA5E9", fontFamily: "'DM Sans', sans-serif" }}
      >
        {expanded ? "Hide analysis" : "Read full analysis"} {expanded ? "▲" : "▼"}
      </button>
      {expanded && (
        <p
          className="text-sm leading-relaxed mt-2"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
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
    lukewarm: { flames: "\uD83D\uDD25", color: "rgba(255,255,255,0.5)", bg: "rgba(255,255,255,0.03)", border: "rgba(255,255,255,0.1)" },
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
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {coach}
          </span>
          <span
            className="text-sm"
            style={{ color: config.color, fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {team}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{config.flames}</span>
          <span
            className="text-xs font-semibold uppercase"
            style={{ color: config.color, fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
          >
            {temperature}
          </span>
        </div>
      </div>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
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
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "rgba(5,13,26,0.95)",
          borderColor: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14">
            <a href="/" className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
              >
                HI
              </div>
              <div>
                <div
                  className="text-white text-lg leading-none"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  HOOPS INTEL
                </div>
                <div
                  className="text-xs"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.08em",
                    fontSize: "0.6rem",
                  }}
                >
                  COACH&apos;S CORNER
                </div>
              </div>
            </a>
            <a
              href="/"
              className="text-xs font-medium transition-colors"
              style={{ color: "#0EA5E9", fontFamily: "'DM Sans', sans-serif" }}
            >
              &larr; Back to Today
            </a>
          </div>
        </div>
      </header>

      <div className="container py-8 max-w-5xl mx-auto px-4">
        {/* Page header */}
        <div className="mb-8">
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            WEEKLY TACTICAL BREAKDOWN
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Coach&apos;s Corner
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Scheme analysis &amp; tactical trends across the NBA
          </p>

          {/* Week badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(14,165,233,0.12)",
                color: "#0EA5E9",
                border: "1px solid rgba(14,165,233,0.25)",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {weekLabel}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Generated {generatedDate}
            </span>
          </div>
        </div>

        {/* Weekly Narrative */}
        <div
          className="rounded-xl px-5 py-4 mb-8"
          style={{
            background: "rgba(14,165,233,0.05)",
            border: "1px solid rgba(14,165,233,0.12)",
          }}
        >
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {weeklyNarrative}
          </p>
        </div>

        {/* Scheme of the Week */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-3"
            style={{
              color: "#F59E0B",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            SCHEME OF THE WEEK
          </div>
          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(14,165,233,0.05))",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-sm font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  color: "#F59E0B",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                {schemeOfTheWeek.team}
              </span>
              <span
                className="text-lg font-bold"
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {schemeOfTheWeek.title}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}
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
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
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
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
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
                    style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {t.title}
                  </span>
                  <div className="flex gap-1">
                    {t.teams.map((team) => (
                      <span
                        key={team}
                        className="text-xs font-semibold px-1.5 py-0.5 rounded"
                        style={{
                          background: "rgba(14,165,233,0.1)",
                          color: "#0EA5E9",
                          fontFamily: "'Barlow Condensed', sans-serif",
                        }}
                      >
                        {team}
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
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
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
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
      </div>
    </div>
  );
}
