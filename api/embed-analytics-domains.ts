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
    return new Response(JSON.stringify({ hosts: [], days, unavailable: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
    });
  }

  const rpc = await fetch(`${supabaseUrl}/rest/v1/rpc/embed_agg_by_referrer`, {
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
    return new Response(JSON.stringify({ hosts: [], days, error: "rpc_failed" }), {
      status: 200,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
    });
  }

  const raw = await rpc.json();
  let hosts: { host: string; loads: number }[] = [];
  let inner: unknown = raw;
  if (Array.isArray(raw) && raw.length > 0) {
    const cell = raw[0] as Record<string, unknown>;
    inner = cell.embed_agg_by_referrer ?? cell;
  }
  if (Array.isArray(inner)) {
    hosts = inner
      .filter((h) => h && typeof h === "object")
      .map((h) => {
        const o = h as { host?: string; loads?: number };
        return { host: String(o.host ?? ""), loads: Number(o.loads) || 0 };
      });
  }

  return new Response(JSON.stringify({ hosts, days }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
  });
}
