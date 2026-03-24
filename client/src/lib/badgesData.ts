// Badges & Streaks — Badge definitions and tier helpers
// Used by: /badges page, useBadges hook

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // emoji
  tier: "bronze" | "silver" | "gold" | "diamond";
  category: "streak" | "pickem" | "trivia" | "engagement" | "milestone";
  requirement: string; // human-readable requirement
  progress?: number; // 0-100 (for unearned badges)
}

export const allBadges: Badge[] = [
  // Streak badges
  { id: "streak-3", name: "On Fire", description: "Visit 3 days in a row", icon: "\u{1F525}", tier: "bronze", category: "streak", requirement: "3-day visit streak" },
  { id: "streak-7", name: "Weekly Warrior", description: "Visit 7 days in a row", icon: "\u26A1", tier: "silver", category: "streak", requirement: "7-day visit streak" },
  { id: "streak-30", name: "Iron Man", description: "Visit 30 days in a row", icon: "\u{1F9BE}", tier: "gold", category: "streak", requirement: "30-day visit streak" },
  { id: "streak-100", name: "Hoops Addict", description: "Visit 100 days in a row", icon: "\u{1F48E}", tier: "diamond", category: "streak", requirement: "100-day visit streak" },
  // Pick'em badges
  { id: "pickem-perfect", name: "Perfect Night", description: "Get every pick right in a day", icon: "\u{1F3AF}", tier: "silver", category: "pickem", requirement: "100% daily pick accuracy" },
  { id: "pickem-10", name: "Streak Picker", description: "Get 10 picks right in a row", icon: "\u{1F3F9}", tier: "gold", category: "pickem", requirement: "10 correct picks in a row" },
  { id: "pickem-50pct", name: "Above the Line", description: "Maintain 50%+ accuracy over 50+ picks", icon: "\u{1F4C8}", tier: "bronze", category: "pickem", requirement: "50%+ accuracy (min 50 picks)" },
  // Trivia badges
  { id: "trivia-ace", name: "Trivia Ace", description: "Get 5 trivia questions right in a row", icon: "\u{1F9E0}", tier: "silver", category: "trivia", requirement: "5 correct trivia answers in a row" },
  { id: "trivia-master", name: "Hoops IQ 200", description: "Answer 50 trivia questions correctly", icon: "\u{1F393}", tier: "gold", category: "trivia", requirement: "50 lifetime correct answers" },
  // Engagement badges
  { id: "react-100", name: "Reaction King", description: "React to 100 items", icon: "\u{1F451}", tier: "silver", category: "engagement", requirement: "100 lifetime reactions" },
  { id: "share-10", name: "Ambassador", description: "Share 10 player cards", icon: "\u{1F4E2}", tier: "bronze", category: "engagement", requirement: "10 shares" },
  { id: "first-fav", name: "Loyal Fan", description: "Add your first favorite team", icon: "\u2764\uFE0F", tier: "bronze", category: "engagement", requirement: "Add 1 favorite" },
  // Milestone badges
  { id: "day-one", name: "Day One", description: "Visit Hoops Intel for the first time", icon: "\u{1F305}", tier: "bronze", category: "milestone", requirement: "First visit" },
  { id: "archive-10", name: "Historian", description: "Read 10 archived editions", icon: "\u{1F4DA}", tier: "silver", category: "milestone", requirement: "View 10 archive entries" },
  { id: "all-pages", name: "Explorer", description: "Visit every page on Hoops Intel", icon: "\u{1F5FA}\uFE0F", tier: "gold", category: "milestone", requirement: "Visit all pages" },
];

// Helper to get badge tier color
export function getBadgeTierColor(tier: Badge["tier"]): string {
  switch (tier) {
    case "bronze": return "#CD7F32";
    case "silver": return "#C0C0C0";
    case "gold": return "#FFD700";
    case "diamond": return "#B9F2FF";
  }
}

// Helper to get badge tier label
export function getBadgeTierLabel(tier: Badge["tier"]): string {
  switch (tier) {
    case "bronze": return "Bronze";
    case "silver": return "Silver";
    case "gold": return "Gold";
    case "diamond": return "Diamond";
  }
}
