// NBA Pulse — Daily Edition Data
// Last updated: June 15, 2026 (Vol. 2026 · No. 163)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"June 15, 2026",edition:"Vol. 2026 · No. 163",subtitle:"Knicks One Win From Title · Game 6 Monday at MSG · Spurs Face Elimination",editionContext:"finals"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"The Knicks Are One Win Away: New York Returns Home for Game 6 With a Chance to End 53 Years of Waiting",subhead:"Sunday is an off day between two of the most consequential nights in recent NBA Finals history. The Knicks lead San Antonio 3-2 after Brunson's 41-point masterpiece in Game 5. Madison Square Garden awaits Monday night — and the entire basketball world is watching.",body:["The NBA Finals rests on a Sunday. No tip-off tonight, no box score to dissect — just 24 hours of anticipation before Madison Square Garden hosts what could be the most emotionally charged game in New York basketball since 1994. The Knicks lead San Antonio 3-2 after Jalen Brunson's 41-point road demolition in Game 5, and the arithmetic is brutally simple: win one more, lift the Larry O'Brien Trophy in front of the loudest building in professional sports.","The questions that will define Game 6 are already being asked in both locker rooms. For the Spurs, the central problem is tactical: Thibodeau's staggered-screen scheme toward the right side of the floor exposed a coverage gap that Castle and Wembanyama spent most of Game 5 unable to close. Gregg Popovich must arrive at Frost Bank Center — now MSG — with a counter-adjustment, or Brunson will operate in the same open mid-range geography that produced nine pull-up makes on Friday. San Antonio went to the right-side hedge scheme in Games 2 and 3 and it worked brilliantly. Thibodeau cracked it. Pop needs another answer.","For the Knicks, the assignment is psychological as much as tactical. New York has been here before in recent playoff runs — positioned to close, only to allow a series to extend. Tom Thibodeau's teams are renowned for their defensive discipline but have occasionally tightened offensively under the weight of elimination-game pressure. The difference this time is Brunson, who has demonstrated throughout these Finals that he does not shrink under scrutiny. His Game 5 performance was not just excellent — it was architecturally precise, executed inside a scheme the Spurs had not seen before.","Victor Wembanyama enters Game 6 as the series' most important swing variable. His 29 points and 11 rebounds in Game 5 were exceptional by any standard except the one the moment demanded — he did not take over the fourth quarter when San Antonio needed a closer. In an elimination game, with his team's season on the line, Wembanyama's willingness to be dominant rather than efficient will determine whether this series ends Monday or extends to a Game 7 in San Antonio on Wednesday.","De'Aaron Fox's bounce-back potential is the other thread Spurs fans are holding onto. His 6-of-17 shooting in Game 5 was directly tied to OG Anunoby's defensive attention — and Fox is too good a player to shoot that inefficiently twice in a row. If Pop can design two or three early possessions that force Anunoby into a rotation, Fox will find his rhythm. Whether that happens before New York builds a lead that makes recovery impossible is the tactical game-within-the-game that will define Monday night."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINALS OFF DAY: No games Sunday, June 15. Next action — Game 6 Monday, June 16 at MSG on ABC, 8:00 PM ET.",type:"alert"},
  {text:"SERIES: NYK leads NBA Finals 3-2. Knicks one win from first championship since 1973.",type:"alert"},
  {text:"ELIMINATION GAME: Spurs face elimination in Game 6 at MSG Monday. San Antonio must win or season ends.",type:"alert"},
  {text:"BRUNSON CONTEXT: Brunson's 41-point Game 5 is the highest-scoring Finals performance by a Knick since the 1994 Finals.",type:"news"},
  {text:"WEMBY MUST CLOSE: Wembanyama posted 29-11-4 in a Game 5 loss — San Antonio needs a dominant fourth-quarter closer version Monday.",type:"news"},
  {text:"FOX BOUNCE-BACK: De'Aaron Fox shot 6-of-17 in Game 5 — history says elimination games produce his best offensive nights.",type:"news"},
  {text:"INJURY: Isaiah Hartenstein (NYK) — Left knee soreness; limited to under 20 minutes in Game 5, being monitored for Game 6.",type:"injury"},
  {text:"TONIGHT: Game 6 — SAS @ NYK — Monday, June 16, 8:00 PM ET on ABC. NYK leads series 3-2.",type:"score"}
];

// GAME RESULTS — No Games (June 15, 2026)
export const gameResults = [];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — Finals Series Rankings (Off Day Edition)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:98.2,trend:"up",keyStats:"41 PTS · 7 AST · 3 REB · +8 (Finals G5)",note:"Brunson's 41-point road win is the defining performance of the 2026 postseason. His adjusted right-side attack produced nine mid-range makes and three late pull-ups under maximum Finals pressure — the single most decisive individual game of the series.",rationale:"Undisputed first: 41 points on 16-of-27 in a road Finals win giving his team a 3-2 lead is the most impactful individual output of any game this series, ranking him above Wembanyama whose team lost despite a strong outing."},
  {rank:2,player:"Victor Wembanyama",team:"SAS",teamRecord:"62-20",indexScore:90.8,trend:"down",keyStats:"29 PTS · 11 REB · 4 BLK · -4 (Finals G5)",note:"Wembanyama remains the best player in this series across five games — but his fourth quarter was not the series-saving performance San Antonio needed. Twenty-nine and 11 with four blocks is elite production on any other night.",rationale:"Second because his 29-11-4 line is the second-most impactful individual output of the night, ranking above Towns whose contribution was complementary rather than load-bearing."},
  {rank:3,player:"Karl-Anthony Towns",team:"NYK",teamRecord:"53-29",indexScore:85.4,trend:"up",keyStats:"22 PTS · 10 REB · 3 AST · +6 (Finals G5)",note:"Towns' tactical reinvention — slip screens and relocations instead of isolation face-ups — was the complementary adjustment that unlocked New York's second-unit offense and created lane space for Brunson's attacks.",rationale:"Third because his 22-10 double-double on an adjusted scheme was the decisive complementary performance on the winning team, ranking above Fox whose poor shooting night was the primary reason San Antonio lost."},
  {rank:4,player:"OG Anunoby",team:"NYK",teamRecord:"53-29",indexScore:79.1,trend:"up",keyStats:"16 PTS · 7 REB · 3 STL · +9 (Finals G5)",note:"Anunoby's defensive assignment on Fox was the tactical counterpart to Brunson's offensive explosion — he held Fox to 6-of-17 shooting, recorded three steals, and posted the game's second-best plus/minus at +9.",rationale:"Fourth because his defensive destruction of Fox was the structural reason San Antonio's offense collapsed in the second half, ranking above Fox whose shooting implosion he directly caused."},
  {rank:5,player:"De'Aaron Fox",team:"SAS",teamRecord:"62-20",indexScore:76.3,trend:"down",keyStats:"17 PTS · 5 AST · 4 REB · -7 (Finals G5)",note:"Fox's 6-of-17 night was his worst of the series and tied directly to Anunoby's defensive attention. His mid-range and pull-up looks were consistently contested. San Antonio cannot win Game 6 if this efficiency repeats.",rationale:"Fifth because despite his worst shooting game of the series his 17-point line still represents the Spurs' second-highest offensive contribution, ranking above Castle who was also outschemed but with less volume."},
  {rank:6,player:"Stephon Castle",team:"SAS",teamRecord:"62-20",indexScore:74.2,trend:"down",keyStats:"14 PTS · 4 AST · 2 STL · -5 (Finals G5)",note:"Castle was beaten by Thibodeau's staggered-screen scheme and could not navigate the new right-side actions. His 14 points kept him productive offensively but the coverage assignment was lost — his biggest Finals challenge so far.",rationale:"Sixth because despite being outschemed on Brunson, his 14-point contribution was the Spurs' third-highest and his defensive effort was genuine even if unfavorable, ranking him above Bridges who had a quieter scoring night."},
  {rank:7,player:"Mikal Bridges",team:"NYK",teamRecord:"53-29",indexScore:71.8,trend:"stable",keyStats:"15 PTS · 4 REB · 2 AST · +5 (Finals G5)",note:"Bridges was efficient and quiet — exactly what Thibodeau needed when Brunson carried the load. Three three-pointers kept Spurs closeouts occupied and prevented them from fully collapsing on Brunson drives.",rationale:"Seventh because his spacing was instrumentally important to freeing Brunson's attack lanes, ranking above Hart whose energy contribution was valuable but less tactically decisive."},
  {rank:8,player:"Josh Hart",team:"NYK",teamRecord:"53-29",indexScore:68.5,trend:"stable",keyStats:"10 PTS · 9 REB · 2 AST · +4 (Finals G5)",note:"Hart's nine rebounds and relentless motor gave New York a physical edge on the glass that San Antonio could not overcome late. Two offensive board recoveries created additional possessions in the fourth quarter.",rationale:"Eighth because his nine-rebound hustle was the most impactful reserve performance of the game, ranking above Terry who played fewer minutes with less overall impact."},
  {rank:9,player:"Dalen Terry",team:"SAS",teamRecord:"62-20",indexScore:64.7,trend:"stable",keyStats:"9 PTS · 2 STL · 2 AST · -3 (Finals G5)",note:"Terry contributed energy and two steals off the bench but Pop's rotations compressed as the deficit grew. His role in an elimination-game Game 6 could expand if Pop needs a defensive disruptor against Brunson.",rationale:"Ninth because his two-steal nine-point bench line was the best reserve output on the losing team, ranking above Hartenstein whose minutes were managed in New York's fourth-quarter lineup."},
  {rank:10,player:"Isaiah Hartenstein",team:"NYK",teamRecord:"53-29",indexScore:61.2,trend:"stable",keyStats:"6 PTS · 7 REB · 1 BLK · +2 (Finals G5)",note:"Hartenstein's seven rebounds in managed minutes were a positive sign heading into Game 6. Thibodeau kept him under 20 minutes for knee management but his physical presence on Wembanyama post entries was useful.",rationale:"Tenth because his seven-rebound backup contribution in limited minutes was the final relevant individual performance of the night, completing a Finals-specific index driven entirely by this two-team series."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — NBA Finals Game 5 (most recent action)
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Jalen Brunson",team:"NYK",value:"41",context:"Series-high 41 points on a redesigned offensive scheme — the defining individual scoring performance of the 2026 Finals."},
  {category:"Rebounds",player:"Victor Wembanyama",team:"SAS",value:"11",context:"Wemby's 11 boards kept San Antonio competitive on the glass despite New York's physicality advantage in the second half."},
  {category:"Assists",player:"Jalen Brunson",team:"NYK",value:"7",context:"Brunson's 7 assists alongside 41 points reflects how Spurs collapses created open looks for Bridges and Towns."},
  {category:"3-Pointers",player:"Mikal Bridges",team:"NYK",value:"3",context:"Bridges hit 3 threes that kept Spurs defenders honest and prevented full collapse on Brunson's right-side attacks."},
  {category:"Blocks",player:"Victor Wembanyama",team:"SAS",value:"4",context:"Wembanyama's 4 blocks were the only consistent deterrent San Antonio had against New York's interior drives."},
  {category:"+/-",player:"OG Anunoby",team:"NYK",value:"+9",context:"Anunoby's +9 reflects the complete tactical success of his Fox-defense assignment and New York's second-half control."}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Hoops Intel Desk",quote:"The conversation around Jalen Brunson has permanently shifted after Game 5. Forty-one points on the road in a potential series-defining Finals game is the kind of performance that moves a player from great to historically significant. The staggered-screen adjustment gave him the geography but he still had to make nine consecutive mid-range jumpers under maximum pressure — that part was entirely Brunson.",topic:"Brunson's Legacy Moment",sentiment:"hot"},
  {outlet:"The Athletic",author:"Hoops Intel Desk",quote:"Thibodeau's Game 5 adjustment deserves to be studied for years. Pop had cracked Brunson's left-elbow game in Games 2 and 3 — so Thibodeau built an entirely new right-side menu that Castle had never defended in practice. When the most important tactical battle of a series shifts mid-game and one coach wins it decisively, that is as impressive as anything a player does on the floor.",topic:"Thibodeau's Counter-Scheme",sentiment:"hot"},
  {outlet:"The Ringer",author:"Hoops Intel Desk",quote:"Victor Wembanyama posted 29-11-4 in a loss and it barely registered as the dominant story of the night. That is what Brunson's performance did to the narrative. The Spurs need a different version of Wembanyama in Game 6 — not the efficient, system-playing version, but the one who decides the game is his and takes it by force in the fourth quarter. He is capable of it.",topic:"Wemby Must Dominate Game 6",sentiment:"cold"},
  {outlet:"Bleacher Report",author:"Hoops Intel Desk",quote:"De'Aaron Fox shooting 6-of-17 might be the most important number in the entire 2026 Finals. San Antonio cannot beat New York if Anunoby locks Fox into that efficiency and Brunson gets 41 simultaneously. Pop has to design possessions that get Fox open looks early — screen him toward the left baseline, post him up, or simply move him away from Anunoby's primary assignment.",topic:"Fox Must Respond at MSG",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Hoops Intel Desk",quote:"The New York Knicks are one win from ending 53 years of championship drought. Game 6 at Madison Square Garden on Monday night will be one of the loudest buildings in Finals history regardless of the result. The question is whether San Antonio can silence that environment the way they did in Game 3 — the one time this series they won at MSG.",topic:"MSG Championship Atmosphere",sentiment:"neutral"},
  {outlet:"NBA.com",author:"Hoops Intel Desk",quote:"Karl-Anthony Towns' tactical reinvention is the quiet story enabling Brunson's explosion. When Towns stopped isolating against Wembanyama and started slipping screens and relocating for catch-and-shoot looks, he kept Spurs help defenders occupied and created the exact lane space Brunson needed. New York won Game 5 as a system — and that system may be even harder to stop in a closeout environment at home.",topic:"KAT's Tactical Rebirth",sentiment:"hot"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Isaiah Hartenstein",team:"NYK",status:"Day-to-Day",injury:"Left knee soreness",timeline:"Limited to under 20 minutes in Game 5. Being monitored ahead of Game 6 Monday at MSG.",impact:"medium"},
  {player:"OG Anunoby",team:"NYK",status:"Probable",injury:"Right hamstring (managed)",timeline:"Played full minutes in Game 5 with no visible limitation. Expected available Game 6.",impact:"high"},
  {player:"De'Aaron Fox",team:"SAS",status:"Probable",injury:"Left ankle sprain (managed)",timeline:"Played full minutes in Game 5. No setback reported post-game.",impact:"high"},
  {player:"Dalen Terry",team:"SAS",status:"Probable",injury:"Left shoulder soreness",timeline:"Played in Game 5 with no limitation reported. Expected available Game 6.",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Game 6: SAS @ NYK, Monday June 16
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"NYK",homeRecord:"53-29",awayTeam:"SAS",awayRecord:"62-20",time:"8:00 PM ET — Monday, June 16",tv:"ABC",spread:"NYK -3.0",openingSpread:"NYK -1.5",overUnder:"211.5",keyMatchup:"Brunson vs. Castle/Wembanyama — Spurs must show a new coverage answer Monday or Brunson's right-side staggered-screen attacks will operate freely again at MSG.",storyline:"New York returns home with a 3-2 series lead and a chance to win the franchise's first title since 1973. The Garden will be at maximum intensity for a potential closeout game. San Antonio must replicate their Game 3 road win at MSG while also solving Thibodeau's adjusted offensive scheme — and Wembanyama must be a fourth-quarter closer in a way he was not in Game 5.",prediction:"NYK wins 109-104 — Brunson delivers 35 points and the MSG crowd carries New York to the championship.",featured:true,marketThesis:"Line opened NYK -1.5 on standard home-court value but has moved to -3.0 as championship-window money and public sentiment pour toward the Knicks — the market respects San Antonio's Game 3 road win but is pricing MSG elimination-night energy as a full additional point of spread."}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — 2026 Finals Active Rookies
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",statLine:"29 PTS · 11 REB · 4 BLK (Finals G5)",note:"Wemby's series averages now exceed 32 points and 12 rebounds per game — he remains the best player in this Finals across five games despite being one loss from elimination. A dominant Game 6 closing performance would be the defining moment of his rookie legacy.",trend:"stable"},
  {rank:2,player:"Stephon Castle",team:"SAS",statLine:"14 PTS · 4 AST · 2 STL (Finals G5)",note:"Castle was outschemed by Thibodeau's staggered-screen adjustment and is 0-for-2 in coverage battles after winning Games 2 and 3. His response in a potential elimination game at MSG will define his rookie Finals legacy either way.",trend:"down"},
  {rank:3,player:"Dalen Terry",team:"SAS",statLine:"9 PTS · 2 STL (Finals G5)",note:"Terry's role compresses in deficit situations when Pop tightens rotations — but an elimination-game environment with maximum stakes could unlock a larger disruptive role against Brunson in Game 6.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Jalen Brunson",team:"NYK",action:"hold",reason:"41 points on a new offensive scheme in a road Finals win — Brunson is the most explosive fantasy asset in this series. His adjusted right-side attack should carry forward into Game 6 at a friendly MSG environment.",urgency:"high"},
  {player:"Victor Wembanyama",team:"SAS",action:"hold",reason:"29-11-4 blocks in Game 5 keeps Wemby elite across all categories. His floor remains the best in any elimination-game format and a desperate Game 6 should produce his highest-usage performance of the series.",urgency:"high"},
  {player:"Karl-Anthony Towns",team:"NYK",action:"hold",reason:"22 and 10 after tactical reinvention — Towns' slip-screen and relocation game is now unlocked and sustainable heading into a potential closeout at MSG.",urgency:"high"},
  {player:"De'Aaron Fox",team:"SAS",action:"hold",reason:"6-of-17 was an aberration driven by Anunoby's defensive attention — Fox's volume in an elimination game virtually guarantees a bounce-back scoring night. Buy low on the down game.",urgency:"high"},
  {player:"OG Anunoby",team:"NYK",action:"hold",reason:"Three steals and a +9 in Game 5 demonstrates Anunoby's multi-category upside as the primary Fox defender. Expect a similar assignment Monday with steal and block upside.",urgency:"medium"},
  {player:"Mikal Bridges",team:"NYK",action:"hold",reason:"Fifteen points and three threes in a supporting role — Bridges' spacing value is tied directly to Brunson's continued aggression, making him a reliable secondary scorer in a potential closeout Game 6.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData.js";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData.js";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Final 2025-26 Regular Season (no change — Finals off day)
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
// THIS DAY IN NBA HISTORY — June 15
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1993,fact:"On June 15, 1993, Charles Barkley won his only NBA MVP award recognition when Phoenix fell to Chicago in the Finals — but his legacy was secured in the Conference Finals when he carried the Suns to their only Finals appearance of the decade. The date marks one of the most celebrated individual campaigns in modern NBA history from a player who never won a ring.",players:["Charles Barkley","Michael Jordan"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-06-15",question:"The New York Knicks lead the 2026 NBA Finals 3-2 after Game 5. The last time the Knicks won an NBA championship was 1973 — how many years is that championship drought?",options:["49 years","51 years","53 years","55 years"],correctIndex:2,explanation:"The Knicks' last championship came in 1973, making 2026 exactly 53 years — the longest active drought in franchise history and the defining narrative of the current Finals run.",difficulty:"easy"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"What is the current NBA Finals series standing heading into Game 6 on June 16, 2026?",options:["A. Series tied 2-2","B. SAS leads 3-2","C. NYK leads 3-2","D. NYK leads 4-1"],answer:"C",explanation:"The Knicks won Game 5 at Frost Bank Center 94-90 to take a 3-2 NBA Finals lead. Game 6 is Monday at Madison Square Garden.",difficulty:"easy"},{question:"How many mid-range jumpers did Jalen Brunson hit using Thibodeau's staggered-screen adjustment in Game 5?",options:["A. Six","B. Seven","C. Eight","D. Nine"],answer:"D",explanation:"Brunson hit nine mid-range pull-up jumpers from the right side of the floor — the direct product of Thibodeau's staggered-screen scheme attacking the Castle-Wembanyama coverage from an unfamiliar angle.",difficulty:"medium"},{question:"Which Knicks defender held De'Aaron Fox to 6-of-17 shooting in Game 5 with a dedicated defensive assignment?",options:["A. Mikal Bridges","B. Josh Hart","C. OG Anunoby","D. Isaiah Hartenstein"],answer:"C",explanation:"OG Anunoby shadowed Fox as his primary assignment in Game 5, limiting him to 6-of-17 shooting and finishing with three steals and a +9 plus/minus.",difficulty:"medium"},{question:"What was Karl-Anthony Towns' tactical adjustment in Game 5 that unlocked his 22-point, 10-rebound performance?",options:["A. Isolation face-ups against Wembanyama in the post","B. Slip screens and relocation catch-and-shoot looks","C. High ball-screen pick-and-roll actions","D. Cutting backdoor from the weak side"],answer:"B",explanation:"Towns shifted away from isolation face-ups against Wembanyama and instead slipped screens and relocated for catch-and-shoot opportunities, keeping Spurs help defenders occupied and freeing Brunson's lanes.",difficulty:"medium"},{question:"The NBA Finals' last Game 6 elimination appearance at Madison Square Garden before 2026 came during which Finals matchup?",options:["A. 1994 NYK vs. HOU","B. 1999 SAS vs. NYK","C. 1970 NYK vs. LAL","D. 1973 NYK vs. LAL"],answer:"A",explanation:"The 1994 NBA Finals saw the Knicks host the Houston Rockets at MSG in a series that went to Game 7 — the most recent Finals elimination-game atmosphere at Madison Square Garden before the 2026 series.",difficulty:"hard"}]};