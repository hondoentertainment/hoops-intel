import { describe, expect, it, vi, beforeEach } from "vitest";

vi.mock("../lib/pulseData", () => ({
  gamePreviews: [{ homeTeam: "NYK", awayTeam: "CLE" }],
  narrative: { subhead: "ECF opens at MSG tonight." },
  pulseEdition: { subtitle: "Knicks rested · Cavs on 48h turnaround", editionContext: "playoffs" },
  pulseIndex: [{ player: "Jalen Brunson", team: "NYK", rationale: "Eight days rest before ECF Game 1." }],
  tickerItems: [{ text: "Wembanyama 41 in WCF Game 1 OT thriller" }],
}));

vi.mock("../lib/playoffData", () => ({
  isPlayoffsActive: () => true,
  playoffMovers: [{ player: "Victor Wembanyama", direction: "riser", note: "Playoff MVP odds shortened overnight." }],
}));

vi.mock("../lib/playoffAnalytics", () => ({
  nextPlayoffGameAcross: () => ({
    homeTeam: "NYK",
    awayTeam: "CLE",
    date: "2026-05-19",
    time: "8:00 PM ET",
  }),
}));

import { buildSixtySecondBullets, editionContextLabel } from "../lib/deskBriefing";

describe("deskBriefing", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("buildSixtySecondBullets returns up to five desk bullets", () => {
    const bullets = buildSixtySecondBullets();
    expect(bullets.length).toBeGreaterThan(0);
    expect(bullets.length).toBeLessThanOrEqual(5);
    expect(bullets.some((b) => b.includes("Knicks") || b.includes("rested"))).toBe(true);
  });

  it("editionContextLabel reflects playoffs desk", () => {
    expect(editionContextLabel()).toBe("Playoffs desk");
  });
});
