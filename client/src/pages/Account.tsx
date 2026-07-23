// Production account hub — profile, Pro status, Stripe billing portal, shortcuts.

import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ToolPageLayout from "../components/ToolPageLayout";
import AuthModal from "../components/AuthModal";
import {
  deleteMyPushSubscription,
  getFavorites,
  getMyPushSubscriptions,
  getUser,
  isSupabaseConfigured,
  patchMyPushSubscriptionFields,
  signOut,
  upsertMyPushSubscription,
  type User,
} from "../lib/supabaseClient";
import { getPreferences } from "../lib/userPreferences";
import { useSubscription, openBillingPortal } from "../lib/useSubscription";
import {
  DEFAULT_PUSH_TOPICS,
  FANTASY_ONLY_PUSH_TOPICS,
  TEAM_GAME_START_TOPICS,
  PUSH_TOPIC_OPTIONS,
  getDevicePushSubscription,
  subscribeDevicePush,
  unsubscribeDevicePush,
  vapidConfigured,
} from "../lib/webPushAccount";
import OpsReadinessPanel from "../components/OpsReadinessPanel";
import PushAlertGuide from "../components/PushAlertGuide";
import PushAlertHistory from "../components/PushAlertHistory";

function getStoredAuthToken(): string | null {
  if (typeof localStorage === "undefined") return null;
  return localStorage.getItem("hoops-intel-auth-token");
}

function isStripeConfigError(message: string): boolean {
  return message.includes("not configured") || message.includes("STRIPE_") || message.includes("Required env:");
}

function AccountPushAlerts({ userId }: { userId: string }) {
  const [topics, setTopics] = useState(() => new Set<string>(DEFAULT_PUSH_TOPICS));
  const [deviceEndpoint, setDeviceEndpoint] = useState<string | null>(null);
  const [perm, setPerm] = useState(
    () => (typeof Notification !== "undefined" ? Notification.permission : "default") as NotificationPermission,
  );
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>(() => getPreferences().favoriteTeams);

  /** All valid /rivals pairings (capped at 2), sorted tuples for server rival_pairs. */
  const rivalPairsForPush = (): [string, string][] => {
    const out: [string, string][] = [];
    const seen = new Set<string>();
    for (const p of getPreferences().rivalPairs.slice(0, 2)) {
      if (!p || p.mine.length !== 3 || p.rival.length !== 3) continue;
      const mine = p.mine.toUpperCase();
      const rival = p.rival.toUpperCase();
      if (mine === rival) continue;
      const [a, b] = [mine, rival].sort() as [string, string];
      const key = `${a}-${b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push([a, b]);
    }
    return out;
  };

  const rivalPairForPush = (): { a: string; b: string } | null => {
    const first = rivalPairsForPush()[0];
    return first ? { a: first[0], b: first[1] } : null;
  };

  const rivalFieldsForSync = (include: boolean) => {
    if (!include) {
      return { rival_abbr_a: null as string | null, rival_abbr_b: null as string | null, rival_pairs: [] as [string, string][] };
    }
    const pairs = rivalPairsForPush();
    const first = pairs[0];
    return {
      rival_abbr_a: first?.[0] ?? null,
      rival_abbr_b: first?.[1] ?? null,
      rival_pairs: pairs,
    };
  };

  const refreshLocal = async () => {
    const sub = await getDevicePushSubscription();
    setDeviceEndpoint(sub?.endpoint ?? null);
    if (typeof Notification !== "undefined") setPerm(Notification.permission);
    const rows = await getMyPushSubscriptions();
    if (sub) {
      const row = rows.find((r) => r.endpoint === sub.endpoint);
      if (row) {
        if (row.notify_topics?.length)
          setTopics(new Set(row.notify_topics.map((t) => t.toLowerCase())));
        else setTopics(new Set(DEFAULT_PUSH_TOPICS));
      }
    }
  };

  useEffect(() => {
    void refreshLocal();
    void (async () => {
      const local = getPreferences().favoriteTeams;
      if (local.length) setFavoriteTeams(local);
      try {
        const fav = await getFavorites();
        const merged = [...new Set([...local, ...fav.teams.map((t) => t.toUpperCase())])];
        if (merged.length) setFavoriteTeams(merged);
      } catch {
        /* local prefs only */
      }
    })();
  }, [userId]);

  const topicList = [...topics].sort();

  const toggleTopic = (id: string, on: boolean) => {
    setTopics((prev) => {
      const next = new Set(prev);
      if (on) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const handleRegister = async () => {
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      const prior = await getDevicePushSubscription();
      if (prior) {
        try {
          await deleteMyPushSubscription(prior.endpoint);
        } catch {
          /* best-effort cleanup before rotated endpoint */
        }
      }
      const { endpoint, p256dh, auth_key } = await subscribeDevicePush();
      const teams = await resolveTeamAbbrs();
      const notify_topics = topicList.length ? topicList : [...DEFAULT_PUSH_TOPICS];
      const wantsRival = notify_topics.map((t) => t.toLowerCase()).includes("rival");
      const rivals = rivalFieldsForSync(wantsRival);
      await upsertMyPushSubscription({
        user_id: userId,
        endpoint,
        p256dh,
        auth_key,
        team_abbr: teams[0] ?? null,
        team_abbrs: teams,
        notify_topics,
        ...rivals,
      });
      setDeviceEndpoint(endpoint);
      setTopics(new Set(notify_topics));
      setPerm("granted");
      setMsg(
        teams.length > 1
          ? `Device registered — tip alerts for ${teams.length} favorite teams.`
          : wantsRival && rivals.rival_pairs.length > 1
            ? `Device registered — ${rivals.rival_pairs.length} rival pairs synced for push.`
            : "This device is registered for browser push with your topic choices.",
      );
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not enable push");
    } finally {
      setBusy(false);
    }
  };

  const normalizeTeam = (raw: string): string | null => {
    let t = raw.trim().toUpperCase();
    if (t === "NY") t = "NYK";
    if (t === "SA") t = "SAS";
    return t.length === 3 ? t : null;
  };

  /** All My Pulse / local favorites (capped), first is legacy team_abbr. */
  const resolveTeamAbbrs = async (): Promise<string[]> => {
    const fav = await getFavorites();
    const merged = [
      ...fav.teams,
      ...getPreferences().favoriteTeams,
      ...favoriteTeams,
    ];
    const out: string[] = [];
    const seen = new Set<string>();
    for (const raw of merged) {
      const t = normalizeTeam(String(raw));
      if (!t || seen.has(t)) continue;
      seen.add(t);
      out.push(t);
      if (out.length >= 8) break;
    }
    return out;
  };

  const handleSaveTopics = async () => {
    if (!deviceEndpoint) {
      setErr("Enable push on this device first.");
      return;
    }
    if (topicList.length === 0) {
      setErr("Pick at least one alert type (or turn push off).");
      return;
    }
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      const wantsRival = topicList.map((t) => t.toLowerCase()).includes("rival");
      const rivals = rivalFieldsForSync(wantsRival);
      const teams = await resolveTeamAbbrs();
      await patchMyPushSubscriptionFields(deviceEndpoint, {
        notify_topics: topicList,
        team_abbr: teams[0] ?? null,
        team_abbrs: teams,
        ...rivals,
      });
      setMsg(
        wantsRival && rivals.rival_pairs.length === 0
          ? "Topics saved. Add a pairing on /rivals, then save again (or Sync rival) to target grudge alerts."
          : teams.length > 1
            ? `Topics updated — game-start / injury target ${teams.join(", ")}.`
            : wantsRival && rivals.rival_pairs.length > 1
              ? `Topics updated — ${rivals.rival_pairs.length} rival pairs synced${teams[0] ? ` · team ${teams[0]}` : ""}.`
              : `Topic preferences updated${teams[0] ? ` · game-start targets ${teams[0]}` : ""}.`,
      );
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not save topics");
    } finally {
      setBusy(false);
    }
  };

  const handleSyncRivalry = async () => {
    if (!deviceEndpoint) {
      setErr("Enable push on this device first.");
      return;
    }
    const pairs = rivalPairsForPush();
    if (!pairs.length) {
      setErr("Add a valid pairing on /rivals (two different 3-letter teams).");
      return;
    }
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      const rivals = rivalFieldsForSync(true);
      await patchMyPushSubscriptionFields(deviceEndpoint, rivals);
      setMsg(
        pairs.length > 1
          ? `${pairs.length} rival pairs saved on this subscription.`
          : "Rival pairing saved on this subscription.",
      );
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not sync rivalry");
    } finally {
      setBusy(false);
    }
  };

  const handleDisable = async () => {
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      const sub = await getDevicePushSubscription();
      const ep = sub?.endpoint ?? deviceEndpoint;
      if (ep) await deleteMyPushSubscription(ep);
      await unsubscribeDevicePush();
      setDeviceEndpoint(null);
      setMsg("Push disabled on this device.");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not disable push");
    } finally {
      setBusy(false);
    }
  };

  const handleClearRivalryPushFields = async () => {
    if (!deviceEndpoint) {
      setErr("Enable push on this device first.");
      return;
    }
    setErr("");
    setMsg("");
    setBusy(true);
    try {
      await patchMyPushSubscriptionFields(deviceEndpoint, {
        rival_abbr_a: null,
        rival_abbr_b: null,
        rival_pairs: [],
      });
      setMsg("Rival pairing fields cleared for this subscription (topics unchanged).");
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Could not clear rivalry");
    } finally {
      setBusy(false);
    }
  };

  const applyTopicPreset = (ids: readonly string[]) => {
    setErr("");
    setTopics(new Set(ids));
    setMsg("Preset applied locally — SAVE TOPICS ONLY or re-sync to persist.");
  };

  if (!vapidConfigured()) {
    return (
      <div
        id="browser-push"
        className="rounded-xl p-6 mb-6 scroll-mt-24"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="section-label mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          BROWSER PUSH (PLAYOFFS)
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          Web push is not configured in this build (set{" "}
          <code className="text-sky-400/90">VITE_VAPID_PUBLIC_KEY</code> to match server{" "}
          <code className="text-sky-400/90">VAPID_PUBLIC_KEY</code>). When enabled, alerts require HTTPS and browser
          permission. Email digest in the header bell still works.
        </p>
      </div>
    );
  }

  return (
    <div
      id="browser-push"
      className="rounded-xl p-6 mb-6 scroll-mt-24"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="section-label mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
        BROWSER PUSH (PLAYOFFS)
      </div>
      <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
        Works on <strong className="text-white/70 font-medium">HTTPS</strong> only; your browser must allow notifications
        for this site. Opt in to{" "}
        <strong className="text-white/70 font-medium">urgency-tier</strong> topics (elimination / clinchers). Volume
        stays capped. Team targeting uses your first My Pulse favorite when present.
      </p>
      <p className="text-xs mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
        Operators: configure VAPID + Supabase + push API per{" "}
        <code className="text-sky-400/80">references/push-notifications.md</code> — see also{" "}
        <code className="text-sky-400/80">.github/workflows/playoff-push.yml</code>.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="w-full text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,0.35)" }}>
          Quick presets
        </span>
        <button
          type="button"
          disabled={busy}
          onClick={() => applyTopicPreset(DEFAULT_PUSH_TOPICS)}
          className="min-h-[38px] px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/[0.12] hover:bg-white/[0.05] disabled:opacity-40"
        >
          Playoff urgency
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => applyTopicPreset(FANTASY_ONLY_PUSH_TOPICS)}
          className="min-h-[38px] px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/[0.12] hover:bg-white/[0.05] disabled:opacity-40"
        >
          Fantasy-only
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => applyTopicPreset(TEAM_GAME_START_TOPICS)}
          className="min-h-[38px] px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/[0.12] hover:bg-white/[0.05] disabled:opacity-40"
        >
          Team tip alerts
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => applyTopicPreset(PUSH_TOPIC_OPTIONS.map((o) => o.id))}
          className="min-h-[38px] px-3 rounded-lg text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/[0.12] hover:bg-white/[0.05] disabled:opacity-40"
        >
          All alerts
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {PUSH_TOPIC_OPTIONS.map((opt) => (
          <label
            key={opt.id}
            className="flex gap-3 items-start cursor-pointer rounded-lg px-2 py-2 hover:bg-white/[0.03]"
          >
            <input
              type="checkbox"
              className="mt-1 accent-sky-500"
              checked={topics.has(opt.id)}
              onChange={(e) => toggleTopic(opt.id, e.target.checked)}
            />
            <span>
              <span className="text-sm text-white/85 font-medium block">{opt.label}</span>
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                {opt.hint}
              </span>
            </span>
          </label>
        ))}
      </div>

      <p className="text-[11px] mb-4 leading-relaxed px-2" style={{ color: "rgba(255,255,255,0.38)" }}>
        Fantasy-only cohort: leave <strong className="text-white/65">Fantasy</strong> checked and uncheck Injury if you don&apos;t want infirmary blasts.&nbsp;
        Rival pings require enabling <strong className="text-white/65">Rival grudge alerts</strong> plus{" "}
        <a href="/rivals" className="text-sky-400/95 underline">
          /rivals
        </a>{" "}
        pairings — then tap sync below.
      </p>

      <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
        Permission:{" "}
        <span className={perm === "granted" ? "text-emerald-400" : "text-amber-400"}>{perm}</span>
        {deviceEndpoint ? " · This device registered" : ""}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => void handleRegister()}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {deviceEndpoint ? "RE-SYNC THIS DEVICE" : "ENABLE PUSH ON THIS DEVICE"}
        </button>
        <button
          type="button"
          disabled={busy || !deviceEndpoint}
          onClick={() => void handleSaveTopics()}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white/90 disabled:opacity-50"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          SAVE TOPICS ONLY
        </button>
        <button
          type="button"
          disabled={busy || !deviceEndpoint}
          onClick={() => void handleSyncRivalry()}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white/90 disabled:opacity-50"
          style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
        >
          SYNC RIVAL PAIR TO PUSH
        </button>
        <button
          type="button"
          disabled={busy || !deviceEndpoint}
          onClick={() => void handleClearRivalryPushFields()}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold text-white/80 disabled:opacity-50"
          style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          CLEAR RIVAL PAIR
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => void handleDisable()}
          className="min-h-[44px] px-4 py-2 rounded-lg text-xs font-semibold disabled:opacity-50"
          style={{ color: "#F43F5E", border: "1px solid rgba(244,63,94,0.35)" }}
        >
          DISABLE ON THIS DEVICE
        </button>
      </div>

      <PushAlertGuide />
      <PushAlertHistory favoriteTeams={favoriteTeams} />

      {msg ? (
        <p className="text-sm mt-3 text-emerald-400" role="status">
          {msg}
        </p>
      ) : null}
      {err ? (
        <p className="text-sm mt-3 text-rose-400" role="alert">
          {err}
        </p>
      ) : null}
    </div>
  );
}

export default function Account() {
  const [, setLocation] = useLocation();
  const sub = useSubscription();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [showAuth, setShowAuth] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [portalError, setPortalError] = useState("");
  const [stripeCheckoutReady, setStripeCheckoutReady] = useState<boolean | null>(null);

  useEffect(() => {
    void getUser().then(setUser);
  }, []);

  useEffect(() => {
    fetch("/api/ops-readiness")
      .then((r) => r.json())
      .then((b: { stripe?: { checkoutReady?: boolean } }) =>
        setStripeCheckoutReady(typeof b.stripe?.checkoutReady === "boolean" ? b.stripe.checkoutReady : null),
      )
      .catch(() => setStripeCheckoutReady(null));
  }, []);

  const refreshUser = () => {
    void getUser().then(setUser);
  };

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    sub.refreshSubscription();
    setLocation("/");
  };

  const handlePortal = async () => {
    setPortalError("");
    setPortalLoading(true);
    try {
      const url = await openBillingPortal();
      window.location.href = url;
    } catch (e) {
      setPortalError(e instanceof Error ? e.message : "Could not open billing portal");
      setPortalLoading(false);
    }
  };

  if (user === undefined) {
    return (
      <ToolPageLayout subtitle="ACCOUNT" maxWidth="lg" showRelated={false}>
        <div className="py-12 flex justify-center">
          <div
            className="w-8 h-8 rounded border-2 border-t-transparent animate-spin"
            style={{ borderColor: "#0EA5E9", borderTopColor: "transparent" }}
          />
        </div>
      </ToolPageLayout>
    );
  }

  if (!user || !getStoredAuthToken()) {
    return (
      <ToolPageLayout subtitle="ACCOUNT" maxWidth="lg" showRelated={false}>
        <div className="section-label mb-2" style={{ color: "#0EA5E9" }}>
          ACCOUNT
        </div>
        <h1 className="display-heading text-white text-3xl mb-3">Sign in to manage your desk</h1>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          Hoops Intel accounts power Pro billing, synced favorites, and optional digest settings. Nothing here is required to
          read the free edition.
        </p>
        {!isSupabaseConfigured ? (
          <div className="rounded-xl p-5 text-sm" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}>
            Accounts are not configured in this environment (missing Supabase keys).
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowAuth(true)}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-lg text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            SIGN IN OR CREATE ACCOUNT
          </button>
        )}
        {showAuth && (
          <AuthModal
            onClose={() => setShowAuth(false)}
            onAuth={() => {
              setShowAuth(false);
              refreshUser();
              sub.refreshSubscription();
            }}
          />
        )}
      </ToolPageLayout>
    );
  }

  return (
    <ToolPageLayout subtitle="ACCOUNT" maxWidth="lg" showRelated={false}>
      <div className="section-label mb-2" style={{ color: "#0EA5E9" }}>
        YOUR ACCOUNT
      </div>
      <h1 className="display-heading text-white text-3xl mb-8">Settings &amp; billing</h1>

      <OpsReadinessPanel />

      <div
        className="rounded-xl p-6 mb-6"
        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="section-label mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
          SIGNED IN AS
        </div>
        <div className="text-white font-medium mb-1">{user.email}</div>
        {user.user_metadata?.display_name && (
          <div className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            {user.user_metadata.display_name}
          </div>
        )}
        <button
          type="button"
          onClick={() => void handleSignOut()}
          className="mt-4 text-xs font-semibold px-3 py-2 rounded-lg min-h-[44px] sm:min-h-0 transition-colors hover:bg-white/10"
          style={{ color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.12)" }}
        >
          Sign out
        </button>
      </div>

      <div
        className="rounded-xl p-6 mb-6"
        style={{
          background: sub.isPro ? "rgba(16,185,129,0.06)" : "rgba(14,165,233,0.04)",
          border: `1px solid ${sub.isPro ? "rgba(16,185,129,0.25)" : "rgba(14,165,233,0.2)"}`,
        }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <div className="section-label" style={{ color: sub.isPro ? "#10B981" : "#0EA5E9" }}>
            HOOPS INTEL PRO
          </div>
          {!sub.loading && (
            <span
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                sub.isPro
                  ? "border-emerald-500/40 text-emerald-200 bg-emerald-500/10"
                  : "border-sky-500/35 text-sky-200 bg-sky-500/10"
              }`}
            >
              {sub.isPro ? "Active" : "Free tier"}
            </span>
          )}
        </div>
        {sub.loading ? (
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Checking subscription…
          </p>
        ) : sub.isPro ? (
          <>
            <p className="text-white font-medium mb-1">{sub.plan === "annual" ? "Annual plan" : "Monthly plan"}</p>
            {sub.renewsAt && (
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                {sub.cancelAtPeriodEnd ? "Access ends " : "Renews "}
                {sub.renewsAt.toLocaleDateString(undefined, { dateStyle: "medium" })}
                {sub.cancelAtPeriodEnd ? " (cancel at period end)" : ""}
              </p>
            )}
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Pro perks are active — manage payment method, invoices, or cancellation in Stripe.
            </p>
            <button
              type="button"
              disabled={portalLoading}
              onClick={() => void handlePortal()}
              className="w-full sm:w-auto min-h-[48px] px-5 py-2.5 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {portalLoading ? "OPENING STRIPE…" : "MANAGE BILLING & INVOICES"}
            </button>
            {portalError && (
              isStripeConfigError(portalError) ? (
                <p className="text-sm mt-3 text-amber-200" role="alert">
                  Billing portal isn&apos;t configured ({portalError}). Ops: set STRIPE_SECRET_KEY in production.
                </p>
              ) : (
                <p className="text-sm mt-3 text-rose-400" role="alert">
                  {portalError}
                </p>
              )
            )}
          </>
        ) : (
          <>
            <p className="text-sm mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Upgrade for early drops, ad-free reading, full Trade Value ranks, and deeper Ask Hoops Intel context.
            </p>
            {stripeCheckoutReady === false && (
              <p className="text-xs mb-4 px-3 py-2 rounded-lg text-amber-200/95" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}>
                Stripe checkout is pending ops on this deployment — upgrade buttons on /pro will stay disabled until env is wired.
              </p>
            )}
            {stripeCheckoutReady === true && (
              <p className="text-xs mb-4 px-3 py-2 rounded-lg text-emerald-200/95" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
                Checkout is ready — subscribe from the Pro page when you&apos;re ready to upgrade.
              </p>
            )}
            <a
              href="/pro"
              className="inline-flex min-h-[48px] items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)", fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {stripeCheckoutReady === false ? "VIEW PRO (OPS PENDING)" : "UPGRADE TO PRO"}
            </a>
          </>
        )}
      </div>

      {isSupabaseConfigured ? <AccountPushAlerts userId={user.id} /> : null}

      <div className="section-label mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
        SHORTCUTS
      </div>
      <ul className="space-y-2 text-sm">
        <li>
          <a href="/my-pulse" className="text-sky-400 underline hover:text-sky-300">
            My Pulse
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}> — favorites &amp; personalized edition</span>
        </li>
        <li>
          <a href="/unsubscribe" className="text-sky-400 underline hover:text-sky-300">
            Unsubscribe from digest
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)" }}> — morning email opt-out</span>
        </li>
        <li>
          <a href="/" className="text-sky-400 underline hover:text-sky-300">
            Today&apos;s desk
          </a>
        </li>
      </ul>
    </ToolPageLayout>
  );
}
