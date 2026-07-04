import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import PlayerAvatar, { normalizePlayerName, headshotUrlForName } from "../components/PlayerAvatar";

vi.mock("../lib/playerHeadshotData", () => ({
  playerHeadshotIds: { "lebron james": 1966, "nikola jokic": 3112335 },
}));

afterEach(() => vi.clearAllMocks());

describe("normalizePlayerName", () => {
  it("lowercases, strips punctuation and suffixes, collapses space", () => {
    expect(normalizePlayerName("Shai Gilgeous-Alexander")).toBe("shai gilgeous alexander");
    expect(normalizePlayerName("Jaren Jackson Jr.")).toBe("jaren jackson");
    expect(normalizePlayerName("P.J. Tucker")).toBe("pj tucker");
    expect(normalizePlayerName("  LeBron   James ")).toBe("lebron james");
  });

  it("strips diacritics so accented names match", () => {
    expect(normalizePlayerName("Nikola Jokić")).toBe("nikola jokic");
    expect(normalizePlayerName("Luka Dončić")).toBe("luka doncic");
  });
});

describe("headshotUrlForName", () => {
  it("builds the ESPN headshot URL for a known player", () => {
    expect(headshotUrlForName("LeBron James")).toBe(
      "https://a.espncdn.com/i/headshots/nba/players/full/1966.png",
    );
  });
  it("matches through accent normalization", () => {
    expect(headshotUrlForName("Nikola Jokić")).toBe(
      "https://a.espncdn.com/i/headshots/nba/players/full/3112335.png",
    );
  });
  it("returns null for an unknown player (crest fallback path)", () => {
    expect(headshotUrlForName("Nobody Here")).toBeNull();
  });
});

describe("PlayerAvatar", () => {
  it("renders an ESPN headshot img for a known player", () => {
    render(<PlayerAvatar name="LeBron James" team="LAL" />);
    const img = screen.getByAltText("LeBron James") as HTMLImageElement;
    expect(img.tagName).toBe("IMG");
    expect(img.src).toContain("/1966.png");
  });

  it("falls back to a labeled initials crest for unknown players", () => {
    render(<PlayerAvatar name="Deni Avdija" team="POR" />);
    const crest = screen.getByRole("img", { name: "Deni Avdija" });
    expect(crest.tagName).toBe("SPAN");
    expect(crest).toHaveTextContent("DA");
  });
});
