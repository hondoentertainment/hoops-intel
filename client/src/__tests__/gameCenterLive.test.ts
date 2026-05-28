import { describe, expect, it } from "vitest";
import {
  gameCenterLineMovement,
  gameCenterShareMeta,
  matchLiveScoreboardGame,
  mergeLiveIntoGameCenter,
  getAllGameCenterGames,
} from "../lib/gameCenter";
import type { LiveGame } from "../lib/espnApi";

describe("gameCenter live + market helpers", () => {
  it("matches live scoreboard rows regardless of home/away order", () => {
    const live: LiveGame = {
      id: "401",
      status: "in",
      statusDetail: "Q3 4:12",
      clock: "4:12",
      period: 3,
      homeTeam: "NYK",
      homeScore: 88,
      homeRecord: "1-0",
      awayTeam: "CLE",
      awayScore: 82,
      awayRecord: "0-1",
      venue: "MSG",
      tv: "ESPN",
    };
    expect(matchLiveScoreboardGame("CLE", "NYK", [live])?.id).toBe("401");
  });

  it("overlays live scores onto a cached game center payload", () => {
    const base = getAllGameCenterGames()[0];
    expect(base).toBeTruthy();
    const merged = mergeLiveIntoGameCenter(base!, {
      id: "402",
      status: "in",
      statusDetail: "Q1 8:00",
      clock: "8:00",
      period: 1,
      homeTeam: base!.home.abbr,
      homeScore: 10,
      homeRecord: "0-0",
      awayTeam: base!.away.abbr,
      awayScore: 12,
      awayRecord: "0-0",
      venue: "Test",
      tv: "ESPN",
    });
    expect(merged.status).toBe("live");
    expect(merged.away.score).toBe(12);
    expect(merged.home.score).toBe(10);
  });

  it("builds share metadata with game-specific OG URL", () => {
    const base = getAllGameCenterGames()[0];
    expect(base).toBeTruthy();
    const share = gameCenterShareMeta(base!);
    expect(share.url).toContain("/game/");
    expect(share.ogImage).toContain("type=game");
  });

  it("derives line movement badges from synced rows", () => {
    const view = gameCenterLineMovement("CLE", "NYK", { spread: "NYK -5.5", openingSpread: "NYK -4.5" });
    expect(view.moveBadge).toMatch(/Moved 1 pt/);
  });
});
