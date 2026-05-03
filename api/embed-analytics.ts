import { rateWindow } from "./_lib/embedRateLimiter";

const ALLOWED_WIDGETS = new Set(["pulse", "ticker", "injury"]);
const BODY_LIMIT = 2048;

function parseReferrerHost(referrer: string | undefined): string | null {
  if (!referrer || referrer.length > 500) return null;
  try {
    const u = new URL(referrer);
    return u.hostname.slice(0, 253) || null;
  } catch {
    return null;
  }
}

export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? "anon";
  if (!rateWindow(`emb:${ip}`, 120, 60_000)) {
    return new Response(JSON.stringify({ error: "Too many events" }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": "60" },
    });
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > BODY_LIMIT) throw new Error("Too large");
    body = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), { status: 400 });
  }

  const rec = body as { widgetId?: string; referrer?: string };
  const widgetId = typeof rec.widgetId === "string" ? rec.widgetId.trim() : "";
  if (!ALLOWED_WIDGETS.has(widgetId)) {
    return new Response(JSON.stringify({ error: "Invalid widget id" }), { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ ok: true, stored: false, reason: "server_unconfigured" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const referrerHost =
    typeof rec.referrer === "string"
      ? parseReferrerHost(rec.referrer.slice(0, 500))
      : parseReferrerHost(req.headers.get("referer") ?? undefined);

  const insert = await fetch(`${supabaseUrl}/rest/v1/embed_analytics_events`, {
    method: "POST",
    headers: {
      apikey: svc,
      Authorization: `Bearer ${svc}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify([{ widget_id: widgetId, referrer_host: referrerHost }]),
  });

  if (!insert.ok) {
    const txt = await insert.text().catch(() => "");
    console.warn("[embed-analytics] Insert failed:", insert.status, txt);
    return new Response(JSON.stringify({ ok: true, stored: false }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true, stored: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
