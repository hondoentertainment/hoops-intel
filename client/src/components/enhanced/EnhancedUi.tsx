import type { ReactNode } from "react";
import { ENHANCED_CHIP, ENHANCED_INK, injuryChipTone, injuryStatusLabel } from "../../lib/enhancedDesk";

export function BrandMark({ size = 14 }: { size?: number }) {
  return (
    <img
      src="/assets/brand-diamond.svg"
      alt=""
      width={size}
      height={size}
      className="shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

export function BrandLockup({
  compact = false,
  subtitle,
}: {
  compact?: boolean;
  subtitle?: string;
}) {
  return (
    <a href="/" className="flex items-center gap-2.5 min-w-0 py-1">
      <BrandMark size={compact ? 12 : 14} />
      <span className="flex flex-col min-w-0 leading-none">
        <span
          className="truncate"
          style={{
            fontFamily: "var(--hi-font-display)",
            fontSize: compact ? 13 : 15,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--hi-text,#0a0a0a)",
          }}
        >
          Hoops Intel
        </span>
        {subtitle ? (
          <span
            className="truncate font-medium mt-0.5"
            style={{
              fontSize: compact ? 9 : 10,
              color: "var(--hi-text-secondary,#5c5c58)",
              letterSpacing: "0.01em",
            }}
          >
            {subtitle}
          </span>
        ) : null}
      </span>
    </a>
  );
}

export function SeasonChip({ children }: { children: ReactNode }) {
  return (
    <span
      className="desk-chip uppercase"
      style={{ background: "rgba(255,122,23,0.12)", color: ENHANCED_CHIP }}
    >
      {children}
    </span>
  );
}

export function StatusPill({
  tone,
  children,
}: {
  tone: "accent" | "warn" | "success" | "danger";
  children: ReactNode;
}) {
  const styles = {
    accent: { background: "var(--hi-accent-soft,#d7eef9)", color: ENHANCED_INK },
    warn: { background: "rgba(242,184,56,0.14)", color: "var(--hi-warn,#f2b838)" },
    success: { background: "rgba(64,209,140,0.14)", color: "var(--hi-success,#40d18c)" },
    danger: { background: "rgba(255,77,106,0.14)", color: "var(--hi-danger,#ff4d6a)" },
  }[tone];
  return (
    <span className="desk-chip" style={styles}>
      {children}
    </span>
  );
}

export function DeskPanel({
  kicker,
  hint,
  children,
  id,
  className = "",
}: {
  kicker: string;
  hint?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`enhanced-card flex flex-col gap-3 p-6 min-w-0 overflow-hidden ${className}`}>
      <div className="min-w-0">
        <p className="enhanced-kicker">{kicker}</p>
        {hint ? (
          <p className="text-xs leading-5 mt-1.5" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            {hint}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function DeskInset({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const cls = `desk-inset min-w-0 overflow-hidden ${className}`;
  if (href) {
    return (
      <a href={href} className={`${cls} block transition-colors hover:bg-white/[0.04]`}>
        {children}
      </a>
    );
  }
  return <div className={cls}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  action,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-1 md:flex-row md:items-end md:gap-3 w-full min-w-0">
      <div className="flex-1 min-w-0">
        <p className="enhanced-kicker">{eyebrow}</p>
        <h2 className="editorial-heading hi-title text-[var(--hi-text,#0a0a0a)] text-[32px] leading-9 max-md:text-[1.75rem] max-md:leading-8">
          {title}
        </h2>
      </div>
      {action && actionHref ? (
        <a
          href={actionHref}
          className="text-sm font-medium shrink-0 inline-flex items-end min-h-11 pb-1"
          style={{ color: ENHANCED_INK }}
        >
          {action}
        </a>
      ) : null}
    </div>
  );
}

export function StatCard({
  kicker,
  value,
  sub,
}: {
  kicker: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="enhanced-card flex flex-col gap-1 p-6 max-md:p-4 min-w-0 overflow-hidden">
      <p className="enhanced-kicker">{kicker}</p>
      <p className="hi-stat text-lg">{value}</p>
      <p className="text-xs leading-4 hi-title" style={{ color: "var(--hi-muted,#5c5c58)" }}>
        {sub}
      </p>
    </div>
  );
}

export function InjuryChip({ status }: { status: string }) {
  return <StatusPill tone={injuryChipTone(status)}>{injuryStatusLabel(status)}</StatusPill>;
}

export function DeskFilterChip({
  active,
  children,
  onClick,
  href,
}: {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const cls = "desk-section-pill";
  if (href) {
    return (
      <a href={href} className={cls} data-active={active ? "true" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} data-active={active ? "true" : undefined} onClick={onClick}>
      {children}
    </button>
  );
}

export function DeskSearchField({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--hi-text-secondary,#5c5c58)"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          id={id}
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="desk-field pl-10 pr-4 text-base sm:text-sm outline-none"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export function DeskLinkCard({
  href,
  kicker,
  title,
  description,
}: {
  href: string;
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <a
      href={href}
      className="enhanced-card flex flex-col gap-1 p-6 min-h-[4.75rem] min-w-0 overflow-hidden transition-colors"
    >
      {kicker ? <p className="enhanced-kicker">{kicker}</p> : null}
      <p className="text-base font-semibold leading-5 hi-title text-[var(--hi-text,#0a0a0a)]">{title}</p>
      {description ? (
        <p className="text-xs leading-[18px] hi-title" style={{ color: "var(--hi-muted,#5c5c58)" }}>
          {description}
        </p>
      ) : null}
    </a>
  );
}

export function DeskLoopLinks({
  intro = "Pre-game desk",
}: {
  intro?: string;
}) {
  return (
    <div className="enhanced-card p-6">
      <p className="enhanced-kicker mb-3">{intro}</p>
      <div className="flex flex-wrap gap-2">
        <EnhancedButton href="/tonight">Tonight&apos;s slate</EnhancedButton>
        <EnhancedButton href="/lineups" variant="ghost">
          Lineup intel
        </EnhancedButton>
      </div>
    </div>
  );
}

export function EnhancedButton({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  const cls =
    `inline-flex items-center justify-center min-h-11 transition-opacity hover:opacity-90 ${
      variant === "primary" ? "hi-pill-primary" : "hi-pill"
    } ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function GamePreviewCard({
  status,
  when,
  away,
  home,
  network,
  note,
}: {
  status: string;
  when: string;
  away: string;
  home: string;
  network: string;
  note: string;
}) {
  return (
    <div className="enhanced-card flex flex-col gap-2.5 px-4 py-3.5 max-md:px-3.5 min-w-0 overflow-hidden">
      <div className="flex items-center gap-2 min-w-0">
        <p className="enhanced-kicker">{status}</p>
        <span className="flex-1 min-w-0" />
        <p className="text-sm shrink-0 text-right leading-5" style={{ color: "var(--hi-muted,#5c5c58)" }}>
          {when}
        </p>
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="hi-title font-bold text-[22px] md:text-[26px] leading-7 text-[var(--hi-text,#0a0a0a)]">
          {away}{" "}
          <span className="text-sm font-normal" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            @
          </span>{" "}
          {home}
        </p>
        {network ? (
          <p className="text-sm font-semibold tracking-[0.8px] leading-5" style={{ color: "var(--hi-muted,#5c5c58)" }}>
            {network}
          </p>
        ) : null}
      </div>
      <p className="editorial-body mobile-readable text-[var(--hi-text,#0a0a0a)]">{note}</p>
    </div>
  );
}

export function EnhancedPageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--hi-bg-page,#f7f7f5)" }}>
      {children}
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  description,
  meta,
  action,
  actionHref,
  as: Heading = "h1",
}: {
  kicker: string;
  title: string;
  description?: string;
  meta?: string;
  action?: string;
  actionHref?: string;
  as?: "h1" | "h2";
}) {
  return (
    <header className="flex flex-col gap-2 min-w-0">
      <p className="enhanced-kicker">{kicker}</p>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between min-w-0">
        <Heading className="editorial-heading hi-title text-[var(--hi-text,#0a0a0a)] text-[40px] leading-[1.1] max-md:text-[1.75rem] max-md:leading-8 min-w-0">
          {title}
        </Heading>
        {action && actionHref ? (
          <a
            href={actionHref}
            className="text-sm font-medium shrink-0 inline-flex items-end min-h-11 pb-1"
            style={{ color: ENHANCED_INK }}
          >
            {action}
          </a>
        ) : null}
      </div>
      {description ? (
        <p className="hi-lede">{description}</p>
      ) : null}
      {meta ? (
        <p className="text-xs" style={{ color: "var(--hi-muted,#5c5c58)" }}>
          {meta}
        </p>
      ) : null}
      <div className="desk-hairline mt-1" />
    </header>
  );
}

export function EmptyState({
  kicker,
  title,
  body,
  pill,
  pillTone = "warn",
  footnote,
}: {
  kicker?: string;
  title: string;
  body?: string;
  pill?: string;
  pillTone?: "accent" | "warn" | "success" | "danger";
  footnote?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 py-12 md:py-20 px-5 min-w-0">
      {kicker ? <p className="enhanced-kicker">{kicker}</p> : null}
      <h2 className="editorial-heading hi-title text-[var(--hi-text,#0a0a0a)] text-[32px] md:text-[40px] leading-tight max-md:text-[1.75rem]">
        {title}
      </h2>
      {body ? <p className="hi-empty-copy">{body}</p> : null}
      {pill || footnote ? (
        <div className="enhanced-card flex flex-col items-center justify-center gap-2 px-8 py-8 w-full max-w-xl">
          {pill ? <StatusPill tone={pillTone}>{pill}</StatusPill> : null}
          {footnote ? (
            <p className="text-sm" style={{ color: "var(--hi-muted,#5c5c58)" }}>
              {footnote}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
