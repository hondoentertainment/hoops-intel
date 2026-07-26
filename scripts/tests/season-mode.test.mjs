import test from "node:test";
import assert from "node:assert/strict";
import {
  seasonMode,
  primaryGenerator,
  generatorActive,
  editionContextForMode,
  deskLabelForContext,
} from "../lib/season-mode.mjs";

test("seasonMode maps postseason window", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 3, 20))), "playoffs");
});

test("seasonMode maps NBA Finals window (early June)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 5, 10))), "finals");
});

test("seasonMode maps regular season (January)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 0, 10))), "regular-season");
});

test("seasonMode maps free agency (early July)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 6, 5))), "free-agency");
});

test("seasonMode maps summer league (mid July)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 6, 15))), "summer-league");
});

test("seasonMode maps dead period (late July)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 6, 28))), "dead-period");
});

test("seasonMode maps preseason (September)", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 8, 15))), "preseason");
});

test("generatorActive is true year-round, including dead-period", () => {
  assert.equal(generatorActive(new Date(Date.UTC(2026, 6, 28))), true);
  assert.equal(generatorActive(new Date(Date.UTC(2026, 6, 15))), true);
  assert.equal(generatorActive(new Date(Date.UTC(2026, 7, 10))), true);
});

test("primaryGenerator produces an edition in dead-period", () => {
  assert.equal(primaryGenerator(new Date(Date.UTC(2026, 6, 28))), "generate-edition.mjs");
});

test("editionContextForMode maps every window, collapsing only regular-season", () => {
  assert.equal(editionContextForMode("regular-season"), "regular");
  assert.equal(editionContextForMode("playoffs"), "playoffs");
  assert.equal(editionContextForMode("finals"), "finals");
  assert.equal(editionContextForMode("draft"), "draft");
  assert.equal(editionContextForMode("free-agency"), "free-agency");
  assert.equal(editionContextForMode("summer-league"), "summer-league");
  assert.equal(editionContextForMode("preseason"), "preseason");
  assert.equal(editionContextForMode("dead-period"), "dead-period");
});

test("offseason windows do not report a regular-season desk", () => {
  for (const mode of ["draft", "free-agency", "summer-league", "preseason", "dead-period"]) {
    assert.notEqual(deskLabelForContext(editionContextForMode(mode)), "Regular season desk");
  }
  assert.equal(deskLabelForContext(editionContextForMode("regular-season")), "Regular season desk");
});

test("seasonMode maps draft-night window", () => {
  assert.equal(seasonMode(new Date(Date.UTC(2026, 5, 25))), "draft");
});

test("primaryGenerator returns draft-specific script in June post-finals", () => {
  assert.equal(primaryGenerator(new Date(Date.UTC(2026, 5, 25))), "generate-draft.mjs");
});
