import { getAllGameCenterGames, getGameCenterById } from "../client/src/lib/gameCenter";

export const config = { runtime: "nodejs" };

function json(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=45, stale-while-revalidate=180",
      ...(init.headers ?? {}),
    },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const url = new URL(req.url);
    const gameId = url.searchParams.get("gameId") || url.searchParams.get("id");
    if (!gameId) {
      return json({
        data: getAllGameCenterGames(),
        meta: { generatedAt: new Date().toISOString(), contractVersion: 1, fallbackUsed: true },
      });
    }

    const game = getGameCenterById(gameId);
    if (!game) {
      return json({ error: "game_not_found", gameId }, { status: 404 });
    }
    return json({ data: game, meta: game.meta });
  } catch (err) {
    console.warn("[game-center]", err);
    return json({ error: "game_center_unavailable", unavailable: true }, { status: 503 });
  }
}
