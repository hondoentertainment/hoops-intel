// GET /api/guest-pulse-queue — list moderation queue rows (Bearer GUEST_PULSE_ADMIN_SECRET).
// PATCH /api/guest-pulse-queue — { id, status?, notes? }, same Bearer.

export const config = { runtime: "nodejs" };

const STATUSES = new Set(["received", "reviewing", "accepted", "declined"]);

function auth(req: Request): boolean {
  const want = process.env.GUEST_PULSE_ADMIN_SECRET ?? "";
  if (want.length < 16) return false;
  const h = req.headers.get("authorization") ?? "";
  const m = /^Bearer\s+(.+)$/i.exec(h.trim());
  return Boolean(m?.[1] && m[1] === want);
}

export default async function handler(req: Request): Promise<Response> {
  if (!auth(req)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const svc = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !svc) {
    return new Response(JSON.stringify({ error: "Supabase not configured" }), { status: 503 });
  }

  if (req.method === "GET") {
    const qs = new URL(req.url).searchParams;
    const status = qs.get("status");
    let filter =
      "select=id,created_at,name,email,status,notes,pitch&order=created_at.desc&limit=100";
    if (status && STATUSES.has(status)) {
      filter += `&status=eq.${encodeURIComponent(status)}`;
    }
    const res = await fetch(`${supabaseUrl}/rest/v1/guest_pulse_submissions?${filter}`, {
      headers: { apikey: svc, Authorization: `Bearer ${svc}` },
    });
    if (!res.ok) {
      const t = await res.text().catch(() => "");
      return new Response(JSON.stringify({ error: t || "fetch_failed" }), { status: 502 });
    }
    const rows = await res.json();
    return new Response(JSON.stringify({ rows }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  if (req.method === "PATCH") {
    let body: { id?: string; status?: string; notes?: string };
    try {
      body = (await req.json()) as { id?: string; status?: string; notes?: string };
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
    }
    const id = typeof body.id === "string" ? body.id.trim() : "";
    if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });
    const patch: Record<string, string> = {};
    if (body.status !== undefined) {
      if (!STATUSES.has(body.status)) return new Response(JSON.stringify({ error: "Invalid status" }), { status: 400 });
      patch.status = body.status;
    }
    if (body.notes !== undefined) patch.notes = String(body.notes).slice(0, 2000);

    if (Object.keys(patch).length === 0) {
      return new Response(JSON.stringify({ error: "Nothing to patch" }), { status: 400 });
    }

    const res = await fetch(
      `${supabaseUrl}/rest/v1/guest_pulse_submissions?id=eq.${encodeURIComponent(id)}`,
      {
        method: "PATCH",
        headers: {
          apikey: svc,
          Authorization: `Bearer ${svc}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(patch),
      },
    );

    if (!res.ok) {
      const t = await res.text().catch(() => "");
      return new Response(JSON.stringify({ error: t }), { status: 502 });
    }
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
}
