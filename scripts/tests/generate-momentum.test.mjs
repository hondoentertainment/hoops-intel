import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { parseMomentumGames } from "../generate-momentum.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

function event(homeAbbr, awayAbbr, completed = true) {
  return {
    competitions: [
      {
        competitors: [
          { homeAway: "home", team: { abbreviation: homeAbbr, displayName: homeAbbr }, records: [{ summary: "0-0" }], score: "110" },
          { homeAway: "away", team: { abbreviation: awayAbbr, displayName: awayAbbr }, records: [{ summary: "0-0" }], score: "104" },
        ],
        status: { type: { completed, shortDetail: completed ? "Final" : "7:00 PM ET" } },
        venue: { fullName: "Test Arena" },
        leaders: [],
      },
    ],
  };
}

test("parseMomentumGames drops exhibition clubs and keeps NBA finals", () => {
  const games = parseMomentumGames({
    events: [event("POR", "LON"), event("ATL", "OKC"), event("WAS", "WSH")],
  });
  assert.equal(games.length, 2);
  assert.deepEqual(
    games.map((g) => `${g.awayTeam}-${g.homeTeam}`),
    ["OKC-ATL", "WSH-WAS"],
  );
  assert.equal(games[0].status, "final");
});

test("generate-momentum retries truncated writes at 16K tokens", () => {
  const src = readFileSync(join(ROOT, "scripts/generate-momentum.mjs"), "utf8");
  assert.match(src, /writeGeneratedFile/);
  assert.match(src, /retries:\s*2/);
  assert.match(src, /MOMENTUM_MAX_TOKENS\s*=\s*16384/);
  assert.match(src, /isNbaFranchiseAbbrev/);
});

test("midday workflow stages surviving files after a generator failure", () => {
  const src = readFileSync(join(ROOT, ".github/workflows/midday-refresh.yml"), "utf8");
  assert.match(
    src,
    /name:\s*Stage midday refresh files[\s\S]{0,80}if:\s*\$\{\{\s*!cancelled\(\)/,
  );
  assert.match(
    src,
    /name:\s*Commit and push refresh[\s\S]{0,80}if:\s*\$\{\{\s*!cancelled\(\)/,
  );
});
