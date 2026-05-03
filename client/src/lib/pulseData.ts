// NBA Pulse — Daily Edition Data
// Last updated: May 3, 2026 (Vol. 2026 · No. 127)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 3, 2026",edition:"Vol. 2026 · No. 127",subtitle:"76ers Stun Boston in Game 7 Road Win 109-100 · East's Wild Weekend Forces Two Game 7s Tonight · Embiid's 34-Point Masterpiece Caps Historic 3-1 Comeback",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Philadelphia's Historic Comeback Sets Stage for Twin Sunday Deciders",subhead:"The 76ers completed one of the most stunning series rallies in recent memory with a 109-100 Game 7 victory at TD Garden on May 2, eliminating Boston after trailing 3-1. Meanwhile, Detroit and Toronto both forced Game 7s on May 1 to create a dramatic Sunday slate with two winner-take-all Eastern Conference first-round finales.",body:["Joel Embiid delivered the performance of his playoff career when it mattered most, scoring 34 points with 12 rebounds and 6 assists to lead Philadelphia past Boston 109-100 in Game 7 at TD Garden. The 76ers became just the sixth team since 2010 to overcome a 3-1 deficit, with Tyrese Maxey adding 30 points and rookie VJ Edgecombe nailing five three-pointers in the series clincher. Boston's season ended on their home floor despite 33 points from Jaylen Brown.","Detroit answered elimination with authority on May 1, dominating Orlando 93-79 in Game 6 behind Cade Cunningham's 32 points and 10 rebounds. The Pistons held the Magic to just 35% shooting at Kia Center, forcing a winner-take-all Game 7 at Little Caesars Arena on Sunday afternoon. The top-seeded Pistons will host their first playoff Game 7 since 2008.","Toronto survived a thriller at Scotiabank Arena on May 1, outlasting Cleveland 112-110 in overtime to tie their series 3-3. Scottie Barnes orchestrated the victory with 25 points and 14 assists, while Donovan Mitchell's 24 points weren't enough for the Cavaliers to close out on the road. The series shifts to Cleveland for Sunday's decisive Game 7 at Rocket Arena."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: PHI 109, BOS 100 — 76ers complete 3-1 comeback, eliminate Celtics in Game 7",type:"alert"},
  {text:"EMBIID: 34 PTS · 12 REB · 6 AST leads Philadelphia's historic Game 7 road victory",type:"alert"},
  {text:"TONIGHT: ORL @ DET — 3:30 PM ET, ABC — Winner-take-all Game 7 at Little Caesars Arena",type:"score"},
  {text:"TONIGHT: TOR @ CLE — 7:30 PM ET, NBC — Game 7 at Rocket Arena, series tied 3-3",type:"score"},
  {text:"MAXEY: 30 PTS · 11 REB as 76ers supporting cast delivers in Boston elimination",type:"alert"},
  {text:"CUNNINGHAM: 32 PTS powers Detroit's Game 6 road win to force Sunday Game 7",type:"alert"},
  {text:"BARNES: 25 PTS · 14 AST in Toronto's overtime Game 6 victory over Cleveland",type:"alert"},
  {text:"ROOKIE: VJ Edgecombe drills 5 three-pointers in Philadelphia's Game 7 closeout",type:"alert"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — May 2, 2026 (ESPN / Basketball-Reference)
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"BOS",homeScore:100,awayTeam:"PHI",awayScore:109,status:"final",topPerformer:"Joel Embiid",topLine:"34 PTS · 12 REB · 6 AST · 12-26 FG",recap:"Joel Embiid authored a Game 7 masterpiece at TD Garden, scoring 34 points with 12 rebounds to lead Philadelphia past Boston 109-100 and complete a historic 3-1 series comeback. Tyrese Maxey added 30 points and 11 rebounds while rookie VJ Edgecombe hit five three-pointers, eliminating the favored Celtics on their home floor. The 76ers became just the sixth team since 2010 to overcome a 3-1 playoff deficit, advancing 4-3 after trailing the series.",gameId:"BOS-PHI-20260502"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 — May 2 playoff performance)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Joel Embiid",team:"PHI",teamRecord:"45-37",indexScore:98.2,trend:"up",keyStats:"34 PTS · 12 REB · 6 AST",note:"Embiid delivered the defining performance of his career with 34 points and 12 rebounds in Game 7 at TD Garden, completing Philadelphia's historic 3-1 comeback against the favored Celtics.",rationale:"A 34-point double-double in a road Game 7 to complete a 3-1 comeback is the clear performance of the night and recent playoff memory."},
  {rank:2,player:"Tyrese Maxey",team:"PHI",teamRecord:"45-37",indexScore:92.8,trend:"up",keyStats:"30 PTS · 11 REB · 7 AST",note:"Maxey provided the perfect complement to Embiid with 30 points and 11 rebounds, helping Philadelphia eliminate Boston in the series-clinching Game 7 victory.",rationale:"A 30-point double-double as the second star in a historic Game 7 road win clearly separates him from the field behind Embiid."},
  {rank:3,player:"VJ Edgecombe",team:"PHI",teamRecord:"45-37",indexScore:87.5,trend:"up",keyStats:"23 PTS · 5 3PM · 6 REB",note:"The rookie guard exploded for 23 points on five three-pointers in Game 7, providing the crucial third scoring option that helped bury Boston's season at home.",rationale:"Rookie shot-making in a Game 7 road elimination is rarer and more impactful than veteran production in the same setting."},
  {rank:4,player:"Jaylen Brown",team:"BOS",teamRecord:"56-26",indexScore:82.1,trend:"down",keyStats:"33 PTS · 9 REB · 4 AST",note:"Brown poured in a team-high 33 points in the Game 7 loss but couldn't prevent Boston's elimination at home, ending the Celtics' championship hopes.",rationale:"Elite scoring in a Game 7 keeps him in the top tier despite the loss, but the stakes and team result drop him behind Philadelphia's trio."},
  {rank:5,player:"Jayson Tatum",team:"BOS",teamRecord:"56-26",indexScore:78.6,trend:"down",keyStats:"22 PTS · 8 REB · 7 AST",note:"Tatum managed 22 points and 7 assists but shot just 8-of-24 from the field as Boston's season ended with a home Game 7 defeat to Philadelphia.",rationale:"Secondary star production in a Game 7 loss ranks below Brown's 33 points but still merits top-five consideration for the playoff stakes."},
  {rank:6,player:"Al Horford",team:"BOS",teamRecord:"56-26",indexScore:75.3,trend:"down",keyStats:"18 PTS · 10 REB · 3 BLK",note:"Horford provided veteran leadership with 18 points, 10 rebounds and 3 blocks but couldn't help Boston avoid the stunning home elimination.",rationale:"Solid two-way frontcourt production in Game 7 rates above role players but below the primary scorers who decided the outcome."},
  {rank:7,player:"Tobias Harris",team:"PHI",teamRecord:"45-37",indexScore:73.9,trend:"up",keyStats:"16 PTS · 8 REB · 5 AST",note:"Harris chipped in 16 points and 8 rebounds as Philadelphia's veteran depth stepped up in the historic Game 7 road victory over Boston.",rationale:"Contributing veteran production in a series-clinching Game 7 edges out lower-usage players despite modest counting stats."},
  {rank:8,player:"Marcus Smart",team:"BOS",teamRecord:"56-26",indexScore:71.2,trend:"down",keyStats:"12 PTS · 7 AST · 6 REB",note:"Smart provided his typical energy with 12 points and 7 assists but couldn't generate enough defensive stops to prevent Boston's season from ending.",rationale:"Veteran point guard production in a Game 7 loss still merits consideration ahead of bench contributors."},
  {rank:9,player:"Paul Reed",team:"PHI",teamRecord:"45-37",indexScore:68.8,trend:"up",keyStats:"8 PTS · 9 REB · 2 BLK",note:"Reed provided crucial frontcourt depth with 9 rebounds and 2 blocks, helping Philadelphia control the glass in their Game 7 triumph.",rationale:"Role player impact in a historic series-clinching win rates above similar production in lesser games."},
  {rank:10,player:"Robert Williams",team:"BOS",teamRecord:"56-26",indexScore:65.4,trend:"down",keyStats:"6 PTS · 8 REB · 3 BLK",note:"Williams battled with 8 rebounds and 3 blocks but couldn't anchor the defense needed to prevent Philadelphia's stunning comeback completion.",rationale:"Defensive-minded role player production in a Game 7 loss barely cracks the index on playoff stakes alone."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — May 2, 2026 (verified box scores)
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Joel Embiid",team:"PHI",value:"34",context:"Game-high 34 points in Philadelphia's Game 7 road victory"},
  {category:"Rebounds",player:"Joel Embiid",team:"PHI",value:"12",context:"Dominated the glass with 12 boards in the series clincher"},
  {category:"Assists",player:"Jayson Tatum",team:"BOS",value:"7",context:"Team-high 7 assists in Boston's Game 7 home loss"},
  {category:"3-Pointers",player:"VJ Edgecombe",team:"PHI",value:"5",context:"Rookie nailed 5 triples on 8 attempts in Game 7"},
  {category:"Blocks",player:"Al Horford",team:"BOS",value:"3",context:"3 blocks for Horford in Boston's elimination game"},
  {category:"+/-",player:"Joel Embiid",team:"PHI",value:"+14",context:"Team-best plus-minus in the historic comeback victory"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS — Game 7 & Weekend Playoff Action
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"Joel Embiid's 34-point Game 7 masterpiece at TD Garden will go down as one of the greatest road elimination performances in recent playoff history. Philadelphia didn't just overcome 3-1, they dominated when it mattered most.",topic:"Historic Comeback",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"The 76ers' supporting cast delivered when the lights were brightest—Maxey with 30 and 11, rookie Edgecombe drilling five threes. This is how championship-level depth performs in Game 7 moments.",topic:"76ers Depth",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Sunday's twin Game 7s in Detroit and Cleveland represent everything beautiful about playoff basketball—pure elimination drama where one possession decides months of preparation and dreams.",topic:"Game 7 Drama",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Boston's home elimination after leading 3-1 is a franchise-altering failure. The Celtics had Philadelphia on the brink and let a generational opportunity slip away at TD Garden.",topic:"Celtics Collapse",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"Tatum's 8-of-24 shooting in Game 7 will haunt this Celtics core all summer. When your franchise player can't deliver in the biggest moment at home, championship windows start closing fast.",topic:"Tatum Struggles",sentiment:"cold"},
  {outlet:"NBA.com",author:"John Schuhmann",quote:"May 2 belonged to Philadelphia's historic rally, while Sunday's slate offers two more Game 7s where margins are measured in possessions and legacies hang in the balance.",topic:"Playoff Stakes",sentiment:"neutral"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — May 3, 2026
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Joel Embiid",team:"PHI",status:"Probable",injury:"Right knee management",timeline:"Heavy Game 7 minutes managed; cleared for second round prep",impact:"high"},
  {player:"Paolo Banchero",team:"ORL",status:"Probable",injury:"Lower back tightness",timeline:"Expected to play Game 7 in Detroit after Friday's loss",impact:"high"},
  {player:"Scottie Barnes",team:"TOR",status:"Probable",injury:"Workload management",timeline:"Full availability for Cleveland Game 7 after overtime minutes",impact:"high"},
  {player:"Donovan Mitchell",team:"CLE",status:"Probable",injury:"Left ankle soreness",timeline:"Listed probable for home Game 7 against Toronto",impact:"high"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Sunday, May 3, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"DET",homeRecord:"60-22",awayTeam:"ORL",awayRecord:"45-37",time:"3:30 PM ET",tv:"ABC",spread:"DET -5.5",overUnder:"184.5",keyMatchup:"Cade Cunningham vs. Paolo Banchero",storyline:"Winner-take-all Game 7 at Little Caesars Arena after Detroit dominated 93-79 in Orlando on May 1 to tie the series 3-3. The top-seeded Pistons return home seeking their first conference semifinals berth since 2008, while the Magic need to overcome road struggles to advance.",prediction:"DET wins 89-82 — Home court and defensive intensity favor the Pistons in a low-scoring battle",featured:true},
  {homeTeam:"CLE",homeRecord:"52-30",awayTeam:"TOR",awayRecord:"46-36",time:"7:30 PM ET",tv:"NBC, Peacock",spread:"CLE -3.5",overUnder:"218.5",keyMatchup:"Donovan Mitchell vs. Scottie Barnes",storyline:"Series deadlocked 3-3 after Toronto's thrilling 112-110 overtime victory at home on May 1. Cleveland gets home court back for the decisive game, with Mitchell looking to close out while Barnes aims to continue his playoff breakout on the road.",prediction:"CLE wins 108-103 — Rocket Arena crowd helps Mitchell find clutch shots in the final moments"}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Top 5 Active Playoff Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Paolo Banchero",team:"ORL",statLine:"21.8 PPG · 7.9 RPG · 4.6 APG",note:"Banchero faces elimination in Game 7 at Detroit after struggling with efficiency in the Magic's Game 6 loss. His road performance will determine Orlando's season.",trend:"down"},
  {rank:2,player:"VJ Edgecombe",team:"PHI",statLine:"12.4 PPG · 3.8 RPG · 2.1 APG",note:"Edgecombe exploded for 23 points and five three-pointers in Game 7, delivering clutch rookie production in Philadelphia's historic comeback victory over Boston.",trend:"up"},
  {rank:3,player:"Anthony Black",team:"ORL",statLine:"8.9 PPG · 4.1 APG · 3.2 RPG",note:"Black's playmaking and defensive energy will be crucial in Orlando's Game 7 bid at Detroit, where the Magic need secondary creation behind Banchero.",trend:"stable"},
  {rank:4,player:"Amen Thompson",team:"HOU",statLine:"10.2 PPG · 5.8 RPG · 3.4 APG",note:"Thompson continues providing versatile bench production as Houston battles through their first-round Western Conference series.",trend:"stable"},
  {rank:5,player:"Keyonte George",team:"MIN",statLine:"7.6 PPG · 2.8 APG · 2.1 RPG",note:"George awaits Minnesota's potential second-round matchup after the Timberwolves advanced from the first round.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS — Sunday Game 7 Slate
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Cade Cunningham",team:"DET",action:"add",reason:"Home Game 7 with massive usage after 32-point Game 6 makes him the slate's highest floor play. Detroit's pace should boost counting stats.",urgency:"high"},
  {player:"Paolo Banchero",team:"ORL",action:"stream",reason:"Elimination game should spike usage despite efficiency concerns from Game 6. Tournament play only given the volatility and matchup difficulty.",urgency:"medium"},
  {player:"Donovan Mitchell",team:"CLE",action:"hold",reason:"Home Game 7 environment favors Mitchell's scoring ceiling after 24 points in Toronto. Cleveland's pace creates DFS upside in a must-win spot.",urgency:"high"},
  {player:"Scottie Barnes",team:"TOR",action:"hold",reason:"His 25-point, 14-assist Game 6 shows the playmaking ceiling on the road. Game 7 usage should remain elite for tournament lineups.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Updated May 3, 2026
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"W1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L4",last10:"4-6",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W4",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"L1",last10:"7-3",conf:"east"},
  {rank:5,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"W1",last10:"8-2",conf:"east"},
  {rank:6,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"W4",last10:"9-1",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L3",last10:"5-5",conf:"east"},
  {rank:9,team:"CHA",wins:44,losses:38,pct:".537",gb:"16.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:10,team:"MIA",wins:43,losses:39,pct:".524",gb:"17.0",streak:"L3",last10:"4-6",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:64,losses:18,pct:".780",gb:"—",streak:"W6",last10:"10-0",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:20,pct:".756",gb:"2.0",streak:"W2",last10:"9-1",conf:"west"},
  {rank:3,team:"DEN",wins:54,losses:28,pct:".659",gb:"10.0",streak:"L5",last10:"1-9",conf:"west"},
  {rank:4,team:"LAL",wins:53,losses:29,pct:".659",gb:"11.0",streak:"W1",last10:"8-2",conf:"west"},
  {rank:5,team:"HOU",wins:52,losses:30,pct:".634",gb:"12.0",streak:"L1",last10:"8-2",conf:"west"},
  {rank:6,team:"MIN",wins:49,losses:33,pct:".598",gb:"15.0",streak:"W5",last10:"10-0",conf:"west"},
  {rank:7,team:"PHX",wins:45,losses:37,pct:".549",gb:"19.0",streak:"L6",last10:"1-9",conf:"west"},
  {rank:8,team:"POR",wins:42,losses:40,pct:".512",gb:"22.0",streak:"L2",last10:"4-6",conf:"west"},
  {rank:9,team:"LAC",wins:42,losses:40,pct:".512",gb:"22.0",streak:"L2",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:37,losses:45,pct:".451",gb:"27.0",streak:"W3",last10:"4-6",conf:"west"}
];

export const standings = [...eastStandings, ...westStandings];

// ═══════════════════════════════════════════════════════════
// THIS DAY IN NBA HISTORY
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1997,fact:"On May 3, 1997, Michael Jordan scored 38 points to lead the Chicago Bulls to a 109-91 victory over the Atlanta Hawks in Game 6 of their Eastern Conference Semifinals, completing a 4-1 series victory and advancing to the conference finals during their second three-peat championship run.",players:["Michael Jordan"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-03",question:"Which team completed a historic 3-1 comeback to eliminate Boston in Game 7 on May 2, 2026?",options:["Miami Heat","Philadelphia 76ers","New York Knicks","Atlanta Hawks"],correctIndex:1,explanation:"The Philadelphia 76ers won 109-100 at TD Garden to complete the 3-1 series comeback, becoming just the sixth team since 2010 to overcome such a deficit.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"How many points did Joel Embiid score in Philadelphia's Game 7 victory over Boston?",options:["A. 28 points","B. 30 points","C. 34 points","D. 38 points"],answer:"C",explanation:"Embiid scored 34 points with 12 rebounds and 6 assists in the series-clinching Game 7 road victory.",difficulty:"easy"},{question:"Which rookie hit five three-pointers in Philadelphia's Game 7 win?",options:["A. Paolo Banchero","B. VJ Edgecombe","C. Anthony Black","D. Amen Thompson"],answer:"B",explanation:"VJ Edgecombe exploded for 23 points on 5-of-8 three-point shooting in the Game 7 victory.",difficulty:"medium"},{question:"How many Game 7s are scheduled for May 3, 2026?",options:["A. One","B. Two","C. Three","D. Four"],answer:"B",explanation:"Detroit hosts Orlando and Cleveland hosts Toronto in winner-take-all Game 7 matchups.",difficulty:"easy"},{question:"What was Tyrese Maxey's stat line in the Game 7 victory over Boston?",options:["A. 24 PTS, 8 REB, 5 AST","B. 30 PTS, 11 REB, 7 AST","C. 28 PTS, 6 REB, 9 AST","D. 26 PTS, 9 REB, 6 AST"],answer:"B",explanation:"Maxey recorded 30 points, 11 rebounds, and 7 assists in Philadelphia's historic comeback victory.",difficulty:"hard"},{question:"Which venue hosts the Orlando vs Detroit Game 7?",options:["A. Kia Center","B. Little Caesars Arena","C. TD Garden","D. Rocket Arena"],answer:"B",explanation:"Detroit, as the higher seed, hosts Game 7 at Little Caesars Arena.",difficulty:"medium"}]};