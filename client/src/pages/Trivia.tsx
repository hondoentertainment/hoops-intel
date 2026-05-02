// Trivia Page — Hoops IQ Daily Trivia
// Streak tracking via localStorage key "hoops-iq-streak"

import { useState, useEffect } from "react";
import SiteHeader from "../components/SiteHeader";
import { triviaQuestion } from "../lib/pulseData";

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

interface StreakData {
  lastDate: string;
  streak: number;
  totalCorrect: number;
  totalAnswered: number;
}

interface DayResult {
  date: string;
  selectedIndex: number;
  correct: boolean;
}

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

const STREAK_KEY = "hoops-iq-streak";
const RESULT_KEY = "hoops-iq-result";
const OPTION_LABELS = ["A", "B", "C", "D"];

function loadStreak(): StreakData {
  try {
    const raw = localStorage.getItem(STREAK_KEY);
    if (raw) return JSON.parse(raw) as StreakData;
  } catch {
    // ignore
  }
  return { lastDate: "", streak: 0, totalCorrect: 0, totalAnswered: 0 };
}

function saveStreak(data: StreakData) {
  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

function loadTodayResult(): DayResult | null {
  try {
    const raw = localStorage.getItem(RESULT_KEY);
    if (raw) {
      const r = JSON.parse(raw) as DayResult;
      if (r.date === triviaQuestion.id) return r;
    }
  } catch {
    // ignore
  }
  return null;
}

function saveTodayResult(result: DayResult) {
  try {
    localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  } catch {
    // ignore
  }
}

function formatDateLabel(dateStr: string): string {
  // dateStr is "YYYY-MM-DD"
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function Trivia() {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [streak, setStreak] = useState<StreakData>({ lastDate: "", streak: 0, totalCorrect: 0, totalAnswered: 0 });
  const [copied, setCopied] = useState(false);

  // Load persisted state on mount
  useEffect(() => {
    const savedStreak = loadStreak();
    setStreak(savedStreak);

    const savedResult = loadTodayResult();
    if (savedResult) {
      setSelected(savedResult.selectedIndex);
      setRevealed(true);
    }
  }, []);

  const isCorrect = selected !== null && selected === triviaQuestion.correctIndex;
  const accuracy =
    streak.totalAnswered > 0
      ? Math.round((streak.totalCorrect / streak.totalAnswered) * 100)
      : 0;

  function handleSelect(idx: number) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);

    const correct = idx === triviaQuestion.correctIndex;

    // Update streak
    const prev = loadStreak();
    const today = triviaQuestion.id;
    let newStreak = prev.streak;

    if (prev.lastDate) {
      const [y, m, d] = prev.lastDate.split("-").map(Number);
      const lastMs = new Date(y, m - 1, d).getTime();
      const [ty, tm, td] = today.split("-").map(Number);
      const todayMs = new Date(ty, tm - 1, td).getTime();
      const diffDays = (todayMs - lastMs) / (1000 * 60 * 60 * 24);
      if (correct) {
        if (diffDays === 1) {
          newStreak = prev.streak + 1;
        } else if (diffDays > 1) {
          newStreak = 1;
        }
      } else {
        newStreak = 0;
      }
    } else {
      newStreak = correct ? 1 : 0;
    }

    const updated: StreakData = {
      lastDate: today,
      streak: newStreak,
      totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
      totalAnswered: prev.totalAnswered + 1,
    };

    saveStreak(updated);
    saveTodayResult({ date: today, selectedIndex: idx, correct });
    setStreak(updated);
  }

  function handleShare() {
    const dateLabel = formatDateLabel(triviaQuestion.id);
    const resultEmoji = isCorrect ? "✅ Correct!" : "❌ Wrong";
    const streakPart = streak.streak > 0 ? ` Streak: ${streak.streak} 🔥` : "";
    const text = `Hoops IQ 📅 ${dateLabel} | ${resultEmoji}${streakPart} | hoopsintel.net/trivia`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // fallback: do nothing
    });
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)", color: "rgba(255,255,255,0.85)" }}>
      <SiteHeader subtitle="HOOPS IQ" />

      {/* ── Main Content ── */}
      <main className="container mx-auto px-4 py-10 max-w-2xl">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(14,165,233,0.12)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.25)" }}>
            🧠 Hoops IQ
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Daily Trivia</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            {formatDateLabel(triviaQuestion.id)} · {triviaQuestion.difficulty.charAt(0).toUpperCase() + triviaQuestion.difficulty.slice(1)} difficulty
          </p>
        </div>

        {/* Streak Banner */}
        {streak.totalAnswered > 0 && (
          <div
            className="flex items-center justify-between rounded-xl px-5 py-3 mb-6"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-xl font-black text-white">{streak.streak > 0 ? `${streak.streak} 🔥` : "0"}</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Streak</div>
              </div>
              <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="text-center">
                <div className="text-xl font-black" style={{ color: "#10B981" }}>{accuracy}%</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Accuracy</div>
              </div>
              <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.08)" }} />
              <div className="text-center">
                <div className="text-xl font-black text-white">{streak.totalAnswered}</div>
                <div className="text-[10px] uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>Answered</div>
              </div>
            </div>
          </div>
        )}

        {/* Question Card */}
        <div
          className="rounded-2xl p-6 mb-5"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-lg font-semibold text-white leading-snug mb-6">
            {triviaQuestion.question}
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {triviaQuestion.options.map((option, idx) => {
              const isSelected = selected === idx;
              const isCorrectOption = idx === triviaQuestion.correctIndex;

              let borderColor = "rgba(255,255,255,0.1)";
              let bgColor = "rgba(255,255,255,0.03)";
              let textColor = "rgba(255,255,255,0.7)";
              let labelBg = "rgba(255,255,255,0.08)";
              let labelColor = "rgba(255,255,255,0.5)";

              if (revealed) {
                if (isCorrectOption) {
                  borderColor = "#10B981";
                  bgColor = "rgba(16,185,129,0.1)";
                  textColor = "#10B981";
                  labelBg = "rgba(16,185,129,0.2)";
                  labelColor = "#10B981";
                } else if (isSelected && !isCorrectOption) {
                  borderColor = "#EF4444";
                  bgColor = "rgba(239,68,68,0.1)";
                  textColor = "#EF4444";
                  labelBg = "rgba(239,68,68,0.2)";
                  labelColor = "#EF4444";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={revealed}
                  className="flex items-center gap-3 w-full rounded-xl px-4 py-3 text-left transition-all"
                  style={{
                    background: bgColor,
                    border: `1px solid ${borderColor}`,
                    cursor: revealed ? "default" : "pointer",
                    opacity: revealed && !isCorrectOption && !isSelected ? 0.45 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!revealed) {
                      e.currentTarget.style.borderColor = "#0EA5E9";
                      e.currentTarget.style.background = "rgba(14,165,233,0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!revealed) {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    }
                  }}
                >
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: labelBg, color: labelColor }}
                  >
                    {OPTION_LABELS[idx]}
                  </span>
                  <span className="text-sm font-medium" style={{ color: textColor }}>
                    {option}
                  </span>
                  {revealed && isCorrectOption && (
                    <span className="ml-auto text-base">✓</span>
                  )}
                  {revealed && isSelected && !isCorrectOption && (
                    <span className="ml-auto text-base">✗</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Result + Explanation */}
        {revealed && (
          <div
            className="rounded-2xl p-5 mb-5"
            style={{
              background: isCorrect ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
              border: `1px solid ${isCorrect ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
              <span
                className="font-bold text-sm"
                style={{ color: isCorrect ? "#10B981" : "#EF4444" }}
              >
                {isCorrect ? "Correct!" : "Not quite."}
              </span>
              {streak.streak > 1 && isCorrect && (
                <span
                  className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{ background: "rgba(251,191,36,0.15)", color: "#FBBF24" }}
                >
                  🔥 {streak.streak}-day streak!
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              {triviaQuestion.explanation}
            </p>
          </div>
        )}

        {/* Share Button */}
        {revealed && (
          <div className="flex justify-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: copied ? "rgba(16,185,129,0.15)" : "rgba(14,165,233,0.15)",
                border: `1px solid ${copied ? "rgba(16,185,129,0.35)" : "rgba(14,165,233,0.35)"}`,
                color: copied ? "#10B981" : "#0EA5E9",
              }}
            >
              {copied ? (
                <>
                  <span>✓</span>
                  <span>Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                  <span>Share Result</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* CTA if not yet answered */}
        {!revealed && (
          <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
            Select an answer above — no take-backs!
          </p>
        )}
      </main>
    </div>
  );
}
