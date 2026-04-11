// Community Pulse Vote — Data types and sample data
// Matches pulseIndex players for AI vs Community comparison

export interface CommunityPulseVote {
  player: string;
  team: string;
  communityScore: number; // average community vote (0-100)
  voteCount: number;
  aiScore: number; // from pulseIndex
  gap: number; // community - AI (positive = community rates higher)
}

export interface CommunityPulseData {
  generatedDate: string;
  weekLabel: string;
  votes: CommunityPulseVote[];
  totalVoters: number;
  biggestDisagreement: { player: string; communityRank: number; aiRank: number; direction: string };
  narrative: string;
}

export const communityPulseData: CommunityPulseData = {
  generatedDate: "March 24, 2026",
  weekLabel: "Week of March 22-28, 2026",
  votes: [
    { player: "Shai Gilgeous-Alexander", team: "OKC", communityScore: 97.2, voteCount: 1843, aiScore: 99.8, gap: -2.6 },
    { player: "Luka Doncic", team: "LAL", communityScore: 98.1, voteCount: 1843, aiScore: 98.9, gap: -0.8 },
    { player: "Victor Wembanyama", team: "SAS", communityScore: 95.5, voteCount: 1843, aiScore: 97.9, gap: -2.4 },
    { player: "Jayson Tatum", team: "BOS", communityScore: 93.1, voteCount: 1843, aiScore: 96.8, gap: -3.7 },
    { player: "Nikola Jokic", team: "DEN", communityScore: 97.8, voteCount: 1843, aiScore: 96.2, gap: 1.6 },
    { player: "Jalen Johnson", team: "ATL", communityScore: 88.3, voteCount: 1843, aiScore: 94.8, gap: -6.5 },
    { player: "Cade Cunningham", team: "DET", communityScore: 91.7, voteCount: 1843, aiScore: 93.5, gap: -1.8 },
    { player: "Julius Randle", team: "MIN", communityScore: 82.4, voteCount: 1843, aiScore: 92.6, gap: -10.2 },
    { player: "LaMelo Ball", team: "CHA", communityScore: 94.9, voteCount: 1843, aiScore: 91.8, gap: 3.1 },
    { player: "Brandon Ingram", team: "TOR", communityScore: 86.1, voteCount: 1843, aiScore: 90.5, gap: -4.4 },
    { player: "Anthony Edwards", team: "MIN", communityScore: 93.6, voteCount: 1843, aiScore: 88.0, gap: 5.6 },
    { player: "Devin Booker", team: "PHX", communityScore: 91.2, voteCount: 1843, aiScore: 87.5, gap: 3.7 },
    { player: "Kevin Durant", team: "HOU", communityScore: 90.8, voteCount: 1843, aiScore: 87.1, gap: 3.7 },
    { player: "Jalen Brunson", team: "NYK", communityScore: 89.4, voteCount: 1843, aiScore: 86.3, gap: 3.1 },
    { player: "Evan Mobley", team: "CLE", communityScore: 84.2, voteCount: 1843, aiScore: 85.9, gap: -1.7 },
    { player: "Trae Young", team: "ATL", communityScore: 87.6, voteCount: 1843, aiScore: 84.2, gap: 3.4 },
    { player: "Kawhi Leonard", team: "LAC", communityScore: 83.5, voteCount: 1843, aiScore: 82.0, gap: 1.5 },
    { player: "Cooper Flagg", team: "DAL", communityScore: 85.9, voteCount: 1843, aiScore: 80.5, gap: 5.4 },
    { player: "Anthony Davis", team: "LAL", communityScore: 88.7, voteCount: 1843, aiScore: 86.8, gap: 1.9 },
    { player: "Jamal Murray", team: "DEN", communityScore: 78.3, voteCount: 1843, aiScore: 79.1, gap: -0.8 },
  ],
  totalVoters: 1843,
  biggestDisagreement: {
    player: "Julius Randle",
    communityRank: 16,
    aiRank: 8,
    direction: "Community ranks lower",
  },
  narrative: "The community and AI are largely aligned on the top 3 this week, but the biggest disagreement centers on Julius Randle. The AI ranks him 8th after back-to-back 28-point games filling in for Anthony Edwards, while the community has him at 16th -- voters remain skeptical that Randle's production will sustain once Edwards returns. On the flip side, the community is higher on Anthony Edwards (11th vs AI's unranked injured status) and Cooper Flagg (18th) -- fans clearly value star power and potential over current form. LaMelo Ball is another fan favorite, ranked 9th by the community but only 9th by the AI -- the gap is small but fans have been buzzing about his 30/13 masterpiece.",
};

// Top 20 ratable players for the voting section
export const ratablePlayers = [
  { player: "Shai Gilgeous-Alexander", team: "OKC" },
  { player: "Luka Doncic", team: "LAL" },
  { player: "Victor Wembanyama", team: "SAS" },
  { player: "Jayson Tatum", team: "BOS" },
  { player: "Nikola Jokic", team: "DEN" },
  { player: "Jalen Johnson", team: "ATL" },
  { player: "Cade Cunningham", team: "DET" },
  { player: "Julius Randle", team: "MIN" },
  { player: "LaMelo Ball", team: "CHA" },
  { player: "Brandon Ingram", team: "TOR" },
  { player: "Anthony Edwards", team: "MIN" },
  { player: "Devin Booker", team: "PHX" },
  { player: "Kevin Durant", team: "HOU" },
  { player: "Jalen Brunson", team: "NYK" },
  { player: "Evan Mobley", team: "CLE" },
  { player: "Trae Young", team: "ATL" },
  { player: "Kawhi Leonard", team: "LAC" },
  { player: "Cooper Flagg", team: "DAL" },
  { player: "Anthony Davis", team: "LAL" },
  { player: "Jamal Murray", team: "DEN" },
];
