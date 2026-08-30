import { describe, expect, it } from "vitest";
import { pulseLeadLine, rationaleToBullets } from "../lib/pulseRationale";

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

  it("pulseLeadLine returns the first rationale sentence", () => {
    expect(pulseLeadLine("Ranks first because the extension is imminent.", "Longer note.")).toBe(
      "Ranks first because the extension is imminent",
    );
  });
});
