import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import {
  collectParseErrors,
  repairPulseSource,
} from "../lib/pulse-export-parse.mjs";

const NAMES = ["narrative", "triviaQuestion"];

test("repairs the #435 missing-semicolon draft", () => {
  const broken = [
    'export const narrative = {headline:"Hi",body:["Camp is open"]}',
    'export const tickerItems = ["Camp open"];',
    'export const triviaQuestion = {id:"2026-10-04",question:"Q?",options:["a","b","c","d"],correctIndex:0,explanation:"Because.",difficulty:"medium"}',
  ].join("\n");
  const raw = collectParseErrors(broken, NAMES);
  assert.ok(raw.errors.some((e) => e.startsWith("narrative:") && e.includes("export")));
  assert.ok(raw.errors.some((e) => e.includes("could not find terminating")));

  const fixed = repairPulseSource("```ts\n" + broken + "\n```");
  const parsed = collectParseErrors(fixed, NAMES);
  assert.deepEqual(parsed.errors, []);
  assert.equal(parsed.scope.narrative.headline, "Hi");
  assert.equal(parsed.scope.triviaQuestion.id, "2026-10-04");
});

test("does not invent a closer for a truncated trivia export", () => {
  const truncated = 'export const triviaQuestion = {id:"2026-10-04",question:"cut';
  const repaired = repairPulseSource(truncated);
  const parsed = collectParseErrors(repaired, ["triviaQuestion"]);
  assert.equal(parsed.errors.length, 1);
  assert.match(parsed.errors[0], /terminating/);
});

test("committed pulseData.ts still parses", () => {
  const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
  const src = readFileSync(join(root, "client/src/lib/pulseData.ts"), "utf8");
  const names = [
    "pulseEdition", "narrative", "tickerItems", "gameResults", "pulseIndex",
    "statLeaders", "mediaReactions", "injuryUpdates", "gamePreviews",
    "rookieWatch", "fantasyAlerts", "eastStandings", "westStandings",
    "standings", "historyFact", "hoopsIQ", "triviaQuestion",
  ];
  const parsed = collectParseErrors(src, names);
  assert.deepEqual(parsed.errors, []);
  assert.equal(typeof parsed.scope.pulseEdition.editionContext, "string");
});
