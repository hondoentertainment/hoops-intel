// Lineup Intelligence Page — Weekly lineup analysis and team breakdowns
// Sortable league-wide rankings + team cards with best/worst/death lineups

import { useState } from "react";
import { lineupData } from "../lib/lineupData";
import type { LineupUnit, TeamLineupIntel } from "../lib/lineupData";
import SiteHeader from "../components/SiteHeader";

// ═══════════════════════════════════════════════════════════
// NET RATING BAR
// ═══════════════════════════════════════════════════════════

function NetRatingBar({ value, max = 25 }: { value: number; max?: number }) {
  const positive = value > 0;
  const color = positive
    ? value >= 15
      ? "#10B981"
      : value >= 8
      ? "#0EA5E9"
      : "#22D3EE"
    : value <= -8
    ? "#F43F5E"
    : "#F59E0B";
  const width = Math.min(Math.abs(value) / max * 100, 100);

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "5px", background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${width}%`, background: color }}
        />
      </div>
      <span
        className="text-sm font-bold tabular-nums w-12 text-right"
        style={{ color, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}
      >
        {positive ? "+" : ""}{value.toFixed(1)}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LINEUP PILL (players list)
// ═══════════════════════════════════════════════════════════

function LineupPill({ players }: { players: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {players.map((p, i) => (
        <span
          key={i}
          className="text-xs px-2 py-0.5 rounded"
          style={{
            background: "rgba(255,255,255,0.04)",
            color: "rgba(255,255,255,0.65)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {p.split(" ").slice(-1)[0]}
        </span>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LINEUP DETAIL SECTION
// ═══════════════════════════════════════════════════════════

function LineupSection({
  label,
  labelColor,
  lineup,
  muted = false,
}: {
  label: string;
  labelColor: string;
  lineup: LineupUnit;
  muted?: boolean;
}) {
  return (
    <div
      className="rounded-lg px-4 py-3"
      style={{
        background: muted ? "rgba(255,255,255,0.01)" : "rgba(255,255,255,0.02)",
        borderLeft: `3px solid ${labelColor}`,
        opacity: muted ? 0.65 : 1,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-bold"
          style={{
            color: labelColor,
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.08em",
          }}
        >
          {label}
        </span>
        <div className="flex items-center gap-3">
          <span
            className="text-xs tabular-nums"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
            }}
          >
            {lineup.minutesTogether} MIN
          </span>
          <span
            className="text-xs font-bold tabular-nums"
            style={{
              color: lineup.netRating >= 0 ? "#10B981" : "#F43F5E",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
            }}
          >
            {lineup.netRating >= 0 ? "+" : ""}{lineup.netRating.toFixed(1)} NET
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {lineup.players.map((p, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 rounded"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-1.5">
        <span
          className="text-xs tabular-nums"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
          }}
        >
          OFF: {lineup.offRating.toFixed(1)}
        </span>
        <span
          className="text-xs tabular-nums"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
          }}
        >
          DEF: {lineup.defRating.toFixed(1)}
        </span>
        <span
          className="text-xs tabular-nums"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
          }}
        >
          +/-: {lineup.plusMinus >= 0 ? "+" : ""}{lineup.plusMinus}
        </span>
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {lineup.keyStrength}
      </p>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TEAM CARD
// ═══════════════════════════════════════════════════════════

function TeamCard({ team }: { team: TeamLineupIntel }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="p-5">
        {/* Team header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-bold"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {team.team}
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {team.teamRecord}
            </span>
          </div>
          <span
            className="text-xs font-bold tabular-nums px-2 py-0.5 rounded"
            style={{
              color: team.bestUnit.netRating >= 12 ? "#10B981" : "#0EA5E9",
              background:
                team.bestUnit.netRating >= 12
                  ? "rgba(16,185,129,0.12)"
                  : "rgba(14,165,233,0.12)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
            }}
          >
            +{team.bestUnit.netRating.toFixed(1)} BEST
          </span>
        </div>

        {/* Best unit */}
        <LineupSection label="BEST FIVE" labelColor="#10B981" lineup={team.bestUnit} />

        {/* Death lineup */}
        <div className="mt-3">
          <LineupSection label="DEATH LINEUP" labelColor="#F59E0B" lineup={team.deathLineup} />
        </div>

        {/* Worst unit (muted) */}
        <div className="mt-3">
          <LineupSection label="WORST UNIT" labelColor="#F43F5E" lineup={team.worstUnit} muted />
        </div>

        {/* New look lineup (if exists) */}
        {team.newLookLineup && (
          <div className="mt-3">
            <LineupSection label="NEW LOOK" labelColor="#8B5CF6" lineup={team.newLookLineup} />
          </div>
        )}

        {/* Expand/collapse */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-center py-2 mt-3 rounded-lg transition-colors"
          style={{
            background: expanded ? "rgba(14,165,233,0.08)" : "rgba(255,255,255,0.03)",
            color: expanded ? "#0EA5E9" : "rgba(255,255,255,0.4)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.06em",
            border: "none",
            cursor: "pointer",
          }}
        >
          {expanded ? "HIDE NARRATIVE ▲" : "SHOW NARRATIVE ▼"}
        </button>

        {expanded && (
          <div
            className="mt-3 rounded-lg px-4 py-3"
            style={{
              background: "rgba(14,165,233,0.04)",
              border: "1px solid rgba(14,165,233,0.1)",
            }}
          >
            <div
              className="text-xs font-semibold mb-1.5"
              style={{
                color: "#0EA5E9",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              AI ANALYSIS
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {team.narrative}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LEAGUE-WIDE TABLE
// ═══════════════════════════════════════════════════════════

type SortKey = "netRating" | "offRating" | "defRating" | "plusMinus" | "minutesTogether";

function LeagueTable() {
  const [sortBy, setSortBy] = useState<SortKey>("netRating");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sorted = [...lineupData.leagueWideBest].sort((a, b) => {
    const mult = sortDir === "desc" ? -1 : 1;
    return (a[sortBy] - b[sortBy]) * mult;
  });

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortDir(sortDir === "desc" ? "asc" : "desc");
    } else {
      setSortBy(key);
      setSortDir("desc");
    }
  };

  const headerStyle = (key: SortKey) => ({
    color: sortBy === key ? "#0EA5E9" : "rgba(255,255,255,0.4)",
    fontFamily: "'Barlow Condensed', sans-serif",
    letterSpacing: "0.06em",
    cursor: "pointer" as const,
  });

  const arrow = (key: SortKey) => (sortBy === key ? (sortDir === "desc" ? " ▼" : " ▲") : "");

  return (
    <div
      className="rounded-xl overflow-hidden mb-8"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <th
                className="text-left px-4 py-3 text-xs font-semibold"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
              >
                #
              </th>
              <th
                className="text-left px-4 py-3 text-xs font-semibold"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
              >
                LINEUP
              </th>
              <th
                className="text-right px-4 py-3 text-xs font-semibold"
                style={headerStyle("netRating")}
                onClick={() => handleSort("netRating")}
              >
                NET{arrow("netRating")}
              </th>
              <th
                className="text-right px-4 py-3 text-xs font-semibold"
                style={headerStyle("offRating")}
                onClick={() => handleSort("offRating")}
              >
                OFF{arrow("offRating")}
              </th>
              <th
                className="text-right px-4 py-3 text-xs font-semibold"
                style={headerStyle("defRating")}
                onClick={() => handleSort("defRating")}
              >
                DEF{arrow("defRating")}
              </th>
              <th
                className="text-right px-4 py-3 text-xs font-semibold"
                style={headerStyle("plusMinus")}
                onClick={() => handleSort("plusMinus")}
              >
                +/-{arrow("plusMinus")}
              </th>
              <th
                className="text-right px-4 py-3 text-xs font-semibold"
                style={headerStyle("minutesTogether")}
                onClick={() => handleSort("minutesTogether")}
              >
                MIN{arrow("minutesTogether")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((lineup, i) => (
              <tr
                key={i}
                style={{
                  borderBottom:
                    i < sorted.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <td
                  className="px-4 py-3 font-bold"
                  style={{
                    color: "#0EA5E9",
                    fontFamily: "'Barlow Condensed', sans-serif",
                  }}
                >
                  {i + 1}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {lineup.team}
                    </span>
                  </div>
                  <LineupPill players={lineup.players} />
                </td>
                <td
                  className="px-4 py-3 text-right font-bold tabular-nums"
                  style={{
                    color: lineup.netRating >= 0 ? "#10B981" : "#F43F5E",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {lineup.netRating >= 0 ? "+" : ""}{lineup.netRating.toFixed(1)}
                </td>
                <td
                  className="px-4 py-3 text-right tabular-nums"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {lineup.offRating.toFixed(1)}
                </td>
                <td
                  className="px-4 py-3 text-right tabular-nums"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {lineup.defRating.toFixed(1)}
                </td>
                <td
                  className="px-4 py-3 text-right font-bold tabular-nums"
                  style={{
                    color: lineup.plusMinus >= 0 ? "#10B981" : "#F43F5E",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {lineup.plusMinus >= 0 ? "+" : ""}{lineup.plusMinus}
                </td>
                <td
                  className="px-4 py-3 text-right tabular-nums"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.8rem",
                  }}
                >
                  {lineup.minutesTogether}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// LINEUP INTELLIGENCE PAGE
// ═══════════════════════════════════════════════════════════

export default function LineupIntel() {
  const { generatedDate, weekLabel, teams, biggestSurprise } = lineupData;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      {/* Sticky Header */}
      <SiteHeader subtitle="LINEUP INTEL" />

      <div className="container py-8 max-w-4xl mx-auto">
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
            WEEKLY ANALYSIS
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Lineup Intelligence
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            AI-analyzed lineup combinations, death lineups, and rotation insights
          </p>

          {/* Week badge + generated date */}
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

        {/* Explanation box */}
        <div
          className="rounded-xl px-5 py-4 mb-8"
          style={{
            background: "rgba(14,165,233,0.05)",
            border: "1px solid rgba(14,165,233,0.12)",
          }}
        >
          <div
            className="text-xs font-semibold mb-1.5"
            style={{
              color: "#0EA5E9",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            METHODOLOGY
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Lineup Intelligence ranks five-man units by net rating (points scored minus points allowed per 100 possessions). &quot;Death Lineups&quot; are closing units used in the final 5 minutes of close games. Minimum 30 minutes together to qualify. Data sourced from NBA.com advanced stats.
          </p>
        </div>

        {/* League-wide best lineups table */}
        <div
          className="text-xs font-semibold mb-3"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          LEAGUE-WIDE TOP LINEUPS
        </div>
        <LeagueTable />

        {/* Biggest Surprise callout */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            background: "rgba(139,92,246,0.05)",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "#8B5CF6",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            BIGGEST SURPRISE
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span
              className="text-lg font-bold"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {biggestSurprise.team}
            </span>
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {biggestSurprise.description}
          </p>
        </div>

        {/* Team cards grid */}
        <div
          className="text-xs font-semibold mb-4"
          style={{
            color: "rgba(255,255,255,0.4)",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          TEAM BREAKDOWNS
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          {teams.map((team) => (
            <TeamCard key={team.team} team={team} />
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
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            UPDATED WEEKLY
          </div>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Lineup intelligence is regenerated every Monday with the latest rotation data
          </p>
        </div>
      </div>
    </div>
  );
}
