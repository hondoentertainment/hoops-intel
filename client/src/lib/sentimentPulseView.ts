import {
  sentimentData as sentimentRaw,
  type SentimentTopic,
  type PlayerSentiment as PlayerSentimentRaw,
  type TeamSentiment as TeamSentimentRaw,
} from "./sentimentData";

export type PlayerSentiment = {
  player: string;
  team: string;
  overallSentiment: number;
  twitterScore: number;
  redditScore: number;
  performanceGap: number;
  volume: "viral" | "high" | "moderate" | "low";
  topTake: string;
  contraryTake: string;
  buzzTopics: string[];
};

export type TeamSentiment = {
  team: string;
  fanMood: "ecstatic" | "optimistic" | "neutral" | "frustrated" | "furious";
  moodScore: number;
  topGrievance: string;
  brightSpot: string;
};

export type SentimentPulseData = {
  generatedDate: string;
  displayDate: string;
  overallMood: string;
  topics: SentimentTopic[];
  viralMoment: {
    platform: string;
    player: string;
    description: string;
    engagement: string;
  };
  narrative: string;
  players: PlayerSentiment[];
  overrated: { player: string; team: string; explanation: string };
  underrated: { player: string; team: string; explanation: string };
  teams: TeamSentiment[];
  hottestTake: string;
  coldestTake: string;
};

function clamp(n: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, n));
}

function hashPlayer(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function volumeFromMentions(mentions: number): PlayerSentiment["volume"] {
  if (mentions >= 20_000) return "viral";
  if (mentions >= 15_000) return "high";
  if (mentions >= 10_000) return "moderate";
  return "low";
}

function mapPlayer(p: PlayerSentimentRaw, topics: SentimentTopic[]): PlayerSentiment {
  const h = hashPlayer(p.player);
  const twitterScore = clamp(Math.round(p.score + (h % 9) - 4), -100, 100);
  const redditScore = clamp(Math.round(p.score - (h % 7) + 2), -100, 100);
  const performanceGap = clamp(Math.round(p.score * 0.16 + (p.mentions % 19) - 9), -35, 35);
  const contraryTake =
    p.score > 40
      ? "Counter-thread: some scouts want a deeper playoff sample before stamping superstar receipts."
      : p.score < -40
        ? "Counter-thread: part of the timeline argues the negativity outpaces what the tape and context support."
        : "The timeline is actively arguing both sides — no clean consensus yet.";

  let buzzTopics = topics
    .filter((t) => t.relatedPlayers.includes(p.player))
    .map((t) => t.topic)
    .slice(0, 4);
  if (buzzTopics.length === 0) {
    buzzTopics = topics.slice(0, 2).map((t) => t.topic);
  }

  return {
    player: p.player,
    team: p.team,
    overallSentiment: p.score,
    twitterScore,
    redditScore,
    performanceGap,
    volume: volumeFromMentions(p.mentions),
    topTake: p.topTake,
    contraryTake,
    buzzTopics,
  };
}

function mapTeam(t: TeamSentimentRaw): TeamSentiment {
  const moodScore = t.score;
  let fanMood: TeamSentiment["fanMood"];
  if (moodScore >= 70) fanMood = "ecstatic";
  else if (moodScore >= 35) fanMood = "optimistic";
  else if (moodScore >= -35) fanMood = "neutral";
  else if (moodScore >= -65) fanMood = "frustrated";
  else fanMood = "furious";

  const topGrievance =
    moodScore < 20
      ? t.narrativeSummary
      : `Narrative nitpick: chatter keeps circling ${t.buzzWords[0] ?? "consistency"} even while the record looks fine.`;

  const brightSpot =
    moodScore >= 20
      ? t.narrativeSummary
      : `Still a bright spot: ${t.buzzWords[0] ?? "the star talent"} keeps pulling national attention.`;

  return {
    team: t.team,
    fanMood,
    moodScore,
    topGrievance,
    brightSpot,
  };
}

function buildSentimentPulse(): SentimentPulseData {
  const players = sentimentRaw.playerSentiments.map((p) => mapPlayer(p, sentimentRaw.topics));
  const sortedGap = [...players].sort((a, b) => a.performanceGap - b.performanceGap);
  const overratedP = sortedGap[0];
  const underratedP = sortedGap[sortedGap.length - 1];

  const viral = sentimentRaw.topics.find((t) => t.trending) ?? sentimentRaw.topics[0];
  const viralMoment = {
    platform: "X / Reddit",
    player: viral.relatedPlayers[0] ?? "League-wide",
    description: viral.summary,
    engagement: `${(viral.volume / 1000).toFixed(0)}K mentions · heat ${viral.intensity}`,
  };

  return {
    generatedDate: sentimentRaw.generatedDate,
    displayDate: sentimentRaw.displayDate,
    overallMood: sentimentRaw.overallMood,
    topics: sentimentRaw.topics,
    viralMoment,
    narrative: `${sentimentRaw.overallMood} ${sentimentRaw.hottestTake}`,
    players,
    overrated: {
      player: overratedP.player,
      team: overratedP.team,
      explanation: `Narrative is colder than the model expects — ${overratedP.player} is sitting on a ${overratedP.performanceGap} perception gap.`,
    },
    underrated: {
      player: underratedP.player,
      team: underratedP.team,
      explanation: `The feed is kinder than headlines suggest — ${underratedP.player} carries a +${underratedP.performanceGap} perception gap.`,
    },
    teams: sentimentRaw.teamSentiments.map(mapTeam),
    hottestTake: sentimentRaw.hottestTake,
    coldestTake: sentimentRaw.coldestTake,
  };
}

export const sentimentPulseData: SentimentPulseData = buildSentimentPulse();
