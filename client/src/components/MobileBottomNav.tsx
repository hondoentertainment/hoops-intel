import { useLocation } from "wouter";
import { MOBILE_BOTTOM_NAV_LINKS } from "../lib/siteNav";

function iconFor(label: string) {
  if (label === "Today") return "●";
  if (label === "Scores") return "▦";
  if (label === "Playoffs") return "△";
  if (label === "Players") return "◇";
  return "☰";
}

export default function MobileBottomNav() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t"
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
          const active = link.href === "/" ? location === "/" : location.startsWith(link.href.split("#")[0]);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className="min-h-[56px] flex flex-col items-center justify-center gap-1 text-[11px] font-semibold"
              style={{ color: active ? "#38BDF8" : "rgba(255,255,255,0.52)" }}
            >
              <span aria-hidden className="text-sm">{iconFor(link.label)}</span>
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
