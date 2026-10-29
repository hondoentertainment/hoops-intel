import { describe, expect, it } from "vitest";
import { displayDateToIso } from "../lib/dataTrust";
import { gamePreviews, gameResults, injuryUpdates, pulseEdition, pulseIndex } from "../lib/pulseData";
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

  it("stamps desk teams with the edition and leaves an older stamp off the desk", () => {
    const editionIso = displayDateToIso(pulseEdition.date);
    expect(editionIso).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const onDesk = new Set<string>([
      ...pulseIndex.map((row) => row.team),
      ...injuryUpdates.map((row) => row.team),
      ...gameResults.flatMap((game) => [game.homeTeam, game.awayTeam]),
      ...gamePreviews.flatMap((game) => [game.homeTeam, game.awayTeam]),
    ]);
    expect(onDesk.size).toBeGreaterThan(0);
    for (const code of onDesk) {
      expect(teamDeskUpdatedIso(code)).toBe(editionIso);
    }
    // A night that names every franchise in the archive or on the desk can
    // legitimately share one date. An older stamp still has to be a team
    // the desk did not touch.
    const franchises = ["ATL", "BOS", "CHA", "CHI", "CLE", "DAL", "DEN", "DET", "GSW", "HOU", "IND", "LAC", "LAL", "MEM", "MIA", "MIL", "MIN", "NOP", "NYK", "OKC", "ORL", "PHI", "PHX", "POR", "SAC", "SAS", "TOR", "UTA", "WAS", "BRK"];
    const older = franchises.filter((code) => {
      const iso = teamDeskUpdatedIso(code);
      return Boolean(iso) && iso !== editionIso;
    });
    for (const code of older) {
      expect(onDesk.has(code)).toBe(false);
    }
  });
});
