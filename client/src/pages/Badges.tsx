// Badges & Streaks Page — Your Hoops Intel Journey
// Route: /badges

import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import { useBadges } from "../lib/useBadges";
import { allBadges, getBadgeTierColor, getBadgeTierLabel, type Badge } from "../lib/badgesData";

// ═══════════════════════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════════════════════

type CategoryFilter = "all" | Badge["category"];

const CATEGORY_TABS: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "streak", label: "Streak" },
  { key: "pickem", label: "Pick'em" },
  { key: "trivia", label: "Trivia" },
  { key: "engagement", label: "Engagement" },
  { key: "milestone", label: "Milestones" },
];

// ═══════════════════════════════════════════════════════════
// STREAK DISPLAY
// ═══════════════════════════════════════════════════════════

function StreakCounter({ current, longest }: { current: number; longest: number }) {
  return (
    <div
      className="rounded-2xl p-8 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(16,185,129,0.08) 100%)",
        border: "1px solid rgba(14,165,233,0.2)",
      }}
    >
      {/* Flame glow effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: current >= 3
            ? "radial-gradient(ellipse at 50% 30%, rgba(251,146,60,0.1) 0%, transparent 60%)"
            : "none",
        }}
      />
      <div className="relative">
        <div
          className="text-7xl font-black tabular-nums leading-none mb-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            color: current >= 7 ? "#F59E0B" : current >= 3 ? "#0EA5E9" : "rgba(255,255,255,0.5)",
            textShadow: current >= 3 ? "0 0 30px rgba(251,146,60,0.3)" : "none",
          }}
        >
          {current >= 3 && (
            <span className="inline-block animate-pulse mr-1" style={{ fontSize: "0.6em" }}>
              {"\u{1F525}"}
            </span>
          )}
          {current}
        </div>
        <div
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif" }}
        >
          day{current !== 1 ? "s" : ""} in a row
        </div>
        <div
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Longest streak: <span className="font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>{longest} day{longest !== 1 ? "s" : ""}</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// BADGE CARD
// ═══════════════════════════════════════════════════════════

function BadgeCard({ badge, earned, earnedDate, progress }: {
  badge: Badge;
  earned: boolean;
  earnedDate?: string;
  progress?: number;
}) {
  const tierColor = getBadgeTierColor(badge.tier);

  return (
    <div
      className="rounded-xl p-5 relative transition-all duration-200"
      style={{
        background: earned ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.015)",
        border: `1px solid ${earned ? tierColor + "40" : "rgba(255,255,255,0.06)"}`,
        borderLeft: `3px solid ${earned ? tierColor : "rgba(255,255,255,0.08)"}`,
        opacity: earned ? 1 : 0.55,
        filter: earned ? "none" : "grayscale(60%)",
      }}
    >
      {/* Tier badge */}
      <div className="absolute top-3 right-3">
        <span
          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={{
            background: `${tierColor}18`,
            color: tierColor,
            fontFamily: "'Barlow Condensed', sans-serif",
          }}
        >
          {getBadgeTierLabel(badge.tier)}
        </span>
      </div>

      {/* Icon */}
      <div className="text-4xl mb-3 leading-none">{badge.icon}</div>

      {/* Name */}
      <h3
        className="text-base font-bold mb-1"
        style={{ color: earned ? "#fff" : "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {badge.name}
      </h3>

      {/* Description */}
      <p
        className="text-xs mb-3 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
      >
        {badge.description}
      </p>

      {/* Requirement */}
      <div
        className="text-[11px] mb-2"
        style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        {badge.requirement}
      </div>

      {/* Earned date or progress bar */}
      {earned && earnedDate ? (
        <div
          className="text-[11px] font-semibold"
          style={{ color: "#10B981", fontFamily: "'DM Sans', sans-serif" }}
        >
          Earned {formatDate(earnedDate)}
        </div>
      ) : progress !== undefined && progress > 0 ? (
        <div>
          <div
            className="rounded-full overflow-hidden mb-1"
            style={{ height: "4px", background: "rgba(255,255,255,0.07)" }}
          >
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${progress}%`, background: tierColor }}
            />
          </div>
          <div
            className="text-[10px] text-right tabular-nums"
            style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {progress}%
          </div>
        </div>
      ) : (
        <div
          className="text-[11px]"
          style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', sans-serif" }}
        >
          Locked
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════

function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ═══════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════

export default function Badges() {
  const { getBadges, getStreak, getEarnedCount } = useBadges();
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const badges = getBadges();
  const streak = getStreak();
  const earnedCount = getEarnedCount();
  const totalBadges = allBadges.length;

  const filteredBadges = activeTab === "all"
    ? badges
    : badges.filter((b) => b.category === activeTab);

  // Sort: earned first, then by tier (diamond > gold > silver > bronze)
  const tierOrder = { diamond: 0, gold: 1, silver: 2, bronze: 3 };
  const sorted = [...filteredBadges].sort((a, b) => {
    if (a.earned && !b.earned) return -1;
    if (!a.earned && b.earned) return 1;
    return tierOrder[a.tier] - tierOrder[b.tier];
  });

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader
        subtitle="BADGES & STREAKS"
        toolbarExtra={
          <span
            className="text-xs tabular-nums font-bold whitespace-nowrap"
            style={{ color: "#0EA5E9", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {earnedCount}/{totalBadges} earned
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
            Your Hoops Intel Journey
          </h1>
          <p
            className="text-sm"
            style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Earn badges, build streaks, prove your hoops knowledge
          </p>
        </div>

        {/* Streak Counter */}
        <StreakCounter current={streak.currentStreak} longest={streak.longestStreak} />

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Badges Earned", value: String(earnedCount), color: "#0EA5E9" },
            { label: "Current Streak", value: `${streak.currentStreak}d`, color: "#F59E0B" },
            { label: "Longest Streak", value: `${streak.longestStreak}d`, color: "#10B981" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 text-center"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-2xl font-black tabular-nums mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: stat.color }}
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-4 px-4">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all"
                style={{
                  background: isActive ? "rgba(14,165,233,0.15)" : "rgba(255,255,255,0.03)",
                  color: isActive ? "#0EA5E9" : "rgba(255,255,255,0.4)",
                  border: `1px solid ${isActive ? "rgba(14,165,233,0.3)" : "rgba(255,255,255,0.06)"}`,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sorted.map((badge) => (
            <BadgeCard
              key={badge.id}
              badge={badge}
              earned={badge.earned}
              earnedDate={badge.earnedDate}
              progress={badge.progress}
            />
          ))}
        </div>

        {/* Empty state for filtered tabs */}
        {sorted.length === 0 && (
          <div
            className="rounded-xl p-8 text-center"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-3xl mb-3">{"\u{1F50D}"}</div>
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}
            >
              No badges in this category yet.
            </p>
          </div>
        )}

        {/* Footer spacer */}
        <div className="h-12" />
      </main>
    </div>
  );
}
