// Helpers for Account page web push — VAPID subscribe + topic sync.

const VAPID_PUBLIC = import.meta.env.VITE_VAPID_PUBLIC_KEY as string | undefined;

export const DEFAULT_PUSH_TOPICS = ["elimination-game", "series-clincher"] as const;

export const PUSH_TOPIC_OPTIONS: { id: string; label: string; hint: string }[] = [
  {
    id: "elimination-game",
    label: "Playoff elimination games",
    hint: "Sparse alerts when a team faces elimination.",
  },
  {
    id: "series-clincher",
    label: "Series clinchers",
    hint: "Immediate ping when a series ends.",
  },
  {
    id: "fantasy",
    label: "Fantasy impact (digest runs)",
    hint: "Team-targeted blasts after fantasy-relevant digests when enabled server-side.",
  },
  {
    id: "injury",
    label: "Injury wire",
    hint: "High-signal injury deltas when the injury workflow fires.",
  },
];

export function vapidConfigured(): boolean {
  return Boolean(VAPID_PUBLIC && VAPID_PUBLIC.length > 20);
}

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

export async function getDevicePushSubscription(): Promise<PushSubscription | null> {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return null;
  const reg = await navigator.serviceWorker.ready;
  return reg.pushManager.getSubscription();
}

/**
 * Subscribe this browser to push and return subscription + key material for Supabase.
 */
export async function subscribeDevicePush(): Promise<{
  subscription: PushSubscription;
  endpoint: string;
  p256dh: string;
  auth_key: string;
}> {
  if (!vapidConfigured()) throw new Error("Web push is not configured (missing VITE_VAPID_PUBLIC_KEY).");
  const perm = await Notification.requestPermission();
  if (perm !== "granted") throw new Error("Notification permission denied.");

  const reg = await navigator.serviceWorker.ready;
  const existing = await reg.pushManager.getSubscription();
  if (existing) await existing.unsubscribe();

  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC!),
  });
  const json = sub.toJSON();
  const key = json.keys?.p256dh;
  const auth = json.keys?.auth;
  if (!key || !auth) throw new Error("Push subscription keys missing.");
  return { subscription: sub, endpoint: sub.endpoint, p256dh: key, auth_key: auth };
}

export async function unsubscribeDevicePush(): Promise<void> {
  const sub = await getDevicePushSubscription();
  if (sub) await sub.unsubscribe();
}
