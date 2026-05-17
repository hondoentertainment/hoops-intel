// ═══════════════════════════════════════════════════════════
// HOOPS INTEL — Playoff Bracket Data
// Updated daily alongside pulseData.ts by the hoops-intel cron
// Last updated: May 17, 2026
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

export const eliminatedTeams: string[] = ["MIA", "LAC", "CHA", "GSW", "PHX", "POR", "ORL", "BOS", "TOR", "ATL", "DEN", "HOU", "LAL", "PHI", "MIN"];

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
  {seriesId:"east-r2-1v4",conference:"east",round:2,higherSeed:1,lowerSeed:4,higherTeam:"DET",lowerTeam:"CLE",higherWins:3,lowerWins:3,status:"active",games:[{gameNumber:1,date:"May 5",homeTeam:"DET",awayTeam:"CLE",homeScore:111,awayScore:101,status:"final",topPerformer:"Cade Cunningham",topPerformerLine:"28 PTS, 10 AST, 5 REB"},{gameNumber:2,date:"May 7",homeTeam:"DET",awayTeam:"CLE",homeScore:108,awayScore:102,status:"final",topPerformer:"Caris LeVert",topPerformerLine:"22 PTS off bench"},{gameNumber:3,date:"May 9",homeTeam:"CLE",awayTeam:"DET",homeScore:116,awayScore:109,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"35 PTS, 13-24 FG"},{gameNumber:4,date:"May 11",homeTeam:"CLE",awayTeam:"DET",homeScore:112,awayScore:103,status:"final",topPerformer:"Donovan Mitchell",topPerformerLine:"43 PTS (39 in 2nd half)"},{gameNumber:5,date:"May 13",tv:"ESPN",homeTeam:"DET",awayTeam:"CLE",homeScore:113,awayScore:117,status:"final",topPerformer:"James Harden",topPerformerLine:"30 PTS, 8 REB, 6 AST, 3 BLK (OT)"},{gameNumber:6,date:"May 15",tv:"Prime Video",homeTeam:"CLE",awayTeam:"DET",homeScore:94,awayScore:115,status:"final",topPerformer:"Paul Reed",topPerformerLine:"17 PTS, 6 REB, 7-9 FG"},{gameNumber:7,date:"May 17",time:"8:00 PM ET",tv:"Prime Video",homeTeam:"DET",awayTeam:"CLE",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Detroit storms back! After Cleveland took a 3-2 lead with Harden's OT masterpiece, the Pistons delivered a stunning 115-94 road blowout to force Game 7. Mitchell shot 6-of-20, Harden committed 8 turnovers, and Detroit's depth — led by Paul Reed's 17 off the bench — was overwhelming. Game 7 at Little Caesars Arena on Sunday for the East Finals berth.",keyMatchup:"Cunningham's playmaking vs Cleveland's collapsing stars — Cade has been the series' best player",seriesOdds:"DET -155",eliminationGame:false},
  {seriesId:"east-r2-3v7",conference:"east",round:2,higherSeed:3,lowerSeed:7,higherTeam:"NYK",lowerTeam:"PHI",higherWins:4,lowerWins:0,status:"complete",winner:"NYK",games:[{gameNumber:1,date:"May 5",homeTeam:"NYK",awayTeam:"PHI",homeScore:108,awayScore:94,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"29 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"NYK",awayTeam:"PHI",homeScore:112,awayScore:101,status:"final",topPerformer:"Karl-Anthony Towns",topPerformerLine:"26 PTS, 12 REB"},{gameNumber:3,date:"May 9",homeTeam:"PHI",awayTeam:"NYK",homeScore:94,awayScore:108,status:"final",topPerformer:"Jalen Brunson",topPerformerLine:"33 PTS, 11-22 FG"},{gameNumber:4,date:"May 11",homeTeam:"PHI",awayTeam:"NYK",homeScore:114,awayScore:144,status:"final",topPerformer:"Miles McBride",topPerformerLine:"25 PTS, 7-9 3PT"}],narrative:"The Knicks authored the most dominant sweep of the 2026 playoffs. Game 4's 144-114 demolition featured a record-tying 25 three-pointers. New York awaits the East Finals.",keyMatchup:"Brunson orchestrated the entire series — PHI had no answers"},
  // WEST
  {seriesId:"west-r2-1v4",conference:"west",round:2,higherSeed:1,lowerSeed:4,higherTeam:"OKC",lowerTeam:"LAL",higherWins:4,lowerWins:0,status:"complete",winner:"OKC",games:[{gameNumber:1,date:"May 5",homeTeam:"OKC",awayTeam:"LAL",homeScore:118,awayScore:102,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"30 PTS, 7 AST"},{gameNumber:2,date:"May 7",homeTeam:"OKC",awayTeam:"LAL",homeScore:122,awayScore:108,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"28 PTS, 6 AST"},{gameNumber:3,date:"May 9",homeTeam:"LAL",awayTeam:"OKC",homeScore:108,awayScore:131,status:"final",topPerformer:"Ajay Mitchell",topPerformerLine:"24 PTS, 10 AST career highs"},{gameNumber:4,date:"May 11",homeTeam:"LAL",awayTeam:"OKC",homeScore:110,awayScore:115,status:"final",topPerformer:"Shai Gilgeous-Alexander",topPerformerLine:"35 PTS, 8 AST"}],narrative:"OKC's second consecutive sweep. The Thunder are 8-0 in the 2026 playoffs and haven't been seriously threatened. Chet's clutch dunk sealed Game 4. They now await the West Finals against San Antonio.",keyMatchup:"SGA vs the Lakers' entire roster — it was never close"},
  {seriesId:"west-r2-2v6",conference:"west",round:2,higherSeed:2,lowerSeed:6,higherTeam:"SAS",lowerTeam:"MIN",higherWins:4,lowerWins:2,status:"complete",winner:"SAS",games:[{gameNumber:1,date:"May 5",homeTeam:"SAS",awayTeam:"MIN",homeScore:108,awayScore:99,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"28 PTS, 12 REB, 4 BLK"},{gameNumber:2,date:"May 7",homeTeam:"SAS",awayTeam:"MIN",homeScore:104,awayScore:110,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"32 PTS, 7 REB"},{gameNumber:3,date:"May 9",homeTeam:"MIN",awayTeam:"SAS",homeScore:108,awayScore:115,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"39 PTS, 15 REB, 5 BLK"},{gameNumber:4,date:"May 11",homeTeam:"MIN",awayTeam:"SAS",homeScore:114,awayScore:109,status:"final",topPerformer:"Anthony Edwards",topPerformerLine:"36 PTS, 6 REB (Wemby ejected)"},{gameNumber:5,date:"May 12",tv:"NBC, Peacock",homeTeam:"SAS",awayTeam:"MIN",homeScore:126,awayScore:97,status:"final",topPerformer:"Victor Wembanyama",topPerformerLine:"27 PTS, 17 REB, 3 BLK"},{gameNumber:6,date:"May 15",tv:"Prime Video",homeTeam:"MIN",awayTeam:"SAS",homeScore:109,awayScore:139,status:"final",topPerformer:"Stephon Castle",topPerformerLine:"32 PTS, 11 REB, 6 AST, 11-16 FG"}],narrative:"San Antonio clinches the West Finals with a devastating 139-109 road blowout. Stephon Castle's 32/11/6 masterpiece on 11-16 shooting was the defining close-out performance of the 2026 playoffs. The Spurs won their four victories by an average of 25.5 points. Minnesota was outscored by 97 points in their four losses. Wemby barely broke a sweat in the clincher — 19/6/3BLK in 27 minutes. The dream matchup is set: OKC vs SAS for the West crown.",keyMatchup:"Castle's emergence as a third star alongside Wemby and Fox ended Minnesota's season"},
];

// --- Conference Finals Series ---

export const confFinalsSeries: PlayoffSeries[] = [
  {seriesId:"east-r3",conference:"east",round:3,higherSeed:1,lowerSeed:3,higherTeam:"NYK",lowerTeam:"TBD",higherWins:0,lowerWins:0,status:"scheduled",games:[],narrative:"TONIGHT'S Game 7 decides the opponent. If Detroit wins at home, the 1-seed earns home-court advantage in the East Finals (DET vs NYK). If Cleveland pulls the road upset, the 3-seed Knicks get home court (NYK vs CLE). Either way, Brunson and the fully rested Knicks — idle since May 11 — are the favorites. Anunoby practiced Saturday and said his hamstring is improving.",keyMatchup:"Brunson vs Cunningham or Mitchell — either matchup defines the East"},
  {seriesId:"west-r3",conference:"west",round:3,higherSeed:1,lowerSeed:2,higherTeam:"OKC",lowerTeam:"SAS",higherWins:0,lowerWins:0,status:"active",games:[{gameNumber:1,date:"May 18",time:"8:30 PM ET",tv:"TBD",homeTeam:"OKC",awayTeam:"SAS",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"THE DREAM MATCHUP TIPS OFF MONDAY. SGA vs Wembanyama. The reigning MVP vs the reigning DPOY. The defending champions (8-0, back-to-back sweeps) vs the franchise that just demolished Minnesota by 30 in a road clincher. OKC has home-court advantage and six days of rest. San Antonio has Castle's breakout, Fox's surgical precision, and a 21-year-old generational talent at center. The Jalen Williams hamstring question looms — OKC is 8-0 without him but San Antonio's depth may be the first roster to truly test that absence. Series odds: OKC -260, SAS +210.",keyMatchup:"SGA vs Wembanyama — the generational showdown the basketball world has been waiting for",seriesOdds:"OKC -260"},
];

// --- Playoff Performers ---

export const playoffPerformers: PlayoffPerformer[] = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",ppg:30.1,rpg:6.2,apg:6.5,statLine:"30.1 PPG, 6.2 RPG, 6.5 APG (8-0)",trend:"steady",highlight:"8-0 with two sweeps — resting since May 11 and fully loaded for the West Finals against San Antonio."},
  {rank:2,player:"Stephon Castle",team:"SAS",ppg:22.0,rpg:7.5,apg:4.5,statLine:"32 PTS, 11 REB, 6 AST in clincher",trend:"up",highlight:"The series-clinching 32/11/6 on 11-16 FG was the best close-out performance of the 2026 playoffs. Castle is a star."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",ppg:24.3,rpg:10.8,apg:2.8,statLine:"24.3 PPG, 10.8 RPG, 3.2 BPG (West Semis)",trend:"steady",highlight:"Coasted to 19/6/3BLK in 27 min in the clincher. Didn't need to dominate — Castle handled it. West Finals awaits at age 21."},
  {rank:4,player:"Cade Cunningham",team:"DET",ppg:27.0,rpg:4.8,apg:8.5,statLine:"21 PTS, 8 AST in Game 6 road blowout",trend:"up",highlight:"From 39 in a loss to orchestrating a 21-point road blowout. The best player in the DET-CLE series gets Game 7 at home."},
  {rank:5,player:"Donovan Mitchell",team:"CLE",ppg:28.0,rpg:4.8,apg:3.8,statLine:"18 PTS on 6-20 FG, -25 in Game 6",trend:"down",highlight:"Catastrophic Game 6 (6-20 FG, -25) after 43-point Game 4. Must rebound in Game 7 on the road."},
  {rank:6,player:"De'Aaron Fox",team:"SAS",ppg:19.5,rpg:3.8,apg:7.2,statLine:"21 PTS, 9 AST, 8-10 FG in clincher",trend:"up",highlight:"Surgical 8-of-10 efficiency in the close-out. The steady hand that let Castle go supernova."},
  {rank:7,player:"Jalen Brunson",team:"NYK",ppg:27.8,rpg:3.8,apg:6.3,statLine:"27.8 PPG, 6.3 APG across 4-game sweep",trend:"steady",highlight:"Fully rested after the most dominant sweep of the 2026 playoffs. Waiting for the East Finals opponent."},
  {rank:8,player:"James Harden",team:"CLE",ppg:22.5,rpg:5.8,apg:7.0,statLine:"23 PTS, 8 TOs in Game 6 loss",trend:"down",highlight:"From 30/8/6/3BLK Game 5 hero to 8-turnover Game 6 goat. The duality of playoff Harden in full effect."},
  {rank:9,player:"Ajay Mitchell",team:"OKC",ppg:20.5,rpg:2.8,apg:5.2,statLine:"20.5 PPG off bench in playoffs",trend:"steady",highlight:"Undrafted guard averaging 20+ off the bench. Unprecedented production in OKC's 8-0 run."},
  {rank:10,player:"Paul Reed",team:"DET",ppg:12.0,rpg:5.5,apg:1.0,statLine:"17 PTS, 6 REB, 7-9 FG in Game 6",trend:"up",highlight:"Detroit's Game 6 catalyst. Reed's 17 off the bench broke Cleveland's home-court spell. Game 7 X-factor."},
];

// --- MVP Candidates ---

export const mvpCandidates: MvpCandidate[] = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",odds:"-150",playoffAvg:"30.1 PPG, 6.2 RPG, 6.5 APG",record:"8-0 (two sweeps)",signatureMoment:"35-point, 8-assist sweep-clincher against the Lakers — 8-0 with the WCF tipping off Monday",trend:"steady"},
  {rank:2,player:"Victor Wembanyama",team:"SAS",odds:"+350",playoffAvg:"24.3 PPG, 10.8 RPG, 3.2 BPG",record:"8-3 (WCF begins Monday)",signatureMoment:"27/17/3BLK Game 5 masterpiece and coasted through the clincher — ready for SGA",trend:"up"},
  {rank:3,player:"Jalen Brunson",team:"NYK",odds:"+750",playoffAvg:"27.8 PPG, 6.3 APG, 3.8 RPG",record:"8-2 (swept PHI, awaiting ECF)",signatureMoment:"33-point Game 3 clincher on the road — orchestrated the most dominant sweep of the 2026 playoffs",trend:"steady"},
  {rank:4,player:"Stephon Castle",team:"SAS",odds:"+1200",playoffAvg:"18.5 PPG, 6.2 RPG, 3.8 APG",record:"8-3 (WCF begins Monday)",signatureMoment:"32/11/6 on 11-16 FG in the series-clinching Game 6 blowout — the defining close-out performance of the 2026 playoffs",trend:"up"},
  {rank:5,player:"Cade Cunningham",team:"DET",odds:"35-1",playoffAvg:"27.0 PPG, 4.8 RPG, 8.5 APG",record:"7-6 (Game 7 tonight)",signatureMoment:"From 39/7/9 in Game 5 to orchestrating a 21-point road blowout in Game 6 — must win tonight to stay alive",trend:"up"},
];

// --- Elimination Watch ---

export const eliminationWatch: EliminationWatch[] = [
  {team:"DET",opponent:"CLE",situation:"GAME 7 TONIGHT — Series tied 3-3. Winner advances to East Finals vs NYK.",gameInfo:"CLE @ DET, May 17, 8:00 PM ET, Prime Video — Cunningham has been the series' best player; 31-9 at home this season",urgency:"tied"},
  {team:"CLE",opponent:"DET",situation:"GAME 7 ON THE ROAD TONIGHT — Series tied 3-3. Must win at Little Caesars Arena.",gameInfo:"CLE @ DET, May 17, 8:00 PM ET, Prime Video — Mitchell and Harden must rebound from catastrophic Game 6; Nance doubtful",urgency:"tied"},
  {team:"OKC",opponent:"SAS",situation:"WCF Game 1 TOMORROW — 8-0, home-court advantage. Six days of rest.",gameInfo:"SAS @ OKC, May 18, 8:30 PM ET — J. Williams out (hamstring), no return timeline",urgency:"advancing"},
  {team:"SAS",opponent:"OKC",situation:"WCF Game 1 TOMORROW — Clinched West Finals with 139-109 road blowout of MIN.",gameInfo:"SAS @ OKC, May 18, 8:30 PM ET — Castle/Fox/Wemby at full strength",urgency:"advancing"},
  {team:"NYK",opponent:"TBD",situation:"Advancing — Awaiting ECF opponent (winner of tonight's DET-CLE Game 7). Rested since May 11.",gameInfo:"ECF begins later this week. Anunoby practiced Saturday, says hamstring improving.",urgency:"advancing"},
  {team:"MIN",opponent:"SAS",situation:"Eliminated — Lost 2-4 in West Semis. Outscored by 97 points in four losses.",gameInfo:"SAS 139, MIN 109 (May 15) — Season over",urgency:"eliminated"},
  {team:"LAL",opponent:"OKC",situation:"Eliminated — Swept 4-0 in West Semis",gameInfo:"OKC 115, LAL 110 (May 11) — Season over",urgency:"eliminated"},
  {team:"PHI",opponent:"NYK",situation:"Eliminated — Swept 4-0 in East Semis",gameInfo:"NYK 144, PHI 114 (May 11) — Season over",urgency:"eliminated"},
  {team:"BOS",opponent:"PHI",situation:"Eliminated — Lost 3-4 in East R1 (blew 3-1 lead)",gameInfo:"PHI 104, BOS 98 in Game 7 — Season over",urgency:"eliminated"},
  {team:"DEN",opponent:"MIN",situation:"Eliminated — Lost 2-4 in West R1",gameInfo:"MIN 116, DEN 108 in Game 6 — Season over",urgency:"eliminated"},
];

// --- Bracket Meta ---

export const bracketMeta = {
  lastUpdated: "May 17, 2026",
  currentRound: "Conference Semifinals Game 7 TONIGHT / West Conference Finals begins TOMORROW",
  nextMilestone: "TONIGHT 8 PM ET — Game 7: CLE @ DET on Prime Video for the East Finals berth. MONDAY 8:30 PM ET — WCF Game 1: SAS @ OKC.",
  teamsRemaining: 5,
  teamsEliminated: 15,
  gamesPlayed: 46,
  playInComplete: true,
  firstRoundStarts: "April 18",
  confFinalsProjected: "May 18-20",
  finalsStart: "June 3",
};
