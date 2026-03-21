// api/push-notify.ts
// Vercel API Route — sends Web Push notifications to subscribed users
// Called by check-injuries.mjs when a player's injury status changes,
// and available for future features (game-start alerts, buzzer-beaters, milestones).
//
// Web Push Protocol overview:
//   1. Build a VAPID JWT proving we own the push service registration
//   2. Encrypt the notification payload using the subscriber's public key (p256dh)
//      — for simplicity we send an unencrypted payload here; browsers accept it
//        when Content-Encoding is omitted and the body is plain JSON text
//   3. POST to the subscriber's push endpoint with Authorization + TTL headers
//
// Required env vars:
//   VAPID_PUBLIC_KEY   — base64url-encoded P-256 public key
//   VAPID_PRIVATE_KEY  — base64url PKCS#8-wrapped P-256 private key
//   VAPID_SUBJECT      — mailto: or https: URI identifying the sender
//   SUPABASE_URL       — e.g. https://xyz.supabase.co
//   SUPABASE_SERVICE_KEY — service-role key (bypasses RLS for reading subscriptions)
//   PUSH_API_SECRET    — shared secret callers must pass in the request body

export const config = { runtime: 'nodejs' };

// ── Types ──────────────────────────────────────────────────────────────────

interface PushSubscriptionKeys {
  p256dh: string;
  auth: string;
}

interface PushSubscription {
  endpoint: string;
  keys: PushSubscriptionKeys;
}

interface PushPayload {
  secret: string;
  subscription?: PushSubscription;  // optional: send to one specific subscription
  topic: 'injury' | 'game-start' | 'buzzer-beater' | 'milestone';
  title: string;
  body: string;
  url?: string;         // deep link opened when user taps the notification
  playerSlug?: string;  // filter subscriptions by followed player
  teamAbbr?: string;    // filter subscriptions by followed team
}

interface SupabaseSubscriptionRow {
  endpoint: string;
  p256dh: string;
  auth: string;
  team_abbr: string | null;
  player_slug: string | null;
}

// ── VAPID JWT ──────────────────────────────────────────────────────────────

// Signs a VAPID JWT using the Web Crypto API (available in Node 18+).
// The JWT proves ownership of the VAPID key pair to the push service.
//
// audience  — origin of the push endpoint  (e.g. "https://fcm.googleapis.com")
// subject   — sender identity URI          (e.g. "mailto:admin@hoopsintel.net")
// privateKeyB64 — PKCS#8 private key encoded as standard base64 (NOT base64url)
async function signVapidJWT(
  audience: string,
  subject: string,
  privateKeyB64: string
): Promise<string> {
  // base64url-encode a plain string (no padding, URL-safe chars)
  const b64url = (s: string) =>
    btoa(s).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  const header  = b64url(JSON.stringify({ typ: 'JWT', alg: 'ES256' }));
  const now     = Math.floor(Date.now() / 1000);
  const payload = b64url(
    JSON.stringify({ aud: audience, exp: now + 12 * 3600, sub: subject })
  );

  const signingInput = `${header}.${payload}`;

  // Import the PKCS#8-wrapped P-256 private key
  const keyData  = Uint8Array.from(atob(privateKeyB64), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    keyData,
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['sign']
  );

  // Sign with ECDSA + SHA-256
  const signature = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    cryptoKey,
    new TextEncoder().encode(signingInput)
  );

  // DER signatures from WebCrypto are already in IEEE P1363 (raw r||s) format
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${signingInput}.${sigB64}`;
}

// ── Web Push sender ────────────────────────────────────────────────────────

// Sends a single Web Push notification to one subscription endpoint.
// Returns true on success (HTTP 200/201), false on any error so the
// caller can keep processing other subscriptions.
async function sendPush(
  subscription: PushSubscription,
  notificationBody: { title: string; body: string; url?: string; topic: string },
  vapidPublicKey: string,
  vapidPrivateKey: string,
  vapidSubject: string
): Promise<boolean> {
  try {
    const url        = new URL(subscription.endpoint);
    const audience   = `${url.protocol}//${url.host}`;
    const jwt        = await signVapidJWT(audience, vapidSubject, vapidPrivateKey);

    // Authorization header: "vapid t=<jwt>,k=<public key>"
    // The public key must be base64url WITHOUT padding — strip it if present
    const pubKeyB64url = vapidPublicKey.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const authorization = `vapid t=${jwt},k=${pubKeyB64url}`;

    // Notification payload — plain JSON text (unencrypted for simplicity).
    // For production-grade payload encryption (RFC 8188 / aes128gcm) you would
    // use the subscriber's p256dh and auth keys to derive the shared secret.
    const payloadText = JSON.stringify(notificationBody);
    const payloadBytes = new TextEncoder().encode(payloadText);

    const res = await fetch(subscription.endpoint, {
      method: 'POST',
      headers: {
        Authorization:    authorization,
        'Content-Type':   'application/octet-stream',
        'Content-Length': String(payloadBytes.byteLength),
        TTL:              '86400',  // 24 hours — push service may hold it this long
        Urgency:          'high',   // deliver immediately, bypass battery optimisations
      },
      body: payloadBytes,
    });

    if (res.status === 410 || res.status === 404) {
      // Subscription has expired or was unsubscribed — caller should remove it
      console.warn(`[push-notify] Subscription gone (${res.status}): ${subscription.endpoint}`);
      return false;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      console.error(`[push-notify] Push failed ${res.status} for ${subscription.endpoint}: ${text}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`[push-notify] Exception sending push to ${subscription.endpoint}:`, err);
    return false;
  }
}

// ── Supabase helper ────────────────────────────────────────────────────────

// Fetches push subscriptions from Supabase, optionally filtered by team or player.
// Uses the service-role key so RLS does not block the read.
async function fetchSubscriptions(
  supabaseUrl: string,
  serviceKey: string,
  teamAbbr?: string,
  playerSlug?: string
): Promise<PushSubscription[]> {
  // Build PostgREST query — filter only if explicit values provided
  const filters: string[] = [];
  if (teamAbbr)   filters.push(`team_abbr=eq.${encodeURIComponent(teamAbbr)}`);
  if (playerSlug) filters.push(`player_slug=eq.${encodeURIComponent(playerSlug)}`);

  const qs = filters.length > 0 ? `?${filters.join('&')}` : '';

  const res = await fetch(`${supabaseUrl}/rest/v1/push_subscriptions${qs}`, {
    headers: {
      apikey:          serviceKey,
      Authorization:   `Bearer ${serviceKey}`,
      'Content-Type':  'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Supabase fetch failed ${res.status}: ${text}`);
  }

  const rows: SupabaseSubscriptionRow[] = await res.json();

  return rows.map((row) => ({
    endpoint: row.endpoint,
    keys:     { p256dh: row.p256dh, auth: row.auth },
  }));
}

// ── Handler ────────────────────────────────────────────────────────────────

export default async function handler(req: Request): Promise<Response> {
  // Only accept POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Parse body
  let payload: PushPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate secret — protects endpoint from unauthorised callers
  const expectedSecret = process.env.PUSH_API_SECRET;
  if (!expectedSecret || payload.secret !== expectedSecret) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate required env vars
  const vapidPublicKey  = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
  const vapidSubject    = process.env.VAPID_SUBJECT ?? 'mailto:admin@hoopsintel.net';
  const supabaseUrl     = process.env.SUPABASE_URL;
  const serviceKey      = process.env.SUPABASE_SERVICE_KEY;

  if (!vapidPublicKey || !vapidPrivateKey) {
    console.error('[push-notify] Missing VAPID_PUBLIC_KEY or VAPID_PRIVATE_KEY');
    return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Build notification body sent inside the push payload
  const notificationBody = {
    title: payload.title,
    body:  payload.body,
    url:   payload.url,
    topic: payload.topic,
  };

  // Determine which subscriptions to target
  let subscriptions: PushSubscription[];

  if (payload.subscription) {
    // Caller provided an explicit subscription — send only to that one
    subscriptions = [payload.subscription];
  } else {
    // Fetch from Supabase, filtered by team/player if provided
    if (!supabaseUrl || !serviceKey) {
      console.error('[push-notify] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
      return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    try {
      subscriptions = await fetchSubscriptions(
        supabaseUrl,
        serviceKey,
        payload.teamAbbr,
        payload.playerSlug
      );
    } catch (err) {
      console.error('[push-notify] Failed to fetch subscriptions:', err);
      return new Response(JSON.stringify({ error: 'Failed to fetch subscriptions' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  console.log(`[push-notify] Sending "${payload.title}" to ${subscriptions.length} subscription(s)`);

  // Send to all subscriptions concurrently; collect results
  // We intentionally catch individual failures so one bad subscription
  // does not block delivery to the rest of the list.
  const results = await Promise.allSettled(
    subscriptions.map((sub) =>
      sendPush(sub, notificationBody, vapidPublicKey, vapidPrivateKey, vapidSubject)
    )
  );

  let sent   = 0;
  let failed = 0;
  for (const result of results) {
    if (result.status === 'fulfilled' && result.value === true) {
      sent++;
    } else {
      failed++;
    }
  }

  console.log(`[push-notify] Done — sent: ${sent}, failed: ${failed}`);

  return new Response(JSON.stringify({ sent, failed }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
