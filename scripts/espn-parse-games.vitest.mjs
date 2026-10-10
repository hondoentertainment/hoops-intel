/**
 * Guards scripts/lib ESPN scoreboard normalization — separate from UI parseGame.
 */

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { describe, expect, it } from "vitest";
import { parseGames } from "./lib/espn-cache.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE = join(__dirname, "../client/src/fixtures/espn-scoreboard-game-post.json");

describe("parseGames (script pipeline)", () => {
  it("skips events without competition data and maps finals vs scheduled", () => {
    const data = JSON.parse(readFileSync(FIXTURE, "utf8"));
    const games = parseGames(data);
    expect(games).toHaveLength(2);
    expect(games[0].status).toBe("final");
    expect(games[0].homeTeam).toBe("MIA");
    expect(games[0].awayScore).toBe(102);
    expect(games[1].status).toBe("scheduled");
    expect(games[1].homeScore).toBeNull();
  });

  it("remaps ESPN WSH to WAS before the edition prompt sees it", () => {
    const games = parseGames({
      events: [
        {
          competitions: [
            {
              competitors: [
                { homeAway: "home", team: { abbreviation: "WSH", displayName: "Washington Wizards" }, records: [{ summary: "0-0" }], score: "110" },
                { homeAway: "away", team: { abbreviation: "DET", displayName: "Detroit Pistons" }, records: [{ summary: "0-0" }], score: "104" },
              ],
              status: { type: { completed: true, shortDetail: "Final" } },
              venue: { fullName: "Capital One Arena" },
              broadcasts: [],
              leaders: [{ name: "points", leaders: [{ athlete: { displayName: "Alex Sarr" }, team: { abbreviation: "WSH" }, displayValue: "22" }] }],
            },
          ],
        },
      ],
    });
    expect(games[0].homeTeam).toBe("WAS");
    expect(games[0].awayTeam).toBe("DET");
    expect(games[0].leaders[0].team).toBe("WAS");
  });
});
