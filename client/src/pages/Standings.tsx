import ToolPageLayout from "../components/ToolPageLayout";
import StandingsBoard from "../components/StandingsBoard";
import { useStandings } from "../lib/useStandings";

export default function Standings() {
  const { data, loading, error, refresh } = useStandings();
  const meta = data
    ? `${data.seasonLabel} · all 30 teams · ESPN`
    : "All 30 teams · both conferences · ESPN";

  return (
    <ToolPageLayout
      subtitle="LEAGUE TABLE"
      title="Standings"
      sectionLabel="Conference standings"
      description="Complete NBA standings for both conferences. Wins, losses, winning percentage, games behind, streak, last 10, and home and road records come from ESPN's public standings feed."
      heroMeta={meta}
      breadcrumbs={[{ label: "Today's desk", href: "/" }, { label: "Standings" }]}
      maxWidth="full"
    >
      <StandingsBoard data={data} loading={loading} error={error} onRetry={() => void refresh()} />
    </ToolPageLayout>
  );
}
