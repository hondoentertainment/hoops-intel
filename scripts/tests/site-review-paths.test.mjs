import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { SITE_REVIEW_PATHS } from "../lib/public-routes.mjs";
import { resolveSiteReviewPaths, siteReviewPlayerSamplePaths } from "../lib/site-review-paths.mjs";

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
