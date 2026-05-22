export const config = { runtime: "edge" };

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
    const abbr = url.searchParams.get("abbr");
    if (!abbr) {
      return json({ error: "missing_abbr" }, { status: 400 });
    }

    const { getTeamIntelByAbbr } = await import("../client/src/lib/teamIntel.js");
    const profile = getTeamIntelByAbbr(abbr);
    if (!profile) {
      return json({ error: "team_not_found", abbr }, { status: 404 });
    }
    return json({
      data: profile,
      meta: { generatedAt: profile.updatedAt, contractVersion: 1, fallbackUsed: true },
    });
  } catch (err) {
    console.warn("[team-intel]", err);
    return json({ error: "team_intel_unavailable", unavailable: true }, { status: 503 });
  }
}
