// Auto-generated Trade Simulator data
// Weekly "What If" trade proposals and tradeable player database

export interface TradeablePlayer {
  name: string;
  team: string;
  position: string;
  age: number;
  salary: string;
  contractYears: number;
  ppg: number;
  rpg: number;
  apg: number;
  tradeValue: number;
  tradeable: boolean;
  untouchable: boolean;
}

export interface TradeProposal {
  id: string;
  team1: { team: string; sending: string[]; receiving: string[] };
  team2: { team: string; sending: string[]; receiving: string[] };
  salaryMatch: boolean;
  salaryDiff: string;
  aiVerdict: "approve" | "reject" | "conditional";
  aiAnalysis: string;
  team1Impact: { offense: number; defense: number; chemistry: number; future: number };
  team2Impact: { offense: number; defense: number; chemistry: number; future: number };
  winProjectionChange: { team1: string; team2: string };
}

export interface TradeSimData {
  generatedDate: string;
  players: TradeablePlayer[];
  featuredTrades: TradeProposal[];
  hottest: { player: string; team: string; reason: string }[];
}

export const tradeSimData: TradeSimData = {
  generatedDate: "March 24, 2026",
  players: [
    { name: "Zach LaVine", team: "CHI", position: "SG", age: 31, salary: "$43.0M", contractYears: 2, ppg: 22.1, rpg: 4.3, apg: 4.1, tradeValue: 55, tradeable: true, untouchable: false },
    { name: "Brandon Ingram", team: "NOP", position: "SF", age: 28, salary: "$36.0M", contractYears: 1, ppg: 23.4, rpg: 5.6, apg: 5.1, tradeValue: 68, tradeable: true, untouchable: false },
    { name: "Pascal Siakam", team: "IND", position: "PF", age: 31, salary: "$37.9M", contractYears: 3, ppg: 20.8, rpg: 6.4, apg: 3.8, tradeValue: 62, tradeable: true, untouchable: false },
    { name: "Dejounte Murray", team: "NOP", position: "PG", age: 29, salary: "$25.2M", contractYears: 2, ppg: 18.6, rpg: 5.0, apg: 6.4, tradeValue: 64, tradeable: true, untouchable: false },
    { name: "Darius Garland", team: "CLE", position: "PG", age: 26, salary: "$36.8M", contractYears: 3, ppg: 21.5, rpg: 2.8, apg: 7.2, tradeValue: 75, tradeable: true, untouchable: false },
    { name: "Cam Johnson", team: "BKN", position: "SF", age: 29, salary: "$22.5M", contractYears: 3, ppg: 18.2, rpg: 4.5, apg: 2.8, tradeValue: 66, tradeable: true, untouchable: false },
    { name: "Jerami Grant", team: "POR", position: "PF", age: 32, salary: "$29.8M", contractYears: 2, ppg: 16.2, rpg: 4.1, apg: 2.3, tradeValue: 42, tradeable: true, untouchable: false },
    { name: "D'Angelo Russell", team: "LAL", position: "PG", age: 30, salary: "$18.7M", contractYears: 1, ppg: 14.3, rpg: 3.1, apg: 6.2, tradeValue: 38, tradeable: true, untouchable: false },
    { name: "Kyle Kuzma", team: "WAS", position: "PF", age: 30, salary: "$23.5M", contractYears: 1, ppg: 17.1, rpg: 5.9, apg: 2.5, tradeValue: 45, tradeable: true, untouchable: false },
    { name: "Jordan Poole", team: "WAS", position: "SG", age: 26, salary: "$27.3M", contractYears: 3, ppg: 17.8, rpg: 2.9, apg: 5.6, tradeValue: 40, tradeable: true, untouchable: false },
    { name: "Malcolm Brogdon", team: "WAS", position: "PG", age: 33, salary: "$22.6M", contractYears: 1, ppg: 12.5, rpg: 3.8, apg: 5.1, tradeValue: 30, tradeable: true, untouchable: false },
    { name: "Buddy Hield", team: "GSW", position: "SG", age: 33, salary: "$18.0M", contractYears: 1, ppg: 13.2, rpg: 3.6, apg: 2.1, tradeValue: 35, tradeable: true, untouchable: false },
    { name: "Bruce Brown", team: "TOR", position: "SF", age: 28, salary: "$23.0M", contractYears: 2, ppg: 11.8, rpg: 4.9, apg: 3.5, tradeValue: 38, tradeable: true, untouchable: false },
    { name: "Tobias Harris", team: "DET", position: "PF", age: 33, salary: "$19.5M", contractYears: 1, ppg: 11.2, rpg: 5.3, apg: 2.3, tradeValue: 28, tradeable: true, untouchable: false },
    { name: "Jonas Valanciunas", team: "WAS", position: "C", age: 33, salary: "$14.0M", contractYears: 1, ppg: 10.4, rpg: 8.7, apg: 1.8, tradeValue: 32, tradeable: true, untouchable: false },
    { name: "Collin Sexton", team: "UTA", position: "SG", age: 27, salary: "$18.3M", contractYears: 2, ppg: 16.9, rpg: 2.5, apg: 3.8, tradeValue: 48, tradeable: true, untouchable: false },
    { name: "John Collins", team: "UTA", position: "PF", age: 28, salary: "$24.5M", contractYears: 1, ppg: 15.1, rpg: 7.2, apg: 1.9, tradeValue: 44, tradeable: true, untouchable: false },
    { name: "Lauri Markkanen", team: "UTA", position: "PF", age: 28, salary: "$18.0M", contractYears: 4, ppg: 23.2, rpg: 8.1, apg: 1.9, tradeValue: 82, tradeable: true, untouchable: false },
    { name: "Mikal Bridges", team: "NYK", position: "SF", age: 29, salary: "$25.1M", contractYears: 3, ppg: 17.5, rpg: 4.0, apg: 3.1, tradeValue: 60, tradeable: true, untouchable: false },
    { name: "Jakob Poeltl", team: "TOR", position: "C", age: 29, salary: "$19.5M", contractYears: 2, ppg: 13.8, rpg: 9.2, apg: 2.5, tradeValue: 52, tradeable: true, untouchable: false },
    { name: "De'Aaron Fox", team: "SAC", position: "PG", age: 28, salary: "$34.8M", contractYears: 3, ppg: 26.1, rpg: 4.2, apg: 6.1, tradeValue: 85, tradeable: true, untouchable: false },
    { name: "Domantas Sabonis", team: "SAC", position: "C", age: 29, salary: "$30.6M", contractYears: 3, ppg: 19.4, rpg: 12.8, apg: 7.1, tradeValue: 72, tradeable: true, untouchable: false },
    { name: "Deandre Ayton", team: "POR", position: "C", age: 27, salary: "$34.0M", contractYears: 2, ppg: 16.8, rpg: 10.2, apg: 1.5, tradeValue: 50, tradeable: true, untouchable: false },
    { name: "Terry Rozier", team: "MIA", position: "PG", age: 32, salary: "$24.9M", contractYears: 2, ppg: 15.2, rpg: 3.8, apg: 4.5, tradeValue: 36, tradeable: true, untouchable: false },
    { name: "Marcus Smart", team: "MEM", position: "PG", age: 32, salary: "$20.2M", contractYears: 1, ppg: 11.4, rpg: 3.5, apg: 5.2, tradeValue: 34, tradeable: true, untouchable: false },
    { name: "Khris Middleton", team: "MIL", position: "SF", age: 34, salary: "$31.7M", contractYears: 1, ppg: 12.8, rpg: 4.1, apg: 4.5, tradeValue: 25, tradeable: true, untouchable: false },
    { name: "Bogdan Bogdanovic", team: "ATL", position: "SG", age: 33, salary: "$16.5M", contractYears: 1, ppg: 13.6, rpg: 3.4, apg: 3.8, tradeValue: 33, tradeable: true, untouchable: false },
    { name: "Anfernee Simons", team: "POR", position: "SG", age: 26, salary: "$25.0M", contractYears: 3, ppg: 20.5, rpg: 2.6, apg: 4.2, tradeValue: 58, tradeable: true, untouchable: false },
    { name: "Jalen Johnson", team: "ATL", position: "SF", age: 23, salary: "$4.8M", contractYears: 2, ppg: 16.8, rpg: 7.5, apg: 3.8, tradeValue: 74, tradeable: true, untouchable: false },
    { name: "Walker Kessler", team: "UTA", position: "C", age: 23, salary: "$4.2M", contractYears: 2, ppg: 10.2, rpg: 9.8, apg: 0.8, tradeValue: 62, tradeable: true, untouchable: false },
    { name: "Shai Gilgeous-Alexander", team: "OKC", position: "PG", age: 27, salary: "$40.5M", contractYears: 4, ppg: 32.1, rpg: 5.5, apg: 6.2, tradeValue: 99, tradeable: false, untouchable: true },
    { name: "Victor Wembanyama", team: "SAS", position: "C", age: 22, salary: "$12.6M", contractYears: 3, ppg: 24.8, rpg: 10.5, apg: 3.8, tradeValue: 98, tradeable: false, untouchable: true },
    { name: "Luka Doncic", team: "LAL", position: "PG", age: 27, salary: "$43.0M", contractYears: 3, ppg: 28.2, rpg: 8.1, apg: 8.5, tradeValue: 97, tradeable: false, untouchable: true },
    { name: "Cade Cunningham", team: "DET", position: "PG", age: 24, salary: "$36.0M", contractYears: 4, ppg: 24.5, rpg: 4.8, apg: 9.1, tradeValue: 95, tradeable: false, untouchable: true },
    { name: "Anthony Edwards", team: "MIN", position: "SG", age: 24, salary: "$42.2M", contractYears: 4, ppg: 26.8, rpg: 5.4, apg: 5.2, tradeValue: 93, tradeable: false, untouchable: true },
  ],
  featuredTrades: [
    {
      id: "trade-1",
      team1: { team: "MIA", sending: ["Terry Rozier", "2026 1st Round Pick"], receiving: ["Zach LaVine"] },
      team2: { team: "CHI", sending: ["Zach LaVine"], receiving: ["Terry Rozier", "2026 1st Round Pick"] },
      salaryMatch: true,
      salaryDiff: "+$5.2M (within threshold)",
      aiVerdict: "approve",
      aiAnalysis: "Chicago gets draft capital and salary relief while Miami adds a dynamic scorer to pair with Butler and Adebayo for a playoff push. LaVine's injury history is a concern, but Miami's medical staff has a strong track record of managing veteran bodies. The salary match works within the trade exception rules.",
      team1Impact: { offense: 6, defense: -2, chemistry: 3, future: -3 },
      team2Impact: { offense: -4, defense: 1, chemistry: 2, future: 7 },
      winProjectionChange: { team1: "+3.5 wins", team2: "-2.0 wins" },
    },
    {
      id: "trade-2",
      team1: { team: "LAL", sending: ["D'Angelo Russell", "2027 1st Round Pick"], receiving: ["Dejounte Murray"] },
      team2: { team: "NOP", sending: ["Dejounte Murray"], receiving: ["D'Angelo Russell", "2027 1st Round Pick"] },
      salaryMatch: true,
      salaryDiff: "+$6.5M (within threshold)",
      aiVerdict: "approve",
      aiAnalysis: "The Lakers desperately need a two-way point guard to complement Luka, and Murray fits that mold perfectly. New Orleans gets a draft pick and a capable floor general who can mentor their young guards. This trade makes both rosters better aligned with their timelines.",
      team1Impact: { offense: 3, defense: 7, chemistry: 4, future: -2 },
      team2Impact: { offense: -2, defense: -4, chemistry: 1, future: 5 },
      winProjectionChange: { team1: "+4.0 wins", team2: "-1.5 wins" },
    },
    {
      id: "trade-3",
      team1: { team: "GSW", sending: ["Buddy Hield", "2026 2nd Round Pick"], receiving: ["Cam Johnson"] },
      team2: { team: "BKN", sending: ["Cam Johnson"], receiving: ["Buddy Hield", "2026 2nd Round Pick"] },
      salaryMatch: true,
      salaryDiff: "+$4.5M (within threshold)",
      aiVerdict: "conditional",
      aiAnalysis: "Golden State gets a younger, more versatile wing in Johnson who can defend and shoot. Brooklyn continues stockpiling picks and gets an expiring contract in Hield. The condition: this only makes sense if GSW believes they're one wing away from contention, which their current 9th-seed standing challenges.",
      team1Impact: { offense: 3, defense: 5, chemistry: 2, future: -1 },
      team2Impact: { offense: -2, defense: -3, chemistry: 0, future: 4 },
      winProjectionChange: { team1: "+2.0 wins", team2: "-1.0 wins" },
    },
    {
      id: "trade-4",
      team1: { team: "SAC", sending: ["De'Aaron Fox"], receiving: ["Pascal Siakam", "Bennedict Mathurin", "2026 1st Round Pick"] },
      team2: { team: "IND", sending: ["Pascal Siakam", "Bennedict Mathurin", "2026 1st Round Pick"], receiving: ["De'Aaron Fox"] },
      salaryMatch: true,
      salaryDiff: "+$1.9M (within threshold)",
      aiVerdict: "reject",
      aiAnalysis: "While Indiana gets their franchise point guard to pair with Haliburton in a dynamic backcourt, Sacramento is selling too low on Fox. Siakam is 31 and declining, and one first-round pick doesn't bridge the value gap. The Kings need a young star or multiple firsts in return — this package doesn't move the needle for a rebuild.",
      team1Impact: { offense: -5, defense: 2, chemistry: -4, future: 3 },
      team2Impact: { offense: 8, defense: 0, chemistry: 5, future: -2 },
      winProjectionChange: { team1: "-4.5 wins", team2: "+5.0 wins" },
    },
    {
      id: "trade-5",
      team1: { team: "MIL", sending: ["Khris Middleton", "2027 2nd Round Pick"], receiving: ["Brandon Ingram"] },
      team2: { team: "NOP", sending: ["Brandon Ingram"], receiving: ["Khris Middleton", "2027 2nd Round Pick"] },
      salaryMatch: true,
      salaryDiff: "+$4.3M (within threshold)",
      aiVerdict: "approve",
      aiAnalysis: "Milwaukee gets a younger scoring wing in Ingram who can be their second option next to Giannis for the playoff push. New Orleans gets an expiring contract in Middleton and clears cap space for their 2026 summer plans. Both teams address immediate needs while respecting their timelines.",
      team1Impact: { offense: 5, defense: -1, chemistry: 3, future: 4 },
      team2Impact: { offense: -4, defense: 0, chemistry: -1, future: 6 },
      winProjectionChange: { team1: "+3.0 wins", team2: "-2.5 wins" },
    },
    {
      id: "trade-6",
      team1: { team: "OKC", sending: ["2026 1st Round Pick", "2027 1st Round Pick", "Kenrich Williams"], receiving: ["Lauri Markkanen"] },
      team2: { team: "UTA", sending: ["Lauri Markkanen"], receiving: ["2026 1st Round Pick", "2027 1st Round Pick", "Kenrich Williams"] },
      salaryMatch: true,
      salaryDiff: "+$3.1M (within threshold)",
      aiVerdict: "conditional",
      aiAnalysis: "OKC adds the stretch-four they need to complement SGA and Holmgren. Utah gets two first-round picks from a team that won't convey high picks — but these are still valuable trade assets. The condition: Utah would likely demand a third pick or a young player like Jalen Williams to seriously engage.",
      team1Impact: { offense: 7, defense: 2, chemistry: 3, future: -5 },
      team2Impact: { offense: -6, defense: -1, chemistry: -2, future: 8 },
      winProjectionChange: { team1: "+4.5 wins", team2: "-5.0 wins" },
    },
  ],
  hottest: [
    { player: "Lauri Markkanen", team: "UTA", reason: "Every contender has called. Utah is listening but demanding a king's ransom. OKC, Miami, and Golden State all in the mix." },
    { player: "Zach LaVine", team: "CHI", reason: "Finally healthy and averaging 25+ over his last 10 games. Chicago is shopping him aggressively before the deadline." },
    { player: "Brandon Ingram", team: "NOP", reason: "Expiring contract and Pelicans' lost season make a trade nearly certain. Milwaukee and Sacramento are frontrunners." },
    { player: "De'Aaron Fox", team: "SAC", reason: "Sacramento's playoff hopes are fading. Fox has hinted at wanting a contender. Indiana, San Antonio, and Miami all interested." },
    { player: "Cam Johnson", team: "BKN", reason: "Brooklyn's rebuild accelerates. Johnson is a perfect 3-and-D wing for any contender. Golden State and Denver leading the chase." },
    { player: "Darius Garland", team: "CLE", reason: "Cleveland's backcourt logjam with Mitchell means Garland could be the odd man out. Multiple teams have inquired." },
  ],
};
