import { EnhancedButton } from "./enhanced/EnhancedUi";

export function PublisherSnapshotFrame({ body }: { body: string }) {
  return (
    <div className="enhanced-card p-4 mb-6" data-testid="publisher-snapshot-frame">
      <p className="enhanced-kicker mb-2">For publishers</p>
      <p className="text-sm mb-3" style={{ color: "var(--hi-muted,#5c5c58)" }}>
        {body}
      </p>
      <div className="flex flex-wrap gap-2">
        <EnhancedButton href="/widgets">Widget home</EnhancedButton>
        <EnhancedButton href="/pro" variant="ghost">
          Hoops Intel Pro
        </EnhancedButton>
        <EnhancedButton href="/guest-pulse" variant="ghost">
          Contact the desk
        </EnhancedButton>
      </div>
    </div>
  );
}
