// ═══════════════════════════════════════════════════════════
// HOOPS INTEL — Playoff Bracket Data
// Updated daily alongside pulseData.ts by the hoops-intel cron
// Last updated: April 17, 2026
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
  // Night 3 — Friday April 17 (TONIGHT)
  {gameId:"CHA-ORL-20260417",night:3,date:"April 17",label:"East 8-Seed Game",awayTeam:"CHA",homeTeam:"ORL",awaySeed:9,homeSeed:7,awayScore:null,homeScore:null,status:"scheduled",headline:"Ball vs Banchero — loser goes home, winner faces Detroit",tv:"Prime Video",time:"7:30 PM ET"},
  {gameId:"GSW-PHX-20260417",night:3,date:"April 17",label:"West 8-Seed Game",awayTeam:"GSW",homeTeam:"PHX",awaySeed:9,homeSeed:8,awayScore:null,homeScore:null,status:"scheduled",headline:"Curry's Warriors need one more miracle at Phoenix",tv:"Prime Video",time:"10:00 PM ET"},
];

export const eliminatedTeams: string[] = ["MIA", "LAC"];

// --- First Round Series ---

export const firstRoundSeries: PlayoffSeries[] = [
  // EAST
  {seriesId:"east-r1-1v8",conference:"east",round:1,higherSeed:1,lowerSeed:8,higherTeam:"DET",lowerTeam:"TBD",higherWins:0,lowerWins:0,status:"scheduled",games:[],narrative:"The 60-win Pistons await tonight's East play-in winner (Charlotte or Orlando). Cade Cunningham's squad hasn't lost at home since March 2.",keyMatchup:"Cunningham's playmaking vs play-in momentum",seriesOdds:"DET -900"},
  {seriesId:"east-r1-2v7",conference:"east",round:1,higherSeed:2,lowerSeed:7,higherTeam:"BOS",lowerTeam:"PHI",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 19",time:"3:30 PM ET",tv:"ABC",homeTeam:"BOS",awayTeam:"PHI",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"A clash of generations: Tatum and Brown's championship pedigree vs. Maxey and Embiid's desperate pursuit. Jaylen Brown's Achilles is the x-factor — if he's limited, Philadelphia has a real shot.",keyMatchup:"Tatum vs Maxey — superstar duel",seriesOdds:"BOS -350"},
  {seriesId:"east-r1-3v6",conference:"east",round:1,higherSeed:3,lowerSeed:6,higherTeam:"NYK",lowerTeam:"TOR",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 19",time:"1:00 PM ET",tv:"ABC",homeTeam:"NYK",awayTeam:"TOR",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Brunson's Knicks host Barnes and the Raptors in a cross-border battle. New York's home court advantage at MSG could be decisive — the Knicks went 35-6 at home this season.",keyMatchup:"Brunson vs Barnes — two-way battle",seriesOdds:"NYK -280"},
  {seriesId:"east-r1-4v5",conference:"east",round:1,higherSeed:4,lowerSeed:5,higherTeam:"CLE",lowerTeam:"ATL",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 18",time:"6:00 PM ET",tv:"ESPN",homeTeam:"CLE",awayTeam:"ATL",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Cleveland's defense (2nd-ranked) faces Atlanta's offensive firepower. CJ McCollum gives the Hawks a veteran scorer alongside Young who can exploit Cleveland's switching schemes.",keyMatchup:"Mitchell vs Young — scoring duel",seriesOdds:"CLE -220"},
  // WEST
  {seriesId:"west-r1-1v8",conference:"west",round:1,higherSeed:1,lowerSeed:8,higherTeam:"OKC",lowerTeam:"TBD",higherWins:0,lowerWins:0,status:"scheduled",games:[],narrative:"The 64-win Thunder — the league's best team — await the West play-in winner (Golden State or Phoenix). SGA's 20-game scoring streak resumes. OKC hasn't been pushed to 6 games in any series under Daigneault.",keyMatchup:"SGA's dominance vs underdog desperation",seriesOdds:"OKC -1200"},
  {seriesId:"west-r1-2v7",conference:"west",round:1,higherSeed:2,lowerSeed:7,higherTeam:"SAS",lowerTeam:"POR",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 19",time:"8:00 PM ET",tv:"TNT",homeTeam:"SAS",awayTeam:"POR",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Wembanyama's first playoff series — a historic moment. The 7-foot-4 phenom faces Avdija, who just dropped 41 in the play-in. Fox gives San Antonio a veteran backcourt partner, but Portland's depth impressed all season.",keyMatchup:"Wembanyama vs Avdija — future of the league",seriesOdds:"SAS -400"},
  {seriesId:"west-r1-3v6",conference:"west",round:1,higherSeed:3,lowerSeed:6,higherTeam:"DEN",lowerTeam:"MIN",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 18",time:"8:30 PM ET",tv:"TNT",homeTeam:"DEN",awayTeam:"MIN",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"A revenge series for Denver. Jokić and the Nuggets ride a 12-game win streak into a rematch with the team that eliminated them last year. Minnesota's Edwards needs to be superhuman to stop this freight train.",keyMatchup:"Jokić vs Gobert — paint dominance",seriesOdds:"DEN -250"},
  {seriesId:"west-r1-4v5",conference:"west",round:1,higherSeed:4,lowerSeed:5,higherTeam:"LAL",lowerTeam:"HOU",higherWins:0,lowerWins:0,status:"scheduled",games:[{gameNumber:1,date:"April 18",time:"3:30 PM ET",tv:"ABC",homeTeam:"LAL",awayTeam:"HOU",homeScore:null,awayScore:null,status:"scheduled"}],narrative:"Everything hinges on Luka. His Grade 2 hamstring strain is 14 days old with no clearance — if he misses games, the Lakers face a Rockets team with Kevin Durant that could steamroll them. Houston closed 48-34 with Durant averaging 26.5 PPG.",keyMatchup:"Luka (if healthy) vs Durant — superstar collision",seriesOdds:"LAL -150 (with Luka), HOU -200 (without)"},
];

// --- Playoff Performers ---

export const playoffPerformers: PlayoffPerformer[] = [
  {rank:1,player:"Deni Avdija",team:"POR",ppg:41,rpg:7,apg:12,statLine:"41 PTS, 12 AST, 7 REB (play-in)",trend:"up",highlight:"Historic 41-point play-in performance — 15-of-22 FG (68.2%), highest-scoring play-in game ever"},
  {rank:2,player:"Stephen Curry",team:"GSW",ppg:35,rpg:4,apg:6,statLine:"35 PTS, 7 3PM, 6 AST (play-in)",trend:"up",highlight:"At 38 years old, 7-of-12 from three to eliminate the Clippers — vintage Steph in an elimination game"},
  {rank:3,player:"Tyrese Maxey",team:"PHI",ppg:31,rpg:4,apg:7,statLine:"31 PTS, 7 AST, 4 REB (play-in)",trend:"up",highlight:"Franchise-defining performance to clinch 7-seed — outscored entire Orlando backcourt by himself"},
  {rank:4,player:"LaMelo Ball",team:"CHA",ppg:30,rpg:5,apg:10,statLine:"30 PTS, 10 AST, 5 REB (play-in OT)",trend:"up",highlight:"Overtime heroics eliminated Miami — supernatural confidence with 10 assists and zero turnovers in the 4th quarter and OT"},
  {rank:5,player:"Miles Bridges",team:"CHA",ppg:28,rpg:9,apg:3,statLine:"28 PTS, 9 REB, 3 STL (play-in OT)",trend:"up",highlight:"Ball's perfect co-star — dominant on both ends to help eliminate the Heat in overtime"},
  {rank:6,player:"Brandin Podziemski",team:"GSW",ppg:17,rpg:6,apg:5,statLine:"17 PTS, 6 REB, 5 AST (play-in)",trend:"up",highlight:"Young guard stepped up alongside Curry — hit key shots and defended Harden down the stretch"},
  {rank:7,player:"Kristaps Porzingis",team:"GSW",ppg:20,rpg:7,apg:1,statLine:"20 PTS, 7 REB, 2 BLK (play-in)",trend:"steady",highlight:"20-point, 7-rebound outing with 2 blocks — the rim protection GSW desperately needed vs LAC"},
  {rank:8,player:"Gui Santos",team:"GSW",ppg:20,rpg:3,apg:2,statLine:"20 PTS, 9-13 FG, +16 (play-in)",trend:"up",highlight:"The breakout star — 9-of-13 shooting with a +16 plus-minus, best on either team"},
  {rank:9,player:"Bennedict Mathurin",team:"LAC",ppg:23,rpg:4,apg:2,statLine:"23 PTS, 5-6 3PT (play-in)",trend:"down",highlight:"Scorching 5-of-6 from three wasn't enough — Clippers eliminated despite his heroic effort"},
  {rank:10,player:"VJ Edgecombe",team:"PHI",ppg:19,rpg:11,apg:2,statLine:"19 PTS, 11 REB in 42 MIN (play-in)",trend:"up",highlight:"Rookie played all 42 minutes with a double-double — fearless performance in his first postseason game"},
];

// --- MVP Candidates ---

export const mvpCandidates: MvpCandidate[] = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",odds:"+250",playoffAvg:"N/A — playoffs start Saturday",record:"64-18 (1-seed)",signatureMoment:"20+ point scoring streak past 140 games — resumes in Round 1",trend:"steady"},
  {rank:2,player:"Victor Wembanyama",team:"SAS",odds:"+400",playoffAvg:"N/A — playoffs start Saturday",record:"62-20 (2-seed)",signatureMoment:"40/13 in 26 minutes vs DAL in season finale — eligible for all awards after hitting 65-game mark",trend:"up"},
  {rank:3,player:"Nikola Jokić",team:"DEN",odds:"+500",playoffAvg:"N/A — playoffs start Saturday",record:"54-28, W12 streak",signatureMoment:"12-game win streak to close the season — Denver is the hottest team entering playoffs",trend:"up"},
  {rank:4,player:"Cade Cunningham",team:"DET",odds:"+600",playoffAvg:"N/A — playoffs start Saturday",record:"60-22 (1-seed)",signatureMoment:"Returned from injury April 10 — 22 minutes in finale, cleared for playoffs at full strength",trend:"steady"},
  {rank:5,player:"Jayson Tatum",team:"BOS",odds:"+800",playoffAvg:"N/A — playoffs start Saturday",record:"56-26 (2-seed)",signatureMoment:"Defending champion pedigree — Boston's path through PHI/NYK is grueling but Tatum thrives in big moments",trend:"steady"},
];

// --- Elimination Watch ---

export const eliminationWatch: EliminationWatch[] = [
  {team:"MIA",opponent:"CHA",situation:"Eliminated in play-in (Night 1)",gameInfo:"CHA 127, MIA 126 OT — Season over",urgency:"eliminated"},
  {team:"LAC",opponent:"GSW",situation:"Eliminated in play-in (Night 2)",gameInfo:"GSW 126, LAC 121 — Season over",urgency:"eliminated"},
  {team:"CHA",opponent:"ORL",situation:"Win-or-go-home tonight for East 8-seed",gameInfo:"CHA @ ORL — 7:30 PM ET on Prime Video",urgency:"elimination"},
  {team:"ORL",opponent:"CHA",situation:"Win-or-go-home tonight for East 8-seed",gameInfo:"CHA @ ORL — 7:30 PM ET on Prime Video",urgency:"elimination"},
  {team:"GSW",opponent:"PHX",situation:"Win-or-go-home tonight for West 8-seed",gameInfo:"GSW @ PHX — 10:00 PM ET on Prime Video",urgency:"elimination"},
  {team:"PHX",opponent:"GSW",situation:"Win-or-go-home tonight for West 8-seed",gameInfo:"GSW @ PHX — 10:00 PM ET on Prime Video",urgency:"elimination"},
];

// --- Bracket Meta ---

export const bracketMeta = {
  lastUpdated: "April 17, 2026",
  currentRound: "Play-In Tournament — Final Night",
  nextMilestone: "First Round begins Saturday April 18",
  teamsRemaining: 14,
  teamsEliminated: 2,
  gamesPlayed: 4,
  playInComplete: false,
  firstRoundStarts: "April 18",
};
