import { describe, it, expect } from "vitest";
import { slugify } from "../lib/searchUtils";

describe("searchUtils", () => {
  describe("slugify", () => {
    it("converts a simple name to lowercase slug", () => {
      expect(slugify("LeBron James")).toBe("lebron-james");
    });

    it("handles multiple spaces", () => {
      expect(slugify("Shai  Gilgeous  Alexander")).toBe("shai-gilgeous-alexander");
    });

    it("removes accented characters", () => {
      expect(slugify("Luka Dončić")).toBe("luka-doncic");
    });

    it("removes special characters", () => {
      expect(slugify("Kevin O'Brien")).toBe("kevin-o-brien");
    });

    it("trims leading and trailing hyphens", () => {
      expect(slugify(" -LeBron James- ")).toBe("lebron-james");
    });

    it("handles empty string", () => {
      expect(slugify("")).toBe("");
    });

    it("handles single word", () => {
      expect(slugify("Wembanyama")).toBe("wembanyama");
    });

    it("replaces non-alphanumeric characters with hyphens", () => {
      expect(slugify("Player #1 (Test)")).toBe("player-1-test");
    });

    it("handles numbers correctly", () => {
      expect(slugify("Player 23")).toBe("player-23");
    });

    it("normalizes unicode combining characters", () => {
      expect(slugify("José Alvarado")).toBe("jose-alvarado");
    });

    it("handles Turkish and Serbian Latin letters like production sitemap", () => {
      expect(slugify("Alperen Şengün")).toBe("alperen-sengun");
      expect(slugify("Nikola Jokić")).toBe("nikola-jokic");
    });
  });
});
