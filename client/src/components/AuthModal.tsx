import { useEffect, useRef, useState } from "react";
import { signIn, signUp, signInWithOAuth, isSupabaseConfigured } from "../lib/supabaseClient";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";

export default function AuthModal({ onClose, onAuth }: { onClose: () => void; onAuth: () => void }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(true);
  useFocusTrap(true, panelRef);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isSupabaseConfigured) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.7)" }}
        onClick={onClose}
      >
        <div
          ref={panelRef}
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="auth-coming-title"
          className="glass-card rounded-xl p-6 max-w-sm w-full"
          style={{ background: "rgba(5,13,26,0.98)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 id="auth-coming-title" className="display-heading text-white text-lg mb-3">
            Coming Soon
          </h2>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            User accounts are being set up. Check back soon for personalized favorites, synced reactions, and email
            digests.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2 rounded-lg text-sm font-medium text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-sky-500"
            style={{ background: "#0EA5E9" }}
          >
            Got it
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      if (mode === "signup") {
        await signUp(email, password, name);
      } else {
        await signIn(email, password);
      }
      onAuth();
      onClose();
    } catch (err: any) {
      setError(err.message ?? "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }} onClick={onClose}>
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="glass-card rounded-xl p-6 max-w-sm w-full max-h-[min(90vh,40rem)] overflow-y-auto outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
        style={{ background: "rgba(5,13,26,0.98)" }}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="auth-modal-title" className="display-heading text-white text-lg">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h2>
          <button type="button" onClick={onClose} aria-label="Close sign in dialog" className="text-white/40 hover:text-white text-xl px-3 py-1 min-h-[44px] rounded-lg">
            &times;
          </button>
        </div>

        <div className="space-y-2 mb-4">
          <button
            type="button"
            onClick={() => signInWithOAuth("google")}
            className="w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 min-h-[44px] hover:opacity-90"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Continue with Google
          </button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            or
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <div className="space-y-1">
              <label htmlFor="auth-name" className="text-xs font-medium block" style={{ color: "rgba(255,255,255,0.6)" }}>
                Display name
              </label>
              <input
                id="auth-name"
                type="text"
                autoComplete="name"
                placeholder="Jordan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg text-sm outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 min-h-[44px]"
                style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
          )}
          <div className="space-y-1">
            <label htmlFor="auth-email" className="text-xs font-medium block" style={{ color: "rgba(255,255,255,0.6)" }}>
              Email
            </label>
            <input
              id="auth-email"
              type="email"
              autoComplete="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 min-h-[44px]"
              style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="auth-password" className="text-xs font-medium block" style={{ color: "rgba(255,255,255,0.6)" }}>
              Password (min 6 characters)
            </label>
            <input
              id="auth-password"
              type="password"
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 min-h-[44px]"
              style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          </div>

          {error && (
            <p className="text-xs text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-opacity min-h-[44px] focus-visible:ring-2 focus-visible:ring-sky-400"
            style={{ background: "#0EA5E9", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "…" : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {mode === "signin" ? "No account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError("");
            }}
            className="font-medium hover:underline"
            style={{ color: "#0EA5E9" }}
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
