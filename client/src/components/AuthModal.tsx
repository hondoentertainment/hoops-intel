import { useState } from "react";
import { signIn, signUp, signInWithOAuth, isSupabaseConfigured } from "../lib/supabaseClient";

export default function AuthModal({ onClose, onAuth }: { onClose: () => void; onAuth: () => void }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isSupabaseConfigured) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.7)" }}>
        <div className="glass-card rounded-xl p-6 max-w-sm w-full mx-4" style={{ background: "rgba(5,13,26,0.98)" }}>
          <h2 className="display-heading text-white text-lg mb-3">Coming Soon</h2>
          <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
            User accounts are being set up. Check back soon for personalized favorites, synced reactions, and email digests.
          </p>
          <button onClick={onClose} className="w-full py-2 rounded-lg text-sm font-medium text-white" style={{ background: "#0EA5E9" }}>
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "rgba(0,0,0,0.7)" }} onClick={onClose}>
      <div className="glass-card rounded-xl p-6 max-w-sm w-full mx-4" style={{ background: "rgba(5,13,26,0.98)" }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="display-heading text-white text-lg">
            {mode === "signin" ? "Sign In" : "Create Account"}
          </h2>
          <button onClick={onClose} className="text-white/40 hover:text-white text-xl">&times;</button>
        </div>

        {/* OAuth buttons */}
        <div className="space-y-2 mb-4">
          <button
            onClick={() => signInWithOAuth("google")}
            className="w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
            style={{ background: "rgba(255,255,255,0.08)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            Continue with Google
          </button>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>or</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Display name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid rgba(255,255,255,0.1)" }}
          />

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-opacity"
            style={{ background: "#0EA5E9", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "..." : mode === "signin" ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
          {mode === "signin" ? "No account? " : "Already have an account? "}
          <button
            onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(""); }}
            className="font-medium" style={{ color: "#0EA5E9" }}
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
