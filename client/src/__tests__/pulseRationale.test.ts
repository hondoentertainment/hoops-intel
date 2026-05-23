import { describe, expect, it } from "vitest";
import { rationaleToBullets } from "../lib/pulseRationale";

describe("rationaleToBullets", () => {
  it("splits rationale into up to three sentences", () => {
    const bullets = rationaleToBullets(
      "First point. Second point. Third point. Fourth point.",
    );
    expect(bullets).toHaveLength(3);
    expect(bullets[0]).toBe("First point");
  });

  it("fills from note when rationale is short", () => {
    const bullets = rationaleToBullets("Single rationale.", "Note one. Note two.");
    expect(bullets.length).toBeGreaterThanOrEqual(2);
  });
});
