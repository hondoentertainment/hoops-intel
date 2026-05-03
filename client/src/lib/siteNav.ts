/** Primary desk navigation — hashes resolve on home */
export interface MainNavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: MainNavLink[] = [
  { label: "Scores", href: "/#scores" },
  { label: "Pulse Index", href: "/#pulse-index" },
  { label: "Injuries", href: "/injuries" },
  { label: "Tonight", href: "/#tonight" },
  { label: "Playoffs", href: "/playoffs" },
  { label: "Archive", href: "/archive" },
  { label: "All tools", href: "/tools" },
  { label: "Performance", href: "/performance" },
  { label: "Hoops IQ", href: "/trivia" },
  { label: "Ask AI", href: "/ask" },
];

/** All feature routes — Tools directory */
export type ToolCategory = "desk" | "postseason" | "analysis" | "community" | "publishing";

export const TOOL_CATEGORY_ORDER: ToolCategory[] = ["desk", "postseason", "analysis", "community", "publishing"];

export const TOOL_CATEGORY_LABELS: Record<ToolCategory, string> = {
  desk: "Daily desk",
  postseason: "Playoffs & health",
  analysis: "Analysis & tools",
  community: "Community & companion",
  publishing: "Publishing & account",
};

export interface ToolLink {
  label: string;
  href: string;
  description: string;
  category: ToolCategory;
}

export const TOOLS_DIRECTORY: ToolLink[] = [
  { label: "Today’s desk", href: "/", description: "Daily briefing, scores, Pulse Index, slate", category: "desk" },
  { label: "Archive", href: "/archive", description: "Past morning editions", category: "desk" },
  { label: "Pulse history", href: "/pulse-history", description: "Ranking history", category: "desk" },
  { label: "My Pulse", href: "/my-pulse", description: "Personalized edition", category: "desk" },
  { label: "Print edition", href: "/print-edition", description: "Clean PDF / print sheet", category: "desk" },
  { label: "Playoffs", href: "/playoffs", description: "Bracket and series board", category: "postseason" },
  { label: "Pick ’Em", href: "/pick-em", description: "Bracket-style picks", category: "postseason" },
  { label: "Injuries", href: "/injuries", description: "Full injury report", category: "postseason" },
  { label: "Rival alerts", href: "/rivals", description: "Headline banners for grudge games", category: "postseason" },
  { label: "Performance", href: "/performance", description: "AI season tracker", category: "analysis" },
  { label: "Momentum", href: "/momentum", description: "Game momentum swings", category: "analysis" },
  { label: "Lineups", href: "/lineups", description: "Lineup intel", category: "analysis" },
  { label: "Trade value", href: "/trade-value", description: "Trade value charts", category: "analysis" },
  { label: "Trade simulator", href: "/trade-simulator", description: "Mock trades", category: "analysis" },
  { label: "Clutch", href: "/clutch", description: "Clutch factor", category: "analysis" },
  { label: "Draft", href: "/draft", description: "Draft tracker", category: "analysis" },
  { label: "Sentiment", href: "/sentiment", description: "Sentiment pulse", category: "analysis" },
  { label: "Tactics", href: "/tactics", description: "Coach corner", category: "analysis" },
  { label: "Projections", href: "/projections", description: "Projections", category: "analysis" },
  { label: "Badges", href: "/badges", description: "Achievement badges", category: "analysis" },
  { label: "History engine", href: "/history", description: "Historical lookups", category: "analysis" },
  { label: "Ref reports", href: "/refs", description: "Crew tendencies", category: "analysis" },
  { label: "Ask AI", href: "/ask", description: "Full-page assistant", category: "analysis" },
  { label: "Player compare", href: "/compare-players", description: "Pulse Index side-by-side", category: "analysis" },
  { label: "Pulse methodology", href: "/pulse-methodology", description: "How Pulse rankings are judged", category: "analysis" },
  { label: "Community pulse", href: "/community-pulse", description: "Community trends", category: "community" },
  { label: "Watch guide", href: "/watch-guide", description: "What to watch", category: "community" },
  { label: "Podcast companion", href: "/podcast-companion", description: "Show notes mode", category: "community" },
  { label: "Guest Pulse pitch", href: "/guest-pulse", description: "Submit a takeover idea", category: "community" },
  { label: "Widgets", href: "/widgets", description: "Embeddable widgets", category: "publishing" },
  {
    label: "Embed analytics",
    href: "/embed-stats",
    description: "Publisher dashboard — embed load trends and CSV export",
    category: "publishing",
  },
  { label: "Account", href: "/account", description: "Profile, Pro billing, shortcuts", category: "publishing" },
  { label: "Hoops Intel Pro", href: "/pro", description: "Pro tier", category: "publishing" },
  { label: "Hoops IQ (Trivia)", href: "/trivia", description: "IQ challenges", category: "publishing" },
  { label: "Unsubscribe digest", href: "/unsubscribe", description: "Email opt-out page", category: "publishing" },
];
