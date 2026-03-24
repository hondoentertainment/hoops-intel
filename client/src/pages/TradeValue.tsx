// Trade Value Index Page
// Weekly AI-scored ranking of the 30 most tradeable players

// ═══════════════════════════════════════════════════════════
// STATIC DATA (hardcoded — generate-trade-value.mjs replaces this)
// ═══════════════════════════════════════════════════════════

interface TVIPlayer {
  rank: number;
  prevRank: number;
  player: string;
  team: string;
  age: number;
  contract: string;
  tradeValue: number;
  trend: "up" | "down" | "stable";
  rationale: string;
}

interface TVIData {
  generatedDate: string;
  weekLabel: string;
  players: TVIPlayer[];
}

const TRADE_VALUE_DATA: TVIData = {
  generatedDate: "March 24, 2026",
  weekLabel: "Week of March 24–30, 2026",
  players: [
    { rank: 1, prevRank: 1, player: "Shai Gilgeous-Alexander", team: "OKC", age: 27, contract: "4 yrs / $243M remaining", tradeValue: 99, trend: "stable", rationale: "Untouchable. The MVP frontrunner with a historic scoring streak is the most valuable trade chip in the NBA — except OKC would never move him." },
    { rank: 2, prevRank: 3, player: "Victor Wembanyama", team: "SAS", age: 22, contract: "3 yrs / $60M remaining (rookie)", tradeValue: 98, trend: "up", rationale: "The generational talent on a rookie deal with three years left. Every GM in the league would empty their roster for him. San Antonio holds all the cards." },
    { rank: 3, prevRank: 2, player: "Luka Dončić", team: "LAL", age: 27, contract: "3 yrs / $165M remaining", tradeValue: 97, trend: "down", rationale: "Still top-3 but the Lakers' 6-game win streak means they have no reason to move him. His value is near its peak — a buyer's market hasn't materialized." },
    { rank: 4, prevRank: 4, player: "Cade Cunningham", team: "DET", age: 24, contract: "4 yrs / $194M remaining", tradeValue: 95, trend: "stable", rationale: "The East's best team runs through him. Back spasms are concerning but if he's healthy this week, his value rebounds immediately." },
    { rank: 5, prevRank: 6, player: "LaMelo Ball", team: "CHA", age: 24, contract: "3 yrs / $133M remaining", tradeValue: 90, trend: "up", rationale: "His last 12 games have been his best basketball. Charlotte's play-in surge is making rival GMs nervous — his value is rising fast." },
    { rank: 6, prevRank: 5, player: "Evan Mobley", team: "CLE", age: 23, contract: "4 yrs / $166M remaining", tradeValue: 88, trend: "stable", rationale: "The two-way anchor Cleveland can build around for a decade. His season-high 15 rebounds last night underscores his value." },
    { rank: 7, prevRank: 8, player: "Anthony Edwards", team: "MIN", age: 24, contract: "4 yrs / $204M remaining", tradeValue: 86, trend: "up", rationale: "Knee inflammation temporarily dips his value but this is a buy-low moment. At 24 on a max deal with playoff experience, he's exactly what contenders want." },
    { rank: 8, prevRank: 7, player: "Jalen Brunson", team: "NYK", age: 28, contract: "2 yrs / $55M remaining", tradeValue: 83, trend: "down", rationale: "Age and contract length soften his value. Two years left is enough for contenders but not rebuilders. The Knicks need him more than they'd admit." },
    { rank: 9, prevRank: 11, player: "Josh Hart", team: "NYK", age: 29, contract: "3 yrs / $51M remaining", tradeValue: 78, trend: "up", rationale: "His 12-for-13 shooting clinic elevated his market. At $17M/year with three years left, he's an affordable two-way piece any contender would covet." },
    { rank: 10, prevRank: 10, player: "Nikola Jokić", team: "DEN", age: 31, contract: "2 yrs / $90M remaining", tradeValue: 76, trend: "stable", rationale: "Still elite but age and two years remaining keep him out of the top 5. Denver won't move him and teams know it — suppressing his market value." },
  ],
};

// ═══════════════════════════════════════════════════════════
// RANK CHANGE BADGE
// ═══════════════════════════════════════════════════════════

function RankChangeBadge({ rank, prevRank }: { rank: number; prevRank: number }) {
  if (rank < prevRank) {
    // Rank number improved (lower = better)
    const diff = prevRank - rank;
    return (
      <span
        className="inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded"
        style={{
          background: "rgba(16,185,129,0.12)",
          color: "#10B981",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        ▲{diff}
      </span>
    );
  }
  if (rank > prevRank) {
    // Rank number worsened (higher = worse)
    const diff = rank - prevRank;
    return (
      <span
        className="inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded"
        style={{
          background: "rgba(244,63,94,0.12)",
          color: "#F43F5E",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.02em",
        }}
      >
        ▼{diff}
      </span>
    );
  }
  return (
    <span
      className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded"
      style={{
        background: "rgba(255,255,255,0.05)",
        color: "rgba(255,255,255,0.35)",
        fontFamily: "'Barlow Condensed', sans-serif",
      }}
    >
      —
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// TRADE VALUE BAR
// ═══════════════════════════════════════════════════════════

function TradeValueBar({ value }: { value: number }) {
  // Color: emerald for 90+, electric blue for 75-89, amber for 60-74, rose below
  const color =
    value >= 90
      ? "#10B981"
      : value >= 75
      ? "#0EA5E9"
      : value >= 60
      ? "#F59E0B"
      : "#F43F5E";

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "6px", background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
      <span
        className="text-sm font-bold tabular-nums w-8 text-right"
        style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {value}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PLAYER CARD
// ═══════════════════════════════════════════════════════════

function PlayerCard({ p }: { p: TVIPlayer }) {
  const rankImproved = p.rank < p.prevRank;
  const rankWorsened = p.rank > p.prevRank;
  const accentColor = rankImproved ? "#10B981" : rankWorsened ? "#F43F5E" : "rgba(255,255,255,0.08)";

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${accentColor}`,
      }}
    >
      <div className="flex items-start gap-4">
        {/* Rank number */}
        <div
          className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl leading-none"
          style={{
            background: "rgba(14,165,233,0.1)",
            color: "#0EA5E9",
            fontFamily: "'Barlow Condensed', sans-serif",
          }}
        >
          {p.rank}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Top row: name + team + badge */}
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-base font-bold leading-tight"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            >
              {p.player}
            </span>
            <span
              className="text-sm font-semibold"
              style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {p.team}
            </span>
            <RankChangeBadge rank={p.rank} prevRank={p.prevRank} />
          </div>

          {/* Age + contract */}
          <div
            className="text-xs mb-3"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Age {p.age} · {p.contract}
          </div>

          {/* Trade value bar */}
          <div className="mb-3">
            <div
              className="text-xs font-semibold mb-1.5"
              style={{
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              TRADE VALUE
            </div>
            <TradeValueBar value={p.tradeValue} />
          </div>

          {/* Rationale */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {p.rationale}
          </p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TRADE VALUE INDEX PAGE
// ═══════════════════════════════════════════════════════════

export default function TradeValue() {
  const { generatedDate, weekLabel, players } = TRADE_VALUE_DATA;

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
                  TRADE VALUE INDEX
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

      <div className="container py-8 max-w-3xl mx-auto">
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
            WEEKLY RANKINGS
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Trade Value Index
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Updated weekly by Hoops Intel AI
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
            The TVI ranks the 30 most tradeable players by AI-assessed value. Inputs: recent performance trend, contract (years + salary), age, team&apos;s playoff position, injury history.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-6">
          <span
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Rank change:
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "#10B981", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ▲ Improved
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "#F43F5E", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ▼ Worsened
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            — Stable
          </span>
        </div>

        {/* Player list */}
        <div className="space-y-3 mb-10">
          {players.map((p) => (
            <PlayerCard key={p.player} p={p} />
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
            COMING NEXT WEEK
          </div>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Full top 30 ranking + biggest movers
          </p>
        </div>
      </div>
    </div>
  );
}
