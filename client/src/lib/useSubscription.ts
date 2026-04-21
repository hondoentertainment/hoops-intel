// useSubscription — reads the current user's Hoops Intel Pro subscription.
// Returns { isPro, plan, status, loading } — gated behind Supabase anon key
// so the lookup runs entirely client-side.

import { useEffect, useState } from "react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function getStoredToken(): string | null {
  return localStorage.getItem("hoops-intel-auth-token");
}

export type SubscriptionStatus =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "unpaid"
  | "incomplete";

interface SubscriptionRow {
  plan: "monthly" | "annual";
  status: SubscriptionStatus;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
}

export interface SubscriptionState {
  isPro: boolean;
  plan: "monthly" | "annual" | null;
  status: SubscriptionStatus | null;
  renewsAt: Date | null;
  cancelAtPeriodEnd: boolean;
  loading: boolean;
}

const ACTIVE_STATUSES: SubscriptionStatus[] = ["trialing", "active", "past_due"];

export function useSubscription(): SubscriptionState {
  const [state, setState] = useState<SubscriptionState>({
    isPro: false,
    plan: null,
    status: null,
    renewsAt: null,
    cancelAtPeriodEnd: false,
    loading: true,
  });

  useEffect(() => {
    if (!SUPABASE_URL) {
      setState((s) => ({ ...s, loading: false }));
      return;
    }
    const token = getStoredToken();
    if (!token) {
      setState((s) => ({ ...s, loading: false }));
      return;
    }

    fetch(`${SUPABASE_URL}/rest/v1/subscriptions?select=*`, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : []))
      .then((rows: SubscriptionRow[]) => {
        const row = rows[0];
        if (!row) {
          setState({ isPro: false, plan: null, status: null, renewsAt: null, cancelAtPeriodEnd: false, loading: false });
          return;
        }
        setState({
          isPro: ACTIVE_STATUSES.includes(row.status),
          plan: row.plan,
          status: row.status,
          renewsAt: row.current_period_end ? new Date(row.current_period_end) : null,
          cancelAtPeriodEnd: row.cancel_at_period_end,
          loading: false,
        });
      })
      .catch(() => setState((s) => ({ ...s, loading: false })));
  }, []);

  return state;
}

export async function startCheckout(plan: "monthly" | "annual"): Promise<string> {
  const token = getStoredToken();
  if (!token) throw new Error("Sign in required");
  const res = await fetch("/api/create-checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ plan }),
  });
  if (res.status === 503) throw new Error("Pro is not live yet — check back soon.");
  if (!res.ok) throw new Error(`Checkout failed: ${res.status}`);
  const { url } = await res.json();
  return url;
}
