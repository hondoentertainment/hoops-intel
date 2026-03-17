// NBA Pulse — Daily Edition Data
// Last updated: March 17, 2026 (Vol. 2026 · No. 76)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"March 17, 2026",edition:"Vol. 2026 · No. 76"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE NIGHT
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Brown 41, Booker 40 — Celtics Win in Classic. Hawks Win 10th Straight. Luka's 6th Straight 30-Piece. Spurs Hit 50.",subhead:"Jaylen Brown drops 41 (19-21 FT) to outlast Devin Booker's 40 in a thriller at TD Garden. Nickeil Alexander-Walker erupts for career-high 41 as Atlanta extends its streak to 10. Luka Dončić scores 36 as the Lakers take the 3-seed. Victor Wembanyama and the Spurs reach 50 wins for the first time since 2016-17.",body:["The best game of the night was at TD Garden. Jaylen Brown scored 41 points — going 19-of-21 from the free throw line — and Devin Booker answered with 40 in a Celtics-Suns showdown that went down to the wire. Phoenix took a four-point lead in the fourth quarter after a 21-8 run, but Boston answered with a 14-2 closing run over the final 4:46. The Suns went 0-for-6 from the field and didn't get an offensive rebound in those final minutes. Jayson Tatum added 21 points in 32 minutes, while Derrick White and Payton Pritchard both hit five threes apiece. The Celtics had 31 assists on 39 baskets. Boston (45-23) continues to climb.","Nickeil Alexander-Walker scored a career-high 41 points — including nine three-pointers on 15 attempts — as the Hawks rolled past the Magic 124-112 for their 10th consecutive win. It's the franchise's longest streak since the 2014-15 season. Jalen Johnson posted his 13th triple-double of the season (24/15/13) and Dyson Daniels added 15 points and 12 rebounds. Atlanta (38-31) reclaimed 8th place in the East, bumping Philadelphia to 9th. The Magic (37-29) had their 7-game winning streak snapped. After the game, Orlando's Jett Howard had to be restrained after Alexander-Walker fired a three with 19.5 seconds left.","Luka Dončić scored 36 points on 14-of-27 shooting — his sixth straight game with 30-plus — as the Lakers beat the Rockets 100-92 in Houston. LeBron James found Marcus Smart for a corner three that put LA up 94-90 with two minutes left. Houston committed 24 turnovers. The Lakers (43-25) have won six straight and moved 1.5 games ahead of Houston for the 3-seed. In San Antonio, Victor Wembanyama had 21 points and 13 rebounds while Stephon Castle led with 23 as the Spurs beat the Clippers 119-115 to reach 50 wins — the first time since 2016-17. Kawhi Leonard watched from the bench with a sprained left knee. Josh Giddey notched his fourth triple-double in five games (16/15/13) as the Bulls blew out Memphis 132-107. Matas Buzelis had 29. Kristaps Porzingis scored 30 in 26 minutes as the Warriors snapped their 5-game skid 125-117 in Washington — Trae Young had 21 before leaving with a bruised quad. Zion Williamson went 11-of-13 for 27 points as New Orleans beat Dallas 129-111 — Naji Marshall had 32 against his former team. Portland coasted past Brooklyn 114-95."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"DUEL: Brown 41 (19-21 FT) vs. Booker 40 — Celtics outscore Suns 14-2 in final 4:46 to win 120-112",type:"alert"},
  {text:"STREAK: Hawks win 10th straight — longest since 2014-15 — NAW career-high 41 (9 3PM) · Jalen Johnson 24/15/13",type:"alert"},
  {text:"FINAL: BOS 120, PHX 112 — Brown 41/7/6 (19-21 FT) · Tatum 21/7/4 · White 21 · Pritchard 19 · Booker 40",type:"score"},
  {text:"FINAL: ATL 124, ORL 112 — NAW 41/7/5 (career-high · 9 3PM) · Johnson 24/15/13 (triple-double) · Daniels 15/12 · Hawks 10th straight",type:"score"},
  {text:"FINAL: LAL 100, HOU 92 — Luka 36/6/4/2 STL (14-27 FG · 6th straight 30+ game) · LeBron 18/5/5 · Smart clutch 3 · HOU 24 turnovers",type:"score"},
  {text:"FINAL: SAS 119, LAC 115 — Castle 23/7/8 AST · Wemby 21/13 · Vassell 20 · Spurs 50th win (first since 2016-17) · Kawhi sat",type:"score"},
  {text:"FINAL: GSW 125, WAS 117 — Porzingis 30 (26 min) · Melton 27 · Santos 18 · Trae Young 21 (bruised quad · left game) · Warriors snap 5-game skid",type:"score"},
  {text:"FINAL: CHI 132, MEM 107 — Giddey 16/15/13 (4th triple-double in 5 games) · Buzelis 29 (5 3PM) · Grizzlies 8th straight loss",type:"score"},
  {text:"FINAL: NOP 129, DAL 111 — Zion 27 (11-13 FG) · Bey 23 · Marshall 32 (vs. former team) · Flagg 21/8 AST/7 REB",type:"score"},
  {text:"FINAL: POR 114, BKN 95 — Avdija 18 · Camara 18 · Clingan 14/11 · Henderson 16 · Nets 14 of 16 losses",type:"score"},
  {text:"MILESTONE: Spurs reach 50 wins for first time since 2016-17 — averaged just 34 wins/season from 2017-2025",type:"alert"},
  {text:"INJURY: Trae Young (WAS) — bruised right quad; left game after 21 minutes; Wizards 12th straight loss",type:"injury"},
  {text:"INJURY: Kawhi Leonard (LAC) — sprained left knee; sat out vs. Spurs; Clippers drop to .500",type:"injury"},
  {text:"INJURY: Ja Morant (MEM) — left elbow; still out; Grizzlies 8th straight loss",type:"injury"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"BOS",homeScore:120,awayTeam:"PHX",awayScore:112,status:"final",topPerformer:"Jaylen Brown",topLine:"41 PTS · 7 REB · 6 AST · 19-21 FT",recap:"Jaylen Brown scored 41 points — going 19-of-21 from the free throw line — to outlast Devin Booker's 40 points as the Celtics beat the Suns 120-112 at TD Garden. Phoenix took a four-point lead in the fourth after a 21-8 run, but Boston closed with a 14-2 surge over the final 4:46 — the Suns went 0-for-6 from the field with no offensive rebounds in that stretch. Jayson Tatum had 21 points, 7 rebounds, and 4 assists. Derrick White (21) and Payton Pritchard (19) each hit five threes. The Celtics had 31 assists on 39 made baskets. Boston (45-23) is rolling.",gameId:"BOS-PHX-20260316"},
  {homeTeam:"ATL",homeScore:124,awayTeam:"ORL",awayScore:112,status:"final",topPerformer:"Nickeil Alexander-Walker",topLine:"41 PTS · 12-22 FG · 9 3PM · 7 REB · 5 AST (career-high)",recap:"Nickeil Alexander-Walker scored a career-high 41 points with nine three-pointers as the Hawks beat the Magic 124-112 for their 10th consecutive win — the franchise's longest streak since the 2014-15 season. Jalen Johnson posted his 13th triple-double of the season with 24 points, 15 rebounds, and 13 assists. Dyson Daniels added 15 points and 12 rebounds. Alexander-Walker had 24 points in the first half, helping Atlanta to a 67-50 lead. The Hawks (38-31) reclaimed 8th place in the East. Orlando (37-29) had their 7-game winning streak snapped.",gameId:"ATL-ORL-20260316"},
  {homeTeam:"HOU",homeScore:92,awayTeam:"LAL",awayScore:100,status:"final",topPerformer:"Luka Dončić",topLine:"36 PTS · 6 REB · 4 AST · 2 STL · 14-27 FG (6th straight 30+)",recap:"Luka Dončić scored 36 points on 14-of-27 shooting — his sixth consecutive game with 30-plus points — as the Lakers beat the Rockets 100-92 in Houston. Luka hit back-to-back threes in the third quarter to take the lead, and LeBron James found Marcus Smart for a corner three that made it 94-90 with two minutes left. LeBron had 18 points, 5 rebounds, and 5 assists. Jabari Smith Jr. led Houston with 22, while Amen Thompson had 19 and Kevin Durant 18. Houston committed 24 turnovers. The Lakers (43-25) have won six straight and moved 1.5 games ahead of the Rockets (41-26) for the 3-seed.",gameId:"LAL-HOU-20260316"},
  {homeTeam:"LAC",homeScore:115,awayTeam:"SAS",awayScore:119,status:"final",topPerformer:"Stephon Castle",topLine:"23 PTS · 8 AST · 7 REB",recap:"Stephon Castle led with 23 points, 8 assists, and 7 rebounds while Victor Wembanyama had 21 points and 13 rebounds as the Spurs beat the Clippers 119-115 to reach 50 wins — the first time since 2016-17. Devin Vassell added 20 points. San Antonio overcame a 14-point deficit, built a 24-point lead, then held off a late Clippers rally. Kawhi Leonard sat out with a sprained left knee. The Spurs (50-18) trail OKC by three games for the top spot in the West. The Clippers (34-34) dropped back to .500.",gameId:"SAS-LAC-20260316"},
  {homeTeam:"WAS",homeScore:117,awayTeam:"GSW",awayScore:125,status:"final",topPerformer:"Kristaps Porzingis",topLine:"30 PTS · 26 MIN (highest-scoring game as a Warrior)",recap:"Kristaps Porzingis scored 30 points in just 26 minutes — his highest-scoring game as a Warrior — and De'Anthony Melton added 27 as Golden State snapped its five-game losing streak with a 125-117 win in Washington. Gui Santos had 18 and Draymond Green led with 7 assists and 8 rebounds. The Warriors shot 50.5% from the field. Trae Young scored 21 in 21 minutes before leaving with a bruised right quad. Bilal Coulibaly and Will Riley each had 21 for the Wizards, who have lost 12 straight.",gameId:"GSW-WAS-20260316"},
  {homeTeam:"CHI",homeScore:132,awayTeam:"MEM",awayScore:107,status:"final",topPerformer:"Josh Giddey",topLine:"16 PTS · 15 REB · 13 AST (4th triple-double in 5 games)",recap:"Josh Giddey posted his fourth triple-double in five games — 16 points, 15 rebounds, and 13 assists — as the Bulls blew out the Grizzlies 132-107. Matas Buzelis led the scoring with 29 points including five threes, while Tre Jones added 17 and Rob Dillingham had 15 off the bench. Giddey is third in the NBA with 12 triple-doubles this season. The Grizzlies, playing without Morant and with Edey shut down for the season, have lost eight straight. Cedric Coward led Memphis with 17.",gameId:"CHI-MEM-20260316"},
  {homeTeam:"NOP",homeScore:129,awayTeam:"DAL",awayScore:111,status:"final",topPerformer:"Zion Williamson",topLine:"27 PTS · 11-13 FG",recap:"Zion Williamson shot 11-of-13 for 27 points as the Pelicans beat the injury-depleted Mavericks 129-111. Saddiq Bey had 23 and Jeremiah Fears and Trey Murphy III each added 17. Yves Missi grabbed 10 rebounds and blocked 5 shots. Naji Marshall scored 32 against his former team for Dallas, while Cooper Flagg had 21 points, 8 assists, and 7 rebounds. P.J. Washington added 18. The Mavericks were without Klay Thompson (rest), Daniel Gafford (illness), and Caleb Martin (sore foot). New Orleans has won 8 of its last 12.",gameId:"NOP-DAL-20260316"},
  {homeTeam:"BKN",homeScore:95,awayTeam:"POR",awayScore:114,status:"final",topPerformer:"Deni Avdija",topLine:"18 PTS · co-leader with Toumani Camara (18)",recap:"Deni Avdija and Toumani Camara each scored 18 points as the Trail Blazers coasted to a 114-95 win over the Nets. Donovan Clingan had 14 points and 11 rebounds while Scoot Henderson added 16 off the bench. Portland never trailed and led by as many as 31. The Blazers shot 51% from the field and 42% from three. Nic Claxton had 12 and 10 for Brooklyn, which shot just 30% from the field. The Nets have lost 14 of their last 16.",gameId:"POR-BKN-20260316"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 Players)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"53-15",indexScore:99.7,trend:"stable",keyStats:"DNP (Thunder off)",note:"OKC didn't play Monday. SGA's 128-game 20-point streak remains the longest in NBA history. The Thunder are 53-15, 38 games over .500, and have won nine straight. SGA is the runaway MVP."},
  {rank:2,player:"Luka Dončić",team:"LAL",teamRecord:"43-25",indexScore:98.9,trend:"up",keyStats:"36 PTS · 6 REB · 4 AST · 14-27 FG · 6th straight 30+",note:"Luka's sixth consecutive 30-point game — 36 to beat the Rockets in Houston and take the 3-seed. He's scored 30+ in every game since his career-high 51. Over his last six: 51, 30, 36, 44, 40, 36. That's 237 points in six games. The Lakers have won six straight and are 1.5 games ahead of Houston."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",teamRecord:"50-18",indexScore:97.8,trend:"stable",keyStats:"21 PTS · 13 REB · Spurs reach 50 wins",note:"Not his flashiest night but Wemby anchored the Spurs to their 50th win — the franchise's first since 2016-17. San Antonio is 17-2 since February and has the NBA's best defense. The Spurs averaged just 34 wins a year from 2017-2025. Wembanyama changed everything."},
  {rank:4,player:"Jaylen Brown",team:"BOS",teamRecord:"45-23",indexScore:97.2,trend:"up",keyStats:"41 PTS · 7 REB · 6 AST · 19-21 FT",note:"41 points to outlast Booker's 40 in a classic. Brown went 19-of-21 from the free throw line and led a 14-2 closing run. The Celtics have 31 assists on 39 baskets. With Tatum at 21/7/4, Boston's two-headed monster is operating at peak efficiency."},
  {rank:5,player:"Jalen Brunson",team:"NYK",teamRecord:"43-25",indexScore:96.5,trend:"stable",keyStats:"DNP (Knicks off)",note:"Knicks didn't play Monday. Brunson's 30-point, 21-point comeback on Sunday remains the weekend's signature moment. New York is 43-25 and Brunson is an All-NBA lock."},
  {rank:6,player:"Nickeil Alexander-Walker",team:"ATL",teamRecord:"38-31",indexScore:95.8,trend:"up",keyStats:"41 PTS · 12-22 FG · 9 3PM · 7 REB · 5 AST (career-high)",note:"Career-high 41 with nine threes — the engine behind Atlanta's 10-game winning streak. NAW has 36 20-point games this season. The Hawks are the hottest team in basketball. This streak has transformed them from lottery team to play-in contender to legitimate 8-seed."},
  {rank:7,player:"Cooper Flagg",team:"DAL",teamRecord:"23-46",indexScore:94.0,trend:"stable",keyStats:"21 PTS · 8 AST · 7 REB",note:"21/8/7 against New Orleans — a quieter night after Sunday's revenge game in Cleveland. Marshall's 32 against his former team stole the spotlight. Flagg is averaging 18.8/7.4/4.5 for the season and the ROY race remains tight."},
  {rank:8,player:"Stephon Castle",team:"SAS",teamRecord:"50-18",indexScore:93.1,trend:"up",keyStats:"23 PTS · 8 AST · 7 REB",note:"Led the Spurs past the Clippers with 23/8/7 on the night they reached 50 wins. Castle outplayed every guard on the floor. His role alongside Wembanyama is perfectly defined — Castle orchestrates, Wemby dominates. Second-year breakout is real."},
  {rank:9,player:"Josh Giddey",team:"CHI",teamRecord:"24-44",indexScore:91.5,trend:"up",keyStats:"16 PTS · 15 REB · 13 AST (4th triple-double in 5 games)",note:"Fourth triple-double in five games — 12 total on the season, third in the NBA behind Jokic (27) and Jalen Johnson (13). Giddey has quietly become one of the best playmakers in basketball. The wins don't come but the stat lines are undeniable."},
  {rank:10,player:"Kristaps Porzingis",team:"GSW",teamRecord:"33-36",indexScore:89.4,trend:"up",keyStats:"30 PTS · 26 MIN (highest-scoring game as a Warrior)",note:"30 points in 26 minutes — his best game in a Warriors uniform — to snap a five-game losing streak. KP looked healthy and dominant. If Curry returns soon and Porzingis stays at this level, Golden State can still make the play-in."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Jaylen Brown",team:"BOS",value:"41",context:"19-21 FT · 7 REB · 6 AST — outlasted Booker's 40 in a classic at TD Garden"},
  {category:"Rebounds",player:"Josh Giddey",team:"CHI",value:"15",context:"16 PTS · 13 AST — 4th triple-double in 5 games · 12th of the season"},
  {category:"Assists",player:"Jalen Johnson",team:"ATL",value:"13",context:"24 PTS · 15 REB — 13th triple-double of the season · Hawks 10th straight win"},
  {category:"3-Pointers",player:"Nickeil Alexander-Walker",team:"ATL",value:"9",context:"Career-high 41 PTS on 9-15 from deep — powered Hawks' 10th straight win"},
  {category:"Blocks",player:"Yves Missi",team:"NOP",value:"5",context:"10 REB — anchored Pelicans' defense in 129-111 win over Mavericks"},
  {category:"Efficiency",player:"Zion Williamson",team:"NOP",value:"11-13 FG",context:"27 PTS — 84.6% from the field · dominant inside performance vs. Dallas"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"NBC Sports Boston",author:"Chris Forsberg",quote:"Jaylen Brown scored 41 points and went 19-of-21 from the free throw line to outlast Devin Booker's 40. The Celtics held the Suns to two points in the final 4:46 — Phoenix went 0-for-6 from the field. That's elite defense meeting elite offense. Boston had 31 assists on 39 baskets. This team is dangerous.",topic:"Brown 41 vs. Booker 40 — Celtics win with elite late-game defense",sentiment:"hot"},
  {outlet:"ESPN",author:"Tim Bontemps",quote:"The Hawks have won 10 straight. Their longest streak since 2014-15. Nickeil Alexander-Walker just had 41 points and nine threes. Jalen Johnson has 13 triple-doubles. This was a team people wrote off after the Trae Young trade — now they're the 8-seed and climbing. Atlanta is the best story in the East right now.",topic:"Hawks 10th straight win — NAW career-high 41",sentiment:"hot"},
  {outlet:"Silver Screen & Roll",author:"Harrison Faigen",quote:"Luka Dončić has scored 30-plus points in six consecutive games: 51, 30, 36, 44, 40, 36. That's 237 points in six games. The Lakers have won six straight. They're 1.5 games ahead of Houston for the 3-seed. And Luka hit the back-to-back threes in the third quarter that flipped the game. He's unstoppable right now.",topic:"Luka's 6th straight 30-point game carries Lakers to 3-seed",sentiment:"hot"},
  {outlet:"The Athletic",author:"Jeff McDonald",quote:"The Spurs reached 50 wins for the first time since 2016-17. They averaged 34 wins a year from 2017 to 2025. They bottomed out with consecutive 22-win seasons. Now they're 50-18 and three games behind Oklahoma City. Victor Wembanyama didn't just rebuild the franchise — he restored it. Stephon Castle's 23/8/7 was the highlight.",topic:"Spurs hit 50 wins — a franchise revival",sentiment:"hot"},
  {outlet:"CBS Sports",author:"Jack Maloney",quote:"Josh Giddey has four triple-doubles in five games. He has 12 on the season, third in the NBA. The Bulls are 24-44 and nobody's watching, but Giddey is playing the best basketball of his career. His 16/15/13 against Memphis was effortless. The Grizzlies have lost eight straight and they've shut down Edey for the season. Two teams going in opposite directions.",topic:"Giddey's triple-double machine vs. Grizzlies' collapse",sentiment:"cold"},
  {outlet:"The Ringer",author:"Kevin O'Connor",quote:"Trae Young played 21 minutes, scored 21 points, and left with a bruised quad. The Wizards have lost 12 straight. Porzingis dropped 30 in 26 minutes for the Warriors. Washington is the league's saddest team and it's not close — they traded Young from Atlanta and now he's getting hurt on a team that can't win.",topic:"Trae Young hurt as Wizards lose 12th straight",sentiment:"cold"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Trae Young",team:"WAS",status:"day-to-day",injury:"Bruised right quad",timeline:"Left Monday's game after 21 minutes. Had 21 points. Wizards have lost 12 straight.",impact:"high"},
  {player:"Kawhi Leonard",team:"LAC",status:"out",injury:"Sprained left knee",timeline:"Sat out Monday vs. Spurs. Second straight game missed. Clippers dropped to .500 at 34-34.",impact:"high"},
  {player:"Giannis Antetokounmpo",team:"MIL",status:"day-to-day",injury:"Hyperextended left knee",timeline:"Injured Sunday. MRI pending. Has missed career-high 31 games this season.",impact:"high"},
  {player:"Ja Morant",team:"MEM",status:"out",injury:"Left elbow",timeline:"Still out. No timetable. Grizzlies have lost 8 straight and shelved Edey for the season.",impact:"high"},
  {player:"Stephen Curry",team:"GSW",status:"out",injury:"Runner's knee",timeline:"Still sidelined. Warriors snapped 5-game skid without him — Porzingis had 30. No timetable.",impact:"high"},
  {player:"Joel Embiid",team:"PHI",status:"out",injury:"Right oblique strain",timeline:"Still out. Sixers are 37-31 despite his absence. No timetable.",impact:"high"},
  {player:"Tyrese Maxey",team:"PHI",status:"out",injury:"Right finger tendon",timeline:"Out at least 3 weeks. Sixers' young core stepping up.",impact:"high"},
  {player:"Zach Edey",team:"MEM",status:"out",injury:"Shut down for season",timeline:"Grizzlies have shut down their big man for the remainder of the season.",impact:"medium"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS (Tonight — Tuesday)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"HOU",homeRecord:"41-26",awayTeam:"LAL",awayRecord:"43-25",time:"8:00 PM ET",tv:"TNT",spread:"HOU -1.5",overUnder:"224.5",keyMatchup:"Luka Dončić vs. Kevin Durant (Game 2)",storyline:"Same teams, same arena, same stakes — the second of a two-game series in Houston. The Lakers won Game 1 behind Luka's 36, and Houston will be desperate to avoid dropping to 2.5 games back. Can the Rockets solve LA's defense after committing 24 turnovers?",prediction:"HOU wins 118-113 — Rockets clean up turnovers and win at home behind Durant's 30+.",featured:true},
  {homeTeam:"DET",homeRecord:"49-19",awayTeam:"CLE",awayRecord:"41-27",time:"7:00 PM ET",tv:"League Pass",spread:"DET -6",overUnder:"217.5",keyMatchup:"Cunningham vs. Mitchell",storyline:"The East-leading Pistons host a Cleveland team that's lost two straight. Detroit has the league's best record at 49-19. Can Max Strus build on his season debut performance?",prediction:"DET wins 112-104 — Cunningham leads Detroit to another statement win at home.",featured:false},
  {homeTeam:"ATL",homeRecord:"38-31",awayTeam:"MIA",awayRecord:"38-30",time:"7:30 PM ET",tv:"League Pass",spread:"ATL -3",overUnder:"219.5",keyMatchup:"Alexander-Walker vs. Herro",storyline:"Can the Hawks extend their streak to 11? Miami sits one spot ahead at 6th. This is a de facto play-in positioning game. NAW is scorching — 41 points in his last game.",prediction:"ATL wins 116-110 — The streak continues. Hawks take over 7th with 11 straight.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Cooper Flagg",team:"DAL",statLine:"18.8 PPG · 7.4 RPG · 4.5 APG",note:"21/8/7 in New Orleans after Sunday's epic 27/10/6 revenge game in Cleveland. Two solid games in a row. Flagg's playmaking continues to set him apart — 18 combined assists over the two-game road trip. The ROY race stays tight.",trend:"stable"},
  {rank:2,player:"Kon Knueppel",team:"CHA",statLine:"19.3 PPG · 5.4 RPG · 3.5 APG",note:"Hornets didn't play Monday. Knueppel leads in scoring average and his team is in a better position, but Flagg's two-game Cleveland-New Orleans stretch was impressive. Charlotte plays Tuesday — Knueppel needs a big game to stay ahead.",trend:"stable"},
  {rank:3,player:"Stephon Castle",team:"SAS",statLine:"12.4 PPG · 4.1 RPG · 3.8 APG",note:"23/8/7 on the night the Spurs reached 50 wins. Castle led the team in scoring and was the best player on the floor. His second-year breakout is undeniable, but he's not technically a rookie. Still, the Spurs' future is Castle and Wemby.",trend:"up"},
  {rank:4,player:"Matas Buzelis",team:"CHI",statLine:"10.2 PPG · 3.8 RPG",note:"29 points with five threes in the blowout of Memphis. Buzelis is starting to flash the scoring ability that made him a lottery pick. Back-to-back strong performances from Chicago's young core.",trend:"up"},
  {rank:5,player:"Jeremiah Fears",team:"NOP",statLine:"9.8 PPG · 3.2 APG",note:"17 points in the win over Dallas. Fears is finding his groove alongside Zion and continues to show flashes of his scoring upside. The Pelicans are 8-4 in their last 12 — Fears is a part of that.",trend:"up"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Nickeil Alexander-Walker",team:"ATL",action:"add",reason:"Career-high 41 with 9 threes. Has 36 20-point games this season. The Hawks have won 10 straight and NAW is the primary scorer. Must-add in all formats if somehow still available.",urgency:"high"},
  {player:"Josh Giddey",team:"CHI",action:"add",reason:"Fourth triple-double in five games. 12 total on the season, 3rd in the NBA. Giddey is a top-60 fantasy player when healthy and engaged. Start him in all formats.",urgency:"high"},
  {player:"Kristaps Porzingis",team:"GSW",action:"add",reason:"30 points in 26 minutes. Highest-scoring game as a Warrior. If Curry returns and KP stays at this level, both have top-40 upside. Must-own.",urgency:"high"},
  {player:"Matas Buzelis",team:"CHI",action:"stream",reason:"29 points with 5 threes vs. Memphis. Deep league streaming option when the Bulls play weak opponents. The talent is there.",urgency:"medium"},
  {player:"Zion Williamson",team:"NOP",action:"hold",reason:"27 points on 11-13 shooting. When healthy, Zion is a top-25 fantasy asset. Pelicans have won 8 of 12 and he's a big reason why. Hold with confidence.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// STANDINGS
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:49,losses:19,pct:".721",gb:"—",streak:"L1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:45,losses:23,pct:".662",gb:"3.5",streak:"W2",last10:"7-3",conf:"east"},
  {rank:3,team:"NYK",wins:43,losses:25,pct:".632",gb:"6.0",streak:"W3",last10:"7-3",conf:"east"},
  {rank:4,team:"CLE",wins:41,losses:27,pct:".603",gb:"8.0",streak:"L2",last10:"4-6",conf:"east"},
  {rank:5,team:"TOR",wins:39,losses:28,pct:".582",gb:"9.5",streak:"W2",last10:"7-3",conf:"east"},
  {rank:6,team:"ORL",wins:37,losses:29,pct:".561",gb:"11.5",streak:"L1",last10:"7-3",conf:"east"},
  {rank:7,team:"MIA",wins:38,losses:30,pct:".559",gb:"11.0",streak:"L1",last10:"7-3",conf:"east"},
  {rank:8,team:"ATL",wins:38,losses:31,pct:".551",gb:"11.5",streak:"W10",last10:"10-0",conf:"east"},
  {rank:9,team:"PHI",wins:37,losses:31,pct:".544",gb:"12.0",streak:"W2",last10:"5-5",conf:"east"},
  {rank:10,team:"MIL",wins:28,losses:39,pct:".418",gb:"20.5",streak:"W1",last10:"2-8",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:53,losses:15,pct:".779",gb:"—",streak:"W9",last10:"9-1",conf:"west"},
  {rank:2,team:"SAS",wins:50,losses:18,pct:".735",gb:"3.0",streak:"W2",last10:"9-1",conf:"west"},
  {rank:3,team:"LAL",wins:43,losses:25,pct:".632",gb:"10.0",streak:"W6",last10:"9-1",conf:"west"},
  {rank:4,team:"HOU",wins:41,losses:26,pct:".612",gb:"11.5",streak:"L1",last10:"5-5",conf:"west"},
  {rank:5,team:"DEN",wins:41,losses:27,pct:".603",gb:"12.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:6,team:"MIN",wins:41,losses:27,pct:".603",gb:"12.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:7,team:"PHX",wins:39,losses:29,pct:".574",gb:"14.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:8,team:"LAC",wins:34,losses:34,pct:".500",gb:"19.0",streak:"L2",last10:"4-6",conf:"west"},
  {rank:9,team:"POR",wins:33,losses:36,pct:".478",gb:"20.5",streak:"W1",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:33,losses:36,pct:".478",gb:"20.5",streak:"W1",last10:"4-6",conf:"west"}
];
