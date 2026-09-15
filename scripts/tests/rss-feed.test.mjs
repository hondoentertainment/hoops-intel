import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import {
  assertWellFormedRss,
  collectRssEditions,
  editionIso,
  extractLiveEdition,
  generate,
  parseArchiveEditions,
} from "../generate-rss.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

const QUOTED_CAMP = `
export const archiveEditions = [
  {"id":"2026-09-15","date":"2026-09-15","displayDate":"September 15, 2026","headline":"Camp Day Thirty-One","subheadline":"Layer two begins","gamesCount":0,"topStory":"Denver enters layer two.","topPlayer":"Victor Wembanyama","topStatLine":"32.8 PPG"},
  {"id":"2026-09-14","date":"2026-09-14","displayDate":"September 14, 2026","headline":"Camp Day Thirty","subheadline":"Skeleton locks","gamesCount":0,"topStory":"Layer one closed.","topPlayer":"Victor Wembanyama","topStatLine":"32.8 PPG"},
];
`;

const UNQUOTED_REGULAR = `
export const archiveEditions = [
  {id:"2026-03-13",date:"2026-03-13",displayDate:"March 13, 2026",headline:"SGA Breaks Wilt's Record",subheadline:"35 points",gamesCount:9,topStory:"Record night.",topPlayer:"Shai Gilgeous-Alexander",topStatLine:"35 PTS"},
];
`;

const MIXED_UNSORTED = `
export const archiveEditions = [
  {id:"2026-04-20",date:"2026-04-20",displayDate:"April 20, 2026",headline:"Old playoff desk",subheadline:"April slate",gamesCount:3,topStory:"Playoff recap.",topPlayer:"Jalen Brunson",topStatLine:"41 PTS"},
  {"id":"2026-09-15","date":"2026-09-15","headline":"Today at camp","subheadline":"No games","gamesCount":0,"topStory":"Camp copy."},
  {id:"2026-05-24-155",date:"May 24, 2026",edition:"Vol. 2026 · No. 155",subheadline:"ECF lead",topStory:"Bridges masterclass."},
];
`;

const PULSE = `
export const pulseEdition = {date:"September 15, 2026",edition:"Vol. 2026 · No. 230",subtitle:"Camp desk",editionContext:"preseason"};
export const narrative = {headline:"Live camp headline",subhead:"Eighteen days remain.",body:["No games tonight."]};
`;

test("editionIso accepts ISO and display dates", () => {
  assert.equal(editionIso("2026-09-15"), "2026-09-15");
  assert.equal(editionIso("September 15, 2026"), "2026-09-15");
  assert.equal(editionIso("May 24, 2026"), "2026-05-24");
});

test("quoted-key camp editions parse without gamesCount/topPlayer required", () => {
  const editions = parseArchiveEditions(QUOTED_CAMP);
  assert.equal(editions.length, 2);
  assert.equal(editions[0].date, "2026-09-15");
  assert.equal(editions[0].headline, "Camp Day Thirty-One");
  assert.equal(editions[0].gamesCount, 0);
});

test("unquoted-key editions still parse", () => {
  const editions = parseArchiveEditions(UNQUOTED_REGULAR);
  assert.equal(editions[0].id, "2026-03-13");
  assert.equal(editions[0].topPlayer, "Shai Gilgeous-Alexander");
});

test("items are newest-first even when the file is not", () => {
  const editions = collectRssEditions(MIXED_UNSORTED, "");
  assert.deepEqual(
    editions.map((ed) => ed.date),
    ["2026-09-15", "2026-05-24", "2026-04-20"],
  );
});

test("live pulse edition is included when archive omits today", () => {
  const editions = collectRssEditions(UNQUOTED_REGULAR, PULSE);
  assert.equal(editions[0].date, "2026-09-15");
  assert.equal(editions[0].headline, "Live camp headline");
});

test("generate writes well-formed RSS whose newest item is the live edition", () => {
  const { xml, editions } = generate({ write: false, now: new Date("2026-09-15T13:00:00Z") });
  assertWellFormedRss(xml);
  assert.doesNotMatch(xml, /<html/i);
  const live = extractLiveEdition(readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8"));
  assert.ok(live?.date, "pulseEdition.date should parse");
  assert.equal(editions[0].date, live.date);
  assert.match(xml, new RegExp(`<guid>https://hoopsintel\\.net/edition/${live.date}</guid>`));
  assert.match(xml, /<atom:link href="https:\/\/hoopsintel\.net\/feed\.xml" rel="self"/);
  assert.equal(editions.length, 30);
  for (let i = 1; i < editions.length; i++) {
    assert.ok(editions[i - 1].date >= editions[i].date, "RSS items must be newest-first");
  }
});

test("assertWellFormedRss rejects HTML and truncated feeds", () => {
  assert.throws(() => assertWellFormedRss("<!doctype html><html></html>"), /XML declaration|HTML/i);
  assert.throws(
    () =>
      assertWellFormedRss(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <item>
      <title>Broken
`),
    /truncated/,
  );
});

test("committed feed.xml and rss.xml are well-formed and not HTML", () => {
  const feed = readFileSync(join(ROOT, "public/feed.xml"), "utf8");
  const rss = readFileSync(join(ROOT, "public/rss.xml"), "utf8");
  assertWellFormedRss(feed);
  assertWellFormedRss(rss);
  assert.doesNotMatch(feed, /<html/i);
  assert.doesNotMatch(rss, /<html/i);
  const live = extractLiveEdition(readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8"));
  assert.match(feed, new RegExp(`<guid>https://hoopsintel\\.net/edition/${live.date}</guid>`));
  assert.match(rss, new RegExp(`<guid>https://hoopsintel\\.net/edition/${live.date}</guid>`));
  const firstPub = feed.match(/<pubDate>([^<]+)<\/pubDate>/);
  assert.ok(firstPub, "feed should have a pubDate");
  assert.equal(editionIso(new Date(firstPub[1]).toISOString().slice(0, 10)), live.date);
});

test("Vite preview aliases /rss to rss.xml so local preview is not SPA HTML", () => {
  const vite = readFileSync(join(ROOT, "vite.config.ts"), "utf8");
  assert.match(vite, /name:\s*"rss-alias"/);
  assert.match(vite, /\/rss\.xml/);
  assert.match(vite, /configurePreviewServer/);
});

test("Vercel SPA fallback cannot swallow rss.xml, and /rss rewrites to XML", () => {
  const vercel = JSON.parse(readFileSync(join(ROOT, "vercel.json"), "utf8"));
  const rewriteSources = (vercel.rewrites || []).map((r) => r.source);
  const spa = (vercel.rewrites || []).find((r) => r.destination === "/index.html");
  assert.ok(spa, "SPA rewrite should exist");
  assert.match(spa.source, /rss\\.xml/);
  assert.ok(
    (vercel.rewrites || []).some((r) => r.source === "/rss" && /rss\.xml|feed\.xml/.test(r.destination)),
    "/rss should rewrite to the RSS file",
  );
  assert.ok(
    !rewriteSources.includes("/rss.xml") ||
      (vercel.rewrites || []).some((r) => r.source === "/rss.xml" && r.destination !== "/index.html"),
    "/rss.xml must not be rewritten to the SPA",
  );
  const headerSources = (vercel.headers || []).map((h) => h.source);
  assert.ok(headerSources.includes("/feed.xml"));
  assert.ok(headerSources.includes("/rss.xml"));
});

test("dist copies stay XML after vite build when present", () => {
  for (const name of ["feed.xml", "rss.xml"]) {
    const path = join(ROOT, "dist", name);
    if (!existsSync(path)) continue;
    const xml = readFileSync(path, "utf8");
    assertWellFormedRss(xml);
    assert.doesNotMatch(xml, /<html/i);
  }
});
