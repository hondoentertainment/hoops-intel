import { consensusView, type OddsBooksGame } from "../lib/oddsBooks";

export function BookConsensusPanel({ game }: { game: OddsBooksGame }) {
  const view = consensusView(game);
  if (!view) return null;

  return (
    <div
      className="mb-4 rounded-lg px-4 py-3"
      data-testid="book-consensus"
      style={{ background: "var(--hi-accent-soft, #d7eef9)", border: "1px solid rgba(20,106,140,0.18)" }}
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "var(--hi-accent-text,#146a8c)" }}>
        Multi-book consensus
      </div>
      <p className="mono-data text-sm mb-1" style={{ color: "var(--hi-text,#0a0a0a)" }}>
        {view.agree}/{view.total} books at {view.label}
        <span style={{ color: "var(--hi-muted,#5c5c58)" }}> · {view.agreementPct}% agreement</span>
      </p>
      <p className="text-[11px] mb-3" style={{ color: "var(--hi-muted,#5c5c58)" }}>
        {view.rangeLabel
          ? `Posted range ${view.rangeLabel}.`
          : view.outliers.length
            ? "Books disagree on the side or number — no blended line."
            : "Every returned book posts the same number."}
      </p>
      <ul className="space-y-2">
        {view.buckets.map((bucket) => (
          <li key={bucket.spread}>
            <div className="flex justify-between gap-3 text-[11px] mono-data" style={{ color: "var(--hi-text,#0a0a0a)" }}>
              <span>
                {bucket.spread}
                {bucket.consensus ? " · consensus" : ""}
              </span>
              <span>
                {bucket.count} book{bucket.count === 1 ? "" : "s"}
              </span>
            </div>
            <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(10,10,10,0.08)" }} aria-hidden="true">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${bucket.sharePct}%`,
                  background: bucket.consensus ? "var(--hi-accent-text,#146a8c)" : "var(--hi-warn,#c2410c)",
                }}
              />
            </div>
            <p className="mt-1 text-[10px]" style={{ color: "var(--hi-muted,#5c5c58)" }}>
              {bucket.books.map((book) => book.title).join(" · ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BooksPendingNote() {
  return (
    <p className="mb-4 text-xs leading-relaxed" data-testid="books-pending" style={{ color: "var(--hi-muted,#5c5c58)" }}>
      Multi-book quotes appear when The Odds API returns <span className="mono-data">books[]</span>. Hoops Intel does not
      invent spreads.
    </p>
  );
}
