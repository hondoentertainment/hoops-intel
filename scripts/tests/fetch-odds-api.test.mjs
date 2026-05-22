import test from "node:test";
import assert from "node:assert/strict";
import { parseOddsEvent } from "../lib/fetch-odds-api.mjs";

test("parseOddsEvent formats favorite spread", () => {
  const row = parseOddsEvent({
    home_team: "New York Knicks",
    away_team: "Cleveland Cavaliers",
    bookmakers: [
      {
        key: "draftkings",
        markets: [
          {
            key: "spreads",
            outcomes: [
              { name: "New York Knicks", point: -5.5 },
              { name: "Cleveland Cavaliers", point: 5.5 },
            ],
          },
        ],
      },
    ],
  });
  assert.deepEqual(row, {
    awayTeam: "CLE",
    homeTeam: "NYK",
    closingSpread: "NYK -5.5",
  });
});

test("parseOddsEvent returns null for unknown teams", () => {
  assert.equal(parseOddsEvent({ home_team: "Fake A", away_team: "Fake B", bookmakers: [] }), null);
});
