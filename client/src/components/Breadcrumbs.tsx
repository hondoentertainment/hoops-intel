export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && (
                <span aria-hidden style={{ color: "rgba(255,255,255,0.25)" }}>
                  /
                </span>
              )}
              {last || !item.href ? (
                <span
                  className="truncate font-medium"
                  style={{ color: last ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)" }}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="truncate text-sky-400 hover:text-sky-300 transition-colors">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
