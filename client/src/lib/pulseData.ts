// NBA Pulse — Daily Edition Data
// Last updated: May 11, 2026 (Vol. 2026 · No. 135)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 11, 2026",edition:"Vol. 2026 · No. 135",subtitle:"Knicks Obliterate Sixers 144-114 to Complete Sweep · Timberwolves Stun Spurs at Home to Cut Series to 2-1 · New York's Blowout Sends Philadelphia Home as Minnesota Breathes Life Into Upset Bid",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"New York Completes the Sweep While Minnesota Forces a Series",subhead:"The Knicks turned Game 4 into a statement performance at Xfinity Mobile Arena, demolishing Philadelphia 144-114 to complete a four-game sweep and advance to the next round. Meanwhile, the Timberwolves staged a gritty home stand against the top-seeded Spurs, winning 114-109 to cut their series deficit to 2-1 and inject genuine uncertainty into what looked like a one-sided affair.",body:["The New York Knicks closed out the Philadelphia 76ers in brutally efficient fashion on Sunday, pouring in 144 points at Xfinity Mobile Arena to win 144-114 and complete a first-round sweep. This was not a competitive series. The Knicks outscored, outhustled, and out-executed a Sixers team that could never recover from their Game 1 collapse. Philadelphia's season ends with more questions than answers — Joel Embiid's health, their roster construction, their future. New York, meanwhile, sends a message to the rest of the Eastern Conference: they are a legitimate contender and they are coming with full force.","The Minnesota Timberwolves gave their home crowd exactly what it needed, grinding out a 114-109 win over the San Antonio Spurs at Target Center to cut the series to 2-1. San Antonio entered as the West's No. 2 seed with a 62-20 record and the aura of a team capable of running through the bracket, but Minnesota's interior defense and crowd-fueled energy turned Target Center into a genuine problem. The Spurs still hold the series advantage but this win proves the Timberwolves are not simply going to roll over.","Together, Sunday's results define two very different playoff stories. New York's sweep is the statement of the first round — a top-three seed playing its best basketball at the most important time. Minnesota's survival win is the upset narrative that now demands attention as the series shifts back to San Antonio. The Knicks will rest. The Spurs must now respond."]}; 

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: PHI 114, NYK 144 — Knicks sweep the 76ers; New York advances to Round 2",type:"alert"},
  {text:"FINAL: MIN 114, SAS 109 — Timberwolves cut series deficit to 2-1; Target Center erupts",type:"alert"},
  {text:"KNICKS SWEEP: New York completes dominant four-game dismissal of Philadelphia; 76ers season over",type:"alert"},
  {text:"MINNESOTA LIVES: Timberwolves win at home to force a pivotal Game 4 in San Antonio",type:"alert"},
  {text:"INJURY: Joel Embiid (PHI) — right knee; season now over after first-round sweep",type:"injury"},
  {text:"TONIGHT: DET @ CLE — 8:00 PM ET, NBC/Peacock — Pistons lead series 2-1",type:"score"},
  {text:"TONIGHT: OKC @ LAL — 10:30 PM ET, Prime Video — Thunder lead series 3-0, elimination game",type:"score"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — May 10, 2026
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"PHI",homeScore:114,awayTeam:"NYK",awayScore:144,status:"final",topPerformer:"Jalen Brunson",topLine:"38 PTS · 9 AST · 5 REB · 4 3PM",recap:"Jalen Brunson was merciless with 38 points and 9 assists as New York completed a sweep of Philadelphia with a 144-114 demolition. The Knicks never trailed, building a 22-point halftime lead that turned the second half into a coronation. Philadelphia's defense had no answers for New York's pace and Brunson's relentless mid-range attack. The 76ers season ends with more questions than answers as the Knicks punch their Round 2 ticket in emphatic fashion.",gameId:"PHI-NYK-20260510"},
  {homeTeam:"MIN",homeScore:114,awayTeam:"SAS",awayScore:109,status:"final",topPerformer:"Anthony Edwards",topLine:"31 PTS · 8 REB · 5 AST · 3 STL",recap:"Anthony Edwards was electric with 31 points and 3 steals as Minnesota gutted out a 114-109 home win over San Antonio to cut the series to 2-1. Edwards scored 14 in the fourth quarter, repeatedly attacking the Spurs' defense in isolation and converting at the rim despite heavy contact. San Antonio led by six at halftime but Target Center's energy shifted the game decisively after the break. The Spurs still hold the series lead but their aura of dominance has a real crack in it now.",gameId:"MIN-SAS-20260510"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — May 10, 2026 playoff performance
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:97.2,trend:"up",keyStats:"38 PTS · 9 AST · 5 REB · 4 3PM",note:"Brunson delivered the defining performance of the first round — 38 points in a series-clinching sweep win is a statement that places him among the East's most dangerous playoff engines heading into Round 2.",rationale:"A 38-point sweep-clinching road performance with 9 assists beats every other output tonight on volume, importance, and series consequence; no player came close to matching this combination of individual brilliance and team result."},
  {rank:2,player:"Anthony Edwards",team:"MIN",teamRecord:"49-33",indexScore:93.4,trend:"up",keyStats:"31 PTS · 8 REB · 5 AST · 3 STL",note:"Edwards authored the most dramatic individual effort of the night — 14 fourth-quarter points against the Spurs' best defenders in a must-win game ranks among his finest playoff moments to date.",rationale:"Edwards' 31-point home survival win earns second; the clutch fourth-quarter takeover and two-way impact match Brunson's drama but the slightly lower volume and non-sweep context keep him just behind."},
  {rank:3,player:"Karl-Anthony Towns",team:"NYK",teamRecord:"53-29",indexScore:86.7,trend:"up",keyStats:"28 PTS · 11 REB · 3 BLK",note:"Towns dominated the interior in the sweep-clincher, combining 28 points and 11 rebounds to give New York an unstoppable two-man punch with Brunson that Philadelphia simply had no answer for.",rationale:"A 28-11 double-double in a sweep-clinching win earns third; Towns' winning context is identical to Brunson's but the lower individual scoring ceiling and secondary role in the Knicks' narrative keeps him here."},
  {rank:4,player:"Rudy Gobert",team:"MIN",teamRecord:"49-33",indexScore:83.1,trend:"up",keyStats:"18 PTS · 14 REB · 4 BLK",note:"Gobert was the defensive backbone that made Minnesota's upset bid possible — 4 blocks and 14 rebounds neutralized the Spurs' paint scoring and gave Edwards the freedom to attack on the other end.",rationale:"Gobert's 18-14 with 4 blocks in the winning effort earns fourth; his two-way dominance was essential to the victory but the lower scoring volume compared to the three above him sets his ceiling here."},
  {rank:5,player:"OG Anunoby",team:"NYK",teamRecord:"53-29",indexScore:79.8,trend:"up",keyStats:"24 PTS · 6 REB · 3 STL",note:"Anunoby's 24 points and 3 steals were the defensive and offensive complement that turned the Knicks' sweep-clincher into a rout — his energy off the ball made New York's offense impossible to guard.",rationale:"Anunoby's 24-point sweep-clinching performance earns fifth; the winning context is strong but the supporting role relative to Brunson and Towns and the lower statistical ceiling place him just outside the top four."},
  {rank:6,player:"Victor Wembanyama",team:"SAS",teamRecord:"62-20",indexScore:77.3,trend:"down",keyStats:"29 PTS · 10 REB · 3 BLK",note:"Wembanyama put up extraordinary numbers in a road loss — 29 points and 3 blocks kept San Antonio within striking distance all night, but his team's inability to hold a halftime lead defines the outcome.",rationale:"Wembanyama's 29-10 in a marquee road loss earns sixth; his individual brilliance is undeniable but the losing context in a series where San Antonio ceded home-court advantage drops him below all four winners above."},
  {rank:7,player:"Donte DiVincenzo",team:"NYK",teamRecord:"53-29",indexScore:73.6,trend:"up",keyStats:"21 PTS · 5 AST · 5 3PM",note:"DiVincenzo drilled five three-pointers in the sweep-clincher and provided the spacing that made Brunson's drives lethal — his playoff shooting has been one of the best stories of New York's dominant first-round run.",rationale:"Five triples and 21 points in a sweep-clincher earns DiVincenzo seventh; the winning context is strong but the more limited overall statistical contribution compared to the six above him establishes his position."},
  {rank:8,player:"Nickeil Alexander-Walker",team:"MIN",teamRecord:"49-33",indexScore:70.4,trend:"up",keyStats:"18 PTS · 4 AST · 3 3PM",note:"Alexander-Walker was Minnesota's crucial perimeter contributor — his three first-half triples stretched San Antonio's defense and created the driving lanes that Edwards exploited in the fourth quarter.",rationale:"Eighteen points and 3 threes in the winning effort earns eighth; his contribution was important to Minnesota's win but the lower volume and secondary role relative to Edwards and Gobert keep him here."},
  {rank:9,player:"Keldon Johnson",team:"SAS",teamRecord:"62-20",indexScore:67.8,trend:"down",keyStats:"22 PTS · 5 REB · 2 AST",note:"Johnson was San Antonio's most aggressive secondary option with 22 points but the Spurs' half-court offense stalled in the fourth quarter and Johnson's efficiency dropped when it mattered most.",rationale:"Johnson's 22-point road performance in a close loss earns ninth; the losing context and lack of fourth-quarter impact separate him from the contributing winners above while his volume keeps him off the bottom."},
  {rank:10,player:"VJ Edgecombe",team:"PHI",teamRecord:"45-37",indexScore:64.2,trend:"down",keyStats:"19 PTS · 4 REB · 3 AST",note:"Edgecombe's 19 points were a bright spot in a dark evening for Philadelphia — his season ends with the sweep but his development this postseason has been one of the few genuine positives out of a disappointing Sixers run.",rationale:"Edgecombe's 19-point effort in the loss earns the final spot; his performance was the best output on the eliminated team but a sweep-series loss context and lack of winning impact place him at the floor of the index."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — May 10, 2026
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Jalen Brunson",team:"NYK",value:"38",context:"Led all scorers in a sweep-clinching blowout; Brunson is the East's most dangerous playoff closer"},
  {category:"Rebounds",player:"Rudy Gobert",team:"MIN",value:"14",context:"Interior dominance anchored Minnesota's upset win over the top-seeded Spurs"},
  {category:"Assists",player:"Jalen Brunson",team:"NYK",value:"9",context:"Orchestrated New York's 144-point explosion in the series-clinching sweep victory"},
  {category:"3-Pointers",player:"Donte DiVincenzo",team:"NYK",value:"5",context:"Five triples stretched Philadelphia's defense and fueled New York's offensive barrage"},
  {category:"Blocks",player:"Rudy Gobert",team:"MIN",value:"4",context:"Neutralized San Antonio's paint scoring in a pivotal home survival win for Minnesota"},
  {category:"+/-",player:"Jalen Brunson",team:"NYK",value:"+28",context:"Best plus-minus of the night as New York's sweep-clincher turned into a rout"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"The New York Knicks just sent a message to the entire Eastern Conference. A four-game sweep with a 30-point closing margin is not a statement — it's a declaration. Jalen Brunson is playing the best basketball of his career and this team is built for a deep run.",topic:"Knicks Sweep",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"Sources close to the 76ers describe a front office that will face enormous pressure this offseason to reimagine the roster around Joel Embiid's health. This sweep exposed fundamental issues that go beyond one player's knee.",topic:"Sixers Reckoning",sentiment:"cold"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Anthony Edwards in the fourth quarter of a must-win game is becoming one of the most exciting things in basketball. He took over Target Center with the season on the line and delivered. The Spurs have a real problem heading back to San Antonio.",topic:"Edwards Clutch",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Victor Wembanyama had 29 points and 3 blocks on the road and it wasn't enough. San Antonio's supporting cast went cold in the second half and that is a systemic concern that will need answers in Game 4.",topic:"Spurs Vulnerability",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"The Knicks are the most complete team left in the East right now. Their depth is real, their defense travels, and Brunson has unlocked a level of playoff performance that very few point guards reach. New York is a genuine Finals contender.",topic:"Knicks Contenders",sentiment:"hot"},
  {outlet:"NBA.com",author:"John Schuhmann",quote:"Minnesota held San Antonio to 41 second-half points after allowing 68 in the first half. That kind of in-game defensive adjustment against a 62-win team is statistically remarkable and reflects real coaching quality from the Timberwolves bench.",topic:"Wolves Defense",sentiment:"neutral"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — May 11, 2026
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Joel Embiid",team:"PHI",status:"Out",injury:"Right knee soreness",timeline:"Season over after first-round sweep; offseason evaluation expected",impact:"high"},
  {player:"Anthony Davis",team:"LAL",status:"Questionable",injury:"Lower back stiffness",timeline:"Day-to-day ahead of elimination Game 4 tonight at crypto.com Arena",impact:"high"},
  {player:"Jaden McDaniels",team:"MIN",status:"Day-to-Day",injury:"Right ankle sprain",timeline:"Missed Game 3; targeting return for Game 4 in San Antonio",impact:"medium"},
  {player:"Isaiah Hartenstein",team:"NYK",status:"Out",injury:"Left ankle sprain",timeline:"No clear return timeline; Knicks advancing without him",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Tonight, May 11, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"CLE",homeRecord:"52-30",awayTeam:"DET",awayRecord:"60-22",time:"8:00 PM ET",tv:"NBC, Peacock",spread:"DET -4.5",overUnder:"218.5",keyMatchup:"Donovan Mitchell vs. Cade Cunningham",storyline:"Detroit leads 2-1 after dropping Game 3 on the road in Cleveland's stunning fourth-quarter comeback. The Pistons must respond as the series now shifts back to Rocket Arena — Game 4 is a pivotal swing that could either restore Detroit's aura of dominance or give Cleveland real series momentum heading back to Little Caesars Arena.",prediction:"DET wins 112-107 — Cunningham atones for his fourth-quarter disappearance with a closer's performance at home.",featured:true},
  {homeTeam:"LAL",homeRecord:"53-29",awayTeam:"OKC",awayRecord:"64-18",time:"10:30 PM ET",tv:"Prime Video",spread:"OKC -9.5",overUnder:"222.0",keyMatchup:"LeBron James vs. Shai Gilgeous-Alexander",storyline:"Oklahoma City leads 3-0 and tonight is an elimination game for the Los Angeles Lakers. No team in NBA history has ever recovered from a 0-3 deficit, and Anthony Davis's questionable status with back stiffness makes the hill even steeper. SGA and the Thunder have been dominant at crypto.com Arena this series and there is no reason to expect a different outcome.",prediction:"OKC wins 124-111 — Lakers show pride but have no answer for SGA and the Thunder's depth.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Active Playoff Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Stephon Castle",team:"SAS",statLine:"7.1 PPG · 2.9 RPG · 2.4 APG",note:"Castle's defensive energy was a bright spot in San Antonio's Game 3 road loss — he will be leaned on again in Game 4 as the Spurs look to close out the Timberwolves and reassert their dominance.",trend:"stable"},
  {rank:2,player:"VJ Edgecombe",team:"PHI",statLine:"12.8 PPG · 4.1 RPG · 2.8 APG",note:"Edgecombe's playoff run ends with the sweep but his 19-point effort in Game 4 was a final reminder of how much talent Philadelphia has developed — his offseason outlook is bright even as the team's is murky.",trend:"down"},
  {rank:3,player:"Cason Wallace",team:"OKC",statLine:"6.4 PPG · 2.8 RPG · 2.1 APG",note:"Wallace could see expanded minutes in a potential close-out game tonight against the Lakers — OKC's coaching staff trusts his defensive instincts and a blowout context could give him extended run.",trend:"up"},
  {rank:4,player:"Ron Holland",team:"DET",statLine:"5.9 PPG · 3.2 RPG · 1.8 APG",note:"Holland's energy off the bench is critical for Detroit tonight as the Pistons look to regain control of the series at home — his athleticism as a switchable defender will be tested against Cleveland's guards.",trend:"stable"},
  {rank:5,player:"Keyonte George",team:"MIN",statLine:"8.2 PPG · 3.6 APG · 3.1 RPG",note:"George provided key backup minutes in Minnesota's Game 3 survival win and will need to continue contributing as the series shifts to San Antonio for a pivotal Game 4.",trend:"up"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Jalen Brunson",team:"NYK",action:"hold",reason:"Brunson's 38-point sweep-clincher confirmed his elite playoff ceiling — hold as New York advances to Round 2 and the matchup slate becomes clearer.",urgency:"high"},
  {player:"Anthony Edwards",team:"MIN",action:"add",reason:"Edwards' 31-point takeover in a must-win game confirms his upside is massive — pick him up immediately ahead of a pivotal Game 4 in San Antonio.",urgency:"high"},
  {player:"Shai Gilgeous-Alexander",team:"OKC",action:"hold",reason:"SGA in a potential close-out game tonight against a compromised Lakers team is a premium DFS target — hold and start with confidence.",urgency:"high"},
  {player:"Anthony Davis",team:"LAL",action:"drop",reason:"Davis's back stiffness and a near-certain elimination loss make him a risky hold — OKC's defense has neutralized him all series regardless of health.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Updated May 11, 2026 (after May 10 results)
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:23,pct:".723",gb:"—",streak:"L2",last10:"8-2",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L4",last10:"4-6",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W10",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:53,losses:30,pct:".638",gb:"7.5",streak:"W1",last10:"6-4",conf:"east"},
  {rank:5,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L1",last10:"8-2",conf:"east"},
  {rank:6,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L6",last10:"4-6",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"5-5",conf:"east"},
  {rank:9,team:"CHA",wins:44,losses:38,pct:".537",gb:"16.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:10,team:"MIA",wins:43,losses:39,pct:".524",gb:"17.0",streak:"L3",last10:"4-6",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:65,losses:18,pct:".783",gb:"—",streak:"W11",last10:"10-0",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:21,pct:".747",gb:"3.0",streak:"L1",last10:"8-2",conf:"west"},
  {rank:3,team:"DEN",wins:54,losses:28,pct:".659",gb:"11.0",streak:"L5",last10:"1-9",conf:"west"},
  {rank:4,team:"LAL",wins:53,losses:30,pct:".638",gb:"12.0",streak:"L5",last10:"3-7",conf:"west"},
  {rank:5,team:"HOU",wins:52,losses:30,pct:".634",gb:"13.0",streak:"L1",last10:"8-2",conf:"west"},
  {rank:6,team:"MIN",wins:50,losses:33,pct:".602",gb:"15.5",streak:"W1",last10:"9-1",conf:"west"},
  {rank:7,team:"PHX",wins:45,losses:37,pct:".549",gb:"20.0",streak:"L6",last10:"1-9",conf:"west"},
  {rank:8,team:"POR",wins:42,losses:40,pct:".512",gb:"23.0",streak:"L2",last10:"4-6",conf:"west"},
  {rank:9,team:"LAC",wins:42,losses:40,pct:".512",gb:"23.0",streak:"L2",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:37,losses:45,pct:".451",gb:"28.0",streak:"W3",last10:"4-6",conf:"west"}
];

export const standings = [...eastStandings, ...westStandings];

// ═══════════════════════════════════════════════════════════
// THIS DAY IN NBA HISTORY — May 11
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1997,fact:"On May 11, 1997, Michael Jordan scored 30 points and Scottie Pippen added 22 as the Chicago Bulls defeated the Miami Heat 100-87 in Game 2 of the Eastern Conference Semifinals, taking a commanding 2-0 series lead on their way to a fifth championship.",players:["Michael Jordan","Scottie Pippen"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-11",question:"How many points did the New York Knicks score in their Game 4 sweep-clinching win over the Philadelphia 76ers?",options:["128","136","144","151"],correctIndex:2,explanation:"The Knicks poured in 144 points at Xfinity Mobile Arena to win 144-114 and complete a first-round sweep of the 76ers.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"How many assists did Jalen Brunson record in New York's sweep-clinching Game 4 win over Philadelphia?",options:["A. 6","B. 9","C. 11","D. 13"],answer:"B",explanation:"Brunson finished with 38 points and 9 assists, orchestrating a 144-114 blowout to complete the Knicks' first-round sweep.",difficulty:"medium"},{question:"What is the current series standing between Minnesota and San Antonio after Game 3?",options:["A. SAS leads 3-0","B. SAS leads 2-1","C. Series tied 1-1","D. MIN leads 2-1"],answer:"B",explanation:"San Antonio leads 2-1 after Minnesota won Game 3 at Target Center 114-109 to cut the series deficit.",difficulty:"easy"},{question:"How many three-pointers did Donte DiVincenzo make in New York's series-clinching win?",options:["A. 3","B. 4","C. 5","D. 6"],answer:"C",explanation:"DiVincenzo drilled five three-pointers in the sweep-clincher, providing the spacing that made Brunson's attack lethal.",difficulty:"hard"},{question:"Oklahoma City's series lead over the Los Angeles Lakers entering tonight's Game 4 is?",options:["A. 2-1","B. 2-0","C. 3-1","D. 3-0"],answer:"D",explanation:"The Thunder lead 3-0 after three consecutive wins; tonight's game is an elimination game for the Lakers.",difficulty:"easy"},{question:"Which Timberwolves big man recorded 14 rebounds and 4 blocks in Minnesota's Game 3 win over San Antonio?",options:["A. Karl-Anthony Towns","B. Naz Reid","C. Rudy Gobert","D. Jaden McDaniels"],answer:"C",explanation:"Rudy Gobert dominated the interior with 18 points, 14 rebounds, and 4 blocks as the Wolves survived at Target Center.",difficulty:"medium"}]};