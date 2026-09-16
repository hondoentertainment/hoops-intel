// Hoops Intel Pro — premium tier marketing + checkout page.
// Lives at /pro. Backed by useSubscription + api/create-checkout.

import { useEffect, useState } from "react";
import { useSubscription, startCheckout, openBillingPortal } from "../lib/useSubscription";
import { pulseProFeatureBody } from "../lib/deskMode";
import { distributionTools } from "../lib/siteNav";
import ToolPageLayout from "../components/ToolPageLayout";
import AuthModal from "../components/AuthModal";

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
  checkoutReady,
}: {
  title: string;
  price: string;
  cadence: string;
  highlighted?: boolean;
  onSelect: () => void;
  loading: boolean;
  disabled: boolean;
  checkoutReady: boolean | null;
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
        {loading
          ? "OPENING CHECKOUT..."
          : checkoutReady === false
            ? "CHECKOUT PENDING OPS"
            : `GO PRO ${cadence.toUpperCase()}`}
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

  useEffect(() => {
    fetch("/api/ops-readiness")
      .then((r) => r.json())
      .then((b: { stripe?: OpsStripe }) => setStripeOps(b.stripe ?? null))
      .catch(() => setStripeOps(null));
  }, []);

  const checkoutReady = stripeOps?.checkoutReady ?? null;

  const handleCheckout = async (plan: "monthly" | "annual") => {
    if (checkoutReady === false) {
      setError(
        "Stripe checkout is not configured on this deployment. Required: STRIPE_SECRET_KEY, STRIPE_PRICE_MONTHLY, STRIPE_PRICE_ANNUAL.",
      );
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
      setError(err instanceof Error ? err.message : "Checkout failed");
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
      maxWidth="xl"
      showRelated={false}
    >

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
              isStripeConfigError(portalError) ? (
                <p className="text-sm mt-3" style={{ color: "var(--hi-warn,#c2410c)" }} role="alert">
                  Billing portal isn&apos;t wired yet ({portalError}). See README env vars or{" "}
                  <a href="mailto:hello@hoopsintel.net" className="underline">hello@hoopsintel.net</a>
                </p>
              ) : (
                <p className="text-sm mt-3 text-rose-400" role="alert">{portalError}</p>
              )
            ) : null}
          </div>
        ) : (
          <>
            {checkoutReady === false && (
              <div
                className="rounded-lg p-4 mb-6 space-y-2"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.25)",
                  color: "var(--hi-warn,#c2410c)",
                }}
                role="status"
              >
                <p className="text-sm font-semibold">Upgrade available — checkout pending ops</p>
                <p className="text-xs opacity-90">
                  <code className="hi-accent-text">/api/ops-readiness</code> reports Stripe checkout as Pending. Set{" "}
                  STRIPE_SECRET_KEY + price IDs in Vercel before go-live.
                </p>
              </div>
            )}
            {checkoutReady === true && (
              <div
                className="rounded-lg px-4 py-3 mb-6 text-xs"
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.22)",
                  color: "var(--hi-success,#1f9d6a)",
                }}
                role="status"
              >
                Checkout is live — pick a plan below. Sign in first so Stripe links to your Hoops Intel account.
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <PlanCard
                title="Monthly"
                price="$5"
                cadence="month"
                onSelect={() => handleCheckout("monthly")}
                loading={checkoutLoading === "monthly"}
                disabled={checkoutLoading !== null || checkoutReady === false}
                checkoutReady={checkoutReady}
              />
              <PlanCard
                title="Annual (33% off)"
                price="$40"
                cadence="year"
                highlighted
                onSelect={() => handleCheckout("annual")}
                loading={checkoutLoading === "annual"}
                disabled={checkoutLoading !== null || checkoutReady === false}
                checkoutReady={checkoutReady}
              />
            </div>
            {error ? (
              isStripeConfigError(error) ? (
                <div className="rounded-lg p-4 mb-10 space-y-2" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", color: "var(--hi-warn,#c2410c)" }}>
                  <p className="text-sm font-semibold">Checkout isn&apos;t live on this deployment</p>
                  <p className="text-sm opacity-90">{error}</p>
                  <p className="text-xs opacity-80">
                    Production needs Stripe keys and price IDs (see repo README — Environment variables). Questions:{" "}
                    <a href="mailto:hello@hoopsintel.net" className="underline">hello@hoopsintel.net</a>
                  </p>
                </div>
              ) : (
                <div className="rounded-lg p-4 mb-10 text-sm" style={{ background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.2)", color: "rgba(244,63,94,0.9)" }}>
                  {error}
                </div>
              )
            ) : null}
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
          Billing handled by Stripe. Manage or cancel anytime from{" "}
          <a href="/account" className="text-[var(--hi-text)] underline hover:text-[var(--hi-text)]">
            your account
          </a>
          . If Pro checkout returns &quot;not live&quot;, the Stripe price IDs aren&apos;t configured in production yet — ping
          hello@hoopsintel.net if you&apos;re blocked.
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
