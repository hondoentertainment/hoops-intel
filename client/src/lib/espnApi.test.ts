import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { parseGame } from "./espnApi";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadFixture(name: string) {
  const raw = readFileSync(join(__dirname, "../fixtures", name), "utf8");
  return JSON.parse(raw) as { events: unknown[] };
}

describe("parseGame", () => {
  it("maps a completed game to post with scores and teams", () => {
    const { events } = loadFixture("espn-scoreboard-game-post.json");
    const g = parseGame(events[0] as any);
    expect(g.id).toBe("401585601");
    expect(g.status).toBe("post");
    expect(g.homeTeam).toBe("MIA");
    expect(g.awayTeam).toBe("BOS");
    expect(g.homeScore).toBe(98);
    expect(g.awayScore).toBe(102);
    expect(g.venue).toBe("Kaseya Center");
    expect(g.tv).toContain("ESPN");
  });

  it("maps a pregame row to pre with scores from strings", () => {
    const { events } = loadFixture("espn-scoreboard-game-post.json");
    const g = parseGame(events[1] as any);
    expect(g.status).toBe("pre");
    expect(g.homeTeam).toBe("DAL");
    expect(g.awayTeam).toBe("LAL");
    expect(g.homeScore).toBeNull();
    expect(g.awayScore).toBeNull();
    expect(Number.isFinite(g.period)).toBe(true);
  });

  it("treats malformed events defensively", () => {
    const { events } = loadFixture("espn-scoreboard-game-post.json");
    const emptyComp = parseGame(events[2] as any);
    expect(emptyComp.id).toBe("401585699");
    expect(emptyComp.homeTeam).toBe("");
    expect(emptyComp.status).toBe("in");

    const bare = parseGame({} as any);
    expect(bare.homeTeam).toBe("");
    expect(bare.homeScore).toBeNull();
    expect(bare.awayScore).toBeNull();
  });
});
