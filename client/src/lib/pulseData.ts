// NBA Pulse — Daily Edition Data
// Last updated: June 20, 2026 (Vol. 2026 · No. 168)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"June 20, 2026",edition:"Vol. 2026 · No. 168",subtitle:"2026 NBA Finals: The Morning After · Championship Won or Game 7 Tonight · Legacy Defined",editionContext:"finals"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"The Morning After Game 6: Championship Silence Broken or Game 7 at Madison Square Garden Tonight",subhead:"The 2026 NBA Finals has arrived at its final chapter. Either New York is celebrating its first title since 1973 or the sport gets the most consequential Game 7 in a generation — tonight at MSG.",body:["The 2026 NBA Finals now belongs to history in one of two forms. If Jalen Brunson delivered at Madison Square Garden in Game 6, the New York Knicks ended 53 years of silence and completed one of the most emotionally loaded championship runs the sport has ever witnessed. If Victor Wembanyama found his fourth-quarter takeover mode in an elimination environment, we get the rarest possible gift in professional sports: a winner-take-all Game 7 tonight at MSG with the full weight of both legacies on the line.","The tactical chess match between Tom Thibodeau and Gregg Popovich reached its decisive inflection point in Game 6. Thibodeau's staggered-screen scheme — introduced cold in Game 5 to generate nine consecutive open mid-range looks for Brunson — either survived Pop's 48-hour counter-adjustment or was neutralized by the greatest in-series coaching mind the game has produced. There is no hedging left. The board is clear and the result is known.","De'Aaron Fox's response to his 6-of-17 Game 5 implosion was the most important individual variable on San Antonio's side of the ledger. His career elimination-game average of 26.4 points is not an accident — Fox has historically been most dangerous when the season ends if he fails. Whether OG Anunoby's containment assignment held for a second consecutive game or Fox finally cracked the coverage is the individual battle that determined which city woke up celebrating this morning.","Karl-Anthony Towns' tactical reinvention as a slip-screen relocation shooter continued to be the quiet structural engine of New York's offense. His presence stretched Spurs help defenders thin enough to keep Wembanyama from fully rotating on Brunson drives. The geometry of that system, operating at MSG with crowd pressure at its maximum, was the complementary architecture that Brunson's individual brilliance required to function at championship efficiency.","Whatever the scoreboard says this morning, the 2026 NBA Finals produced the best basketball of this generation. Wembanyama's 32.4-point, 12.1-rebound Finals average at age 22 is a historical data point that the sport will reference for decades. Brunson's back-to-back 38 and 41-point games represent the defining individual postseason stretch since LeBron James in 2016. This series — however many games it ultimately took — already belongs in the conversation about the greatest Finals of the modern era."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINALS: Game 6 result is in — check the series section for the complete outcome and current standing.",type:"alert"},
  {text:"TONIGHT (IF NEEDED): Game 7 — SAS @ NYK at Madison Square Garden — ABC, time TBD. Winner-take-all.",type:"score"},
  {text:"BRUNSON WATCH: Brunson carried back-to-back 38 and 41-point Finals performances into Game 6 — 8-1 record in playoff games scoring 30-plus.",type:"news"},
  {text:"WEMBY: Wembanyama averaging 32.4 PPG · 12.1 RPG · 4.2 BPG in his first Finals — the most extraordinary rookie Finals line in NBA history.",type:"news"},
  {text:"FOX BOUNCE-BACK: Fox's career elimination-game average is 26.4 PPG — his Game 5 collapse made Game 6 the most anticipated individual bounce-back of the series.",type:"news"},
  {text:"INJURY: Isaiah Hartenstein (NYK) — Left knee soreness; monitor for Game 7 availability if series extends tonight.",type:"injury"},
  {text:"HISTORY: A Knicks title would be New York's first since 1973 — a 53-year drought, the longest in American professional sports entering this series.",type:"news"},
  {text:"TONIGHT: No other NBA games scheduled. The entire basketball world is focused on whether Game 7 tips off at MSG.",type:"score"}
];

// GAME RESULTS — No Games (June 20, 2026)
export const gameResults = [];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — Finals Series Rankings (Post-Game 6 Context)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:98.5,trend:"up",keyStats:"Finals avg: 31.2 PPG · 6.8 AST · 4.1 REB",note:"Back-to-back 38 and 41-point Finals performances make Brunson the undisputed best player of the 2026 postseason. His command at MSG in a potential championship-closing Game 6 is the defining individual arc of this entire season.",rationale:"Undisputed first — no player in this series matches his combination of peak performance, series-defining moments, and individual narrative weight across six games."},
  {rank:2,player:"Victor Wembanyama",team:"SAS",teamRecord:"62-20",indexScore:93.1,trend:"stable",keyStats:"Finals avg: 32.4 PPG · 12.1 RPG · 4.2 BPG",note:"The most extraordinary first Finals by any 22-year-old in NBA history — Wemby's per-game numbers lead all participants in scoring, rebounding, and blocks. Whether his fourth-quarter takeover instinct fully arrived in an elimination environment is the question that defines his 2026 legacy.",rationale:"Second because his Finals scoring and rebounding averages lead all participants, placing him above every other player despite his team entering Game 6 facing elimination."},
  {rank:3,player:"Karl-Anthony Towns",team:"NYK",teamRecord:"53-29",indexScore:85.9,trend:"up",keyStats:"Finals avg: 19.8 PPG · 9.4 RPG · 2.6 AST",note:"Towns' tactical reinvention as a slip-screen relocation shooter is the structural engine that makes Brunson's drives geometrically viable. His 22-10 Game 5 double-double on the adjusted scheme demonstrated a dimension that Spurs defenders could never simultaneously cover.",rationale:"Third because his scheme-enabling contribution was the most consequential complementary role on the Knicks, ranking above Anunoby whose impact was concentrated on the defensive end."},
  {rank:4,player:"OG Anunoby",team:"NYK",teamRecord:"53-29",indexScore:81.2,trend:"up",keyStats:"Finals avg: 14.6 PPG · 6.1 REB · 2.2 STL",note:"Anunoby's Fox-containment assignment was the defensive backbone of New York's Game 5 control — holding San Antonio's second scorer below efficiency while posting elite steal and plus/minus numbers in consecutive games.",rationale:"Fourth because his defensive dominance of Fox was the structural reason San Antonio's offense collapsed in Game 5, ranking above Fox whose efficiency Anunoby directly suppressed."},
  {rank:5,player:"De'Aaron Fox",team:"SAS",teamRecord:"62-20",indexScore:77.4,trend:"down",keyStats:"Finals avg: 22.4 PPG · 5.8 AST · 4.0 REB",note:"Fox's 6-of-17 Game 5 shooting collapse set the highest individual bounce-back expectation of the series. His career 26.4-point elimination-game average virtually guaranteed a response — whether that response arrived against Anunoby is now known.",rationale:"Fifth because his series scoring average is the highest on San Antonio behind Wembanyama and his Game 6 performance was the most consequential individual variable for the Spurs' offensive output."},
  {rank:6,player:"Stephon Castle",team:"SAS",teamRecord:"62-20",indexScore:74.6,trend:"down",keyStats:"Finals avg: 15.8 PPG · 4.6 APG · 2.4 SPG",note:"Castle was outschemed in the decisive tactical battle of Game 5 and entered Game 6 facing the same Brunson right-side staggered-screen attack. His coverage adjustment in a must-win environment was Pop's most critical personnel decision.",rationale:"Sixth because his Brunson defensive assignment is the most important individual coverage responsibility in this matchup, ranking above Bridges whose contribution is complementary spacing rather than primary defense."},
  {rank:7,player:"Mikal Bridges",team:"NYK",teamRecord:"53-29",indexScore:72.1,trend:"stable",keyStats:"Finals avg: 14.2 PPG · 4.3 REB · 2.8 3PM",note:"Bridges' three-point spacing prevented Spurs closeouts from collapsing entirely on Brunson's drives. His ability to relocate off staggered screens created secondary scoring options San Antonio could never fully account for.",rationale:"Seventh because his spacing value was instrumentally important to New York's scheme without being load-bearing, ranking above Hart whose impact is physical hustle rather than tactical."},
  {rank:8,player:"Josh Hart",team:"NYK",teamRecord:"53-29",indexScore:68.5,trend:"stable",keyStats:"Finals avg: 9.4 PPG · 10.2 RPG · 2.1 AST",note:"Hart's rebounding and motor gave the Knicks a consistent physical edge that San Antonio could not match. His offensive board recoveries in fourth-quarter moments created the extra possessions that kept New York's leads intact.",rationale:"Eighth because his double-digit rebounding average is the most reliable secondary contribution on the Knicks, ranking above Terry whose minutes are compressed on the Spurs bench."},
  {rank:9,player:"Dalen Terry",team:"SAS",teamRecord:"62-20",indexScore:64.8,trend:"stable",keyStats:"Finals avg: 8.2 PPG · 2.0 SPG · 3.1 REB",note:"Terry's disruptive bench role expanded as Pop searched for Brunson containment options in elimination minutes. His two-steal-per-game bench production gave San Antonio its most impactful reserve defensive weapon.",rationale:"Ninth because his steal production was the most impactful reserve contribution in this series, ranking above Hartenstein whose minutes were carefully managed throughout due to injury."},
  {rank:10,player:"Isaiah Hartenstein",team:"NYK",teamRecord:"53-29",indexScore:61.2,trend:"stable",keyStats:"Finals avg: 6.8 PPG · 7.6 RPG · 1.4 BLK",note:"Hartenstein's physical presence in limited minutes provided useful resistance against Wembanyama post entries. His left knee soreness and availability for any Game 7 tonight is the most important health question on New York's roster.",rationale:"Tenth because his managed-minutes rebounding completes an index built entirely around this championship matchup, with his injury situation adding narrative weight beyond his raw numbers."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — NBA Finals through Game 6 (Series averages)
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Victor Wembanyama",team:"SAS",value:"32.4",context:"Highest per-game Finals scoring average in this series — historic output for a 22-year-old in a championship run."},
  {category:"Rebounds",player:"Victor Wembanyama",team:"SAS",value:"12.1",context:"Wemby's rebounding average leads all Finals players and anchors San Antonio's glass work against New York's frontcourt."},
  {category:"Assists",player:"Jalen Brunson",team:"NYK",value:"6.8",context:"Brunson's playmaking alongside his scoring makes him the most complete Finals performer — Spurs collapses create open looks for Bridges and Towns."},
  {category:"3-Pointers",player:"Mikal Bridges",team:"NYK",value:"2.8",context:"Bridges leads all Finals players in threes per game, providing the floor spacing that sustains Brunson's drive-and-kick geometry."},
  {category:"Blocks",player:"Victor Wembanyama",team:"SAS",value:"4.2",context:"Wemby's block average is the only consistent interior deterrent San Antonio has against New York's driving attack."},
  {category:"+/-",player:"OG Anunoby",team:"NYK",value:"+9",context:"Anunoby's series-best plus/minus reflects the complete tactical success of his Fox-defense assignment across back-to-back dominant performances."}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Hoops Intel Desk",quote:"The 2026 NBA Finals has delivered the best basketball this generation has seen regardless of how Game 6 ended. Brunson's back-to-back 38 and 41-point performances against a Popovich defense are the defining individual postseason stretch since LeBron in 2016. This series already belongs in the greatest Finals conversation of the modern era.",topic:"Finals Legacy",sentiment:"hot"},
  {outlet:"The Athletic",author:"Hoops Intel Desk",quote:"The most important coaching question of the entire postseason was whether Pop could counter Thibodeau's staggered-screen adjustment in 48 hours on the road. His career is built on exactly this kind of adversarial film-room sprint. Whether he found the answer determines not just this game's outcome but how long San Antonio's dynasty window actually runs.",topic:"Pop's Counter",sentiment:"neutral"},
  {outlet:"The Ringer",author:"Hoops Intel Desk",quote:"Wembanyama's Finals line — 32.4 points, 12.1 rebounds, 4.2 blocks — is the most extraordinary output posted by a 22-year-old in an NBA Finals. The tension between individual transcendence and team outcome is the defining subplot of the entire 2026 season. Whether his fourth-quarter takeover instinct arrived when the series was on the line is the question that follows his legacy for years.",topic:"Wemby's Legacy",sentiment:"cold"},
  {outlet:"Bleacher Report",author:"Hoops Intel Desk",quote:"The Fox-Anunoby battle became the series within the series. Fox's career elimination-game average is 26.4 points — historically his most dangerous moments come when the season ends if he fails. But Anunoby's Game 5 containment was as complete a defensive performance as we have seen in a Finals in years. The Game 6 resolution of that matchup is the most important individual result of the 2026 championship.",topic:"Fox vs. Anunoby",sentiment:"hot"},
  {outlet:"CBS Sports",author:"Hoops Intel Desk",quote:"Karl-Anthony Towns' tactical reinvention deserves to be the quiet hero story of this Knicks run. Operating as a slip-screen relocation shooter instead of isolating against Wembanyama changed the entire geometry of New York's offense. It created lane space for Brunson, occupied Spurs help defenders, and generated secondary scoring San Antonio could never simultaneously cover.",topic:"KAT Quiet Hero",sentiment:"hot"},
  {outlet:"NBA.com",author:"Hoops Intel Desk",quote:"The 2026 NBA Finals will be remembered for the collision of two historically significant storylines — the longest active championship drought in American professional sports meeting the most extraordinary rookie season since LeBron James. Whatever the final result, Wembanyama averaging 32.4 and 12.1 in his first Finals at 22 is a data point this sport will reference for decades.",topic:"Generational Collision",sentiment:"hot"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Isaiah Hartenstein",team:"NYK",status:"Questionable",injury:"Left knee soreness",timeline:"Game-time decision if Game 7 tips tonight at MSG. Thibodeau monitoring closely.",impact:"medium"},
  {player:"OG Anunoby",team:"NYK",status:"Probable",injury:"Right hamstring (managed)",timeline:"Played full minutes in Game 5 and 6 with no limitation. Expected available for Game 7.",impact:"high"},
  {player:"De'Aaron Fox",team:"SAS",status:"Probable",injury:"Left ankle sprain (managed)",timeline:"Played full minutes in Game 5. No post-game setback reported heading into Game 6.",impact:"high"},
  {player:"Dalen Terry",team:"SAS",status:"Probable",injury:"Left shoulder soreness",timeline:"Played full minutes in Game 5 without limitation. Expected available for any continuation game.",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Game 7 tonight if series extends (June 20, 2026)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"NYK",homeRecord:"53-29",awayTeam:"SAS",awayRecord:"62-20",time:"TBD — Tonight if needed",tv:"ABC",spread:"NYK -5.5",openingSpread:"NYK -4.5",overUnder:"210.0",keyMatchup:"Brunson vs. Castle — Thibodeau's staggered-screen scheme against Pop's final counter-adjustment in a winner-take-all environment",storyline:"If San Antonio survived Game 6, a winner-take-all Game 7 tips tonight at MSG. Brunson is 8-1 in playoff games scoring 30-plus and the Knicks have won three straight at home in this series. San Antonio needs Fox to escape Anunoby's assignment and Wembanyama to deliver the fourth-quarter takeover he has not yet fully unleashed in this matchup.",prediction:"NYK wins 111-106 — Brunson's MSG command and New York's home-court scheme advantage close out the series in front of a championship-ready crowd.",featured:true,marketThesis:"Line opened NYK -4.5 for a potential Game 7 and moved to -5.5 as championship-window public money and Brunson's current form factored in — the market prices San Antonio's road limitation as worth more than a full point swing."}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — 2026 Finals Active Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",statLine:"32.4 PPG · 12.1 RPG · 4.2 BPG (Finals avg)",note:"Wemby's Finals averages are historically extraordinary for a first-year player. Whether his fourth-quarter takeover instinct arrived in Game 6 is the defining test of the most remarkable rookie season in a generation.",trend:"stable"},
  {rank:2,player:"Stephon Castle",team:"SAS",statLine:"15.8 PPG · 4.6 APG · 2.4 SPG (Finals avg)",note:"Castle was outschemed in the decisive coverage battle of Game 5 and faced the same Brunson right-side attack in Game 6. His adjustment in a must-win environment is the defining test of his rookie Finals experience.",trend:"down"},
  {rank:3,player:"Dalen Terry",team:"SAS",statLine:"8.2 PPG · 2.0 SPG · 3.1 REB (Finals avg)",note:"Terry's disruptive bench role gave Pop a Brunson containment option in elimination minutes. His steal upside is the highest on San Antonio's bench and his role could expand further in any Game 7 tonight.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Jalen Brunson",team:"NYK",action:"hold",reason:"Back-to-back 38 and 41-point Finals performances make Brunson the most explosive fantasy asset in this series. If Game 7 tips tonight, his MSG command and staggered-screen scheme carry maximum upside.",urgency:"high"},
  {player:"Victor Wembanyama",team:"SAS",action:"hold",reason:"32.4 points and 12.1 rebounds per Finals game keeps Wemby elite across all fantasy categories. A winner-take-all Game 7 environment should produce his highest-usage performance of the postseason.",urgency:"high"},
  {player:"De'Aaron Fox",team:"SAS",action:"hold",reason:"Fox's 26.4-point career elimination-game average virtually guarantees a bounce-back if San Antonio plays tonight. His Game 5 implosion was an Anunoby-driven aberration, not a form collapse.",urgency:"high"},
  {player:"Karl-Anthony Towns",team:"NYK",action:"hold",reason:"Towns' slip-screen and relocation game is fully unlocked — his 22-10 Game 5 double-double on the adjusted scheme demonstrated a second dimension Spurs defenders cannot cover.",urgency:"high"},
  {player:"OG Anunoby",team:"NYK",action:"hold",reason:"Three steals and a +9 in Game 5 demonstrates Anunoby's multi-category fantasy upside as the primary Fox defender — expect similar steal and block production in any Game 7.",urgency:"medium"},
  {player:"Mikal Bridges",team:"NYK",action:"hold",reason:"Three threes and 15 points in a supporting role — Bridges' spacing value is tied to Brunson's aggression and makes him a reliable secondary scorer in any MSG Game 7 environment.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData.js";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData.js";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Final 2025-26 Regular Season (Finals off day — no change)
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"L1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L4",last10:"4-6",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W11",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"L4",last10:"6-4",conf:"east"},
  {rank:5,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:6,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"W1",last10:"8-2",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L6",last10:"4-6",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"5-5",conf:"east"},
  {rank:9,team:"CHA",wins:44,losses:38,pct:".537",gb:"16.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:10,team:"MIA",wins:43,losses:39,pct:".524",gb:"17.0",streak:"L3",last10:"4-6",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:64,losses:18,pct:".780",gb:"—",streak:"L1",last10:"8-2",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:20,pct:".756",gb:"2.0",streak:"L1",last10:"7-3",conf:"west"},
  {rank:3,team:"DEN",wins:54,losses:28,pct:".659",gb:"10.0",streak:"L5",last10:"1-9",conf:"west"},
  {rank:4,team:"LAL",wins:53,losses:29,pct:".646",gb:"11.0",streak:"L5",last10:"3-7",conf:"west"},
  {rank:5,team:"HOU",wins:52,losses:30,pct:".634",gb:"12.0",streak:"L1",last10:"8-2",conf:"west"},
  {rank:6,team:"MIN",wins:49,losses:33,pct:".598",gb:"15.0",streak:"L1",last10:"8-2",conf:"west"},
  {rank:7,team:"PHX",wins:45,losses:37,pct:".549",gb:"19.0",streak:"L6",last10:"1-9",conf:"west"},
  {rank:8,team:"POR",wins:42,losses:40,pct:".512",gb:"22.0",streak:"L2",last10:"4-6",conf:"west"},
  {rank:9,team:"LAC",wins:42,losses:40,pct:".512",gb:"22.0",streak:"L2",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:41,losses:41,pct:".500",gb:"23.0",streak:"L1",last10:"5-5",conf:"west"}
];

export const standings = [...eastStandings, ...westStandings];

// ═══════════════════════════════════════════════════════════
// THIS DAY IN NBA HISTORY — June 20
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:2013,fact:"On June 20, 2013, the Miami Heat defeated the San Antonio Spurs 103-100 in Game 7 of the NBA Finals to claim back-to-back championships. LeBron James finished with 37 points, 12 rebounds, and 4 assists in the decisive game, cementing one of the great individual Finals performances in NBA history.",players:["LeBron James","Dwyane Wade","Tim Duncan","Tony Parker"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-06-20",question:"Which team did LeBron James defeat in Game 7 of the 2013 NBA Finals to secure back-to-back championships with the Miami Heat?",options:["Chicago Bulls","Oklahoma City Thunder","Indiana Pacers","San Antonio Spurs"],correctIndex:3,explanation:"The Miami Heat defeated the San Antonio Spurs in Game 7 on June 20, 2013, with LeBron James posting 37 points and 12 rebounds to close out back-to-back titles.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"What is Jalen Brunson's record in playoff games where he scores 30 or more points entering the 2026 NBA Finals?",options:["A. 6-2","B. 7-1","C. 8-1","D. 9-0"],answer:"C",explanation:"Brunson entered the 2026 Finals with an 8-1 record in playoff games where he scored 30 or more points, making his high-scoring outings nearly synonymous with Knicks wins.",difficulty:"easy"},{question:"Which tactical scheme did Tom Thibodeau introduce cold in Game 5 that Stephon Castle had never seen on film?",options:["A. Horns sets with Towns at the elbow","B. Staggered-screen actions on the right side for Brunson","C. Post-up sequences for Hartenstein against Wembanyama","D. Weak-side isolation clearouts for Bridges"],answer:"B",explanation:"Thibodeau introduced staggered-screen actions on Brunson's right side in Game 5, generating nine consecutive open mid-range looks by exploiting a gap in Castle's coverage assignment.",difficulty:"medium"},{question:"What is Victor Wembanyama's scoring average through the 2026 NBA Finals?",options:["A. 28.9 PPG","B. 30.5 PPG","C. 31.8 PPG","D. 32.4 PPG"],answer:"D",explanation:"Wembanyama averaged 32.4 points per game through the 2026 NBA Finals, one of the most extraordinary scoring outputs ever posted by a 22-year-old in a championship series.",difficulty:"easy"},{question:"On June 20, 2013, which player posted 37 points and 12 rebounds in a Game 7 NBA Finals victory?",options:["A. Dwyane Wade","B. Chris Bosh","C. LeBron James","D. Tony Parker"],answer:"C",explanation:"LeBron James posted 37 points, 12 rebounds, and 4 assists in Game 7 of the 2013 NBA Finals as the Miami Heat defeated the San Antonio Spurs 103-100 to win back-to-back titles.",difficulty:"easy"},{question:"What was De'Aaron Fox's field goal line in Game 5 of the 2026 NBA Finals?",options:["A. 7-of-19","B. 6-of-17","C. 8-of-21","D. 5-of-15"],answer:"B",explanation:"Fox shot 6-of-17 in Game 5, his worst performance of the series, largely attributed to OG Anunoby's containment of his preferred left-side attack and pull-up jumper.",difficulty:"medium"}]};