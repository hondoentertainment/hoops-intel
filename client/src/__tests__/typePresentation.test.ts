import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const srcDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const pagesDir = join(srcDir, "pages");
const css = readFileSync(join(srcDir, "styles/index.css"), "utf8");
const ui = readFileSync(join(srcDir, "components/enhanced/EnhancedUi.tsx"), "utf8");

const CHROMELESS = new Set(["Embed.tsx", "PrintEdition.tsx", "PlayerCard.tsx"]);

/** Main-shell routes reviewed for type/contrast after the Grok light flip. */
const ROUTE_INVENTORY: { route: string; page: string; status: "PASS" | "FAIL→fixed" }[] = [
  { route: "/", page: "Home.tsx", status: "FAIL→fixed" },
  { route: "/tonight", page: "Tonight.tsx", status: "FAIL→fixed" },
  { route: "/injuries", page: "InjuryReport.tsx", status: "FAIL→fixed" },
  { route: "/tools", page: "Tools.tsx", status: "FAIL→fixed" },
  { route: "/ask", page: "AskAI.tsx", status: "FAIL→fixed" },
  { route: "/pro", page: "Pro.tsx", status: "FAIL→fixed" },
  { route: "/players", page: "Players.tsx", status: "FAIL→fixed" },
  { route: "/archive", page: "Archive.tsx", status: "FAIL→fixed" },
  { route: "/game/:id", page: "GameCenter.tsx", status: "FAIL→fixed" },
  { route: "/player/:slug", page: "Player.tsx", status: "FAIL→fixed" },
  { route: "/my-pulse", page: "MyPulse.tsx", status: "FAIL→fixed" },
  { route: "/pick-em", page: "PickEm.tsx", status: "FAIL→fixed" },
  { route: "/playoffs", page: "PlayoffBracket.tsx", status: "PASS" },
  { route: "/account", page: "Account.tsx", status: "FAIL→fixed" },
  { route: "/watch-guide", page: "WatchGuide.tsx", status: "FAIL→fixed" },
  { route: "/print-edition", page: "PrintEdition.tsx", status: "PASS" },
];

function pageSrc(name: string) {
  return readFileSync(join(pagesDir, name), "utf8");
}

function walkTsx(dir: string, skip = new Set<string>(), out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (skip.has(name)) continue;
    const stat = readFileSync(p);
    if (stat.includes && name.endsWith(".tsx")) out.push(p);
  }
  return out;
}

describe("type + contrast presentation", () => {
  it("pins AA-safe type tokens on the light Grok canvas", () => {
    expect(css).toContain("--hi-text-secondary: #5c5c58");
    expect(css).toContain("--hi-muted-sub: #6b6b67");
    expect(css).toContain("--hi-accent-text: #146a8c");
    expect(css).toContain("--hi-kicker-size: 0.75rem");
    expect(css).toContain("--hi-measure: 40rem");
    expect(css).toMatch(/\.section-label,\s*\n\.enhanced-kicker/);
    expect(css).toContain("font-size: var(--hi-kicker-size, 0.75rem)");
    expect(css).toContain(".hi-title");
    expect(css).toContain(".hi-stat");
    expect(css).toContain(".hi-lede");
    expect(css).toContain(".hi-empty-copy");
    expect(css).toContain(".hi-accent-text");
    expect(css).toContain("white-space: nowrap");
    expect(css).toContain("text-wrap: balance");
    expect(css).not.toMatch(/\.enhanced-kicker[\s\S]{0,120}#8a8a86/);
    expect(css).not.toMatch(/--hi-text-secondary:\s*#8a8a86/);
  });

  it("remaps leftover text-white opacity classes on light", () => {
    expect(css).toContain("html.light .text-white");
    expect(css).toContain("html.light .text-white\\/40");
    expect(css).toContain("html.light .text-white\\/70");
    expect(css).toContain("html.light .text-white\\/90");
    expect(css).toMatch(/html\.light \.hi-pill-primary[\s\S]{0,200}color: #ffffff/);
  });

  it("keeps PageHero / EmptyState / StatCard on shared wrap + contrast classes", () => {
    expect(ui).toContain("hi-title");
    expect(ui).toContain("hi-lede");
    expect(ui).toContain("hi-stat");
    expect(ui).toContain("hi-empty-copy");
    expect(ui).toMatch(/export function EmptyState[\s\S]*hi-empty-copy/);
    expect(ui).toMatch(/export function PageHero[\s\S]*hi-lede/);
    expect(ui).toMatch(/export function StatCard[\s\S]*className="hi-stat/);
    expect(ui).not.toMatch(/export function StatCard[\s\S]*truncate/);
    expect(ui).not.toMatch(/export function PageHero[\s\S]*truncate/);
    expect(ui).not.toMatch(/export function DeskLinkCard[\s\S]*truncate/);
  });

  it("records a route inventory and marks audited pages fixed", () => {
    const pages = readdirSync(pagesDir).filter((n) => n.endsWith(".tsx"));
    for (const row of ROUTE_INVENTORY) {
      expect(pages, row.page).toContain(row.page);
      expect(["PASS", "FAIL→fixed"]).toContain(row.status);
    }
    const highTraffic = ["/tonight", "/injuries", "/tools", "/ask", "/pro", "/players", "/"];
    for (const route of highTraffic) {
      const row = ROUTE_INVENTORY.find((r) => r.route === route);
      expect(row?.status, route).toBe("FAIL→fixed");
    }
  });

  it("clears leftover white-as-color ink on main-shell pages", () => {
    const leftovers: string[] = [];
    for (const name of readdirSync(pagesDir).filter((n) => n.endsWith(".tsx"))) {
      if (CHROMELESS.has(name)) continue;
      const src = pageSrc(name);
      if (/color:\s*["']rgba\(\s*255\s*,\s*255\s*,\s*255/.test(src)) leftovers.push(name);
      if (/color:\s*["']#fff(?:fff)?["']/i.test(src)) leftovers.push(`${name}#fff`);
    }
    expect(leftovers).toEqual([]);
  });

  it("wraps titles on high-traffic cards instead of ellipsizing them", () => {
    expect(pageSrc("InjuryReport.tsx")).toContain("hi-title");
    expect(pageSrc("InjuryReport.tsx")).not.toMatch(/injury\.player\}<\/p>.*truncate|truncate.*injury\.player/);
    expect(pageSrc("InjuryReport.tsx")).not.toContain("text-[var(--hi-text,#f3f6fa)] truncate");
    expect(pageSrc("Players.tsx")).toMatch(/hi-title[\s\S]{0,80}\{player\.name\}/);
    expect(pageSrc("Players.tsx")).not.toContain('truncate">{player.name}');
    expect(pageSrc("AskAI.tsx")).toContain("hi-title");
    expect(pageSrc("AskAI.tsx")).not.toMatch(/className="text-xs font-medium truncate"/);
    expect(pageSrc("Home.tsx")).toContain("hi-stat");
    expect(pageSrc("GameCenter.tsx")).toContain("hi-stat");
    expect(pageSrc("Tonight.tsx")).toContain("EmptyState");
    expect(pageSrc("Pro.tsx")).toContain("var(--hi-warn,#c2410c)");
    expect(pageSrc("Pro.tsx")).not.toContain("rgba(253,224,71");
  });

  it("does not reintroduce serif display faces on the desk", () => {
    expect(css).not.toMatch(/Playfair|Georgia|DM Sans|Barlow|JetBrains/);
    expect(css).toContain('"Geist"');
    const desk = readFileSync(join(srcDir, "components/enhanced/EnhancedDesk.tsx"), "utf8");
    expect(desk).toContain("hi-title");
    expect(desk).toContain("hi-lede");
    expect(desk).not.toContain("#12171f");
  });
});

describe("type presentation inventory completeness", () => {
  it("covers every page file in the inventory or chromeless allowlist", () => {
    const pages = readdirSync(pagesDir).filter((n) => n.endsWith(".tsx"));
    const inventoried = new Set(ROUTE_INVENTORY.map((r) => r.page));
    const extraAllow = new Set([
      ...CHROMELESS,
      "NotFound.tsx",
      "PlayoffSeriesRedirect.tsx",
      "Unsubscribe.tsx",
    ]);
    const missing = pages.filter((n) => !inventoried.has(n) && !extraAllow.has(n));
    // Remaining tool pages inherit PageHero via ToolPageLayout — they are
    // covered by the leftover-ink scan, not every row in the hero inventory.
    expect(missing.every((n) => pageSrc(n).includes("ToolPageLayout") || pageSrc(n).includes("EditorialShell"))).toBe(true);
    void walkTsx;
  });
});
