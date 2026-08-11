// SPA navigation helpers — every nav link in the app is a plain <a href>, so a
// document-level interceptor (components/SpaNavigator) turns qualifying clicks
// into client-side route changes. These pure helpers decide what qualifies and
// manage scroll memory so back/forward feels native.

/** Paths that must stay full-document navigations (static files, APIs, embeds). */
export const NON_SPA_PATH_RE = /^\/(api\/|embed\.js$)|\.(xml|txt|json|js|css|svg|png|jpg|jpeg|webp|ico|pdf|webmanifest)$/i;

export interface ClickLike {
  button: number;
  metaKey: boolean;
  ctrlKey: boolean;
  shiftKey: boolean;
  altKey: boolean;
  defaultPrevented: boolean;
}

export interface AnchorLike {
  origin: string;
  pathname: string;
  target: string;
  hasDownload: boolean;
}

export function findAnchor(target: EventTarget | null): HTMLAnchorElement | null {
  if (!(target instanceof Element)) return null;
  return target.closest("a[href]");
}

export function shouldIntercept(event: ClickLike, anchor: AnchorLike, currentOrigin: string): boolean {
  if (event.defaultPrevented) return false;
  if (event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasDownload) return false;
  if (anchor.origin !== currentOrigin) return false;
  if (NON_SPA_PATH_RE.test(anchor.pathname)) return false;
  return true;
}

// ── Scroll memory (back/forward restoration across SPA navs) ──

const SCROLL_STORE_KEY = "hi-scroll-memory";
const SCROLL_STORE_LIMIT = 50;

type ScrollStore = Record<string, number>;

function readStore(): ScrollStore {
  try {
    const raw = sessionStorage.getItem(SCROLL_STORE_KEY);
    if (raw) return JSON.parse(raw) as ScrollStore;
  } catch {
    // ignore
  }
  return {};
}

export function scrollKeyFor(pathname: string, search: string): string {
  return `${pathname}${search}`;
}

export function rememberScroll(key: string, y: number): void {
  try {
    const store = readStore();
    store[key] = Math.round(y);
    const keys = Object.keys(store);
    if (keys.length > SCROLL_STORE_LIMIT) {
      for (const stale of keys.slice(0, keys.length - SCROLL_STORE_LIMIT)) delete store[stale];
    }
    sessionStorage.setItem(SCROLL_STORE_KEY, JSON.stringify(store));
  } catch {
    // ignore
  }
}

export function recallScroll(key: string): number | null {
  const store = readStore();
  return typeof store[key] === "number" ? store[key] : null;
}

/**
 * Scroll to an in-page anchor once it exists — lazy routes render after a
 * Suspense tick, so the element may not be in the DOM on the first frame.
 */
export function scrollToHash(hash: string, maxFrames = 60): void {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return;
  const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  let frames = 0;
  const attempt = () => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior, block: "start" });
      return;
    }
    if (frames++ < maxFrames) requestAnimationFrame(attempt);
  };
  attempt();
}

/** Restore a remembered scroll position once the page is tall enough to hold it. */
export function restoreScroll(y: number, maxFrames = 60): void {
  let frames = 0;
  const attempt = () => {
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    if (maxY >= y || frames >= maxFrames) {
      window.scrollTo(0, Math.min(y, Math.max(0, maxY)));
      return;
    }
    frames++;
    requestAnimationFrame(attempt);
  };
  attempt();
}
