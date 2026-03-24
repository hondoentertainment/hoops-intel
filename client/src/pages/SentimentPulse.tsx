// Sentiment Pulse Page
// What the Internet Thinks — daily social sentiment analysis

import { useState } from "react";
import { sentimentData, type PlayerSentiment, type TeamSentiment } from "../lib/sentimentData";

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const sentimentColor = (score: number): string => {
  if (score >= 60) return "#10B981";
  if (score >= 20) return "#0EA5E9";
  if (score >= -20) return "#F59E0B";
  if (score >= -60) return "#F43F5E";
  return "#EF4444";
};

const sentimentLabel = (score: number): string => {
  if (score >= 75) return "BELOVED";
  if (score >= 50) return "POSITIVE";
  if (score >= 20) return "WARMING";
  if (score >= -20) return "MIXED";
  if (score >= -50) return "COOLING";
  return "HATED";
};

const volumeIcon = (volume: string): string => {
  switch (volume) {
    case "viral": return "\uD83D\uDD25";
    case "high": return "\uD83D\uDCC8";
    case "moderate": return "\uD83D\uDCAC";
    case "low": return "\uD83E\uDD2B";
    default: return "\uD83D\uDCAC";
  }
};

const volumeLabel = (volume: string): string => {
  switch (volume) {
    case "viral": return "VIRAL";
    case "high": return "HIGH";
    case "moderate": return "MODERATE";
    case "low": return "LOW";
    default: return "MODERATE";
  }
};

const moodEmoji = (mood: string): string => {
  switch (mood) {
    case "ecstatic": return "\uD83E\uDD29";
    case "optimistic": return "\uD83D\uDE0A";
    case "neutral": return "\uD83D\uDE10";
    case "frustrated": return "\uD83D\uDE24";
    case "furious": return "\uD83E\uDD2C";
    default: return "\uD83D\uDE10";
  }
};

const moodColor = (mood: string): string => {
  switch (mood) {
    case "ecstatic": return "#10B981";
    case "optimistic": return "#0EA5E9";
    case "neutral": return "#F59E0B";
    case "frustrated": return "#F97316";
    case "furious": return "#F43F5E";
    default: return "#F59E0B";
  }
};

const gapLabel = (gap: number): string => {
  if (gap >= 15) return "UNDERRATED";
  if (gap >= 5) return "SLIGHTLY UNDERRATED";
  if (gap <= -15) return "OVERRATED";
  if (gap <= -5) return "SLIGHTLY OVERRATED";
  return "FAIR";
};

const gapColor = (gap: number): string => {
  if (gap >= 15) return "#10B981";
  if (gap >= 5) return "#10B981";
  if (gap <= -15) return "#F43F5E";
  if (gap <= -5) return "#F43F5E";
  return "#F59E0B";
};

// ═══════════════════════════════════════════════════════════
// SENTIMENT METER (horizontal bar from -100 to +100)
// ═══════════════════════════════════════════════════════════

function SentimentMeter({ score }: { score: number }) {
  // score is -100 to +100; map to 0-100% for the bar position
  const pct = (score + 100) / 2; // 0 = -100, 50 = 0, 100 = +100
  const color = sentimentColor(score);

  return (
    <div className="relative" style={{ height: "10px" }}>
      {/* Background track */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {/* Gradient background: red left, green right */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(244,63,94,0.2), rgba(245,158,11,0.1) 50%, rgba(16,185,129,0.2))",
          }}
        />
      </div>
      {/* Center line */}
      <div
        className="absolute top-0 bottom-0 w-px"
        style={{ left: "50%", background: "rgba(255,255,255,0.2)" }}
      />
      {/* Score indicator */}
      <div
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2"
        style={{
          left: `${pct}%`,
          transform: `translate(-50%, -50%)`,
          background: color,
          borderColor: "#050D1A",
          boxShadow: `0 0 6px ${color}`,
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PLATFORM BADGE
// ═══════════════════════════════════════════════════════════

function PlatformBadge({ platform, score }: { platform: string; score: number }) {
  const color = sentimentColor(score);
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded"
      style={{
        background: `${color}15`,
        color,
        fontFamily: "'Barlow Condensed', sans-serif",
        letterSpacing: "0.02em",
      }}
    >
      {platform}
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem" }}>
        {score > 0 ? "+" : ""}{score}
      </span>
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
// PLAYER SENTIMENT CARD
// ═══════════════════════════════════════════════════════════

function PlayerSentimentCard({ p }: { p: PlayerSentiment }) {
  const [showContrary, setShowContrary] = useState(false);
  const color = sentimentColor(p.overallSentiment);
  const gap = gapColor(p.performanceGap);

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderLeft: `3px solid ${color}`,
      }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
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
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <PlatformBadge platform="X" score={p.twitterScore} />
            <PlatformBadge platform="Reddit" score={p.redditScore} />
            <span
              className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              {volumeIcon(p.volume)} {volumeLabel(p.volume)}
            </span>
          </div>
        </div>
        {/* Sentiment score */}
        <div className="text-right flex-shrink-0">
          <div
            className="text-2xl font-bold tabular-nums leading-none mb-0.5"
            style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {p.overallSentiment > 0 ? "+" : ""}{p.overallSentiment}
          </div>
          <div
            className="text-xs font-semibold"
            style={{
              color,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.06em",
              opacity: 0.8,
            }}
          >
            {sentimentLabel(p.overallSentiment)}
          </div>
        </div>
      </div>

      {/* Sentiment meter */}
      <div className="mb-3">
        <SentimentMeter score={p.overallSentiment} />
      </div>

      {/* Performance gap */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-semibold"
          style={{
            color: "rgba(255,255,255,0.35)",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          PERCEPTION GAP
        </span>
        <span
          className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded"
          style={{
            background: `${gap}15`,
            color: gap,
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.03em",
          }}
        >
          {p.performanceGap > 0 ? "+" : ""}{p.performanceGap} {gapLabel(p.performanceGap)}
        </span>
      </div>

      {/* Takes */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={() => setShowContrary(false)}
            className="text-xs font-semibold px-2 py-0.5 rounded transition-colors"
            style={{
              background: !showContrary ? "rgba(14,165,233,0.15)" : "transparent",
              color: !showContrary ? "#0EA5E9" : "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.05em",
              cursor: "pointer",
              border: "none",
            }}
          >
            HOT TAKE
          </button>
          <button
            onClick={() => setShowContrary(true)}
            className="text-xs font-semibold px-2 py-0.5 rounded transition-colors"
            style={{
              background: showContrary ? "rgba(244,63,94,0.15)" : "transparent",
              color: showContrary ? "#F43F5E" : "rgba(255,255,255,0.35)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.05em",
              cursor: "pointer",
              border: "none",
            }}
          >
            CONTRARY TAKE
          </button>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {showContrary ? p.contraryTake : p.topTake}
        </p>
      </div>

      {/* Buzz topics */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {p.buzzTopics.map((topic) => (
          <span
            key={topic}
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            #{topic.replace(/\s+/g, "")}
          </span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// TEAM MOOD CARD
// ═══════════════════════════════════════════════════════════

function TeamMoodCard({ t }: { t: TeamSentiment }) {
  const color = moodColor(t.fanMood);
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderTop: `2px solid ${color}`,
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-sm font-bold"
          style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
        >
          {t.team}
        </span>
        <span className="text-lg" title={t.fanMood}>
          {moodEmoji(t.fanMood)}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span
          className="text-xs font-bold px-1.5 py-0.5 rounded"
          style={{
            background: `${color}15`,
            color,
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {t.fanMood}
        </span>
        <span
          className="text-xs font-bold tabular-nums"
          style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t.moodScore > 0 ? "+" : ""}{t.moodScore}
        </span>
      </div>
      <div className="mb-2">
        <div
          className="text-xs font-semibold mb-0.5"
          style={{
            color: "#F43F5E",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.06em",
            fontSize: "0.6rem",
          }}
        >
          GRIEVANCE
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {t.topGrievance}
        </p>
      </div>
      <div>
        <div
          className="text-xs font-semibold mb-0.5"
          style={{
            color: "#10B981",
            fontFamily: "'Barlow Condensed', sans-serif",
            letterSpacing: "0.06em",
            fontSize: "0.6rem",
          }}
        >
          BRIGHT SPOT
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {t.brightSpot}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SENTIMENT PULSE PAGE
// ═══════════════════════════════════════════════════════════

export default function SentimentPulse() {
  const data = sentimentData;

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
                  SENTIMENT PULSE
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
            DAILY ANALYSIS
          </div>
          <h1
            className="text-4xl font-bold mb-1 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SENTIMENT PULSE
          </h1>
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
          >
            What the Internet Thinks
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
              {data.generatedDate}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
            >
              Aggregated from X, Reddit, forums & media
            </span>
          </div>
        </div>

        {/* ── Viral Moment ──────────────────────────────────── */}
        <div
          className="rounded-xl p-5 mb-8"
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(244,63,94,0.06))",
            border: "1px solid rgba(14,165,233,0.2)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                background: "rgba(244,63,94,0.15)",
                color: "#F43F5E",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              VIRAL MOMENT
            </span>
            <span
              className="text-xs font-semibold"
              style={{
                color: "#0EA5E9",
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {data.viralMoment.platform}
            </span>
          </div>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="font-bold text-white">{data.viralMoment.player}</span>{" "}
            &mdash; {data.viralMoment.description}
          </p>
          <div
            className="text-xs font-semibold"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.02em",
            }}
          >
            {data.viralMoment.engagement}
          </div>
        </div>

        {/* ── Narrative ─────────────────────────────────────── */}
        <div
          className="rounded-xl px-5 py-4 mb-8"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "#F59E0B",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            THE VIBE CHECK
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.narrative}
          </p>
        </div>

        {/* ── Player Sentiment Cards ────────────────────────── */}
        <div className="mb-8">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            PLAYER SENTIMENT ({data.players.length} TRACKED)
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
              Scale: -100 (hated) to +100 (beloved)
            </span>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>
              Gap: + = underrated, - = overrated
            </span>
          </div>

          <div className="space-y-3">
            {data.players.map((p) => (
              <PlayerSentimentCard key={p.player} p={p} />
            ))}
          </div>
        </div>

        {/* ── Overrated vs Underrated ───────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Overrated */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(244,63,94,0.04)",
              border: "1px solid rgba(244,63,94,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(244,63,94,0.15)",
                  color: "#F43F5E",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                MOST OVERRATED
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-lg font-bold"
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {data.overrated.player}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {data.overrated.team}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {data.overrated.explanation}
            </p>
          </div>

          {/* Underrated */}
          <div
            className="rounded-xl p-5"
            style={{
              background: "rgba(16,185,129,0.04)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded"
                style={{
                  background: "rgba(16,185,129,0.15)",
                  color: "#10B981",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                MOST UNDERRATED
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-lg font-bold"
                style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {data.underrated.player}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                {data.underrated.team}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {data.underrated.explanation}
            </p>
          </div>
        </div>

        {/* ── Team Mood Board ───────────────────────────────── */}
        <div className="mb-8">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            TEAM MOOD BOARD
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.teams.map((t) => (
              <TeamMoodCard key={t.team} t={t} />
            ))}
          </div>
        </div>

        {/* ── Methodology ───────────────────────────────────── */}
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
            Sentiment scores are AI-generated based on analysis of social media discourse (X/Twitter, Reddit, forums),
            media coverage, and fan reactions. Scores range from -100 (universally negative) to +100 (universally positive).
            The Performance Gap measures the difference between public perception and actual on-court production.
            Updated daily by Hoops Intel AI.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-6"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Footer */}
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
            Sentiment data is generated by AI analysis and does not represent official positions.
            All takes are aggregated from public discourse for entertainment purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
