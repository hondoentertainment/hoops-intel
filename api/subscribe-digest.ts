// api/subscribe-digest.ts
// Vercel API Route — subscribes an email address to the Hoops Intel daily digest.
//
// POST /api/subscribe-digest  { "email": "user@example.com" }
//
// Inserts a row into the `digest_subscribers` Supabase table.
// Uses the service-role key to bypass RLS (public signup without auth).
//
// Required env vars:
//   SUPABASE_URL         — e.g. https://xyz.supabase.co
//   SUPABASE_SERVICE_KEY — service-role key

export const config = { runtime: 'edge' };

// Simple email validation — must contain exactly one @ with non-empty local and domain parts,
// and the domain must have at least one dot.
function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length > 320) return false; // RFC 5321 max length
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(trimmed);
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
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

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return jsonResponse({}, 204);
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  // Parse request body
  let body: { email?: string };
  try {
    body = (await req.json()) as { email?: string };
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  const email = body.email?.trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return jsonResponse({ error: 'Invalid email address' }, 400);
  }

  // Validate env vars
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error('[subscribe-digest] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
    return jsonResponse({ error: 'Server misconfiguration' }, 500);
  }

  // Upsert into digest_subscribers — if the email already exists and is inactive,
  // reactivate it. If it already exists and is active, this is a no-op.
  // Using PostgREST's upsert via the Prefer header + on_conflict.
  const res = await fetch(
    `${supabaseUrl}/rest/v1/digest_subscribers`,
    {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'resolution=merge-duplicates',
      },
      body: JSON.stringify({
        email,
        active: true,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error(`[subscribe-digest] Supabase error ${res.status}: ${text}`);

    // 409 / 23505 = unique constraint violation — already subscribed
    if (res.status === 409 || text.includes('23505')) {
      return jsonResponse({ ok: true, message: 'Already subscribed' }, 200);
    }

    return jsonResponse({ error: 'Failed to subscribe' }, 500);
  }

  return jsonResponse({ ok: true, message: 'Subscribed to Hoops Intel Daily Digest' }, 200);
}
