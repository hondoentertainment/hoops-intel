import test from "node:test";
import assert from "node:assert/strict";
import { parseOddsEvent } from "../lib/fetch-odds-api.mjs";

test("parseOddsEvent formats favorite spread and collects books", () => {
  const row = parseOddsEvent({
    home_team: "New York Knicks",
    away_team: "Cleveland Cavaliers",
    bookmakers: [
      {
        key: "draftkings",
        title: "DraftKings",
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
      {
        key: "fanduel",
        title: "FanDuel",
        markets: [
          {
            key: "spreads",
            outcomes: [
              { name: "New York Knicks", point: -5 },
              { name: "Cleveland Cavaliers", point: 5 },
            ],
          },
        ],
      },
    ],
  });
  assert.equal(row.awayTeam, "CLE");
  assert.equal(row.homeTeam, "NYK");
  assert.equal(row.closingSpread, "NYK -5.5");
  assert.equal(row.books.length, 2);
  assert.equal(row.books[0].key, "draftkings");
  assert.equal(row.books[1].spread, "NYK -5");
});

test("parseOddsEvent returns null for unknown teams", () => {
  assert.equal(parseOddsEvent({ home_team: "Fake A", away_team: "Fake B", bookmakers: [] }), null);
});
