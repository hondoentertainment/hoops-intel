import { describe, expect, it } from "vitest";
import { slateMarketVsEditorialStats, spreadFavoriteAbbrev } from "../lib/editionPredictionStats";

describe("editionPredictionStats", () => {
  it("derives favourite from minus spread listing", () => {
    expect(
      spreadFavoriteAbbrev({
        homeTeam: "BOS",
        awayTeam: "PHI",
        spread: "BOS -5",
        prediction: "ignored",
      }),
    ).toBe("BOS");
  });

  it("scores alignment vs editorial projection", () => {
    const s = slateMarketVsEditorialStats([
      {
        homeTeam: "BOS",
        awayTeam: "PHI",
        spread: "BOS -5",
        prediction: "BOS wins 114-109",
      },
    ]);
    expect(s.comparable).toBe(1);
    expect(s.aligned).toBe(1);
    expect(s.pct).toBe(100);
  });
});
