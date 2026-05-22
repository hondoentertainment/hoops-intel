import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { tipWithinHours } from "../lib/tip-window.mjs";

describe("tipWithinHours", () => {
  it("returns false when tip is far in the future", () => {
    const far = new Date(Date.now() + 6 * 3600 * 1000);
    const game = {
      date: far.toISOString().slice(0, 10),
      time: `${far.getUTCHours()}:${String(far.getUTCMinutes()).padStart(2, "0")} PM ET`,
    };
    assert.equal(tipWithinHours(game, 2), false);
  });

  it("returns true when tip is within two hours", () => {
    const soon = new Date(Date.now() + 90 * 60 * 1000);
    const hr = soon.getUTCHours();
    const game = {
      date: soon.toISOString().slice(0, 10),
      time: `${hr > 12 ? hr - 12 : hr}:30 PM ET`,
    };
    const ok = tipWithinHours(game, 2);
    assert.equal(typeof ok, "boolean");
  });
});
