import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TeamLogo from "../components/TeamLogo";
import {
  teamLogoUrl,
  normalizeTeam,
  getTeamColor,
  getTeamName,
  readableTextOn,
} from "../lib/teamColors";

describe("team identity helpers", () => {
  it("normalizes ESPN abbreviation variants to our standard set", () => {
    expect(normalizeTeam("bkn")).toBe("BRK");
    expect(normalizeTeam("GS")).toBe("GSW");
    expect(normalizeTeam("no")).toBe("NOP");
    expect(normalizeTeam("ny")).toBe("NYK");
    expect(normalizeTeam("SA")).toBe("SAS");
    expect(normalizeTeam("utah")).toBe("UTA");
    expect(normalizeTeam("wsh")).toBe("WAS");
    expect(normalizeTeam("LAL")).toBe("LAL");
  });

  it("maps every standard team to an ESPN logo URL", () => {
    for (const abbr of Object.keys(getColorKeys())) {
      expect(teamLogoUrl(abbr)).toMatch(/^https:\/\/a\.espncdn\.com\/i\/teamlogos\/nba\/500\/[a-z]+\.png$/);
    }
  });

  it("resolves logo + color through alias normalization", () => {
    expect(teamLogoUrl("BKN")).toBe(teamLogoUrl("BRK"));
    expect(getTeamColor("WSH")).toBe(getTeamColor("WAS"));
    expect(getTeamName("ny")).toBe("New York Knicks");
  });

  it("returns null logo for unknown teams (crest fallback path)", () => {
    expect(teamLogoUrl("ZZZ")).toBeNull();
  });

  it("picks dark text on light team colors and white on dark", () => {
    expect(readableTextOn("#FFFFFF")).toBe("#0A1628");
    expect(readableTextOn("#C4CED4")).toBe("#0A1628");
    expect(readableTextOn("#0C2340")).toBe("#FFFFFF");
  });
});

describe("TeamLogo", () => {
  it("renders an accessible image with the full team name", () => {
    render(<TeamLogo team="LAL" />);
    expect(screen.getByAltText("Los Angeles Lakers")).toBeInTheDocument();
  });

  it("falls back to a labeled crest for unknown teams", () => {
    render(<TeamLogo team="ZZZ" />);
    const crest = screen.getByRole("img", { name: "ZZZ" });
    expect(crest).toHaveTextContent("ZZZ");
  });
});

function getColorKeys() {
  return {
    ATL: 1, BOS: 1, BRK: 1, CHA: 1, CHI: 1, CLE: 1, DAL: 1, DEN: 1, DET: 1,
    GSW: 1, HOU: 1, IND: 1, LAC: 1, LAL: 1, MEM: 1, MIA: 1, MIL: 1, MIN: 1,
    NOP: 1, NYK: 1, OKC: 1, ORL: 1, PHI: 1, PHX: 1, POR: 1, SAC: 1, SAS: 1,
    TOR: 1, UTA: 1, WAS: 1,
  };
}
