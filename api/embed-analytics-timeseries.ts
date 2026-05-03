export const config = { runtime: "nodejs" };

/** GET /api/embed-analytics-timeseries — daily bucket counts per widget for charts. */
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET" && req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  let days = 14;
  try {
    if (req.method === "GET") {
      const u = new URL(req.url);
      const d = Number(u.searchParams.get("days"));
      if (Number.isFinite(d) && d >= 1 && d <= 90) days = Math.floor(d);
    } else {
      const j = (await req.json().catch(() => ({}))) as { day_count?: number };
      if (Number.isFinite(j.day_count) && j.day_count! >= 1 && j.day_count! <= 90) days = Math.floor(j.day_count!);
    }
  } catch {
    /* default */
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ series: [], days, unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
    });
  }

  const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/embed_agg_timeseries`, {
    method: "POST",
    headers: {
      apikey: svc,
      Authorization: `Bearer ${svc}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({ day_count: days }),
  });

  if (!rpc.ok) {
    const txt = await rpc.text().catch(() => "");
    console.warn("[embed-analytics-timeseries]", rpc.status, txt.slice(0, 300));
    return new Response(JSON.stringify({ series: [], days, error: "rpc_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const raw = await rpc.json();
  let series: unknown[] = [];
  if (Array.isArray(raw) && raw.length > 0) {
    const cell = raw[0] as Record<string, unknown>;
    const inner = cell.embed_agg_timeseries;
    if (Array.isArray(inner)) series = inner as unknown[];
    else if (inner && typeof inner === "object" && !Array.isArray(inner))
      series = Object.values(inner);
  }

  return new Response(JSON.stringify({ series, days }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=120",
    },
  });
}
