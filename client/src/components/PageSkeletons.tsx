export function PlayerPageSkeleton() {
  return (
    <div className="container py-8 space-y-4" aria-busy="true" role="status">
      <span className="sr-only">Loading player profile</span>
      <div className="h-4 w-48 rounded bg-white/5 animate-pulse" />
      <div className="h-10 w-64 rounded bg-white/5 animate-pulse" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        <div className="lg:col-span-2 h-48 rounded-xl bg-white/5 animate-pulse" />
        <div className="h-48 rounded-xl bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}

export function TeamPageSkeleton() {
  return (
    <div className="container py-8 space-y-4" aria-busy="true" role="status">
      <span className="sr-only">Loading team profile</span>
      <div className="h-4 w-32 rounded bg-white/5 animate-pulse" />
      <div className="h-10 w-72 rounded bg-white/5 animate-pulse" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-20 rounded-lg bg-white/5 animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export function LiveScoreSkeleton() {
  return (
    <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.25)" }}>
      <div className="container flex items-center gap-4 py-2 overflow-x-auto">
        <div className="h-4 w-20 rounded bg-white/10 animate-pulse shrink-0" />
        {[0, 1].map((i) => (
          <div key={i} className="h-8 w-40 rounded bg-white/5 animate-pulse shrink-0" />
        ))}
      </div>
    </div>
  );
}
