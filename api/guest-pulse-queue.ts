// GET /api/guest-pulse-queue — list moderation queue rows (Bearer GUEST_PULSE_ADMIN_SECRET).
// PATCH /api/guest-pulse-queue — { id, status?, notes?, published_pitch? }, same Bearer.

import { sendResendEmail } from "./_lib/resendSend";

export const config = { runtime: "nodejs" };

const STATUSES = new Set(["received", "reviewing", "accepted", "declined"]);

function auth(req: Request): boolean {
  const want = process.env.GUEST_PULSE_ADMIN_SECRET ?? "";
  if (want.length < 16) return false;
  const h = req.headers.get("authorization") ?? "";
  const m = /^Bearer\s+(.+)$/i.exec(h.trim());
  return Boolean(m?.[1] && m[1] === want);
}

async function fetchRow(
  supabaseUrl: string,
  svc: string,
  id: string,
): Promise<{ email?: string | null; name?: string | null; status?: string; pitch?: string } | null> {
  const res = await fetch(
    `${supabaseUrl}/rest/v1/guest_pulse_submissions?id=eq.${encodeURIComponent(id)}&select=id,email,name,status,pitch`,
    { headers: { apikey: svc, Authorization: `Bearer ${svc}` } },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as unknown[];
  return Array.isArray(rows) && rows[0] && typeof rows[0] === "object"
    ? (rows[0] as { email?: string | null; name?: string | null; status?: string; pitch?: string })
    : null;
}

async function notifySubmitterStatus(
  row: { email?: string | null; name?: string | null; status?: string },
  newStatus: string,
) {
  const email = row.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
  const name = row.name?.trim() || "there";
  const subject =
    newStatus === "accepted"
      ? "Your Guest Pulse pitch was accepted — Hoops Intel"
      : newStatus === "declined"
        ? "Update on your Guest Pulse pitch — Hoops Intel"
        : "Your Guest Pulse pitch is under review — Hoops Intel";
  const body =
    newStatus === "accepted"
      ? `<p>Hi ${name},</p><p>Thanks for pitching the Guest Pulse Index. We accepted your submission and will follow up if we need anything else.</p><p>— Hoops Intel editors</p>`
      : newStatus === "declined"
        ? `<p>Hi ${name},</p><p>Thanks for your Guest Pulse pitch. We are not moving forward with this edition, but we appreciate you reaching out.</p><p>— Hoops Intel editors</p>`
        : `<p>Hi ${name},</p><p>Your pitch is now marked <strong>${newStatus}</strong> in our queue. We will reply if we need more detail.</p><p>— Hoops Intel editors</p>`;
  await sendResendEmail({ to: email, subject, html: body });
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
      "select=id,created_at,name,email,status,notes,pitch,published_pitch&order=created_at.desc&limit=100";
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
    let body: { id?: string; status?: string; notes?: string; published_pitch?: string | null };
    try {
      body = (await req.json()) as {
        id?: string;
        status?: string;
        notes?: string;
        published_pitch?: string | null;
      };
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
    }
    const id = typeof body.id === "string" ? body.id.trim() : "";
    if (!id) return new Response(JSON.stringify({ error: "Missing id" }), { status: 400 });

    const before = await fetchRow(supabaseUrl, svc, id);

    const patch: Record<string, string | null> = {};
    if (body.status !== undefined) {
      if (!STATUSES.has(body.status)) {
        return new Response(JSON.stringify({ error: "Invalid status" }), { status: 400 });
      }
      patch.status = body.status;
    }
    if (body.notes !== undefined) patch.notes = String(body.notes).slice(0, 2000);
    if (body.published_pitch !== undefined) {
      if (body.published_pitch === null) {
        patch.published_pitch = null;
      } else {
        const trimmed = String(body.published_pitch).trim().slice(0, 8000);
        // Empty string clears override so public feed falls back to original pitch.
        patch.published_pitch = trimmed.length ? trimmed : null;
      }
    }

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

    if (before && patch.status && patch.status !== before.status) {
      await notifySubmitterStatus(before, patch.status);
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
}
