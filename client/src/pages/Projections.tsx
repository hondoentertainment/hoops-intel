// Rest-of-Season Projections Page
import { useState } from "react";
import { projectionsData, type TeamProjection, type PlayoffMatchup } from "../lib/projectionsData";

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
    if (proj === "Conference Finals") return "#0EA5E9";
    if (proj === "2nd Round") return "rgba(255,255,255,0.6)";
    return "rgba(255,255,255,0.35)";
  }

  return (
    <div className="mb-8">
      <div
        className="text-sm font-bold mb-3"
        style={{
          color: conference === "east" ? "#0EA5E9" : "#F59E0B",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.08em",
        }}
      >
        {conference === "east" ? "EASTERN CONFERENCE" : "WESTERN CONFERENCE"}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "'Barlow Condensed', sans-serif",
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
                  borderBottom: i === 5 ? "2px solid rgba(14,165,233,0.3)" :
                               i === 9 ? "2px solid rgba(245,158,11,0.3)" :
                               "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <td className="py-2 px-2">
                  <span
                    className="font-bold text-sm"
                    style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {t.team}
                  </span>
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs"
                  style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t.currentWins}-{t.currentLosses}
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs font-bold"
                  style={{ color: "#fff", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t.projectedWins}-{t.projectedLosses}
                </td>
                <td className="py-2 px-2">
                  <span
                    className="text-xs font-bold tabular-nums"
                    style={{
                      color: t.winChange > 0 ? "#10B981" : t.winChange < 0 ? "#F43F5E" : "rgba(255,255,255,0.35)",
                      fontFamily: "'JetBrains Mono', monospace",
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
                        color: t.playoffProb >= 90 ? "#10B981" : t.playoffProb >= 50 ? "#F59E0B" : "rgba(255,255,255,0.4)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {t.playoffProb.toFixed(0)}%
                    </span>
                  </div>
                </td>
                <td
                  className="py-2 px-2 tabular-nums text-xs"
                  style={{
                    color: t.championshipProb >= 5 ? "#F59E0B" : "rgba(255,255,255,0.35)",
                    fontFamily: "'JetBrains Mono', monospace",
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
                      fontFamily: "'DM Sans', sans-serif",
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
                      fontFamily: "'Barlow Condensed', sans-serif",
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
          <div className="w-6 h-1 rounded" style={{ background: "rgba(14,165,233,0.5)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
            Playoff line
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-1 rounded" style={{ background: "rgba(245,158,11,0.5)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
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
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {matchup.highSeed}
          </span>
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            vs
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {matchup.lowSeed}
          </span>
        </div>
        <span
          className="text-xs font-bold px-2 py-0.5 rounded"
          style={{
            background: "rgba(14,165,233,0.12)",
            color: "#0EA5E9",
            fontFamily: "'Barlow Condensed', sans-serif",
          }}
        >
          {matchup.seriesProb}
        </span>
      </div>
      <p
        className="text-xs"
        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
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
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Barlow Condensed', sans-serif",
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
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Barlow Condensed', sans-serif",
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
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {t.team}
              </span>
              <span
                className="text-xs tabular-nums"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t.currentWins}-{t.currentLosses}
              </span>
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
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
          style={{ color: "#0EA5E9", fontFamily: "'DM Sans', sans-serif" }}
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
                  ROS PROJECTIONS
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

      <div className="container py-8 max-w-6xl mx-auto px-4">
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
            WEEKLY PROJECTIONS
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Rest-of-Season Projections
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Win totals, playoff probabilities &amp; championship odds
          </p>

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
                  fontFamily: "'Barlow Condensed', sans-serif",
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
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {biggestRiser.team}
              </span>
              <span
                className="text-sm font-bold"
                style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {biggestRiser.change}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
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
                  fontFamily: "'Barlow Condensed', sans-serif",
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
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {biggestFaller.team}
              </span>
              <span
                className="text-sm font-bold"
                style={{ color: "#F43F5E", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {biggestFaller.change}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
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
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
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
                  fontFamily: "'Barlow Condensed', sans-serif",
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
                  color: "#0EA5E9",
                  fontFamily: "'Barlow Condensed', sans-serif",
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
              background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(14,165,233,0.08))",
              border: "1px solid rgba(245,158,11,0.2)",
            }}
          >
            <div
              className="text-xs font-semibold mb-3 text-center"
              style={{
                color: "#F59E0B",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              NBA FINALS
            </div>
            <div className="flex items-center justify-center gap-4 mb-3 flex-wrap">
              <span
                className="text-xl font-bold"
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {projectedBracket.finals.highSeed}
              </span>
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                vs
              </span>
              <span
                className="text-xl font-bold"
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
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
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                {projectedBracket.finals.seriesProb}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-center mt-3"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {projectedBracket.finals.keyFactor}
            </p>
          </div>
        </div>

        {/* Key Stretches */}
        <KeyStretches teams={teams} />
      </div>
    </div>
  );
}
