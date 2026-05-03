import { parseEmbedAnalyticsDays } from "./_lib/embedAnalyticsDays";

export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const days = parseEmbedAnalyticsDays(req);

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ series: [], days, unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
    });
  }

  const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/embed_loads_timeseries`, {
    method: "POST",
    headers: {
      apikey: svc,
      Authorization: `Bearer ${svc}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify({ p_day_count: days }),
  });

  if (!rpc.ok) {
    const txt = await rpc.text().catch(() => "");
    console.warn("[embed-analytics-timeseries]", rpc.status, txt);
    return new Response(JSON.stringify({ series: [], days, error: "rpc_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  const data: unknown = await rpc.json();
  let series: unknown[] = [];
  if (Array.isArray(data) && data.length > 0) {
    const row = data[0] as Record<string, unknown>;
    const inner = row.embed_loads_timeseries;
    if (Array.isArray(inner)) {
      series = inner;
    }
  }

  return new Response(JSON.stringify({ series, days }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=120",
    },
  });
}
