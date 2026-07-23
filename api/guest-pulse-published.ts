// GET /api/guest-pulse-published — public feed of accepted Guest Pulse pitches (no email/notes).

export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ posts: [], unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  const qs =
    "select=id,created_at,name,pitch,published_pitch&status=eq.accepted&order=created_at.desc&limit=20";
  const res = await fetch(`${supabaseUrl}/rest/v1/guest_pulse_submissions?${qs}`, {
    headers: { apikey: svc, Authorization: `Bearer ${svc}` },
  });

  if (!res.ok) {
    const t = await res.text().catch(() => "");
    console.warn("[guest-pulse-published]", res.status, t.slice(0, 200));
    return new Response(JSON.stringify({ posts: [], error: "fetch_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=30" },
    });
  }

  const rows = (await res.json()) as unknown;
  const posts = Array.isArray(rows)
    ? rows
        .map((r) => {
          const row = r as Record<string, unknown>;
          const original = typeof row.pitch === "string" ? row.pitch : "";
          const override =
            typeof row.published_pitch === "string" && row.published_pitch.trim()
              ? row.published_pitch.trim()
              : "";
          return {
            id: typeof row.id === "string" ? row.id : "",
            created_at: typeof row.created_at === "string" ? row.created_at : "",
            name: typeof row.name === "string" && row.name.trim() ? row.name.trim() : "Guest",
            pitch: override || original,
          };
        })
        .filter((p) => p.id && p.pitch)
    : [];

  return new Response(JSON.stringify({ posts }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
  });
}
