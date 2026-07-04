import { describe, expect, it } from "vitest";
import { lineMovementForMatchup, spreadMoved } from "../lib/lineMovement";
import { lineMovementRows } from "../lib/lineMovementData";

describe("lineMovement", () => {
  it("finds movement row for matchup regardless of home/away order", () => {
    const seed = lineMovementRows[0];
    if (!seed) {
      // Off-season / off-day editions generate no line-movement rows; the lookup
      // must still no-op safely rather than the suite failing on empty data.
      expect(lineMovementForMatchup("LAL", "BOS")).toBeUndefined();
      return;
    }
    const row = lineMovementForMatchup(seed.awayTeam, seed.homeTeam);
    expect(row?.openingSpread).toBe(seed.openingSpread);
    expect(row?.closingSpread).toBe(seed.closingSpread);
    const reversed = lineMovementForMatchup(seed.homeTeam, seed.awayTeam);
    expect(reversed?.openingSpread).toBe(seed.openingSpread);
  });

  it("spreadMoved detects opener vs closer drift", () => {
    expect(spreadMoved("NYK -4.5", "NYK -5.5")).toBe(true);
    expect(spreadMoved("NYK -5.5", "NYK -5.5")).toBe(false);
  });
});
