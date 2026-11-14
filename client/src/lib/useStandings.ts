import { useCallback, useEffect, useRef, useState } from "react";
import { fetchStandings } from "./espnApi";
import type { NbaStandings } from "./standings";

const REFRESH_MS = 5 * 60 * 1000;

export function useStandings() {
  const [data, setData] = useState<NbaStandings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchedAt = useRef(0);

  const refresh = useCallback(async () => {
    try {
      const next = await fetchStandings();
      fetchedAt.current = next.fetchedAt;
      setData(next);
      setError(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Live standings are unavailable";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      if (!cancelled) await refresh();
    })();
    const onVisible = () => {
      if (cancelled || document.visibilityState === "hidden") return;
      if (Date.now() - fetchedAt.current >= REFRESH_MS) void refresh();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [refresh]);

  return { data, loading, error, refresh };
}
