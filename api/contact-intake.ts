// POST /api/contact-intake  { kind, name?, email?, message }
// Guest Pulse pitches enqueue to Supabase when service creds exist; Resend notify is best-effort.

const RATE_WINDOW_MS = 60_000;
const MAX_SUBMISSIONS_PER_WINDOW = 12;

/** Best-effort per warm isolate; resets when the serverless instance recycles. */
function rateMap(): Map<string, number[]> {
  const g = globalThis as typeof globalThis & { __hiContactRate?: Map<string, number[]> };
  if (!g.__hiContactRate) g.__hiContactRate = new Map();
  return g.__hiContactRate;
}

function clientKey(req: Request): string {
  const xf = req.headers.get("x-forwarded-for") ?? "";
  const first = xf.split(",")[0]?.trim();
  if (first) return first;
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real;
  return "anon";
}

function allowRate(mapKey: string): boolean {
  const map = rateMap();
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const stamps = (map.get(mapKey) ?? []).filter((t) => t > windowStart);
  if (stamps.length >= MAX_SUBMISSIONS_PER_WINDOW) return false;
  stamps.push(now);
  map.set(mapKey, stamps);
  return true;
}

async function enqueueGuestPulse(opts: {
  name: string;
  email: string;
  message: string;
}): Promise<string | undefined> {
  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_KEY;
  if (!sbUrl || !sbKey) return undefined;

  try {
    const ins = await fetch(`${sbUrl}/rest/v1/guest_pulse_submissions`, {
      method: "POST",
      headers: {
        apikey: sbKey,
        Authorization: `Bearer ${sbKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify([
        {
          name: opts.name || null,
          email: opts.email || null,
          pitch: opts.message,
          status: "received",
        },
      ]),
    });
    if (!ins.ok) {
      const t = await ins.text().catch(() => "");
      console.warn("[contact-intake] Guest Pulse queue:", ins.status, t);
      return undefined;
    }
    try {
      const rows = (await ins.json()) as unknown;
      if (Array.isArray(rows) && rows.length > 0) {
        const id = rows[0] as { id?: unknown };
        if (typeof id.id === "string" && id.id.length > 0) return id.id;
      }
    } catch {
      /* ignore malformed body */
    }
  } catch (e) {
    console.warn("[contact-intake] Guest Pulse queue failed:", e);
  }
  return undefined;
}

export const config = { runtime: "nodejs" };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const rk = clientKey(req);
  if (!allowRate(rk)) {
    return new Response(JSON.stringify({ error: "Too many submissions. Try again in a minute." }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": "60" },
    });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOUND_EMAIL ?? "";
  const fromAddr = process.env.CONTACT_FORM_FROM_EMAIL ?? "Hoops Intel <onboarding@resend.dev>";
  let body: { kind?: string; name?: string; email?: string; message?: string };
  try {
    body = (await req.json()) as { kind?: string; name?: string; email?: string; message?: string };
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const kind = (body.kind ?? "general").slice(0, 64);
  const name = (body.name ?? "").trim().slice(0, 120);
  const email = (body.email ?? "").trim().slice(0, 320);
  const message = (body.message ?? "").trim().slice(0, 8000);

  if (message.length < 10) {
    return new Response(JSON.stringify({ error: "Please add more detail (10+ chars)." }), { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
  }

  let submissionId: string | undefined;
  if (kind === "guest-pulse-index") {
    submissionId = await enqueueGuestPulse({ name, email, message });
  }

  const canEmail = Boolean(resendKey && to);
  let emailSent = false;

  if (canEmail) {
    const subject = `[Hoops Intel/${kind}] ${name || email || "Inbound"}`;
    const html = `<p><strong>Kind:</strong> ${kind}</p>
<p><strong>Name:</strong> ${name || "—"}</p>
<p><strong>Email:</strong> ${email || "—"}</p>
<hr />
<pre style="white-space:pre-wrap;font-family:system-ui">${message.replace(/</g, "&lt;")}</pre>`;

    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddr,
        to: [to],
        reply_to: email || undefined,
        subject,
        html,
      }),
    });

    if (!resend.ok) {
      const txt = await resend.text().catch(() => "");
      console.error("[contact-intake] Resend", resend.status, txt);
      // Queue success still counts when guest-pulse was enqueued.
      if (!(kind === "guest-pulse-index" && submissionId)) {
        return new Response(JSON.stringify({ error: "Failed to send intake" }), { status: 502 });
      }
    } else {
      emailSent = true;
    }

    const adminNotify = process.env.ADMIN_NOTIFY_EMAIL?.trim();
    if (adminNotify && kind === "guest-pulse-index" && emailSent) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromAddr,
          to: [adminNotify],
          subject: `[Queue] New Guest Pulse pitch — ${name || email || "anonymous"}`,
          html: `<p>New pitch in <strong>guest_pulse_submissions</strong>. Review at <a href="https://hoopsintel.net/creator-queue">/creator-queue</a>.</p><p><strong>From:</strong> ${name || "—"} (${email || "no email"})</p><pre style="white-space:pre-wrap">${message.slice(0, 500).replace(/</g, "&lt;")}</pre>`,
        }),
      }).catch((e) => console.warn("[contact-intake] admin notify:", e));
    }
  }

  // Guest Pulse: succeed when the moderation queue has a row (email optional).
  if (kind === "guest-pulse-index") {
    if (submissionId) {
      return new Response(JSON.stringify({ ok: true, submissionId, emailSent }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (emailSent) {
      return new Response(JSON.stringify({ ok: true, emailSent: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(
      JSON.stringify({
        error: "Intake not configured — need Supabase service role and/or Resend inbox.",
      }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  // Non–guest-pulse kinds still require email delivery.
  if (!canEmail) {
    return new Response(JSON.stringify({ error: "Intake inbox not configured yet." }), { status: 503 });
  }
  if (!emailSent) {
    return new Response(JSON.stringify({ error: "Failed to send intake" }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
