import { beforeEach, describe, expect, it } from "vitest";
import {
  computeBeatTheDesk,
  deskPickForGame,
  gameIdForPreview,
  readUserPicksForEdition,
} from "../lib/beatTheDesk";

describe("beatTheDesk", () => {
  const editionDate = "2026-05-21";

  beforeEach(() => {
    localStorage.clear();
  });

  it("parses desk pick from editorial prediction copy", () => {
    expect(
      deskPickForGame({
        homeTeam: "NYK",
        awayTeam: "CLE",
        prediction: "NYK wins 109-104 — Brunson scores 27.",
      }),
    ).toBe("NYK");
  });

  it("builds stable game ids from teams and edition date", () => {
    expect(
      gameIdForPreview({ homeTeam: "NYK", awayTeam: "CLE" }, editionDate),
    ).toBe("CLE-NYK-20260521");
  });

  it("compares user picks against desk and final results", () => {
    localStorage.setItem(
      `hoops-intel-picks-${editionDate}`,
      JSON.stringify({ "CLE-NYK-20260521": "NYK" }),
    );

    const summary = computeBeatTheDesk(
      [
        {
          homeTeam: "NYK",
          awayTeam: "CLE",
          prediction: "NYK wins 109-104",
        },
      ],
      editionDate,
      [
        {
          gameId: "CLE-NYK-20260521",
          homeTeam: "NYK",
          awayTeam: "CLE",
          homeScore: 109,
          awayScore: 104,
          status: "final",
        },
      ],
    );

    expect(readUserPicksForEdition(editionDate)["CLE-NYK-20260521"]).toBe("NYK");
    expect(summary.picksCompared).toBe(1);
    expect(summary.agreeCount).toBe(1);
    expect(summary.userWins).toBe(1);
    expect(summary.deskWins).toBe(1);
    expect(summary.userBeatDesk).toBe(0);
    expect(summary.deskBeatUser).toBe(0);
  });

  it("scores edge when user beats desk on a split pick", () => {
    localStorage.setItem(
      `hoops-intel-picks-${editionDate}`,
      JSON.stringify({ "CLE-NYK-20260521": "CLE" }),
    );

    const summary = computeBeatTheDesk(
      [
        {
          homeTeam: "NYK",
          awayTeam: "CLE",
          prediction: "NYK wins 109-104",
        },
      ],
      editionDate,
      [
        {
          homeTeam: "NYK",
          awayTeam: "CLE",
          homeScore: 109,
          awayScore: 104,
          status: "final",
        },
      ],
    );

    expect(summary.userLosses).toBe(1);
    expect(summary.deskWins).toBe(1);
    expect(summary.deskBeatUser).toBe(1);
    expect(summary.userBeatDesk).toBe(0);
  });
});
