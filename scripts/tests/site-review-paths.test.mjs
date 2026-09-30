import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { SITE_REVIEW_PATHS } from "../lib/public-routes.mjs";
import {
  classifySitemapCoverage,
  resolveSiteReviewPaths,
  siteReviewPlayerSamplePaths,
  summarizeSitemapXml,
} from "../lib/site-review-paths.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");

test("player sample includes Pulse leader, injury wire, and empty-state fixtures", () => {
  const pulseFile = `
export const pulseIndex = [
  {rank:1,player:"Victor Wembanyama",team:"SAS"},
];
export const injuryUpdates = [
  {player:"Jamal Murray",team:"DEN",status:"Day-to-Day"},
];
`;
  const samples = siteReviewPlayerSamplePaths(pulseFile);
  assert.ok(samples.includes("/player/victor-wembanyama"));
  assert.ok(samples.includes("/player/jamal-murray"));
  assert.ok(samples.includes("/player/chris-paul"));
  assert.ok(samples.includes("/player/kawhi-leonard"));
  assert.ok(samples.includes("/player/vj-edgecombe"));
  assert.ok(samples.length <= 8, "sample must stay small — do not fingerprint every profile");
});

test("resolveSiteReviewPaths appends series and player samples to the static allowlist", () => {
  const paths = resolveSiteReviewPaths({
    playoffFile: `seriesId: "east-1"\nseriesId: "west-2"`,
    pulseFile: readFileSync(join(ROOT, "client/src/lib/pulseData.ts"), "utf8"),
  });
  for (const loc of SITE_REVIEW_PATHS) {
    assert.ok(paths.includes(loc), `missing static path ${loc}`);
  }
  assert.ok(paths.includes("/playoffs/series/east-1"));
  assert.ok(paths.some((p) => p.startsWith("/player/")));
  assert.ok(paths.filter((p) => p.startsWith("/player/")).length <= 8);
});

test("sitemap excerpt keeps every path and the lastmod count", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://hoopsintel.net/tonight</loc><lastmod>2026-09-29</lastmod></url>
  <url><loc>https://hoopsintel.net/player/kawhi-leonard</loc><lastmod>2026-09-14</lastmod></url>
</urlset>`;
  const summary = summarizeSitemapXml(xml);
  assert.match(summary, /^2 urls, 2 lastmod:/);
  assert.match(summary, /\/tonight/);
  assert.match(summary, /\/player\/kawhi-leonard/);
  assert.doesNotMatch(summary, /https:\/\/hoopsintel\.net/);
});

test("coverage split keeps private hubs and thin players out of the public gap", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://hoopsintel.net/tonight</loc><lastmod>2026-09-29</lastmod></url>
  <url><loc>https://hoopsintel.net/my-pulse</loc><lastmod>2026-09-29</lastmod></url>
</urlset>`;
  const coverage = classifySitemapCoverage(
    ["/tonight", "/my-pulse", "/account", "/82-0", "/player/vj-edgecombe", "/sitemap.xml"],
    xml,
  );
  assert.deepEqual(coverage.publicAbsent, ["/82-0"]);
  assert.deepEqual(coverage.privateAbsent, ["/account"]);
  assert.deepEqual(coverage.playerAbsent, ["/player/vj-edgecombe"]);
  assert.equal(coverage.urlCount, 2);
  assert.equal(coverage.lastmodCount, 2);
});
