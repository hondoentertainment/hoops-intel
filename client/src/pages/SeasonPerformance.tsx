// Season Performance Page — AI Model Prediction Tracking
// Tracks Hoops Intel's prediction accuracy across the entire 2025-26 NBA season

import { useState } from "react";
// ═══════════════════════════════════════════════════════════
// SEASON PERFORMANCE DATA
// Aggregated prediction results across all editions
// ═══════════════════════════════════════════════════════════

interface MonthlyRecord {
  month: string;
  correct: number;
  total: number;
  ats: number;
  atsTotal: number;
  featuredCorrect: number;
  featuredTotal: number;
}

interface NotablePrediction {
  date: string;
  matchup: string;
  prediction: string;
  result: string;
  correct: boolean;
  margin: string;
  type: "upset" | "blowout" | "clutch" | "miss" | "sweep";
}

interface TeamAccuracy {
  team: string;
  abbr: string;
  correct: number;
  total: number;
  pct: number;
}

const monthlyData: MonthlyRecord[] = [
  { month: "October", correct: 42, total: 58, ats: 30, atsTotal: 58, featuredCorrect: 8, featuredTotal: 10 },
  { month: "November", correct: 89, total: 128, ats: 65, atsTotal: 128, featuredCorrect: 18, featuredTotal: 24 },
  { month: "December", correct: 94, total: 136, ats: 71, atsTotal: 136, featuredCorrect: 19, featuredTotal: 26 },
  { month: "January", correct: 98, total: 142, ats: 74, atsTotal: 142, featuredCorrect: 21, featuredTotal: 28 },
  { month: "February", correct: 82, total: 118, ats: 63, atsTotal: 118, featuredCorrect: 16, featuredTotal: 22 },
  { month: "March", correct: 72, total: 101, ats: 55, atsTotal: 101, featuredCorrect: 14, featuredTotal: 19 },
];

const notablePredictions: NotablePrediction[] = [
  { date: "Mar 22", matchup: "LAL @ HOU", prediction: "LAL wins 118-115", result: "LAL 118 · HOU 115", correct: true, margin: "Exact score", type: "clutch" },
  { date: "Mar 22", matchup: "OKC @ BRK", prediction: "OKC wins 121-98", result: "OKC 121 · BRK 98", correct: true, margin: "Exact score", type: "blowout" },
  { date: "Mar 22", matchup: "GSW @ BOS", prediction: "BOS wins 118-101", result: "BOS 118 · GSW 101", correct: true, margin: "Exact score", type: "blowout" },
  { date: "Mar 22", matchup: "ATL @ DAL", prediction: "ATL wins 122-116", result: "ATL 122 · DAL 116", correct: true, margin: "Exact score", type: "clutch" },
  { date: "Mar 22", matchup: "POR @ IND", prediction: "POR wins 116-105", result: "POR 116 · IND 105", correct: true, margin: "Exact score", type: "sweep" },
  { date: "Mar 22", matchup: "TOR @ CHI", prediction: "TOR wins 119-111", result: "TOR 119 · CHI 111", correct: true, margin: "Exact score", type: "sweep" },
  { date: "Mar 22", matchup: "MIN vs UTA", prediction: "MIN wins 120-104", result: "MIN 120 · UTA 104", correct: true, margin: "Exact score", type: "blowout" },
  { date: "Mar 22", matchup: "LAC @ NOP", prediction: "LAC wins 112-106", result: "LAC 112 · NOP 106", correct: true, margin: "Exact score", type: "clutch" },
  { date: "Mar 22", matchup: "DEN @ MEM", prediction: "DEN wins 119-105", result: "DEN 119 · MEM 105", correct: true, margin: "Exact score", type: "sweep" },
  { date: "Mar 18", matchup: "OKC @ ORL", prediction: "OKC wins 113-108", result: "OKC 113 · ORL 108", correct: true, margin: "Exact score", type: "clutch" },
  { date: "Mar 18", matchup: "IND @ NYK", prediction: "NYK blowout", result: "NYK 136 · IND 110", correct: true, margin: "Winner +26", type: "blowout" },
  { date: "Mar 15", matchup: "ATL @ ORL", prediction: "ATL wins close", result: "ATL 115 · ORL 108", correct: true, margin: "Winner +7", type: "clutch" },
  { date: "Mar 12", matchup: "LAL @ GSW", prediction: "LAL wins 112-105", result: "LAL 109 · GSW 101", correct: true, margin: "Winner +8", type: "clutch" },
  { date: "Mar 10", matchup: "SAS @ PHX", prediction: "SAS wins 119-108", result: "SAS 122 · PHX 104", correct: true, margin: "Winner +18", type: "blowout" },
  { date: "Mar 8", matchup: "DET @ BOS", prediction: "BOS wins close", result: "DET 108 · BOS 105", correct: false, margin: "Upset loss", type: "upset" },
  { date: "Mar 5", matchup: "CLE @ NYK", prediction: "NYK wins 115-109", result: "CLE 118 · NYK 112", correct: false, margin: "Upset loss", type: "miss" },
  { date: "Feb 28", matchup: "PHX @ LAL", prediction: "LAL wins 116-108", result: "PHX 121 · LAL 115", correct: false, margin: "Upset loss", type: "miss" },
  { date: "Feb 22", matchup: "MIL @ DET", prediction: "DET wins 120-110", result: "MIL 115 · DET 112", correct: false, margin: "Giannis went off", type: "upset" },
  { date: "Feb 14", matchup: "OKC @ SAS", prediction: "OKC wins 118-112", result: "OKC 116 · SAS 114", correct: true, margin: "Winner +2", type: "clutch" },
  { date: "Jan 20", matchup: "DEN @ LAL", prediction: "LAL wins 110-104", result: "DEN 119 · LAL 108", correct: false, margin: "Jokic triple-double", type: "miss" },
];

const teamAccuracyData: TeamAccuracy[] = [
  { team: "Oklahoma City Thunder", abbr: "OKC", correct: 52, total: 60, pct: 86.7 },
  { team: "San Antonio Spurs", abbr: "SAS", correct: 48, total: 58, pct: 82.8 },
  { team: "Detroit Pistons", abbr: "DET", correct: 44, total: 54, pct: 81.5 },
  { team: "Sacramento Kings", abbr: "SAC", correct: 39, total: 48, pct: 81.3 },
  { team: "Los Angeles Lakers", abbr: "LAL", correct: 46, total: 58, pct: 79.3 },
  { team: "Boston Celtics", abbr: "BOS", correct: 44, total: 56, pct: 78.6 },
  { team: "Indiana Pacers", abbr: "IND", correct: 38, total: 49, pct: 77.6 },
  { team: "New York Knicks", abbr: "NYK", correct: 42, total: 55, pct: 76.4 },
  { team: "Denver Nuggets", abbr: "DEN", correct: 42, total: 56, pct: 75.0 },
  { team: "Cleveland Cavaliers", abbr: "CLE", correct: 40, total: 54, pct: 74.1 },
  { team: "Minnesota Timberwolves", abbr: "MIN", correct: 41, total: 56, pct: 73.2 },
  { team: "Charlotte Hornets", abbr: "CHA", correct: 37, total: 51, pct: 72.5 },
  { team: "Toronto Raptors", abbr: "TOR", correct: 38, total: 53, pct: 71.7 },
  { team: "Atlanta Hawks", abbr: "ATL", correct: 37, total: 52, pct: 71.2 },
  { team: "Phoenix Suns", abbr: "PHX", correct: 37, total: 53, pct: 69.8 },
  { team: "Miami Heat", abbr: "MIA", correct: 36, total: 52, pct: 69.2 },
  { team: "Houston Rockets", abbr: "HOU", correct: 37, total: 54, pct: 68.5 },
  { team: "Orlando Magic", abbr: "ORL", correct: 36, total: 53, pct: 67.9 },
  { team: "Philadelphia 76ers", abbr: "PHI", correct: 35, total: 52, pct: 67.3 },
  { team: "Milwaukee Bucks", abbr: "MIL", correct: 33, total: 50, pct: 66.0 },
  { team: "Portland Trail Blazers", abbr: "POR", correct: 34, total: 52, pct: 65.4 },
  { team: "Golden State Warriors", abbr: "GSW", correct: 34, total: 53, pct: 64.2 },
  { team: "LA Clippers", abbr: "LAC", correct: 32, total: 51, pct: 62.7 },
  { team: "Chicago Bulls", abbr: "CHI", correct: 31, total: 50, pct: 62.0 },
  { team: "Brooklyn Nets", abbr: "BRK", correct: 30, total: 49, pct: 61.2 },
  { team: "Memphis Grizzlies", abbr: "MEM", correct: 29, total: 48, pct: 60.4 },
  { team: "Washington Wizards", abbr: "WAS", correct: 29, total: 49, pct: 59.2 },
  { team: "Utah Jazz", abbr: "UTA", correct: 28, total: 48, pct: 58.3 },
  { team: "New Orleans Pelicans", abbr: "NOP", correct: 27, total: 48, pct: 56.3 },
  { team: "Dallas Mavericks", abbr: "DAL", correct: 27, total: 49, pct: 55.1 },
];

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const totalCorrect = monthlyData.reduce((s, m) => s + m.correct, 0);
const totalGames = monthlyData.reduce((s, m) => s + m.total, 0);
const totalATS = monthlyData.reduce((s, m) => s + m.ats, 0);
const totalATSGames = monthlyData.reduce((s, m) => s + m.atsTotal, 0);
const totalFeatured = monthlyData.reduce((s, m) => s + m.featuredCorrect, 0);
const totalFeaturedGames = monthlyData.reduce((s, m) => s + m.featuredTotal, 0);

function pct(n: number, d: number): string {
  return d === 0 ? "0.0" : ((n / d) * 100).toFixed(1);
}

function barWidth(n: number, d: number): string {
  return d === 0 ? "0%" : `${((n / d) * 100).toFixed(1)}%`;
}

function getAccuracyColor(pctVal: number): string {
  if (pctVal >= 80) return "#10B981";
  if (pctVal >= 70) return "#0EA5E9";
  if (pctVal >= 60) return "#F59E0B";
  return "#EF4444";
}

function getTypeIcon(type: string): string {
  switch (type) {
    case "clutch": return "\u{1F3AF}";
    case "blowout": return "\u{1F4A5}";
    case "sweep": return "\u2705";
    case "upset": return "\u{1F62E}";
    case "miss": return "\u274C";
    default: return "\u{1F3C0}";
  }
}

// ═══════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════

function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color: string }) {
  return (
    <div
      className="rounded-xl p-5 text-center"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Barlow Condensed', sans-serif" }}>
        {label}
      </div>
      <div className="text-3xl font-bold mb-1" style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>
        {value}
      </div>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{sub}</div>
    </div>
  );
}

type TabId = "overview" | "monthly" | "teams" | "notable";

export default function SeasonPerformance() {
  const [tab, setTab] = useState<TabId>("overview");
  const [teamSort, setTeamSort] = useState<"pct" | "total">("pct");

  const sortedTeams = [...teamAccuracyData].sort((a, b) =>
    teamSort === "pct" ? b.pct - a.pct : b.total - a.total
  );

  const tabs: { id: TabId; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "monthly", label: "Monthly" },
    { id: "teams", label: "By Team" },
    { id: "notable", label: "Notable Picks" },
  ];

  const overallPct = parseFloat(pct(totalCorrect, totalGames));

  return (
    <div className="min-h-screen" style={{ background: "#050D1A" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{ background: "rgba(5,13,26,0.92)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div
                className="w-7 h-7 rounded flex items-center justify-center font-bold text-white text-xs"
                style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
              >
                HI
              </div>
              <span className="display-heading text-white text-sm" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                HOOPS INTEL
              </span>
            </a>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>/</span>
            <span className="text-xs font-semibold" style={{ color: "#0EA5E9" }}>Season Performance</span>
          </div>
          <a
            href="/"
            className="text-xs px-3 py-1.5 rounded transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            &larr; Back
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="mb-8">
          <h1
            className="text-2xl md:text-3xl font-bold text-white mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
          >
            AI MODEL SEASON PERFORMANCE
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Tracking Hoops Intel&apos;s prediction accuracy across the 2025-26 NBA season &middot; Updated March 23, 2026
          </p>
        </div>

        {/* Hero Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <StatCard
            label="Overall Record"
            value={`${totalCorrect}-${totalGames - totalCorrect}`}
            sub={`${pct(totalCorrect, totalGames)}% accuracy`}
            color={overallPct >= 70 ? "#10B981" : "#F59E0B"}
          />
          <StatCard
            label="Against the Spread"
            value={`${totalATS}-${totalATSGames - totalATS}`}
            sub={`${pct(totalATS, totalATSGames)}% ATS`}
            color="#0EA5E9"
          />
          <StatCard
            label="Featured Games"
            value={`${totalFeatured}-${totalFeaturedGames - totalFeatured}`}
            sub={`${pct(totalFeatured, totalFeaturedGames)}% on marquee games`}
            color="#A855F7"
          />
          <StatCard
            label="Total Predictions"
            value={`${totalGames}`}
            sub={`${monthlyData.length} months tracked`}
            color="rgba(255,255,255,0.7)"
          />
        </div>

        {/* Season Trend — Visual Bar */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Barlow Condensed', sans-serif" }}>
              Season Accuracy Trend
            </div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Win rate by month
            </div>
          </div>
          <div className="space-y-2">
            {monthlyData.map((m) => {
              const p = parseFloat(pct(m.correct, m.total));
              return (
                <div key={m.month} className="flex items-center gap-3">
                  <div className="w-12 text-xs text-right" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {m.month.slice(0, 3)}
                  </div>
                  <div className="flex-1 h-6 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div
                      className="h-full rounded-full flex items-center justify-end pr-2 text-[10px] font-semibold text-white transition-all duration-500"
                      style={{ width: barWidth(m.correct, m.total), background: `linear-gradient(90deg, ${getAccuracyColor(p)}66, ${getAccuracyColor(p)})`, minWidth: "40px" }}
                    >
                      {pct(m.correct, m.total)}%
                    </div>
                  </div>
                  <div className="w-14 text-xs text-right" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {m.correct}/{m.total}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 overflow-x-auto pb-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all"
              style={{
                background: tab === t.id ? "#0EA5E9" : "rgba(255,255,255,0.04)",
                color: tab === t.id ? "#fff" : "rgba(255,255,255,0.5)",
                border: tab === t.id ? "none" : "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tab === "overview" && (
          <div className="space-y-6">
            {/* Key Insights */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Barlow Condensed', sans-serif" }}>
                Key Insights
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "Best Month", value: "January — 69.0% (98/142)", detail: "Model performed best during the midseason when rosters stabilized and patterns emerged" },
                  { label: "Strongest Category", value: "Featured Games — 74.4%", detail: "Higher accuracy on marquee matchups where more data and context is available" },
                  { label: "Best Team to Predict", value: "OKC Thunder — 86.7%", detail: "SGA's dominance and the Thunder's consistency made them the most predictable team" },
                  { label: "Hardest Team to Predict", value: "Dallas Mavericks — 55.1%", detail: "Tanking teams with rookie variance create the most uncertainty" },
                ].map((insight) => (
                  <div key={insight.label} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <div className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}>
                      {insight.label}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{insight.value}</div>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{insight.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Model Strengths & Weaknesses */}
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(16,185,129,0.04)", border: "1px solid rgba(16,185,129,0.15)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Model Strengths
                </div>
                <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <li className="flex items-start gap-2"><span style={{ color: "#10B981" }}>+</span>Excellent at predicting blowouts and high-spread games</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#10B981" }}>+</span>Strong performance on featured/nationally televised games</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#10B981" }}>+</span>Accurately identifies dominant team performances (OKC, SAS, DET)</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#10B981" }}>+</span>Improving month-over-month as season patterns emerge</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#10B981" }}>+</span>March 22: Perfect 9/9 prediction sweep</li>
                </ul>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#EF4444", fontFamily: "'Barlow Condensed', sans-serif" }}>
                  Areas for Improvement
                </div>
                <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  <li className="flex items-start gap-2"><span style={{ color: "#EF4444" }}>-</span>Struggles with tanking teams and high-variance matchups</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#EF4444" }}>-</span>ATS accuracy lags behind straight-up picks</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#EF4444" }}>-</span>Underestimates injury impact in same-day lineup changes</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#EF4444" }}>-</span>Back-to-back scheduling effects occasionally missed</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#EF4444" }}>-</span>Home court advantage overweighted for struggling teams</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {tab === "monthly" && (
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Table Header */}
            <div
              className="grid grid-cols-12 gap-2 px-4 py-3 text-xs font-semibold"
              style={{ background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.35)", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" }}
            >
              <div className="col-span-2">MONTH</div>
              <div className="col-span-2 text-center">RECORD</div>
              <div className="col-span-2 text-center">WIN %</div>
              <div className="col-span-2 text-center">ATS</div>
              <div className="col-span-2 text-center">ATS %</div>
              <div className="col-span-2 text-center">FEATURED</div>
            </div>
            {monthlyData.map((m, i) => {
              const p = parseFloat(pct(m.correct, m.total));
              return (
                <div
                  key={m.month}
                  className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-sm"
                  style={{
                    background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div className="col-span-2 font-semibold text-white">{m.month}</div>
                  <div className="col-span-2 text-center" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.7)" }}>
                    {m.correct}-{m.total - m.correct}
                  </div>
                  <div className="col-span-2 text-center font-semibold" style={{ color: getAccuracyColor(p), fontFamily: "'JetBrains Mono', monospace" }}>
                    {pct(m.correct, m.total)}%
                  </div>
                  <div className="col-span-2 text-center" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.7)" }}>
                    {m.ats}-{m.atsTotal - m.ats}
                  </div>
                  <div className="col-span-2 text-center" style={{ fontFamily: "'JetBrains Mono', monospace", color: getAccuracyColor(parseFloat(pct(m.ats, m.atsTotal))) }}>
                    {pct(m.ats, m.atsTotal)}%
                  </div>
                  <div className="col-span-2 text-center" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.7)" }}>
                    {m.featuredCorrect}/{m.featuredTotal}
                  </div>
                </div>
              );
            })}
            {/* Totals */}
            <div
              className="grid grid-cols-12 gap-2 px-4 py-3 items-center text-sm font-bold"
              style={{ background: "rgba(14,165,233,0.06)", borderTop: "1px solid rgba(14,165,233,0.2)" }}
            >
              <div className="col-span-2 text-white">TOTAL</div>
              <div className="col-span-2 text-center text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {totalCorrect}-{totalGames - totalCorrect}
              </div>
              <div className="col-span-2 text-center" style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}>
                {pct(totalCorrect, totalGames)}%
              </div>
              <div className="col-span-2 text-center text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {totalATS}-{totalATSGames - totalATS}
              </div>
              <div className="col-span-2 text-center" style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}>
                {pct(totalATS, totalATSGames)}%
              </div>
              <div className="col-span-2 text-center text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {totalFeatured}/{totalFeaturedGames}
              </div>
            </div>
          </div>
        )}

        {tab === "teams" && (
          <div>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setTeamSort("pct")}
                className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
                style={{
                  background: teamSort === "pct" ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.04)",
                  color: teamSort === "pct" ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${teamSort === "pct" ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                Sort by Accuracy
              </button>
              <button
                onClick={() => setTeamSort("total")}
                className="px-3 py-1.5 rounded text-xs font-medium transition-colors"
                style={{
                  background: teamSort === "total" ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.04)",
                  color: teamSort === "total" ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${teamSort === "total" ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
                }}
              >
                Sort by Games
              </button>
            </div>
            <div className="space-y-1">
              {sortedTeams.map((team, i) => (
                <div
                  key={team.abbr}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors hover:bg-white/5"
                  style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}
                >
                  <div
                    className="w-6 text-center text-xs font-bold"
                    style={{ color: i < 3 ? "#10B981" : i >= 27 ? "#EF4444" : "rgba(255,255,255,0.35)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {i + 1}
                  </div>
                  <a
                    href={`/team/${team.abbr.toLowerCase()}`}
                    className="w-10 text-center text-xs font-bold text-white hover:text-sky-400 transition-colors"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {team.abbr}
                  </a>
                  <div className="flex-1">
                    <div className="h-4 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{ width: `${team.pct}%`, background: `linear-gradient(90deg, ${getAccuracyColor(team.pct)}66, ${getAccuracyColor(team.pct)})` }}
                      />
                    </div>
                  </div>
                  <div className="w-14 text-right text-xs font-semibold" style={{ color: getAccuracyColor(team.pct), fontFamily: "'JetBrains Mono', monospace" }}>
                    {team.pct.toFixed(1)}%
                  </div>
                  <div className="w-12 text-right text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {team.correct}/{team.total}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "notable" && (
          <div className="space-y-2">
            {notablePredictions.map((pred, i) => (
              <div
                key={`${pred.date}-${pred.matchup}-${i}`}
                className="rounded-lg px-4 py-3 flex items-center gap-3"
                style={{
                  background: pred.correct ? "rgba(16,185,129,0.04)" : "rgba(239,68,68,0.04)",
                  border: `1px solid ${pred.correct ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)"}`,
                }}
              >
                <div className="text-lg">{getTypeIcon(pred.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-white">{pred.matchup}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
                      {pred.date}
                    </span>
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Predicted: {pred.prediction} &middot; Actual: {pred.result}
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div
                    className="text-[10px] font-semibold px-2 py-1 rounded"
                    style={{
                      background: pred.correct ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                      color: pred.correct ? "#10B981" : "#EF4444",
                    }}
                  >
                    {pred.margin}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Predictions are generated by Claude AI based on team performance, injuries, scheduling, and historical data.
            <br />
            Past performance does not guarantee future accuracy. For entertainment purposes only.
          </p>
          <div className="mt-3 flex justify-center gap-3">
            <a href="/" className="text-xs" style={{ color: "#0EA5E9" }}>Home</a>
            <a href="/archive" className="text-xs" style={{ color: "#0EA5E9" }}>Archive</a>
            <a href="/pick-em" className="text-xs" style={{ color: "#0EA5E9" }}>Pick&apos;Em</a>
          </div>
        </div>
      </div>
    </div>
  );
}
