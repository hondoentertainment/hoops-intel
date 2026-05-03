// @vitest-environment node
import { describe, expect, it } from "vitest";
import { parseEmbedAnalyticsDays } from "./_lib/embedAnalyticsDays";

describe("parseEmbedAnalyticsDays", () => {
  it("defaults to 8 when days missing", () => {
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api"))).toBe(8);
  });

  it("clamps to 1–90", () => {
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api?days=0"))).toBe(1);
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api?days=-5"))).toBe(1);
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api?days=200"))).toBe(90);
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api?days=14"))).toBe(14);
  });

  it("treats invalid as default 8", () => {
    expect(parseEmbedAnalyticsDays(new Request("https://example.com/api?days=nope"))).toBe(8);
  });
});
