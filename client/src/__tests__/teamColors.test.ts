import { describe, it, expect } from "vitest";
import { teamColors, getTeamColor } from "../lib/teamColors";

describe("teamColors", () => {
  describe("teamColors map", () => {
    it("has all 30 NBA teams", () => {
      expect(Object.keys(teamColors).length).toBe(30);
    });

    it("contains expected team abbreviations", () => {
      const expectedTeams = [
        "ATL", "BOS", "BRK", "CHA", "CHI", "CLE", "DAL", "DEN", "DET",
        "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN",
        "NOP", "NYK", "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS",
        "TOR", "UTA", "WAS",
      ];
      for (const team of expectedTeams) {
        expect(teamColors[team]).toBeDefined();
      }
    });

    it("stores hex color values", () => {
      for (const color of Object.values(teamColors)) {
        expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      }
    });

    it("has correct colors for known teams", () => {
      expect(teamColors["BOS"]).toBe("#007A33"); // Celtics green
      expect(teamColors["LAL"]).toBe("#552583"); // Lakers purple
      expect(teamColors["CHI"]).toBe("#CE1141"); // Bulls red
      expect(teamColors["GSW"]).toBe("#1D428A"); // Warriors blue
    });
  });

  describe("getTeamColor", () => {
    it("returns correct color for valid team", () => {
      expect(getTeamColor("LAL")).toBe("#552583");
      expect(getTeamColor("BOS")).toBe("#007A33");
    });

    it("returns fallback color for unknown team", () => {
      expect(getTeamColor("XYZ")).toBe("#0EA5E9");
    });

    it("returns fallback for empty string", () => {
      expect(getTeamColor("")).toBe("#0EA5E9");
    });

    it("is case-sensitive (lowercase returns fallback)", () => {
      expect(getTeamColor("lal")).toBe("#0EA5E9");
    });
  });
});
