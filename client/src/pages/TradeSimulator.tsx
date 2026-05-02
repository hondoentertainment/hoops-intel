// Trade Simulator Page
// AI-powered "What If" trade proposals and interactive trade builder

import { useState, useMemo } from "react";
import { tradeSimData, type TradeProposal, type TradeablePlayer } from "../lib/tradeSimData";
import SiteHeader from "../components/SiteHeader";

// ═══════════════════════════════════════════════════════════
// NBA TEAMS (all 30)
// ═══════════════════════════════════════════════════════════

const NBA_TEAMS = [
  "ATL", "BOS", "BKN", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW",
  "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK",
  "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS",
];

const TEAM_NAMES: Record<string, string> = {
  ATL: "Atlanta Hawks", BOS: "Boston Celtics", BKN: "Brooklyn Nets",
  CHA: "Charlotte Hornets", CHI: "Chicago Bulls", CLE: "Cleveland Cavaliers",
  DAL: "Dallas Mavericks", DEN: "Denver Nuggets", DET: "Detroit Pistons",
  GSW: "Golden State Warriors", HOU: "Houston Rockets", IND: "Indiana Pacers",
  LAC: "LA Clippers", LAL: "Los Angeles Lakers", MEM: "Memphis Grizzlies",
  MIA: "Miami Heat", MIL: "Milwaukee Bucks", MIN: "Minnesota Timberwolves",
  NOP: "New Orleans Pelicans", NYK: "New York Knicks", OKC: "Oklahoma City Thunder",
  ORL: "Orlando Magic", PHI: "Philadelphia 76ers", PHX: "Phoenix Suns",
  POR: "Portland Trail Blazers", SAC: "Sacramento Kings", SAS: "San Antonio Spurs",
  TOR: "Toronto Raptors", UTA: "Utah Jazz", WAS: "Washington Wizards",
};

// ═══════════════════════════════════════════════════════════
// VERDICT BADGE
// ═══════════════════════════════════════════════════════════

function VerdictBadge({ verdict }: { verdict: "approve" | "reject" | "conditional" }) {
  const config = {
    approve: { label: "APPROVE", bg: "rgba(16,185,129,0.12)", color: "#10B981", border: "rgba(16,185,129,0.3)", icon: "\u2713" },
    reject: { label: "REJECT", bg: "rgba(244,63,94,0.12)", color: "#F43F5E", border: "rgba(244,63,94,0.3)", icon: "\u2717" },
    conditional: { label: "CONDITIONAL", bg: "rgba(245,158,11,0.12)", color: "#F59E0B", border: "rgba(245,158,11,0.3)", icon: "\u26A0" },
  }[verdict];

  return (
    <span
      className="inline-flex items-center text-xs font-bold px-3 py-1 rounded-full"
      style={{
        background: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
        fontFamily: "'Barlow Condensed', sans-serif",
        letterSpacing: "0.08em",
      }}
    >
      {config.icon} {config.label}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// SALARY MATCH INDICATOR
// ═══════════════════════════════════════════════════════════

function SalaryIndicator({ match, diff }: { match: boolean; diff: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold"
        style={{
          background: match ? "rgba(16,185,129,0.15)" : "rgba(244,63,94,0.15)",
          color: match ? "#10B981" : "#F43F5E",
        }}
      >
        {match ? "\u2713" : "\u2717"}
      </span>
      <span
        className="text-xs"
        style={{
          color: match ? "rgba(16,185,129,0.8)" : "rgba(244,63,94,0.8)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Salary: {diff}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// IMPACT BAR (-10 to +10)
// ═══════════════════════════════════════════════════════════

function ImpactBar({ label, value }: { label: string; value: number }) {
  const clamped = Math.max(-10, Math.min(10, value));
  const pct = Math.abs(clamped) * 5; // 0–50% width from center
  const isPositive = clamped >= 0;
  const color = isPositive ? "#10B981" : "#F43F5E";

  return (
    <div className="flex items-center gap-2 mb-1.5">
      <span
        className="text-xs w-20 text-right flex-shrink-0"
        style={{
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.04em",
          fontSize: "0.65rem",
        }}
      >
        {label.toUpperCase()}
      </span>
      <div
        className="flex-1 relative rounded-full overflow-hidden"
        style={{ height: "6px", background: "rgba(255,255,255,0.06)" }}
      >
        {/* Center line */}
        <div
          className="absolute top-0 bottom-0"
          style={{ left: "50%", width: "1px", background: "rgba(255,255,255,0.15)" }}
        />
        {/* Bar */}
        <div
          className="absolute top-0 bottom-0 rounded-full transition-all"
          style={{
            left: isPositive ? "50%" : `${50 - pct}%`,
            width: `${pct}%`,
            background: color,
          }}
        />
      </div>
      <span
        className="text-xs font-bold w-8 text-right tabular-nums"
        style={{
          color,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
        }}
      >
        {clamped > 0 ? "+" : ""}{clamped}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WIN PROJECTION BADGE
// ═══════════════════════════════════════════════════════════

function WinBadge({ label }: { label: string }) {
  const isPositive = label.startsWith("+");
  return (
    <span
      className="inline-flex items-center text-xs font-bold px-2 py-0.5 rounded"
      style={{
        background: isPositive ? "rgba(16,185,129,0.1)" : "rgba(244,63,94,0.1)",
        color: isPositive ? "#10B981" : "#F43F5E",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.65rem",
      }}
    >
      {label}
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// FEATURED TRADE CARD
// ═══════════════════════════════════════════════════════════

function TradeCard({ trade }: { trade: TradeProposal }) {
  const [expanded, setExpanded] = useState(false);

  const verdictBorderColor = {
    approve: "rgba(16,185,129,0.3)",
    reject: "rgba(244,63,94,0.3)",
    conditional: "rgba(245,158,11,0.3)",
  }[trade.aiVerdict];

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderTop: `2px solid ${verdictBorderColor}`,
      }}
    >
      {/* Header row */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <span
            className="text-lg font-bold"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {trade.team1.team}
          </span>
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif" }}
          >
            trades with
          </span>
          <span
            className="text-lg font-bold"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            {trade.team2.team}
          </span>
        </div>
        <VerdictBadge verdict={trade.aiVerdict} />
      </div>

      {/* Two columns: team1 and team2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Team 1 */}
        <div className="px-5 py-3" style={{ borderRight: "1px solid rgba(255,255,255,0.04)" }}>
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team1.team} SENDS
          </div>
          <div className="space-y-1 mb-3">
            {trade.team1.sending.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-sm"
                style={{ color: "#F43F5E", fontFamily: "'DM Sans', sans-serif" }}
              >
                <span style={{ fontSize: "0.6rem" }}>{"\u25B6"}</span> {p}
              </div>
            ))}
          </div>
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team1.team} RECEIVES
          </div>
          <div className="space-y-1 mb-3">
            {trade.team1.receiving.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-sm"
                style={{ color: "#10B981", fontFamily: "'DM Sans', sans-serif" }}
              >
                <span style={{ fontSize: "0.6rem" }}>{"\u25C0"}</span> {p}
              </div>
            ))}
          </div>
          <div
            className="text-xs font-semibold mb-2 mt-4"
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team1.team} IMPACT
          </div>
          <ImpactBar label="Offense" value={trade.team1Impact.offense} />
          <ImpactBar label="Defense" value={trade.team1Impact.defense} />
          <ImpactBar label="Chemistry" value={trade.team1Impact.chemistry} />
          <ImpactBar label="Future" value={trade.team1Impact.future} />
          <div className="mt-2 flex items-center gap-2">
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Win proj:
            </span>
            <WinBadge label={trade.winProjectionChange.team1} />
          </div>
        </div>

        {/* Team 2 */}
        <div className="px-5 py-3">
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team2.team} SENDS
          </div>
          <div className="space-y-1 mb-3">
            {trade.team2.sending.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-sm"
                style={{ color: "#F43F5E", fontFamily: "'DM Sans', sans-serif" }}
              >
                <span style={{ fontSize: "0.6rem" }}>{"\u25B6"}</span> {p}
              </div>
            ))}
          </div>
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team2.team} RECEIVES
          </div>
          <div className="space-y-1 mb-3">
            {trade.team2.receiving.map((p) => (
              <div
                key={p}
                className="flex items-center gap-2 text-sm"
                style={{ color: "#10B981", fontFamily: "'DM Sans', sans-serif" }}
              >
                <span style={{ fontSize: "0.6rem" }}>{"\u25C0"}</span> {p}
              </div>
            ))}
          </div>
          <div
            className="text-xs font-semibold mb-2 mt-4"
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            {trade.team2.team} IMPACT
          </div>
          <ImpactBar label="Offense" value={trade.team2Impact.offense} />
          <ImpactBar label="Defense" value={trade.team2Impact.defense} />
          <ImpactBar label="Chemistry" value={trade.team2Impact.chemistry} />
          <ImpactBar label="Future" value={trade.team2Impact.future} />
          <div className="mt-2 flex items-center gap-2">
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Win proj:
            </span>
            <WinBadge label={trade.winProjectionChange.team2} />
          </div>
        </div>
      </div>

      {/* Salary match + expand */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <SalaryIndicator match={trade.salaryMatch} diff={trade.salaryDiff} />
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-semibold transition-colors cursor-pointer"
          style={{
            color: "#0EA5E9",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.04em",
            background: "none",
            border: "none",
          }}
        >
          {expanded ? "HIDE ANALYSIS \u25B2" : "AI ANALYSIS \u25BC"}
        </button>
      </div>

      {/* Expandable analysis */}
      {expanded && (
        <div
          className="px-5 pb-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <p
            className="text-sm leading-relaxed pt-3"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {trade.aiAnalysis}
          </p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PARSE SALARY HELPER
// ═══════════════════════════════════════════════════════════

function parseSalary(s: string): number {
  return parseFloat(s.replace(/[^0-9.]/g, "")) || 0;
}

// ═══════════════════════════════════════════════════════════
// BUILD YOUR OWN TRADE SECTION
// ═══════════════════════════════════════════════════════════

function BuildYourOwnTrade({ players }: { players: TradeablePlayer[] }) {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [selected1, setSelected1] = useState<Set<string>>(new Set());
  const [selected2, setSelected2] = useState<Set<string>>(new Set());
  const [showAnalysis, setShowAnalysis] = useState(false);

  const team1Players = useMemo(
    () => players.filter((p) => p.team === team1 && p.tradeable),
    [players, team1],
  );
  const team2Players = useMemo(
    () => players.filter((p) => p.team === team2 && p.tradeable),
    [players, team2],
  );

  const salary1 = useMemo(
    () => team1Players.filter((p) => selected1.has(p.name)).reduce((s, p) => s + parseSalary(p.salary), 0),
    [team1Players, selected1],
  );
  const salary2 = useMemo(
    () => team2Players.filter((p) => selected2.has(p.name)).reduce((s, p) => s + parseSalary(p.salary), 0),
    [team2Players, selected2],
  );

  const salaryDiff = Math.abs(salary1 - salary2);
  const salaryMatch = salary1 > 0 && salary2 > 0 && salaryDiff / Math.max(salary1, salary2) <= 0.25;

  function togglePlayer(set: Set<string>, setFn: (s: Set<string>) => void, name: string) {
    const next = new Set(set);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setFn(next);
    setShowAnalysis(false);
  }

  function handleReset() {
    setTeam1("");
    setTeam2("");
    setSelected1(new Set());
    setSelected2(new Set());
    setShowAnalysis(false);
  }

  const canAnalyze = selected1.size > 0 && selected2.size > 0;

  // Mock analysis values
  const totalValue1 = team1Players.filter((p) => selected1.has(p.name)).reduce((s, p) => s + p.tradeValue, 0);
  const totalValue2 = team2Players.filter((p) => selected2.has(p.name)).reduce((s, p) => s + p.tradeValue, 0);
  const valueDiff = totalValue1 - totalValue2;
  const mockVerdict: "approve" | "reject" | "conditional" =
    salaryMatch && Math.abs(valueDiff) <= 15 ? "approve" : salaryMatch ? "conditional" : "reject";

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <div>
          <div
            className="text-xs font-semibold mb-1"
            style={{
              color: "#0EA5E9",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            INTERACTIVE
          </div>
          <h3
            className="text-xl font-bold"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Build Your Own Trade
          </h3>
        </div>
        {(team1 || team2) && (
          <button
            onClick={handleReset}
            className="text-xs font-semibold cursor-pointer"
            style={{
              color: "rgba(255,255,255,0.4)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              padding: "4px 12px",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            RESET
          </button>
        )}
      </div>

      {/* Team dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-5 pb-4">
        {/* Team 1 column */}
        <div>
          <label
            className="block text-xs font-semibold mb-1.5"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            TEAM 1
          </label>
          <select
            value={team1}
            onChange={(e) => { setTeam1(e.target.value); setSelected1(new Set()); setShowAnalysis(false); }}
            className="w-full rounded-lg px-3 py-2 text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <option value="" style={{ background: "#0A1628" }}>Select a team...</option>
            {NBA_TEAMS.filter((t) => t !== team2).map((t) => (
              <option key={t} value={t} style={{ background: "#0A1628" }}>
                {t} &mdash; {TEAM_NAMES[t]}
              </option>
            ))}
          </select>

          {team1 && (
            <div className="mt-3 space-y-1">
              {team1Players.length === 0 ? (
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                  No tradeable players in database for {team1}
                </p>
              ) : (
                team1Players.map((p) => (
                  <label
                    key={p.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors"
                    style={{
                      background: selected1.has(p.name) ? "rgba(14,165,233,0.08)" : "transparent",
                      border: selected1.has(p.name) ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selected1.has(p.name)}
                      onChange={() => togglePlayer(selected1, setSelected1, p.name)}
                      className="accent-sky-500"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold" style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                        {p.name}
                      </span>
                      <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {p.position} / {p.salary}
                      </span>
                    </div>
                  </label>
                ))
              )}
              {selected1.size > 0 && (
                <div
                  className="text-xs font-semibold mt-2 px-3"
                  style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Total: ${salary1.toFixed(1)}M
                </div>
              )}
            </div>
          )}
        </div>

        {/* Team 2 column */}
        <div>
          <label
            className="block text-xs font-semibold mb-1.5"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            TEAM 2
          </label>
          <select
            value={team2}
            onChange={(e) => { setTeam2(e.target.value); setSelected2(new Set()); setShowAnalysis(false); }}
            className="w-full rounded-lg px-3 py-2 text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <option value="" style={{ background: "#0A1628" }}>Select a team...</option>
            {NBA_TEAMS.filter((t) => t !== team1).map((t) => (
              <option key={t} value={t} style={{ background: "#0A1628" }}>
                {t} &mdash; {TEAM_NAMES[t]}
              </option>
            ))}
          </select>

          {team2 && (
            <div className="mt-3 space-y-1">
              {team2Players.length === 0 ? (
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
                  No tradeable players in database for {team2}
                </p>
              ) : (
                team2Players.map((p) => (
                  <label
                    key={p.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-colors"
                    style={{
                      background: selected2.has(p.name) ? "rgba(14,165,233,0.08)" : "transparent",
                      border: selected2.has(p.name) ? "1px solid rgba(14,165,233,0.2)" : "1px solid transparent",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selected2.has(p.name)}
                      onChange={() => togglePlayer(selected2, setSelected2, p.name)}
                      className="accent-sky-500"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-semibold" style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
                        {p.name}
                      </span>
                      <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {p.position} / {p.salary}
                      </span>
                    </div>
                  </label>
                ))
              )}
              {selected2.size > 0 && (
                <div
                  className="text-xs font-semibold mt-2 px-3"
                  style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Total: ${salary2.toFixed(1)}M
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Analyze button */}
      {canAnalyze && (
        <div className="px-5 pb-4">
          <button
            onClick={() => setShowAnalysis(true)}
            className="w-full py-2.5 rounded-lg text-sm font-bold cursor-pointer transition-all"
            style={{
              background: showAnalysis ? "rgba(14,165,233,0.15)" : "linear-gradient(135deg, #0EA5E9, #0284C7)",
              color: "#fff",
              border: showAnalysis ? "1px solid rgba(14,165,233,0.3)" : "none",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            {showAnalysis ? "ANALYSIS COMPLETE" : "ANALYZE TRADE"}
          </button>
        </div>
      )}

      {/* Mock analysis result */}
      {showAnalysis && canAnalyze && (
        <div
          className="px-5 pb-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="pt-4">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <VerdictBadge verdict={mockVerdict} />
              <SalaryIndicator match={salaryMatch} diff={`$${salaryDiff.toFixed(1)}M difference`} />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div
                  className="text-xs font-semibold mb-1"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {team1} TRADE VALUE
                </div>
                <div
                  className="text-lg font-bold"
                  style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {totalValue1}
                </div>
              </div>
              <div>
                <div
                  className="text-xs font-semibold mb-1"
                  style={{
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                >
                  {team2} TRADE VALUE
                </div>
                <div
                  className="text-lg font-bold"
                  style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {totalValue2}
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {salaryMatch
                ? "Salaries are within the 25% trade threshold. "
                : `Salaries are mismatched by $${salaryDiff.toFixed(1)}M \u2014 a third team or additional assets may be needed. `}
              {Math.abs(valueDiff) <= 10
                ? `Trade values are roughly balanced (${valueDiff > 0 ? "+" : ""}${valueDiff} difference). This looks like a fair swap on paper.`
                : valueDiff > 0
                ? `${team1} is giving up significantly more trade value (+${valueDiff}). ${team2} may need to add draft compensation to balance this deal.`
                : `${team2} is giving up significantly more trade value (+${Math.abs(valueDiff)}). ${team1} may need to add draft compensation to balance this deal.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HOTTEST NAMES SECTION
// ═══════════════════════════════════════════════════════════

function HottestNames({ hottest }: { hottest: { player: string; team: string; reason: string }[] }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="px-5 pt-5 pb-3">
        <div
          className="text-xs font-semibold mb-1"
          style={{
            color: "#F59E0B",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.08em",
          }}
        >
          TRADE BUZZ
        </div>
        <h3
          className="text-xl font-bold"
          style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Hottest Names on the Market
        </h3>
      </div>
      <div className="px-5 pb-5 space-y-3">
        {hottest.map((h, i) => (
          <div
            key={h.player}
            className="flex items-start gap-3 rounded-lg px-4 py-3"
            style={{
              background: "rgba(245,158,11,0.04)",
              border: "1px solid rgba(245,158,11,0.08)",
            }}
          >
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: "rgba(245,158,11,0.15)",
                color: "#F59E0B",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {i + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span
                  className="text-sm font-bold"
                  style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {h.player}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {h.team}
                </span>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {h.reason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TRADE SIMULATOR PAGE
// ═══════════════════════════════════════════════════════════

export default function TradeSimulator() {
  const { generatedDate, players, featuredTrades, hottest } = tradeSimData;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      {/* Sticky Header */}
      <SiteHeader subtitle="TRADE SIMULATOR" />

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
            WEEKLY AI ANALYSIS
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            TRADE SIMULATOR
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            What If &mdash; AI-powered trade proposals and interactive trade builder
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
              Generated {generatedDate}
            </span>
            <span
              className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full"
              style={{
                background: "rgba(245,158,11,0.1)",
                color: "#F59E0B",
                border: "1px solid rgba(245,158,11,0.2)",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              {featuredTrades.length} Featured Trades
            </span>
          </div>
        </div>

        {/* Featured Trades */}
        <div className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            FEATURED TRADES
          </div>
          <div className="space-y-4">
            {featuredTrades.map((trade) => (
              <TradeCard key={trade.id} trade={trade} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Build Your Own Trade */}
        <div className="mb-10">
          <BuildYourOwnTrade players={players} />
        </div>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Hottest Names */}
        <div className="mb-10">
          <HottestNames hottest={hottest} />
        </div>

        {/* Footer note */}
        <div
          className="rounded-lg px-5 py-4 text-center"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Trade proposals are AI-generated for entertainment and analysis purposes.
            Salary figures are approximate. All trades subject to league approval.
          </p>
        </div>
      </div>
    </div>
  );
}
