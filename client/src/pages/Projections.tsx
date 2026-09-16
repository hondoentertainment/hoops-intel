// Rest-of-Season Projections Page
import { useState } from "react";
import { projectionsData, type TeamProjection, type PlayoffMatchup } from "../lib/projectionsData";
import ToolPageLayout from "../components/ToolPageLayout";
import { DeskPanel, SeasonChip } from "../components/enhanced/EnhancedUi";

// ═══════════════════════════════════════════════════════════
// CONFERENCE TABLE
// ═══════════════════════════════════════════════════════════

function ConferenceTable({ conference, teams }: { conference: "east" | "west"; teams: TeamProjection[] }) {
  const sorted = [...teams].sort((a, b) => b.projectedWins - a.projectedWins);

  function rowTint(t: TeamProjection) {
    if (t.playoffProb >= 95) return "rgba(16,185,129,0.04)";
    if (t.playoffProb >= 50) return "rgba(245,158,11,0.04)";
    if (t.playoffProb >= 10) return "rgba(245,158,11,0.02)";
    return "rgba(244,63,94,0.03)";
  }

  function projectionColor(proj: string) {
    if (proj === "Champion") return "#F59E0B";
    if (proj === "Finals") return "#10B981";
    if (proj === "Conference Finals") return "var(--hi-accent)";
    if (proj === "2nd Round") return "var(--hi-text-secondary,#5c5c5a)";
    return "var(--hi-muted,#5c5c5a)";
  }

  return (
    <div className="mb-8">
      <div
        className="text-sm font-bold mb-3"
        style={{
          color: conference === "east" ? "var(--hi-accent-text,#146a8c)" : "#F59E0B",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.08em",
        }}
      >
        {conference === "east" ? "EASTERN CONFERENCE" : "WESTERN CONFERENCE"}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ fontFamily: "var(--hi-font-body)" }}>
          <thead>
            <tr
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {["Team", "Record", "Proj", "W\u0394", "Playoff %", "Title %", "SOS", "Outlook"].map((h) => (
                <th
                  key={h}
                  className="text-left py-2 px-2 text-xs font-semibold"
                  style={{
                    color: "var(--hi-text,#0a0a0a)",
                    fontFamily: "var(--hi-font-display)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((t, i) => (
              <tr
                key={t.team}
                style={{
                  background: rowTint(t),
                  borderBottom: i === 5 ? "2px solid rgba(142,200,240,0.3)" :
                               i === 9 ? "2px solid rgba(245,158,11,0.3)" :
                               "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <td className="py-2 px-2">
                  <span
                    className="font-bold text-sm"
                    style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
                  >
                    {t.team}
                  </span>
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs"
                  style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-mono)" }}
                >
                  {t.currentWins}-{t.currentLosses}
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs font-bold"
                  style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-mono)" }}
                >
                  {t.projectedWins}-{t.projectedLosses}
                </td>
                <td className="py-2 px-2">
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{
                      color: t.winChange > 0 ? "#10B981" : t.winChange < 0 ? "#F43F5E" : "var(--hi-muted,#5c5c58)",
                      fontFamily: "var(--hi-font-mono)",
                    }}
                  >
                    {t.winChange > 0 ? `+${t.winChange}` : t.winChange === 0 ? "--" : t.winChange}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-12 rounded-full overflow-hidden"
                      style={{ height: "4px", background: "rgba(255,255,255,0.07)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${t.playoffProb}%`,
                          background: t.playoffProb >= 90 ? "#10B981" : t.playoffProb >= 50 ? "#F59E0B" : "#F43F5E",
                        }}
                      />
                    </div>
                    <span
                      className="text-xs tabular-nums"
                      style={{
                        color: t.playoffProb >= 90 ? "#10B981" : t.playoffProb >= 50 ? "#F59E0B" : "var(--hi-muted,#5c5c58)",
                        fontFamily: "var(--hi-font-mono)",
                      }}
                    >
                      {t.playoffProb.toFixed(0)}%
                    </span>
                  </div>
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs"
                  style={{
                    color: t.championshipProb >= 5 ? "#F59E0B" : "var(--hi-muted,#5c5c58)",
                    fontFamily: "var(--hi-font-mono)",
                  }}
                >
                  {t.championshipProb > 0 ? `${t.championshipProb.toFixed(1)}%` : "--"}
                </td>
                <td className="py-2 px-2">
                  <span
                    className="text-xs px-1.5 py-0.5 rounded"
                    style={{
                      background: t.remainingSOS <= 5 ? "rgba(244,63,94,0.1)" :
                                  t.remainingSOS <= 15 ? "rgba(245,158,11,0.1)" :
                                  "rgba(16,185,129,0.1)",
                      color: t.remainingSOS <= 5 ? "#F43F5E" :
                             t.remainingSOS <= 15 ? "#F59E0B" :
                             "#10B981",
                      fontFamily: "var(--hi-font-body)",
                      fontSize: "0.65rem",
                    }}
                  >
                    {t.remainingSOSLabel}
                  </span>
                </td>
                <td className="py-2 px-2">
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: projectionColor(t.projection),
                      fontFamily: "var(--hi-font-display)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {t.projection}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Legend */}
      <div className="flex items-center gap-4 mt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-1 rounded" style={{ background: "rgba(142,200,240,0.5)" }} />
          <span className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-body)" }}>
            Playoff line
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-1 rounded" style={{ background: "rgba(245,158,11,0.5)" }} />
          <span className="text-xs" style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-body)" }}>
            Play-in line
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// BRACKET MATCHUP
// ═══════════════════════════════════════════════════════════

function BracketMatchup({ matchup }: { matchup: PlayoffMatchup }) {
  return (
    <div
      className="rounded-lg px-4 py-3"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-bold"
            style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
          >
            {matchup.highSeed}
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--hi-text-secondary,#5c5c58)" }}
          >
            vs
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
          >
            {matchup.lowSeed}
          </span>
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded"
          style={{
            background: "rgba(142,200,240,0.12)",
            color: "var(--hi-accent-text,#146a8c)",
            fontFamily: "var(--hi-font-display)",
          }}
        >
          {matchup.seriesProb}
        </span>
      </div>
      <p
        className="text-xs"
        style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
      >
        {matchup.keyFactor}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// BRACKET ROUND
// ═══════════════════════════════════════════════════════════

function BracketRound({ title, matchups }: { title: string; matchups: PlayoffMatchup[] }) {
  return (
    <div>
      <div
        className="text-xs font-semibold mb-2"
        style={{
          color: "var(--hi-text-secondary,#5c5c58)",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </div>
      <div className="space-y-2">
        {matchups.map((m, i) => (
          <BracketMatchup key={i} matchup={m} />
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// KEY STRETCHES
// ═══════════════════════════════════════════════════════════

function KeyStretches({ teams }: { teams: TeamProjection[] }) {
  const [showAll, setShowAll] = useState(false);
  const playoffTeams = teams.filter((t) => t.playoffProb >= 30 && t.keyStretch);
  const displayed = showAll ? playoffTeams : playoffTeams.slice(0, 6);

  return (
    <div className="mb-10">
      <div
        className="text-xs font-semibold mb-4"
        style={{
          color: "var(--hi-text-secondary,#5c5c58)",
          fontFamily: "var(--hi-font-display)",
          letterSpacing: "0.1em",
        }}
      >
        KEY UPCOMING STRETCHES
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayed.map((t) => (
          <div
            key={t.team}
            className="rounded-lg px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-sm font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {t.team}
              </span>
              <span
                className="text-xs tabular-nums"
                style={{ color: "var(--hi-text-secondary,#5c5c58)", fontFamily: "var(--hi-font-mono)" }}
              >
                {t.currentWins}-{t.currentLosses}
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {t.keyStretch}
            </p>
          </div>
        ))}
      </div>
      {playoffTeams.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xs font-medium mt-3 transition-colors"
          style={{ color: "var(--hi-accent-text,#146a8c)", fontFamily: "var(--hi-font-body)" }}
        >
          {showAll ? "Show less" : `Show all ${playoffTeams.length} teams`}
        </button>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PROJECTIONS PAGE
// ═══════════════════════════════════════════════════════════

export default function Projections() {
  const {
    generatedDate,
    weekLabel,
    weeklyNarrative,
    biggestRiser,
    biggestFaller,
    teams,
    projectedBracket,
  } = projectionsData;

  const eastTeams = teams.filter((t) => t.conference === "east");
  const westTeams = teams.filter((t) => t.conference === "west");

  // Separate bracket rounds
  const eastR1 = projectedBracket.east.filter((m) => m.round === "First Round");
  const eastR2 = projectedBracket.east.filter((m) => m.round === "Second Round");
  const eastCF = projectedBracket.east.filter((m) => m.round === "Conference Finals");
  const westR1 = projectedBracket.west.filter((m) => m.round === "First Round");
  const westR2 = projectedBracket.west.filter((m) => m.round === "Second Round");
  const westCF = projectedBracket.west.filter((m) => m.round === "Conference Finals");

  return (
    <ToolPageLayout
      subtitle="PROJECTIONS"
      sectionLabel="Weekly projections"
      title="Rest-of-season projections"
      description="Win totals, playoff probabilities & championship odds"
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

        {/* Biggest Movers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Riser */}
          <div
            className="rounded-xl px-5 py-4"
            style={{
              background: "rgba(16,185,129,0.05)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold"
                style={{
                  color: "#10B981",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.08em",
                }}
              >
                BIGGEST RISER
              </span>
              <span style={{ fontSize: "0.9rem" }}>&#9650;</span>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-lg font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {biggestRiser.team}
              </span>
              <span
                className="text-sm font-bold"
                style={{ color: "#10B981", fontFamily: "var(--hi-font-display)" }}
              >
                {biggestRiser.change}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {biggestRiser.reason}
            </p>
          </div>

          {/* Faller */}
          <div
            className="rounded-xl px-5 py-4"
            style={{
              background: "rgba(244,63,94,0.05)",
              border: "1px solid rgba(244,63,94,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs font-semibold"
                style={{
                  color: "#F43F5E",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.08em",
                }}
              >
                BIGGEST FALLER
              </span>
              <span style={{ fontSize: "0.9rem" }}>&#9660;</span>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span
                className="text-lg font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {biggestFaller.team}
              </span>
              <span
                className="text-sm font-bold"
                style={{ color: "#F43F5E", fontFamily: "var(--hi-font-display)" }}
              >
                {biggestFaller.change}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {biggestFaller.reason}
            </p>
          </div>
        </div>

        {/* Conference Tables */}
        <ConferenceTable conference="west" teams={westTeams} />
        <ConferenceTable conference="east" teams={eastTeams} />

        {/* Projected Playoff Bracket */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "var(--hi-text-secondary,#5c5c58)",
              fontFamily: "var(--hi-font-display)",
              letterSpacing: "0.1em",
            }}
          >
            PROJECTED PLAYOFF BRACKET
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
            {/* West */}
            <div>
              <div
                className="text-sm font-bold mb-3"
                style={{
                  color: "#F59E0B",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.06em",
                }}
              >
                WESTERN CONFERENCE
              </div>
              <div className="space-y-4">
                <BracketRound title="FIRST ROUND" matchups={westR1} />
                <BracketRound title="SECOND ROUND" matchups={westR2} />
                <BracketRound title="CONFERENCE FINALS" matchups={westCF} />
              </div>
            </div>

            {/* East */}
            <div>
              <div
                className="text-sm font-bold mb-3"
                style={{
                  color: "var(--hi-accent-text,#146a8c)",
                  fontFamily: "var(--hi-font-display)",
                  letterSpacing: "0.06em",
                }}
              >
                EASTERN CONFERENCE
              </div>
              <div className="space-y-4">
                <BracketRound title="FIRST ROUND" matchups={eastR1} />
                <BracketRound title="SECOND ROUND" matchups={eastR2} />
                <BracketRound title="CONFERENCE FINALS" matchups={eastCF} />
              </div>
            </div>
          </div>

          {/* Finals */}
          <div
            className="rounded-xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(142,200,240,0.08))",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <div
              className="text-xs font-semibold mb-3 text-center"
              style={{
                color: "#F59E0B",
                fontFamily: "var(--hi-font-display)",
                letterSpacing: "0.1em",
              }}
            >
              NBA FINALS
            </div>
            <div className="flex items-center justify-center gap-4 mb-3 flex-wrap">
              <span
                className="text-xl font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {projectedBracket.finals.highSeed}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--hi-text-secondary,#5c5c58)" }}
              >
                vs
              </span>
              <span
                className="text-xl font-bold"
                style={{ color: "var(--hi-text,#0a0a0a)", fontFamily: "var(--hi-font-display)" }}
              >
                {projectedBracket.finals.lowSeed}
              </span>
            </div>
            <div className="text-center mb-2">
              <span
                className="text-sm font-bold px-3 py-1 rounded-full"
                style={{
                  background: "rgba(245,158,11,0.15)",
                  color: "#F59E0B",
                  border: "1px solid rgba(245,158,11,0.3)",
                  fontFamily: "var(--hi-font-display)",
                }}
              >
                {projectedBracket.finals.seriesProb}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-center mt-3"
              style={{ color: "var(--hi-muted,#5c5c58)", fontFamily: "var(--hi-font-body)" }}
            >
              {projectedBracket.finals.keyFactor}
            </p>
          </div>
        </div>

        {/* Key Stretches */}
        <KeyStretches teams={teams} />
    </ToolPageLayout>
  );
}
