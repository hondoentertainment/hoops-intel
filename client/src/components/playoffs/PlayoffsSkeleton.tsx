/** Brief skeleton shimmer while postseason payload hydrates. */
export function PlayoffsSkeleton() {
  return (
    <div className="animate-pulse space-y-4" aria-busy aria-label="Loading playoff board">
      <div className="h-40 rounded-2xl bg-white/[0.06]" />
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="h-32 rounded-xl bg-white/[0.05] lg:col-span-2" />
        <div className="h-32 rounded-xl bg-white/[0.05]" />
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((k) => (
          <div key={k} className="h-48 rounded-xl bg-white/[0.05]" />
        ))}
      </div>
    </div>
  );
}
