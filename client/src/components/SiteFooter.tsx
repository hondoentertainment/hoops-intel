import { useState } from "react";
import { BrandLockup, EnhancedButton } from "./enhanced/EnhancedUi";
import { ENHANCED_ACCENT } from "../lib/enhancedDesk";
import { FOOTER_QUICK_LINKS } from "../lib/siteNav";
import { pulseEdition } from "../lib/pulseData";
import { subscribeDigestEmail, readDigestSignupHint } from "../lib/subscribeDigest";
import { editionHourLabel } from "../lib/pacificTime";
import { useToast } from "../contexts/ToastContext";

function footerEmailOk(raw: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
}

export default function SiteFooter() {
  const { toast } = useToast();
  const digestId = "footer-digest-email";
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(() => readDigestSignupHint());

  const handleSubscribe = async () => {
    if (!footerEmailOk(email)) {
      setEmailError("Enter a valid email.");
      return;
    }
    setEmailError("");
    setApiError("");
    setSubmitting(true);
    const result = await subscribeDigestEmail(email);
    setSubmitting(false);
    if (result.ok) {
      setSubscribed(true);
      toast(`Subscribed — morning digest at ${editionHourLabel()}`);
    } else {
      setApiError(result.error);
    }
  };

  const digestDescribedBy =
    [emailError ? "footer-email-err" : "", apiError ? "footer-digest-api-err" : ""].filter(Boolean).join(" ") || undefined;

  return (
    <footer className="py-10 mt-8 border-t" style={{ borderColor: "var(--hi-border-soft, rgba(255,255,255,0.06))" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="min-w-0">
            <div className="mb-3">
              <BrandLockup subtitle="Daily NBA intelligence" />
            </div>
            <p className="text-xs mb-3" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
              {pulseEdition.edition} · {pulseEdition.date}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="/archive" className="text-xs min-h-11 inline-flex items-center" style={{ color: ENHANCED_ACCENT }}>
                Archive
              </a>
              <a href="/performance" className="text-xs min-h-11 inline-flex items-center" style={{ color: ENHANCED_ACCENT }}>
                AI Performance
              </a>
              <a href="/feed.xml" className="text-xs min-h-11 inline-flex items-center" style={{ color: ENHANCED_ACCENT }}>
                RSS Feed
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <p className="enhanced-kicker mb-2">Daily digest</p>
            <p className="text-xs mb-3" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
              Morning edition in your inbox at {editionHourLabel()}
            </p>
            {subscribed ? (
              <div className="text-xs px-3 py-2 rounded-[10px]" style={{ background: "rgba(64,209,140,0.12)", color: "var(--hi-success,#40d18c)" }}>
                Subscribed to the daily digest
              </div>
            ) : (
              <div className="space-y-1">
                <label htmlFor={digestId} className="sr-only">
                  Email for daily Hoops Intel digest
                </label>
                <div className="flex flex-wrap gap-2">
                  <input
                    id={digestId}
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                      if (apiError) setApiError("");
                    }}
                    aria-invalid={emailError || apiError ? "true" : undefined}
                    aria-describedby={digestDescribedBy}
                    placeholder="you@domain.com"
                    className="flex-1 min-w-[min(100%,12rem)] min-h-11 px-3 py-2 rounded-[10px] text-xs bg-[var(--hi-surface-2,#0e1218)] text-[var(--hi-text,#f2f5fa)] border outline-none"
                    style={{ borderColor: "var(--hi-border,#252b36)" }}
                  />
                  <EnhancedButton onClick={() => void handleSubscribe()}>
                    {submitting ? "Signing up…" : "Subscribe"}
                  </EnhancedButton>
                </div>
                {emailError ? (
                  <p id="footer-email-err" className="text-xs text-rose-400" role="alert">
                    {emailError}
                  </p>
                ) : null}
                {apiError ? (
                  <p id="footer-digest-api-err" className="text-xs text-rose-400" role="alert">
                    {apiError}
                  </p>
                ) : null}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="enhanced-kicker mb-3">Explore</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              {FOOTER_QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs min-h-11 inline-flex items-center hover:opacity-80"
                  style={{ color: "var(--hi-text-secondary,#8594a8)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="desk-hairline mb-4" />
        <p className="text-xs text-center" style={{ color: "var(--hi-text-secondary,#8594a8)" }}>
          © {new Date().getFullYear()} Hoops Intel · Not affiliated with the NBA · Data for entertainment purposes
        </p>
      </div>
    </footer>
  );
}
