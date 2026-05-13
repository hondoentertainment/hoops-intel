// ═══════════════════════════════════════════════════════════
// HOOPS INTEL — Playoff Bracket Data
// Updated daily alongside pulseData.ts by the hoops-intel cron
// Last updated: May 13, 2026
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
  {gameId:"POR-PHX-20260414",night:1,date:"April 14",label:"West 7 vs 8",awayTeam:"POR",homeTeam:"PHX",awaySeed:7,homeSeed:8,awayScore:114,homeScore:110,status:"final",winner:"POR",headline:"Avdija's historic 41 clinches West 7-seed",topPerformer:"Deni Avdija",topPerformerLine:"41 PTS, 12 AST, 7 REB",tv:"ESPN"},
  // Night 2 — Wednesday April 15
  {gameId:"ORL-PHI-20260415",night:2,date:"April 15",label:"East 7 vs 8",awayTeam:"ORL",homeTeam:"PHI",awaySeed:7,homeSeed:8,awayScore:97,homeScore:109,status:"final",winner:"PHI",headline:"Maxey's 31-point clinic clinches East 7-seed",topPerformer:"Tyrese Maxey",topPerformerLine:"31 PTS, 7 AST, 4 REB",tv:"ESPN"},
  {gameId:"GSW-LAC-20260415",night:2,date:"April 15",label:"West 9 vs 10",awayTeam:"GSW",homeTeam:"LAC",awaySeed:9,homeSeed:10,awayScore:126,homeScore:121,status:"final",winner:"GSW",eliminated:"LAC",headline:"Curry's vintage 35 eliminates Clippers",topPerformer:"Stephen Curry",topPerformerLine:"35 PTS, 7 3PM, 6 AST",tv:"ESPN"},
  // Night 3 — Friday April 17
  {gameId:"CHA-ORL-20260417",night:3,date:"April 17",label:"East 8-Seed Game",awayTeam:"CHA",homeTeam:"ORL",awaySeed:9,homeSeed:7,awayScore:98,homeScore:108,status:"final",winner:"ORL",eliminated:"CHA",headline:"Magic claim 8-seed — Charlotte eliminated",topPerformer:"Paolo Banchero",topPerformerLine:"28 PTS, 8 REB, 6 AST",tv:"Prime Video"},
  {gameId:"GSW-PHX-20260417",night:3,date:"April 17",label:"West 8-Seed Game",awayTeam:"GSW",homeTeam:"PHX",awaySeed:9,homeSeed:8,awayScore:104,homeScore:112,status:"final",winner:"PHX",eliminated:"GSW",headline:"Suns claim 8-seed — Warriors eliminated",topPerformer:"Devin Booker",topPerformerLine:"31 PTS, 6 AST",tv:"Prime Video"},
];

export const eliminatedTeams: string[] = ["MIA", "LAC", "CHA", "GSW", "PHX", "POR", "ORL", "BOS", "TOR", "ATL", "DEN", "HOU", "LAL", "PHI"];

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
  {seriesId:"east-r2-1v4",conference:"east",round:2,higherSeed:1,lowerSeed:4,higherTeam:"DET",lowerTeam:"CLE",higherWins:2,lowerWins:2,status:"active",games:[{gameNumber:1,date:"May 5",homeTeam:"DET",awayTeam:"CLE",homeScore:111,awayScore:101,status:"final",topPerformer:"Cade Cunningham",topPerformerLine:"28 PTS, 10 AST, 5 REB"},{gameNumber:2,date:"May 7",homeTeam:"DET",awayTeam:"CLE",homeScore:108,awayScore:102,status:"final",topPerformer:"Caris LeVert",topPerformerLine:"22 PTS off bench"},{gameNumber:3,date:"May 9",homeTeam:"CLE",awayTeam:"DET",homeScore:116,awayScore:109,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"35 PTS, 13-24 FG"},{gameNumber:4,date:"May 11",homeTeam:"CLE",awayTeam:"DET",homeScore:112,awayScore:103,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"43 PTS (39 in 2nd half)"},{gameNumber:5,date:"May 13",time:"8:00 PM ET",tv:"ESPN",homeTeam:"DET",awayTeam:"CLE",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Mitchell's record-tying 43-point Game 4 evened the series after Detroit took a 2-0 lead at home. Cleveland's defense found its identity with Mobley's 5-block, +30 masterpiece. Game 5 in Detroit on Wednesday is pivotal.",keyMatchup:"Mitchell vs Cunningham — the defining matchup of the East Semis",seriesOdds:"DET -130"},
  {seriesId:"east-r2-3v7",conference:"east",round:2,higherSeed:3,lowerSeed:7,higherTeam:"NYK",lowerTeam:"PHI",higherWins:4,lowerWins:0,status:"complete",winner:"NYK",games:[{gameNumber:1,date:"May 5",homeTeam:"NYK",awayTeam:"PHI",homeScore:108,awayScore:94,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"29 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"NYK",awayTeam:"PHI",homeScore:112,awayScore:101,status:"final",topPerformer:"Karl-Anthony Towns",topPerformerLine:"26 PTS, 12 REB"},{gameNumber:3,date:"May 9",homeTeam:"PHI",awayTeam:"NYK",homeScore:94,awayScore:108,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"33 PTS, 11-22 FG"},{gameNumber:4,date:"May 11",homeTeam:"PHI",awayTeam:"NYK",homeScore:114,awayScore:144,status:"final",topPerformer:"Miles McBride",topPerformerLine:"25 PTS, 7-9 3PT"}],narrative:"The Knicks authored the most dominant sweep of the 2026 playoffs. Game 4's 144-114 demolition featured a record-tying 25 three-pointers. New York awaits the East Finals.",keyMatchup:"Brunson orchestrated the entire series — PHI had no answers"},
  // WEST
  {seriesId:"west-r2-1v4",conference:"west",round:2,higherSeed:1,lowerSeed:4,higherTeam:"OKC",lowerTeam:"LAL",higherWins:4,lowerWins:0,status:"complete",winner:"OKC",games:[{gameNumber:1,date:"May 5",homeTeam:"OKC",awayTeam:"LAL",homeScore:118,awayScore:102,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"30 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"OKC",awayTeam:"LAL",homeScore:122,awayScore:108,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"28 PTS, 6 AST"},{gameNumber:3,date:"May 9",homeTeam:"LAL",awayTeam:"OKC",homeScore:108,awayScore:131,status:"final",topPerformer:"Ajay Mitchell",topPerformerLine:"24 PTS, 10 AST career highs"},{gameNumber:4,date:"May 11",homeTeam:"LAL",awayTeam:"OKC",homeScore:110,awayScore:115,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"35 PTS, 8 AST"}],narrative:"OKC's second consecutive sweep. The Thunder are 8-0 in the 2026 playoffs and haven't been seriously threatened. Chet's clutch dunk sealed Game 4. They now await the West Finals opponent.",keyMatchup:"SGA vs the Lakers' entire roster — it was never close"},
  {seriesId:"west-r2-2v6",conference:"west",round:2,higherSeed:2,lowerSeed:6,higherTeam:"SAS",lowerTeam:"MIN",higherWins:3,lowerWins:2,status:"active",games:[{gameNumber:1,date:"May 5",homeTeam:"SAS",awayTeam:"MIN",homeScore:108,awayScore:99,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"28 PTS, 12 REB, 4 BLK"},{gameNumber:2,date:"May 7",homeTeam:"SAS",awayTeam:"MIN",homeScore:104,awayScore:110,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"32 PTS, 7 REB"},{gameNumber:3,date:"May 9",homeTeam:"MIN",awayTeam:"SAS",homeScore:108,awayScore:115,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"39 PTS, 15 REB, 5 BLK"},{gameNumber:4,date:"May 11",homeTeam:"MIN",awayTeam:"SAS",homeScore:114,awayScore:109,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"36 PTS, 6 REB (Wemby ejected)"},{gameNumber:5,date:"May 12",tv:"NBC, Peacock",homeTeam:"SAS",awayTeam:"MIN",homeScore:126,awayScore:97,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"27 PTS, 17 REB, 3 BLK"},{gameNumber:6,date:"May 15",time:"8:00 PM ET",tv:"TBD",homeTeam:"MIN",awayTeam:"SAS",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Wembanyama's redemption game — 27/17/3BLK in a 29-point blowout two days after his ejection — gave San Antonio a 3-2 series lead. The Spurs can clinch a trip to the West Finals in Game 6 at Minnesota. Edwards was held to 20 points in his quietest game of the series.",keyMatchup:"Wembanyama vs Edwards — generational talent clash, SAS one win away",seriesOdds:"SAS -220",eliminationGame:true},
];

// --- Conference Finals Series (Pending) ---

export const confFinalsSeries: PlayoffSeries[] = [
  {seriesId:"east-r3",conference:"east",round:3,higherSeed:1,lowerSeed:3,higherTeam:"NYK",lowerTeam:"TBD",higherWins:0,lowerWins:0,status:"scheduled",games:[],narrative:"The Knicks await the winner of DET vs CLE. New York swept Philadelphia and will have extended rest — a significant advantage. If Detroit advances, it's 1-seed vs 3-seed. If Cleveland advances, it's 3-seed vs 4-seed.",keyMatchup:"Brunson vs Cunningham or Mitchell — either matchup is elite"},
  {seriesId:"west-r3",conference:"west",round:3,higherSeed:1,lowerSeed:2,higherTeam:"OKC",lowerTeam:"TBD",higherWins:0,lowerWins:0,status:"scheduled",games:[],narrative:"The 8-0 Thunder await the SAS-MIN winner. OKC has been historically dominant — two sweeps, no losses. Whether they face Wembanyama's Spurs or Edwards' Wolves, the Thunder are heavy favorites.",keyMatchup:"SGA vs Wembanyama or Edwards — the matchup the basketball world craves"},
];

// --- Playoff Performers ---

export const playoffPerformers: PlayoffPerformer[] = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",ppg:30.1,rpg:6.2,apg:6.5,statLine:"30.1 PPG, 6.2 RPG, 6.5 APG (8-0)",trend:"steady",highlight:"8-0 with two sweeps — the Playoff MVP frontrunner is resting and waiting for the West Finals."},
  {rank:2,player:"Victor Wembanyama",team:"SAS",ppg:25.2,rpg:12.4,apg:2.8,statLine:"25.2 PPG, 12.4 RPG, 3.4 BPG",trend:"up",highlight:"Redemption Game 5: 27/17/5/3BLK in a 29-point rout. Two days after ejection, delivered the most composed game of his career. SAS leads 3-2."},
  {rank:3,player:"Donovan Mitchell",team:"CLE",ppg:33.5,rpg:5.3,apg:4.8,statLine:"33.5 PPG in East Semis",trend:"steady",highlight:"Record-tying 43-point Game 4 with 39 in the second half. Tonight's Game 5 at Detroit determines everything."},
  {rank:4,player:"Anthony Edwards",team:"MIN",ppg:28.0,rpg:5.4,apg:3.8,statLine:"28.0 PPG through 11 playoff games",trend:"down",highlight:"Held to 20 points on 6-13 in Game 5 blowout. After back-to-back heroics, Edwards' quietest night handed SAS a 3-2 lead. Now facing elimination."},
  {rank:5,player:"Jalen Brunson",team:"NYK",ppg:27.8,rpg:3.8,apg:6.3,statLine:"27.8 PPG, 6.3 APG across 4-game sweep",trend:"steady",highlight:"Led the most dominant sweep of the 2026 playoffs. Resting with extended time before the East Finals — freshness could be decisive."},
  {rank:6,player:"Ajay Mitchell",team:"OKC",ppg:20.5,rpg:2.8,apg:5.2,statLine:"20.5 PPG off bench in playoffs",trend:"steady",highlight:"28/3/4 with 4 STL in the sweep-clincher. Undrafted guard averaging 20+ off the bench in the playoffs — an unprecedented run."},
  {rank:7,player:"Evan Mobley",team:"CLE",ppg:16.5,rpg:8.2,apg:4.0,statLine:"16.5 PPG, 8.2 RPG, 3.8 BPG",trend:"steady",highlight:"+30 with 5 blocks in Game 4 was the best two-way performance of the 2026 postseason. Tonight's Game 5 at Detroit is the stage."},
  {rank:8,player:"James Harden",team:"CLE",ppg:21.3,rpg:3.5,apg:9.8,statLine:"21.3 PPG, 9.8 APG in playoffs",trend:"steady",highlight:"Vintage 24/11 with 9-9 FT in Game 4. The steady engine behind Cleveland's series comeback. Game 5 tonight."},
  {rank:9,player:"Cade Cunningham",team:"DET",ppg:25.8,rpg:5.4,apg:9.1,statLine:"25.8 PPG, 9.1 APG in East Semis",trend:"down",highlight:"Elite averages but -23 in Game 4 loss. Detroit's franchise player needs a bounce-back tonight at home."},
  {rank:10,player:"Stephon Castle",team:"SAS",ppg:14.6,rpg:3.8,apg:4.5,statLine:"14.6 PPG, 4.5 APG in playoffs",trend:"up",highlight:"17 PTS, 6 AST on 8-11 FG in Game 5. The sophomore guard is emerging as SAS's third star behind Wemby and Fox."},
];

// --- MVP Candidates ---

export const mvpCandidates: MvpCandidate[] = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",odds:"-160",playoffAvg:"30.1 PPG, 6.2 RPG, 6.5 APG",record:"8-0 (two sweeps)",signatureMoment:"35-point, 8-assist sweep-clincher against the Lakers — 8-0 and the clear frontrunner",trend:"steady"},
  {rank:2,player:"Victor Wembanyama",team:"SAS",odds:"+500",playoffAvg:"25.2 PPG, 12.4 RPG, 3.4 BPG",record:"7-3 (leads MIN 3-2)",signatureMoment:"27/17/3BLK redemption game after ejection — composed, dominant, one win from WCF",trend:"up"},
  {rank:3,player:"Jalen Brunson",team:"NYK",odds:"+450",playoffAvg:"27.8 PPG, 6.3 APG, 3.8 RPG",record:"8-2 (swept PHI in R2)",signatureMoment:"Led the Knicks to a dominant sweep — 33-point Game 3 put Philadelphia on the brink",trend:"steady"},
  {rank:4,player:"Donovan Mitchell",team:"CLE",odds:"+700",playoffAvg:"33.5 PPG, 5.3 RPG, 4.8 APG",record:"6-4 (tied 2-2 in R2)",signatureMoment:"43-point Game 4 with record-tying 39 in the second half saved Cleveland's season",trend:"steady"},
  {rank:5,player:"Anthony Edwards",team:"MIN",odds:"+2500",playoffAvg:"28.0 PPG, 5.4 RPG, 3.8 APG",record:"6-5 (trailing 2-3)",signatureMoment:"36-point tribute game in Game 4 — but 20-point quiet Game 5 and a 2-3 deficit hurt his case",trend:"down"},
];

// --- Elimination Watch ---

export const eliminationWatch: EliminationWatch[] = [
  {team:"MIN",opponent:"SAS",situation:"Facing elimination — trailing 2-3, must win Game 6 at home",gameInfo:"SAS @ MIN, May 15, TBD — Edwards needs his best game to extend the series",urgency:"elimination"},
  {team:"DET",opponent:"CLE",situation:"Series tied 2-2 — Game 5 tonight at home",gameInfo:"CLE @ DET, May 13, 8:00 PM ET, ESPN — Cunningham must respond after -23 in Game 4",urgency:"tied"},
  {team:"CLE",opponent:"DET",situation:"Series tied 2-2 — Game 5 tonight on the road",gameInfo:"CLE @ DET, May 13, 8:00 PM ET, ESPN — Mitchell riding 43-point momentum",urgency:"tied"},
  {team:"SAS",opponent:"MIN",situation:"Leading 3-2 — can clinch West Finals in Game 6 at Minnesota",gameInfo:"SAS @ MIN, May 15, TBD — Wemby's redemption game shifted the series",urgency:"leading"},
  {team:"OKC",opponent:"TBD",situation:"Advancing — 8-0, awaiting West Finals opponent (SAS or MIN)",gameInfo:"West Finals begins after SAS-MIN concludes",urgency:"advancing"},
  {team:"NYK",opponent:"TBD",situation:"Advancing — Awaiting East Finals opponent (DET or CLE)",gameInfo:"East Finals begins after DET-CLE concludes",urgency:"advancing"},
  {team:"LAL",opponent:"OKC",situation:"Eliminated — Swept 4-0 in West Semis",gameInfo:"OKC 115, LAL 110 (May 11) — Season over",urgency:"eliminated"},
  {team:"PHI",opponent:"NYK",situation:"Eliminated — Swept 4-0 in East Semis",gameInfo:"NYK 144, PHI 114 (May 11) — Season over",urgency:"eliminated"},
  {team:"BOS",opponent:"PHI",situation:"Eliminated — Lost 3-4 in East R1 (blew 3-1 lead)",gameInfo:"PHI 104, BOS 98 in Game 7 — Season over",urgency:"eliminated"},
  {team:"DEN",opponent:"MIN",situation:"Eliminated — Lost 2-4 in West R1",gameInfo:"MIN 116, DEN 108 in Game 6 — Season over",urgency:"eliminated"},
];

// --- Bracket Meta ---

export const bracketMeta = {
  lastUpdated: "May 13, 2026",
  currentRound: "Conference Semifinals",
  nextMilestone: "Conference Finals — East: NYK vs DET/CLE, West: OKC vs SAS/MIN. SAS can clinch in Game 6.",
  teamsRemaining: 6,
  teamsEliminated: 14,
  gamesPlayed: 43,
  playInComplete: true,
  firstRoundStarts: "April 18",
  confFinalsProjected: "May 18-19",
  finalsStart: "June 3",
};
