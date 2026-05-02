// Podcast Companion Page — Today's Episode Blueprint

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { podcastCompanion } from "../lib/podcastData";
import type { TalkingPoint } from "../lib/podcastData";

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const segmentStyles: Record<string, { color: string; bg: string; border: string }> = {
  opener: { color: "#0EA5E9", bg: "rgba(14,165,233,0.12)", border: "rgba(14,165,233,0.3)" },
  "deep-dive": { color: "#8B5CF6", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)" },
  "hot-take": { color: "#F43F5E", bg: "rgba(244,63,94,0.12)", border: "rgba(244,63,94,0.3)" },
  "rapid-fire": { color: "#F59E0B", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.3)" },
  closer: { color: "#10B981", bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.3)" },
};

const segmentLabel = (s: string) => s.replace(/-/g, " ").toUpperCase();

// ═══════════════════════════════════════════════════════════
// COPY BUTTON
// ═══════════════════════════════════════════════════════════

function CopyBtn({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 px-2.5 py-1 rounded text-[10px] font-semibold transition-all"
      style={
        copied
          ? { background: "rgba(16,185,129,0.15)", color: "#10B981" }
          : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
      }
    >
      {copied ? "Copied!" : label}
    </button>
  );
}

// ═══════════════════════════════════════════════════════════
// SEGMENT CARD
// ═══════════════════════════════════════════════════════════

function SegmentCard({ point, index }: { point: TalkingPoint; index: number }) {
  const style = segmentStyles[point.segment] || segmentStyles.opener;

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderLeft: `3px solid ${style.color}`,
      }}
    >
      <div className="p-5">
        {/* Segment label + duration */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}
            >
              {segmentLabel(point.segment)}
            </span>
            <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
              Segment {index + 1}
            </span>
          </div>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}
          >
            {point.duration}
          </span>
        </div>

        {/* Topic headline */}
        <h3 className="text-base font-bold text-white mb-4 leading-snug">
          {point.topic}
        </h3>

        {/* Key stats */}
        <div className="mb-4">
          <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
            Key Stats
          </div>
          <ul className="space-y-1.5">
            {point.keyStats.map((stat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: style.color }} />
                {stat}
              </li>
            ))}
          </ul>
        </div>

        {/* Debate angle */}
        <div
          className="rounded-lg p-3 mb-4"
          style={{ background: "rgba(244,63,94,0.06)", border: "1px solid rgba(244,63,94,0.12)" }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#F43F5E" }}>
            Debate Angle
          </div>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            {point.debateAngle}
          </p>
        </div>

        {/* Suggested quote */}
        <div
          className="rounded-lg p-3 mb-4"
          style={{ background: "rgba(14,165,233,0.06)", border: "1px solid rgba(14,165,233,0.12)" }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "rgba(14,165,233,0.7)" }}>
            Suggested Quote
          </div>
          <p className="text-xs leading-relaxed italic" style={{ color: "rgba(255,255,255,0.55)" }}>
            "{point.suggestedQuote}"
          </p>
        </div>

        {/* Player tags */}
        <div className="flex flex-wrap gap-1.5">
          {point.relevantPlayers.map((p) => (
            <span
              key={p}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PODCAST COMPANION PAGE
// ═══════════════════════════════════════════════════════════

export default function PodcastCompanion() {
  const data = podcastCompanion;

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PODCAST COMPANION" />

      <div className="container py-8">
        {/* Page header */}
        <div className="mb-8">
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-1"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            PODCAST COMPANION
          </div>
          <h1
            className="display-heading text-white mb-2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Today's Episode Blueprint
          </h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {data.date} — Everything you need for today's show
          </p>
        </div>

        {/* Episode title card */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.1), rgba(139,92,246,0.08))",
            border: "1px solid rgba(14,165,233,0.2)",
          }}
        >
          <div className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#0EA5E9" }}>
            Episode Title
          </div>
          <h2 className="text-xl font-bold text-white mb-1 leading-snug">
            {data.episodeTitle}
          </h2>
        </div>

        {/* Cold open script */}
        <div
          className="rounded-xl p-6 mb-8"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#F59E0B" }}>
                Cold Open Script (30 sec)
              </div>
            </div>
            <CopyBtn text={data.coldOpen} label="Copy Script" />
          </div>
          <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.6)" }}>
            "{data.coldOpen}"
          </p>
        </div>

        {/* Segment rundown */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Show Rundown</h2>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              {data.rundown.length} segments
            </span>
          </div>
          <div className="flex flex-col gap-4">
            {data.rundown.map((point, i) => (
              <SegmentCard key={i} point={point} index={i} />
            ))}
          </div>
        </div>

        {/* Social clip moment */}
        <div
          className="rounded-xl p-6 mb-6"
          style={{
            background: "rgba(139,92,246,0.06)",
            border: "1px solid rgba(139,92,246,0.15)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#8B5CF6" }}>
              Social Clip Moment
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            {data.socialClip}
          </p>
        </div>

        {/* Tweet thread */}
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="p-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#0EA5E9" }}>
                Tweet Thread ({data.tweetThread.length} posts)
              </div>
            </div>
          </div>
          <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {data.tweetThread.map((tweet, i) => (
              <div key={i} className="p-5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {tweet}
                  </p>
                </div>
                <CopyBtn text={tweet} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
