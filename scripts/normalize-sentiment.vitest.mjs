import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";
import { normalizeSentimentSource } from "./lib/normalize-sentiment.mjs";
import { extractExportLiteral } from "./lib/pulse-export-parse.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURE_PATH = join(ROOT, "scripts/fixtures/sentiment-player-narrative-summary.ts");

function interfaceBlock(src, name) {
  const start = src.indexOf(`export interface ${name}`);
  const next = src.indexOf("export ", start + 1);
  return src.slice(start, next);
}

describe("normalizeSentimentSource", () => {
  const fixture = readFileSync(FIXTURE_PATH, "utf8");

  it("maps or strips narrativeSummary on player entries and keeps each type's own narrative field", () => {
    const out = normalizeSentimentSource(fixture);
    const data = extractExportLiteral(out, "sentimentData");

    expect(data.playerSentiments.map((p) => p.player)).toEqual([
      "Fixture Guard",
      "Summary Only",
      "Duplicate Copy",
      "Blank Arc",
    ]);

    expect(data.playerSentiments[0]).toEqual({
      player: "Fixture Guard",
      team: "TST",
      sentiment: "mixed",
      score: 5,
      mentions: 10,
      topTake: "Keep {braces}, and commas, in the take.",
      narrativeArc: "The player arc that must be kept.",
    });
    expect(data.playerSentiments[0]).not.toHaveProperty("narrativeSummary");
    expect(data.playerSentiments[0]).not.toHaveProperty("teamFull");
    expect(data.playerSentiments[0]).not.toHaveProperty("overallSentiment");

    expect(data.playerSentiments[1]).toMatchObject({
      player: "Summary Only",
      narrativeArc: "Mapped onto the arc.",
    });
    expect(data.playerSentiments[1]).not.toHaveProperty("narrativeSummary");

    expect(data.playerSentiments[2]).toMatchObject({
      player: "Duplicate Copy",
      narrativeArc: "Same sentence on both fields.",
    });
    expect(data.playerSentiments[2]).not.toHaveProperty("narrativeSummary");

    expect(data.playerSentiments[3]).toMatchObject({
      player: "Blank Arc",
      narrativeArc: "Filled from the stray summary.",
    });
    expect(data.playerSentiments[3]).not.toHaveProperty("narrativeSummary");

    expect(data.teamSentiments[0]).toEqual({
      team: "TST",
      teamFull: "Test Squad",
      sentiment: "positive",
      score: 12,
      buzzWords: ["depth", "pace, space"],
      narrativeSummary: "Team copy stays on the team.",
    });
    expect(data.teamSentiments[0]).not.toHaveProperty("narrativeArc");
    expect(data.teamSentiments[1]).toMatchObject({
      team: "ARC",
      narrativeSummary: "Team arc mapped onto summary.",
    });
    expect(data.teamSentiments[1]).not.toHaveProperty("narrativeArc");

    expect(data.topics[0].summary).toBe(
      "Do not treat playerSentiments: [ as an array. Keep {this}, comma.",
    );
    expect(data.hottestTake).toBe("hot take stays");
    expect(data.coldestTake).toBe("cold take stays");

    expect(interfaceBlock(out, "PlayerSentiment")).toContain("narrativeArc: string;");
    expect(interfaceBlock(out, "PlayerSentiment")).not.toContain("narrativeSummary");
    expect(interfaceBlock(out, "TeamSentiment")).toContain("narrativeSummary: string;");
    expect(interfaceBlock(out, "TeamSentiment")).not.toContain("narrativeArc");
  });

  it("is stable and accepts a fenced model reply", () => {
    const once = normalizeSentimentSource(fixture);
    expect(normalizeSentimentSource(once)).toBe(once);
    expect(normalizeSentimentSource("```typescript\n" + fixture + "\n```")).toBe(once);
  });

  it("refuses a player entry that has no narrative text to map", () => {
    const src = `
export const sentimentData = {
  teamSentiments: [
    {
      team: "TST",
      teamFull: "Test Squad",
      sentiment: "neutral",
      score: 0,
      buzzWords: ["x"],
      narrativeSummary: "Team ok.",
    },
  ],
  playerSentiments: [
    {
      player: "No Arc",
      team: "TST",
      sentiment: "neutral",
      score: 0,
      mentions: 1,
      topTake: "Nothing to say.",
    },
  ],
};
`;
    expect(() => normalizeSentimentSource(src)).toThrow(/narrativeArc/);
  });

  it("wires both sentiment generators through the normalizer before they write", () => {
    const fallback = readFileSync(join(ROOT, "scripts/generate-sentiment.mjs"), "utf8");
    const daily = readFileSync(join(ROOT, "scripts/generate-sentiment-daily.mjs"), "utf8");
    expect(fallback.indexOf("normalizeSentimentSource")).toBeGreaterThan(-1);
    expect(fallback.indexOf("normalizeSentimentSource")).toBeLessThan(fallback.indexOf("writeFileSync"));
    expect(daily).toContain("normalizeSentimentSource");
  });
});
