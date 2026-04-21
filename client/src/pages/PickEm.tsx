// PickEm Page — Daily Pick'em full page
// Layout follows PulseHistory pattern: sticky header, container, navy background

import { useState, useEffect } from "react";
import { gamePreviews, pulseEdition } from "../lib/pulseData";
import PickEmWidget from "../components/PickEm";
import BracketPicker from "../components/BracketPicker";
import { isPlayoffsActive } from "../lib/playoffData";

// ═══════════════════════════════════════════════════════════
// INLINE SUPABASE REST HELPER (leaderboard — read-only, anon)
// ═══════════════════════════════════════════════════════════

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

async function anonDbFetch(table: string, query: string): Promise<unknown> {
  if (!SUPABASE_URL) return [];
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/${table}?${query}`,
    {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) throw new Error(`Leaderboard fetch failed: ${res.statusText}`);
  return res.json();
}

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface LeaderboardRow {
  user_id: string;
  total_settled: number;
  correct_picks: number;
  accuracy_pct: number | null;
  current_streak: number;
}

// ═══════════════════════════════════════════════════════════
// LEADERBOARD SECTION
// ═══════════════════════════════════════════════════════════

function truncateUserId(id: string): string {
  // Show first 8 chars of UUID for privacy
  return id.slice(0, 8).toUpperCase() + "...";
}

function LeaderboardSkeleton() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg p-3 flex items-center gap-3 animate-pulse"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="w-6 h-4 rounded" style={{ background: "rgba(255,255,255,0.08)" }} />
          <div className="flex-1 h-4 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="w-12 h-4 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
          <div className="w-16 h-4 rounded" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>
      ))}
    </div>
  );
}

function LeaderboardTable({ rows }: { rows: LeaderboardRow[] }) {
  if (rows.length === 0) {
    return (
      <div
        className="rounded-lg px-5 py-8 text-center text-sm"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        No picks settled yet. Check back after tonight&apos;s games conclude.
      </div>
    );
  }

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-12 gap-2 px-4 py-2 text-xs font-semibold"
        style={{
          background: "rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.35)",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.06em",
        }}
      >
        <div className="col-span-1">#</div>
        <div className="col-span-4">USER</div>
        <div className="col-span-3 text-right">ACCURACY</div>
        <div className="col-span-2 text-right">CORRECT</div>
        <div className="col-span-2 text-right">TOTAL</div>
      </div>

      {/* Rows */}
      {rows.map((row, idx) => {
        const rank = idx + 1;
        const isTop3 = rank <= 3;
        const rankColors = ["#F59E0B", "#94A3B8", "#CD7F32"];
        const rankColor = isTop3 ? rankColors[rank - 1] : "rgba(255,255,255,0.3)";

        return (
          <div
            key={row.user_id}
            className="grid grid-cols-12 gap-2 px-4 py-3 items-center transition-colors"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.04)",
              background: idx % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
            }}
          >
            {/* Rank */}
            <div
              className="col-span-1 text-sm font-bold"
              style={{ color: rankColor, fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {rank}
            </div>

            {/* User ID */}
            <div className="col-span-4 flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: isTop3
                    ? `rgba(${rank === 1 ? "245,158,11" : rank === 2 ? "148,163,184" : "205,127,50"},0.15)`
                    : "rgba(14,165,233,0.1)",
                  color: isTop3 ? rankColor : "#0EA5E9",
                  fontFamily: "'Barlow Condensed', sans-serif",
                }}
              >
                {truncateUserId(row.user_id).slice(0, 1)}
              </div>
              <span
                className="text-xs font-medium"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                }}
              >
                {truncateUserId(row.user_id)}
              </span>
            </div>

            {/* Accuracy */}
            <div className="col-span-3 text-right">
              <span
                className="text-sm font-bold"
                style={{
                  color:
                    row.accuracy_pct === null
                      ? "rgba(255,255,255,0.3)"
                      : row.accuracy_pct >= 60
                      ? "#10B981"
                      : row.accuracy_pct >= 45
                      ? "#F59E0B"
                      : "#F43F5E",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {row.accuracy_pct !== null ? `${row.accuracy_pct}%` : "—"}
              </span>
            </div>

            {/* Correct */}
            <div
              className="col-span-2 text-right text-sm font-semibold"
              style={{ color: "#10B981", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {row.correct_picks}
            </div>

            {/* Total */}
            <div
              className="col-span-2 text-right text-sm"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              {row.total_settled}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LeaderboardSection() {
  const [rows, setRows] = useState<LeaderboardRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    anonDbFetch(
      "pick_leaderboard",
      "select=user_id,total_settled,correct_picks,accuracy_pct,current_streak&order=accuracy_pct.desc.nullslast,correct_picks.desc&limit=10"
    )
      .then((data) => setRows(data as LeaderboardRow[]))
      .catch((err: unknown) => {
        const msg = err instanceof Error ? err.message : "Failed to load leaderboard";
        setError(msg);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div
            className="text-xs font-semibold mb-1"
            style={{
              color: "#F59E0B",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            SEASON STANDINGS
          </div>
          <h2
            className="text-2xl font-bold"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Season Pick&apos;em Leaders
          </h2>
        </div>
        <div
          className="text-xs px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(245,158,11,0.08)",
            color: "rgba(245,158,11,0.7)",
            border: "1px solid rgba(245,158,11,0.15)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Top 10 · All Season
        </div>
      </div>

      {loading && <LeaderboardSkeleton />}
      {error && !loading && (
        <div
          className="rounded-lg px-4 py-3 text-sm"
          style={{
            background: "rgba(244,63,94,0.06)",
            border: "1px solid rgba(244,63,94,0.15)",
            color: "rgba(244,63,94,0.8)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Could not load leaderboard: {error}
        </div>
      )}
      {!loading && !error && <LeaderboardTable rows={rows} />}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// HOW IT WORKS SECTION
// ═══════════════════════════════════════════════════════════

function HowItWorksSection() {
  const steps = [
    {
      icon: "1",
      color: "#0EA5E9",
      title: "Pick Tonight's Winners",
      body: "Before tip-off, select which team you think will win each game. You can pick as many or as few games as you want.",
    },
    {
      icon: "2",
      color: "#10B981",
      title: "Lock In Your Picks",
      body: "Submit your picks to lock them in. Once locked, picks are final — no changes after the buzzer.",
    },
    {
      icon: "3",
      color: "#F59E0B",
      title: "Track Your Accuracy",
      body: "After games conclude, results are settled automatically. Your season accuracy is tracked all year on the leaderboard.",
    },
  ];

  return (
    <section className="mb-8">
      <div
        className="text-xs font-semibold mb-4"
        style={{
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.1em",
        }}
      >
        HOW IT WORKS
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.icon}
            className="rounded-xl p-4"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3"
              style={{
                background: `rgba(${
                  step.color === "#0EA5E9"
                    ? "14,165,233"
                    : step.color === "#10B981"
                    ? "16,185,129"
                    : "245,158,11"
                },0.12)`,
                color: step.color,
                fontFamily: "'Barlow Condensed', sans-serif",
              }}
            >
              {step.icon}
            </div>
            <div
              className="text-sm font-semibold mb-1.5"
              style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.02em" }}
            >
              {step.title}
            </div>
            <div
              className="text-xs leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {step.body}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-4 rounded-lg px-4 py-3 text-sm"
        style={{
          background: "rgba(14,165,233,0.05)",
          border: "1px solid rgba(14,165,233,0.12)",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Pick tonight&apos;s winners before tip-off.{" "}
        <span style={{ color: "rgba(14,165,233,0.8)" }}>Accuracy tracked all season.</span>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════
// PICK'EM PAGE
// ═══════════════════════════════════════════════════════════

// Derive today's edition date string (YYYY-MM-DD) from pulseEdition
// pulseEdition.date is "March 18, 2026" — parse it
function parseEditionDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      // Format as YYYY-MM-DD
      return d.toISOString().slice(0, 10);
    }
  } catch {
    // Fall through
  }
  // Fallback to today
  return new Date().toISOString().slice(0, 10);
}

export default function PickEmPage() {
  const editionDate = parseEditionDate(pulseEdition.date);

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
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.04em" }}
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
                  DAILY PICK&apos;EM
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
        {/* Page Title */}
        <div className="mb-8">
          <div
            className="text-xs font-semibold mb-2"
            style={{
              color: "#0EA5E9",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            {pulseEdition.edition} &middot; {pulseEdition.date.toUpperCase()}
          </div>
          <h1
            className="text-4xl font-bold mb-2 leading-tight"
            style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Daily Pick&apos;em
          </h1>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
          >
            {gamePreviews.length} games on the slate tonight. Pick your winners before tip-off.
          </p>
        </div>

        {/* Bracket Picks (during playoffs) */}
        {isPlayoffsActive() && (
          <section className="mb-10">
            <div
              className="text-xs font-semibold mb-4"
              style={{
                color: "#F43F5E",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              PLAYOFF BRACKET &middot; PICK EVERY SERIES
            </div>
            <BracketPicker />
          </section>
        )}

        {/* Pick'em Widget */}
        <section className="mb-10">
          <div
            className="text-xs font-semibold mb-4"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: "0.1em",
            }}
          >
            TONIGHT&apos;S GAMES &middot; {gamePreviews.length} MATCHUPS
          </div>
          <PickEmWidget games={gamePreviews} editionDate={editionDate} />
        </section>

        {/* Divider */}
        <div
          className="mb-10"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* Leaderboard */}
        <LeaderboardSection />

        {/* Divider */}
        <div
          className="mb-8"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        {/* How It Works */}
        <HowItWorksSection />
      </div>
    </div>
  );
}
