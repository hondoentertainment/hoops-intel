import { useState } from "react";
import { EnhancedButton } from "./enhanced/EnhancedUi";
import { FOOTER_QUICK_LINKS, TRUST_FOOTER_LINKS, type MainNavLink } from "../lib/siteNav";
import { pulseEdition } from "../lib/pulseData";
import { subscribeDigestEmail, readDigestSignupHint } from "../lib/subscribeDigest";
import { editionHourLabel } from "../lib/pacificTime";
import { bettingDisclaimer } from "../lib/bettingLineStory";
import { useToast } from "../contexts/ToastContext";

const FOOTER_GROUPS: { title: string; hrefs: string[] }[] = [
  { title: "Daily", hrefs: ["/", "/tonight", "/archive", "/ask", "/feed.xml"] },
  { title: "Data", hrefs: ["/#pulse-index", "/players", "/injuries", "/my-pulse", "/pulse-methodology"] },
  { title: "Play", hrefs: ["/pick-em", "/badges", "/82-0", "/trade-simulator", "/clutch"] },
  { title: "About", hrefs: ["/tools", "/watch-guide", "/pro"] },
];

function footerColumns(): { title: string; links: MainNavLink[] }[] {
  const used = new Set<string>();
  const columns = FOOTER_GROUPS.map((group) => {
    const links = group.hrefs
      .map((href) => FOOTER_QUICK_LINKS.find((link) => link.href === href))
      .filter((link): link is MainNavLink => Boolean(link));
    links.forEach((link) => used.add(link.href));
    return { title: group.title, links };
  });
  const rest = FOOTER_QUICK_LINKS.filter((link) => !used.has(link.href));
  if (rest.length > 0) columns[columns.length - 1]?.links.push(...rest);
  return columns;
}

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

  const columns = footerColumns();

  return (
    <footer className="py-10 mt-8 border-t" style={{ borderColor: "var(--hi-hairline, #E4E0D6)", background: "var(--hi-canvas-soft, #FBF9F4)" }}>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="min-w-0 col-span-2 md:col-span-1">
            <a href="/" className="hi-masthead-word text-2xl">Hoops Intel</a>
            <p className="text-sm mt-2 mb-3" style={{ color: "var(--hi-muted,#686359)" }}>
              Daily NBA intelligence. Scores via ESPN; editions AI-written.
            </p>
            <p className="text-xs mb-3" style={{ color: "var(--hi-muted,#686359)" }}>
              {pulseEdition.edition} · {pulseEdition.date}
            </p>
            <p className="enhanced-kicker mb-2">Daily digest</p>
            <p className="text-xs mb-3" style={{ color: "var(--hi-text-secondary,#5c5c58)" }}>
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
                    className="desk-field flex-1 min-w-[min(100%,12rem)] min-h-11 px-3 py-2 text-xs outline-none"
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

          {columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="enhanced-kicker mb-3">{column.title}</p>
              <div className="flex flex-col">
                {column.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm min-h-11 inline-flex items-center"
                    style={{ color: "var(--hi-text,#14120B)" }}
                  >
                    {link.label}
                  </a>
                ))}
                {column.title === "About" ? (
                  <a href="/performance" className="text-sm min-h-11 inline-flex items-center" style={{ color: "var(--hi-text,#14120B)" }}>
                    AI Performance
                  </a>
                ) : null}
                {column.title === "Daily" ? (
                  <a href="/print-edition" className="text-sm min-h-11 inline-flex items-center" style={{ color: "var(--hi-text,#14120B)" }}>
                    Print Edition
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="desk-hairline mb-4" />
        <nav aria-label="About Hoops Intel" className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
          {TRUST_FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm min-h-11 inline-flex items-center"
              style={{ color: "var(--hi-text,#14120B)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs mb-2" style={{ color: "var(--hi-muted,#686359)" }}>
          {bettingDisclaimer()}
        </p>
        <p className="text-xs" style={{ color: "var(--hi-muted,#686359)" }}>
          © {new Date().getFullYear()} Hoops Intel · Not affiliated with the NBA · Data for entertainment purposes
        </p>
      </div>
    </footer>
  );
}
