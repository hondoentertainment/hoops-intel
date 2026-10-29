// Fixture: model output, not a published edition.
// A player entry arrives with TeamSentiment.narrativeSummary.

export interface TeamSentiment {
  team: string;
  teamFull: string;
  sentiment: "positive" | "negative" | "mixed" | "neutral";
  score: number;
  buzzWords: string[];
  narrativeArc: string;
  narrativeSummary: string;
}

export interface PlayerSentiment {
  player: string;
  team: string;
  sentiment: "positive" | "negative" | "mixed" | "neutral";
  score: number;
  mentions: number;
  topTake: string;
  narrativeSummary: string;
  narrativeArc: string;
}

export const sentimentData: SentimentData = {
  generatedDate: "2020-01-01",
  displayDate: "January 1, 2020",
  overallMood: "fixture",
  topics: [
    {
      id: "fixture-topic",
      topic: "Fixture",
      sentiment: "neutral",
      intensity: 1,
      volume: 2,
      summary: "Do not treat playerSentiments: [ as an array. Keep {this}, comma.",
      sampleTakes: ["a, b"],
      relatedPlayers: ["Fixture Guard"],
      relatedTeams: ["TST"],
      trending: false,
    },
  ],
  teamSentiments: [
    {
      team: "TST",
      teamFull: "Test Squad",
      sentiment: "positive",
      score: 12,
      buzzWords: ["depth", "pace, space"],
      narrativeSummary: "Team copy stays on the team.",
      narrativeArc: "Stray player field on a team.",
    },
    {
      team: "ARC",
      teamFull: "Arc Only",
      sentiment: "neutral",
      score: 0,
      buzzWords: ["one"],
      narrativeArc: "Team arc mapped onto summary.",
    },
  ],
  playerSentiments: [
    {
      player: "Fixture Guard",
      team: "TST",
      sentiment: "mixed",
      score: 5,
      mentions: 10,
      topTake: "Keep {braces}, and commas, in the take.",
      narrativeSummary: "Stray team field on a player.",
      narrativeArc: "The player arc that must be kept.",
      teamFull: "Should drop",
      overallSentiment: 9,
    },
    {
      player: "Summary Only",
      team: "TST",
      sentiment: "negative",
      score: -3,
      mentions: 4,
      topTake: "Only the summary arrived.",
      narrativeSummary: "Mapped onto the arc.",
    },
    {
      player: "Duplicate Copy",
      team: "ARC",
      sentiment: "positive",
      score: 1,
      mentions: 2,
      topTake: "Same sentence twice.",
      narrativeSummary: "Same sentence on both fields.",
      narrativeArc: "Same sentence on both fields.",
    },
    {
      player: "Blank Arc",
      team: "TST",
      sentiment: "neutral",
      score: 0,
      mentions: 3,
      topTake: "Blank arc should be filled from the summary.",
      narrativeArc: "",
      narrativeSummary: "Filled from the stray summary.",
    },
  ],
  hottestTake: "hot take stays",
  coldestTake: "cold take stays",
};
