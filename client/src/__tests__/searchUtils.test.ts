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
      // The card itself, not a name dropped inside a lower-ranked blurb.
      expect(context).toContain(`${leader.player} (#${leader.rank} Pulse Index)`);
    });

    it("still retrieves a named Pulse player when the question is not who leads", () => {
      const named = pulseIndex.find((row) => row.player !== pulseIndex[0]?.player);
      if (!named) throw new Error("edition has no second Pulse Index player");
      const context = searchContext(`Why is ${named.player} on the Pulse Index?`);
      expect(context).toContain(`${named.player} (#${named.rank} Pulse Index)`);
    });

    it("links thin archive names without inventing a counting line", () => {
      const edgeCard = pulseIndex.find((row) => row.player === "VJ Edgecombe");
      const edge = globalSearch("Edgecombe").find(
        (hit) => hit.type === "player" && hit.link === "/player/vj-edgecombe",
      );
      expect(edge?.title).toMatch(/Edgecombe/);
      if (edgeCard) {
        expect(edge?.subtitle).toContain(edgeCard.team);
        expect(edge?.subtitle).toContain(edgeCard.keyStats);
      } else {
        expect(edge?.subtitle?.toLowerCase()).toContain("prospect");
        expect(edge?.subtitle).not.toMatch(/PPG|RPG|APG/);
      }

      const harperCard = pulseIndex.find((row) => row.player === "Dylan Harper");
      const harper = globalSearch("Dylan Harper").find(
        (hit) => hit.type === "player" && hit.link === "/player/dylan-harper",
      );
      expect(harper).toBeTruthy();
      if (harperCard) {
        expect(harper?.subtitle).toContain(harperCard.keyStats);
      } else {
        expect(harper?.subtitle).not.toMatch(/PPG|RPG|APG/);
      }

      expect(globalSearch("Michael Jordan").some((hit) => hit.link === "/player/michael-jordan")).toBe(false);

      const ask = searchContext("VJ Edgecombe");
      expect(ask).toContain("VJ Edgecombe");
      if (edgeCard) {
        expect(ask).toContain(`#${edgeCard.rank}`);
      } else {
        expect(ask).toContain("No live counting line");
      }
    });
  });
});
