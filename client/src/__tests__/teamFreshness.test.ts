import { describe, expect, it } from "vitest";
import { displayDateToIso } from "../lib/dataTrust";
import { gamePreviews, pulseEdition, pulseIndex } from "../lib/pulseData";
import { getTeamIntelByAbbr, teamDeskUpdatedIso } from "../lib/teamIntel";

describe("team content freshness", () => {
  it("stamps a team on today's slate with the edition date, not a live clock", () => {
    const editionIso = displayDateToIso(pulseEdition.date);
    expect(editionIso).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const deskTeam = gamePreviews[0]?.homeTeam ?? pulseIndex[0]?.team;
    expect(deskTeam).toBeTruthy();
    expect(teamDeskUpdatedIso(deskTeam!)).toBe(editionIso);

    const intel = getTeamIntelByAbbr(deskTeam!);
    expect(intel?.updatedAt).toBe(editionIso);
    expect(intel?.updatedAt).not.toMatch(/T\d{2}:/);
    expect(teamDeskUpdatedIso("not-a-team")).toBeNull();
  });

  it("does not give every franchise the edition date", () => {
    const editionIso = displayDateToIso(pulseEdition.date);
    const onDesk = new Set<string>([
      ...pulseIndex.map((row) => row.team),
      ...gamePreviews.flatMap((game) => [game.homeTeam, game.awayTeam]),
    ]);
    const quiet = ["ATL", "BOS", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS", "BRK"]
      .filter((code) => !onDesk.has(code))
      .map((code) => teamDeskUpdatedIso(code))
      .filter((iso): iso is string => Boolean(iso));
    expect(quiet.length).toBeGreaterThan(0);
    expect(quiet.some((iso) => iso !== editionIso)).toBe(true);
  });
});
