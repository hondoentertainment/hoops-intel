import { useLocation } from "wouter";
import { MOBILE_BOTTOM_NAV_LINKS, PLAYOFFS_NAV_HREF, playoffsNavLabel } from "../lib/siteNav";
import { hapticTap } from "../lib/haptic";

function NavIcon({ label, href }: { label: string; href: string }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  if (label === "Today") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  }
  if (label === "Scores") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <line x1="7" y1="9" x2="10" y2="9" />
        <line x1="14" y1="15" x2="17" y2="15" />
      </svg>
    );
  }
  if (href === PLAYOFFS_NAV_HREF) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    );
  }
  if (label === "My Pulse") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );
  }
  if (label === "Picks" || label === "Pick 'Em") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    );
  }
  if (label === "Live") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }
  if (label === "Compare") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden {...common}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function linkActive(href: string, location: string) {
  const base = href.split("#")[0] || "/";
  if (base === "/") return location === "/" || (href.includes("#") && location === "/");
  return location === base || location.startsWith(`${base}/`);
}

export default function MobileBottomNav() {
  const [location] = useLocation();

  return (
    <nav
      className="mobile-bottom-nav fixed bottom-0 left-0 right-0 z-50 md:hidden border-t"
      style={{
        paddingBottom: "env(safe-area-inset-bottom)",
        background: "rgba(5,13,26,0.94)",
        borderColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(14px)",
      }}
      aria-label="Primary mobile navigation"
    >
      <div className="grid grid-cols-5">
        {MOBILE_BOTTOM_NAV_LINKS.map((link) => {
          const active = linkActive(link.href, location);
          const navLabel = link.href === PLAYOFFS_NAV_HREF ? playoffsNavLabel() : link.label;
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="mobile-bottom-nav-item relative min-h-[56px] flex flex-col items-center justify-center gap-0.5 text-[10px] font-semibold tracking-wide active:scale-[0.97] transition-transform"
              style={{ color: active ? "#38BDF8" : "rgba(255,255,255,0.52)" }}
              onClick={() => hapticTap()}
            >
              {active && (
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full"
                  style={{ background: "#38BDF8" }}
                  aria-hidden
                />
              )}
              <NavIcon label={navLabel} href={link.href} />
              {navLabel}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
