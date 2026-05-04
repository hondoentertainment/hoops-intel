// GET /api/ops-readiness — boolean flags only (never leaks secret values or formats).

export const config = { runtime: "nodejs" };

function configured(v: string | undefined): boolean {
  return Boolean(v && String(v).length > 0);
}

/** Public health-style snapshot for deploy smoke checks — no secrets, no previews. */
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const stripeCheckout =
    configured(process.env.STRIPE_SECRET_KEY) &&
    configured(process.env.STRIPE_PRICE_MONTHLY) &&
    configured(process.env.STRIPE_PRICE_ANNUAL);

  const vapidPair = configured(process.env.VAPID_PUBLIC_KEY) && configured(process.env.VAPID_PRIVATE_KEY);

  const body = {
    stripe: {
      checkoutReady: stripeCheckout,
      webhookReady: configured(process.env.STRIPE_WEBHOOK_SECRET),
    },
    billingUrls: {
      appBaseConfigured: configured(process.env.APP_BASE_URL),
    },
    push: {
      vapidKeyPairReady: vapidPair,
      vapidSubjectConfigured: configured(process.env.VAPID_SUBJECT),
      notifyAuthReady: configured(process.env.PUSH_API_SECRET) && vapidPair,
    },
    supabase: {
      serverReady: configured(process.env.SUPABASE_URL) && configured(process.env.SUPABASE_SERVICE_KEY),
    },
    creatorQueue: {
      adminConfigured: configured(process.env.GUEST_PULSE_ADMIN_SECRET),
    },
    emailDigest: {
      resendReady: configured(process.env.RESEND_API_KEY),
    },
    llm: {
      anthropicSeriesIntelReady: configured(process.env.ANTHROPIC_API_KEY),
    },
    hints: [
      "Client env (VITE_*) is not inspected here — set Stripe publishable + VITE_VAPID_PUBLIC_KEY in Vercel.",
      "Cron workflows need GitHub repository secrets mirrored from production.",
    ],
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
  });
}
