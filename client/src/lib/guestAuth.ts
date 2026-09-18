const TOKEN_KEY = "hoops-intel-auth-token";

/** Local JWT only — does not hit Supabase. Honest guest vs signed-in UI. */
export function hasLocalAuthToken(): boolean {
  if (typeof localStorage === "undefined") return false;
  return Boolean(localStorage.getItem(TOKEN_KEY));
}

export type FunnelPage = "account" | "pro" | "badges" | "pick-em" | "my-pulse";

export const FUNNEL_PRICING = "$5/month or $40/year";

export const FUNNEL_STEPS = [
  { id: "guest", label: "Guest", href: undefined as string | undefined },
  { id: "account", label: "Account", href: "/account" },
  { id: "pro", label: "Pro", href: "/pro" },
] as const;

export function guestFunnelCopy(page: FunnelPage): { kicker: string; title: string; body: string } {
  switch (page) {
    case "account":
      return {
        kicker: "Guest → account",
        title: "Sign in to keep a Hoops Intel account",
        body: `Free desk stays open. An account syncs favorites and unlocks checkout. Pro is ${FUNNEL_PRICING} after you sign in — nothing on this page is locked or blank.`,
      };
    case "pro":
      return {
        kicker: "Guest → Pro",
        title: "Sign in, then pick a plan",
        body: `Plans stay visible: ${FUNNEL_PRICING}. Stripe needs a Hoops Intel account before checkout. Sign in first — this page is not blank or broken.`,
      };
    case "badges":
      return {
        kicker: "Guest board",
        title: "This board is local until you sign in",
        body: `Streaks stay on this device. Sign in to keep them on your account, then Pro (${FUNNEL_PRICING}) if you want the full desk. Nothing here is locked.`,
      };
    case "pick-em":
      return {
        kicker: "Guest picks",
        title: "Picks stay on this device until you sign in",
        body: `You can still read the board. Sign in to keep a season record, then Pro (${FUNNEL_PRICING}) for accountability tools. Not a locked blank page.`,
      };
    case "my-pulse":
      return {
        kicker: "Guest Pulse",
        title: "Favorites stay on this device until you sign in",
        body: `Build a personal desk now. Sign in to sync teams across browsers, then Pro (${FUNNEL_PRICING}) for alerts. This page is not locked.`,
      };
  }
}

export function signedInNextCopy(page: FunnelPage): { kicker: string; title: string; body: string } {
  if (page === "pro") {
    return {
      kicker: "Signed in",
      title: "Pick a plan to go Pro",
      body: `You're signed in. Next step is checkout — ${FUNNEL_PRICING}. Plans below stay visible.`,
    };
  }
  if (page === "account") {
    return {
      kicker: "Signed in",
      title: "Next step: Hoops Intel Pro",
      body: `Account is live. Upgrade for early drops, ad-free reading, and deeper Ask — ${FUNNEL_PRICING}.`,
    };
  }
  return {
    kicker: "Signed in",
    title: "Next step: Hoops Intel Pro",
    body: `You're signed in. Pro is ${FUNNEL_PRICING} for early desk, ad-free reading, and deeper Ask.`,
  };
}
