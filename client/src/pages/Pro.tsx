// Hoops Intel Pro — premium tier marketing + checkout page.
// Lives at /pro. Backed by useSubscription + api/create-checkout.

import { useState } from "react";
import { useSubscription, startCheckout } from "../lib/useSubscription";
import SiteHeader from "../components/SiteHeader";

const FEATURES = [
  {
    title: "Early morning delivery",
    body: "Daily edition drops at 6 AM PST for Pro subscribers — two hours ahead of the free edition.",
  },
  {
    title: "Ad-free experience",
    body: "No sportsbook promos, no affiliate rails, no 'sponsored' rows. Just the basketball.",
  },
  {
    title: "Trade Value Index deep dives",
    body: "Full weekly Trade Value Index including tier narratives and historical rank changes.",
  },
  {
    title: "Full-season exports",
    body: "Download every edition, box score, and Pulse Index snapshot as CSV or JSON.",
  },
  {
    title: "Playoff DFS optimizer (coming May)",
    body: "Suggested lineups for DraftKings and FanDuel across the remaining playoff slate.",
  },
  {
    title: "Priority Ask Hoops Intel",
    body: "Pro queries run with a longer context window for deeper analytical answers.",
  },
];

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
      className="rounded-xl p-6 flex flex-col"
      style={{
        background: highlighted ? "rgba(14,165,233,0.08)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${highlighted ? "rgba(14,165,233,0.4)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div className="section-label mb-1" style={{ color: highlighted ? "#0EA5E9" : "rgba(255,255,255,0.4)" }}>
        {title}
      </div>
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-4xl font-bold" style={{ color: "#fff", fontFamily: "'Barlow Condensed', sans-serif" }}>
          {price}
        </span>
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>/ {cadence}</span>
      </div>
      <p className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
        Cancel anytime. Refunds honored in the first 7 days.
      </p>
      <button
        onClick={onSelect}
        disabled={loading || disabled}
        className="py-3 rounded-lg font-semibold transition-all"
        style={{
          background: highlighted
            ? "linear-gradient(135deg, #0EA5E9, #0284C7)"
            : "rgba(255,255,255,0.05)",
          color: highlighted ? "#fff" : "rgba(255,255,255,0.85)",
          cursor: loading || disabled ? "not-allowed" : "pointer",
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.06em",
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

  const handleCheckout = async (plan: "monthly" | "annual") => {
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

  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page, #050D1A)" }}>
      <SiteHeader subtitle="PRO" />

      <div className="container py-12 max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="section-label mb-2" style={{ color: "#0EA5E9" }}>HOOPS INTEL PRO</div>
          <h1 className="display-heading text-white text-4xl mb-3">Sharper basketball, earlier and ad-free.</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
            Everything free readers get — plus early access, deeper analytics, and an unobstructed reading experience.
          </p>
        </div>

        {sub.isPro ? (
          <div className="rounded-xl p-6 mb-10" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <div className="section-label mb-2" style={{ color: "#10B981" }}>YOU'RE PRO</div>
            <div className="text-white text-lg mb-1">{sub.plan === "annual" ? "Annual plan" : "Monthly plan"}</div>
            {sub.renewsAt && (
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                {sub.cancelAtPeriodEnd ? "Ends " : "Renews "}
                {sub.renewsAt.toLocaleDateString()}
              </div>
            )}
          </div>
        ) : (
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
            {error && (
              <div className="rounded-lg p-4 mb-10 text-sm" style={{ background: "rgba(244,63,94,0.08)", border: "1px solid rgba(244,63,94,0.2)", color: "rgba(244,63,94,0.9)" }}>
                {error}
              </div>
            )}
          </>
        )}

        <div className="mb-10">
          <div className="section-label mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>WHAT YOU GET</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={i} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="display-heading text-white text-base mb-1">{f.title}</div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-5 text-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)" }}>
          Billing handled by Stripe. Cancel from your account page at any time. If Pro is temporarily unavailable the "Go Pro" button will surface the reason — leave us a note at hello@hoopsintel.net and we'll waive the first month.
        </div>
      </div>
    </div>
  );
}
