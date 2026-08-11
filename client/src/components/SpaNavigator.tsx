// SpaNavigator — turns the app's plain <a href> links into client-side
// navigations with native-feeling scroll behavior and chunk prefetching.
// Mounted once in App; renders nothing.

import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import {
  findAnchor,
  recallScroll,
  rememberScroll,
  restoreScroll,
  scrollKeyFor,
  scrollToHash,
  shouldIntercept,
} from "../lib/spaNavigation";
import { preloadHotRoutes, preloadRoute } from "../lib/routePreload";

export default function SpaNavigator() {
  const [location, navigate] = useLocation();
  const pendingHash = useRef<string>("");
  const lastPopTime = useRef(0);
  const skipNextScrollEffect = useRef(true);

  // Intercept qualifying link clicks and route them client-side.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = findAnchor(e.target);
      if (!anchor) return;
      const ok = shouldIntercept(
        e,
        { origin: anchor.origin, pathname: anchor.pathname, target: anchor.target, hasDownload: anchor.hasAttribute("download") },
        window.location.origin,
      );
      if (!ok) return;

      e.preventDefault();
      rememberScroll(scrollKeyFor(window.location.pathname, window.location.search), window.scrollY);

      const samePage = anchor.pathname === window.location.pathname && anchor.search === window.location.search;
      if (samePage) {
        if (anchor.hash) {
          history.replaceState(history.state, "", anchor.pathname + anchor.search + anchor.hash);
          scrollToHash(anchor.hash);
        }
        return;
      }

      pendingHash.current = anchor.hash;
      navigate(anchor.pathname + anchor.search + anchor.hash);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate]);

  // Own scroll restoration entirely — the browser's native popstate restore
  // would race the custom one and win with stale positions.
  useEffect(() => {
    const prior = history.scrollRestoration;
    history.scrollRestoration = "manual";
    return () => {
      history.scrollRestoration = prior;
    };
  }, []);

  // Back/forward: restore the remembered position for the entry being
  // re-entered. Restoration is driven from here (not the location effect)
  // because wouter's own popstate handler can flush React synchronously,
  // making listener/effect ordering unreliable. Double-rAF lands the restore
  // after the re-entered page has painted.
  useEffect(() => {
    const onPop = () => {
      lastPopTime.current = performance.now();
      pendingHash.current = "";
      const y = recallScroll(scrollKeyFor(window.location.pathname, window.location.search)) ?? 0;
      requestAnimationFrame(() => requestAnimationFrame(() => restoreScroll(y)));
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Continuously remember where the reader is on the current entry.
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.setTimeout(() => {
        ticking = false;
        rememberScroll(scrollKeyFor(window.location.pathname, window.location.search), window.scrollY);
      }, 250);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After each push-style route change: jump to hash or start at top.
  // Pop navigations are handled by the popstate listener above; the recency
  // guard covers whichever order React flushes the two in.
  useEffect(() => {
    if (skipNextScrollEffect.current) {
      // First mount — the browser already put us where we belong.
      skipNextScrollEffect.current = false;
      return;
    }
    if (performance.now() - lastPopTime.current < 500) return;
    if (pendingHash.current) {
      const hash = pendingHash.current;
      pendingHash.current = "";
      scrollToHash(hash);
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  // Warm the chunk for whatever link the pointer is considering.
  useEffect(() => {
    const onIntent = (e: Event) => {
      const anchor = findAnchor(e.target);
      if (!anchor || anchor.origin !== window.location.origin) return;
      preloadRoute(anchor.pathname);
    };
    document.addEventListener("pointerover", onIntent, { passive: true });
    document.addEventListener("touchstart", onIntent, { passive: true });
    return () => {
      document.removeEventListener("pointerover", onIntent);
      document.removeEventListener("touchstart", onIntent);
    };
  }, []);

  // Warm the most-travelled routes once the main thread is idle.
  useEffect(() => {
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window ? (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(cb, { timeout: 4000 }) : window.setTimeout(cb, 2500);
    const handle = idle(preloadHotRoutes);
    return () => {
      if ("cancelIdleCallback" in window) (window as Window & { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle as number);
      else window.clearTimeout(handle as number);
    };
  }, []);

  return null;
}
