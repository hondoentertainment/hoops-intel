import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import EnhancedDesk, { TonightGamesEntry } from "../components/enhanced/EnhancedDesk";
import { editionDateStamp, tonightGameLinks, type TonightSlatePreview } from "../lib/enhancedDesk";
import { gamePreviews, pulseEdition } from "../lib/pulseData";

const FIXTURE: TonightSlatePreview[] = [
  {
    awayTeam: "BOS",
    homeTeam: "PHI",
    time: "7:00 PM ET",
    tv: "ESPN",
    featured: true,
    gameId: "BOS-PHI-20991231",
  },
  {
    awayTeam: "NYK",
    homeTeam: "SAS",
    time: "9:30 PM ET",
    tv: "NBA League Pass",
    gameId: "NYK-SAS-20991231",
  },
];

describe("tonight game links", () => {
  it("deep-links each published preview and skips a row with no canonical id", () => {
    const links = tonightGameLinks(
      [
        ...FIXTURE,
        { awayTeam: "NOT", homeTeam: "REAL", time: "8:00 PM ET" },
        { awayTeam: "BOS", homeTeam: "PHI", gameId: "BOS-PHI-20991231", time: "duplicate" },
      ],
      "December 31, 2099",
    );
    expect(editionDateStamp("December 31, 2099")).toBe("20991231");
    expect(links.map((link) => link.href)).toEqual([
      "/game/BOS-PHI-20991231",
      "/game/NYK-SAS-20991231",
    ]);
    expect(links[0]).toMatchObject({ awayTeam: "BOS", homeTeam: "PHI", featured: true, time: "7:00 PM ET", tv: "ESPN" });
    expect(links[1]?.featured).toBe(false);
  });

  it("builds an id from the edition date when the preview omitted gameId", () => {
    const links = tonightGameLinks(
      [{ awayTeam: "DET", homeTeam: "BOS", time: "7:30 PM ET", tv: "League Pass" }],
      "2099-12-31",
    );
    expect(links).toEqual([
      {
        gameId: "DET-BOS-20991231",
        href: "/game/DET-BOS-20991231",
        awayTeam: "DET",
        homeTeam: "BOS",
        time: "7:30 PM ET",
        tv: "League Pass",
        featured: false,
      },
    ]);
  });

  it("returns nothing for an empty slate", () => {
    expect(tonightGameLinks([], "December 31, 2099")).toEqual([]);
    expect(tonightGameLinks(null, "December 31, 2099")).toEqual([]);
    expect(tonightGameLinks(undefined, "")).toEqual([]);
  });
});

describe("Tonight's Games entry", () => {
  afterEach(() => cleanup());

  it("renders a deep link per fixture game and no heading level 1", () => {
    const games = tonightGameLinks(FIXTURE, "December 31, 2099");
    render(<TonightGamesEntry games={games} />);
    expect(screen.getByRole("heading", { level: 2, name: "Tonight's Games" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { level: 1 })).not.toBeInTheDocument();
    const cards = screen.getAllByTestId("tonight-game-link");
    expect(cards).toHaveLength(2);
    expect(screen.getByRole("link", { name: /BOS @ PHI/ })).toHaveAttribute("href", "/game/BOS-PHI-20991231");
    expect(screen.getByRole("link", { name: /NYK @ SAS/ })).toHaveAttribute("href", "/game/NYK-SAS-20991231");
    expect(screen.getByRole("link", { name: "Full slate" })).toHaveAttribute("href", "/tonight");
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getByText("7:00 PM ET · ESPN")).toBeInTheDocument();
  });

  it("renders nothing when the slate is empty", () => {
    const { container } = render(<TonightGamesEntry games={[]} />);
    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByTestId("tonights-games")).not.toBeInTheDocument();
    expect(screen.queryByText("Tonight's Games")).not.toBeInTheDocument();
    expect(screen.queryByText(/no games/i)).not.toBeInTheDocument();
  });

  it("mounts the edition slate on the desk without a second h1", () => {
    const links = tonightGameLinks(gamePreviews, pulseEdition.date);
    render(<EnhancedDesk showMyPulse={false} />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    if (links.length === 0) {
      expect(screen.queryByTestId("tonights-games")).not.toBeInTheDocument();
      return;
    }
    expect(screen.getAllByTestId("tonight-game-link")).toHaveLength(links.length);
    for (const link of links) {
      expect(screen.getByRole("link", { name: new RegExp(`${link.awayTeam} @ ${link.homeTeam}`) })).toHaveAttribute(
        "href",
        link.href,
      );
    }
  });
});
