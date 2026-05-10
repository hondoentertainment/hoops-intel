import {
  communityPulseData as communityPulseRaw,
  type CommunityMVPRanking,
  type CommunityPulseData as CommunityPulseBase,
} from "./communityPulseData";

export interface CommunityVoteRow {
  player: string;
  team: string;
  communityScore: number;
  aiScore: number;
  gap: number;
}

export interface CommunityBiggestDisagreement {
  player: string;
  communityRank: number;
  aiRank: number;
  direction: string;
}

export type CommunityPulseData = CommunityPulseBase & {
  votes: CommunityVoteRow[];
  totalVoters: number;
  biggestDisagreement: CommunityBiggestDisagreement;
  narrative: string;
};

function teamShortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  return parts[parts.length - 1] ?? fullName;
}

function buildVotes(mvp: CommunityMVPRanking[]): CommunityVoteRow[] {
  return mvp.map((m) => {
    const aiScore = Math.min(99, Math.round(50 + m.supportPct * 1.4));
    const communityScore = Math.max(38, Math.min(97, 94 - (m.rank - 1) * 6));
    return {
      player: m.player,
      team: teamShortName(m.team),
      communityScore,
      aiScore,
      gap: communityScore - aiScore,
    };
  });
}

function buildBiggestDisagreement(votes: CommunityVoteRow[]): CommunityBiggestDisagreement {
  const topByGap = [...votes].sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap))[0];
  const byCommunity = [...votes].sort((a, b) => b.communityScore - a.communityScore);
  const byAi = [...votes].sort((a, b) => b.aiScore - a.aiScore);
  return {
    player: topByGap.player,
    communityRank: byCommunity.findIndex((v) => v.player === topByGap.player) + 1,
    aiRank: byAi.findIndex((v) => v.player === topByGap.player) + 1,
    direction:
      topByGap.gap > 0
        ? "Community is higher on this name than the AI composite."
        : "The AI composite is hotter on this name than the community average.",
  };
}

const votes = buildVotes(communityPulseRaw.mvpRankings);

export const communityPulseData: CommunityPulseData = {
  ...communityPulseRaw,
  votes,
  totalVoters: 18_420,
  biggestDisagreement: buildBiggestDisagreement(votes),
  narrative: communityPulseRaw.weeklyNarrative,
};
