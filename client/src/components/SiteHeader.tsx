import { type ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { useTheme } from "../contexts/ThemeContext";
import { MAIN_NAV_LINKS, HEADER_NAV_LINKS, PLAYOFFS_NAV_HREF, playoffsNavLabel } from "../lib/siteNav";
import { globalSearch, type SearchResult } from "../lib/searchUtils";
import AuthModal from "./AuthModal";
import { getUser, type User } from "../lib/supabaseClient";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { subscribeDigestEmail, readDigestSignupHint } from "../lib/subscribeDigest";
import { useToast } from "../contexts/ToastContext";
import {
  pushRecentSearch,
  readRecentSearches,
  POPULAR_SEARCH_DESTINATIONS,
} from "../lib/searchHistory";

export type SiteHeaderProps = {
  /** Secondary line under brand (e.g. ARCHIVE, DAILY INTELLIGENCE). */
  subtitle?: string;
  /** Override main brand line (default: HOOPS INTEL). */
  brandTitle?: string;
  /** Badge text on the right cluster (edition date). */
  editionBadge?: string;
  /** Emphasized subtitle (amber) for playoffs-style pages */
  subtitleAccent?: boolean;
  /** Toolbar content before Search (e.g. My Pulse favorites + prefs). */
  toolbarExtra?: ReactNode;
};

function notificationEmailValid(raw: string) {
  const v = raw.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(v);
}

function NotificationBell({ idPrefix }: { idPrefix: string }) {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const emailId = `${idPrefix}-digest-email`;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(() => readDigestSignupHint());

  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(showModal, panelRef);

  useEffect(() => {
    if (!showModal) return;
    function onMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setShowModal(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowModal(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showModal]);

  const handleSubscribe = async () => {
    if (!notificationEmailValid(email)) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setEmailError("");
    setApiError("");
    setSubmitting(true);
    const result = await subscribeDigestEmail(email);
    setSubmitting(false);
    if (result.ok) {
      setSubscribed(true);
      setShowModal(false);
      toast("Subscribed — morning digest at 5 AM PST");
    } else {
      setApiError(result.error);
    }
  };

  const digestDescribedBy = [emailError ? `${emailId}-err` : "", apiError ? `${emailId}-api` : "", `${emailId}-hint`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative" data-notification-bell-root="1" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setShowModal(!showModal)}
        className="relative min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-colors hover:bg-white/10 sm:min-h-0 sm:min-w-0 sm:p-1.5"
        title="Notifications"
        aria-label="Notifications menu"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ color: subscribed ? "#0EA5E9" : "rgba(255,255,255,0.5)" }}
          aria-hidden
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {subscribed && (
          <span className="absolute top-1 right-1 sm:top-0.5 sm:right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
        )}
      </button>

      {showModal && (
        <div
          ref={panelRef}
          className="absolute right-0 top-full mt-2 w-[min(100vw-1.5rem,18rem)] rounded-lg overflow-hidden shadow-xl z-[60]"
          style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.1)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Notifications"
        >
          <div className="p-4">
            <div className="section-label mb-3">NOTIFICATIONS</div>

            <p className="text-[11px] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.45)" }}>
              <span className="text-white/60 font-medium">Email digest:</span> morning drop at 5 AM PST (sign up below).
              Push alerts use a separate flow:{" "}
              <span className="text-white/60 font-medium">sign in</span>, then{" "}
              <a href="/account#browser-push" className="underline text-sky-400/95">
                Account → Browser push
              </a>{" "}
              to register this device and choose topics (elimination, clinchers, injury wire, fantasy).&nbsp;
              <a href="/playoffs" className="underline text-sky-400/95">
                Playoff board →
              </a>
            </p>

            <div className="mb-4">
              <a
                href="/account#browser-push"
                className="block w-full text-left px-3 py-2 rounded text-xs font-medium transition-colors min-h-[44px] sm:min-h-0 flex items-center"
                style={{
                  background: "rgba(14,165,233,0.1)",
                  color: "#0EA5E9",
                  border: "1px solid rgba(14,165,233,0.2)",
                }}
              >
                Set up browser push & topics →
              </a>
            </div>

            <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
              Daily email digest at 5 AM PST
            </p>

            {subscribed ? (
              <div className="px-3 py-2 rounded text-xs" style={{ background: "rgba(16,185,129,0.1)", color: "#10B981" }}>
                ✓ Subscribed to daily digest
              </div>
            ) : (
              <div className="space-y-1">
                <label htmlFor={emailId} className="text-xs sr-only">
                  Email for daily digest
                </label>
                <span id={`${emailId}-hint`} className="sr-only">
                  We'll only use this for the Hoops Intel morning digest.
                </span>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                  <input
                    id={emailId}
                    type="email"
                    autoComplete="email"
                    aria-invalid={emailError || apiError ? "true" : undefined}
                    aria-describedby={digestDescribedBy}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                      if (apiError) setApiError("");
                    }}
                    placeholder="you@domain.com"
                    className="min-h-[44px] flex-1 min-w-[8rem] px-2 py-2 rounded text-xs bg-white/5 text-white border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 sm:min-h-0 sm:py-1.5"
                  />
                  <button
                    type="button"
                    onClick={() => void handleSubscribe()}
                    disabled={submitting}
                    className="min-h-[44px] px-3 py-2 rounded text-xs font-semibold text-white sm:min-h-0 disabled:opacity-50"
                    style={{ background: "#0EA5E9" }}
                  >
                    {submitting ? "…" : "Subscribe"}
                  </button>
                </div>
                {emailError ? (
                  <p id={`${emailId}-err`} className="text-xs text-rose-400" role="alert">
                    {emailError}
                  </p>
                ) : null}
                {apiError ? (
                  <p id={`${emailId}-api`} className="text-xs text-rose-400" role="alert">
                    {apiError}
                  </p>
                ) : null}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(open);
  useFocusTrap(open, panelRef);

  useEffect(() => {
    if (open) {
      queueMicrotask(() => inputRef.current?.focus());
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setRecentSearches(readRecentSearches());
    }
  }, [open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(globalSearch(query));
      setSelectedIndex(0);
    }, 150);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
        return;
      }
      if (results.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && results[selectedIndex]?.link) {
        e.preventDefault();
        pushRecentSearch(query);
        window.location.href = results[selectedIndex].link!;
        onClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, results, selectedIndex, query]);

  if (!open) return null;

  const iconForType = (type: string) => {
    switch (type) {
      case "player":
        return "👤";
      case "team":
        return "🏀";
      case "game":
        return "📊";
      case "injury":
        return "🏥";
      case "story":
        return "📰";
      default:
        return "📌";
    }
  };

  const openRecent = (term: string) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  return (
    <div
      id="site-search-root"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-search-heading"
        className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl"
        style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="site-search-heading" className="sr-only">
          Search Hoops Intel
        </h2>
        <div
          className="flex flex-wrap items-center gap-3 px-4 py-3 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" aria-hidden>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <label htmlFor="site-search-input" className="sr-only">
            Query
          </label>
          <input
            ref={inputRef}
            id="site-search-input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search players, teams, stories..."
            className="flex-1 min-w-[40%] min-h-[44px] bg-transparent text-white text-base sm:text-sm outline-none placeholder-white/30 sm:min-h-0"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <span
            className="text-xs px-1.5 py-1 rounded whitespace-nowrap"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
          >
            ↑↓ · Esc
          </span>
        </div>
        <div className="max-h-[min(20rem,50vh)] overflow-y-auto overscroll-contain">
          {results.length === 0 && query.length >= 2 && (
            <div className="px-4 py-8 text-center text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              No results found
            </div>
          )}
          {results.length === 0 && query.length < 2 && (
            <div className="px-4 py-4 space-y-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Popular
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCH_DESTINATIONS.map((d) => (
                    <a
                      key={d.href}
                      href={d.href}
                      className="text-xs px-3 py-2 rounded-lg min-h-[36px] inline-flex items-center"
                      style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
                      onClick={() => onClose()}
                    >
                      {d.label}
                    </a>
                  ))}
                </div>
              </div>
              {recentSearches.length > 0 && (
                <div>
                  <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Recent
                  </div>
                  <div className="space-y-1">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        type="button"
                        className="block w-full text-left text-xs px-3 py-2 rounded-lg min-h-[40px] hover:bg-white/5"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        onClick={() => openRecent(term)}
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-xs text-center pt-2" style={{ color: "rgba(255,255,255,0.25)" }}>
                Type at least two characters to search
              </p>
            </div>
          )}
          {results.map((r, i) => (
            <a
              key={i}
              href={r.link || "#"}
              className="flex items-center gap-3 px-4 py-3 min-h-[48px] hover:bg-white/5 transition-colors cursor-pointer"
              style={{ background: i === selectedIndex ? "rgba(14,165,233,0.12)" : undefined }}
              onClick={() => {
                if (r.link) {
                  pushRecentSearch(query);
                  onClose();
                }
              }}
            >
              <span className="text-base" aria-hidden>
                {iconForType(r.type)}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white truncate">{r.title}</div>
                <div className="text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {r.subtitle}
                </div>
              </div>
              {r.date && (
                <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {r.date}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Route-only match (ignore #hash home anchors). */
function navRouteMatches(href: string, pathname: string) {
  if (href.includes("#")) {
    const base = href.split("#")[0] || "";
    if (!base || base === "/") return false;
    return pathname === base || pathname.startsWith(`${base}/`);
  }
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navAriaCurrent(href: string, pathname: string): { "aria-current": "page" } | undefined {
  return navRouteMatches(href, pathname) ? { "aria-current": "page" } : undefined;
}

export default function SiteHeader({
  subtitle = "DAILY INTELLIGENCE",
  brandTitle = "HOOPS INTEL",
  editionBadge,
  subtitleAccent = false,
  toolbarExtra,
}: SiteHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [sessionUser, setSessionUser] = useState<User | null | undefined>(undefined);
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [locationPath] = useLocation();
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  useBodyScrollLock(mobileOpen);
  useFocusTrap(mobileOpen, mobilePanelRef);

  useEffect(() => {
    void getUser().then(setSessionUser);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target as HTMLElement)?.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (!typing && e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    const openSearch = () => setSearchOpen(true);
    document.addEventListener("keydown", handler);
    window.addEventListener("hi-open-search", openSearch);
    return () => {
      document.removeEventListener("keydown", handler);
      window.removeEventListener("hi-open-search", openSearch);
    };
  }, [mobileOpen]);

  const navLinkClass =
    "text-xs font-medium transition-colors hover:text-[#0EA5E9] px-3 py-2 rounded-lg min-h-[44px] flex items-center md:min-h-0 md:inline-flex md:py-1 md:px-0 [&:focus-visible]:outline [&:focus-visible]:outline-offset-2 [&:focus-visible]:outline-sky-500";

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          background: "var(--hi-header-bg, rgba(5, 13, 26, 0.95))",
          borderColor: "var(--hi-border-soft, rgba(255,255,255,0.08))",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-3 h-14 min-h-[56px]">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <button
                type="button"
                className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-sky-500"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  {mobileOpen ? (
                    <path d="M18 6L6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>

              <a href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0 py-2">
                <div
                  className="w-8 h-8 rounded flex items-center justify-center font-bold text-white text-sm shrink-0"
                  style={{ background: "linear-gradient(135deg, #0EA5E9, #0284C7)" }}
                >
                  HI
                </div>
                <div className="min-w-0">
                  <div className="display-heading text-[var(--hi-heading,#ffffff)] text-base sm:text-lg leading-none truncate">
                    {brandTitle}
                  </div>
                  <div
                    className="section-label !text-[max(10px,0.625rem)]"
                    style={{
                      fontSize: "0.6rem",
                      color: subtitleAccent ? "#F59E0B" : undefined,
                    }}
                  >
                    {subtitle}
                  </div>
                </div>
              </a>
            </div>

            <nav className="hidden md:flex items-center gap-3 xl:gap-5" aria-label="Primary">
              {HEADER_NAV_LINKS.map(({ label, href }) => {
                const navLabel = href === PLAYOFFS_NAV_HREF ? playoffsNavLabel() : label;
                return (
                <a
                  key={label}
                  href={href}
                  className={navLinkClass}
                  style={{
                    color: navRouteMatches(href, locationPath) ? "#0EA5E9" : "rgba(255,255,255,0.5)",
                  }}
                  {...navAriaCurrent(href, locationPath)}
                >
                  {navLabel}
                </a>
                );
              })}
              <details className="relative group">
                <summary
                  className={`${navLinkClass} list-none cursor-pointer [&::-webkit-details-marker]:hidden`}
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  More
                </summary>
                <div
                  className="absolute right-0 top-full mt-2 min-w-[11rem] rounded-lg py-2 shadow-xl z-[60]"
                  style={{ background: "#0A1628", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {MAIN_NAV_LINKS.filter((l) => !HEADER_NAV_LINKS.some((h) => h.href === l.href)).map(({ label, href }) => (
                    <a
                      key={`more-${label}`}
                      href={href}
                      className="block px-4 py-2.5 text-xs font-medium transition-colors hover:bg-white/5 hover:text-sky-400"
                      style={{
                        color: navRouteMatches(href, locationPath) ? "#0EA5E9" : "rgba(255,255,255,0.75)",
                      }}
                      {...navAriaCurrent(href, locationPath)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </details>
            </nav>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {toolbarExtra}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 min-h-[44px] px-3 py-2 rounded-lg text-xs transition-colors hover:bg-white/10 sm:min-h-0 sm:py-1.5"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}
                aria-haspopup="dialog"
                aria-label="Open search"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <span className="hidden sm:inline">Search</span>
                <span className="hidden lg:inline px-1 py-0.5 rounded text-[10px]" style={{ background: "rgba(255,255,255,0.08)" }}>
                  ⌘K
                </span>
              </button>

              <button
                type="button"
                onClick={toggleTheme}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg transition-colors hover:bg-white/10 sm:min-h-0 sm:min-w-0 sm:p-1.5"
                title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" aria-hidden>
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" aria-hidden>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>

              <NotificationBell idPrefix="nav-bell" />

              {sessionUser === undefined ? (
                <span
                  className="hidden sm:inline-block w-14 h-8 rounded-lg animate-pulse shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  aria-hidden
                />
              ) : sessionUser ? (
                <a
                  href="/account"
                  className="hidden sm:flex items-center gap-1 min-h-[44px] px-2.5 py-2 rounded-lg text-xs font-medium transition-colors hover:bg-white/10 sm:min-h-0 sm:py-1.5"
                  style={{ background: "rgba(14,165,233,0.12)", color: "#7dd3fc", border: "1px solid rgba(14,165,233,0.25)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Account
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowAuth(true)}
                  aria-label="Sign in to your account"
                  className="hidden sm:flex items-center gap-1 min-h-[44px] px-2.5 py-2 rounded-lg text-xs font-medium transition-colors hover:bg-white/10 sm:min-h-0 sm:py-1.5"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Sign In
                </button>
              )}

              {editionBadge ? (
                <div
                  className="hidden sm:block px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-medium whitespace-nowrap"
                  style={{ background: "rgba(14,165,233,0.15)", color: "#0EA5E9", border: "1px solid rgba(14,165,233,0.3)" }}
                >
                  {editionBadge}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[90] md:hidden" role="presentation">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div
            ref={mobilePanelRef}
            role="navigation"
            aria-label="Sections"
            className="absolute top-14 left-0 right-0 max-h-[min(70vh,28rem)] overflow-y-auto pb-[env(safe-area-inset-bottom)] border-t border-white/10 shadow-xl"
            style={{ background: "var(--hi-mobile-sheet, #081018)" }}
          >
            <div className="container py-3 flex flex-col gap-1">
              <a href="/" className="text-sm font-semibold text-sky-400 py-3 px-3 rounded-lg hover:bg-white/5" onClick={() => setMobileOpen(false)}>
                Today’s desk →
              </a>
              {MAIN_NAV_LINKS.map(({ label, href }) => {
                const active = navRouteMatches(href, locationPath);
                const navLabel = href === PLAYOFFS_NAV_HREF ? playoffsNavLabel() : label;
                return (
                  <a
                    key={`m-${label}`}
                    href={href}
                    className="py-3 px-3 rounded-lg text-sm hover:bg-white/5 min-h-[48px] flex items-center"
                    style={{ color: active ? "#38BDF8" : "rgba(255,255,255,0.85)" }}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {navLabel}
                  </a>
                );
              })}
              {sessionUser ? (
                <a
                  href="/account"
                  className="py-3 px-3 rounded-lg text-sm hover:bg-white/5 text-sky-400 font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  Account
                </a>
              ) : (
                <div className="mt-2 pt-3 border-t border-white/10">
                  <p className="px-3 pb-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Sync favorites, reactions, and push alerts across devices.
                  </p>
                  <button
                    type="button"
                    className="w-full text-left py-3 px-3 rounded-lg text-sm font-semibold text-sky-400 hover:bg-white/5 min-h-[48px]"
                    onClick={() => {
                      setMobileOpen(false);
                      setShowAuth(true);
                    }}
                  >
                    Sign in →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onAuth={() => {
            setShowAuth(false);
            toast("Signed in successfully");
            void getUser().then(setSessionUser);
          }}
        />
      )}
    </>
  );
}
