import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  STATIC_ROUTE_SOURCES,
  extractExportedTimestamp,
  isSitemapIndexablePlayer,
  lastmodForLoc,
  playerSitemapMeta,
} from "../generate-sitemap.mjs";
import { SITEMAP_STATIC_ROUTES } from "../lib/public-routes.mjs";
import { stampGeneratedDate } from "../lib/stamp-generated-date.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

const lists = {
  historical: new Set(["Michael Jordan", "Kobe Bryant", "Hakeem Olajuwon"]),
  retired: new Set(["Chris Paul"]),
  nonPlayers: new Set(["Gregg Popovich", "Charles Barkley"]),
};

test("extractExportedTimestamp prefers generatedDate on the exported object", () => {
  const iso = extractExportedTimestamp(`
// Last updated: January 1, 2020
export const sentimentData = {
  generatedDate: "2026-08-20",
  displayDate: "August 20, 2026",
};
`);
  assert.equal(iso, "2026-08-20");
});

test("extractExportedTimestamp parses display dates from weekly generators", () => {
  const iso = extractExportedTimestamp(`
export const momentumData = {
  date: "June 14, 2026",
  gameOfTheNight: "NYK-SAS-20260613",
};
`);
  assert.equal(iso, "2026-06-14");
});

test("home lastmod uses edition date, not build/deploy day", () => {
  assert.equal(
    lastmodForLoc("/", { buildDay: "2026-08-21", editionIso: "2026-08-20" }),
    "2026-08-20",
  );
});

test("game lastmod uses the game date in the URL", () => {
  assert.equal(
    lastmodForLoc("/game/NYK-SAS-20260613", { buildDay: "2026-08-21", editionIso: "2026-08-20" }),
    "2026-06-13",
  );
});

test("momentum lastmod prefers generatedDate over the frozen game-night date", () => {
  const file = readFileSync(join(ROOT, "client/src/lib/momentumData.ts"), "utf8");
  const contentDate = extractExportedTimestamp(file);
  assert.ok(contentDate, "momentumData.ts should export a date");
  assert.match(file, /generatedDate:\s*"\d{4}-\d{2}-\d{2}"/);
  assert.match(file, /date:\s*"June 14, 2026"/);
  assert.notEqual(contentDate, "2026-06-14", "lastmod source must not stay stuck on last game night");
  assert.equal(
    lastmodForLoc("/momentum", { buildDay: "2026-08-21", editionIso: "2026-08-20" }),
    contentDate,
  );
  assert.notEqual(contentDate, "2026-08-21");
});

test("podcast lastmod prefers generatedDate over the episode date", () => {
  const file = readFileSync(join(ROOT, "client/src/lib/podcastData.ts"), "utf8");
  const contentDate = extractExportedTimestamp(file);
  assert.ok(contentDate, "podcastData.ts should export a date");
  assert.match(file, /generatedDate:\s*"\d{4}-\d{2}-\d{2}"/);
  assert.match(file, /date:\s*"June 9, 2026"/);
  assert.notEqual(contentDate, "2026-06-09");
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  assert.equal(
    lastmodForLoc("/podcast-companion", { buildDay: "2026-08-21", editionIso: "2026-08-20" }),
    later(contentDate, "2026-08-20"),
  );
});

test("podcast-companion lastmod advances with the daily edition when content is frozen", () => {
  const podcastIso = extractExportedTimestamp(readFileSync(join(ROOT, "client/src/lib/podcastData.ts"), "utf8"));
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/podcast-companion", ctx), later(podcastIso, ctx.editionIso));
  assert.equal(lastmodForLoc("/podcast-companion", ctx), "2026-09-02");
});

test("publisher 200 routes lastmod follow the edition when page sources are older", () => {
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/embed-stats", ctx), "2026-09-02");
  assert.equal(lastmodForLoc("/widgets/analytics", ctx), "2026-09-02");
});

test("publisher 200 routes are in the static sitemap list", () => {
  const locs = SITEMAP_STATIC_ROUTES.map((r) => r.loc);
  assert.ok(locs.includes("/embed-stats"));
  assert.ok(locs.includes("/widgets/analytics"));
  assert.ok(!locs.includes("/account"));
});

test("stampGeneratedDate upserts ISO generatedDate without rewriting date", () => {
  const src = `export const momentumData: MomentumData = {\n  date: "June 14, 2026",\n};\n`;
  const stamped = stampGeneratedDate(src, "2026-08-25");
  assert.match(stamped, /generatedDate: "2026-08-25"/);
  assert.match(stamped, /date: "June 14, 2026"/);
  assert.equal(stampGeneratedDate(stamped, "2026-08-26").includes('generatedDate: "2026-08-26"'), true);
});

test("stampGeneratedDate replaces display-string generatedDate instead of duplicating", () => {
  const src = `export const historyData: HistoryData = {\n  generatedDate: "June 9, 2026",\n};\n`;
  const stamped = stampGeneratedDate(src, "2026-09-02");
  assert.equal([...stamped.matchAll(/generatedDate:/g)].length, 1);
  assert.match(stamped, /generatedDate: "2026-09-02"/);
  assert.doesNotMatch(stamped, /June 9, 2026/);
});

test("history and refs lastmod advance with the daily edition when content is frozen", () => {
  const historyIso = extractExportedTimestamp(readFileSync(join(ROOT, "client/src/lib/historyData.ts"), "utf8"));
  const refsIso = extractExportedTimestamp(readFileSync(join(ROOT, "client/src/lib/refData.ts"), "utf8"));
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/history", ctx), later(historyIso, ctx.editionIso));
  assert.equal(lastmodForLoc("/refs", ctx), later(refsIso, ctx.editionIso));
  assert.equal(lastmodForLoc("/history", ctx), "2026-09-02");
  assert.equal(lastmodForLoc("/refs", ctx), "2026-09-02");
});

test("Pulse Index players get higher sitemap priority; others stay default", () => {
  assert.deepEqual(playerSitemapMeta({ inPulse: true }), { priority: "0.65", changefreq: "daily" });
  assert.deepEqual(playerSitemapMeta({ inPulse: false }), { priority: "0.5", changefreq: "weekly" });
});

test("daily desk sitemap priority sits above interactive tools", () => {
  const byLoc = Object.fromEntries(SITEMAP_STATIC_ROUTES.map((r) => [r.loc, r]));
  assert.ok(Number(byLoc["/betting-intel"].priority) > Number(byLoc["/tools"].priority));
  assert.ok(Number(byLoc["/betting-intel"].priority) > Number(byLoc["/trade-simulator"].priority));
  assert.ok(Number(byLoc["/injuries"].priority) > Number(byLoc["/compare-players"].priority));
  assert.ok(Number(byLoc["/tools"].priority) <= 0.55);
  assert.ok(Number(byLoc["/trade-simulator"].priority) <= 0.55);
  assert.ok(Number(byLoc["/compare-players"].priority) <= 0.55);
  assert.equal(byLoc["/injuries"].changefreq, "daily");
  assert.equal(byLoc["/betting-intel"].changefreq, "daily");
});

test("historical comparison names are not sitemap-indexable", () => {
  assert.equal(isSitemapIndexablePlayer("Michael Jordan", { mentions: 12 }, lists), false);
  assert.equal(isSitemapIndexablePlayer("Kobe Bryant", { inPulse: false, mentions: 3 }, lists), false);
});

test("retired Chris Paul stays indexable when archive coverage exists", () => {
  assert.equal(isSitemapIndexablePlayer("Chris Paul", { mentions: 2 }, lists), true);
  assert.equal(isSitemapIndexablePlayer("Chris Paul", { mentions: 0 }, lists), false);
});

test("thin one-mention archive names are dropped", () => {
  assert.equal(isSitemapIndexablePlayer("Random Bench Player", { mentions: 1 }, lists), false);
});

test("Pulse Index players stay indexable", () => {
  assert.equal(
    isSitemapIndexablePlayer("Victor Wembanyama", { inPulse: true, mentions: 1 }, lists),
    true,
  );
});

test("committed sitemap includes publisher 200 routes and edition-stamped lastmod", () => {
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  assert.doesNotMatch(xml, /<loc>https:\/\/hoopsintel\.net\/account<\/loc>/);
  for (const path of ["/podcast-companion", "/embed-stats", "/widgets/analytics"]) {
    const escaped = path.replace(/\//g, "\\/");
    const block = xml.match(
      new RegExp(`<url>\\s*<loc>https:\\/\\/hoopsintel\\.net${escaped}<\\/loc>\\s*<lastmod>([^<]+)<\\/lastmod>`),
    );
    assert.ok(block, `${path} missing from committed sitemap`);
    assert.equal(block[1], "2026-09-02", `${path} lastmod should follow the current edition`);
  }
});

test("every static sitemap source file exists (no silent build-day lastmod)", () => {
  for (const [loc, files] of Object.entries(STATIC_ROUTE_SOURCES)) {
    for (const rel of files) {
      assert.ok(existsSync(join(ROOT, rel)), `${loc} source missing: ${rel}`);
    }
  }
});
