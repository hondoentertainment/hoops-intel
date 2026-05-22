import { describe, expect, it } from "vitest";
import { formatLineMovementBadge, spreadPointsMoved, spreadFavoriteFlipped } from "../lib/spreadMovement";

describe("spreadMovement", () => {
  it("computes point delta on same favorite", () => {
    expect(spreadPointsMoved("NYK -4.5", "NYK -5.5")).toBe(1);
  });

  it("detects line flip", () => {
    expect(spreadFavoriteFlipped("NYK -2", "CLE -1")).toBe(true);
  });

  it("formats movement badge", () => {
    expect(formatLineMovementBadge("NYK -4.5", "NYK -5.5")).toMatch(/Moved 1 pt/);
  });
});
