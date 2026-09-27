import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BookConsensusPanel } from "../components/BookConsensusPanel";
import {
  bookGamesMissingFromPreviews,
  booksForMatchup,
  consensusSummary,
  consensusView,
  spreadRangeLabel,
  type OddsBooksGame,
} from "../lib/oddsBooks";

const slate: OddsBooksGame = {
  awayTeam: "CLE",
  homeTeam: "NYK",
  closingSpread: "NYK -5.5",
  books: [
    { key: "draftkings", title: "DraftKings", spread: "NYK -5.5" },
    { key: "fanduel", title: "FanDuel", spread: "NYK -5.5" },
    { key: "betmgm", title: "BetMGM", spread: "NYK -5.5" },
    { key: "caesars", title: "Caesars", spread: "NYK -5" },
  ],
};

describe("odds book consensus", () => {
  it("groups books, marks the modal number, and keeps a same-side range", () => {
    const summary = consensusSummary(slate);
    expect(summary).toEqual({ label: "NYK -5.5", agree: 3, total: 4 });
    const view = consensusView(slate);
    expect(view?.agreementPct).toBe(75);
    expect(view?.buckets[0]).toMatchObject({ spread: "NYK -5.5", count: 3, consensus: true, sharePct: 100 });
    expect(view?.outliers.map((book) => book.title)).toEqual(["Caesars"]);
    expect(view?.rangeLabel).toBe("NYK -5.5 to NYK -5");
  });

  it("does not blend a split board into one number", () => {
    expect(spreadRangeLabel(["NYK -3", "BOS -1"])).toBeNull();
    expect(spreadRangeLabel(["NYK -4", "NYK -4"])).toBeNull();
    const split = consensusView({
      ...slate,
      books: [
        { key: "a", title: "A", spread: "NYK -3" },
        { key: "b", title: "B", spread: "CLE -1" },
      ],
    });
    expect(split?.rangeLabel).toBeNull();
    expect(split?.agree).toBe(1);
  });

  it("returns nothing for an empty book list and ignores a missing slate", () => {
    expect(consensusSummary({ ...slate, books: [] })).toBeNull();
    expect(consensusView({ ...slate, books: [] })).toBeNull();
    expect(booksForMatchup("NYK", "CLE")).toBeUndefined();
    expect(bookGamesMissingFromPreviews([{ awayTeam: "CLE", homeTeam: "NYK" }], [slate])).toEqual([]);
    expect(bookGamesMissingFromPreviews([], [slate])).toEqual([slate]);
  });

  it("renders agreement, the range, and each book title from the returned quotes", () => {
    render(<BookConsensusPanel game={slate} />);
    const panel = screen.getByTestId("book-consensus");
    expect(panel).toHaveTextContent("3/4 books at NYK -5.5");
    expect(panel).toHaveTextContent("75% agreement");
    expect(panel).toHaveTextContent("Posted range NYK -5.5 to NYK -5");
    expect(panel).toHaveTextContent("DraftKings");
    expect(panel).toHaveTextContent("Caesars");
    expect(panel).not.toHaveTextContent("invented");
  });
});
