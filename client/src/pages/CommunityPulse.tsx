// Community Pulse Vote Page — Your Rankings vs. AI
// Route: /community-pulse

import { useState, useCallback } from "react";
import SiteHeader from "../components/SiteHeader";
import { communityPulseData } from "../lib/communityPulseData";
import { ratablePlayers } from "../lib/communityRatablePlayers";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface UserVote {
  player: string;
  score: number; // 1-10
}

const VOTE_STORAGE_KEY = "hoops-intel-community-votes";

function loadVotes(): UserVote[] {
  try {
    const raw = localStorage.getItem(VOTE_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as UserVote[];
  } catch { /* ignore */ }
  return [];
}

function saveVotes(votes: UserVote[]) {
  try {
    localStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(votes));
  } catch { /* ignore */ }
}

// ═══════════════════════════════════════════════════════════
// GAP INDICATOR
// ═══════════════════════════════════════════════════════════

function GapIndicator({ gap }: { gap: number }) {
  const absGap = Math.abs(gap);
  const color = gap > 0 ? "#10B981" : gap < 0 ? "#F43F5E" : "rgba(255,255,255,0.3)";
  const label = gap > 0 ? `+${gap.toFixed(1)}` : gap < 0 ? gap.toFixed(1) : "0";
  const barWidth = Math.min(100, absGap * 8);

  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 rounded-full overflow-hidden relative"
        style={{ height: "4px", background: "rgba(255,255,255,0.06)" }}
      >
        {/* Center line */}
        <div
          className="absolute top-0 h-full w-px"
          style={{ left: "50%", background: "rgba(255,255,255,0.15)" }}
        />
        {/* Gap bar */}
        <div
          className="absolute top-0 h-full rounded-full transition-all"
          style={{
            left: gap >= 0 ? "50%" : `${50 - barWidth / 2}%`,
            width: `${barWidth / 2}%`,
            background: color,
          }}
        />
      </div>
      <span
        className="text-xs font-bold tabular-nums w-10 text-right"
        style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {label}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SCORE BAR
// ═══════════════════════════════════════════════════════════

function ScoreBar({ value, max, color, label }: { value: number; max: number; color: string; label: string }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-2">
      <span
        className="text-[10px] w-20 text-right uppercase tracking-wider"
        style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </span>
      <div
        className="flex-1 rounded-full overflow-hidden"
        style={{ height: "6px", background: "rgba(255,255,255,0.06)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span
        className="text-xs font-bold tabular-nums w-10 text-right"
        style={{ color, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {value.toFixed(1)}
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// VOTING SECTION
// ═══════════════════════════════════════════════════════════

function VotingSection({ onSubmit }: { onSubmit: () => void }) {
  const existing = loadVotes();
  const initialScores: Record<string, number> = {};
  for (const v of existing) initialScores[v.player] = v.score;

  const [scores, setScores] = useState<Record<string, number>>(initialScores);
  const [submitted, setSubmitted] = useState(existing.length > 0);

  const handleScore = useCallback((player: string, score: number) => {
    setScores((prev) => ({ ...prev, [player]: Math.max(1, Math.min(10, score)) }));
  }, []);

  const handleSubmit = () => {
    const votes: UserVote[] = Object.entries(scores)
      .filter(([, s]) => s > 0)
      .map(([player, score]) => ({ player, score }));
    saveVotes(votes);
    setSubmitted(true);
    onSubmit();
  };

  const votedCount = Object.keys(scores).filter((k) => scores[k] > 0).length;

  if (submitted) {
    return (
      <div
        className="rounded-xl p-6 text-center"
        style={{
          background: "rgba(16,185,129,0.08)",
          border: "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <div className="text-3xl mb-2">{"\u2705"}</div>
        <h3
          className="text-base font-bold mb-1"
          style={{ color: "#10B981", fontFamily: "'DM Sans', sans-serif" }}
        >
          Vote Submitted
        </h3>
        <p
          className="text-xs mb-3"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
        >
          You rated {votedCount} player{votedCount !== 1 ? "s" : ""}. See how your picks compare below.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-semibold px-4 py-2 rounded-lg transition-all hover:opacity-80"
          style={{
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.5)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Update Votes
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="px-5 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <h2
          className="text-sm font-bold uppercase tracking-wider"
          style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Rate Players (1-10)
        </h2>
        <p
          className="text-xs mt-1"
          style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Rate each player's current form. 10 = elite, 1 = struggling.
        </p>
      </div>

      <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        {ratablePlayers.map((p) => (
          <div
            key={p.player}
            className="px-5 py-3 flex items-center gap-3"
            style={{ borderColor: "rgba(255,255,255,0.04)" }}
          >
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-semibold truncate"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.player}
              </div>
              <div
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {p.team}
              </div>
            </div>

            {/* Score buttons */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => {
                const isSelected = scores[p.player] === n;
                return (
                  <button
                    key={n}
                    onClick={() => handleScore(p.player, n)}
                    className="w-7 h-7 rounded text-xs font-bold transition-all"
                    style={{
                      background: isSelected
                        ? n >= 8 ? "rgba(16,185,129,0.3)" : n >= 5 ? "rgba(14,165,233,0.3)" : "rgba(244,63,94,0.3)"
                        : "rgba(255,255,255,0.03)",
                      color: isSelected
                        ? n >= 8 ? "#10B981" : n >= 5 ? "#0EA5E9" : "#F43F5E"
                        : "rgba(255,255,255,0.25)",
                      border: `1px solid ${isSelected
                        ? n >= 8 ? "rgba(16,185,129,0.4)" : n >= 5 ? "rgba(14,165,233,0.4)" : "rgba(244,63,94,0.4)"
                        : "rgba(255,255,255,0.06)"
                      }`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div
        className="px-5 py-4 flex items-center justify-between border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {votedCount} of {ratablePlayers.length} rated
        </span>
        <button
          onClick={handleSubmit}
          disabled={votedCount === 0}
          className="px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-all"
          style={{
            background: votedCount > 0 ? "rgba(14,165,233,0.2)" : "rgba(255,255,255,0.03)",
            color: votedCount > 0 ? "#0EA5E9" : "rgba(255,255,255,0.2)",
            border: `1px solid ${votedCount > 0 ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
            fontFamily: "'Barlow Condensed', sans-serif",
            cursor: votedCount > 0 ? "pointer" : "not-allowed",
          }}
        >
          Submit Vote
        </button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════

export default function CommunityPulse() {
  const [, setRefresh] = useState(0);
  const data = communityPulseData;

  // Sort by community score for community ranking
  const sortedByCommunity = [...data.votes].sort((a, b) => b.communityScore - a.communityScore);
  const sortedByAI = [...data.votes].sort((a, b) => b.aiScore - a.aiScore);

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader
        subtitle="COMMUNITY PULSE"
        toolbarExtra={
          <span
            className="text-xs whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.weekLabel}
          </span>
        }
      />

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Title */}
        <div className="text-center">
          <h1
            className="text-2xl font-black uppercase tracking-wider mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#fff" }}
          >
            Community Pulse
          </h1>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Your Rankings vs. AI
          </p>
        </div>

        {/* Total voters */}
        <div className="flex justify-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(14,165,233,0.08)",
              border: "1px solid rgba(14,165,233,0.15)",
            }}
          >
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{"\u{1F5F3}\uFE0F"}</span>
            <span
              className="text-xs font-bold tabular-nums"
              style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {data.totalVoters.toLocaleString()}
            </span>
            <span
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
            >
              total voters this week
            </span>
          </div>
        </div>

        {/* Voting Section */}
        <VotingSection onSubmit={() => setRefresh((r) => r + 1)} />

        {/* Biggest Disagreement */}
        <div
          className="rounded-xl p-5"
          style={{
            background: "linear-gradient(135deg, rgba(244,63,94,0.08) 0%, rgba(251,146,60,0.06) 100%)",
            border: "1px solid rgba(244,63,94,0.15)",
          }}
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{"\u{1F525}"}</span>
            <div>
              <h3
                className="text-sm font-bold uppercase tracking-wider mb-1"
                style={{ color: "#F43F5E", fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Biggest Disagreement
              </h3>
              <p
                className="text-base font-bold mb-1"
                style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif" }}
              >
                {data.biggestDisagreement.player}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
              >
                Community Rank: <span className="font-bold" style={{ color: "#F59E0B" }}>#{data.biggestDisagreement.communityRank}</span>
                {" \u00B7 "}
                AI Rank: <span className="font-bold" style={{ color: "#0EA5E9" }}>#{data.biggestDisagreement.aiRank}</span>
                {" \u00B7 "}
                <span style={{ color: "rgba(255,255,255,0.4)" }}>{data.biggestDisagreement.direction}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Side-by-side comparison */}
        <div>
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Community vs. AI Rankings
          </h2>

          <div className="space-y-2">
            {sortedByCommunity.map((vote, idx) => {
              const aiRank = sortedByAI.findIndex((v) => v.player === vote.player) + 1;
              const communityRank = idx + 1;
              const rankDiff = aiRank - communityRank;

              return (
                <div
                  key={vote.player}
                  className="rounded-lg p-4"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {/* Community rank */}
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm"
                      style={{
                        background: "rgba(245,158,11,0.12)",
                        color: "#F59E0B",
                        fontFamily: "'Barlow Condensed', sans-serif",
                      }}
                    >
                      {communityRank}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-semibold truncate"
                          style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {vote.player}
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {vote.team}
                        </span>
                      </div>
                    </div>

                    {/* Rank diff badge */}
                    {rankDiff !== 0 && (
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          background: rankDiff > 0
                            ? "rgba(16,185,129,0.12)"
                            : "rgba(244,63,94,0.12)",
                          color: rankDiff > 0 ? "#10B981" : "#F43F5E",
                          fontFamily: "'Barlow Condensed', sans-serif",
                        }}
                      >
                        {rankDiff > 0 ? `\u2191${rankDiff}` : `\u2193${Math.abs(rankDiff)}`} vs AI
                      </span>
                    )}
                  </div>

                  {/* Score comparison */}
                  <div className="space-y-1">
                    <ScoreBar value={vote.communityScore} max={100} color="#F59E0B" label="Community" />
                    <ScoreBar value={vote.aiScore} max={100} color="#0EA5E9" label="AI Pulse" />
                  </div>

                  {/* Gap */}
                  <div className="mt-2">
                    <GapIndicator gap={vote.gap} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Narrative */}
        <div
          className="rounded-xl p-5"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h3
            className="text-sm font-bold uppercase tracking-wider mb-3"
            style={{ color: "#0EA5E9", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Weekly Narrative
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {data.narrative}
          </p>
        </div>

        {/* Footer spacer */}
        <div className="h-12" />
      </main>
    </div>
  );
}
