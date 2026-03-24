// Auto-generated Clutch Factor Rankings data
// Weekly rankings of the NBA's most clutch performers

export interface ClutchPlayer {
  rank: number;
  player: string;
  team: string;
  clutchRating: number;
  clutchPts: number;
  clutchFgPct: number;
  clutchFtPct: number;
  gameWinners: number;
  clutchPlusMinus: number;
  biggestMoment: string;
  trend: "up" | "down" | "stable";
}

export interface ClutchData {
  generatedDate: string;
  weekLabel: string;
  players: ClutchPlayer[];
  clutchKing: { player: string; team: string; description: string };
  worstInClutch: { player: string; team: string; description: string };
  weeklyHighlight: string;
}

export const clutchData: ClutchData = {
  generatedDate: "March 24, 2026",
  weekLabel: "Week of March 22-28, 2026",
  players: [
    { rank: 1, player: "Shai Gilgeous-Alexander", team: "OKC", clutchRating: 97, clutchPts: 8.4, clutchFgPct: 58.2, clutchFtPct: 92.1, gameWinners: 7, clutchPlusMinus: 12.4, biggestMoment: "Hit a step-back three with 4.2 seconds left to beat Boston 112-110 on national TV", trend: "stable" },
    { rank: 2, player: "Luka Doncic", team: "LAL", clutchRating: 94, clutchPts: 7.8, clutchFgPct: 52.1, clutchFtPct: 85.3, gameWinners: 5, clutchPlusMinus: 10.8, biggestMoment: "Triple-double in the final 5 minutes vs. Denver — 8 pts, 4 reb, 3 ast to seal a comeback win", trend: "up" },
    { rank: 3, player: "Cade Cunningham", team: "DET", clutchRating: 91, clutchPts: 7.2, clutchFgPct: 50.8, clutchFtPct: 89.5, gameWinners: 4, clutchPlusMinus: 9.6, biggestMoment: "Drove coast-to-coast for the go-ahead layup with 1.8 seconds left vs. Miami", trend: "up" },
    { rank: 4, player: "Anthony Edwards", team: "MIN", clutchRating: 88, clutchPts: 7.5, clutchFgPct: 48.3, clutchFtPct: 82.6, gameWinners: 5, clutchPlusMinus: 8.2, biggestMoment: "Scored 11 straight points in the final 3 minutes to erase a 9-point deficit vs. Cleveland", trend: "stable" },
    { rank: 5, player: "Donovan Mitchell", team: "CLE", clutchRating: 86, clutchPts: 6.9, clutchFgPct: 51.4, clutchFtPct: 88.2, gameWinners: 4, clutchPlusMinus: 7.5, biggestMoment: "Back-to-back threes in the final minute to force OT vs. Philadelphia, then won it in OT", trend: "up" },
    { rank: 6, player: "Jayson Tatum", team: "BOS", clutchRating: 84, clutchPts: 6.5, clutchFgPct: 46.7, clutchFtPct: 90.1, gameWinners: 3, clutchPlusMinus: 6.8, biggestMoment: "Went 6-for-6 from the free throw line in the final 45 seconds to hold off the Knicks", trend: "down" },
    { rank: 7, player: "LaMelo Ball", team: "CHA", clutchRating: 82, clutchPts: 6.8, clutchFgPct: 47.2, clutchFtPct: 84.0, gameWinners: 3, clutchPlusMinus: 5.9, biggestMoment: "Half-court heave at the buzzer to send the game to OT vs. Atlanta — then scored 8 in OT", trend: "up" },
    { rank: 8, player: "De'Aaron Fox", team: "SAC", clutchRating: 80, clutchPts: 6.3, clutchFgPct: 49.8, clutchFtPct: 86.4, gameWinners: 3, clutchPlusMinus: 5.4, biggestMoment: "Coast-to-coast in 3.8 seconds for a buzzer-beating layup to beat Portland", trend: "stable" },
    { rank: 9, player: "Victor Wembanyama", team: "SAS", clutchRating: 78, clutchPts: 5.8, clutchFgPct: 45.6, clutchFtPct: 78.3, gameWinners: 2, clutchPlusMinus: 6.1, biggestMoment: "Game-winning block on Embiid at the rim with 0.9 seconds left, then hit both free throws", trend: "up" },
    { rank: 10, player: "Jalen Brunson", team: "NYK", clutchRating: 77, clutchPts: 6.1, clutchFgPct: 48.9, clutchFtPct: 91.5, gameWinners: 3, clutchPlusMinus: 4.8, biggestMoment: "Scored the Knicks' final 9 points including a pull-up mid-range dagger with 8.5 seconds left", trend: "stable" },
    { rank: 11, player: "Nikola Jokic", team: "DEN", clutchRating: 75, clutchPts: 5.5, clutchFgPct: 55.2, clutchFtPct: 82.8, gameWinners: 2, clutchPlusMinus: 4.2, biggestMoment: "Triple-double in the clutch: dish to Murray for the game-winner, 4 rebounds, 3 assists in final 5 min", trend: "down" },
    { rank: 12, player: "Trae Young", team: "ATL", clutchRating: 73, clutchPts: 6.4, clutchFgPct: 42.1, clutchFtPct: 90.8, gameWinners: 3, clutchPlusMinus: 3.1, biggestMoment: "Logo three with 2.1 seconds left to beat Indiana in a game Atlanta trailed by 6 with a minute left", trend: "up" },
    { rank: 13, player: "Kyrie Irving", team: "DAL", clutchRating: 71, clutchPts: 5.9, clutchFgPct: 47.5, clutchFtPct: 88.6, gameWinners: 2, clutchPlusMinus: 3.5, biggestMoment: "Vintage Kyrie: crossover into a fadeaway mid-range over two defenders to beat Milwaukee", trend: "stable" },
    { rank: 14, player: "Tyrese Haliburton", team: "IND", clutchRating: 69, clutchPts: 5.2, clutchFgPct: 44.8, clutchFtPct: 87.3, gameWinners: 2, clutchPlusMinus: 3.8, biggestMoment: "Found Siakam with a no-look pass for the game-winning dunk with 3.4 seconds left vs. Toronto", trend: "down" },
    { rank: 15, player: "Stephen Curry", team: "GSW", clutchRating: 68, clutchPts: 5.6, clutchFgPct: 43.2, clutchFtPct: 93.5, gameWinners: 2, clutchPlusMinus: 2.4, biggestMoment: "Two clutch threes in the final 90 seconds but Warriors still lost by 1 to OKC", trend: "down" },
    { rank: 16, player: "Giannis Antetokounmpo", team: "MIL", clutchRating: 66, clutchPts: 5.8, clutchFgPct: 52.6, clutchFtPct: 62.4, gameWinners: 2, clutchPlusMinus: 2.1, biggestMoment: "Putback dunk at the buzzer to force OT vs. Philly — but went 2-for-7 from the line in OT", trend: "stable" },
    { rank: 17, player: "Jimmy Butler", team: "MIA", clutchRating: 64, clutchPts: 5.1, clutchFgPct: 44.3, clutchFtPct: 86.7, gameWinners: 1, clutchPlusMinus: 1.8, biggestMoment: "Playoff Jimmy showed up early: 12 fourth-quarter points in a must-win against Chicago", trend: "up" },
    { rank: 18, player: "Paolo Banchero", team: "ORL", clutchRating: 62, clutchPts: 5.4, clutchFgPct: 41.2, clutchFtPct: 80.5, gameWinners: 1, clutchPlusMinus: 1.2, biggestMoment: "Fearless drive and finish through contact for the go-ahead three-point play vs. Brooklyn", trend: "up" },
    { rank: 19, player: "Damian Lillard", team: "MIL", clutchRating: 60, clutchPts: 4.8, clutchFgPct: 40.6, clutchFtPct: 91.2, gameWinners: 1, clutchPlusMinus: 0.8, biggestMoment: "Dame Time still flickers: hit a 30-footer to tie the game but missed the OT game-winner", trend: "down" },
    { rank: 20, player: "Jamal Murray", team: "DEN", clutchRating: 58, clutchPts: 4.5, clutchFgPct: 43.8, clutchFtPct: 85.1, gameWinners: 1, clutchPlusMinus: 0.5, biggestMoment: "Banked in a running floater with 0.4 seconds left to beat the Clippers — lucky but clutch", trend: "stable" },
  ],
  clutchKing: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    description: "The MVP frontrunner is also the coldest closer in the league. SGA has a +12.4 plus/minus in clutch minutes this season, shooting an absurd 58.2% from the field when the game is on the line. His step-back three to beat Boston on Friday was the signature moment of the week — and his 7th game-winner of the season. No one wants to see him with the ball in the final minute.",
  },
  worstInClutch: {
    player: "Russell Westbrook",
    team: "DEN",
    description: "Russ has been ice cold when it matters most. In the 12 clutch minutes he's played this month, he's 2-for-14 from the field with 5 turnovers. His -8.3 clutch plus/minus is the worst among rotation players. Denver is 0-4 in games decided by 5 or fewer points when Westbrook plays crunch time minutes.",
  },
  weeklyHighlight: "This week's clutch drama was headlined by SGA's dagger in Boston and Cade Cunningham's coast-to-coast heroics against Miami. But the real storyline is the emergence of Victor Wembanyama as a crunch-time force — his game-winning block on Embiid showed a defensive clutch gene that can't be taught. Meanwhile, Steph Curry's clutch shooting percentage has dipped below 44% for the first time in his career, and Damian Lillard's Dame Time clock is running about 30 seconds slow in Milwaukee. The old guard is fading and the new wave is taking over the final five minutes.",
};
