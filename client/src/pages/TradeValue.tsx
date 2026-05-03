import SiteHeader from "../components/SiteHeader";
import { tradeValueData, type TVIPlayer } from "../lib/tradeValueData";
import { useSubscription } from "../lib/useSubscription";
// Trade Value Index — data from `generate-trade-value.mjs` → tradeValueData.ts

/** Free preview: 6 ranks by default; 10 once the weekly file lists a full board (see NEXT-STEPS.md). */
function freePreviewRankCount(playerCount: number) {
  return playerCount >= 30 ? 10 : 6;
}

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
  const sub = useSubscription();
  const { generatedDate, weekLabel, players } = tradeValueData;
  const gated = sub.loading ? false : !sub.isPro;
  const previewCount = Math.min(freePreviewRankCount(players.length), players.length);
  const preview =
    gated && players.length > previewCount
      ? players.slice(0, previewCount)
      : players;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      {/* Sticky Header */}
      <SiteHeader subtitle="TRADE VALUE" />

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
            The TVI ranks the {players.length} most tradeable players this week by AI-assessed value. Inputs: recent performance trend, contract (years + salary), age, team&apos;s playoff position, injury history.
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
          {preview.map((p) => (
            <PlayerCard key={p.player} p={p} />
          ))}
        </div>

        {gated && players.length > previewCount && (
          <div
            className="rounded-xl px-6 py-6 mb-10 text-center relative overflow-hidden"
            style={{
              background: "rgba(245,158,11,0.06)",
              border: "1px solid rgba(245,158,11,0.18)",
            }}
          >
            <div
              className="display-heading text-amber-200 text-xs mb-2"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.08em" }}
            >
              PRO PREVIEW GATE
            </div>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}>
              Showing top {previewCount} trade chips for signed-out / free readers. Hoops Intel Pro unlocks ranks{" "}
              {previewCount + 1}–{players.length} with full rationales (weekly refresh via <code className="text-white/50">generate-trade-value.mjs</code>).
            </p>
            <a
              href="/pro"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white hover:brightness-105 transition-all"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.05em",
                background: "linear-gradient(135deg, #F59E0B, #D97706)",
              }}
            >
              Unlock full Trade Value tier →
            </a>
          </div>
        )}

        <div
          className="mb-6"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>
          Rankings regenerate weekly from the latest ESPN slate + Hoops Intel prompts.
        </p>
      </div>
    </div>
  );
}
