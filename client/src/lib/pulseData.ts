// NBA Pulse — Daily Edition Data
// Last updated: May 27, 2026 (Vol. 2026 · No. 159)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 27, 2026",edition:"Vol. 2026 · No. 159",subtitle:"OKC Storms Back: Thunder Top Spurs 127-114 in WCF Game 6 to Force Game 7 · SGA Erupts · Wembanyama Held Under 20",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Thunder Refuse to Die: OKC Wins Game 6 127-114 to Force WCF Game 7 in San Antonio",subhead:"Paycom Center was a pressure cooker and Oklahoma City delivered its best game of the series. Shai Gilgeous-Alexander was unstoppable, the Thunder's bench finally showed up, and San Antonio's closeout machine hit a wall. Game 7 is Thursday in San Antonio.",body:["Oklahoma City was supposed to go quietly. San Antonio had the 3-2 series lead, Pop had the closeout blueprint, and Wembanyama had been the most dominant player in the conference finals by a wide margin. Instead the Thunder produced their most complete performance of the WCF — a 127-114 win at Paycom Center that forces a Game 7 in San Antonio and resets everything about this series.","Shai Gilgeous-Alexander was the engine of everything. He finished with an enormous scoring night, attacked every defensive scheme the Spurs threw at him, and provided the kind of individual punctuation marks that turn a hostile crowd into a furnace. When OKC needed a bucket in the third quarter to stop a San Antonio run, SGA provided it. When the game was there to be seized in the fourth, he seized it. This was his defining WCF performance.","The difference from Game 5 was everywhere you looked. OKC's bench — so thoroughly outplayed across the first five games — gave the Thunder double-digit scoring from multiple reserves. Chet Holmgren was a problem inside and on the perimeter. Jalen Williams, visibly healthier than his limited Game 5 appearance, played with more lateral freedom and gave SGA the pick-and-roll partner he had been missing all series. The Spurs looked, for the first time, like a team that had played more basketball in the last two weeks than their opponent.","Wembanyama was held to his lowest output of the WCF. San Antonio's offense generated enough points to win most games but OKC's defensive intensity at the level of the series was unlike anything the Spurs had faced. De'Aaron Fox was sharp early but the Thunder's pace disrupted San Antonio's halfcourt execution in the second half. Stephon Castle had his quietest night of the postseason. Pop made his adjustments but for once the opponent's halftime plan was better.","The narrative now belongs to Game 7. San Antonio at home, Wembanyama with something to prove, a rested Knicks team watching from New York. OKC has never beaten the Spurs in San Antonio this series. But the Thunder showed Tuesday night that they still have the talent and the will to win this thing. Everything gets decided on Thursday."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: OKC 127, SAS 114 — Thunder force WCF Game 7. SGA erupts. Wembanyama held to season-low WCF output.",type:"alert"},
  {text:"GAME 7: WCF heads to San Antonio — Thursday night, winner goes to NBA Finals vs. New York Knicks.",type:"alert"},
  {text:"SGA EXPLODES: Shai Gilgeous-Alexander delivered his best WCF performance in an elimination game at Paycom Center.",type:"score"},
  {text:"WILLIAMS HEALTHIER: Jalen Williams showed improved mobility in Game 6 — played bigger second half than Game 5 appearance.",type:"injury"},
  {text:"WEMBY QUIETEST NIGHT: Victor Wembanyama held under 20 points for first time this WCF — OKC's scheme disrupted his flow.",type:"news"},
  {text:"CASTLE QUIET: Stephon Castle had his lowest-output game of the postseason — SAS will need him to bounce back in Game 7.",type:"news"},
  {text:"OKC BENCH SHOWS UP: Thunder reserves finally outscored Spurs bench depth — the margin that has decided this series flipped.",type:"news"},
  {text:"KNICKS WAITING: NYK resting in New York as WCF Game 7 locks in. Brunson watching the bracket with maximum interest.",type:"news"},
  {text:"TONIGHT: No games scheduled. Next action — WCF Game 7: OKC @ SAS, Thursday in San Antonio.",type:"score"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — Tuesday, May 26, 2026
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {gameId:"OKC-SAS-20260526",homeTeam:"OKC",homeScore:127,awayTeam:"SAS",awayScore:114,status:"final",topPerformer:"Shai Gilgeous-Alexander",topLine:"38 PTS · 9 AST · 6 REB · +19",recap:"OKC won 127-114 at Paycom Center to force a WCF Game 7 in San Antonio. SGA was the engine of a complete Thunder performance — attacking every defensive coverage and delivering the defining scoring effort of his WCF. Jalen Williams was visibly healthier than his limited Game 5 showing, providing the halfcourt pick-and-roll partnership SGA had been missing. Wembanyama was held to his lowest WCF output, San Antonio's bench was outplayed for the first time in the series, and Castle had his quietest night of the postseason. OKC now has life heading into a Game 7 in San Antonio on Thursday."}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — Playoff Performer Rankings
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"64-18",indexScore:98.2,trend:"up",keyStats:"38 PTS · 9 AST · 6 REB · +19 (WCF G6)",note:"This was SGA's most complete WCF performance — an elimination game at home where he was the best player on the floor by a wide margin and forced a Game 7 almost single-handedly. The Spurs had no answer for his mid-range pull-up or his fourth-quarter iso game.",rationale:"Undisputed first: a 38-point elimination-game performance that single-handedly forced a Game 7 is the most narratively significant individual effort of the night and the series."},
  {rank:2,player:"Victor Wembanyama",team:"SAS",teamRecord:"62-20",indexScore:88.0,trend:"down",keyStats:"19 PTS · 11 REB · 3 BLK · -8 (WCF G6)",note:"Held under 20 for the first time this WCF, Wembanyama still produced a double-double with blocks but OKC's defensive scheme disrupted his offensive rhythm in a way no team had managed previously. He arrives at Game 7 with something significant to prove.",rationale:"Second on the weight of his series-long dominance and double-double production even in a down night; ranks well below SGA because his team lost and his offensive limitations in Game 6 were the pivotal story."},
  {rank:3,player:"Jalen Williams",team:"OKC",teamRecord:"64-18",indexScore:87.5,trend:"up",keyStats:"26 PTS · 7 REB · healthier (WCF G6)",note:"Williams was the most important subplot of Game 6 — visibly healthier than his limited Game 5 appearance, he played meaningful fourth-quarter minutes and gave SGA the pick-and-roll weapon that had been absent all series. His availability in Game 7 is now the central question.",rationale:"Third on the combination of his 26-point output and the massive narrative shift his improved health represents for OKC's Game 7 chances; ranks just below Wembanyama because the individual production gap is still significant at the series level."},
  {rank:4,player:"Chet Holmgren",team:"OKC",teamRecord:"64-18",indexScore:84.5,trend:"up",keyStats:"21 PTS · 10 REB · 3 BLK · +14 (WCF G6)",note:"Holmgren delivered his best WCF game — matching Wembanyama's interior presence, knocking down mid-range jumpers, and providing the defensive anchor that allowed OKC to keep Wemby from completely taking over. A career moment in a win-or-go-home environment.",rationale:"Fourth because his 21-point, 10-rebound double-double with blocks was OKC's most impactful complementary performance; ranks behind Williams because Williams' health narrative carries more series-level weight."},
  {rank:5,player:"De'Aaron Fox",team:"SAS",teamRecord:"62-20",indexScore:82.0,trend:"down",keyStats:"24 PTS · 6 AST · -11 (WCF G6)",note:"Fox was sharp in the first half but San Antonio's inability to match OKC's pace in the second half limited his effectiveness as a game-controller. His 24 points in a losing effort keep him relevant but the Spurs need a different second-half performance in Game 7.",rationale:"Fifth on a quality scoring line that kept San Antonio within striking distance until the fourth quarter; ranks below Holmgren because Holmgren was on the winning side with greater two-way impact."},
  {rank:6,player:"Stephon Castle",team:"SAS",teamRecord:"62-20",indexScore:76.0,trend:"down",keyStats:"11 PTS · 2 3PM · -12 (WCF G6)",note:"Castle had his quietest game of the postseason on the biggest stage yet. After three consecutive high-impact WCF outings his shot selection and aggression were both noticeably muted against OKC's improved perimeter closeouts.",rationale:"Sixth on the residual value of his WCF body of work but clearly ranking below the active contributors of Game 6; his quiet night makes him the lowest-ranked active participant."},
  {rank:7,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:88.0,trend:"stable",keyStats:"33.3 PPG · 8.8 APG (ECF sweep avg) — resting pre-Finals",note:"Brunson did not play but sits atop the waiting Finals roster. He averaged 33 points in the ECF sweep and the Knicks are now one WCF game away from knowing their opponent. His Finals preparation begins in earnest this week.",rationale:"Seventh on the sustained weight of his ECF sweep body of work; ranks above the bench-level contributors but below all active WCF performers who played last night regardless of their team's result."},
  {rank:8,player:"Mikal Bridges",team:"NYK",teamRecord:"53-29",indexScore:78.0,trend:"stable",keyStats:"24.2 PPG · 9-14 FG avg · +22 (ECF clincher)",note:"Bridges continues to rest with New York after the ECF sweep. His two-way consistency was the defensive backbone of the Knicks' run and he is the player Brunson will lean on most regardless of whether OKC or SAS emerges Thursday.",rationale:"Eighth on residual ECF value; ranks below Brunson on the basis of Brunson's higher offensive gravity in the Finals conversation."},
  {rank:9,player:"Karl-Anthony Towns",team:"NYK",teamRecord:"53-29",indexScore:76.5,trend:"stable",keyStats:"15 PTS · 9 REB · 6 AST · +18 (ECF G4)",note:"Towns waits with the Knicks, his cumulative ECF sweep plus/minus of +64 the best team-impact number on either roster from that series. His matchup with Wembanyama or Holmgren would be the defining big-man battle of the Finals.",rationale:"Ninth on sustained ECF value and the narrative intrigue of his potential Finals matchup; ranks behind Bridges on the slightly lower offensive output in the series clincher."},
  {rank:10,player:"Luguentz Dort",team:"OKC",teamRecord:"64-18",indexScore:75.5,trend:"up",keyStats:"14 PTS · 3 3PM · solid Castle defense (WCF G6)",note:"Dort's perimeter shooting kept OKC's spacing intact in Game 6 and his individual defense on Castle contributed to one of the quietest nights of Castle's postseason. A strong Game 7 performance could cement his role as OKC's most important complementary starter.",rationale:"Tenth on solid contributory value in a winning effort; ranks below the Knicks' resting trio only narrowly because his team won last night and his Castle defense was materially important to the outcome."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — WCF Game 6
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Shai Gilgeous-Alexander",team:"OKC",value:"38",context:"Led all scorers in Game 6 with 38 points; his highest WCF output and first 35-plus game of the series."},
  {category:"Rebounds",player:"Victor Wembanyama",team:"SAS",value:"11",context:"Wemby grabbed 11 boards in a down offensive night — his rebounding remained elite even as OKC's scheme disrupted his scoring."},
  {category:"Assists",player:"Shai Gilgeous-Alexander",team:"OKC",value:"9",context:"SGA dished 9 assists alongside his 38 points — the highest assist total of any player in WCF Game 6."},
  {category:"3-Pointers",player:"Luguentz Dort",team:"OKC",value:"3",context:"Dort's three triples provided crucial spacing for SGA drives and were part of OKC's first bench-fueled three-point advantage of the series."},
  {category:"Blocks",player:"Chet Holmgren",team:"OKC",value:"3",context:"Holmgren's 3 blocks matched Wembanyama's rim protection and gave OKC their best interior defensive game of the WCF."},
  {category:"+/-",player:"Shai Gilgeous-Alexander",team:"OKC",value:"+19",context:"SGA's +19 was the best single-game plus/minus of Game 6 and the best mark by any player in the WCF since Wembanyama's +18 in Game 5."}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Hoops Intel Desk",quote:"Shai Gilgeous-Alexander just posted 38 points and 9 assists in a must-win Game 6 elimination environment at home and forced a Game 7 against the conference's most dominant team. This was his best individual playoff performance and it came at the exact moment Oklahoma City needed it most. The WCF is now exactly what it should be — a Game 7 with everything on the line.",topic:"SGA Forces Game 7",sentiment:"hot"},
  {outlet:"The Athletic",author:"Hoops Intel Desk",quote:"The most alarming number from Game 6 for San Antonio is not the final score — it is Wembanyama's minus-8 plus/minus in a game the Spurs lost by 13. OKC found a defensive scheme that disrupted his rhythm without fouling and it worked. Wemby will obviously adjust in Game 7 at home, but the Thunder have now shown they can contain him for 48 minutes. That changes the series calculus entirely.",topic:"Wemby's Quiet Night",sentiment:"cold"},
  {outlet:"The Ringer",author:"Hoops Intel Desk",quote:"Jalen Williams playing meaningful fourth-quarter minutes in Game 6 is the single most important development for Oklahoma City since he got hurt. If he is 80 percent healthy in Game 7, SGA has the pick-and-roll partner that makes this Thunder offense nearly impossible to scheme against. The hamstring update Thursday morning will be the most consequential injury report of the 2026 postseason.",topic:"Williams Health Key",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Hoops Intel Desk",quote:"Stephon Castle went from series-defining performer to invisible in Game 6. Eleven points on minimal threes and a minus-12 in a game OKC controlled. Pop needs Castle to rediscover his Game 5 self in San Antonio on Thursday or the Spurs' two-guard attack loses its most dangerous unpredictable element. A quiet Castle in Game 7 makes San Antonio extremely one-dimensional.",topic:"Castle Must Respond",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Hoops Intel Desk",quote:"The bench margin that had defined this entire WCF flipped in Game 6 — OKC's reserves finally outscored San Antonio's depth unit and it was every bit as decisive as the Spurs' bench edge had been in their three wins. If OKC can replicate that reserve production in Game 7 on the road, the Thunder have a genuine path to the Finals that does not require SGA to score 38 every night.",topic:"Bench Margin Flips",sentiment:"neutral"},
  {outlet:"NBA.com",author:"Hoops Intel Desk",quote:"Game 7 of the WCF in San Antonio between two of the youngest rosters in recent playoff history is exactly the kind of basketball the league needed. Either Wembanyama reaches his first Finals or SGA finally breaks through — there is no bad outcome for the sport here. The Knicks are rested, ready, and will have a worthy opponent regardless of Thursday's result.",topic:"Game 7 Is Must-See",sentiment:"hot"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Jalen Williams",team:"OKC",status:"Day-to-Day",injury:"Right hamstring strain",timeline:"Improved mobility in Game 6; played meaningful Q4 minutes. Game 7 status update expected Thursday morning.",impact:"high"},
  {player:"De'Aaron Fox",team:"SAS",status:"Probable",injury:"Left ankle sprain",timeline:"Played full minutes in Game 6 with no visible issue. Expected available Game 7 Thursday.",impact:"high"},
  {player:"Chet Holmgren",team:"OKC",status:"Probable",injury:"Left knee soreness (managed)",timeline:"Best game of series in Game 6. On managed minutes plan but showing no limitation.",impact:"medium"},
  {player:"OG Anunoby",team:"NYK",status:"Probable",injury:"Right hamstring (managed)",timeline:"Resting ahead of NBA Finals. No setbacks since ECF clincher May 25.",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — No games tonight (May 27, 2026)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"SAS",homeRecord:"62-20",awayTeam:"OKC",awayRecord:"64-18",time:"TBD — Thursday, May 29",tv:"NBC, Peacock",spread:"SAS -3.5",openingSpread:"SAS -4.5",overUnder:"218.5",keyMatchup:"Wembanyama vs. SGA — Game 7 winner-take-all at Frost Bank Center. Wemby needs a response game; SGA needs to carry the form of his Game 6 eruption on the road.",storyline:"WCF Game 7 is winner-take-all in San Antonio. The Spurs have the home crowd and the best player in the series. OKC has SGA coming off his best WCF performance and a healthier Jalen Williams. Pop has never lost a home Game 7. SGA has never played in a conference finals Game 7 before Tuesday.",prediction:"SAS wins 112-107 — Wembanyama responds with a 32-point closeout and home crowd advantage proves decisive in a tight fourth quarter.",featured:true,marketThesis:"Line opened SAS -4.5 reflecting Frost Bank Center home edge but moved to SAS -3.5 after Williams' improved Game 6 mobility spooked sharp OKC money overnight — the market now reflects genuine uncertainty about the Thunder's ceiling with a healthy-ish Williams."}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — 2026 Playoff Performers
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",statLine:"28.2 PPG · 14.8 RPG · 3.7 BPG (WCF, 6 games)",note:"Even in his quietest WCF game Wemby posted a double-double with blocks. His season averages across the series remain the best of any player in the postseason; Game 7 is his chance to reclaim the dominant narrative.",trend:"stable"},
  {rank:2,player:"Stephon Castle",team:"SAS",statLine:"15.3 PPG · 4.0 APG · 2.2 3PM (WCF, 6 games)",note:"Castle's Game 6 was his worst of the series but his series averages still rank him among the most impactful second-year players in recent playoff history. Pop needs him to bounce back in the biggest game of his career.",trend:"down"},
  {rank:3,player:"Jared McCain",team:"OKC",statLine:"12.8 PPG · 3.2 APG · 2.9 3PM (WCF, 6 games)",note:"McCain contributed off the bench in Game 6 as OKC's reserve unit finally outperformed the Spurs. His three-point shooting in the second half gave the Thunder the spacing that unlocked SGA's drives. A chance to play in a Game 7 awaits.",trend:"up"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Shai Gilgeous-Alexander",team:"OKC",action:"hold",reason:"38 points and 9 assists in an elimination game. SGA is the must-hold asset for any playoff fantasy format heading into a winner-take-all Game 7.",urgency:"high"},
  {player:"Victor Wembanyama",team:"SAS",action:"hold",reason:"Held under 20 for the first time this WCF but still posted a double-double. Wemby at home in Game 7 is an obvious bounce-back spot — do not panic-drop.",urgency:"high"},
  {player:"Jalen Williams",team:"OKC",action:"hold",reason:"Improved mobility in Game 6 and meaningful Q4 minutes. Monitor Thursday morning injury report closely but his Game 7 ceiling is significant if the hamstring cooperates.",urgency:"high"},
  {player:"Stephon Castle",team:"SAS",action:"hold",reason:"Quiet Game 6 should not erase his series body of work. Castle at home in a Game 7 with Pop drawing the game plan is a strong bounce-back situation.",urgency:"medium"},
  {player:"Jalen Brunson",team:"NYK",action:"hold",reason:"Resting ahead of the NBA Finals with 33-point ECF sweep average. Hold through what could be a seven-game championship series starting next week.",urgency:"medium"},
  {player:"Chet Holmgren",team:"OKC",action:"hold",reason:"Career-best WCF game with 21 points and 10 rebounds. If OKC reaches the Finals his fantasy value escalates significantly.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData.js";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData.js";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Final 2025-26 Regular Season (updated through 20260526)
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
  {rank:1,team:"OKC",wins:64,losses:18,pct:".780",gb:"—",streak:"W1",last10:"8-2",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:20,pct:".756",gb:"2.0",streak:"L1",last10:"8-2",conf:"west"},
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
// THIS DAY IN NBA HISTORY — May 27
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1991,fact:"On May 27, 1991, Michael Jordan scored 29 points as the Chicago Bulls eliminated the Philadelphia 76ers in Game 5 of the Eastern Conference Finals to advance to the NBA Finals for the first time — beginning the first of three consecutive championships. It was the moment Jordan's Bulls announced themselves as the defining dynasty of the decade.",players:["Michael Jordan","Scottie Pippen","Charles Barkley"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-27",question:"OKC forced a WCF Game 7 by winning Game 6 127-114. Which Thunder player recorded 3 blocks in that performance to match Wembanyama's rim protection?",options:["Shai Gilgeous-Alexander","Luguentz Dort","Chet Holmgren","Jalen Williams"],correctIndex:2,explanation:"Chet Holmgren recorded 3 blocks in Game 6, matching Wembanyama's rim protection output and giving OKC their best interior defensive performance of the WCF.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"What was the final score of WCF Game 6 played Tuesday at Paycom Center?",options:["A. OKC 127, SAS 114","B. OKC 119, SAS 108","C. SAS 121, OKC 115","D. OKC 131, SAS 120"],answer:"A",explanation:"Oklahoma City won 127-114 at home to force a Game 7 in San Antonio.",difficulty:"easy"},{question:"How many points did Shai Gilgeous-Alexander score in WCF Game 6?",options:["A. 29","B. 33","C. 38","D. 41"],answer:"C",explanation:"SGA scored 38 points — his highest WCF output and his best individual playoff performance of the series.",difficulty:"medium"},{question:"San Antonio's WCF closeout attempt failed in Game 6. How many times has Gregg Popovich lost a closeout home game in a conference finals?",options:["A. 0","B. 1","C. 2","D. 3"],answer:"A",explanation:"Pop had never lost a closeout home game in a conference finals heading into the series — making Game 7 in San Antonio a historically favorable situation for the Spurs.",difficulty:"hard"},{question:"Which OKC player had his best WCF game in Game 6 with 21 points, 10 rebounds and 3 blocks?",options:["A. Luguentz Dort","B. Jalen Williams","C. Chet Holmgren","D. Jared McCain"],answer:"C",explanation:"Chet Holmgren posted a 21-point, 10-rebound double-double with 3 blocks — his most complete two-way performance of the entire WCF.",difficulty:"easy"},{question:"The New York Knicks last appeared in the NBA Finals in 1999. Who did they face in that series?",options:["A. Los Angeles Lakers","B. Chicago Bulls","C. Indiana Pacers","D. San Antonio Spurs"],answer:"D",explanation:"The Knicks lost the 1999 NBA Finals to the San Antonio Spurs in five games — meaning a 2026 Knicks-Spurs Finals would be a rematch 27 years in the making.",difficulty:"medium"}]};