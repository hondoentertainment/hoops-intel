import { describe, it, expect } from "vitest";
import { NON_SPA_PATH_RE, recallScroll, rememberScroll, scrollKeyFor, shouldIntercept } from "../lib/spaNavigation";
import { HOT_ROUTES, importerForPath } from "../lib/routePreload";

const ORIGIN = "https://hoopsintel.net";

const click = (overrides: Partial<Parameters<typeof shouldIntercept>[0]> = {}) => ({
  button: 0,
  metaKey: false,
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
  defaultPrevented: false,
  ...overrides,
});

const anchor = (overrides: Partial<Parameters<typeof shouldIntercept>[1]> = {}) => ({
  origin: ORIGIN,
  pathname: "/tools",
  target: "",
  hasDownload: false,
  ...overrides,
});

describe("shouldIntercept", () => {
  it("intercepts a plain same-origin route click", () => {
    expect(shouldIntercept(click(), anchor(), ORIGIN)).toBe(true);
  });

  it("leaves modified clicks to the browser (new tab, etc.)", () => {
    expect(shouldIntercept(click({ metaKey: true }), anchor(), ORIGIN)).toBe(false);
    expect(shouldIntercept(click({ ctrlKey: true }), anchor(), ORIGIN)).toBe(false);
    expect(shouldIntercept(click({ shiftKey: true }), anchor(), ORIGIN)).toBe(false);
    expect(shouldIntercept(click({ button: 1 }), anchor(), ORIGIN)).toBe(false);
  });

  it("skips prevented, targeted, download, and cross-origin links", () => {
    expect(shouldIntercept(click({ defaultPrevented: true }), anchor(), ORIGIN)).toBe(false);
    expect(shouldIntercept(click(), anchor({ target: "_blank" }), ORIGIN)).toBe(false);
    expect(shouldIntercept(click(), anchor({ hasDownload: true }), ORIGIN)).toBe(false);
    expect(shouldIntercept(click(), anchor({ origin: "https://espn.com" }), ORIGIN)).toBe(false);
  });

  it("skips static files and API routes", () => {
    for (const path of ["/feed.xml", "/sitemap.xml", "/robots.txt", "/embed.js", "/manifest.webmanifest", "/api/ask", "/og-image.svg"]) {
      expect(shouldIntercept(click(), anchor({ pathname: path }), ORIGIN), path).toBe(false);
    }
  });

  it("still intercepts routes whose names merely contain dots or api", () => {
    expect(shouldIntercept(click(), anchor({ pathname: "/82-0" }), ORIGIN)).toBe(true);
    expect(NON_SPA_PATH_RE.test("/rapid-city")).toBe(false);
  });
});

describe("scroll memory", () => {
  it("round-trips positions per path+search key", () => {
    const key = scrollKeyFor("/archive", "?page=2");
    rememberScroll(key, 640.6);
    expect(recallScroll(key)).toBe(641);
    expect(recallScroll(scrollKeyFor("/archive", ""))).toBeNull();
  });
});

describe("route preload registry", () => {
  it("resolves importers for hot routes and dynamic prefixes", () => {
    for (const path of HOT_ROUTES) {
      expect(importerForPath(path), path).toBeTypeOf("function");
    }
    expect(importerForPath("/player/jalen-brunson")).toBeTypeOf("function");
    expect(importerForPath("/team/SAS")).toBeTypeOf("function");
    expect(importerForPath("/game/LAL-HOU-20260418")).toBeTypeOf("function");
  });

  it("returns null for unknown and non-SPA paths", () => {
    expect(importerForPath("/feed.xml")).toBeNull();
    expect(importerForPath("/nonexistent")).toBeNull();
  });
});
