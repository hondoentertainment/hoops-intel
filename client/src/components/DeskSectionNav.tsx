import { useEffect, useMemo, useState } from "react";
import { DESK_SECTION_LINKS } from "../lib/siteNav";
import { isPlayoffsActive } from "../lib/playoffData";

export default function DeskSectionNav() {
  const [activeId, setActiveId] = useState<string>("");

  const links = useMemo(() => {
    if (!isPlayoffsActive()) return DESK_SECTION_LINKS;
    const playoffLink = { label: "Playoffs", href: "#playoffs" };
    const idx = DESK_SECTION_LINKS.findIndex((l) => l.href === "#injuries");
    const next = [...DESK_SECTION_LINKS];
    next.splice(idx + 1, 0, playoffLink);
    return next;
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [links]);

  return (
    <nav
      className="desk-section-nav sticky z-40 border-b"
      style={{
        top: "3.5rem",
        background: "var(--hi-header-bg, rgba(5, 13, 26, 0.92))",
        borderColor: "var(--hi-border-soft, rgba(255,255,255,0.08))",
        backdropFilter: "blur(16px)",
      }}
      aria-label="Jump to section"
    >
      <div className="container">
        <div className="desk-section-nav-track flex gap-1 py-2 overflow-x-auto overscroll-x-contain">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            const playoff = link.href === "#playoffs";
            return (
              <a
                key={link.href}
                href={link.href}
                className="desk-section-pill shrink-0"
                aria-current={active ? "location" : undefined}
                data-active={active ? "true" : undefined}
                data-playoff={playoff ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
