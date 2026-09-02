// GET /api/ops-readiness — boolean flags only (never leaks secret values or formats).

export const config = { runtime: "edge" };

const CANONICAL_APP_BASE = "https://hoopsintel.net";
const CANONICAL_PUSH_API = "https://hoopsintel.net/api/push-notify";
const CANONICAL_VAPID_SUBJECT = "mailto:admin@hoopsintel.net";

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
  const notifyAuthReady = configured(process.env.PUSH_API_SECRET) && vapidPair;
  const supabaseReady = configured(process.env.SUPABASE_URL) && configured(process.env.SUPABASE_SERVICE_KEY);
  const resendReady = configured(process.env.RESEND_API_KEY);
  const anthropicReady = configured(process.env.ANTHROPIC_API_KEY);

  // Match runtime defaults in create-checkout / create-portal-session / push-notify.
  const appBaseConfigured = configured(process.env.APP_BASE_URL ?? CANONICAL_APP_BASE);
  const apiUrlConfigured = configured(process.env.PUSH_API_URL ?? CANONICAL_PUSH_API);
  const vapidSubjectConfigured = configured(process.env.VAPID_SUBJECT ?? CANONICAL_VAPID_SUBJECT);

  const gaps: string[] = [];
  if (!stripeCheckout) gaps.push("stripe checkout");
  if (!configured(process.env.STRIPE_WEBHOOK_SECRET)) gaps.push("stripe webhook");
  if (!notifyAuthReady) gaps.push("push notify");
  if (!supabaseReady) gaps.push("supabase server");
  if (!resendReady) gaps.push("resend");
  if (!anthropicReady) gaps.push("anthropic");

  const body = {
    stripe: {
      checkoutReady: stripeCheckout,
      webhookReady: configured(process.env.STRIPE_WEBHOOK_SECRET),
    },
    billingUrls: {
      appBaseConfigured,
    },
    push: {
      vapidKeyPairReady: vapidPair,
      vapidSubjectConfigured,
      notifyAuthReady,
    },
    supabase: {
      serverReady: supabaseReady,
    },
    creatorQueue: {
      adminConfigured: configured(process.env.GUEST_PULSE_ADMIN_SECRET),
    },
    emailDigest: {
      resendReady,
      intakeInboxReady: resendReady && configured(process.env.CONTACT_INBOUND_EMAIL),
    },
    pushDispatch: {
      apiUrlConfigured,
    },
    llm: {
      anthropicSeriesIntelReady: anthropicReady,
    },
    gaps,
    hints: [
      "Client env (VITE_*) is not inspected here — set Stripe publishable + VITE_VAPID_PUBLIC_KEY in Vercel.",
      "Cron workflows need GitHub repository secrets mirrored from production.",
      `APP_BASE_URL defaults to ${CANONICAL_APP_BASE}; PUSH_API_URL defaults to ${CANONICAL_PUSH_API}.`,
    ],
  };

  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
  });
}
