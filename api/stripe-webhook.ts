// api/stripe-webhook.ts
// Vercel API Route — receives Stripe webhook events and mirrors subscription
// state into the Supabase `subscriptions` table.
//
// This is a scaffold. Until STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET are set
// it no-ops and returns 503 so Stripe retries once everything is provisioned.
//
// Required env vars when live:
//   STRIPE_SECRET_KEY          — sk_live_... or sk_test_...
//   STRIPE_WEBHOOK_SECRET      — whsec_... (from Stripe dashboard)
//   SUPABASE_URL               — https://xyz.supabase.co
//   SUPABASE_SERVICE_KEY       — service-role key
//
// Stripe events we handle:
//   customer.subscription.created
//   customer.subscription.updated
//   customer.subscription.deleted
//   invoice.payment_failed
//
// Once STRIPE_SECRET_KEY is in place, install the Stripe SDK:
//   npm install stripe
// and replace the `verifySignature` stub with `stripe.webhooks.constructEvent`.

export const config = { runtime: 'nodejs' };

interface StripeSubscriptionEvent {
  id: string;
  type: string;
  data: {
    object: {
      id: string;
      customer: string;
      status: string;
      current_period_end: number;
      cancel_at_period_end: boolean;
      items?: { data: Array<{ price: { id: string; recurring?: { interval: string } } }> };
      metadata?: { user_id?: string };
    };
  };
}

async function supabaseUpsert(row: Record<string, unknown>): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) throw new Error('Supabase env vars missing');
  const res = await fetch(`${url}/rest/v1/subscriptions?on_conflict=user_id`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal,resolution=merge-duplicates',
    },
    body: JSON.stringify([row]),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase upsert ${res.status}: ${text}`);
  }
}

// Placeholder until the Stripe SDK is wired in. Keeping the shape so the
// switch to `stripe.webhooks.constructEvent` is a one-line change.
async function verifySignature(rawBody: string, _signature: string | null): Promise<StripeSubscriptionEvent> {
  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error('STRIPE_WEBHOOK_SECRET not configured');
  }
  // TODO: replace with:
  //   const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  //   return stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  return JSON.parse(rawBody) as StripeSubscriptionEvent;
}

function planFromInterval(interval: string | undefined): 'monthly' | 'annual' {
  return interval === 'year' ? 'annual' : 'monthly';
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response('Stripe not configured', { status: 503 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event: StripeSubscriptionEvent;
  try {
    event = await verifySignature(rawBody, signature);
  } catch (err) {
    return new Response(`Signature verification failed: ${err instanceof Error ? err.message : 'unknown'}`, { status: 400 });
  }

  const sub = event.data.object;
  const userId = sub.metadata?.user_id;
  if (!userId) {
    return new Response('Missing user_id metadata', { status: 400 });
  }

  const interval = sub.items?.data?.[0]?.price?.recurring?.interval;

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await supabaseUpsert({
          user_id: userId,
          stripe_customer_id: sub.customer,
          stripe_subscription_id: sub.id,
          plan: planFromInterval(interval),
          status: sub.status,
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
          cancel_at_period_end: sub.cancel_at_period_end,
          updated_at: new Date().toISOString(),
        });
        break;

      case 'customer.subscription.deleted':
        await supabaseUpsert({
          user_id: userId,
          stripe_customer_id: sub.customer,
          stripe_subscription_id: sub.id,
          plan: planFromInterval(interval),
          status: 'canceled',
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
          cancel_at_period_end: true,
          updated_at: new Date().toISOString(),
        });
        break;

      case 'invoice.payment_failed':
        await supabaseUpsert({
          user_id: userId,
          stripe_customer_id: sub.customer,
          stripe_subscription_id: sub.id,
          plan: planFromInterval(interval),
          status: 'past_due',
          current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
          cancel_at_period_end: sub.cancel_at_period_end,
          updated_at: new Date().toISOString(),
        });
        break;

      default:
        return new Response(JSON.stringify({ received: true, ignored: event.type }), { status: 200 });
    }
  } catch (err) {
    return new Response(`Handler error: ${err instanceof Error ? err.message : 'unknown'}`, { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
}
