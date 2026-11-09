import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gamePageMeta, isPageLevelSeoRoute, NOINDEX_PATHS, playerPageMeta, playerProfileCanonicalUrl, resolveRouteSeo, toMetaTags } from "../lib/seoConfig";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "../../..");

describe("publisher dashboard SEO", () => {
  it("noindexes embed analytics shells and canonicalizes them to /widgets", () => {
    for (const path of ["/embed-stats", "/widgets/analytics"]) {
      expect(NOINDEX_PATHS.has(path)).toBe(true);
      const seo = resolveRouteSeo(path);
      expect(seo?.noindex).toBe(true);
      expect(seo?.canonicalPath).toBe("/widgets");
      expect(toMetaTags(seo!).canonicalUrl).toBe("https://hoopsintel.net/widgets");
    }
  });

  it("keeps the public widgets page indexable with a self canonical", () => {
    const seo = resolveRouteSeo("/widgets");
    expect(seo?.noindex).toBeUndefined();
    expect(seo?.canonicalPath).toBe("/widgets");
  });

  it("does not treat account as a widgets canonical", () => {
    const seo = resolveRouteSeo("/account");
    expect(seo?.noindex).toBe(true);
    expect(seo?.canonicalPath).toBe("/account");
  });
});

describe("soft-launch and desk SEO", () => {
  it("indexes public companion and for-fun routes with self canonicals", () => {
    for (const path of ["/82-0", "/badges", "/watch-guide", "/podcast-companion", "/my-pulse", "/trivia", "/momentum", "/clutch"]) {
      expect(NOINDEX_PATHS.has(path)).toBe(false);
      const seo = resolveRouteSeo(path);
      expect(seo?.noindex).toBeUndefined();
      expect(seo?.canonicalPath).toBe(path);
      expect(toMetaTags(seo!).canonicalUrl).toBe(`https://hoopsintel.net${path}`);
    }
  });

  it("keeps Pick 'Em indexable with a self canonical", () => {
    expect(NOINDEX_PATHS.has("/pick-em")).toBe(false);
    const seo = resolveRouteSeo("/pick-em");
    expect(seo?.noindex).toBeUndefined();
    expect(seo?.canonicalPath).toBe("/pick-em");
  });

  it("indexes the player browse hub", () => {
    const seo = resolveRouteSeo("/players");
    expect(seo?.noindex).toBeUndefined();
    expect(seo?.canonicalPath).toBe("/players");
    expect(seo?.title).toMatch(/Player Index/i);
  });

  it("does not let compare or browse hubs own a player profile canonical", () => {
    const compare = resolveRouteSeo("/compare-players");
    expect(compare?.canonicalPath).toBe("/compare-players");
    expect(playerProfileCanonicalUrl("victor-wembanyama")).toBe("https://hoopsintel.net/player/victor-wembanyama");
    expect(isPageLevelSeoRoute("/player/victor-wembanyama")).toBe(true);
    expect(resolveRouteSeo("/player/victor-wembanyama")).toBeNull();
  });

  it("gives thin and novelty routes a descriptive title, description, and OG payload", () => {
    const routes = [
      "/82-0",
      "/guest-pulse",
      "/podcast-companion",
      "/badges",
      "/watch-guide",
      "/community-pulse",
      "/embed-stats",
      "/widgets/analytics",
    ];
    for (const path of routes) {
      const seo = resolveRouteSeo(path);
      expect(seo?.title.length).toBeGreaterThan(18);
      expect(seo?.description.length).toBeGreaterThan(110);
      expect(seo?.description).not.toMatch(/supabase|rpc|service key/i);
      const meta = toMetaTags(seo!);
      expect(meta.title).toBe(seo?.title);
      expect(meta.description).toBe(seo?.description);
      expect(meta.ogImage).toMatch(/^https:\/\/hoopsintel\.net\//);
      expect(meta.ogUrl).toMatch(/^https:\/\/hoopsintel\.net/);
    }
    expect(resolveRouteSeo("/guest-pulse")?.noindex).toBeUndefined();
    expect(resolveRouteSeo("/82-0")?.noindex).toBeUndefined();
    expect(resolveRouteSeo("/podcast-companion")?.noindex).toBeUndefined();
    expect(resolveRouteSeo("/account")?.noindex).toBe(true);
  });

  it("gives trust pages their own title, description, canonical, and share image", () => {
    for (const path of ["/about", "/methodology", "/privacy", "/terms", "/contact"]) {
      const seo = resolveRouteSeo(path);
      expect(seo?.noindex).toBeUndefined();
      expect(seo?.canonicalPath).toBe(path);
      expect(seo?.title).toMatch(/Hoops Intel/);
      expect(seo?.description.length).toBeGreaterThan(110);
      const meta = toMetaTags(seo!);
      expect(meta.canonicalUrl).toBe(`https://hoopsintel.net${path}`);
      expect(meta.ogImage).toBe("https://hoopsintel.net/og/desk.svg");
      expect(meta.ogUrl).toBe(meta.canonicalUrl);
    }
    const titles = ["/about", "/methodology", "/privacy", "/terms", "/contact"].map((path) => resolveRouteSeo(path)?.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("puts Organization, WebSite, and a NewsArticle on the home edition", () => {
    const home = resolveRouteSeo("/");
    const graph = (home?.jsonLd?.["@graph"] ?? []) as { "@type"?: string }[];
    expect(graph.map((node) => node["@type"])).toEqual(expect.arrayContaining(["Organization", "WebSite", "NewsArticle"]));
    const print = resolveRouteSeo("/print-edition");
    expect(print?.jsonLd?.["@type"]).toBe("NewsArticle");
    expect(toMetaTags(home!).ogImage).toBe("https://hoopsintel.net/og/desk.svg");
  });

  it("gives games and players unique titles and descriptions", () => {
    const first = gamePageMeta({ gameId: "OKC-MEM-20261106", whyItMatters: "A road win.", found: true });
    const rematch = gamePageMeta({ gameId: "OKC-MEM-20261108", whyItMatters: "A road win.", found: true });
    expect(first.title).not.toBe(rematch.title);
    expect(first.description).not.toBe(rematch.description);
    expect(first.title).toContain("November 6, 2026");
    expect(rematch.canonicalUrl).toBe("https://hoopsintel.net/game/OKC-MEM-20261108");

    const kawhi = playerPageMeta({ name: "Kawhi Leonard", slug: "kawhi-leonard", found: true });
    const morant = playerPageMeta({ name: "Ja Morant", slug: "ja-morant", found: true, rank: 9, keyStats: "23 PTS", note: "A quiet night." });
    expect(kawhi.title).not.toBe(morant.title);
    expect(kawhi.description).not.toBe(morant.description);
    expect(kawhi.description).toContain("Kawhi Leonard");
    expect(morant.description).toContain("Ja Morant");
    expect(kawhi.canonicalUrl).toBe("https://hoopsintel.net/player/kawhi-leonard");
  });

  it("points robots.txt at the sitemap", () => {
    const robots = readFileSync(join(repoRoot, "public/robots.txt"), "utf8");
    expect(robots).toMatch(/Sitemap:\s+https:\/\/hoopsintel\.net\/sitemap\.xml/);
  });

  it("indexes the draft board (populated weekly, not a stub)", () => {
    expect(NOINDEX_PATHS.has("/draft")).toBe(false);
    const seo = resolveRouteSeo("/draft");
    expect(seo?.noindex).toBeUndefined();
    expect(seo?.canonicalPath).toBe("/draft");
    expect(seo?.description).toMatch(/not a live draft-night/i);
  });
});
