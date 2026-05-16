import { getPlayerIntelBySlug, topPlayerIntelSlugs } from "../client/src/lib/playerIntel.js";

export const config = { runtime: "nodejs" };

function json(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=120, stale-while-revalidate=300",
      ...(init.headers ?? {}),
    },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const url = new URL(req.url, "https://hoopsintel.net");
    const slug = url.searchParams.get("slug");
    if (!slug) {
      return json({
        data: { slugs: topPlayerIntelSlugs() },
        meta: { generatedAt: new Date().toISOString(), contractVersion: 1, fallbackUsed: true },
      });
    }

    const profile = getPlayerIntelBySlug(slug);
    if (!profile) {
      return json({ error: "player_not_found", slug }, { status: 404 });
    }
    return json({
      data: profile,
      meta: { generatedAt: profile.updatedAt, contractVersion: 1, fallbackUsed: true },
    });
  } catch (err) {
    console.warn("[player-intel]", err);
    return json({ error: "player_intel_unavailable", unavailable: true }, { status: 503 });
  }
}
