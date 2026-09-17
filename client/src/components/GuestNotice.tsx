import { useState, type ReactNode } from "react";
import AuthModal from "./AuthModal";
import { EnhancedButton } from "./enhanced/EnhancedUi";

export function GuestNotice({
  kicker = "Signed-out desk",
  title,
  body,
  showSignIn = true,
  proHref,
  children,
}: {
  kicker?: string;
  title: string;
  body: string;
  showSignIn?: boolean;
  proHref?: string;
  children?: ReactNode;
}) {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="hi-notice-info mb-6 space-y-3" data-testid="guest-notice" role="status">
      <p className="enhanced-kicker">{kicker}</p>
      <p className="text-sm font-semibold hi-title text-[var(--hi-text,#0a0a0a)]">{title}</p>
      <p className="text-sm">{body}</p>
      <div className="flex flex-wrap gap-2">
        {showSignIn ? (
          <EnhancedButton onClick={() => setShowAuth(true)}>Sign in</EnhancedButton>
        ) : null}
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
          onAuth={() => setShowAuth(false)}
        />
      ) : null}
    </div>
  );
}
