import EditorialShell from "../components/EditorialShell";
import { EmptyState, EnhancedButton } from "../components/enhanced/EnhancedUi";

export default function NotFound() {
  return (
    <EditorialShell header={{ subtitle: "NOT FOUND" }}>
      <EmptyState
        kicker="Not found"
        title="404 — Page not found"
        body="That route is not part of Hoops Intel."
        pill="DESK LOOP"
        pillTone="accent"
      />
      <div className="flex flex-wrap justify-center gap-3">
        <EnhancedButton href="/">Today's desk</EnhancedButton>
        <EnhancedButton href="/tools" variant="ghost">
          Tools
        </EnhancedButton>
        <EnhancedButton
          variant="ghost"
          onClick={() => window.dispatchEvent(new Event("hi-open-search"))}
        >
          Open search
        </EnhancedButton>
      </div>
    </EditorialShell>
  );
}
