// api/create-checkout.ts
// Vercel API Route — creates a Stripe Checkout session for Hoops Intel Pro.
//
// Requires the client to pass a Supabase access token in the Authorization
// header so we can look up the user id and attach it to the subscription
// metadata. The returned URL is redirected to on the client.
//
// Until STRIPE_SECRET_KEY and the Pro price IDs are set this handler returns
// 503 so the Pro page can show a "coming soon" state.

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

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const {
    STRIPE_SECRET_KEY,
    STRIPE_PRICE_MONTHLY,
    STRIPE_PRICE_ANNUAL,
    APP_BASE_URL,
  } = process.env;

  if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_MONTHLY || !STRIPE_PRICE_ANNUAL) {
    return new Response('Stripe not configured', { status: 503 });
  }

  let body: { plan?: 'monthly' | 'annual' };
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid body', { status: 400 });
  }
  const plan = body.plan ?? 'monthly';

  const authHeader = req.headers.get('authorization') ?? '';
  const token = authHeader.replace(/^Bearer\s+/i, '');
  if (!token) return new Response('Not authenticated', { status: 401 });

  const user = await supabaseUserFromToken(token);
  if (!user) return new Response('Invalid token', { status: 401 });

  const baseUrl = APP_BASE_URL ?? 'https://hoopsintel.net';
  const priceId = plan === 'annual' ? STRIPE_PRICE_ANNUAL : STRIPE_PRICE_MONTHLY;

  // Stripe REST call — keeps the bundle free of the Stripe SDK for now.
  const params = new URLSearchParams();
  params.set('mode', 'subscription');
  params.set('success_url', `${baseUrl}/pro?status=success`);
  params.set('cancel_url', `${baseUrl}/pro?status=canceled`);
  params.set('line_items[0][price]', priceId);
  params.set('line_items[0][quantity]', '1');
  params.set('customer_email', user.email);
  params.set('metadata[user_id]', user.id);
  params.set('subscription_data[metadata][user_id]', user.id);
  params.set('allow_promotion_codes', 'true');

  const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return new Response(`Stripe error: ${text}`, { status: 502 });
  }

  const session = await res.json();
  return new Response(JSON.stringify({ url: session.url }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
