// NBA Pulse — Daily Edition Data
// Last updated: May 15, 2026 (Vol. 2026 · No. 141)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"May 15, 2026",edition:"Vol. 2026 · No. 141",subtitle:"Elimination Friday: DET and MIN Both Face Season's End Tonight · Conference Finals One Win Away in Both Brackets · SGA vs. Wembanyama West Finals Dream One Game Closer",editionContext:"playoffs"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Elimination Friday — Two Seasons Die Tonight",subhead:"Detroit and Minnesota both face win-or-go-home games as Cleveland and San Antonio can punch their Conference Finals tickets on the same night. Two games. Two potential eliminations. Both on Prime Video.",body:["Friday night is the most consequential evening of the 2026 NBA Playoffs so far. Two games. Two elimination scenarios. Two Conference Finals berths on the line. At 7 PM Eastern in Cleveland, the fourth-seeded Cavaliers host the top-seeded Pistons with a 3-2 series lead. James Harden's vintage 30-point overtime masterpiece in Game 5 flipped the series — Cleveland has won three straight after falling behind 0-2 — and the Cavaliers are unbeaten at Rocket Mortgage FieldHouse in this series with double-digit victories in Games 3 and 4. If they close it out, it's the 4-seed over the 1-seed. If Detroit survives, Game 7 returns to Little Caesars Arena on Sunday.","At 9:30 PM Eastern in Minneapolis, the second-seeded Spurs bring a 3-2 lead into Target Center against a Timberwolves team that has been outscored by 67 points in their three losses. Victor Wembanyama's 27-point, 17-rebound, 3-block redemption game in the Game 5 blowout (126-97) after his ejection in Game 4 was as definitive a response as any 21-year-old has ever delivered in the playoffs. Anthony Edwards must channel his best to keep Minnesota alive, but he'll do so without Donte DiVincenzo (torn Achilles) and with a hyperextended knee of his own. San Antonio is a 5-point road favorite — the market says this is over.","The stakes extend beyond these two series. If both favorites close out tonight, the Conference Finals matchups are set: New York Knicks versus Cleveland Cavaliers in the East, Oklahoma City Thunder versus San Antonio Spurs in the West. That Western Conference Finals — SGA versus Wembanyama, the reigning MVP versus the reigning Defensive Player of the Year, the defending champions versus the team that hasn't been here since 2017 — is the matchup the entire basketball world has been waiting for. OKC is a perfect 8-0. San Antonio needs one more win to make it real.","On this date in 1984, Magic Johnson dished a playoff-record 24 assists as the Lakers beat Phoenix 118-102 in Game 2 of the Western Conference Finals. Forty-two years later, Friday night could produce its own Conference Finals moments — or it could set the stage for a Game 7 Sunday. Either way, the 2026 playoffs are about to lose two more teams, and the road to the Finals narrows to its final four."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"ELIMINATION FRIDAY: Both Detroit and Minnesota face season-ending games tonight — Conference Finals at stake",type:"alert"},
  {text:"DET @ CLE GAME 6: 7:00 PM EDT on Prime Video — Cavaliers lead 3-2, can clinch East Finals",type:"alert"},
  {text:"SAS @ MIN GAME 6: 9:30 PM EDT on Prime Video — Spurs lead 3-2, can clinch West Finals",type:"alert"},
  {text:"CLE ROLLING: Cavaliers have won 3 straight after trailing 0-2 — unbeaten at home this series",type:"score"},
  {text:"WEMBY DOMINANT: 27 PTS, 17 REB, 3 BLK in Game 5 — bounced back from ejection with a masterpiece",type:"score"},
  {text:"HARDEN SURGE: Playoff-best 30/8/6/3BLK in Game 5 OT win — driving CLE's comeback from 0-2",type:"score"},
  {text:"CADE'S 39 NOT ENOUGH: Cunningham's 39/7/9 in G5 loss was the best losing line of the 2026 playoffs",type:"score"},
  {text:"ANT MUST RESPOND: Edwards held to 20 in Game 5 blowout — needs a legacy game to survive tonight",type:"news"},
  {text:"OKC WATCHING: Thunder perfect 8-0, awaiting West Finals opponent — Jalen Williams (hamstring) still out",type:"injury"},
  {text:"NYK READY: Knicks fully rested after PHI sweep, East Finals opponent to be determined tonight",type:"news"},
  {text:"DREAM WCF: If SAS closes out, it's SGA vs. Wembanyama — reigning MVP vs. DPOY for the West crown",type:"news"},
  {text:"LINE CHECK: CLE -4.5, SAS -5.0 — both home/road favorites expected to close out tonight",type:"news"},
  {text:"INJURY: Donte DiVincenzo (MIN) — Out for postseason, torn Achilles. Wolves without key wing tonight",type:"injury"},
  {text:"INJURY: Jalen Williams (OKC) — Out, hamstring. Thunder went 8-0 without their No. 2 scorer",type:"injury"},
  {text:"DRAFT LOTTERY: Washington Wizards won the No. 1 pick — Jazz, Grizzlies, Bulls rounded out the top 4",type:"news"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — No Games May 14, 2026 (Off Day)
// ═══════════════════════════════════════════════════════════

export const gameResults = [] as {homeTeam:string;homeScore:number;awayTeam:string;awayScore:number;status:string;topPerformer:string;topLine:string;recap:string;gameId:string}[];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX — Playoff Performer Rankings
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"64-18",indexScore:98.5,trend:"stable",keyStats:"30.1 PPG · 6.5 APG · 6.2 RPG (8-0)",note:"A perfect 8-0 with two sweeps — and he did it without Jalen Williams. Resting and waiting for the West Finals. The Playoff MVP conversation starts and ends with SGA until someone proves otherwise.",rationale:"An unblemished 8-0 record with two sweeps — the defending champion's star is the clear Playoff MVP frontrunner."},
  {rank:2,player:"Donovan Mitchell",team:"CLE",teamRecord:"52-30",indexScore:96.1,trend:"stable",keyStats:"30.4 PPG in East Semis · 3-2 series lead",note:"Averaging 30-plus in the series with a record-tying 43-point Game 4 that flipped the momentum. One win away from the East Finals. Can close it out at home tonight.",rationale:"Mitchell's sustained scoring dominance across the series — including a 43-point game that changed everything — keeps him at No. 2."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",teamRecord:"62-20",indexScore:95.8,trend:"stable",keyStats:"25.2 PPG · 12.4 RPG · 3.4 BPG",note:"Answered his first career ejection with a 27/17/3BLK masterpiece in a 29-point rout. Can clinch his first Conference Finals at 21 years old tonight in Minnesota.",rationale:"Wembanyama's dominant two-way presence across the series makes him the most impactful player in the West. One win from the WCF."},
  {rank:4,player:"James Harden",team:"CLE",teamRecord:"52-30",indexScore:93.4,trend:"up",keyStats:"30 PTS · 8 REB · 6 AST · 3 BLK in G5 OT win",note:"Playoff-best 30 points with 11-14 FT, 3 blocks, and the late-game aggression that fueled Cleveland's 9-point comeback. At 36, Harden just delivered the best individual game of the East Semis.",rationale:"Harden's Game 5 was the most impactful individual performance of the East Semis — his foul-drawing in crunch time was the engine of the comeback."},
  {rank:5,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:87.5,trend:"stable",keyStats:"27.8 PPG · 6.3 APG · 4-0 sweep",note:"Resting after the most dominant sweep of the 2026 playoffs. Extended rest and preparation time against either Detroit or Cleveland gives the Knicks a significant edge heading into the East Finals.",rationale:"Brunson's sweep dominance and extended rest maintain his top-5 ranking. He'll be the freshest star entering the Conference Finals."},
  {rank:6,player:"Evan Mobley",team:"CLE",teamRecord:"52-30",indexScore:86.8,trend:"up",keyStats:"19 PTS · 8 REB · 8 AST · 3 BLK in G5",note:"Near triple-double in the OT win following a 5-block Game 4. Mobley's two-way excellence is the engine of Cleveland's defensive identity — a potential series-clincher awaits tonight.",rationale:"Mobley's two-way impact over Games 4 and 5 makes him the best non-scorer in the playoffs — Cleveland's defense anchors every win."},
  {rank:7,player:"Cade Cunningham",team:"DET",teamRecord:"60-22",indexScore:84.7,trend:"up",keyStats:"39 PTS · 7 REB · 9 AST · 6-10 3PT in G5 loss",note:"The 39-point, 9-assist Game 5 was the best individual game by a losing player this postseason. Cunningham has been magnificent — and he needs one more masterpiece tonight to keep Detroit alive.",rationale:"Cunningham's elite individual brilliance raises his ranking even in defeat. If DET survives, it's because of Cade."},
  {rank:8,player:"Anthony Edwards",team:"MIN",teamRecord:"49-33",indexScore:85.2,trend:"down",keyStats:"28.0 PPG through playoffs · facing elimination",note:"Held to 20 in the Game 5 blowout. Minnesota's season is on the line tonight at Target Center. Edwards' best playoff moments have come with his back against the wall — he needs that version tonight.",rationale:"Edwards drops after a quiet Game 5 but his ceiling in elimination games is top-3. Tonight is do-or-die."},
  {rank:9,player:"Ajay Mitchell",team:"OKC",teamRecord:"64-18",indexScore:83.4,trend:"stable",keyStats:"20.5 PPG · 5.2 APG off bench (8-0)",note:"The undrafted rookie averaged 20-plus off the bench during OKC's historic 8-0 run. Stepped into the starting lineup when Jalen Williams went down and never missed a beat. Resting for the West Finals.",rationale:"Ajay Mitchell's unprecedented bench production filled the Jalen Williams void and helped power an 8-0 run."},
  {rank:10,player:"Max Strus",team:"CLE",teamRecord:"52-30",indexScore:81.6,trend:"up",keyStats:"20 PTS · 8 REB · 6-8 3PT (75%) in G5",note:"6-of-8 from three in the overtime win — the most efficient shooting performance of the 2026 playoffs from range. The X-factor in Cleveland's 3-1 run after falling behind 0-2.",rationale:"Strus's scorching 75% from three in Game 5 earns the 10-spot. He may be the difference between CLE celebrating tonight or playing a Game 7."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — 2026 Conference Semifinals
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Donovan Mitchell",team:"CLE",value:"30.4 PPG",context:"Averaging 30.4 PPG in the East Semis including a record-tying 43-point Game 4 (39 in the second half). Can close out Detroit tonight."},
  {category:"Rebounds",player:"Victor Wembanyama",team:"SAS",value:"12.4 RPG",context:"Averaging 12.4 RPG in the West Semis with a 17-rebound Game 5 masterpiece. The most dominant rebounder in the 2026 playoffs."},
  {category:"Assists",player:"Cade Cunningham",team:"DET",value:"9.2 APG",context:"Averaging 9.2 assists in the East Semis while carrying the offensive load. His 9-assist Game 5 came with 39 points — doing everything possible to keep Detroit alive."},
  {category:"3-Pointers",player:"Max Strus",team:"CLE",value:"6 (G5)",context:"6-of-8 from three (75%) in the Game 5 OT win — the most efficient three-point shooting game of the 2026 playoffs. CLE's microwave scorer."},
  {category:"Blocks",player:"Victor Wembanyama",team:"SAS",value:"3.4 BPG",context:"Averaging 3.4 blocks per game in the West Semis with a series-high 5 blocks in the Game 3 win. The ultimate rim protector."},
  {category:"+/-",player:"Shai Gilgeous-Alexander",team:"OKC",value:"+15.2",context:"Best average plus-minus in the 2026 playoffs — OKC outscored opponents by over 15 per game with SGA on the floor during their 8-0 run."}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {source:"Shams Charania, ESPN",quote:"The Cavaliers' transformation from 0-2 to 3-2 has been driven almost entirely by James Harden's decision to stop deferring and start attacking. His Game 5 was the most aggressive he's been since Houston — 11-of-14 from the line, 3 blocks, and the kind of foul-drawing that used to make him the most unstoppable scorer in basketball. Cleveland is one win from the East Finals because Harden remembered who he is.",sentiment:"positive"},
  {source:"Zach Lowe, ESPN",quote:"The fascinating tactical wrinkle in Game 6 is this: Detroit's defense was built around help-side rotations that funnel drivers into Ausar Thompson's orbit. Cleveland cracked that in Games 3-5 by going small and spacing the floor with Strus. Now Detroit has to decide — do they switch everything and give Harden one-on-one matchups, or do they keep helping and watch Strus rain threes? Neither option is great when you're facing elimination on the road.",sentiment:"neutral"},
  {source:"Bill Simmons, The Ringer",quote:"If San Antonio closes this out tonight, we get SGA vs. Wemby in the West Finals. THE REIGNING MVP VERSUS THE REIGNING DPOY! The defending champs versus the franchise that hasn't been here since Kawhi left! This is the matchup that could define the next decade of basketball and it's ONE WIN AWAY. I don't care about anything else happening in the sports world tonight.",sentiment:"positive"},
  {source:"Sam Amick, The Athletic",quote:"There's something poetic about Cade Cunningham's playoff run — 39 points in a loss, the best performance by a losing player this postseason, and yet Detroit still needs him to produce another miracle on the road in an arena where Cleveland has won every game by double digits. The 1-seed came back from 3-1 against Orlando. Can they come back from 2-3 against Cleveland? Cunningham believes they can. The numbers suggest they can't.",sentiment:"neutral"},
  {source:"Chris Broussard, CBS Sports",quote:"Anthony Edwards needs the kind of night that makes people say 'I remember where I was when Ant saved Minnesota's season.' Thirty-five, forty points. Attack the rim. Get Wemby in foul trouble. Because if Edwards gives you another 20-point whisper like Game 5, the Wolves are going home and we're talking about what went wrong all summer.",sentiment:"neutral"},
  {source:"Kevin Pelton, ESPN",quote:"Oklahoma City's 8-0 run without Jalen Williams might be the most impressive feat of these playoffs. Williams was averaging 20 points per game in the regular season — he's their second-best player — and the Thunder didn't drop a single game. The depth Presti built, with Ajay Mitchell stepping in to average 20-plus off the bench, makes OKC the prohibitive Finals favorite regardless of who they face in the West Finals.",sentiment:"positive"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Jalen Williams",team:"OKC",status:"Out",injury:"Hamstring strain",timeline:"Out since May 3. OKC went 8-0 without him, sweeping both PHX and LAL. Status for West Finals TBD — Thunder have not provided a return timeline.",impact:"high"},
  {player:"Donte DiVincenzo",team:"MIN",status:"Out",injury:"Torn right Achilles tendon",timeline:"Out for remainder of 2026 postseason. Minnesota faces elimination tonight without their key wing defender and floor spacer.",impact:"high"},
  {player:"Anthony Edwards",team:"MIN",status:"Probable",injury:"Hyperextended left knee",timeline:"Playing through it since the first round. Scored 20 in Game 5. Expected to play tonight's elimination Game 6 with no restrictions.",impact:"high"},
  {player:"OG Anunoby",team:"NYK",status:"Questionable",injury:"Undisclosed",timeline:"Missed the entire PHI sweep. East Finals status TBD — Knicks dominated without him but his wing defense would be crucial against CLE or DET.",impact:"medium"},
  {player:"Luka Doncic",team:"LAL",status:"Out",injury:"Hamstring strain",timeline:"Season over. Hobbled through the Houston series before the Lakers were swept by OKC. Offseason recovery ahead.",impact:"high"},
  {player:"James Harden",team:"CLE",status:"Probable",injury:"Load management",timeline:"Delivered playoff-best 30 in 43 minutes of Game 5 OT. Expected to play the potential clincher tonight with full workload.",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Friday, May 15, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"CLE",homeRecord:"52-30",awayTeam:"DET",awayRecord:"60-22",time:"7:00 PM EDT",tv:"Prime Video",spread:"CLE -4.5",overUnder:"209.5",keyMatchup:"Cunningham vs. Cleveland's switching defense — after Cade's 39-point Game 5, the Cavaliers must decide whether to sell out on him and dare Detroit's supporting cast to beat them. Tobias Harris shot 6-of-19 in Game 5 and the Pistons' role players went 22-of-57 around Cunningham. Can they find help scoring on the road?",storyline:"The 1-seed is on the brink. Detroit rallied from 3-1 down against Orlando in the first round — but surviving twice would require a road win at Cleveland, where the Cavaliers have won every home game by double digits. Harden's 30-point overtime eruption flipped the series' momentum entirely. Cleveland has won three straight, outscoring Detroit by a combined 22 points in Games 3, 4, and 5. The Cavaliers can clinch the East Finals and a date with the New York Knicks. A loss sends this back to Little Caesars Arena for Game 7 on Sunday.",prediction:"CLE wins 108-97 — Home-court dominance continues. Harden and Mitchell combine for 55 as the Cavaliers close it out. Cunningham scores 30-plus but Detroit's supporting cast can't keep up on the road.",featured:true},
  {homeTeam:"MIN",homeRecord:"49-33",awayTeam:"SAS",awayRecord:"62-20",time:"9:30 PM EDT",tv:"Prime Video",spread:"SAS -5.0",overUnder:"218.5",keyMatchup:"Edwards vs. Wembanyama — the generational duel reaches its crescendo. Edwards was held to 20 in the Game 5 blowout but has historically elevated in elimination scenarios. Wembanyama's 27/17/3BLK Game 5 was the series' most complete performance. Without DiVincenzo, Minnesota lacks the secondary scoring and wing defense to support Edwards.",storyline:"Minnesota is playing for survival. The Timberwolves have been outscored by 67 points in their three losses this series, including the 29-point Game 5 demolition. Edwards needs a 35-to-40-point eruption to drag this to a Game 7 — and he'll need help from Julius Randle and Jaden McDaniels to match San Antonio's depth. The Spurs can close this on the road and set up the dream West Finals: SGA vs. Wembanyama, OKC vs. SAS, defending champs vs. the Alamo City's new dynasty.",prediction:"SAS wins 114-108 — Wembanyama clinches it with 24 and 13 as Edwards scores 34 in a valiant effort. San Antonio advances to face OKC in the West Finals.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Playoff Rookies Still Active
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Dylan Harper",team:"SAS",statLine:"14.8 PPG · 6.2 RPG · 3.9 APG",note:"The 12-point, 10-rebound double-double in the Game 5 rout showed his growing comfort on the playoff stage. After the 24-point eruption when Wemby was ejected in Game 4, Harper has proven he's ready. Can help clinch the West Finals tonight.",trend:"up"},
  {rank:2,player:"Ajay Mitchell",team:"OKC",statLine:"20.5 PPG · 5.2 APG · 3.4 SPG off bench",note:"The most productive undrafted rookie in playoff history. Averaged 20-plus in OKC's 8-0 run, stepping up when Jalen Williams went down. Resting and ready for the West Finals.",trend:"stable"},
  {rank:3,player:"Matas Buzelis",team:"SAS",statLine:"11.4 PPG · 4.8 RPG · 1.8 BPG",note:"Switchable wing who's been tasked with guarding Edwards in stretches. His energy, length, and shot-blocking complement Wembanyama's rim protection perfectly in the SAS-MIN series.",trend:"stable"},
  {rank:4,player:"Ausar Thompson",team:"DET",statLine:"6 PTS · 7 REB · 5 AST · 4 STL · 3 BLK in G5",note:"Game 5 was a defensive masterclass — 4 steals and 3 blocks in an OT loss. If Detroit survives tonight's elimination game, Thompson's defense on Mitchell and Harden will be the primary reason.",trend:"up"},
  {rank:5,player:"Cason Wallace",team:"OKC",statLine:"10.2 PPG · 3.7 APG · 2.1 SPG",note:"Defensive pest in OKC's perfect 8-0 run. His on-ball pressure and IQ are ahead of schedule for a second-year player. Resting for the West Finals alongside Ajay Mitchell.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"James Harden",team:"CLE",action:"add",reason:"Playoff-best 30/8/6/3BLK in the OT win has Harden locked in. Playing the potential series-clincher at home with massive motivation. Start with confidence in all formats.",urgency:"high"},
  {player:"Donovan Mitchell",team:"CLE",action:"add",reason:"Averaging 30.4 PPG in the series and playing for the East Finals tonight at home. A 40-point clincher is well within range. Set-and-forget top-5 option.",urgency:"high"},
  {player:"Victor Wembanyama",team:"SAS",action:"add",reason:"27/17/3BLK in Game 5 and can clinch the West Finals tonight. Even on the road, Wemby is the most dominant two-way fantasy asset in the playoffs. Elite in every category.",urgency:"high"},
  {player:"Cade Cunningham",team:"DET",action:"hold",reason:"39/7/9 with 6 threes in Game 5 — elite ceiling even in defeat. Facing elimination tonight but Cunningham will go down swinging. Expect another massive stat line regardless of outcome.",urgency:"high"},
  {player:"Anthony Edwards",team:"MIN",action:"hold",reason:"Quiet 20 in Game 5 blowout, but elimination games are where Edwards lives. His best performances have come with his back against the wall. High-ceiling desperation play tonight.",urgency:"medium"},
  {player:"Max Strus",team:"CLE",action:"stream",reason:"6-of-8 from three in Game 5 makes him the hottest shooter in the playoffs. A must-stream for the potential clincher — CLE will need his spacing to close out Detroit.",urgency:"high"},
  {player:"Dylan Harper",team:"SAS",action:"stream",reason:"Double-double in Game 5 and 24-point Game 4 — the rookie has arrived on the playoff stage. Solid stream in a potential series-clinching game tonight.",urgency:"medium"},
  {player:"Evan Mobley",team:"CLE",action:"add",reason:"Near triple-double (19/8/8/3BLK) in Game 5 after a 5-block Game 4. Elite two-way production in a clinch scenario. Top-tier defensive stats make him a multi-category monster.",urgency:"high"}
];

// ═══════════════════════════════════════════════════════════
// PLAYOFF SERIES + MOVERS — canonical copy lives in ./playoffData (ESPN sync)
// ═══════════════════════════════════════════════════════════

export { playoffSeries, playoffMovers } from "./playoffData";
/** @deprecated Use `playoffMovers` from `./playoffData`; kept for legacy barrel imports */
export { playoffMovers as playoffPulseMovers } from "./playoffData";

// ═══════════════════════════════════════════════════════════
// STANDINGS — Final 2025-26 Regular Season
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"L1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"L4",last10:"4-6",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"W10",last10:"10-0",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"W1",last10:"6-4",conf:"east"},
  {rank:5,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L4",last10:"2-8",conf:"east"},
  {rank:6,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L1",last10:"8-2",conf:"east"},
  {rank:7,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L6",last10:"4-6",conf:"east"},
  {rank:8,team:"ORL",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"5-5",conf:"east"},
  {rank:9,team:"CHA",wins:44,losses:38,pct:".537",gb:"16.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:10,team:"MIA",wins:43,losses:39,pct:".524",gb:"17.0",streak:"L3",last10:"4-6",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:64,losses:18,pct:".780",gb:"—",streak:"W11",last10:"10-0",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:20,pct:".756",gb:"2.0",streak:"W1",last10:"8-2",conf:"west"},
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
// THIS DAY IN NBA HISTORY — May 15
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1984,fact:"On May 15, 1984, Magic Johnson dished a playoff-record 24 assists as the Los Angeles Lakers beat the Phoenix Suns 118-102 in Game 2 of the Western Conference Finals. The record stood for four years until John Stockton matched it against the Lakers on May 17, 1988. The Lakers went on to win the 1984 Western Conference Finals and advanced to face the Boston Celtics in one of the most iconic Finals in NBA history — a seven-game classic won by Boston.",players:["Magic Johnson","John Stockton"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-05-15",question:"Which team came back from a 3-1 first-round deficit AND saw their opponent also come back from 3-1 in the same round — the first time both happened in a single year?",options:["Detroit Pistons","Philadelphia 76ers","Cleveland Cavaliers","Orlando Magic"],correctIndex:0,explanation:"The Detroit Pistons rallied from 3-1 down to beat the Orlando Magic 4-3, while the Philadelphia 76ers also came back from 3-1 down to beat the Boston Celtics — marking the first time in NBA history two teams overcame 3-1 deficits in the same playoff round.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"What is Oklahoma City's record in the 2026 NBA Playoffs entering the Conference Finals?",options:["A. 6-0","B. 7-1","C. 8-0","D. 8-2"],answer:"C",explanation:"The Thunder are a perfect 8-0, sweeping both the Phoenix Suns (4-0) in the first round and the Los Angeles Lakers (4-0) in the second round — all without injured star Jalen Williams.",difficulty:"easy"},{question:"How many points did Cade Cunningham score in Detroit's Game 5 overtime loss to Cleveland?",options:["A. 31","B. 35","C. 39","D. 43"],answer:"C",explanation:"Cunningham scored 39 points on 13-of-27 shooting with 6 threes, 7 rebounds, and 9 assists in 48 minutes — the best individual performance by a losing player in the 2026 playoffs.",difficulty:"medium"},{question:"Which Cleveland player shot 6-of-8 from three-point range in the Game 5 OT win over Detroit?",options:["A. Donovan Mitchell","B. James Harden","C. Jarrett Allen","D. Max Strus"],answer:"D",explanation:"Max Strus was 6-of-8 from three (75%) for 20 points, providing the outside shooting that stretched Detroit's defense and fueled Cleveland's 9-point comeback.",difficulty:"medium"},{question:"What was the score of San Antonio's Game 5 blowout over Minnesota?",options:["A. 118-102","B. 122-105","C. 126-97","D. 131-108"],answer:"C",explanation:"The Spurs routed the Timberwolves 126-97 behind Wembanyama's 27/17/3BLK masterpiece — a 29-point margin that gave SAS a 3-2 series lead.",difficulty:"hard"},{question:"On this date in 1984, who set the NBA playoff record with 24 assists in a Conference Finals game?",options:["A. Larry Bird","B. Isiah Thomas","C. Magic Johnson","D. John Stockton"],answer:"C",explanation:"Magic Johnson dished a playoff-record 24 assists as the Lakers beat the Phoenix Suns 118-102 in Game 2 of the 1984 Western Conference Finals. John Stockton tied the record four years later.",difficulty:"medium"}]};
