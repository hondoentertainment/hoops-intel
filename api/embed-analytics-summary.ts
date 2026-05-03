export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ counts: {}, days: 8, unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
    });
  }

  const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/embed_agg_last_days`, {
    method: "POST",
    headers: {
      apikey: svc,
      Authorization: `Bearer ${svc}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({ day_count: 8 }),
  });

  if (!rpc.ok) {
    const txt = await rpc.text().catch(() => "");
    console.warn("[embed-analytics-summary]", rpc.status, txt);
    return new Response(JSON.stringify({ counts: {}, days: 8, error: "rpc_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  const data: unknown = await rpc.json();
  let counts: Record<string, unknown> = {};
  if (Array.isArray(data) && data.length > 0) {
    const row = data[0] as Record<string, unknown>;
    const inner = row.embed_agg_last_days;
    if (inner && typeof inner === "object" && !Array.isArray(inner)) {
      counts = inner as Record<string, unknown>;
    }
  }

  return new Response(JSON.stringify({ counts, days: 8 }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=120",
    },
  });
}
