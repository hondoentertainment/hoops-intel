import { describe, expect, it } from "vitest";
import {
  CAMP_OPEN_ISO,
  dateWindow,
  isoFromEspnDate,
  normalizeCampGame,
  isCanonicalPair,
} from "./fetch-camp-schedule.mjs";

describe("fetch-camp-schedule", () => {
  it("builds an Oct 3–10 ESPN window and canonicalizes aliases", () => {
    const dates = dateWindow(CAMP_OPEN_ISO, 8);
    expect(dates[0]).toBe("20261003");
    expect(dates[dates.length - 1]).toBe("20261010");
    expect(isoFromEspnDate("20261003")).toBe("2026-10-03");

    const game = normalizeCampGame(
      { awayTeam: "NY", homeTeam: "UTAH", time: "10/5 - 7:00 PM EDT", tv: "Local", venue: "Arena" },
      "2026-10-05",
    );
    expect(game).toMatchObject({ away: "NYK", home: "UTA", tv: "" });
    expect(isCanonicalPair(game)).toBe(true);
    expect(isCanonicalPair({ ...game, home: "SA" })).toBe(false);
  });
});
