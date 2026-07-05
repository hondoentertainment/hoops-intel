// Hook for polling live NBA scores from ESPN API
import { useState, useEffect, useCallback, useRef } from "react";
import { fetchScoreboard, type ESPNScoreboard } from "./espnApi";

const POLL_INTERVAL_LIVE = 20_000;   // 20s when games are in progress
const POLL_INTERVAL_IDLE = 300_000;  // 5min when no games active
const TICK = 10_000;                  // scheduler granularity

function isHidden(): boolean {
  return typeof document !== "undefined" && document.visibilityState === "hidden";
}

export function useLiveScores() {
  const [data, setData] = useState<ESPNScoreboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Freshest snapshot for the interval/visibility handlers without resubscribing
  // them on every fetch.
  const latest = useRef<ESPNScoreboard | null>(null);

  const refresh = useCallback(async () => {
    try {
      const result = await fetchScoreboard();
      latest.current = result;
      setData(result);
      setError(null);
    } catch (err: any) {
      setError(err?.message ?? "Failed to load scores");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    const run = () => {
      if (!cancelled) void refresh();
    };

    run();

    const maybePoll = () => {
      if (isHidden()) return; // don't poll ESPN in a backgrounded tab
      const snap = latest.current;
      const hasLive = snap?.games.some((g) => g.status === "in") ?? false;
      const elapsed = Date.now() - (snap?.fetchedAt ?? 0);
      const threshold = hasLive ? POLL_INTERVAL_LIVE : POLL_INTERVAL_IDLE;
      if (elapsed >= threshold) run();
    };

    const interval = setInterval(maybePoll, TICK);

    // Refetch immediately when the user returns to a stale tab.
    const onVisible = () => {
      if (isHidden()) return;
      const elapsed = Date.now() - (latest.current?.fetchedAt ?? 0);
      if (elapsed >= POLL_INTERVAL_LIVE) run();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      cancelled = true;
      clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [refresh]);

  return { data, loading, error, refresh };
}
