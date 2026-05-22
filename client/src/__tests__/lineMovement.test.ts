import { describe, expect, it } from "vitest";
import { lineMovementForMatchup, spreadMoved } from "../lib/lineMovement";

describe("lineMovement", () => {
  it("finds movement row for matchup regardless of home/away order", () => {
    const row = lineMovementForMatchup("CLE", "NYK");
    expect(row?.openingSpread).toBe("NYK -4.5");
    expect(row?.closingSpread).toBe("NYK -5.5");
  });

  it("spreadMoved detects opener vs closer drift", () => {
    expect(spreadMoved("NYK -4.5", "NYK -5.5")).toBe(true);
    expect(spreadMoved("NYK -5.5", "NYK -5.5")).toBe(false);
  });
});
