import { slugify } from "./searchUtils";

export type PlayerToolLink = {
  label: string;
  href: string;
  bareHref: string;
};

export function buildPlayerToolLinks(name: string, team?: string): PlayerToolLink[] {
  const q = encodeURIComponent(name);
  const teamQ = team ? encodeURIComponent(team) : "";
  return [
    { label: "Compare", href: `/compare-players?a=${q}`, bareHref: "/compare-players" },
    { label: "Trade value", href: `/trade-value?player=${q}`, bareHref: "/trade-value" },
    { label: "Projections", href: teamQ ? `/projections?team=${teamQ}` : "/projections", bareHref: "/projections" },
    { label: "Injury wire", href: `/injuries?player=${q}`, bareHref: "/injuries" },
  ];
}

export function readQueryParam(name: string): string {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get(name)?.trim() ?? "";
}

export function matchesPlayerQuery(query: string, playerName: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  const name = playerName.toLowerCase();
  return name === q || slugify(playerName) === slugify(query) || name.includes(q);
}
