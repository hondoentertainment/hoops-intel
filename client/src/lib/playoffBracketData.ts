// ═══════════════════════════════════════════════════════════
// HOOPS INTEL — Playoff Bracket Data
// Updated daily alongside pulseData.ts by the hoops-intel cron
// Last updated: May 21, 2026
// ═══════════════════════════════════════════════════════════

// --- Types ---

export interface PlayInGame {
  gameId: string;
  night: number;
  date: string;
  label: string;
  awayTeam: string;
  homeTeam: string;
  awaySeed: number;
  homeSeed: number;
  awayScore: number | null;
  homeScore: number | null;
  status: "final" | "live" | "scheduled";
  overtime?: string;
  winner?: string;
  eliminated?: string;
  headline: string;
  topPerformer?: string;
  topPerformerLine?: string;
  tv: string;
  time?: string;
}

export interface PlayoffGame {
  gameNumber: number;
  date: string;
  time?: string;
  tv?: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: "final" | "live" | "scheduled";
  topPerformer?: string;
  topPerformerLine?: string;
}

export interface PlayoffSeries {
  seriesId: string;
  conference: "east" | "west";
  round: number; // 1=first round, 2=conf semis, 3=conf finals, 4=finals
  higherSeed: number;
  lowerSeed: number;
  higherTeam: string;
  lowerTeam: string;
  higherWins: number;
  lowerWins: number;
  status: "scheduled" | "active" | "complete";
  winner?: string;
  games: PlayoffGame[];
  narrative?: string;
  keyMatchup?: string;
  seriesOdds?: string;
  eliminationGame?: boolean;
}

export interface PlayoffPerformer {
  rank: number;
  player: string;
  team: string;
  ppg: number;
  rpg: number;
  apg: number;
  statLine: string;
  trend: "up" | "down" | "steady";
  highlight: string;
}

export interface MvpCandidate {
  rank: number;
  player: string;
  team: string;
  odds: string;
  playoffAvg: string;
  record: string;
  signatureMoment: string;
  trend: "up" | "down" | "steady";
}

export interface EliminationWatch {
  team: string;
  opponent: string;
  situation: string;
  gameInfo: string;
  urgency: "eliminated" | "elimination" | "trailing" | "leading" | "tied" | "advancing";
}

// --- Play-In Tournament Data ---

export const playInGames: PlayInGame[] = [
  // Night 1 — Monday April 14
  {gameId:"CHA-MIA-20260414",night:1,date:"April 14",label:"East 9 vs 10",awayTeam:"CHA",homeTeam:"MIA",awaySeed:9,homeSeed:10,awayScore:127,homeScore:126,status:"final",overtime:"OT",winner:"CHA",eliminated:"MIA",headline:"Ball's OT masterpiece eliminates Heat",topPerformer:"LaMelo Ball",topPerformerLine:"30 PTS, 10 AST, 5 REB",tv:"ESPN"},
  {gameId:"CHA-MIA-20260414",night:1,date:"April 14",label:"West 7 vs 8",awayTeam:"POR",homeTeam:"PHX",awaySeed:7,homeSeed:8,awayScore:114,homeScore:110,status:"final",winner:"POR",headline:"Avdija's historic 41 clinches West 7-seed",topPerformer:"Deni Avdija",topPerformerLine:"41 PTS, 12 AST, 7 REB",tv:"ESPN"},
  // Night 2 — Wednesday April 15
  {gameId:"ORL-PHI-20260415",night:2,date:"April 15",label:"East 7 vs 8",awayTeam:"ORL",homeTeam:"PHI",awaySeed:7,homeSeed:8,awayScore:97,homeScore:109,status:"final",winner:"PHI",headline:"Maxey's 31-point clinic clinches East 7-seed",topPerformer:"Tyrese Maxey",topPerformerLine:"31 PTS, 7 AST, 4 REB",tv:"ESPN"},
  {gameId:"GSW-LAC-20260415",night:2,date:"April 15",label:"West 9 vs 10",awayTeam:"GSW",homeTeam:"LAC",awaySeed:9,homeSeed:10,awayScore:126,homeScore:121,status:"final",winner:"GSW",eliminated:"LAC",headline:"Curry's vintage 35 eliminates Clippers",topPerformer:"Stephen Curry",topPerformerLine:"35 PTS, 7 3PM, 6 AST",tv:"ESPN"},
  // Night 3 — Friday April 17
  {gameId:"CHA-ORL-20260417",night:3,date:"April 17",label:"East 8-Seed Game",awayTeam:"CHA",homeTeam:"ORL",awaySeed:9,homeSeed:7,awayScore:98,homeScore:108,status:"final",winner:"ORL",eliminated:"CHA",headline:"Magic claim 8-seed — Charlotte eliminated",topPerformer:"Paolo Banchero",topPerformerLine:"28 PTS, 8 REB, 6 AST",tv:"Prime Video"},
  {gameId:"GSW-PHX-20260417",night:3,date:"April 17",label:"West 8-Seed Game",awayTeam:"GSW",homeTeam:"PHX",awaySeed:9,homeSeed:8,awayScore:104,homeScore:112,status:"final",winner:"PHX",eliminated:"GSW",headline:"Suns claim 8-seed — Warriors eliminated",topPerformer:"Devin Booker",topPerformerLine:"31 PTS, 6 AST",tv:"Prime Video"},
];

export const eliminatedTeams: string[] = ["MIA", "LAC", "CHA", "GSW", "PHX", "POR", "ORL", "BOS", "TOR", "ATL", "DEN", "HOU", "LAL", "PHI", "MIN", "DET"];

// --- First Round Series ---

export const firstRoundSeries: PlayoffSeries[] = [
  // EAST
  {seriesId:"east-r1-1v8",conference:"east",round:1,higherSeed:1,lowerSeed:8,higherTeam:"DET",lowerTeam:"ORL",higherWins:4,lowerWins:3,status:"complete",winner:"DET",games:[{gameNumber:1,date:"April 19",homeTeam:"DET",awayTeam:"ORL",homeScore:96,awayScore:102,status:"final"},{gameNumber:2,date:"April 21",homeTeam:"DET",awayTeam:"ORL",homeScore:99,awayScore:104,status:"final"},{gameNumber:3,date:"April 23",homeTeam:"ORL",awayTeam:"DET",homeScore:105,awayScore:101,status:"final"},{gameNumber:4,date:"April 25",homeTeam:"ORL",awayTeam:"DET",homeScore:97,awayScore:110,status:"final"},{gameNumber:5,date:"April 27",homeTeam:"DET",awayTeam:"ORL",homeScore:108,awayScore:99,status:"final"},{gameNumber:6,date:"April 29",homeTeam:"ORL",awayTeam:"DET",homeScore:92,awayScore:88,status:"final"},{gameNumber:7,date:"May 1",homeTeam:"DET",awayTeam:"ORL",homeScore:118,awayScore:95,status:"final"}],narrative:"Historic comeback — Detroit became the first 1-seed to rally from 3-1 down in the same round as another team (PHI over BOS). Orlando scored just 19 in one half of Game 6.",keyMatchup:"Cunningham's resilience vs Banchero's breakout"},
  {seriesId:"east-r1-2v7",conference:"east",round:1,higherSeed:2,lowerSeed:7,higherTeam:"BOS",lowerTeam:"PHI",higherWins:3,lowerWins:4,status:"complete",winner:"PHI",games:[{gameNumber:1,date:"April 19",homeTeam:"BOS",awayTeam:"PHI",homeScore:112,awayScore:98,status:"final"},{gameNumber:2,date:"April 21",homeTeam:"BOS",awayTeam:"PHI",homeScore:105,awayScore:99,status:"final"},{gameNumber:3,date:"April 23",homeTeam:"PHI",awayTeam:"BOS",homeScore:108,awayScore:104,status:"final"},{gameNumber:4,date:"April 25",homeTeam:"PHI",awayTeam:"BOS",homeScore:101,awayScore:110,status:"final"},{gameNumber:5,date:"April 27",homeTeam:"BOS",awayTeam:"PHI",homeScore:102,awayScore:108,status:"final"},{gameNumber:6,date:"April 29",homeTeam:"PHI",awayTeam:"BOS",homeScore:112,awayScore:106,status:"final"},{gameNumber:7,date:"May 1",homeTeam:"BOS",awayTeam:"PHI",homeScore:98,awayScore:104,status:"final"}],narrative:"Philadelphia pulled off the historic upset — Boston blew a 3-1 series lead. Celtics went 0-for-9 on clutch shots in Game 7.",keyMatchup:"Maxey's fearlessness vs Boston's championship pedigree"},
  {seriesId:"east-r1-3v6",conference:"east",round:1,higherSeed:3,lowerSeed:6,higherTeam:"NYK",lowerTeam:"TOR",higherWins:4,lowerWins:2,status:"complete",winner:"NYK",games:[{gameNumber:1,date:"April 19",homeTeam:"NYK",awayTeam:"TOR",homeScore:108,awayScore:96,status:"final"},{gameNumber:2,date:"April 21",homeTeam:"NYK",awayTeam:"TOR",homeScore:115,awayScore:105,status:"final"},{gameNumber:3,date:"April 23",homeTeam:"TOR",awayTeam:"NYK",homeScore:112,awayScore:108,status:"final"},{gameNumber:4,date:"April 25",homeTeam:"TOR",awayTeam:"NYK",homeScore:104,awayScore:110,status:"final"},{gameNumber:5,date:"April 27",homeTeam:"NYK",awayTeam:"TOR",homeScore:98,awayScore:101,status:"final"},{gameNumber:6,date:"April 29",homeTeam:"TOR",awayTeam:"NYK",homeScore:96,awayScore:102,status:"final"}],narrative:"The Knicks advanced in 6 despite a game-winning 3 off the rim in Game 5 for Toronto. Brunson and KAT dominated throughout.",keyMatchup:"Brunson vs Barnes — Brunson won decisively"},
  {seriesId:"east-r1-4v5",conference:"east",round:1,higherSeed:4,lowerSeed:5,higherTeam:"CLE",lowerTeam:"ATL",higherWins:4,lowerWins:2,status:"complete",winner:"CLE",games:[{gameNumber:1,date:"April 18",homeTeam:"CLE",awayTeam:"ATL",homeScore:114,awayScore:105,status:"final"},{gameNumber:2,date:"April 20",homeTeam:"CLE",awayTeam:"ATL",homeScore:109,awayScore:112,status:"final"},{gameNumber:3,date:"April 22",homeTeam:"ATL",awayTeam:"CLE",homeScore:101,awayScore:108,status:"final"},{gameNumber:4,date:"April 24",homeTeam:"ATL",awayTeam:"CLE",homeScore:98,awayScore:95,status:"final"},{gameNumber:5,date:"April 26",homeTeam:"CLE",awayTeam:"ATL",homeScore:118,awayScore:106,status:"final"},{gameNumber:6,date:"April 28",homeTeam:"ATL",awayTeam:"CLE",homeScore:97,awayScore:110,status:"final"}],narrative:"Cleveland advanced in 6 behind Mitchell and Mobley's two-way excellence. Harden provided veteran steadiness throughout.",keyMatchup:"Mitchell vs Young — Mitchell dominated the series"},
  // WEST
  {seriesId:"west-r1-1v8",conference:"west",round:1,higherSeed:1,lowerSeed:8,higherTeam:"OKC",lowerTeam:"PHX",higherWins:4,lowerWins:0,status:"complete",winner:"OKC",games:[{gameNumber:1,date:"April 19",homeTeam:"OKC",awayTeam:"PHX",homeScore:118,awayScore:95,status:"final"},{gameNumber:2,date:"April 21",homeTeam:"OKC",awayTeam:"PHX",homeScore:121,awayScore:104,status:"final"},{gameNumber:3,date:"April 23",homeTeam:"PHX",awayTeam:"OKC",homeScore:99,awayScore:112,status:"final"},{gameNumber:4,date:"April 25",homeTeam:"PHX",awayTeam:"OKC",homeScore:101,awayScore:108,status:"final"}],narrative:"OKC's depth and defense were suffocating. Phoenix never had a chance — the Thunder won every game by 7+ points.",keyMatchup:"SGA dominated the entire Suns roster"},
  {seriesId:"west-r1-2v7",conference:"west",round:1,higherSeed:2,lowerSeed:7,higherTeam:"SAS",lowerTeam:"POR",higherWins:4,lowerWins:1,status:"complete",winner:"SAS",games:[{gameNumber:1,date:"April 19",homeTeam:"SAS",awayTeam:"POR",homeScore:112,awayScore:101,status:"final"},{gameNumber:2,date:"April 21",homeTeam:"SAS",awayTeam:"POR",homeScore:118,awayScore:108,status:"final"},{gameNumber:3,date:"April 23",homeTeam:"POR",awayTeam:"SAS",homeScore:114,awayScore:105,status:"final"},{gameNumber:4,date:"April 25",homeTeam:"POR",awayTeam:"SAS",homeScore:98,awayScore:110,status:"final"},{gameNumber:5,date:"April 27",homeTeam:"SAS",awayTeam:"POR",homeScore:120,awayScore:104,status:"final"}],narrative:"Wembanyama's first playoff series was everything promised — dominant performances at both ends. Avdija fought hard but Portland was outmatched.",keyMatchup:"Wembanyama vs Avdija — Wemby's length was decisive"},
  {seriesId:"west-r1-3v6",conference:"west",round:1,higherSeed:3,lowerSeed:6,higherTeam:"DEN",lowerTeam:"MIN",higherWins:2,lowerWins:4,status:"complete",winner:"MIN",games:[{gameNumber:1,date:"April 18",homeTeam:"DEN",awayTeam:"MIN",homeScore:110,awayScore:102,status:"final"},{gameNumber:2,date:"April 20",homeTeam:"DEN",awayTeam:"MIN",homeScore:108,awayScore:112,status:"final"},{gameNumber:3,date:"April 22",homeTeam:"MIN",awayTeam:"DEN",homeScore:114,awayScore:106,status:"final"},{gameNumber:4,date:"April 24",homeTeam:"MIN",awayTeam:"DEN",homeScore:105,awayScore:109,status:"final"},{gameNumber:5,date:"April 26",homeTeam:"DEN",awayTeam:"MIN",homeScore:102,awayScore:110,status:"final"},{gameNumber:6,date:"April 28",homeTeam:"MIN",awayTeam:"DEN",homeScore:116,awayScore:108,status:"final"}],narrative:"Minnesota eliminated Denver for the second time in three years. Edwards hyperextended his knee and DiVincenzo tore his Achilles, but the backups stepped up heroically.",keyMatchup:"Edwards' resilience vs Jokic's brilliance — depth won out"},
  {seriesId:"west-r1-4v5",conference:"west",round:1,higherSeed:4,lowerSeed:5,higherTeam:"LAL",lowerTeam:"HOU",higherWins:4,lowerWins:2,status:"complete",winner:"LAL",games:[{gameNumber:1,date:"April 18",homeTeam:"LAL",awayTeam:"HOU",homeScore:112,awayScore:105,status:"final"},{gameNumber:2,date:"April 20",homeTeam:"LAL",awayTeam:"HOU",homeScore:108,awayScore:114,status:"final"},{gameNumber:3,date:"April 22",homeTeam:"HOU",awayTeam:"LAL",homeScore:101,awayScore:99,status:"final"},{gameNumber:4,date:"April 24",homeTeam:"HOU",awayTeam:"LAL",homeScore:96,awayScore:108,status:"final"},{gameNumber:5,date:"April 26",homeTeam:"LAL",awayTeam:"HOU",homeScore:116,awayScore:104,status:"final"},{gameNumber:6,date:"April 28",homeTeam:"HOU",awayTeam:"LAL",homeScore:78,awayScore:95,status:"final"}],narrative:"The Lakers advanced despite Doncic's hamstring limiting him. Houston scored only 78 in the elimination game. LeBron and Reaves carried the load.",keyMatchup:"Reaves emerged as the Lakers' best player with Doncic hobbled"},
];

// --- Conference Semifinals Series ---

export const confSemisSeries: PlayoffSeries[] = [
  // EAST
  {seriesId:"east-r2-1v4",conference:"east",round:2,higherSeed:1,lowerSeed:4,higherTeam:"DET",lowerTeam:"CLE",higherWins:3,lowerWins:4,status:"complete",winner:"CLE",games:[{gameNumber:1,date:"May 5",homeTeam:"DET",awayTeam:"CLE",homeScore:111,awayScore:101,status:"final",topPerformer:"Cade Cunningham",topPerformerLine:"28 PTS, 10 AST, 5 REB"},{gameNumber:2,date:"May 7",homeTeam:"DET",awayTeam:"CLE",homeScore:108,awayScore:102,status:"final",topPerformer:"Caris LeVert",topPerformerLine:"22 PTS off bench"},{gameNumber:3,date:"May 9",homeTeam:"CLE",awayTeam:"DET",homeScore:116,awayScore:109,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"35 PTS, 13-24 FG"},{gameNumber:4,date:"May 11",homeTeam:"CLE",awayTeam:"DET",homeScore:112,awayScore:103,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"43 PTS (39 in 2nd half)"},{gameNumber:5,date:"May 13",tv:"ESPN",homeTeam:"DET",awayTeam:"CLE",homeScore:113,awayScore:117,status:"final",topPerformer:"James Harden",topPerformerLine:"30 PTS, 8 REB, 6 AST, 3 BLK (OT)"},{gameNumber:6,date:"May 15",tv:"Prime Video",homeTeam:"CLE",awayTeam:"DET",homeScore:94,awayScore:115,status:"final",topPerformer:"Paul Reed",topPerformerLine:"17 PTS, 6 REB, 7-9 FG"},{gameNumber:7,date:"May 17",tv:"Prime Video",homeTeam:"DET",awayTeam:"CLE",homeScore:94,awayScore:125,status:"final",topPerformer:"Evan Mobley",topPerformerLine:"21 PTS (7-10 FG), 12 REB, 6 AST, +31"}],narrative:"Cleveland delivers a historic 31-point road blowout in Game 7 to win the series 4-3. After Detroit forced Game 7 with their own 21-point road blowout in Game 6, the Cavaliers responded with the most dominant seventh game of the 2026 postseason. Evan Mobley (21/12/6, +31) was the hero, Sam Merrill exploded for 23 off the bench (5-8 3PT), and Mitchell redeemed his Game 6 disaster with 26/8/0 TO. Cade Cunningham's dream season ended in nightmare fashion — 13 points on 5-16, 0-7 from three, minus-32. Cleveland advances to the ECF against the rested Knicks.",keyMatchup:"Mobley's Game 7 dominance was the decisive factor — his two-way excellence broke Detroit's home-court spell"},
  {seriesId:"east-r2-3v7",conference:"east",round:2,higherSeed:3,lowerSeed:7,higherTeam:"NYK",lowerTeam:"PHI",higherWins:4,lowerWins:0,status:"complete",winner:"NYK",games:[{gameNumber:1,date:"May 5",homeTeam:"NYK",awayTeam:"PHI",homeScore:108,awayScore:94,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"29 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"NYK",awayTeam:"PHI",homeScore:112,awayScore:101,status:"final",topPerformer:"Karl-Anthony Towns",topPerformerLine:"26 PTS, 12 REB"},{gameNumber:3,date:"May 9",homeTeam:"PHI",awayTeam:"NYK",homeScore:94,awayScore:108,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"33 PTS, 11-22 FG"},{gameNumber:4,date:"May 11",homeTeam:"PHI",awayTeam:"NYK",homeScore:114,awayScore:144,status:"final",topPerformer:"Miles McBride",topPerformerLine:"25 PTS, 7-9 3PT"}],narrative:"The Knicks authored the most dominant sweep of the 2026 playoffs. Game 4's 144-114 demolition featured a record-tying 25 three-pointers. New York awaits Cleveland in the East Finals with a full week of rest.",keyMatchup:"Brunson orchestrated the entire series — PHI had no answers"},
  // WEST
  {seriesId:"west-r2-1v4",conference:"west",round:2,higherSeed:1,lowerSeed:4,higherTeam:"OKC",lowerTeam:"LAL",higherWins:4,lowerWins:0,status:"complete",winner:"OKC",games:[{gameNumber:1,date:"May 5",homeTeam:"OKC",awayTeam:"LAL",homeScore:118,awayScore:102,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"30 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"OKC",awayTeam:"LAL",homeScore:122,awayScore:108,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"28 PTS, 6 AST"},{gameNumber:3,date:"May 9",homeTeam:"LAL",awayTeam:"OKC",homeScore:108,awayScore:131,status:"final",topPerformer:"Ajay Mitchell",topPerformerLine:"24 PTS, 10 AST career highs"},{gameNumber:4,date:"May 11",homeTeam:"LAL",awayTeam:"OKC",homeScore:110,awayScore:115,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"35 PTS, 8 AST"}],narrative:"OKC's second consecutive sweep. The Thunder are 8-0 in the 2026 playoffs and haven't been seriously threatened. Chet's clutch dunk sealed Game 4. They now face San Antonio in the West Finals.",keyMatchup:"SGA vs the Lakers' entire roster — it was never close"},
  {seriesId:"west-r2-2v6",conference:"west",round:2,higherSeed:2,lowerSeed:6,higherTeam:"SAS",lowerTeam:"MIN",higherWins:4,lowerWins:2,status:"complete",winner:"SAS",games:[{gameNumber:1,date:"May 5",homeTeam:"SAS",awayTeam:"MIN",homeScore:108,awayScore:99,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"28 PTS, 12 REB, 4 BLK"},{gameNumber:2,date:"May 7",homeTeam:"SAS",awayTeam:"MIN",homeScore:104,awayScore:110,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"32 PTS, 7 REB"},{gameNumber:3,date:"May 9",homeTeam:"MIN",awayTeam:"SAS",homeScore:108,awayScore:115,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"39 PTS, 15 REB, 5 BLK"},{gameNumber:4,date:"May 11",homeTeam:"MIN",awayTeam:"SAS",homeScore:114,awayScore:109,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"36 PTS, 6 REB (Wemby ejected)"},{gameNumber:5,date:"May 12",tv:"NBC, Peacock",homeTeam:"SAS",awayTeam:"MIN",homeScore:126,awayScore:97,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"27 PTS, 17 REB, 3 BLK"},{gameNumber:6,date:"May 15",tv:"Prime Video",homeTeam:"MIN",awayTeam:"SAS",homeScore:109,awayScore:139,status:"final",topPerformer:"Stephon Castle",topPerformerLine:"32 PTS, 11 REB, 6 AST, 11-16 FG"}],narrative:"San Antonio clinched the West Finals with a devastating 139-109 road blowout. Stephon Castle's 32/11/6 masterpiece on 11-16 shooting was the defining close-out performance of the 2026 playoffs. The Spurs won their four victories by an average of 25.5 points. Wemby barely broke a sweat in the clincher. The dream matchup is set: OKC vs SAS for the West crown.",keyMatchup:"Castle's emergence as a third star alongside Wemby and Fox ended Minnesota's season"},
];

// --- Conference Finals Series ---

export const confFinalsSeries: PlayoffSeries[] = [
  {seriesId:"east-r3",conference:"east",round:3,higherSeed:3,lowerSeed:4,higherTeam:"NYK",lowerTeam:"CLE",higherWins:1,lowerWins:0,status:"active",games:[{gameNumber:1,date:"May 19",time:"8:00 PM ET",tv:"ESPN",homeTeam:"NYK",awayTeam:"CLE",homeScore:115,awayScore:104,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"38 PTS, 5 REB, 6 AST, 15-29 FG (OT)"},{gameNumber:2,date:"May 21",time:"8:00 PM ET",tv:"ESPN",homeTeam:"NYK",awayTeam:"CLE",homeScore:null,awayScore:null,status:"scheduled"},{gameNumber:3,date:"May 23",time:"8:00 PM ET",tv:"ABC",homeTeam:"CLE",awayTeam:"NYK",homeScore:null,awayScore:null,status:"scheduled"},{gameNumber:4,date:"May 25",time:"8:00 PM ET",tv:"ESPN",homeTeam:"CLE",awayTeam:"NYK",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"The Knicks authored the greatest comeback in Conference Finals history — erasing a 22-point deficit with a 44-11 run behind Brunson's 38-point masterpiece. OG Anunoby returned from a 12-day absence and was an immediate plus-15. Cleveland led by 14 entering the fourth quarter and scored only 3 points in overtime. The Cavaliers' Game 7 adrenaline hit empty. NYK leads 1-0. Game 2 Thursday at MSG.",keyMatchup:"Brunson vs Mitchell — Brunson scored 38 to Mitchell's 29 in Game 1. Brunson's fourth-quarter takeover was the decisive stretch of the series so far.",seriesOdds:"NYK -220"},
  {seriesId:"west-r3",conference:"west",round:3,higherSeed:1,lowerSeed:2,higherTeam:"OKC",lowerTeam:"SAS",higherWins:1,lowerWins:1,status:"active",games:[{gameNumber:1,date:"May 18",time:"8:30 PM ET",tv:"NBC, Peacock",homeTeam:"OKC",awayTeam:"SAS",homeScore:115,awayScore:122,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"41 PTS, 24 REB, 3 AST, +16 (2OT)"},{gameNumber:2,date:"May 20",time:"8:30 PM ET",tv:"NBC, Peacock",homeTeam:"OKC",awayTeam:"SAS",homeScore:122,awayScore:113,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"30 PTS, 9 AST, 4 REB, +14"},{gameNumber:3,date:"May 22",time:"8:30 PM ET",tv:"NBC, Peacock",homeTeam:"SAS",awayTeam:"OKC",homeScore:null,awayScore:null,status:"scheduled"},{gameNumber:4,date:"May 24",time:"8:00 PM ET",tv:"NBC, Peacock",homeTeam:"SAS",awayTeam:"OKC",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"SGA answered his worst playoff game with a 30-point, 9-assist masterclass as OKC evened the series with a 122-113 Game 2 win at Paycom Center. Seven Thunder players scored in double figures. Caruso was +18 off the bench. Jalen Williams returned for 7 minutes. Wemby still posted 21/17/6/4blk but Castle's 9 turnovers proved fatal. Fox missed again. The series is tied 1-1 heading to San Antonio for Games 3-4.",keyMatchup:"The series is now about home court — OKC held serve at Paycom Center after the Game 1 loss. San Antonio gets its first home games Friday and Sunday with Fox potentially returning.",seriesOdds:"OKC -135"},
];

// --- Playoff Performers ---

export const playoffPerformers: PlayoffPerformer[] = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",ppg:31.0,rpg:20.5,apg:4.5,statLine:"21 PTS, 17 REB, 6 AST, 4 BLK in WCF Game 2 loss",trend:"steady",highlight:"Averaging 31.0 PPG and 20.5 RPG in the WCF — historically unprecedented. Even in a loss, his 21/17/6/4blk was dominant."},
  {rank:2,player:"Shai Gilgeous-Alexander",team:"OKC",ppg:29.4,rpg:5.8,apg:7.1,statLine:"30 PTS, 9 AST, 4 REB, +14 in WCF Game 2",trend:"up",highlight:"Redemption game — bounced back from 8-24 Game 1 with 30/9/+14. Attacked from mid-range, avoided Wemby at the rim. Series tied 1-1."},
  {rank:3,player:"Jalen Brunson",team:"NYK",ppg:29.2,rpg:4.1,apg:6.1,statLine:"38 PTS, 5 REB, 6 AST, 15-29 FG in ECF Game 1 (OT)",trend:"steady",highlight:"His 38-point comeback masterpiece remains the ECF's defining moment. Faces Game 2 tonight at MSG. Leads all Conference Finals scorers."},
  {rank:4,player:"Alex Caruso",team:"OKC",ppg:24.0,rpg:3.0,apg:4.0,statLine:"17 PTS, 5 AST, 5-7 FG, 3-4 3PT, +18 (WCF G2)",trend:"up",highlight:"48 combined points on 65% shooting across two WCF games. The best bench player in the 2026 Conference Finals."},
  {rank:5,player:"Stephon Castle",team:"SAS",ppg:21.0,rpg:5.0,apg:9.5,statLine:"25 PTS, 8 AST, 9 TO in WCF Game 2",trend:"down",highlight:"Scored 25 but 9 turnovers were fatal. His WCF G1 (17/11 AST) was much cleaner. Needs Fox back to share the burden."},
  {rank:6,player:"Donovan Mitchell",team:"CLE",ppg:27.9,rpg:5.3,apg:4.8,statLine:"29 PTS, 5 REB, 3 AST, -13 in ECF Game 1 (OT)",trend:"steady",highlight:"Scored 29 but was -13 as Cleveland blew a 22-point lead. Must set the tone tonight at MSG to prevent an 0-2 hole."},
  {rank:7,player:"Devin Vassell",team:"SAS",ppg:19.0,rpg:4.0,apg:1.5,statLine:"22 PTS, 6-12 3PT in WCF Game 2",trend:"up",highlight:"Vassell's 6 threes kept San Antonio competitive. With Fox out, he's the Spurs' most reliable perimeter weapon."},
  {rank:8,player:"Evan Mobley",team:"CLE",ppg:18.2,rpg:9.7,apg:4.0,statLine:"15 PTS, 14 REB, 3 AST in ECF Game 1",trend:"steady",highlight:"Solid double-double but faded in the fourth quarter. His Game 7 demolition of Detroit showed a ceiling the ECF needs."},
  {rank:9,player:"Mikal Bridges",team:"NYK",ppg:17.5,rpg:4.8,apg:2.2,statLine:"18 PTS, 5 REB, +12 in ECF Game 1",trend:"steady",highlight:"The connective tissue of the Knicks' 44-11 comeback run. His defense on Mitchell was the unsung story of Game 1."},
  {rank:10,player:"Dylan Harper",team:"SAS",ppg:18.0,rpg:6.5,apg:4.5,statLine:"12 PTS, 2 REB, 3 AST in WCF Game 2",trend:"down",highlight:"Quiet Game 2 after his historic 24/11/6/7stl Game 1. OKC adjusted to limit his impact. Must reassert in San Antonio."},
];

// --- MVP Candidates ---

export const mvpCandidates: MvpCandidate[] = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",odds:"+200",playoffAvg:"26.3 PPG, 12.5 RPG, 3.2 BPG",record:"9-4 (WCF tied 1-1)",signatureMoment:"41 PTS, 24 REB in a double-OT road win at OKC WITHOUT De'Aaron Fox — followed by 21/17/6/4blk in the Game 2 loss. Averaging 31.0 PPG and 20.5 RPG in the WCF.",trend:"steady"},
  {rank:2,player:"Shai Gilgeous-Alexander",team:"OKC",odds:"+175",playoffAvg:"29.4 PPG, 5.8 RPG, 7.1 APG",record:"9-1 (WCF tied 1-1)",signatureMoment:"Answered his worst playoff game (8-24 in G1) with a 30/9/+14 redemption masterclass in Game 2 that tied the WCF. Back-to-back MVP's composure under pressure.",trend:"up"},
  {rank:3,player:"Jalen Brunson",team:"NYK",odds:"+350",playoffAvg:"29.2 PPG, 6.1 APG, 4.1 RPG",record:"9-2 (leads ECF 1-0)",signatureMoment:"38-point masterpiece powering a 22-point comeback with a 44-11 run in ECF Game 1 — the greatest comeback in Conference Finals history. Game 2 tonight at MSG.",trend:"steady"},
  {rank:4,player:"Donovan Mitchell",team:"CLE",odds:"+2500",playoffAvg:"27.9 PPG, 5.3 RPG, 4.8 APG",record:"8-6 (trails ECF 0-1)",signatureMoment:"Scored 29 in ECF Game 1 but watched a 22-point lead evaporate. Tonight's Game 2 at MSG is his most important game of the postseason.",trend:"down"},
  {rank:5,player:"Alex Caruso",team:"OKC",odds:"+8000",playoffAvg:"18.5 PPG, 3.5 RPG, 4.0 APG",record:"9-1 (WCF tied 1-1)",signatureMoment:"48 combined points on 65% shooting across two WCF games — the best bench production in the 2026 Conference Finals. The Thunder's X-factor.",trend:"up"},
];

// --- Elimination Watch ---

export const eliminationWatch: EliminationWatch[] = [
  {team:"OKC",opponent:"SAS",situation:"TIED 1-1 after SGA's 30-point Game 2 redemption. Series shifts to San Antonio for Games 3-4. Jalen Williams returned (7 min). OKC's depth was decisive — 7 players in double figures.",gameInfo:"OKC 122, SAS 113 (May 20) — Game 3: Fri May 22 at SAS, 8:30 PM ET, NBC.",urgency:"tied"},
  {team:"SAS",opponent:"OKC",situation:"TIED 1-1 after dropping Game 2. Castle's 9 turnovers were decisive. Fox missed again — SAS desperately needs him for Game 3 at home. Wemby's 21/17/6/4blk wasn't enough.",gameInfo:"OKC 122, SAS 113 (May 20) — Game 3: Fri May 22 at SAS, 8:30 PM ET, NBC. Fox targeting return.",urgency:"tied"},
  {team:"CLE",opponent:"NYK",situation:"TRAILING 0-1 after blowing 22-point lead in ECF Game 1. Must win Game 2 TONIGHT at MSG to avoid 0-2 hole. Harden's playmaking must improve (3 AST in G1). Mitchell needs 35+ to keep series alive.",gameInfo:"NYK 115, CLE 104 (OT, May 19) — Game 2: TONIGHT 8 PM ET at NYK, ESPN.",urgency:"trailing"},
  {team:"NYK",opponent:"CLE",situation:"LEADING 1-0 after historic 22-point comeback. Game 2 TONIGHT at MSG. A win gives NYK a 2-0 lead heading to Cleveland. Brunson, Bridges, Anunoby all clicking.",gameInfo:"NYK 115, CLE 104 (OT, May 19) — Game 2: TONIGHT 8 PM ET at NYK, ESPN.",urgency:"leading"},
  {team:"DET",opponent:"CLE",situation:"ELIMINATED — Lost Game 7 at home 94-125.",gameInfo:"CLE 125, DET 94 (May 17) — Season over.",urgency:"eliminated"},
  {team:"MIN",opponent:"SAS",situation:"Eliminated — Lost 2-4 in West Semis.",gameInfo:"SAS 139, MIN 109 (May 15) — Season over.",urgency:"eliminated"},
  {team:"LAL",opponent:"OKC",situation:"Eliminated — Swept 4-0 in West Semis.",gameInfo:"OKC 115, LAL 110 (May 11) — Season over.",urgency:"eliminated"},
  {team:"PHI",opponent:"NYK",situation:"Eliminated — Swept 4-0 in East Semis.",gameInfo:"NYK 144, PHI 114 (May 11) — Season over.",urgency:"eliminated"},
  {team:"BOS",opponent:"PHI",situation:"Eliminated — Lost 3-4 in East R1 (blew 3-1 lead).",gameInfo:"PHI 104, BOS 98 in Game 7 — Season over.",urgency:"eliminated"},
  {team:"DEN",opponent:"MIN",situation:"Eliminated — Lost 2-4 in West R1.",gameInfo:"MIN 116, DEN 108 in Game 6 — Season over.",urgency:"eliminated"},
];

// --- Bracket Meta ---

export const bracketMeta = {
  lastUpdated: "May 21, 2026",
  currentRound: "Conference Finals — WCF: OKC-SAS tied 1-1, ECF: NYK leads CLE 1-0",
  nextMilestone: "TONIGHT 8 PM ET — ECF Game 2: CLE @ NYK on ESPN. WCF Game 3: Fri May 22 at SAS, 8:30 PM ET, NBC.",
  teamsRemaining: 4,
  teamsEliminated: 16,
  gamesPlayed: 50,
  playInComplete: true,
  firstRoundStarts: "April 18",
  confFinalsProjected: "May 18-20",
  finalsStart: "June 3",
};

/** All bracket series in postseason order (R1 → semis → finals). */
export function allBracketSeries(): PlayoffSeries[] {
  return [...firstRoundSeries, ...confSemisSeries, ...confFinalsSeries];
}
