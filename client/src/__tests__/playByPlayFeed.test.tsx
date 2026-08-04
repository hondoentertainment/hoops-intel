import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PlayByPlayFeed from "../components/PlayByPlayFeed";

describe("PlayByPlayFeed", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("does not fetch until expanded", () => {
    const spy = vi.spyOn(global, "fetch");
    render(<PlayByPlayFeed espnGameId="401584793" awayTeam="LAL" homeTeam="BOS" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("fetches and renders plays grouped by quarter on expand", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        boxscore: { teams: [{ team: { id: "24", abbreviation: "LAL" } }, { team: { id: "2", abbreviation: "BOS" } }] },
        plays: [
          {
            id: "1", period: { number: 1 }, clock: { displayValue: "11:32" },
            text: "LeBron James makes three point jumper", awayScore: "3", homeScore: "0",
            scoringPlay: true, team: { id: "24" },
          },
        ],
      }),
    } as Response);

    render(<PlayByPlayFeed espnGameId="401584793" awayTeam="LAL" homeTeam="BOS" />);
    fireEvent.click(screen.getByRole("button", { name: /view play-by-play/i }));

    await waitFor(() => {
      expect(screen.getByText(/LeBron James makes three point jumper/)).toBeInTheDocument();
    });
    expect(screen.getByText("Q1")).toBeInTheDocument();
  });

  it("shows an error state when ESPN returns no plays", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ boxscore: { teams: [] }, plays: [] }),
    } as Response);

    render(<PlayByPlayFeed espnGameId="401584793" awayTeam="LAL" homeTeam="BOS" />);
    fireEvent.click(screen.getByRole("button", { name: /view play-by-play/i }));

    await waitFor(() => {
      expect(screen.getByText(/not available for this game/i)).toBeInTheDocument();
    });
  });

  it("does not offer a shot chart toggle when ESPN omits coordinate data", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        boxscore: { teams: [{ team: { id: "24", abbreviation: "LAL" } }, { team: { id: "2", abbreviation: "BOS" } }] },
        plays: [
          {
            id: "1", period: { number: 1 }, clock: { displayValue: "10:00" },
            text: "Missed shot", awayScore: "0", homeScore: "0",
            scoringPlay: false, team: { id: "24" },
          },
        ],
      }),
    } as Response);

    render(<PlayByPlayFeed espnGameId="401584793" awayTeam="LAL" homeTeam="BOS" />);
    fireEvent.click(screen.getByRole("button", { name: /view play-by-play/i }));

    await waitFor(() => expect(screen.getByText(/Missed shot/)).toBeInTheDocument());
    expect(screen.queryByText(/show shot chart/i)).not.toBeInTheDocument();
  });

  it("offers and reveals a shot chart when coordinate data is present", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({
        boxscore: { teams: [{ team: { id: "24", abbreviation: "LAL" } }, { team: { id: "2", abbreviation: "BOS" } }] },
        plays: [
          {
            id: "1", period: { number: 1 }, clock: { displayValue: "10:00" },
            text: "Made shot", awayScore: "2", homeScore: "0",
            scoringPlay: true, team: { id: "24" }, coordinate: { x: 25, y: 40 },
          },
        ],
      }),
    } as Response);

    render(<PlayByPlayFeed espnGameId="401584793" awayTeam="LAL" homeTeam="BOS" />);
    fireEvent.click(screen.getByRole("button", { name: /view play-by-play/i }));

    const toggle = await screen.findByText(/show shot chart/i);
    fireEvent.click(toggle);
    expect(await screen.findByText(/LAL 1\/1/)).toBeInTheDocument();
  });
});
