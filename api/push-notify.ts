// api/push-notify.ts
// Vercel API Route — sends Web Push notifications to subscribed users.

export const config = { runtime: "nodejs" };

import { filterRowsForTopic, type PushPrefsRow, type PushTopicKind } from "../shared/pushTopics";

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
  subscription?: PushSubscription;
  topic: PushTopicKind;
  title: string;
  body: string;
  url?: string;
  playerSlug?: string;
  teamAbbr?: string;
  rivalAway?: string;
  rivalHome?: string;
}

async function signVapidJWT(audience: string, subject: string, privateKeyB64: string): Promise<string> {
  const b64url = (s: string) =>
    btoa(s).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const header = b64url(JSON.stringify({ typ: "JWT", alg: "ES256" }));
  const now = Math.floor(Date.now() / 1000);
  const payload = b64url(JSON.stringify({ aud: audience, exp: now + 12 * 3600, sub: subject }));

  const signingInput = `${header}.${payload}`;

  const keyData = Uint8Array.from(atob(privateKeyB64), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    keyData,
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    cryptoKey,
    new TextEncoder().encode(signingInput),
  );

  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${signingInput}.${sigB64}`;
}

async function sendPush(
  subscription: PushSubscription,
  notificationBody: { title: string; body: string; url?: string; topic: string },
  vapidPublicKey: string,
  vapidPrivateKey: string,
  vapidSubject: string,
): Promise<boolean> {
  try {
    const url = new URL(subscription.endpoint);
    const audience = `${url.protocol}//${url.host}`;
    const jwt = await signVapidJWT(audience, vapidSubject, vapidPrivateKey);

    const pubKeyB64url = vapidPublicKey.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    const authorization = `vapid t=${jwt},k=${pubKeyB64url}`;

    const payloadText = JSON.stringify(notificationBody);
    const payloadBytes = new TextEncoder().encode(payloadText);

    const res = await fetch(subscription.endpoint, {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/octet-stream",
        "Content-Length": String(payloadBytes.byteLength),
        TTL: "86400",
        Urgency: "high",
      },
      body: payloadBytes,
    });

    if (res.status === 410 || res.status === 404) {
      console.warn(`[push-notify] Subscription gone (${res.status}): ${subscription.endpoint}`);
      return false;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(`[push-notify] Push failed ${res.status} for ${subscription.endpoint}: ${text}`);
      return false;
    }

    return true;
  } catch (err) {
    console.error(`[push-notify] Exception sending push to ${subscription.endpoint}:`, err);
    return false;
  }
}

function buildSubsQuery(teamAbbr?: string, playerSlug?: string, topic?: PushTopicKind): string {
  const filters: string[] = [];
  if (teamAbbr) filters.push(`team_abbr=eq.${encodeURIComponent(teamAbbr)}`);
  if (playerSlug) filters.push(`player_slug=eq.${encodeURIComponent(playerSlug)}`);
  if (topic === "rival") {
    filters.push("rival_abbr_a=not.is.null");
    filters.push("rival_abbr_b=not.is.null");
  }
  const sel =
    "select=endpoint,p256dh,auth_key,team_abbr,player_slug,notify_topics,rival_abbr_a,rival_abbr_b";
  return filters.length ? `${sel}&${filters.join("&")}` : sel;
}

async function fetchSubscriptionRows(
  supabaseUrl: string,
  serviceKey: string,
  teamAbbr?: string,
  playerSlug?: string,
  topic?: PushTopicKind,
): Promise<PushPrefsRow[]> {
  const qs = buildSubsQuery(teamAbbr, playerSlug, topic);

  const res = await fetch(`${supabaseUrl}/rest/v1/push_subscriptions?${qs}`, {
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Supabase fetch failed ${res.status}: ${text}`);
  }

  return (await res.json()) as PushPrefsRow[];
}

function rowsToSubscriptions(rows: PushPrefsRow[]): PushSubscription[] {
  return rows
    .map((row) => {
      const auth = (row.auth_key ?? row.auth ?? "").trim();
      if (!row.endpoint || !row.p256dh || !auth) return null;
      return {
        endpoint: row.endpoint,
        keys: { p256dh: row.p256dh, auth },
      };
    })
    .filter(Boolean) as PushSubscription[];
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload: PushPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const expectedSecret = process.env.PUSH_API_SECRET;
  if (!expectedSecret || payload.secret !== expectedSecret) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
  const vapidSubject = process.env.VAPID_SUBJECT ?? "mailto:admin@hoopsintel.net";
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!vapidPublicKey || !vapidPrivateKey) {
    console.error("[push-notify] Missing VAPID_PUBLIC_KEY or VAPID_PRIVATE_KEY");
    return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const notificationBody = {
    title: payload.title,
    body: payload.body,
    url: payload.url,
    topic: payload.topic,
  };

  let subscriptions: PushSubscription[];

  if (payload.subscription) {
    subscriptions = [payload.subscription];
  } else {
    if (!supabaseUrl || !serviceKey) {
      console.error("[push-notify] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY");
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
    try {
      const rowsRaw = await fetchSubscriptionRows(
        supabaseUrl,
        serviceKey,
        payload.teamAbbr,
        payload.playerSlug,
        payload.topic,
      );
      const rows = filterRowsForTopic(rowsRaw, {
        topic: payload.topic,
        rivalAway: payload.rivalAway,
        rivalHome: payload.rivalHome,
      });
      subscriptions = rowsToSubscriptions(rows);
    } catch (err) {
      console.error("[push-notify] Failed to fetch subscriptions:", err);
      return new Response(JSON.stringify({ error: "Failed to fetch subscriptions" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  console.log(`[push-notify] Sending "${payload.title}" to ${subscriptions.length} subscription(s)`);

  const results = await Promise.allSettled(
    subscriptions.map((sub) =>
      sendPush(sub, notificationBody, vapidPublicKey, vapidPrivateKey, vapidSubject),
    ),
  );

  let sent = 0;
  let failed = 0;
  for (const result of results) {
    if (result.status === "fulfilled" && result.value === true) sent++;
    else failed++;
  }

  console.log(`[push-notify] Done — sent: ${sent}, failed: ${failed}`);

  return new Response(JSON.stringify({ sent, failed }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
