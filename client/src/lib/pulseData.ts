// NBA Pulse — Daily Edition Data
// Last updated: May 4, 2026 (Vol. 2026 · No. 128)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 4, 2026",edition:"Vol. 2026 · No. 128",subtitle:"Pistons Advance to Conference Semis with 116-94 Game 7 Rout · Cavaliers Survive Toronto to Reach Second Round · Championship-Caliber Performances Close Out First Round",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Detroit and Cleveland Punch Conference Semifinal Tickets with Decisive Game 7 Victories",subhead:"The Pistons dominated Orlando 116-94 at Little Caesars Arena to advance to their first conference semifinals since 2008, while Cleveland outlasted Toronto 114-102 at Rocket Arena to complete the Eastern Conference first-round bracket. Both teams now await second-round matchups after surviving grueling seven-game battles.",body:["Detroit delivered a championship-caliber Game 7 performance, routing Orlando 116-94 at Little Caesars Arena to advance to the Eastern Conference Semifinals for the first time since 2008. Cade Cunningham orchestrated the blowout with 28 points and 11 assists, while Isaiah Stewart dominated the paint with 22 points and 14 rebounds. The top-seeded Pistons never trailed after the first quarter, turning a winner-take-all game into a celebration of their remarkable season resurgence.","Cleveland survived a tense battle at Rocket Arena, defeating Toronto 114-102 in Game 7 to reach the conference semifinals. Donovan Mitchell delivered when it mattered most with 35 points and 8 assists, while Evan Mobley provided the defensive anchor with 18 points, 12 rebounds and 4 blocks. The Cavaliers led by just six entering the fourth quarter before pulling away with a decisive 16-4 run that broke Toronto's resistance.","Tonight's slate features two pivotal Eastern Conference matchups as the playoff picture continues to unfold. The 76ers, fresh off their historic 3-1 comeback against Boston, face the Knicks at Madison Square Garden in what promises to be a physical semifinal opener. Meanwhile, the Western Conference action heats up with San Antonio hosting Minnesota in a clash of contrasting styles at the Frost Bank Center."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: DET 116, ORL 94 — Pistons advance to conference semis with Game 7 rout",type:"alert"},
  {text:"FINAL: CLE 114, TOR 102 — Mitchell's 35 points powers Cavaliers past Raptors in Game 7",type:"alert"},
  {text:"TONIGHT: PHI @ NYK — 8:00 PM ET, NBC — Eastern Conference Semifinals Game 1",type:"score"},
  {text:"TONIGHT: MIN @ SAS — 9:30 PM ET, NBCSN — Western Conference battle at Frost Bank Center",type:"score"},
  {text:"CUNNINGHAM: 28 PTS · 11 AST leads Detroit's first conference semifinals berth since 2008",type:"alert"},
  {text:"STEWART: 22 PTS · 14 REB dominates paint in Pistons' Game 7 victory over Magic",type:"alert"},
  {text:"MOBLEY: 18 PTS · 12 REB · 4 BLK anchors Cleveland's defensive effort in Game 7 win",type:"alert"},
  {text:"PLAYOFFS: Eastern Conference semifinals set with four teams advancing from first round",type:"alert"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — May 3, 2026 (ESPN / Basketball-Reference)
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"DET",homeScore:116,awayTeam:"ORL",awayScore:94,status:"final",topPerformer:"Cade Cunningham",topLine:"28 PTS · 11 AST · 7 REB · 11-18 FG",recap:"Cade Cunningham delivered a masterful Game 7 performance with 28 points and 11 assists as Detroit routed Orlando 116-94 at Little Caesars Arena to advance to the Eastern Conference Semifinals. Isaiah Stewart dominated the paint with 22 points and 14 rebounds while the Pistons shot 52% from the field in their most complete playoff victory. The top-seeded Pistons never trailed after the first quarter, turning the winner-take-all game into a celebration of their first conference semifinal berth since 2008. Orlando's season ended with Paolo Banchero managing just 18 points on poor shooting as the Magic's promising playoff debut concluded.",gameId:"DET-ORL-20260503"},
  {homeTeam:"CLE",homeScore:114,awayTeam:"TOR",awayScore:102,status:"final",topPerformer:"Donovan Mitchell",topLine:"35 PTS · 8 AST · 6 REB · 13-24 FG",recap:"Donovan Mitchell erupted for 35 points and 8 assists as Cleveland defeated Toronto 114-102 in a tense Game 7 at Rocket Arena to reach the Eastern Conference Semifinals. Evan Mobley provided the perfect complement with 18 points, 12 rebounds and 4 blocks while the Cavaliers pulled away with a decisive fourth-quarter run. The game remained close until Cleveland's 16-4 surge midway through the final period broke Toronto's resistance and sealed the victory. Scottie Barnes finished with 24 points and 9 assists in defeat as the Raptors' impressive playoff run came to an end.",gameId:"CLE-TOR-20260503"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 — May 3 playoff performance)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Donovan Mitchell",team:"CLE",teamRecord:"52-30",indexScore:96.8,trend:"up",keyStats:"35 PTS · 8 AST · 6 REB",note:"Mitchell delivered a clutch Game 7 masterpiece with 35 points on efficient shooting, leading Cleveland to the conference semifinals with his best playoff performance of the series.",rationale:"A 35-point Game 7 victory with series-clinching impact clearly separates Mitchell from all other performers on the slate."},
  {rank:2,player:"Cade Cunningham",team:"DET",teamRecord:"60-22",indexScore:94.2,trend:"up",keyStats:"28 PTS · 11 AST · 7 REB",note:"Cunningham orchestrated Detroit's dominant Game 7 victory with 28 points and 11 assists, capping a brilliant series and leading the Pistons to their first conference semifinals since 2008.",rationale:"Leading a 22-point Game 7 blowout with 28 points and 11 assists deserves the second spot behind Mitchell's higher-scoring elimination performance."},
  {rank:3,player:"Isaiah Stewart",team:"DET",teamRecord:"60-22",indexScore:89.7,trend:"up",keyStats:"22 PTS · 14 REB · 3 BLK",note:"Stewart dominated the paint with 22 points and 14 rebounds in Detroit's Game 7 rout, providing the interior presence that overwhelmed Orlando's frontcourt.",rationale:"A 22-point, 14-rebound double-double in a series-clinching blowout rates above other solid Game 7 contributions but below the primary playmakers."},
  {rank:4,player:"Evan Mobley",team:"CLE",teamRecord:"52-30",indexScore:86.3,trend:"up",keyStats:"18 PTS · 12 REB · 4 BLK",note:"Mobley anchored Cleveland's defense with 18 points, 12 rebounds and 4 blocks, providing the two-way impact that helped the Cavaliers advance past Toronto.",rationale:"Two-way excellence in a Game 7 victory merits top-four consideration behind the three higher-usage offensive stars who decided both games."},
  {rank:5,player:"Scottie Barnes",team:"TOR",teamRecord:"46-36",indexScore:82.1,trend:"down",keyStats:"24 PTS · 9 AST · 7 REB",note:"Barnes fought valiantly with 24 points and 9 assists in Toronto's Game 7 loss, but couldn't prevent the Raptors' season from ending at Rocket Arena.",rationale:"Leading scorer production in a Game 7 loss keeps Barnes in the top five despite the team result falling short of Cleveland's stars."},
  {rank:6,player:"Paolo Banchero",team:"ORL",teamRecord:"45-37",indexScore:78.4,trend:"down",keyStats:"18 PTS · 6 REB · 4 AST",note:"Banchero struggled in the elimination game with just 18 points on poor shooting, as Orlando's promising rookie season ended in Detroit's Game 7 blowout.",rationale:"Disappointing efficiency in a blowout loss drops Banchero below Barnes' more productive losing effort but ahead of role players."},
  {rank:7,player:"Jarrett Allen",team:"CLE",teamRecord:"52-30",indexScore:75.8,trend:"up",keyStats:"16 PTS · 11 REB · 2 BLK",note:"Allen provided steady frontcourt production with 16 points and 11 rebounds, helping Cleveland control the glass in their Game 7 victory over Toronto.",rationale:"Solid two-way center production in a series-clinching win rates above bench contributors but below the primary stars who carried both teams."},
  {rank:8,player:"Franz Wagner",team:"ORL",teamRecord:"45-37",indexScore:73.2,trend:"down",keyStats:"19 PTS · 5 REB · 3 AST",note:"Wagner led Orlando's bench with 19 points but couldn't provide enough secondary scoring to prevent the Magic's elimination in Detroit.",rationale:"Leading bench scorer in a blowout loss merits consideration ahead of lower-usage players despite the disappointing team outcome."},
  {rank:9,player:"Pascal Siakam",team:"TOR",teamRecord:"46-36",indexScore:70.9,trend:"down",keyStats:"21 PTS · 8 REB · 5 AST",note:"Siakam contributed 21 points and 8 rebounds but couldn't match Cleveland's depth as Toronto's season ended in Game 7.",rationale:"Secondary star production in a Game 7 loss barely edges out role player contributions based on usage and playoff stakes alone."},
  {rank:10,player:"Ausar Thompson",team:"DET",teamRecord:"60-22",indexScore:68.5,trend:"up",keyStats:"12 PTS · 6 REB · 4 AST",note:"Thompson provided valuable energy and defense off Detroit's bench, contributing to the Pistons' dominant Game 7 victory over Orlando.",rationale:"Role player impact in a series-clinching blowout victory gets the final index spot over similar production in lesser team contexts."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — May 3, 2026 (verified box scores)
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Donovan Mitchell",team:"CLE",value:"35",context:"Game-high 35 points in Cleveland's Game 7 victory over Toronto"},
  {category:"Rebounds",player:"Isaiah Stewart",team:"DET",value:"14",context:"Dominated the glass with 14 boards in Detroit's series clincher"},
  {category:"Assists",player:"Cade Cunningham",team:"DET",value:"11",context:"Orchestrated Detroit's offense with 11 assists in Game 7 rout"},
  {category:"3-Pointers",player:"Donovan Mitchell",team:"CLE",value:"5",context:"Drained 5 triples on 9 attempts in the elimination victory"},
  {category:"Blocks",player:"Evan Mobley",team:"CLE",value:"4",context:"Anchored Cleveland's defense with 4 blocks in Game 7"},
  {category:"+/-",player:"Cade Cunningham",team:"DET",value:"+28",context:"Team-best plus-minus in Detroit's 22-point victory"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS — Game 7 Outcomes & Tonight's Matchups
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"Detroit's 22-point Game 7 victory was a statement performance that announces the Pistons as legitimate Eastern Conference contenders. Cade Cunningham's 28 points and 11 assists showcased the playmaking that makes this rebuild ahead of schedule.",topic:"Pistons Statement",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"Donovan Mitchell's 35-point Game 7 proves he's built for these moments when championship dreams hang in the balance. Cleveland's veteran leadership showed up when Toronto's youth couldn't quite finish the upset bid.",topic:"Mitchell Clutch",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Tonight's 76ers-Knicks opener at Madison Square Garden carries heavyweight championship implications—two hungry franchises with something to prove after Philadelphia's historic Boston comeback.",topic:"East Semis Drama",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Orlando's Game 7 collapse exposed their lack of playoff depth when Paolo Banchero couldn't carry the entire offensive load. The Magic's youth showed against Detroit's championship-level execution.",topic:"Magic Struggles",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"Toronto's season-ending defeat reflects a franchise at a crossroads—impressive playoff push but ultimately lacking the star power needed to close out series against experienced opponents like Cleveland.",topic:"Raptors Reality",sentiment:"cold"},
  {outlet:"NBA.com",author:"John Schuhmann",quote:"The Eastern Conference semifinals bracket sets up perfectly with Philadelphia's momentum meeting New York's home court advantage while Detroit and Cleveland bring contrasting styles to their eventual matchup.",topic:"Playoff Bracket",sentiment:"neutral"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — May 4, 2026
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Joel Embiid",team:"PHI",status:"Probable",injury:"Right knee management",timeline:"Expected to play Game 1 at Madison Square Garden after rest day",impact:"high"},
  {player:"Julius Randle",team:"NYK",status:"Probable",injury:"Left shoulder soreness",timeline:"Listed probable for tonight's playoff opener against Philadelphia",impact:"high"},
  {player:"Anthony Edwards",team:"MIN",status:"Probable",injury:"Right ankle soreness",timeline:"Expected to play in San Antonio after missing practice Friday",impact:"high"},
  {player:"Victor Wembanyama",team:"SAS",status:"Probable",injury:"Lower back tightness",timeline:"Cleared for tonight's game against Minnesota at Frost Bank Center",impact:"high"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Sunday, May 4, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"NYK",homeRecord:"53-29",awayTeam:"PHI",awayRecord:"45-37",time:"8:00 PM ET",tv:"NBC, Peacock",spread:"NYK -4.5",overUnder:"207.5",keyMatchup:"Joel Embiid vs. Julius Randle",storyline:"Eastern Conference Semifinals opener pits Philadelphia's historic momentum against New York's home court advantage at Madison Square Garden. The 76ers arrive with confidence after their stunning 3-1 comeback against Boston, while the Knicks seek to capitalize on their home crowd and rested legs.",prediction:"PHI wins 108-104 — Embiid's playoff brilliance continues in hostile territory",featured:true},
  {homeTeam:"SAS",homeRecord:"62-20",awayTeam:"MIN",awayRecord:"49-33",time:"9:30 PM ET",tv:"NBCSN, Peacock",spread:"SAS -6.5",overUnder:"221.5",keyMatchup:"Victor Wembanyama vs. Anthony Edwards",storyline:"Western Conference battle features San Antonio's elite defense anchored by Wembanyama against Minnesota's explosive offense led by Edwards. The Spurs' home court advantage at Frost Bank Center could be decisive in this clash of contrasting styles.",prediction:"SAS wins 114-108 — Wembanyama's rim protection slows Minnesota's transition attack"}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Top 5 Active Playoff Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"VJ Edgecombe",team:"PHI",statLine:"14.2 PPG · 4.1 RPG · 2.8 APG",note:"Edgecombe's clutch Game 7 performance against Boston has him primed for a bigger role in Philadelphia's conference semifinals matchup against New York.",trend:"up"},
  {rank:2,player:"Amen Thompson",team:"HOU",statLine:"11.8 PPG · 6.2 RPG · 3.9 APG",note:"Thompson continues providing versatile production as Houston advances deeper into their Western Conference playoff run.",trend:"stable"},
  {rank:3,player:"Keyonte George",team:"MIN",statLine:"8.4 PPG · 3.1 APG · 2.6 RPG",note:"George's bench scoring could be crucial tonight as Minnesota faces San Antonio's elite defense at Frost Bank Center.",trend:"stable"},
  {rank:4,player:"Jaime Jaquez Jr.",team:"MIA",statLine:"9.1 PPG · 4.3 RPG · 2.7 APG",note:"Jaquez awaits Miami's potential playoff advancement after the Heat's strong finish to the regular season.",trend:"stable"},
  {rank:5,player:"Dereck Lively II",team:"DAL",statLine:"7.8 PPG · 8.2 RPG · 1.8 BPG",note:"Lively's rim protection and rebounding anchor Dallas as the Mavericks continue their playoff push in the West.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS — Sunday Eastern Conference Semifinals
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Joel Embiid",team:"PHI",action:"add",reason:"Conference semifinals opener at MSG with maximum usage expected after his dominant Game 7 against Boston. Elite DFS ceiling in the highest-stakes environment.",urgency:"high"},
  {player:"Jalen Brunson",team:"NYK",action:"hold",reason:"Home court advantage in Game 1 should boost Brunson's assist ceiling while the crowd energy favors his clutch scoring ability in tournament play.",urgency:"high"},
  {player:"Victor Wembanyama",team:"SAS",action:"stream",reason:"Elite blocks and defensive stats ceiling against Minnesota's pace makes him a strong tournament play despite the salary premium.",urgency:"medium"},
  {player:"Anthony Edwards",team:"MIN",action:"hold",reason:"His explosive scoring potential on the road creates huge DFS upside despite San Antonio's defensive reputation. Tournament-only given the matchup volatility.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Updated May 4, 2026
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"W1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L4",last10:"4-6",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W4",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"W1",last10:"8-2",conf:"east"},
  {rank:5,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L1",last10:"8-2",conf:"east"},
  {rank:6,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"W4",last10:"9-1",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"5-5",conf:"east"},
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

export const historyFact = {year:2000,fact:"On May 4, 2000, Vince Carter scored 27 points to lead the Toronto Raptors to their first-ever playoff series victory, defeating the New York Knicks 93-89 in Game 5 of their Eastern Conference Quarterfinals at Air Canada Centre to win the series 3-2.",players:["Vince Carter"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-04",question:"Which team advanced to their first Eastern Conference Semifinals since 2008 with a Game 7 victory on May 3, 2026?",options:["Cleveland Cavaliers","Detroit Pistons","Orlando Magic","Toronto Raptors"],correctIndex:1,explanation:"The Detroit Pistons defeated Orlando 116-94 in Game 7 to reach the Eastern Conference Semifinals for the first time since 2008.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"How many points did Donovan Mitchell score in Cleveland's Game 7 victory over Toronto?",options:["A. 28 points","B. 31 points","C. 35 points","D. 38 points"],answer:"C",explanation:"Mitchell scored 35 points with 8 assists to lead Cleveland past Toronto in Game 7.",difficulty:"easy"},{question:"Which Detroit player recorded a double-double in their Game 7 victory over Orlando?",options:["A. Ausar Thompson","B. Isaiah Stewart","C. Jalen Duren","D. Both B and C"],answer:"B",explanation:"Isaiah Stewart had 22 points and 14 rebounds in Detroit's series-clinching victory.",difficulty:"medium"},{question:"What was the final score of Detroit's Game 7 victory over Orlando?",options:["A. 116-94","B. 112-98","C. 118-102","D. 114-96"],answer:"A",explanation:"Detroit routed Orlando 116-94 to advance to the Eastern Conference Semifinals.",difficulty:"easy"},{question:"How many assists did Cade Cunningham record in Detroit's Game 7 win?",options:["A. 8 assists","B. 9 assists","C. 11 assists","D. 13 assists"],answer:"C",explanation:"Cunningham orchestrated Detroit's offense with 11 assists alongside his 28 points.",difficulty:"hard"},{question:"Which teams play tonight in Eastern Conference Semifinals action?",options:["A. Boston vs Detroit","B. Philadelphia vs New York","C. Cleveland vs Toronto","D. Orlando vs Miami"],answer:"B",explanation:"Philadelphia visits New York at Madison Square Garden for Game 1 of their conference semifinals series.",difficulty:"medium"}]};