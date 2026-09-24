// Hoops Intel Pro — premium tier marketing + checkout page.
// Lives at /pro. Backed by useSubscription + api/create-checkout.

import { useEffect, useState } from "react";
import { useSubscription, startCheckout, openBillingPortal } from "../lib/useSubscription";
import { pulseProFeatureBody } from "../lib/deskMode";
import { distributionTools } from "../lib/siteNav";
import ToolPageLayout from "../components/ToolPageLayout";
import AuthModal from "../components/AuthModal";
import { GuestNotice, SignedInNextNotice } from "../components/GuestNotice";
import { lastUpdatedStamp } from "../lib/dataTrust";
import { hasLocalAuthToken } from "../lib/guestAuth";

type OpsStripe = { checkoutReady?: boolean; webhookReady?: boolean };

function getStoredAuthToken(): string | null {
  if (typeof localStorage === "undefined") return null;
  return localStorage.getItem("hoops-intel-auth-token");
}

const FEATURES = [
  {
    title: "Full Pulse Index + rationales",
    body: pulseProFeatureBody(),
  },
  {
    title: "My Pulse alerts",
    body: "Favorite-team and favorite-player alerts surface games, injuries, and Pulse moves that matter to you first.",
  },
  {
    title: "Trade Value Index (full list)",
    body: "Complete weekly trade board with tier narratives and historical rank changes.",
  },
  {
    title: "Priority Ask Hoops Intel",
    body: "Longer context window for deeper analytical answers over the full archive.",
  },
  {
    title: "Print & export packet",
    body: "Branded multi-section exports: edition, Pulse snapshots, and box scores as CSV or JSON.",
  },
  {
    title: "Ad-free desk",
    body: "No sportsbook promo rails in your daily scroll — just basketball intelligence.",
  },
  {
    title: "Early morning delivery",
    body: "Edition at 6 AM PT when push/digest is configured — ahead of the public desk drop.",
  },
  {
    title: "Pick ’Em accountability",
    body: "Advanced pick stats and streak history tied to the Pulse Accountability model.",
  },
];

function isStripeConfigError(message: string): boolean {
  return message.includes("not configured") || message.includes("STRIPE_") || message.includes("Required env:");
}

function PlanCard({
  title,
  price,
  cadence,
  highlighted,
  onSelect,
  loading,
  disabled,
}: {
  title: string;
  price: string;
  cadence: string;
  highlighted?: boolean;
  onSelect: () => void;
  loading: boolean;
  disabled: boolean;
}) {
  return (
    <div
      className="enhanced-card p-6 flex flex-col"
      style={{
        background: highlighted ? "var(--hi-canvas-soft,#fafaf8)" : "var(--hi-surface,#eeeeec)",
      }}
    >
      <div className="section-label mb-1" style={{ color: highlighted ? "var(--hi-chip,#ff7a17)" : "var(--hi-text-secondary,#5c5c58)" }}>
        {title}
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="display-heading text-4xl" style={{ color: "var(--hi-text,#0a0a0a)" }}>
          {price}
        </span>
        <span className="text-sm" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>/ {cadence}</span>
      </div>
      <p className="text-xs mb-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
        Cancel anytime. Refunds honored in the first 7 days.
      </p>
      <button
        onClick={onSelect}
        disabled={loading || disabled}
        className={highlighted ? "hi-pill-primary py-3" : "hi-pill py-3"}
        style={{
          cursor: loading || disabled ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "OPENING CHECKOUT..." : `GO PRO ${cadence.toUpperCase()}`}
      </button>
    </div>
  );
}

export default function Pro() {
  const sub = useSubscription();
  const [checkoutLoading, setCheckoutLoading] = useState<"monthly" | "annual" | null>(null);
  const [error, setError] = useState<string>("");
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  const [stripeOps, setStripeOps] = useState<OpsStripe | null>(null);
  const [opsLoaded, setOpsLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/ops-readiness")
      .then((r) => r.json())
      .then((b: { stripe?: OpsStripe }) => setStripeOps(b.stripe ?? null))
      .catch(() => setStripeOps(null))
      .finally(() => setOpsLoaded(true));
  }, []);

  const checkoutReady = stripeOps?.checkoutReady === true;

  const handleCheckout = async (plan: "monthly" | "annual") => {
    if (!checkoutReady) {
      setError("Checkout temporarily unavailable.");
      return;
    }
    if (!getStoredAuthToken()) {
      setShowAuth(true);
      setError("Sign in once to subscribe — Stripe links your Hoops Intel account.");
      return;
    }
    setCheckoutLoading(plan);
    setError("");
    try {
      const url = await startCheckout(plan);
      window.location.href = url;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Checkout failed";
      setError(isStripeConfigError(message) ? "Checkout temporarily unavailable." : message);
      setCheckoutLoading(null);
    }
  };

  const handlePortal = async () => {
    setPortalError("");
    setPortalLoading(true);
    try {
      const url = await openBillingPortal();
      window.location.href = url;
    } catch (err) {
      setPortalError(err instanceof Error ? err.message : "Billing portal failed");
      setPortalLoading(false);
    }
  };

  return (
    <ToolPageLayout
      subtitle="PRO"
      sectionLabel="Hoops Intel Pro"
      title="Sharper basketball, earlier and ad-free."
      description="Everything free readers get — plus early access, deeper analytics, and an unobstructed reading experience."
      heroMeta={lastUpdatedStamp()}
      maxWidth="xl"
      showRelated={false}
    >
        {!sub.isPro && checkoutReady && !hasLocalAuthToken() ? (
          <GuestNotice page="pro" />
        ) : null}
        {!sub.isPro && checkoutReady && hasLocalAuthToken() ? (
          <SignedInNextNotice page="pro" />
        ) : null}

        {sub.isPro ? (
          <div className="rounded-xl p-6 mb-10" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <div className="section-label" style={{ color: "#10B981" }}>PRO ACTIVE</div>
              <span className="desk-chip" style={{ background: "rgba(31,157,106,0.12)", color: "var(--hi-success,#1f9d6a)" }}>
                Subscribed
              </span>
            </div>
            <div className="text-white text-lg mb-1">{sub.plan === "annual" ? "Annual plan" : "Monthly plan"}</div>
            {sub.renewsAt && (
              <div className="text-sm mb-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                {sub.cancelAtPeriodEnd ? "Access ends " : "Renews "}
                {sub.renewsAt.toLocaleDateString(undefined, { dateStyle: "medium" })}
                {sub.cancelAtPeriodEnd ? " (cancel at period end)" : ""}
              </div>
            )}
            <p className="text-sm mb-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
              Full Pulse ranks, ad-free desk, and Pro-only tools are unlocked on this account.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                disabled={portalLoading}
                onClick={() => void handlePortal()}
                className="hi-pill-primary min-h-[48px] px-5 py-2.5 text-sm disabled:opacity-50"
              >
                {portalLoading ? "OPENING STRIPE…" : "MANAGE BILLING"}
              </button>
              <a
                href="/account"
                className="min-h-[48px] inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.15)", color: "var(--hi-muted,#5c5c58)" }}
              >
                Account hub
              </a>
            </div>
            {portalError ? (
              <p className="text-sm mt-3 hi-notice-warn" role="alert">
                {isStripeConfigError(portalError)
                  ? "Billing management is temporarily unavailable."
                  : portalError}
              </p>
            ) : null}
          </div>
        ) : (
          <>
            {!opsLoaded ? (
              <p className="text-sm mb-10" role="status" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                Checking checkout…
              </p>
            ) : checkoutReady ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  <PlanCard
                    title="Monthly"
                    price="$5"
                    cadence="month"
                    onSelect={() => handleCheckout("monthly")}
                    loading={checkoutLoading === "monthly"}
                    disabled={checkoutLoading !== null}
                  />
                  <PlanCard
                    title="Annual (33% off)"
                    price="$40"
                    cadence="year"
                    highlighted
                    onSelect={() => handleCheckout("annual")}
                    loading={checkoutLoading === "annual"}
                    disabled={checkoutLoading !== null}
                  />
                </div>
                {error ? (
                  <div className="hi-notice-warn mb-10" role="alert">
                    <p className="text-sm font-semibold">{error}</p>
                  </div>
                ) : null}
              </>
            ) : (
              <section
                className="enhanced-card p-6 mb-10"
                data-testid="pro-checkout-unavailable"
                aria-labelledby="pro-checkout-status"
              >
                <p className="enhanced-kicker mb-2">Hoops Intel Pro</p>
                <h2 id="pro-checkout-status" className="text-lg font-semibold hi-title text-[var(--hi-text,#0a0a0a)]">
                  Checkout temporarily unavailable
                </h2>
                <p className="text-sm mt-2 mb-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
                  Plans stay $5 a month or $40 a year. Checkout is paused, so nothing is charged from this page.
                </p>
                <a
                  href="/account"
                  className="hi-pill-primary inline-flex items-center justify-center min-h-12 px-5"
                >
                  {hasLocalAuthToken() ? "Go to account" : "Create an account"}
                </a>
              </section>
            )}
          </>
        )}

        <div className="mb-10">
          <div className="section-label mb-4" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>WHAT YOU GET</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="display-heading text-white text-base mb-1">{f.title}</div>
                <div className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="section-label mb-2" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>DISTRIBUTION & EMBEDS</div>
          <p className="text-sm mb-4" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            Publisher tools for embedding Hoops Intel — widgets, load analytics, and the same surfaces listed under Tools.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {distributionTools().map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="rounded-lg p-4 block transition-colors hover:bg-white/[0.04]"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="display-heading text-white text-base mb-1">{t.label}</div>
                <div className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>{t.description}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-5 text-sm" style={{ background: "var(--hi-surface-2,#f3f3f0)", border: "1px solid rgba(255,255,255,0.06)", color: "var(--hi-muted,#5c5c58)" }}>
          Billing is handled by Stripe. Manage or cancel anytime from{" "}
          <a href="/account" className="text-[var(--hi-text)] underline hover:text-[var(--hi-text)]">
            your account
          </a>
          .
        </div>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onAuth={() => {
            setShowAuth(false);
            sub.refreshSubscription();
            setError("");
          }}
        />
      )}
    </ToolPageLayout>
  );
}
