import { describe, it, expect } from "vitest";
import { searchContext } from "../lib/hoopsSearch";
import { globalSearch, slugify } from "../lib/searchUtils";
import { pulseIndex } from "../lib/pulseData";

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

  describe("site search", () => {
    it("finds the Pulse Index leader and builds Ask context for that question", () => {
      const leader = pulseIndex[0];
      expect(leader).toBeTruthy();
      const hits = globalSearch(leader.player);
      expect(hits.some((hit) => hit.type === "player" && hit.title === leader.player && hit.link?.startsWith("/player/"))).toBe(true);

      const context = searchContext("Who leads the Pulse Index?");
      expect(context).not.toMatch(/No specific context found/);
      expect(context.toLowerCase()).toContain("pulse");
      expect(context).toContain(leader.player);
    });

    it("links thin archive names without inventing a counting line", () => {
      const hits = globalSearch("Edgecombe");
      const player = hits.find((hit) => hit.type === "player");
      expect(player?.title).toMatch(/Edgecombe/);
      expect(player?.link).toBe("/player/vj-edgecombe");
      expect(player?.subtitle?.toLowerCase()).toContain("prospect");
      expect(player?.subtitle).not.toMatch(/PPG|RPG|APG/);

      const harper = globalSearch("Dylan Harper").find((hit) => hit.type === "player");
      expect(harper?.link).toBe("/player/dylan-harper");
      expect(harper?.subtitle).not.toMatch(/PPG|RPG|APG/);

      expect(globalSearch("Michael Jordan").some((hit) => hit.link === "/player/michael-jordan")).toBe(false);

      const ask = searchContext("VJ Edgecombe");
      expect(ask).toContain("VJ Edgecombe");
      expect(ask).toContain("No live counting line");
    });
  });
});
