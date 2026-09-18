import { useState, type ReactNode } from "react";
import AuthModal from "./AuthModal";
import { EnhancedButton } from "./enhanced/EnhancedUi";
import {
  FUNNEL_STEPS,
  guestFunnelCopy,
  signedInNextCopy,
  type FunnelPage,
} from "../lib/guestAuth";

export function FunnelSteps({ current }: { current: "guest" | "account" | "pro" }) {
  return (
    <ol className="flex flex-wrap items-center gap-1.5 text-xs" data-testid="funnel-steps">
      {FUNNEL_STEPS.map((step, i) => {
        const active = step.id === current;
        const label = (
          <span
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full font-semibold"
            style={{
              background: active ? "var(--hi-surface-2,#f3f3f0)" : "transparent",
              color: active ? "var(--hi-text,#0a0a0a)" : "var(--hi-muted,#5c5c58)",
              border: active ? "1px solid rgba(10,10,10,0.08)" : "1px solid transparent",
            }}
          >
            {step.label}
          </span>
        );
        return (
          <li key={step.id} className="inline-flex items-center gap-1.5">
            {i > 0 ? <span style={{ color: "var(--hi-muted,#5c5c58)" }}>→</span> : null}
            {step.href && !active ? (
              <a href={step.href} className="hover:underline" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
                {label}
              </a>
            ) : (
              label
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function GuestNotice({
  kicker,
  title,
  body,
  page,
  showSignIn = true,
  accountHref = "/account",
  proHref = "/pro",
  onAuth,
  children,
}: {
  kicker?: string;
  title?: string;
  body?: string;
  page?: FunnelPage;
  showSignIn?: boolean;
  accountHref?: string;
  proHref?: string;
  onAuth?: () => void;
  children?: ReactNode;
}) {
  const [showAuth, setShowAuth] = useState(false);
  const copy = page ? guestFunnelCopy(page) : null;

  return (
    <div className="hi-notice-info mb-6 space-y-3" data-testid="guest-notice" role="status">
      <FunnelSteps current="guest" />
      <p className="enhanced-kicker">{kicker ?? copy?.kicker ?? "Signed-out desk"}</p>
      <p className="text-sm font-semibold hi-title text-[var(--hi-text,#0a0a0a)]">
        {title ?? copy?.title ?? "Sign in to keep this desk"}
      </p>
      <p className="text-sm">{body ?? copy?.body}</p>
      <div className="flex flex-wrap gap-2">
        {showSignIn ? (
          <EnhancedButton onClick={() => setShowAuth(true)}>Sign in</EnhancedButton>
        ) : null}
        <EnhancedButton href={accountHref} variant="ghost">
          Account
        </EnhancedButton>
        {proHref ? (
          <EnhancedButton href={proHref} variant="ghost">
            Hoops Intel Pro
          </EnhancedButton>
        ) : null}
        {children}
      </div>
      {showAuth ? (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onAuth={() => {
            setShowAuth(false);
            onAuth?.();
          }}
        />
      ) : null}
    </div>
  );
}

export function SignedInNextNotice({
  page,
  kicker,
  title,
  body,
}: {
  page: FunnelPage;
  kicker?: string;
  title?: string;
  body?: string;
}) {
  const copy = signedInNextCopy(page);
  return (
    <div className="hi-notice-info mb-6 space-y-3" data-testid="signed-in-next" role="status">
      <FunnelSteps current={page === "pro" ? "pro" : "account"} />
      <p className="enhanced-kicker">{kicker ?? copy.kicker}</p>
      <p className="text-sm font-semibold hi-title text-[var(--hi-text,#0a0a0a)]">{title ?? copy.title}</p>
      <p className="text-sm">{body ?? copy.body}</p>
      <div className="flex flex-wrap gap-2">
        {page !== "account" ? (
          <EnhancedButton href="/account" variant="ghost">
            Account
          </EnhancedButton>
        ) : null}
        {page !== "pro" ? <EnhancedButton href="/pro">Go Pro</EnhancedButton> : null}
      </div>
    </div>
  );
}
