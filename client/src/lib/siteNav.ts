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
  { label: "Performance", href: "/performance" },
  { label: "Hoops IQ", href: "/trivia" },
  { label: "Ask AI", href: "/ask" },
];

/** All feature routes — Tools directory */
export interface ToolLink {
  label: string;
  href: string;
  description: string;
}

export const TOOLS_DIRECTORY: ToolLink[] = [
  { label: "Today’s desk", href: "/", description: "Daily briefing, scores, Pulse Index, slate" },
  { label: "Archive", href: "/archive", description: "Past morning editions" },
  { label: "Pulse history", href: "/pulse-history", description: "Ranking history" },
  { label: "Playoffs", href: "/playoffs", description: "Bracket and series board" },
  { label: "Pick ’Em", href: "/pick-em", description: "Bracket-style picks" },
  { label: "Injuries", href: "/injuries", description: "Full injury report" },
  { label: "Performance", href: "/performance", description: "AI season tracker" },
  { label: "Momentum", href: "/momentum", description: "Game momentum swings" },
  { label: "Lineups", href: "/lineups", description: "Lineup intel" },
  { label: "Trade value", href: "/trade-value", description: "Trade value charts" },
  { label: "Trade simulator", href: "/trade-simulator", description: "Mock trades" },
  { label: "Clutch", href: "/clutch", description: "Clutch factor" },
  { label: "Draft", href: "/draft", description: "Draft tracker" },
  { label: "Sentiment", href: "/sentiment", description: "Sentiment pulse" },
  { label: "Tactics", href: "/tactics", description: "Coach corner" },
  { label: "Projections", href: "/projections", description: "Projections" },
  { label: "Badges", href: "/badges", description: "Achievement badges" },
  { label: "Community pulse", href: "/community-pulse", description: "Community trends" },
  { label: "Watch guide", href: "/watch-guide", description: "What to watch" },
  { label: "Widgets", href: "/widgets", description: "Embeddable widgets" },
  { label: "Podcast companion", href: "/podcast-companion", description: "Show notes mode" },
  { label: "History engine", href: "/history", description: "Historical lookups" },
  { label: "Ref reports", href: "/refs", description: "Crew tendencies" },
  { label: "Ask AI", href: "/ask", description: "Full-page assistant" },
  { label: "My Pulse", href: "/my-pulse", description: "Personalized edition" },
  { label: "Hoops Intel Pro", href: "/pro", description: "Pro tier" },
  { label: "Hoops IQ (Trivia)", href: "/trivia", description: "IQ challenges" },
  { label: "Player compare", href: "/compare-players", description: "Pulse Index side-by-side" },
  { label: "Betting intel", href: "/betting-intel", description: "Lines + projections snapshot" },
  { label: "Print edition", href: "/print-edition", description: "Clean PDF / print sheet" },
  { label: "Rival alerts", href: "/rivals", description: "Headline banners for grudge games" },
  { label: "Guest Pulse pitch", href: "/guest-pulse", description: "Submit a takeover idea" },
  { label: "Unsubscribe digest", href: "/unsubscribe", description: "Email opt-out page" },
];
