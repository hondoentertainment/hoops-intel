import { describe, expect, it } from "vitest";
import { playoffSeoRoundPhrase } from "../lib/seoConfig";
import { isFinalsActive, playoffSeries } from "../lib/playoffData";
import { pulseEdition } from "../lib/pulseData";

describe("Finals Command Mode readiness", () => {
  it("playoffSeoRoundPhrase reflects active postseason", () => {
    const phrase = playoffSeoRoundPhrase();
    if (playoffSeries.length === 0) {
      expect(phrase).toBeNull();
      return;
    }
    expect(phrase).toMatch(/series|Finals|round|conference/i);
  });

  it("editionContext uses a supported publishing mode", () => {
    expect(["regular", "playoffs", "finals"]).toContain(pulseEdition.editionContext);
  });

  it("isFinalsActive is boolean", () => {
    expect(typeof isFinalsActive()).toBe("boolean");
  });

  it("finals desk SEO path exists when finals round present", () => {
    const hasFinalsRound = playoffSeries.some((s) => s.round === "finals");
    if (!hasFinalsRound) return;
    const phrase = playoffSeoRoundPhrase();
    expect(phrase?.toLowerCase()).toContain("finals");
  });
});
