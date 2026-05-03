/** Newsletter signup — persists to Supabase via `/api/subscribe-digest`; local flags only mirror success */

export type SubscribeDigestResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

const STORAGE_SUBSCRIBED = "hoopsintel-subscribed";
const STORAGE_EMAIL = "hoopsintel-email";

/** Client-side UX hint after a confirmed server signup (offline recovery). */
export function cacheSuccessfulDigestSignup(emailTrimmed: string) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_SUBSCRIBED, "true");
  localStorage.setItem(STORAGE_EMAIL, emailTrimmed.trim().toLowerCase());
}

/** Whether the user previously completed signup in this browser. */
export function readDigestSignupHint(): boolean {
  if (typeof localStorage === "undefined") return false;
  return localStorage.getItem(STORAGE_SUBSCRIBED) === "true";
}

export async function subscribeDigestEmail(rawEmail: string): Promise<SubscribeDigestResult> {
  const email = rawEmail.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  try {
    const res = await fetch("/api/subscribe-digest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    let data: { ok?: boolean; message?: string; error?: string } = {};
    try {
      data = await res.json();
    } catch {
      /* ignore */
    }

    if (res.ok && data.ok !== false) {
      const msg = typeof data.message === "string" ? data.message : "You're on the list.";
      cacheSuccessfulDigestSignup(email);
      return { ok: true, message: msg };
    }

    const err =
      typeof data.error === "string"
        ? data.error
        : res.status >= 500
          ? "Server error — try again in a minute."
          : "Could not subscribe right now.";
    return { ok: false, error: err };
  } catch {
    return { ok: false, error: "Network error — check your connection and try again." };
  }
}
