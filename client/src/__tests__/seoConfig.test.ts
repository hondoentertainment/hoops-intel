import { describe, expect, it } from "vitest";
import { NOINDEX_PATHS, resolveRouteSeo, toMetaTags } from "../lib/seoConfig";

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
