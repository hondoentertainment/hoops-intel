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
});
