import { describe, expect, it } from "vitest";
import { isPageLevelSeoRoute, NOINDEX_PATHS, playerProfileCanonicalUrl, resolveRouteSeo, toMetaTags } from "../lib/seoConfig";

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
  it("noindexes thin engagement routes with self canonicals", () => {
    for (const path of ["/82-0", "/badges", "/watch-guide", "/podcast-companion"]) {
      expect(NOINDEX_PATHS.has(path)).toBe(true);
      const seo = resolveRouteSeo(path);
      expect(seo?.noindex).toBe(true);
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
    expect(resolveRouteSeo("/82-0")?.noindex).toBe(true);
    expect(resolveRouteSeo("/podcast-companion")?.noindex).toBe(true);
  });

  it("indexes the draft board (populated weekly, not a stub)", () => {
    expect(NOINDEX_PATHS.has("/draft")).toBe(false);
    const seo = resolveRouteSeo("/draft");
    expect(seo?.noindex).toBeUndefined();
    expect(seo?.canonicalPath).toBe("/draft");
    expect(seo?.description).toMatch(/not a live draft-night/i);
  });
});
