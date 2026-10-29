import { describe, expect, it } from "vitest";
import { sentimentData } from "../lib/sentimentData";
import { sentimentPulseData } from "../lib/sentimentPulseView";

describe("sentimentPulseView", () => {
  it("builds player cards from player fields and team mood copy from narrativeSummary", () => {
    expect(sentimentPulseData.generatedDate).toBe(sentimentData.generatedDate);
    expect(sentimentPulseData.players).toHaveLength(sentimentData.playerSentiments.length);
    expect(sentimentPulseData.teams).toHaveLength(sentimentData.teamSentiments.length);

    sentimentData.playerSentiments.forEach((raw, i) => {
      expect(raw).not.toHaveProperty("narrativeSummary");
      expect(raw.narrativeArc.length).toBeGreaterThan(0);
      const view = sentimentPulseData.players[i];
      expect(view.player).toBe(raw.player);
      expect(view.team).toBe(raw.team);
      expect(view.topTake).toBe(raw.topTake);
      expect(view.overallSentiment).toBe(raw.score);
    });

    sentimentData.teamSentiments.forEach((raw, i) => {
      expect(raw).not.toHaveProperty("narrativeArc");
      const view = sentimentPulseData.teams[i];
      expect(view.team).toBe(raw.team);
      expect(view.moodScore).toBe(raw.score);
      if (raw.score < 20) expect(view.topGrievance).toBe(raw.narrativeSummary);
      if (raw.score >= 20) expect(view.brightSpot).toBe(raw.narrativeSummary);
    });
  });
});
