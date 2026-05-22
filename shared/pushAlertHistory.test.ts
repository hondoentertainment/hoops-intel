import { describe, expect, it } from "vitest";
import {
  buildPushHistoryTeamFilter,
  normalizeTeamAbbrs,
  parseTeamFilterFromSearch,
} from "./pushAlertHistory";

describe("push history team filter", () => {
  it("normalizes aliases", () => {
    expect(normalizeTeamAbbrs(["ny", "GS", "invalid", "cle"])).toEqual(["NYK", "GSW", "CLE"]);
  });

  it("parses teams query param", () => {
    expect(parseTeamFilterFromSearch("?teams=NYK,CLE")).toEqual(["NYK", "CLE"]);
    expect(parseTeamFilterFromSearch("?team=ny")).toEqual(["NYK"]);
  });

  it("builds PostgREST or filter", () => {
    expect(buildPushHistoryTeamFilter(["NYK", "CLE"])).toBe(
      'or=(team_abbr.is.null,team_abbr.in.("NYK","CLE"))',
    );
    expect(buildPushHistoryTeamFilter([])).toBe("");
  });
});
