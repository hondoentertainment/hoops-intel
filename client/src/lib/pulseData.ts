// NBA Pulse — Daily Edition Data
// Last updated: April 21, 2026 (Vol. 2026 · No. 115)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"April 21, 2026",edition:"Vol. 2026 · No. 115",subtitle:"Hawks Stun Knicks at MSG Behind Young's Ice-Cold Clutch Three · Timberwolves End Nuggets' Historic 13-Game Streak in Denver · Cavaliers Dominate Raptors as Playoff Race Intensifies"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE DAY
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Road Warriors Steal the Show as Playoff Positioning Takes Dramatic Turn in Sunday's Triple-Header",subhead:"Sunday night delivered three games that perfectly captured the intensity and unpredictability of late-season NBA basketball, with two stunning road upsets completely reshuffling playoff positioning while championship contenders showed both vulnerability and resilience in crucial moments.",body:["The final Sunday of April provided the kind of high-stakes drama that makes the NBA's regular season stretch run appointment television, as two massive road upsets sent shockwaves through both conferences while playoff seeding implications reached fever pitch. At Madison Square Garden, Trae Young delivered one of the season's most clutch moments with a step-back three-pointer over Jalen Brunson in the final seconds, stunning the Knicks 107-106 in a performance that will be replayed for years. Meanwhile in Denver, Anthony Edwards exploded for 32 points on spectacular shooting to power Minnesota past the previously unstoppable Nuggets 119-114, ending the Western Conference's most dominant streak at 13 games while announcing the Timberwolves as legitimate playoff threats.","Young's heroics at MSG represented pure basketball theater at its finest, with the electric point guard torching New York for 28 points and 9 assists while shooting a blistering 6-of-11 from three-point range in hostile territory. The Knicks controlled most of the contest behind Brunson's 24 points and Julius Randle's 21, building what appeared to be a comfortable lead before Atlanta's relentless fourth-quarter surge culminated in Young's dagger with 8.4 seconds remaining. The victory catapulted the Hawks into a tie for fifth place in the East while dealing a crushing blow to New York's championship aspirations, proving once again that no lead is safe when elite players embrace the biggest moments.","Edwards' explosion in Denver was equally stunning and perhaps even more significant for the Western Conference landscape, as the dynamic wing delivered a masterclass performance that halted the Nuggets' historic run with authority. The explosive guard shot 12-of-21 from the field and a scorching 6-of-10 from three-point range, consistently answering every Denver surge with clutch baskets while leading Minnesota's upset victory on the road. Jaden McDaniels added 19 points and Karl-Anthony Towns contributed 17 points and 11 rebounds as the Timberwolves executed flawlessly against the league's stingiest defense, while Nikola Jokić's 26 points, 12 rebounds, and 8 assists weren't enough to prevent the defending champions from looking gassed after their incredible streak that dated back to March 15th."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: ATL 107, NYK 106 — Young hits clutch three with 8.4 seconds left at MSG",type:"score"},
  {text:"FINAL: MIN 119, DEN 114 — Edwards explodes for 32 points, ends Nuggets' 13-game streak",type:"score"},
  {text:"FINAL: CLE 115, TOR 105 — Mobley dominates with 24 points, 10 rebounds in road win",type:"score"},
  {text:"TONIGHT: HOU @ LAL — 10:30 PM ET, NBC — Rockets visit Lakers in playoff positioning battle",type:"score"},
  {text:"CLUTCH GENE: Trae Young's step-back three over Brunson sends Madison Square Garden into stunned silence",type:"alert"},
  {text:"STREAK BREAKER: Edwards' 32-point explosion ends Denver's season-high 13-game winning streak",type:"alert"},
  {text:"PLAYOFF CHAOS: Hawks jump into tie for 5th while Knicks' title hopes take crushing blow",type:"news"},
  {text:"ANT-MAN TAKEOVER: Edwards shoots 60% from three in statement road victory over defending champs",type:"alert"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS — April 20, 2026
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"NYK",homeScore:106,awayTeam:"ATL",awayScore:107,status:"final",topPerformer:"Trae Young",topLine:"28 PTS · 9 AST · 4 REB · 6-11 3PM",recap:"Trae Young delivered pure clutch magic with a step-back three-pointer over Jalen Brunson with 8.4 seconds remaining to lift Atlanta to a stunning 107-106 victory at Madison Square Garden. Young torched the Knicks for 28 points and 9 assists while shooting 6-of-11 from three-point range in a masterful performance that left the sellout crowd in stunned silence. New York led by double digits in the third quarter behind Brunson's 24 points and Julius Randle's 21, but Atlanta's relentless fourth-quarter surge culminated in Young's dagger that catapulted the Hawks into a tie for fifth place in the East. The victory was Atlanta's most impressive road win of the season and proved Young belongs in any conversation about elite clutch performers.",gameId:"NYK-ATL-20260420"},
  {homeTeam:"DEN",homeScore:114,awayTeam:"MIN",awayScore:119,status:"final",topPerformer:"Anthony Edwards",topLine:"32 PTS · 5 REB · 4 AST · 12-21 FG · 6-10 3PM",recap:"Anthony Edwards exploded for 32 points on spectacular shooting as Minnesota stunned Denver 119-114 to end the Nuggets' season-high 13-game winning streak at Ball Arena. Edwards shot 12-of-21 from the field and 6-of-10 from three-point range, consistently answering every Denver surge with clutch baskets throughout the fourth quarter. Jaden McDaniels added 19 points and Karl-Anthony Towns contributed 17 points and 11 rebounds as the Timberwolves shot 52.1% as a team against the league's top defense. Nikola Jokić had 26 points, 12 rebounds, and 8 assists for Denver, but the defending champions looked gassed after their incredible streak and couldn't match Minnesota's energy when it mattered most.",gameId:"DEN-MIN-20260420"},
  {homeTeam:"CLE",homeScore:115,awayTeam:"TOR",awayScore:105,status:"final",topPerformer:"Evan Mobley",topLine:"24 PTS · 10 REB · 3 BLK · 10-16 FG",recap:"Evan Mobley dominated both ends of the floor with 24 points, 10 rebounds, and 3 blocks as Cleveland rolled past Toronto 115-105 in a crucial playoff positioning battle. Mobley shot an efficient 10-of-16 from the field while anchoring a defense that held the Raptors to 42.9% shooting throughout the contest. Donovan Mitchell added 22 points and Darius Garland contributed 18 points and 7 assists as the Cavaliers pulled away in the second half with superior depth and execution. Scottie Barnes led Toronto with 20 points and 8 rebounds, but the Raptors couldn't generate consistent offense against Cleveland's length and athleticism in this Eastern Conference showdown.",gameId:"CLE-TOR-20260420"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 — Sunday Night Performers)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Trae Young",team:"ATL",teamRecord:"46-36",indexScore:97.8,trend:"up",keyStats:"28 PTS · 9 AST · 6-11 3PM",note:"Young delivered clutch heroics with a step-back three over Brunson with 8.4 seconds left to stun the Knicks at MSG. His 28 points and 9 assists on brilliant shooting capped a masterful performance that catapulted Atlanta into playoff positioning.",rationale:"A game-winning three-pointer at Madison Square Garden in a playoff-atmosphere thriller with massive seeding implications clearly earns the top spot over Edwards' impressive but less dramatic performance."},
  {rank:2,player:"Anthony Edwards",team:"MIN",teamRecord:"49-33",indexScore:95.2,trend:"up",keyStats:"32 PTS · 5 REB · 6-10 3PM",note:"Edwards exploded for 32 points on spectacular shooting to end Denver's season-high 13-game winning streak on the road. His 6-of-10 three-point shooting and clutch baskets throughout the fourth quarter powered Minnesota's stunning upset victory.",rationale:"A 32-point explosion ending a historic winning streak is spectacular but falls just short of Young's dramatic buzzer-beater heroics in the higher-stakes MSG environment."},
  {rank:3,player:"Evan Mobley",team:"CLE",teamRecord:"52-30",indexScore:92.4,trend:"up",keyStats:"24 PTS · 10 REB · 3 BLK",note:"Mobley dominated both ends with 24 points on 62.5% shooting while adding 10 rebounds and 3 blocks in Cleveland's convincing road victory. His efficient scoring and defensive presence controlled the game from start to finish.",rationale:"A dominant two-way performance with elite efficiency deserves the third spot, though his team's easier victory places him below the two game-changing upset performances above him."},
  {rank:4,player:"Nikola Jokić",team:"DEN",teamRecord:"54-28",indexScore:89.1,trend:"down",keyStats:"26 PTS · 12 REB · 8 AST",note:"Jokić posted another near-triple-double with 26 points, 12 rebounds, and 8 assists but couldn't prevent Denver's 13-game winning streak from ending. His shooting was solid at 55%, but the Nuggets looked gassed in the clutch.",rationale:"Strong triple-double numbers keep him in the top tier, but the team's streak-ending loss and inability to close the game places him below Mobley's winning two-way dominance."},
  {rank:5,player:"Jalen Brunson",team:"NYK",teamRecord:"53-29",indexScore:86.7,trend:"down",keyStats:"24 PTS · 6 AST · 9-18 FG",note:"Brunson led New York with 24 points and helped build a double-digit lead, but he couldn't prevent Young's clutch heroics from crushing the Knicks' playoff seeding hopes at home. His shooting was efficient at 50%.",rationale:"Solid scoring in a playoff-atmosphere game, but his team's crushing home loss and inability to defend the game-winner places him below Jokić's superior statistical performance despite the loss."},
  {rank:6,player:"Donovan Mitchell",team:"CLE",teamRecord:"52-30",indexScore:84.3,trend:"stable",keyStats:"22 PTS · 5 AST · 8-17 FG",note:"Mitchell provided steady secondary scoring with 22 points while helping Cleveland control the game throughout the second half. His veteran leadership and perimeter shooting kept Toronto at bay during their comeback attempts.",rationale:"Reliable scoring in a solid team win, but his supporting role to Mobley and less dramatic game situation places him below Brunson's primary scoring responsibility in the higher-stakes MSG thriller."},
  {rank:7,player:"Karl-Anthony Towns",team:"MIN",teamRecord:"49-33",indexScore:82.9,trend:"up",keyStats:"17 PTS · 11 REB · 6-13 FG",note:"Towns provided crucial interior presence with a double-double of 17 points and 11 rebounds in Minnesota's upset victory over Denver. His rebounding and spacing opened up opportunities for Edwards while his veteran leadership helped the team stay composed.",rationale:"A solid double-double in a major upset win, but his secondary role to Edwards and lower scoring output places him below Mitchell's more prominent offensive contribution."},
  {rank:8,player:"Julius Randle",team:"NYK",teamRecord:"53-29",indexScore:81.5,trend:"down",keyStats:"21 PTS · 8 REB · 8-16 FG",note:"Randle contributed 21 points and 8 rebounds while helping New York build their third-quarter lead, but he faded down the stretch as Atlanta mounted their comeback. His shooting was efficient at 50%.",rationale:"Good all-around numbers in a loss, but his inability to help close out the home game and Towns' superior rebounding in a bigger upset victory places him eighth."},
  {rank:9,player:"Scottie Barnes",team:"TOR",teamRecord:"46-36",indexScore:79.2,trend:"down",keyStats:"20 PTS · 8 REB · 5 AST",note:"Barnes led Toronto's scoring with 20 points while adding 8 rebounds and 5 assists, but the Raptors couldn't generate enough consistent offense against Cleveland's length. His versatility was on display throughout the game.",rationale:"Well-rounded stats in a home loss, but his team's larger margin of defeat and less competitive game compared to Randle's near-victory places him ninth."},
  {rank:10,player:"Jaden McDaniels",team:"MIN",teamRecord:"49-33",indexScore:77.8,trend:"up",keyStats:"19 PTS · 4 REB · 7-12 FG",note:"McDaniels provided crucial secondary scoring with 19 points on efficient 58.3% shooting while adding defensive pressure that disrupted Denver's rhythm. His three-point shooting was key in Minnesota's road upset victory.",rationale:"Efficient scoring in a major upset, but his role player status and lower overall impact compared to Barnes' primary offensive responsibility places him tenth despite the better team result."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS — Sunday, April 20, 2026
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Anthony Edwards",team:"MIN",value:"32",context:"Game-high 32 points on 12-21 shooting with 6 three-pointers in upset victory over Denver"},
  {category:"Rebounds",player:"Nikola Jokić",team:"DEN",value:"12",context:"Game-high 12 rebounds anchoring Denver's interior despite losing streak-ending upset to Minnesota"},
  {category:"Assists",player:"Trae Young",team:"ATL",value:"9",context:"9 assists orchestrating Atlanta's stunning comeback victory at Madison Square Garden"},
  {category:"3-Pointers",player:"Trae Young",team:"ATL",value:"6",context:"6 three-pointers made on 11 attempts including clutch game-winner with 8.4 seconds left"},
  {category:"Blocks",player:"Evan Mobley",team:"CLE",value:"3",context:"3 blocks anchoring Cleveland's defense in convincing road victory over Toronto"},
  {category:"+/-",player:"Anthony Edwards",team:"MIN",value:"+18",context:"Game-high +18 in 38 minutes leading Minnesota's upset victory that ended Denver's 13-game streak"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS — Sunday Night Recap
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"Trae Young's step-back three over Jalen Brunson with 8.4 seconds left at Madison Square Garden was pure basketball poetry in its highest form. When you can walk into the world's most famous arena and hit that shot in that moment with playoff seeding on the line, you've announced yourself as a clutch assassin. Atlanta just jumped into a tie for fifth place in the East while dealing a crushing blow to New York's championship aspirations.",topic:"Young's MSG Heroics",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"Anthony Edwards' 32-point explosion to end Denver's 13-game winning streak was a statement performance that reminded everyone why he's considered the future face of this league. The way he answered every Nuggets run with clutch baskets while shooting 60% from three showed killer instinct that separates stars from superstars. Sometimes it takes a special individual performance to halt historic momentum, and Edwards delivered exactly that.",topic:"Edwards Ends Streak",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Sunday night felt like a playoff preview with the way both Trae Young and Anthony Edwards delivered clutch performances in the most hostile environments possible. Young's dagger three at MSG was the kind of shot that defines careers and creates playoff folklore for generations. These are the moments that separate the pretenders from the contenders when championship pressure reaches its peak.",topic:"Clutch Star Power",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Denver's 13-game winning streak ending at home to Minnesota raises legitimate questions about whether the Nuggets peaked too early in this playoff race. The defending champions looked completely gassed and couldn't match Minnesota's energy down the stretch, which is concerning with the playoffs approaching. Sometimes the most dominant regular season runs can actually work against you when fatigue sets in.",topic:"Nuggets Concerns",sentiment:"cold"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"The Knicks had everything perfectly set up at home against Atlanta with a double-digit lead and Madison Square Garden rocking. Then Trae Young happened with that step-back three that completely silenced 20,000 people and crushed New York's championship aspirations. This was a game the Knicks absolutely had to have at home, and their inability to close it out could haunt them throughout the entire playoff run.",topic:"Knicks Collapse",sentiment:"cold"},
  {outlet:"NBA.com",author:"John Schuhmann",quote:"Sunday's results perfectly captured why the NBA regular season matters until the very final buzzer sounds in April. Atlanta's stunning victory catapults them into playoff positioning while Minnesota's upset completely reshuffles the Western Conference landscape. With just days remaining, every single possession carries maximum weight, and we witnessed teams both rise to the moment and crumble under championship pressure.",topic:"Playoff Race Drama",sentiment:"neutral"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES — April 21, 2026
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Luka Dončić",team:"DAL",status:"Probable",injury:"Right knee soreness",timeline:"Participated in shootaround — expected to return tonight after four-game absence",impact:"high"},
  {player:"Kawhi Leonard",team:"LAC",status:"Out",injury:"Right hip flexor strain",timeline:"Week-to-week — Clippers managing workload with playoffs approaching",impact:"high"},
  {player:"Zion Williamson",team:"NOP",status:"Questionable",injury:"Left hamstring tightness",timeline:"Hamstring responded well but remains day-to-day for tonight's game",impact:"medium"},
  {player:"Tyler Herro",team:"MIA",status:"Probable",injury:"Right ankle sprain",timeline:"Full participation in practice — ankle cleared for tonight's action",impact:"medium"},
  {player:"Brandon Ingram",team:"NOP",status:"Probable",injury:"Left knee contusion",timeline:"Knee swelling subsided — cleared for full contact and expected to play",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS — Monday, April 21, 2026
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"LAL",homeRecord:"53-29",awayTeam:"HOU",awayRecord:"52-30",time:"10:30 PM ET",tv:"NBC",spread:"LAL -2.5",overUnder:"227.5",keyMatchup:"Anthony Davis vs. Alperen Şengün",storyline:"The Lakers host Houston in a Western Conference showdown between two teams jockeying for optimal playoff seeding with massive implications. Los Angeles is riding a five-game winning streak and looking to maintain their fourth seed, while the Rockets need road victories to solidify their fifth seed position. Davis's interior dominance against Şengün's skilled big man play will be the decisive matchup in this playoff preview that could determine first-round matchups.",prediction:"LAL wins 121-115 — Davis dominates inside and Lakers' veteran experience edges out Houston",featured:true}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH — Top 5 Rookie Performers
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Victor Wembanyama",team:"SAS",statLine:"22.1 PPG · 11.4 RPG · 4.2 BPG · 52.4% FG",note:"Wembanyama continues to dominate on both ends while leading San Antonio's chase for the Western Conference's top seed. His combination of scoring, rebounding, and shot-blocking has been historic for a rookie, making the Rookie of the Year race a complete runaway.",trend:"up"},
  {rank:2,player:"Brandon Miller",team:"CHA",statLine:"17.3 PPG · 6.1 RPG · 2.3 APG · 44.3% FG",note:"Miller remains Charlotte's most consistent scorer and has shown remarkable poise in crucial games down the stretch. His three-point shooting and defensive instincts continue to impress as he's exceeded all rookie expectations.",trend:"stable"},
  {rank:3,player:"Scoot Henderson",team:"POR",statLine:"14.5 PPG · 5.0 APG · 4.1 RPG · 42.1% FG",note:"Henderson's athleticism and playmaking continue to flash elite potential despite Portland's inconsistent season. His recent stretch has shown steady improvement in decision-making and shooting efficiency.",trend:"up"},
  {rank:4,player:"Anthony Black",team:"ORL",statLine:"12.3 PPG · 5.4 APG · 4.8 RPG · 44.1% FG",note:"Black has been a steady contributor to Orlando's surprising playoff push with his basketball IQ and defensive versatility. His ability to play multiple positions has exceeded expectations for the young Magic core.",trend:"up"},
  {rank:5,player:"Keyonte George",team:"UTA",statLine:"12.8 PPG · 4.1 APG · 3.1 RPG · 40.5% FG",note:"George has shown the shot-making ability that made him a lottery pick, with his confidence growing throughout the season. Several clutch performances have demonstrated his potential as a future star.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS — Monday Slate
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Anthony Davis",team:"LAL",action:"stream",reason:"Home matchup with Houston's Alperen Şengün could favor Davis's interior dominance and shot-blocking ability. His recent strong play and the Lakers' winning streak make him an excellent DFS option with playoff positioning on the line.",urgency:"high"},
  {player:"Alperen Şengün",team:"HOU",action:"hold",reason:"Road game against the Lakers provides Şengün with playmaking opportunities despite facing Anthony Davis's tough interior defense. His passing ability gives him multiple ways to contribute fantasy value even in difficult matchups.",urgency:"medium"},
  {player:"Russell Westbrook",team:"LAL",action:"stream",reason:"Westbrook has been productive during the Lakers' winning streak and could see increased usage in a high-scoring game against Houston. His rebounding and assist upside make him a solid streaming option for tonight's slate.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// STANDINGS — Updated April 21, 2026
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:60,losses:22,pct:".732",gb:"—",streak:"W1",last10:"8-2",conf:"east"},
  {rank:2,team:"BOS",wins:56,losses:26,pct:".683",gb:"4.0",streak:"W4",last10:"9-1",conf:"east"},
  {rank:3,team:"NYK",wins:53,losses:29,pct:".646",gb:"7.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:4,team:"CLE",wins:52,losses:30,pct:".634",gb:"8.0",streak:"W1",last10:"8-2",conf:"east"},
  {rank:5,team:"ATL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"W1",last10:"7-3",conf:"east"},
  {rank:6,team:"TOR",wins:46,losses:36,pct:".561",gb:"14.0",streak:"L1",last10:"5-5",conf:"east"},
  {rank:7,team:"ORL",wins:46,losses:36,pct:".561",gb:"14.0",streak:"W1",last10:"6-4",conf:"east"},
  {rank:8,team:"PHI",wins:45,losses:37,pct:".549",gb:"15.0",streak:"L1",last10:"6-4",conf:"east"},
  {rank:9,team:"CHA",wins:44,losses:38,pct:".537",gb:"16.0",streak:"W1",last10:"6-4",conf:"east"},
  {rank:10,team:"MIA",wins:43,losses:39,pct:".524",gb:"17.0",streak:"L2",last10:"4-6",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:65,losses:17,pct:".793",gb:"—",streak:"W1",last10:"8-2",conf:"west"},
  {rank:2,team:"SAS",wins:62,losses:20,pct:".756",gb:"3.0",streak:"W1",last10:"9-1",conf:"west"},
  {rank:3,team:"DEN",wins:54,losses:28,pct:".659",gb:"11.0",streak:"L1",last10:"9-1",conf:"west"},
  {rank:4,team:"LAL",wins:53,losses:29,pct:".646",gb:"12.0",streak:"W5",last10:"9-1",conf:"west"},
  {rank:5,team:"HOU",wins:52,losses:30,pct:".634",gb:"13.0",streak:"L1",last10:"7-3",conf:"west"},
  {rank:6,team:"MIN",wins:49,losses:33,pct:".598",gb:"16.0",streak:"W1",last10:"6-4",conf:"west"},
  {rank:7,team:"PHX",wins:45,losses:37,pct:".549",gb:"19.5",streak:"L3",last10:"3-7",conf:"west"},
  {rank:8,team:"POR",wins:42,losses:40,pct:".512",gb:"23.0",streak:"L1",last10:"7-3",conf:"west"},
  {rank:9,team:"LAC",wins:42,losses:40,pct:".512",gb:"23.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:37,losses:45,pct:".451",gb:"28.0",streak:"W1",last10:"4-6",conf:"west"}
];

export const standings = [...eastStandings, ...westStandings];

// ═══════════════════════════════════════════════════════════
// THIS DAY IN NBA HISTORY
// ═══════════════════════════════════════════════════════════

export const historyFact = {year:1986,fact:"On April 21, 1986, Michael Jordan scored 63 points against the Boston Celtics in Game 2 of their first-round playoff series, setting an NBA playoff record that still stands today. Despite Jordan's legendary performance at Boston Garden, the Celtics won 135-131 in double overtime, prompting Larry Bird's famous quote that 'God disguised as Michael Jordan' had just played basketball.",players:["Michael Jordan","Larry Bird"]};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ TRIVIA (Daily)
// ═══════════════════════════════════════════════════════════

export const triviaQuestion = {id:"2026-04-21",question:"How many seconds were left on the clock when Trae Young hit his game-winning three-pointer at Madison Square Garden?",options:["6.8 seconds","7.4 seconds","8.4 seconds","9.2 seconds"],correctIndex:2,explanation:"Trae Young buried the step-back three-pointer over Jalen Brunson with exactly 8.4 seconds remaining to give Atlanta the stunning 107-106 victory at MSG.",difficulty:"medium"};

// ═══════════════════════════════════════════════════════════
// HOOPS IQ QUIZ
// ═══════════════════════════════════════════════════════════

export const hoopsIQ = {questions:[{question:"How many consecutive games had Denver won before losing to Minnesota?",options:["A. 11 games","B. 12 games","C. 13 games","D. 14 games"],answer:"C",explanation:"The Nuggets had won 13 consecutive games dating back to March 15th before Minnesota ended their historic streak.",difficulty:"easy"},{question:"What was Anthony Edwards' three-point shooting percentage in the victory over Denver?",options:["A. 55.0%","B. 60.0%","C. 65.0%","D. 70.0%"],answer:"B",explanation:"Edwards shot 6-of-10 from three-point range for exactly 60% in his 32-point explosion against the Nuggets.",difficulty:"medium"},{question:"Which team moved into a tie for fifth place in the Eastern Conference after Sunday's games?",options:["A. Toronto Raptors","B. Orlando Magic","C. Atlanta Hawks","D. Philadelphia 76ers"],answer:"C",explanation:"Atlanta's stunning victory over New York catapulted the Hawks into a tie for fifth place in the East at 46-36.",difficulty:"hard"},{question:"How many rebounds did Nikola Jokić record in Denver's loss to Minnesota?",options:["A. 10 rebounds","B. 11 rebounds","C. 12 rebounds","D. 13 rebounds"],answer:"C",explanation:"Jokić had 12 rebounds to go along with his 26 points and 8 assists in the Nuggets' streak-ending loss.",difficulty:"medium"},{question:"What was Evan Mobley's field goal percentage in Cleveland's victory over Toronto?",options:["A. 58.3%","B. 60.0%","C. 62.5%","D. 64.7%"],answer:"C",explanation:"Mobley shot 10-of-16 from the field for 62.5% shooting in his dominant 24-point, 10-rebound performance.",difficulty:"easy"}]};