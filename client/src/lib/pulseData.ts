// NBA Pulse — Daily Edition Data
// Last updated: May 2, 2026 (Vol. 2026 · No. 125)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 2, 2026",edition:"Vol. 2026 · No. 125",subtitle:"Lakers Dominate Rockets on Road to Even Series · Raptors Shock Cavaliers in Overtime Thriller at Home · Pistons Avoid Historic Upset with Road Victory in Orlando",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Lakers Answer Desperation Call While Playoff Underdogs Strike Back",subhead:"Thursday's playoff action delivered crucial momentum shifts as Los Angeles dominated Houston on the road to even their series, while Toronto stunned Cleveland in overtime and Detroit avoided historic elimination with a statement victory in Orlando that extends their championship hopes.",body:["Los Angeles Lakers delivered a dominant 98-78 road victory over Houston that silenced critics and evened their first-round series at one game apiece, proving their championship pedigree when facing elimination pressure. LeBron James orchestrated the suffocating performance with 31 points and 8 assists while Anthony Davis anchored a defensive masterpiece that held the Rockets to just 36.2% shooting, completely reversing the narrative after their shocking Game 1 defeat. The 20-point blowout showcased the Lakers' veteran playoff execution and championship DNA, announcing that reports of their demise were greatly exaggerated as they seized crucial road momentum heading home to Los Angeles.","Toronto Raptors stunned Cleveland with a thrilling 112-110 overtime victory at Scotiabank Arena, taking a 2-1 series lead behind Pascal Siakam's clutch 29-point performance and home-court magic that electrified the playoff atmosphere. Siakam dominated both regulation and overtime while the Raptors' suffocating defense forced crucial turnovers in the extra period, proving that Toronto's championship experience remains dangerous against Cleveland's explosive offense. The dramatic victory shifted series momentum completely and put the Cavaliers in uncomfortable road deficit heading into a must-win Game 4 situation.","Detroit Pistons avoided historic embarrassment with a crucial 93-79 victory over Orlando at Kia Center, extending their championship hopes and forcing a Game 6 return to Detroit despite trailing 3-1 in the series. Cade Cunningham delivered when it mattered most with 28 points and 7 assists while the Pistons' veteran playoff experience finally overwhelmed Orlando's young core in a suffocating defensive performance. The victory prevented what would have been one of the biggest upsets in NBA history and gave Detroit life heading home, though they still face elimination pressure in Friday's pivotal Game 6 showdown."]}; 

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: LAL 98, HOU 78 — Lakers dominate on road to even series behind LeBron's 31 points",type:"alert"},
  {text:"FINAL/OT: TOR 112, CLE 110 — Raptors stun Cavaliers in overtime thriller, take 2-1 series lead",type:"alert"},
  {text:"FINAL: DET 93, ORL 79 — Pistons avoid historic upset, force Game 6 return to Detroit",type:"alert"},
  {text:"LEBRON DELIVERS: 31 points, 8 assists leads Lakers' championship-level road response",type:"alert"},
  {text:"OVERTIME THRILLER: Siakam's 29 points power Raptors to stunning series lead over Cleveland",type:"alert"},
  {text:"TONIGHT: PHI @ BOS — 7:30 PM ET, NBC — Game 5 showdown at TD Garden with series tied 2-2",type:"score"},
  {text:"CUNNINGHAM CLUTCH: 28 points prevents Magic from completing historic playoff upset",type:"alert"},
  {text:"SERIES MOMENTUM: Three road teams deliver statement victories in crucial playoff games",type:"alert"},
  {text:"ELIMINATION AVOIDED: Detroit forces Game 6 after trailing 3-1 to eighth-seeded Orlando",type:"alert"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — May 1, 2026
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"HOU",homeScore:78,awayTeam:"LAL",awayScore:98,status:"final",topPerformer:"LeBron James",topLine:"31 PTS · 8 AST · 6 REB · 12-19 FG",recap:"LeBron James scored 31 points and dished 8 assists as Los Angeles delivered a dominant 98-78 road victory over Houston, evening their first-round series and proving their championship pedigree under elimination pressure. James shot an efficient 12-of-19 from the field while orchestrating a suffocating defensive performance that held the Rockets to just 36.2% shooting in a complete reversal from Game 1. Anthony Davis provided elite rim protection with 22 points and 11 rebounds as the Lakers' veteran playoff execution overwhelmed Houston's young core. The 20-point blowout seized crucial road momentum and silenced critics who questioned the Lakers' championship DNA after their shocking series-opening defeat.",gameId:"HOU-LAL-20260501"},
  {homeTeam:"TOR",homeScore:112,awayTeam:"CLE",awayScore:110,status:"final",topPerformer:"Pascal Siakam",topLine:"29 PTS · 8 REB · 6 AST · 11-21 FG",recap:"Pascal Siakam scored 29 points and grabbed 8 rebounds as Toronto stunned Cleveland 112-110 in overtime at Scotiabank Arena, taking a 2-1 series lead behind clutch execution and home-court magic. Siakam dominated both regulation and the extra period while shooting an efficient 11-of-21 from the field, proving his championship pedigree in the biggest moments of the contest. The Raptors forced crucial turnovers in overtime while their suffocating defense frustrated Cleveland's explosive offense throughout the dramatic victory. Donovan Mitchell managed 33 points for the Cavaliers but couldn't prevent Toronto from seizing series momentum with their veteran playoff experience and clutch shot-making.",gameId:"TOR-CLE-20260501"},
  {homeTeam:"ORL",homeScore:79,awayTeam:"DET",awayScore:93,status:"final",topPerformer:"Cade Cunningham",topLine:"28 PTS · 7 AST · 5 REB · 10-18 FG",recap:"Cade Cunningham scored 28 points and dished 7 assists as Detroit avoided historic elimination with a crucial 93-79 victory over Orlando at Kia Center, forcing Game 6 and extending their championship hopes. Cunningham shot an efficient 10-of-18 from the field while the Pistons' veteran playoff experience finally overwhelmed Orlando's young core in a suffocating defensive performance that held the Magic to just 37.1% shooting. Detroit's championship DNA emerged in the elimination game as they dominated both ends of the court to prevent what would have been one of the biggest upsets in NBA history. Paolo Banchero managed just 18 points on poor shooting as the Magic's historic upset bid faces a crucial Game 6 test in Detroit.",gameId:"ORL-DET-20260501"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 — Thursday Playoff Performers)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"LeBron James",team:"LAL",teamRecord:"53-29",indexScore:96.2,trend:"up",keyStats:"31 PTS · 8 AST · 6 REB",note:"LeBron's masterful 31-point performance led the Lakers' dominant 20-point road victory that evened their series and proved their championship pedigree under elimination pressure. His efficient shooting and elite playmaking completely reversed the narrative after Game 1's shocking defeat.",rationale:"LeBron's elimination-pressure road dominance with superior efficiency and team impact clearly surpasses Siakam's overtime heroics."},
  {rank:2,player:"Pascal Siakam",team:"TOR",teamRecord:"46-36",indexScore:93.8,trend:"up",keyStats:"29 PTS · 8 REB · 6 AST",note:"Siakam's clutch 29-point performance powered Toronto's stunning overtime victory over Cleveland, taking a 2-1 series lead with championship-level execution in the biggest moments. His dominance in both regulation and overtime proved his playoff pedigree against explosive competition.",rationale:"Siakam's overtime heroics in a series-shifting victory edges out Cunningham despite similar scoring due to the dramatic nature and higher-stakes context."},
  {rank:3,player:"Cade Cunningham",team:"DET",teamRecord:"60-22",indexScore:91.4,trend:"up",keyStats:"28 PTS · 7 AST · 5 REB",note:"Cunningham delivered when it mattered most with 28 points and 7 assists as Detroit avoided historic elimination with a crucial road victory in Orlando. His efficient shooting and playoff poise prevented what would have been one of the biggest upsets in NBA history.",rationale:"Cunningham's elimination-game excellence keeps him ahead of Davis despite slightly lower individual dominance due to the higher-pressure context and series-saving impact."},
  {rank:4,player:"Anthony Davis",team:"LAL",teamRecord:"53-29",indexScore:89.6,trend:"up",keyStats:"22 PTS · 11 REB · 3 BLK",note:"Davis provided elite two-way dominance with 22 points, 11 rebounds and 3 blocks as the Lakers delivered their championship-level road response. His rim protection and interior presence completely neutralized Houston's young frontcourt in the series-evening victory.",rationale:"Davis's complete two-way impact in a crucial road victory places him ahead of Mitchell despite lower scoring due to superior defensive impact and team success."},
  {rank:5,player:"Donovan Mitchell",team:"CLE",teamRecord:"52-30",indexScore:86.3,trend:"down",keyStats:"33 PTS · 6 AST · 4 REB",note:"Mitchell scored a game-high 33 points but couldn't prevent Cleveland from falling behind 2-1 in their series against Toronto. His explosive scoring kept the Cavaliers competitive in overtime but wasn't enough to overcome the Raptors' home-court execution.",rationale:"Mitchell's high scoring in a losing effort keeps him competitive with Scottie Barnes despite the disappointing team result due to his superior individual offensive impact."},
  {rank:6,player:"Scottie Barnes",team:"TOR",teamRecord:"46-36",indexScore:84.7,trend:"up",keyStats:"19 PTS · 12 REB · 8 AST",note:"Barnes provided crucial secondary scoring and elite playmaking with 19 points, 12 rebounds and 8 assists in Toronto's overtime victory. His versatile impact and clutch rebounding helped the Raptors seize series momentum against Cleveland.",rationale:"Barnes's well-rounded excellence in a series-shifting victory edges out Alperen Sengun despite similar statistical impact due to the overtime drama and higher team success."},
  {rank:7,player:"Alperen Sengun",team:"HOU",teamRecord:"52-30",indexScore:82.1,trend:"down",keyStats:"20 PTS · 9 REB · 5 AST",note:"Sengun managed 20 points and 9 rebounds but couldn't prevent Houston's disappointing home defeat as the Lakers evened their series. His solid individual production was overshadowed by the Rockets' offensive collapse against veteran playoff execution.",rationale:"Sengun's solid individual numbers in a disappointing home loss places him ahead of Paolo Banchero due to superior overall statistical impact despite both suffering crucial defeats."},
  {rank:8,player:"Paolo Banchero",team:"ORL",teamRecord:"45-37",indexScore:79.8,trend:"down",keyStats:"18 PTS · 7 REB · 4 AST",note:"Banchero managed just 18 points on poor shooting as Orlando's historic upset bid suffered a crucial setback in the elimination game. His struggles against Detroit's veteran defense raised questions about the Magic's ability to complete their stunning series victory.",rationale:"Banchero's disappointing elimination-game performance keeps him ahead of Isaiah Stewart only due to his higher usage rate and overall series context despite poor individual execution."},
  {rank:9,player:"Isaiah Stewart",team:"DET",teamRecord:"60-22",indexScore:77.5,trend:"up",keyStats:"16 PTS · 11 REB · 2 BLK",note:"Stewart provided crucial interior presence with 16 points and 11 rebounds as Detroit avoided elimination with their road victory in Orlando. His defensive impact and rebounding helped the Pistons dominate the paint against the Magic's young frontcourt.",rationale:"Stewart's solid two-way impact in a series-extending road victory places him ahead of Austin Reaves due to superior rebounding and defensive presence despite lower scoring output."},
  {rank:10,player:"Austin Reaves",team:"LAL",teamRecord:"53-29",indexScore:75.2,trend:"up",keyStats:"14 PTS · 5 AST · 4 REB",note:"Reaves provided steady secondary scoring and playmaking with 14 points and 5 assists in the Lakers' series-evening road victory. His improved playoff execution and three-point shooting helped Los Angeles overwhelm Houston's young core.",rationale:"Reaves's efficient role-player excellence in a crucial road victory secures the final index spot ahead of players who didn't meaningfully contribute to winning efforts despite modest individual numbers."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — Thursday, May 1, 2026
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Donovan Mitchell",team:"CLE",value:"33",context:"Game-high 33 points in Cleveland's overtime defeat to Toronto"},
  {category:"Rebounds",player:"Scottie Barnes",team:"TOR",value:"12",context:"12 rebounds anchoring Toronto's overtime victory over Cleveland"},
  {category:"Assists",player:"LeBron James",team:"LAL",value:"8",context:"8 assists orchestrating Lakers' dominant series-evening road victory"},
  {category:"3-Pointers",player:"Pascal Siakam",team:"TOR",value:"4",context:"4 three-pointers fueling Toronto's stunning overtime victory at home"},
  {category:"Blocks",player:"Anthony Davis",team:"LAL",value:"3",context:"3 blocks providing elite rim protection in Lakers' road dominance"},
  {category:"+/-",player:"LeBron James",team:"LAL",value:"+24",context:"Game-high +24 in Lakers' championship-level road response"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS — Thursday Playoff Recap
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"LeBron James delivered exactly the championship-level response the Lakers needed with his dominant 31-point road performance that evened their series against Houston. The Lakers' veteran playoff execution and suffocating defense proved that reports of their championship demise were greatly exaggerated after Game 1's shocking defeat. This series-evening victory showcased why the Lakers remain dangerous when their backs are against the wall.",topic:"Lakers' Championship Response",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"Toronto's stunning overtime victory over Cleveland represents a massive momentum shift as Pascal Siakam's clutch performance put the Raptors in series control at home. Siakam's 29 points in both regulation and overtime proved his championship pedigree while the home crowd provided elimination-level energy that overwhelmed Cleveland's road execution. This 2-1 series lead puts the Cavaliers in uncomfortable deficit heading into a must-win Game 4.",topic:"Raptors' Overtime Heroics",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Detroit's crucial elimination-game victory in Orlando prevented one of the biggest upsets in NBA history while proving that veteran playoff experience still matters in crucial moments. Cade Cunningham's 28-point performance showcased exactly why the Pistons remain dangerous despite their series deficit, though they still face elimination pressure heading home. The Magic's inability to close out this historic opportunity raises questions about their championship readiness.",topic:"Pistons Avoid Historic Upset",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Cleveland's disappointing overtime defeat highlighted the Cavaliers' concerning road execution and inability to capitalize on series-shifting opportunities against Toronto's home-court advantage. Donovan Mitchell's 33 points weren't enough to overcome the Raptors' veteran playoff poise and clutch shot-making in the extra period. This 2-1 deficit represents a dangerous momentum shift that could derail Cleveland's championship aspirations.",topic:"Cavaliers' Road Struggles",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"Houston's disappointing 20-point home defeat exposed the Rockets' youth and inexperience against the Lakers' championship-level playoff execution under elimination pressure. The Rockets' offensive collapse and poor shooting performance showed the vast gap between regular season success and playoff intensity against veteran competition. This series-evening defeat raises serious questions about Houston's ability to compete with championship-caliber teams.",topic:"Rockets' Playoff Inexperience",sentiment:"cold"},
  {outlet:"NBA.com",author:"John Schuhmann",quote:"Thursday's playoff results demonstrated how veteran playoff experience and championship DNA separate legitimate contenders from teams still learning playoff basketball under pressure. From LeBron's elimination-pressure dominance to Siakam's overtime heroics, the night showcased how individual star power and team execution combine to shift series momentum completely in crucial postseason moments.",topic:"Veteran Playoff Excellence",sentiment:"neutral"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — May 2, 2026
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Joel Embiid",team:"PHI",status:"Probable",injury:"Right knee soreness",timeline:"Knee responding well ahead of crucial Game 5 in Boston",impact:"high"},
  {player:"Jaylen Brown",team:"BOS",status:"Questionable",injury:"Left ankle sprain",timeline:"Ankle being evaluated for Game 5 home showdown",impact:"high"},
  {player:"Paolo Banchero",team:"ORL",status:"Day-to-Day",injury:"Right shoulder contusion",timeline:"Shoulder sore after hard fall in elimination game defeat",impact:"high"},
  {player:"Franz Wagner",team:"ORL",status:"Probable",injury:"Left hip tightness",timeline:"Hip improved and expected to play in crucial Game 6",impact:"medium"},
  {player:"Dillon Brooks",team:"HOU",status:"Questionable",injury:"Right hamstring strain",timeline:"Hamstring tightness being monitored ahead of Game 3",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Friday, May 2, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"BOS",homeRecord:"56-26",awayTeam:"PHI",awayRecord:"45-37",time:"7:30 PM ET",tv:"NBC, Peacock",openingSpread:"BOS -3.5",spread:"BOS -4.5",overUnder:"218.5",keyMatchup:"Jayson Tatum vs. Joel Embiid",storyline:"Game 5 arrives at TD Garden with the series tied 2-2 after Philadelphia's stunning Game 4 victory shifted momentum completely toward the underdog Sixers. Boston faces elimination pressure at home while Joel Embiid's vintage playoff dominance has proven the Sixers can compete with championship-level execution. This winner-take-all atmosphere will determine which team advances to face the winner of the Knicks-Hawks series in what promises to be an electric playoff showdown.",prediction:"BOS wins 114-109 — Tatum's home-court excellence seizes series control in hostile environment",featured:true}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Top 5 Active Playoff Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Paolo Banchero",team:"ORL",statLine:"24.8 PPG · 7.8 RPG · 5.1 APG · 47.2% FG",note:"Banchero's struggles in Game 5 raised concerns about Orlando's ability to complete their historic upset, though he still leads the Magic's stunning playoff run. His shoulder soreness and Game 6 elimination pressure will test his rookie poise against Detroit's veteran experience.",trend:"down"},
  {rank:2,player:"Amen Thompson",team:"HOU",statLine:"12.4 PPG · 6.2 RPG · 4.3 APG · 44.8% FG",note:"Thompson's energy off the bench couldn't prevent Houston's disappointing Game 2 home defeat as the Lakers evened their series. His athletic versatility remains crucial for the Rockets' championship hopes heading into a pivotal Game 3 road test.",trend:"down"},
  {rank:3,player:"Anthony Black",team:"ORL",statLine:"11.6 PPG · 4.8 APG · 4.7 RPG · 43.1% FG",note:"Black's versatile contributions have supported Orlando's historic playoff run despite the Game 5 setback against Detroit's veteran execution. His elite basketball IQ and defensive ability remain crucial as the Magic face elimination in Game 6.",trend:"stable"},
  {rank:4,player:"Dereck Lively II",team:"DET",statLine:"10.2 PPG · 7.8 RPG · 2.1 BLK · 59.4% FG",note:"Lively's interior presence helped Detroit avoid historic elimination with crucial rim protection and efficient scoring in Game 5. His playoff poise and defensive impact provide essential depth as the Pistons return home still facing elimination pressure.",trend:"up"},
  {rank:5,player:"Keyonte George",team:"MIN",statLine:"8.8 PPG · 2.9 APG · 2.4 RPG · 41.2% FG",note:"George awaits Minnesota's next opponent after the Timberwolves completed their stunning upset of defending champion Denver. His improved shooting and playoff composure helped fuel one of the postseason's biggest surprises.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS — Friday Playoff Slate
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Joel Embiid",team:"PHI",action:"add",reason:"Embiid has dominated this series with vintage playoff performances and faces a winner-take-all Game 5 at TD Garden. His two-way excellence and elimination-game experience provide premium DFS upside despite the hostile road environment.",urgency:"high"},
  {player:"Jayson Tatum",team:"BOS",action:"stream",reason:"Tatum faces crucial Game 5 pressure at home and should see massive usage with the series tied 2-2. His ability to take over games in clutch moments makes him attractive for tournament lineups with championship implications at stake.",urgency:"high"},
  {player:"Pascal Siakam",team:"TOR",action:"hold",reason:"Siakam's overtime heroics proved his championship DNA and the Raptors now lead their series 2-1 heading into Game 4. His consistent playoff excellence and clutch gene make him valuable for cash games throughout this series run.",urgency:"medium"},
  {player:"Paolo Banchero",team:"ORL",action:"hold",reason:"Banchero struggled in Game 5 but remains Orlando's best player as they face elimination in Game 6. His rookie inconsistency creates risk but his ceiling remains massive in a potential series-clinching performance.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Updated May 2, 2026
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"W1",last10:"6-4",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L1",last10:"7-3",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W4",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"L1",last10:"7-3",conf:"east"},
  {rank:5,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"W1",last10:"7-3",conf:"east"},
  {rank:6,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"7-3",conf:"east"},
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

export const historyFact = {year:1993,fact:"On May 2, 1993, Charles Barkley scored 56 points to lead the Phoenix Suns to a 121-114 victory over the Golden State Warriors in Game 3 of their Western Conference Semifinals series, setting a franchise playoff record that still stands today.",players:["Charles Barkley"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-02",question:"Which team evened their playoff series with a dominant 20-point road victory?",options:["Houston Rockets","Los Angeles Lakers","Toronto Raptors","Detroit Pistons"],correctIndex:1,explanation:"The Los Angeles Lakers dominated Houston 98-78 on the road behind LeBron James' 31 points to even their first-round series at 1-1.",difficulty:"easy"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"How many points did LeBron James score in the Lakers' series-evening road victory?",options:["A. 29 points","B. 31 points","C. 33 points","D. 35 points"],answer:"B",explanation:"LeBron scored 31 points and dished 8 assists in Los Angeles' dominant 98-78 road victory over Houston.",difficulty:"easy"},{question:"Which team won in overtime to take a 2-1 series lead?",options:["A. Cleveland Cavaliers","B. Toronto Raptors","C. Boston Celtics","D. Philadelphia 76ers"],answer:"B",explanation:"Toronto stunned Cleveland 112-110 in overtime behind Pascal Siakam's 29 points to take a 2-1 series lead.",difficulty:"medium"},{question:"How many points did Cade Cunningham score in Detroit's elimination-avoiding victory?",options:["A. 26 points","B. 27 points","C. 28 points","D. 30 points"],answer:"C",explanation:"Cunningham scored 28 points and dished 7 assists as Detroit avoided historic elimination with a 93-79 victory in Orlando.",difficulty:"medium"},{question:"What was the final score of the Lakers' dominant road victory over Houston?",options:["A. 96-76","B. 98-78","C. 100-80","D. 102-82"],answer:"B",explanation:"The Lakers dominated Houston 98-78 in a 20-point blowout that evened their series at 1-1.",difficulty:"easy"},{question:"Which player scored 29 points in Toronto's overtime victory over Cleveland?",options:["A. Scottie Barnes","B. Pascal Siakam","C. OG Anunoby","D. Fred VanVleet"],answer:"B",explanation:"Pascal Siakam scored 29 points with 8 rebounds and 6 assists to lead Toronto's stunning overtime victory over Cleveland.",difficulty:"hard"}]};