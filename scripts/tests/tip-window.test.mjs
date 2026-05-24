import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { tipWithinHours } from "../lib/tip-window.mjs";

const FIXED_NOW = Date.UTC(2026, 4, 24, 12, 0, 0); // 2026-05-24 08:00 ET (EDT)

describe("tipWithinHours", () => {
  it("returns false when tip is far in the future", () => {
    const game = {
      date: "2099-06-15",
      time: "8:00 PM ET",
    };
    assert.equal(tipWithinHours(game, 2, FIXED_NOW), false);
  });

  it("returns true when tip is within two hours", () => {
    const game = {
      date: "2026-05-24",
      time: "5:30 PM ET",
    };
    assert.equal(tipWithinHours(game, 2, FIXED_NOW), true);
  });

  it("returns false when tip is in the past", () => {
    const game = {
      date: "2026-05-24",
      time: "12:00 PM ET",
    };
    assert.equal(tipWithinHours(game, 2, FIXED_NOW), false);
  });
});
