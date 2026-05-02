// POST /api/contact-intake  { kind, name?, email?, message }
// Forwards submissions (e.g. Guest Pulse pitches) via Resend when CONTACT_INBOUND_EMAIL + RESEND_API_KEY exist.

export const config = { runtime: 'nodejs' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOUND_EMAIL ?? "";
  const fromAddr = process.env.CONTACT_FORM_FROM_EMAIL ?? "Hoops Intel <onboarding@resend.dev>";
  let body: { kind?: string; name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const kind = (body.kind ?? 'general').slice(0, 64);
  const name = (body.name ?? '').trim().slice(0, 120);
  const email = (body.email ?? '').trim().slice(0, 320);
  const message = (body.message ?? '').trim().slice(0, 8000);

  if (message.length < 10) {
    return new Response(JSON.stringify({ error: 'Please add more detail (10+ chars).' }), { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
  }

  if (!key || !to) {
    return new Response(JSON.stringify({ error: 'Intake inbox not configured yet.' }), { status: 503 });
  }

  const subject = `[Hoops Intel/${kind}] ${name || email || 'Inbound'}`;
  const html = `<p><strong>Kind:</strong> ${kind}</p>
<p><strong>Name:</strong> ${name || '—'}</p>
<p><strong>Email:</strong> ${email || '—'}</p>
<hr />
<pre style="white-space:pre-wrap;font-family:system-ui">${message.replace(/</g, '&lt;')}</pre>`;

  const resend = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: fromAddr,
      to: [to],
      reply_to: email || undefined,
      subject,
      html,
    }),
  });

  if (!resend.ok) {
    const txt = await resend.text().catch(() => '');
    console.error('[contact-intake] Resend', resend.status, txt);
    return new Response(JSON.stringify({ error: 'Failed to send intake' }), { status: 502 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
