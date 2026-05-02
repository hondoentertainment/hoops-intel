// POST /api/unsubscribe-digest  { email }
// Deactivates a digest_subscribers row via service-role PATCH.

export const config = { runtime: 'edge' };

function json(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') return json({}, 204);
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  let email = '';
  try {
    const b = await req.json();
    email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : '';
  } catch {
    return json({ error: 'Invalid body' }, 400);
  }
  if (!email || !isEmail(email)) return json({ error: 'Invalid email' }, 400);

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;
  if (!supabaseUrl || !serviceKey) return json({ error: 'Server misconfiguration' }, 500);

  const res = await fetch(
    `${supabaseUrl}/rest/v1/digest_subscribers?email=eq.${encodeURIComponent(email)}`,
    {
      method: 'PATCH',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ active: false }),
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('[unsubscribe-digest]', res.status, text);
    return json({ error: 'Unable to update subscription' }, 500);
  }

  return json({ ok: true }, 200);
}
