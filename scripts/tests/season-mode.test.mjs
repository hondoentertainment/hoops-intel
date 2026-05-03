import test from "node:test";
import assert from "node:assert/strict";
import { seasonMode, primaryGenerator } from "../lib/season-mode.mjs";

test("seasonMode maps postseason window", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 3, 20))), "playoffs");
});

test("seasonMode maps draft-night window", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 5, 25))), "draft");
});

test("primaryGenerator returns draft-specific script in June post-finals", () => {
  assert.equal(primaryGenerator(new Date(Date.UTC(2026, 5, 25))), "generate-draft.mjs");
});
