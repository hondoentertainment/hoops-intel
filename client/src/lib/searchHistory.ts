const KEY = "hi-recent-searches";
const MAX = 5;

export const POPULAR_SEARCH_DESTINATIONS = [
  { label: "Pulse", href: "/#pulse-index" },
  { label: "Injury report", href: "/injuries" },
  { label: "Season projections", href: "/projections" },
  { label: "Compare players", href: "/compare-players" },
  { label: "Watch guide", href: "/watch-guide" },
  { label: "Ask Hoops Intel", href: "/ask" },
];

export function readRecentSearches(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string").slice(0, MAX) : [];
  } catch {
    return [];
  }
}

export function pushRecentSearch(query: string) {
  const q = query.trim();
  if (q.length < 2) return;
  const prev = readRecentSearches().filter((s) => s.toLowerCase() !== q.toLowerCase());
  const next = [q, ...prev].slice(0, MAX);
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
}
