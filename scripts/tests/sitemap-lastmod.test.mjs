import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  STATIC_ROUTE_SOURCES,
  assertWellFormedSitemap,
  buildSitemapXml,
  extractExportedTimestamp,
  generate,
  isSitemapIndexablePlayer,
  slugify,
  lastmodForLoc,
  substantivePulseNames,
  playerContentLastmods,
  playerSitemapMeta,
  sanitizeLastmod,
  teamContentLastmods,
  xmlEscape,
} from "../generate-sitemap.mjs";
import { SITE_REVIEW_PATHS, SITEMAP_PRIVATE_PATHS, SITEMAP_STATIC_ROUTES } from "../lib/public-routes.mjs";
import { stampGeneratedDate } from "../lib/stamp-generated-date.mjs";
import { pacificIsoDate } from "../lib/daily-dates.mjs";
import {
  collectCommittedEditionDateErrors,
  collectPulsePublicationErrors,
  describePulseSlate,
  displayDateToIso,
  sitemapLastmodTracksEdition,
} from "../lib/edition-date-alignment.mjs";
import { assertThinPlayerShells, pulseCardThinShellLocs, THIN_PLAYER_SHELLS } from "../validate-generated-structure.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

const lists = {
  historical: new Set(["Michael Jordan", "Kobe Bryant", "Hakeem Olajuwon"]),
  retired: new Set(["Chris Paul"]),
  nonPlayers: new Set(["Gregg Popovich", "Charles Barkley"]),
};

/** Names the substantive-card gate must follow, including the thin shells and Embiid. */
const SUBSTANTIVE_GATED_PLAYERS = [
  ...THIN_PLAYER_SHELLS.map((row) => [row.slug, row.name]),
  ["joel-embiid", "Joel Embiid"],
  ["amen-thompson", "Amen Thompson"],
  ["keyonte-george", "Keyonte George"],
  ["jaime-jaquez-jr", "Jaime Jaquez Jr."],
];

function assertPlayerLocsFollowSubstantiveCards(urls, pulseFile) {
  const substantive = substantivePulseNames(
    String(pulseFile).match(/export const pulseIndex\s*=\s*\[([\s\S]*?)\]/)?.[1] ?? "",
  );
  for (const [slug, name] of SUBSTANTIVE_GATED_PLAYERS) {
    const present = urls.some((u) => u.loc === `/player/${slug}`);
    if (substantive.has(name)) {
      assert.equal(present, true, `${name} has a substantive Pulse card and should be indexed`);
    } else {
      assert.equal(present, false, `${name} has no substantive Pulse card`);
    }
  }
}

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

test("momentum lastmod prefers generatedDate over the narrative date", () => {
  const file = readFileSync(join(ROOT, "client/src/lib/momentumData.ts"), "utf8");
  const generated = file.match(/\bgeneratedDate:\s*"(\d{4}-\d{2}-\d{2})"/);
  assert.ok(generated, "momentumData.ts should export an ISO generatedDate");
  assert.match(file, /\bdate:\s*"[^"]+"/, "narrative date stays on the exported object");
  const contentDate = extractExportedTimestamp(file);
  assert.equal(contentDate, generated[1], "lastmod source must be generatedDate, not the narrative date");
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  assert.equal(
    lastmodForLoc("/momentum", { buildDay: "2099-01-01", editionIso: "2000-01-01" }),
    later(contentDate, "2000-01-01"),
  );
  assert.notEqual(contentDate, "2099-01-01");
});

test("momentum and sentiment lastmod follow the daily edition when content is frozen", () => {
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const futureDesk = { buildDay: "2026-12-01", editionIso: "2099-01-01" };
  for (const [path, rel] of [
    ["/momentum", "client/src/lib/momentumData.ts"],
    ["/sentiment", "client/src/lib/sentimentData.ts"],
  ]) {
    const contentIso = extractExportedTimestamp(readFileSync(join(ROOT, rel), "utf8"));
    assert.ok(contentIso, `${rel} should export a generated date`);
    assert.equal(lastmodForLoc(path, futureDesk), futureDesk.editionIso, path);
    assert.equal(
      lastmodForLoc(path, { buildDay: "2026-12-01", editionIso: "2000-01-01" }),
      later(contentIso, "2000-01-01"),
      path,
    );
  }
});

test("midday staging regenerates the committed sitemap", () => {
  const src = readFileSync(join(ROOT, "scripts/stage-midday-refresh.mjs"), "utf8");
  assert.match(src, /generate-sitemap\.mjs/);
  assert.match(src, /public\/sitemap\.xml/);
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
  assert.ok(locs.includes("/players"));
  assert.ok(locs.includes("/tonight"));
  assert.ok(locs.includes("/my-pulse"));
  assert.ok(locs.includes("/trivia"));
  assert.ok(locs.includes("/momentum"));
  assert.ok(locs.includes("/clutch"));
  assert.ok(locs.includes("/82-0"));
  assert.ok(locs.includes("/badges"));
  assert.ok(locs.includes("/watch-guide"));
  assert.ok(locs.includes("/podcast-companion"));
  for (const path of SITEMAP_PRIVATE_PATHS) {
    assert.ok(!locs.includes(path), `${path} is a private hub`);
  }
});

test("trivia lastmod follows the daily edition, not the page component", () => {
  const ctx = { buildDay: "2099-01-01", editionIso: "2026-12-01" };
  assert.equal(lastmodForLoc("/trivia", ctx), "2026-12-01");
  assert.notEqual(lastmodForLoc("/trivia", ctx), ctx.buildDay);
});

test("watch-guide lastmod follows the guide date or the edition, not the build day", () => {
  const guideIso = extractExportedTimestamp(readFileSync(join(ROOT, "client/src/lib/watchGuideData.ts"), "utf8"));
  assert.ok(guideIso, "watchGuideData should export a generated date");
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/watch-guide", ctx), later(guideIso, ctx.editionIso));
  assert.notEqual(lastmodForLoc("/watch-guide", ctx), ctx.buildDay);
});

test("ask lastmod follows the daily edition when the page source is older", () => {
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/ask", ctx), "2026-09-02");
});

test("tonight and players lastmod follow the daily edition", () => {
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const pulseIso = extractExportedTimestamp(readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8"));
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  assert.equal(lastmodForLoc("/tonight", ctx), later(pulseIso, ctx.editionIso));
  assert.equal(lastmodForLoc("/players", ctx), later(pulseIso, ctx.editionIso));
  assert.equal(lastmodForLoc("/tonight", ctx), pulseIso);
  assert.notEqual(lastmodForLoc("/tonight", ctx), ctx.buildDay);
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

test("weekly tool pages lastmod advance with the daily edition when content is frozen", () => {
  const later = (...dates) => dates.filter(Boolean).sort().at(-1);
  const ctx = { buildDay: "2026-12-01", editionIso: "2026-09-02" };
  const futureDesk = { buildDay: "2026-12-01", editionIso: "2099-01-01" };
  const frozenTools = [
    ["/lineups", "client/src/lib/lineupData.ts"],
    ["/clutch", "client/src/lib/clutchData.ts"],
    ["/tactics", "client/src/lib/tacticsData.ts"],
    ["/draft", "client/src/lib/draftData.ts"],
    ["/projections", "client/src/lib/projectionsData.ts"],
    ["/community-pulse", "client/src/lib/communityPulseData.ts"],
    ["/trade-value", "client/src/lib/tradeValueData.ts"],
    ["/trade-simulator", "client/src/lib/tradeSimData.ts"],
  ];
  for (const [path, rel] of frozenTools) {
    const contentIso = extractExportedTimestamp(readFileSync(join(ROOT, rel), "utf8"));
    assert.ok(contentIso, `${rel} should export a generated date`);
    assert.equal(lastmodForLoc(path, ctx), later(contentIso, ctx.editionIso), path);
    assert.notEqual(lastmodForLoc(path, ctx), ctx.buildDay, path);
    // Weekly stamps can be newer than a fixture edition after the Monday regen.
    // A later desk date still wins so lastmod tracks freshness, not a frozen week.
    assert.equal(lastmodForLoc(path, futureDesk), futureDesk.editionIso, path);
  }
});

test("player profile lastmod follows that player's desk date, not the build day", () => {
  const ctx = {
    buildDay: "2026-12-01",
    editionIso: "2026-09-14",
    latestArchiveIso: "2026-10-20",
    playerLastmods: new Map([
      ["jayson-tatum", "2026-09-14"],
      ["chris-paul", "2026-05-11"],
    ]),
  };
  assert.equal(lastmodForLoc("/player/jayson-tatum", ctx), "2026-09-14");
  assert.equal(lastmodForLoc("/player/chris-paul", ctx), "2026-05-11");
  assert.equal(lastmodForLoc("/player/kawhi-leonard", ctx), null);
  assert.notEqual(lastmodForLoc("/player/chris-paul", ctx), ctx.buildDay);
  assert.notEqual(lastmodForLoc("/player/chris-paul", ctx), ctx.editionIso);
  assert.deepEqual(playerSitemapMeta({ inPulse: true }), { priority: "0.65", changefreq: "daily" });
});

test("player lastmod uses the edition only when that player is on today's desk", () => {
  const map = playerContentLastmods({
    editionIso: "2026-10-20",
    archiveFile: `
  {
    id: "2026-05-02",
    players: ["Chris Paul", "Kawhi Leonard"],
    topPlayer: "Chris Paul",
  }
  {
    id: "2026-10-20",
    players: ["Jayson Tatum"],
    topPlayer: "Jayson Tatum",
  }
`,
    pulseFile: `export const pulseIndex = [{player:"Jayson Tatum",team:"BOS",keyStats:"x",note:"y",indexScore:90}];
export const injuryUpdates = [{player:"Ja Morant",team:"MEM",status:"Day-to-Day"}];`,
  });
  assert.equal(map.get("Jayson Tatum"), "2026-10-20");
  assert.equal(map.get("Ja Morant"), "2026-10-20");
  assert.equal(map.get("Chris Paul"), "2026-05-02");
  assert.equal(map.get("Kawhi Leonard"), "2026-05-02");
  assert.equal(map.has("Joel Embiid"), false);
});

test("injury-wire players get the same daily desk sitemap weight as Pulse Index", () => {
  assert.deepEqual(playerSitemapMeta({ onInjuryWire: true }), { priority: "0.65", changefreq: "daily" });
  assert.deepEqual(playerSitemapMeta({ inPulse: false, onInjuryWire: false }), { priority: "0.5", changefreq: "weekly" });
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
  assert.ok(Number(byLoc["/tonight"].priority) >= 0.8);
  assert.ok(Number(byLoc["/injuries"].priority) >= 0.8);
  assert.ok(Number(byLoc["/tonight"].priority) > Number(byLoc["/pro"].priority));
  assert.ok(Number(byLoc["/injuries"].priority) > Number(byLoc["/pro"].priority));
  assert.ok(Number(byLoc["/tools"].priority) <= 0.55);
  assert.ok(Number(byLoc["/trade-simulator"].priority) <= 0.55);
  assert.ok(Number(byLoc["/compare-players"].priority) <= 0.55);
  assert.equal(byLoc["/injuries"].changefreq, "daily");
  assert.equal(byLoc["/tonight"].changefreq, "daily");
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

test("thin archive and prospect names stay out of the sitemap until the Pulse card is substantive", () => {
  const withProspects = { ...lists, prospects: new Set(["VJ Edgecombe"]) };
  assert.equal(isSitemapIndexablePlayer("VJ Edgecombe", { mentions: 4 }, withProspects), false);
  assert.equal(isSitemapIndexablePlayer("Amen Thompson", { mentions: 6 }, lists), false);
  assert.equal(isSitemapIndexablePlayer("Keyonte George", { mentions: 3 }, lists), false);
  // A bare player: string is not a card. Thin shells need keyStats, note, and indexScore.
  assert.equal(
    isSitemapIndexablePlayer("VJ Edgecombe", { inPulse: true, mentions: 1 }, withProspects),
    false,
  );
  assert.equal(
    isSitemapIndexablePlayer("VJ Edgecombe", { substantive: true, mentions: 1 }, withProspects),
    true,
  );
  assert.equal(isSitemapIndexablePlayer("Keyonte George", { substantive: true, mentions: 1 }, lists), true);
  assert.equal(isSitemapIndexablePlayer("Amen Thompson", { inPulse: true, mentions: 1 }, lists), true);
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

test("sitemap lastmod treats a one-day edition lag as pipeline drift", () => {
  // Actions run 37383912092: /momentum was 2026-10-04, lastmodForLoc returned
  // momentumData.generatedDate 2026-10-05. Same calendar mismatch as a UTC
  // clock crossing 17:00 PT. Two days behind the edition is actually stale.
  assert.equal(sitemapLastmodTracksEdition("2026-10-04", "2026-10-05"), true);
  assert.equal(sitemapLastmodTracksEdition("2026-10-05", "2026-10-05"), true);
  assert.equal(sitemapLastmodTracksEdition("2026-10-06", "2026-10-05"), true);
  assert.equal(sitemapLastmodTracksEdition("2026-10-03", "2026-10-05"), false);
  assert.equal(sitemapLastmodTracksEdition("2026-09-30", "2026-10-05"), false);
  assert.equal(sitemapLastmodTracksEdition("2099-01-01", "2026-10-05"), false);
  assert.equal(sitemapLastmodTracksEdition("not-a-date", "2026-10-05"), false);
  assert.equal(pacificIsoDate(new Date("2026-10-06T01:00:00Z")), "2026-10-05");
  assert.equal(pacificIsoDate(new Date("2026-10-06T07:00:00Z")), "2026-10-06");
});

test("committed sitemap includes publisher 200 routes and edition-stamped lastmod", () => {
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const pulseSource = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const editionDisplay = pulseSource.match(/export const pulseEdition\s*=\s*\{[^}]*?\bdate:\s*"([^"]+)"/)?.[1];
  const editionIso = displayDateToIso(editionDisplay);
  assert.equal(editionIso, extractExportedTimestamp(pulseSource));
  assert.match(editionIso ?? "", /^\d{4}-\d{2}-\d{2}$/);
  assert.doesNotMatch(xml, /<loc>https:\/\/hoopsintel\.net\/account<\/loc>/);
  for (const path of [
    "/",
    "/tonight",
    "/injuries",
    "/players",
    "/my-pulse",
    "/trivia",
    "/momentum",
    "/sentiment",
    "/watch-guide",
    "/podcast-companion",
    "/embed-stats",
    "/widgets/analytics",
    "/lineups",
    "/clutch",
    "/tactics",
  ]) {
    const escaped = path.replace(/\//g, "\\/");
    const block = xml.match(
      new RegExp(`<url>\\s*<loc>https:\\/\\/hoopsintel\\.net${escaped}<\\/loc>\\s*<lastmod>([^<]+)<\\/lastmod>`),
    );
    assert.ok(block, `${path} missing from committed sitemap`);
    assert.ok(
      sitemapLastmodTracksEdition(block[1], editionIso),
      `${path} lastmod ${block[1]} is more than 1 day from edition ${editionIso}`,
    );
    assert.notEqual(block[1], "2099-01-01");
  }
  // /82-0 and /badges lastmod follow source git dates. A depth-1 checkout
  // makes `git log -1 -- path` report the tip commit for every file, so do not
  // compare those dates to lastmodForLoc in CI.
  for (const path of ["/82-0", "/badges"]) {
    const escaped = path.replace(/\//g, "\\/");
    const block = xml.match(
      new RegExp(`<url>\\s*<loc>https:\\/\\/hoopsintel\\.net${escaped}<\\/loc>\\s*<lastmod>([^<]+)<\\/lastmod>`),
    );
    assert.ok(block, `${path} missing from committed sitemap`);
    assert.match(block[1], /^\d{4}-\d{2}-\d{2}$/);
    assert.notEqual(block[1], "2099-01-01");
  }
});

test("every static sitemap source file exists (no silent build-day lastmod)", () => {
  for (const [loc, files] of Object.entries(STATIC_ROUTE_SOURCES)) {
    for (const rel of files) {
      assert.ok(existsSync(join(ROOT, rel)), `${loc} source missing: ${rel}`);
    }
  }
});

test("a team tag without pulse stats is not a sitemap content bar", () => {
  assert.equal(
    isSitemapIndexablePlayer("Jaime Jaquez Jr.", { hasCurrentTeam: true, mentions: 1 }, lists),
    false,
  );
  assert.equal(
    isSitemapIndexablePlayer("Jaime Jaquez Jr.", { substantive: true, mentions: 1 }, lists),
    true,
  );
});

test("sanitizeLastmod rejects non-ISO values instead of interpolating them", () => {
  assert.equal(sanitizeLastmod("undefined"), null);
  assert.equal(sanitizeLastmod(null), null);
  assert.equal(sanitizeLastmod("2026-09-10"), "2026-09-10");
});

test("xmlEscape strips control characters that would invalidate XML 1.0", () => {
  assert.equal(xmlEscape("Jaime\u0001Jaquez"), "JaimeJaquez");
  assert.equal(xmlEscape("OKC & SAS"), "OKC &amp; SAS");
});

test("buildSitemapXml skips broken entries and never emits a truncated url block", () => {
  const xml = buildSitemapXml(
    [
      { loc: "/player/jaime-jaquez-jr", lastmod: "2026-09-10", changefreq: "weekly", priority: "0.5" },
      { loc: "/player/broken", lastmod: "not-a-date", changefreq: "weekly", priority: "0.5" },
      { loc: "not-a-path", lastmod: "2026-09-10", changefreq: "weekly", priority: "0.5" },
    ],
    { buildDay: "2026-09-11" },
  );
  assertWellFormedSitemap(xml);
  assert.match(
    xml,
    /<url>\s*<loc>https:\/\/hoopsintel\.net\/player\/jaime-jaquez-jr<\/loc>\s*<lastmod>2026-09-10<\/lastmod>\s*<changefreq>weekly<\/changefreq>\s*<priority>0\.5<\/priority>\s*<\/url>/,
  );
  assert.match(xml, /<loc>https:\/\/hoopsintel\.net\/player\/broken<\/loc>\s*<lastmod>2026-09-11<\/lastmod>/);
  assert.doesNotMatch(xml, /not-a-path/);
  assert.equal((xml.match(/<url>/g) || []).length, (xml.match(/<\/url>/g) || []).length);
});

test("assertWellFormedSitemap rejects mid-entry truncation", () => {
  assert.throws(
    () =>
      assertWellFormedSitemap(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hoopsintel.net/player/jaime-jaquez-jr
`),
    /truncated/,
  );
});

test("generate writes a well-formed sitemap with complete player profile URLs", () => {
  const { xml, urls } = generate({ write: false });
  assertWellFormedSitemap(xml);
  assert.ok(xml.trimEnd().endsWith("</urlset>"));
  assert.ok(urls.length >= 50, `expected a full sitemap, got ${urls.length} URLs`);
  assert.equal(urls.filter((u) => !u.lastmod).length, 0, "every sitemap URL needs a lastmod");
  const locs = new Set(urls.map((u) => u.loc));
  for (const path of SITE_REVIEW_PATHS) {
    if (path === "/sitemap.xml" || SITEMAP_PRIVATE_PATHS.includes(path)) {
      assert.equal(locs.has(path), false, `${path} stays out of the sitemap`);
      continue;
    }
    assert.equal(locs.has(path), true, `public route missing from sitemap: ${path}`);
    assert.match(urls.find((u) => u.loc === path).lastmod, /^\d{4}-\d{2}-\d{2}$/);
  }
  const livePulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  assertPlayerLocsFollowSubstantiveCards(urls, livePulse);
  const home = urls.find((u) => u.loc === "/");
  const tonight = urls.find((u) => u.loc === "/tonight");
  const injuries = urls.find((u) => u.loc === "/injuries");
  const tools = urls.find((u) => u.loc === "/tools");
  assert.ok(home && tonight && injuries && tools);
  assert.match(home.lastmod, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(tonight.lastmod, /^\d{4}-\d{2}-\d{2}$/);
  assert.match(injuries.lastmod, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(Number(tonight.priority) > Number(tools.priority));
  assert.ok(Number(injuries.priority) > Number(tools.priority));
  const playerLocs = urls.filter((u) => u.loc.startsWith("/player/")).map((u) => u.loc);
  assert.ok(playerLocs.length >= 1, "expected substantive player profiles in the sitemap");
  for (const loc of playerLocs) {
    const slug = loc.slice("/player/".length);
    const block = xml.match(
      new RegExp(
        `<url>\\s*<loc>https:\\/\\/hoopsintel\\.net\\/player\\/${slug}<\\/loc>\\s*<lastmod>\\d{4}-\\d{2}-\\d{2}<\\/lastmod>\\s*<changefreq>[a-z]+<\\/changefreq>\\s*<priority>[0-9.]+<\\/priority>\\s*<\\/url>`,
      ),
    );
    assert.ok(block, `complete <url> block missing for /player/${slug}`);
  }
});

test("committed sitemap player locs match generate() so new profiles ship on publish", () => {
  const { urls } = generate({ write: false });
  const xml = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const committed = new Set(
    [...xml.matchAll(/<loc>https:\/\/hoopsintel\.net(\/player\/[^<]+)<\/loc>/g)].map((m) => m[1]),
  );
  const generated = new Set(urls.filter((u) => u.loc.startsWith("/player/")).map((u) => u.loc));
  for (const loc of generated) {
    assert.ok(committed.has(loc), `committed sitemap missing ${loc} — run node scripts/generate-sitemap.mjs`);
  }
  for (const loc of committed) {
    assert.ok(generated.has(loc), `committed sitemap has stale ${loc}`);
  }
});

test("thin-shell sitemap ban lifts when that player has a Pulse card", () => {
  const livePulse = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const sitemap = readFileSync(join(ROOT, "public/sitemap.xml"), "utf8");
  const lifted = new Set(pulseCardThinShellLocs(livePulse));
  for (const { loc } of THIN_PLAYER_SHELLS) {
    if (!sitemap.includes(`https://hoopsintel.net${loc}</loc>`)) continue;
    assert.ok(lifted.has(loc), `${loc} is in the committed sitemap without a substantive Pulse card`);
  }

  const pulse = `export const pulseIndex = [
  {rank:4,player:"Kawhi Leonard",team:"LAC",indexScore:81.2,keyStats:"24.1 / 5.8 / 3.4",note:"Returns as the Clippers' closer."},
];`;
  assert.deepEqual(pulseCardThinShellLocs(pulse), ["/player/kawhi-leonard"]);
  assert.doesNotThrow(() =>
    assertThinPlayerShells(["https://hoopsintel.net/player/kawhi-leonard"], pulse),
  );
  const thinKawhi = `export const pulseIndex = [{player:"Kawhi Leonard",team:"LAC"}];`;
  assert.deepEqual(pulseCardThinShellLocs(thinKawhi), []);
  assert.throws(
    () => assertThinPlayerShells(["https://hoopsintel.net/player/kawhi-leonard"], thinKawhi),
    /https:\/\/hoopsintel\.net\/player\/kawhi-leonard violates thin-player-shell: .*substantive Pulse card \(keyStats, note, and indexScore\) for Kawhi Leonard/,
  );

  for (const [name, loc] of [
    ["Jamal Murray", "/player/jamal-murray"],
    ["Ja Morant", "/player/ja-morant"],
  ]) {
    const team = name === "Jamal Murray" ? "DEN" : "MEM";
    const rich = `export const pulseIndex = [{player:"${name}",team:"${team}",indexScore:84.0,keyStats:"28 / 6 / 7",note:"A full counting line and desk note."}];`;
    assert.deepEqual(pulseCardThinShellLocs(rich), [loc]);
    assert.doesNotThrow(() => assertThinPlayerShells([`https://hoopsintel.net${loc}`], rich));
    const bare = `export const pulseIndex = [{player:"${name}",team:"${team}"}];`;
    assert.deepEqual(pulseCardThinShellLocs(bare), []);
    assert.throws(
      () => assertThinPlayerShells([`https://hoopsintel.net${loc}`], bare),
      new RegExp(`https://hoopsintel\\.net${loc} violates thin-player-shell: .*for ${name}`),
    );
    const partial = `export const pulseIndex = [{player:"${name}",team:"${team}",indexScore:84.0,keyStats:"28 / 6 / 7"}];`;
    assert.deepEqual(pulseCardThinShellLocs(partial), []);
    assert.throws(
      () => assertThinPlayerShells([`https://hoopsintel.net${loc}`], partial),
      new RegExp(`https://hoopsintel\\.net${loc} violates thin-player-shell:`),
    );
  }
});

test("generate keeps thin shells out until the Pulse card is substantive", () => {
  const shell = (name, team) => `{player:"${name}",team:"${team}"}`;
  const card = (name, team) =>
    `{player:"${name}",team:"${team}",indexScore:88,keyStats:"30 / 10 / 8",note:"Counting line and context."}`;
  const injury = (name, team) => `{player:"${name}",team:"${team}",status:"Out",injury:"Knee"}`;
  const slate = `
// GAME RESULTS — No Games
export const pulseEdition = {date:"December 31, 2099"};
export const gameResults = [];
export const gamePreviews = [];
`;
  const names = THIN_PLAYER_SHELLS.map((row) => [row.name, row.team, row.slug]);
  const bare = `${slate}export const pulseIndex = [${names.map(([name, team]) => shell(name, team)).join(",")},${shell("Joel Embiid", "PHI")}];
export const injuryUpdates = [${names.map(([name, team]) => injury(name, team)).join(",")},${injury("Joel Embiid", "PHI")}];`;
  const { urls: bareUrls } = generate({ write: false, pulseSource: bare });
  for (const [name, , slug] of names) {
    assert.equal(bareUrls.some((u) => u.loc === `/player/${slug}`), false, `${name} has no substantive Pulse card`);
  }
  assert.equal(bareUrls.some((u) => u.loc === "/player/joel-embiid"), false);
  assert.doesNotThrow(() =>
    assertThinPlayerShells(
      bareUrls.map((u) => `https://hoopsintel.net${u.loc}`),
      bare,
    ),
  );

  const rich = `${slate}export const pulseIndex = [${names.map(([name, team]) => card(name, team)).join(",")},${card("Joel Embiid", "PHI")}];`;
  const { urls: richUrls } = generate({ write: false, pulseSource: rich });
  for (const [name, , slug] of [...names, ["Joel Embiid", "PHI", "joel-embiid"]]) {
    assert.equal(richUrls.some((u) => u.loc === `/player/${slug}`), true, `${name} has a substantive Pulse card`);
  }
  assert.doesNotThrow(() =>
    assertThinPlayerShells(
      richUrls.map((u) => `https://hoopsintel.net${u.loc}`),
      rich,
    ),
  );
});

test("team lastmod moves only when that team is on the wire, in the archive, or on the lineup file", () => {
  const map = teamContentLastmods({
    editionIso: "2026-10-04",
    archiveFile: `
  {
    id: "2026-04-13",
    teams: ["IND"],
    topStory: "Indiana closes the year",
  }
  {
    id: "2026-10-04",
    teams: ["DEN"],
  }
`,
    pulseFile: `export const injuryUpdates = [{player:"Jamal Murray",team:"DEN",status:"Day-to-Day"}];`,
    lineupFile: `export const lineupData = { generatedDate: "September 28, 2026", teams: [{ team: "CHI" }] };`,
  });
  assert.equal(map.get("DEN"), "2026-10-04");
  assert.equal(map.get("IND"), "2026-04-13");
  assert.equal(map.get("CHI"), "2026-09-28");
  assert.equal(map.has("ATL"), false);
});

test("team lastmod includes today's pulse card and slate without stamping every franchise", () => {
  const map = teamContentLastmods({
    editionIso: "2026-10-20",
    archiveFile: `
  {
    id: "2026-04-13",
    teams: ["IND"],
    topStory: "Indiana closes the year",
  }
`,
    pulseFile: `export const pulseIndex = [{player:"Jayson Tatum",team:"BOS"}];
export const gamePreviews = [{homeTeam:"DET",awayTeam:"BOS",gameId:"BOS-DET-20261020"}];
export const gameResults = [];
export const injuryUpdates = [];`,
    lineupFile: "",
  });
  assert.equal(map.get("BOS"), "2026-10-20");
  assert.equal(map.get("DET"), "2026-10-20");
  assert.equal(map.get("IND"), "2026-04-13");
  assert.equal(map.has("ATL"), false);
});

test("generated team and player lastmods follow that page's content date", () => {
  const pulseFile = readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8");
  const editionDisplay = pulseFile.match(/export const pulseEdition\s*=\s*\{[^}]*?\bdate:\s*"([^"]+)"/)?.[1];
  const editionIso = displayDateToIso(editionDisplay);
  assert.match(editionIso ?? "", /^\d{4}-\d{2}-\d{2}$/);
  const { urls } = generate({ write: false });
  const teamUrls = urls.filter((u) => u.loc.startsWith("/team/"));
  assert.ok(teamUrls.length >= 30, `expected every franchise, got ${teamUrls.length}`);
  const archiveFile = readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8");
  const lineupFile = existsSync(join(ROOT, "client/src/lib/lineupData.ts"))
    ? readFileSync(join(ROOT, "client/src/lib/lineupData.ts"), "utf8")
    : "";
  const expectedTeams = teamContentLastmods({ archiveFile, pulseFile, lineupFile, editionIso });
  for (const url of teamUrls) {
    const code = url.loc.slice("/team/".length).toUpperCase();
    assert.equal(
      url.lastmod,
      expectedTeams.get(code) ?? editionIso,
      `${code} lastmod should follow that franchise's content date`,
    );
  }
  const contentDates = new Set(expectedTeams.values());
  if (contentDates.size > 1) {
    const stamped = new Set(teamUrls.map((u) => u.lastmod));
    assert.ok(stamped.size > 1, "team lastmods must diverge when content dates diverge");
  }
  // Off-days publish empty gameResults and gamePreviews. Game pages are
  // required only when the slate actually contains games.
  const slate = describePulseSlate(pulseFile);
  assert.deepEqual(slate.errors, []);
  if (slate.offDay) {
    assert.deepEqual(slate.ids, []);
  } else {
    assert.ok(slate.ids.length > 0, "pulse edition should publish game ids");
  }
  for (const id of new Set(slate.ids)) {
    assert.ok(urls.some((u) => u.loc === `/game/${id}`), `missing /game/${id}`);
  }
  assert.equal(urls.find((u) => u.loc === "/")?.lastmod, editionIso);
  assertPlayerLocsFollowSubstantiveCards(urls, pulseFile);
  const substantive = substantivePulseNames(
    pulseFile.match(/export const pulseIndex\s*=\s*\[([\s\S]*?)\]/)?.[1] ?? "",
  );
  const slateTeam = pulseFile.match(/export const gamePreviews\s*=\s*\[[\s\S]*?\bhomeTeam:\s*"([A-Z]{3})"/)?.[1];
  if (slateTeam) {
    assert.equal(urls.find((u) => u.loc === `/team/${slateTeam.toLowerCase()}`)?.lastmod, editionIso);
  }
  const paul = urls.find((u) => u.loc === "/player/chris-paul");
  if (paul && !substantive.has("Chris Paul")) {
    assert.match(paul.lastmod, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(paul.lastmod <= editionIso, `Chris Paul lastmod ${paul.lastmod} is after edition ${editionIso}`);
  }
  const playerUrls = urls.filter((u) => u.loc.startsWith("/player/"));
  const playerDates = playerContentLastmods({ archiveFile, pulseFile, editionIso });
  const playerBySlug = new Map();
  for (const [name, iso] of playerDates) {
    const slug = slugify(name);
    const prev = playerBySlug.get(slug);
    if (!prev || iso > prev) playerBySlug.set(slug, iso);
  }
  for (const url of playerUrls) {
    const slug = url.loc.slice("/player/".length);
    const specific = playerBySlug.get(slug);
    if (!specific) continue;
    assert.equal(url.lastmod, specific, `${slug} lastmod should follow that player's content date`);
  }
  const covered = playerUrls.map((url) => playerBySlug.get(url.loc.slice("/player/".length))).filter(Boolean);
  if (new Set(covered).size > 1) {
    const stamped = new Set(playerUrls.map((url) => url.lastmod));
    assert.ok(stamped.size > 1, "player lastmods must diverge when coverage dates diverge");
  }
});

test("published game ids are sitemap locs, and a game without an id cannot ship", () => {
  const published = `
export const pulseEdition = {date:"December 31, 2099"};
export const gameResults = [{homeTeam:"PHI",awayTeam:"BOS",gameId:"BOS-PHI-20991230"}];
export const gamePreviews = [{homeTeam:"BOS",awayTeam:"NYK",gameId:"NYK-BOS-20991231"}];
`;
  const slate = describePulseSlate(published);
  assert.equal(slate.offDay, false);
  assert.deepEqual(slate.errors, []);
  assert.deepEqual(slate.ids, ["BOS-PHI-20991230", "NYK-BOS-20991231"]);
  const { urls } = generate({ write: false, pulseSource: published });
  for (const id of slate.ids) {
    assert.ok(urls.some((u) => u.loc === `/game/${id}`), `missing /game/${id}`);
  }

  const missing = `
export const gameResults = [{homeTeam:"PHI",awayTeam:"BOS",status:"final"}];
export const gamePreviews = [];
`;
  const bad = describePulseSlate(missing);
  assert.equal(bad.offDay, false);
  assert.ok(
    bad.errors.some((line) => /pulse edition should publish game ids/.test(line)),
    "pulse edition should publish game ids",
  );
  assert.throws(() => generate({ write: false, pulseSource: missing }), /pulse edition should publish game ids/);

  const off = `
// GAME RESULTS — No Games (October 19, 2026)
export const gameResults = [];
export const gamePreviews = [];
`;
  const empty = describePulseSlate(off);
  assert.equal(empty.offDay, true);
  assert.deepEqual(empty.ids, []);
  assert.deepEqual(empty.errors, []);
  const { urls: offUrls } = generate({ write: false, pulseSource: off });
  assert.equal(offUrls.some((u) => u.loc === "/game/BOS-PHI-20991230"), false);
  assert.equal(offUrls.some((u) => u.loc === "/game/NYK-BOS-20991231"), false);

  const wiped = `
export const gameResults = [];
export const gamePreviews = [];
`;
  const wipedSlate = describePulseSlate(wiped);
  assert.equal(wipedSlate.offDay, false);
  assert.ok(wipedSlate.errors.some((line) => /No Games/.test(line)));
  assert.throws(() => generate({ write: false, pulseSource: wiped }), /No Games/);
});

test("publication date, tonight slugs, and a next-day display date cannot ship together", () => {
  assert.equal(displayDateToIso("October 4, 2026"), "2026-10-04");
  const bad = collectPulsePublicationErrors(
    `export const pulseEdition = {date:"October 5, 2026",editionContext:"regular"};
export const gamePreviews = [{gameId:"UTA-DEN-20261005",homeTeam:"DEN",awayTeam:"UTA",storyline:"Malone manages the minutes"}];`,
    { editionDisplay: "October 4, 2026", editionIso: "2026-10-04", tonightEspn: "20261004" },
  );
  assert.ok(bad.some((line) => line.includes("October 5, 2026")));
  assert.ok(bad.some((line) => line.includes("UTA-DEN-20261004")));
  assert.ok(bad.some((line) => /Malone/i.test(line)));

  const karl = collectPulsePublicationErrors(
    `export const pulseEdition = {date:"October 4, 2026"};
export const gamePreviews = [];
export const historyFact = {fact:"Karl Malone scored 36."};`,
    { editionDisplay: "October 4, 2026", editionIso: "2026-10-04", tonightEspn: "20261004" },
  );
  assert.equal(karl.length, 0);
});

test("committed edition display date matches the archive publication id", () => {
  const errors = collectCommittedEditionDateErrors({
    pulseSource: readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8"),
    archiveSource: readFileSync(join(ROOT, "client/src/lib/archiveData.ts"), "utf8"),
    sitemapXml: readFileSync(join(ROOT, "public/sitemap.xml"), "utf8"),
    lineMovementSource: readFileSync(join(ROOT, "client/src/lib/lineMovementData.ts"), "utf8"),
    lineOpenersSource: readFileSync(join(ROOT, "client/src/lib/lineOpenersArchiveData.ts"), "utf8"),
  });
  assert.deepEqual(errors, []);
});
