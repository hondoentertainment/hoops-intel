// api/create-portal-session.ts
// Opens Stripe Customer Portal for the signed-in user (manage plan, cancel, invoices).
// Requires STRIPE_SECRET_KEY, Supabase service role, and an existing subscriptions row
// with stripe_customer_id (written by checkout / webhooks).

export const config = { runtime: 'nodejs' };

async function supabaseUserFromToken(token: string): Promise<{ id: string; email: string } | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const res = await fetch(`${url}/auth/v1/user`, {
    headers: { Authorization: `Bearer ${token}`, apikey: key },
  });
  if (!res.ok) return null;
  return res.json();
}

async function fetchStripeCustomerId(userId: string): Promise<string | null> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) return null;
  const res = await fetch(
    `${url}/rest/v1/subscriptions?user_id=eq.${encodeURIComponent(userId)}&select=stripe_customer_id&limit=1`,
    {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
    },
  );
  if (!res.ok) return null;
  const rows = (await res.json()) as { stripe_customer_id?: string }[];
  const id = rows[0]?.stripe_customer_id;
  return typeof id === 'string' && id.startsWith('cus_') ? id : null;
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return new Response(
      JSON.stringify({
        error: 'Stripe billing portal is not configured for this deployment.',
        code: 'stripe_not_configured',
        expectedEnv: ['STRIPE_SECRET_KEY'],
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const authHeader = req.headers.get('authorization') ?? '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return new Response('Not authenticated', { status: 401 });

  const user = await supabaseUserFromToken(token);
  if (!user) return new Response('Invalid token', { status: 401 });

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) {
    return new Response(
      JSON.stringify({
        error: 'Subscription lookup is not configured on the server.',
        code: 'supabase_misconfigured',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const customerId = await fetchStripeCustomerId(user.id);
  if (!customerId) {
    return new Response(
      JSON.stringify({
        error: 'No Stripe customer on file yet. Subscribe from Hoops Intel Pro first.',
        code: 'no_stripe_customer',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const baseUrl = process.env.APP_BASE_URL ?? 'https://hoopsintel.net';
  const params = new URLSearchParams();
  params.set('customer', customerId);
  params.set('return_url', `${baseUrl}/account`);

  const portalRes = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!portalRes.ok) {
    const text = await portalRes.text().catch(() => '');
    return new Response(`Stripe portal error: ${text}`, { status: 502 });
  }

  const session = (await portalRes.json()) as { url?: string };
  if (!session.url) {
    return new Response('Stripe returned no portal URL', { status: 502 });
  }

  return new Response(JSON.stringify({ url: session.url }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
