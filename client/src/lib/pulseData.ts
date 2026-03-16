// NBA Pulse — Daily Edition Data
// Last updated: March 16, 2026 (Vol. 2026 · No. 75)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"March 16, 2026",edition:"Vol. 2026 · No. 75"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE NIGHT
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"SGA Barely Survives — 128 Straight. Giannis Hyperextends Knee. DeRozan Drops 41. Flagg's Revenge Game.",subhead:"Shai Gilgeous-Alexander scores exactly 20 to extend his record to 128 consecutive 20-point games. Giannis Antetokounmpo hyperextends his knee in a Bucks win over Indiana. DeRozan posts a season-high 41 with 11 assists. Brunson leads a 21-point comeback on ABC. Flagg gets revenge on Cleveland with 27 and 10 assists.",body:["The streak lives — barely. Shai Gilgeous-Alexander scored exactly 20 points with 10 assists as the Thunder beat the Timberwolves 116-103. It was SGA's closest call since the record began — he hit 20 with a mid-range jumper late in the third quarter and spent the fourth quarter distributing. Chet Holmgren led OKC with 21 points and 9 rebounds. Julius Randle scored 32 for Minnesota but the Wolves couldn't keep up with the Thunder's depth. Oklahoma City (53-15) has won nine straight and is 38 games over .500. The 128-game streak — now his alone — shows no signs of stopping, even on the nights when SGA doesn't have his best stuff.","Giannis Antetokounmpo scored 31 points and grabbed 14 rebounds before hyperextending his left knee on a third-quarter dunk. He briefly stayed in the game and dunked again before heading to the locker room. Bobby Portis picked up the slack with 29 and 10 as the Bucks beat the Pacers 134-123. Coach Doc Rivers said his 'guess is he hyperextended his knee.' Giannis has already missed a career-high 31 games this season — another extended absence would all but end Milwaukee's fading play-in hopes. Ryan Rollins had 20 points and 7 assists. The Pacers (15-53), led by Aaron Nesmith's 32, lost yet again — they have the worst record in the NBA.","The Sunday showcase games delivered. Jalen Brunson scored 30 with 9 assists and led the Knicks back from a 21-point deficit to beat the Warriors 110-107 on ABC. New York went 22-of-23 from the free throw line and took their third straight win. Karl-Anthony Towns had 17 and 12. Golden State, severely depleted without Curry and several rotation players, has now lost five straight and dropped to 32-36. Cooper Flagg got his revenge on Cleveland — two days after a 33-point blowout loss, he scored 27 with 10 assists and 6 rebounds as Dallas stunned the Cavaliers 130-120. Naji Marshall added 25 and P.J. Washington had 20 and 11. Max Strus scored 24 in his season debut for Cleveland. DeMar DeRozan posted a season-high 41 points and 11 assists as the Kings beat the Jazz 116-111, while Brandon Ingram scored 34 as Toronto beat Detroit 119-108, snapping the Pistons' three-game winning streak. Quentin Grimes scored 31 — 14 in the fourth — as the depleted Sixers beat Portland 109-103 for their second straight win."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"STREAK: SGA scores exactly 20 — 128 consecutive 20-point games — extends his own all-time record",type:"alert"},
  {text:"FINAL: OKC 116, MIN 103 — SGA 20/10 AST · Holmgren 21/9 · Randle 32 · Thunder win 9th straight",type:"score"},
  {text:"FINAL: NYK 110, GSW 107 — Brunson 30/9 AST (21-point comeback · 10-10 FT) · KAT 17/12 · Podziemski 25 · Warriors 5th straight loss",type:"score"},
  {text:"FINAL: DAL 130, CLE 120 — Flagg 27/10 AST/6 REB · Marshall 25 · PJ Washington 20/11 · Strus 24 (season debut) · revenge game",type:"score"},
  {text:"FINAL: MIL 134, IND 123 — Giannis 31/14/8 (hyperextended knee · left game) · Portis 29/10 · Rollins 20/7 AST · Nesmith 32",type:"score"},
  {text:"FINAL: TOR 119, DET 108 — Ingram 34 · Barrett 27 · Poeltl 21/18 · Barnes 14/10/8/3 BLK · Cunningham 33/9 AST",type:"score"},
  {text:"FINAL: SAC 116, UTA 111 — DeRozan season-high 41/11 AST · Achiuwa 20/11 · Cody Williams 34",type:"score"},
  {text:"FINAL: PHI 109, POR 103 — Grimes 31 (14 in Q4) · Edwards 21 · Edgecombe 18/12 · Avdija 25/9 AST",type:"score"},
  {text:"ALERT: Giannis Antetokounmpo hyperextends left knee on dunk — has missed 31 games this season already",type:"injury"},
  {text:"ALERT: Max Strus makes season debut for Cleveland — 24 PTS in 130-120 loss to Dallas",type:"alert"},
  {text:"INJURY: Giannis Antetokounmpo (MIL) — hyperextended left knee; MRI pending; has missed career-high 31 games",type:"injury"},
  {text:"INJURY: Stephen Curry (GSW) — runner's knee; still out; Warriors have lost 5 straight",type:"injury"},
  {text:"INJURY: Joel Embiid (PHI) — oblique; still out; Sixers winning without him",type:"injury"},
  {text:"INJURY: Ja Morant (MEM) — left elbow; still out; no timetable",type:"injury"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"OKC",homeScore:116,awayTeam:"MIN",awayScore:103,status:"final",topPerformer:"Shai Gilgeous-Alexander",topLine:"20 PTS · 10 AST · 128th consecutive 20+ game",recap:"Shai Gilgeous-Alexander scored exactly 20 points with 10 assists to extend his all-time record to 128 consecutive 20-point games as the Thunder cruised past the Timberwolves 116-103. SGA hit 20 with a mid-range jumper late in the third quarter — his closest call since the streak began. Chet Holmgren led OKC with 21 points and 9 rebounds. Julius Randle scored 32 for Minnesota but the Wolves' defense couldn't contain Oklahoma City's depth. The Thunder (53-15) have won nine straight.",gameId:"OKC-MIN-20260315"},
  {homeTeam:"NYK",homeScore:110,awayTeam:"GSW",awayScore:107,status:"final",topPerformer:"Jalen Brunson",topLine:"30 PTS · 9 AST · 9-19 FG · 10-10 FT · led 21-point comeback",recap:"Jalen Brunson scored 30 points with 9 assists and went 10-for-10 from the free throw line as the Knicks rallied from a 21-point second-quarter deficit to beat the Warriors 110-107 on ABC. The Knicks went 22-of-23 from the free throw line overall. Karl-Anthony Towns had 17 and 12 rebounds, while OG Anunoby and Jordan Clarkson each scored 14. Brandin Podziemski had 25 for Golden State, with Quentin Post (career-high 22) and Gui Santos (20) also contributing. The Warriors, missing Curry and several key players, have lost five straight.",gameId:"NYK-GSW-20260315"},
  {homeTeam:"CLE",homeScore:120,awayTeam:"DAL",awayScore:130,status:"final",topPerformer:"Cooper Flagg",topLine:"27 PTS · 10 AST · 6 REB · 10-17 FG",recap:"Cooper Flagg scored 27 points with 10 assists and 6 rebounds as the Mavericks gained revenge on the Cavaliers with a 130-120 win — two days after being routed 138-105 in the same building. Naji Marshall added 25 and P.J. Washington had 20 points and 11 rebounds. Dallas shot 15-of-30 from three. John Poulakidas — a two-way rookie from Yale — had 10 points in his second NBA game. Donovan Mitchell scored 26 for Cleveland and Max Strus had 24 points in his season debut. The Cavaliers (41-27) lost for the second straight day.",gameId:"DAL-CLE-20260315"},
  {homeTeam:"MIL",homeScore:134,awayTeam:"IND",awayScore:123,status:"final",topPerformer:"Giannis Antetokounmpo",topLine:"31 PTS · 14 REB · 8 AST · 11-22 FG (hyperextended knee)",recap:"Giannis Antetokounmpo scored 31 points and grabbed 14 rebounds before hyperextending his left knee on a third-quarter dunk. He briefly stayed in the game, dunked again, and shot two free throws before heading to the locker room. Bobby Portis picked up the slack with 29 points and 10 rebounds, and Ryan Rollins had 20 points with 7 assists and 3 steals. Aaron Nesmith led Indiana with 32 points. The Bucks (28-39) snapped a four-game losing streak but the Giannis injury is the major concern — he's already missed a career-high 31 games this season.",gameId:"MIL-IND-20260315"},
  {homeTeam:"TOR",homeScore:119,awayTeam:"DET",awayScore:108,status:"final",topPerformer:"Brandon Ingram",topLine:"34 PTS · 12-25 FG · 4 3PM",recap:"Brandon Ingram scored 34 points on 12-of-25 shooting and the Raptors beat the Pistons 119-108, snapping Detroit's three-game winning streak. RJ Barrett added 27, Jakob Poeltl had 21 points and a season-high 18 rebounds (9 offensive), and Scottie Barnes contributed 14 points, 10 rebounds, 8 assists, and 3 blocks. Cade Cunningham had 33 and 9 assists in the loss but the Pistons were outrebounded 60-46 and gave up 30 second-chance points. Jalen Duren had 20 and 11. Toronto (39-28) held onto 6th in the East.",gameId:"TOR-DET-20260315"},
  {homeTeam:"SAC",homeScore:116,awayTeam:"UTA",awayScore:111,status:"final",topPerformer:"DeMar DeRozan",topLine:"41 PTS · 11 AST · 11-21 FG (season-high)",recap:"DeMar DeRozan scored a season-high 41 points with 11 assists as the Kings beat the Jazz 116-111. DeRozan was nearly unstoppable from the mid-range, going 11-of-21 from the field. Precious Achiuwa contributed 20 points and 11 rebounds. Cody Williams scored 34 for Utah in a losing effort. Sacramento (18-51) has won back-to-back games. DeRozan was named Player of the Night.",gameId:"SAC-UTA-20260315"},
  {homeTeam:"PHI",homeScore:109,awayTeam:"POR",awayScore:103,status:"final",topPerformer:"Quentin Grimes",topLine:"31 PTS · 11-22 FG · 14 in Q4 (season-high)",recap:"Quentin Grimes scored 14 of his season-high 31 points in the fourth quarter as the shorthanded 76ers beat the Trail Blazers 109-103. Playing without Embiid, Maxey, and Oubre, the Sixers got 21 from Justin Edwards (with a steal-and-slam dunk highlight) and 18 points with 12 rebounds from VJ Edgecombe. Andre Drummond grabbed 17 rebounds. Deni Avdija led Portland with 25 and 9 assists. The Sixers (37-31) have won two straight and are rising in the East despite their injuries.",gameId:"PHI-POR-20260315"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 Players)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"53-15",indexScore:99.7,trend:"stable",keyStats:"20 PTS · 10 AST · 128 straight 20+ games",note:"The streak lives. SGA scored exactly 20 — his closest call — and distributed 10 assists as the Thunder won their 9th straight. He's 38 games over .500. The MVP race is over. SGA is the best player in basketball and it's not particularly close."},
  {rank:2,player:"Luka Dončić",team:"LAL",teamRecord:"42-25",indexScore:98.5,trend:"stable",keyStats:"DNP (rest day)",note:"Resting after back-to-back masterpieces (51 points Thursday, OT game-winner Saturday). The Lakers didn't play Sunday. Luka's two-game stretch — 81 combined points with a historic scoring night and a buzzer-beating OT winner — was the best 48 hours of any player this season."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",teamRecord:"49-18",indexScore:97.8,trend:"stable",keyStats:"DNP (Spurs off)",note:"The Spurs didn't play Sunday. Wemby returned Saturday with 32/12/8/3BLK. He's shooting 47% from three over his last five games. The Spurs are 49-18 and have the NBA's best defense."},
  {rank:4,player:"Jalen Brunson",team:"NYK",teamRecord:"43-25",indexScore:96.5,trend:"up",keyStats:"30 PTS · 9 AST · 10-10 FT · 21-point comeback",note:"Led the Knicks back from a 21-point deficit on ABC. Brunson went 10-of-10 from the free throw line and orchestrated one of the best comebacks of the season. The Knicks are 43-25 and have won three straight. Brunson is the most clutch point guard in the East."},
  {rank:5,player:"Cooper Flagg",team:"DAL",teamRecord:"23-45",indexScore:95.2,trend:"up",keyStats:"27 PTS · 10 AST · 6 REB · 10-17 FG",note:"Revenge game against Cleveland. Two days after a 33-point blowout loss, Flagg dropped 27/10/6 on 10-17 shooting as Dallas won 130-120 in the same building. His 12th game with 27+ points this season. The ROY race with Knueppel is getting tighter."},
  {rank:6,player:"DeMar DeRozan",team:"SAC",teamRecord:"18-51",indexScore:94.1,trend:"up",keyStats:"41 PTS · 11 AST · 11-21 FG (season-high)",note:"Season-high 41 with 11 assists. DeRozan was named Player of the Night. The Kings have won back-to-back games. At 36 years old, DeRozan is still one of the most skilled scorers in basketball — the mid-range game is timeless."},
  {rank:7,player:"Giannis Antetokounmpo",team:"MIL",teamRecord:"28-39",indexScore:93.3,trend:"down",keyStats:"31 PTS · 14 REB · 8 AST (hyperextended knee)",note:"31/14/8 before hyperextending his left knee on a dunk. The Bucks won but the injury is devastating news — Giannis has already missed a career-high 31 games this season. If he's out for an extended period, Milwaukee's play-in hopes are over."},
  {rank:8,player:"Quentin Grimes",team:"PHI",teamRecord:"37-31",indexScore:91.7,trend:"up",keyStats:"31 PTS · 14 in Q4 (season-high) · 60 PTS in back-to-back",note:"Back-to-back 28 and 31-point games — 60 total over the weekend. With Embiid, Maxey, and Oubre all out, Grimes has become the Sixers' primary scorer. The Sixers have won two straight and are fighting for the 8-seed."},
  {rank:9,player:"Brandon Ingram",team:"TOR",teamRecord:"39-28",indexScore:90.4,trend:"up",keyStats:"34 PTS · 12-25 FG · 4 3PM",note:"34 points to beat the East-leading Pistons. Ingram has scored 34+ in back-to-back games (36 vs. Suns, 34 vs. Pistons). Toronto (39-28) is holding firm at 6th in the East and Ingram is playing the best basketball of his Raptors tenure."},
  {rank:10,player:"Bobby Portis",team:"MIL",teamRecord:"28-39",indexScore:88.6,trend:"up",keyStats:"29 PTS · 10 REB · picked up slack for injured Giannis",note:"29 and 10 after Giannis went down with the knee injury. Portis combined with Giannis for 60 points. If Giannis misses time, Portis becomes the most important player in Milwaukee. The Bucks (28-39) need him to carry the load."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"DeMar DeRozan",team:"SAC",value:"41",context:"11-21 FG · 11 AST — season-high · Named Player of the Night"},
  {category:"Rebounds",player:"Jakob Poeltl",team:"TOR",value:"18",context:"21 PTS · 5 AST · 9 offensive boards — season-high · beat East-leading Pistons"},
  {category:"Assists",player:"Cooper Flagg",team:"DAL",value:"10",context:"27 PTS · 6 REB · 10-17 FG — revenge game in Cleveland"},
  {category:"3-Pointers",player:"Dallas Mavericks",team:"DAL",value:"15",context:"15-30 from three (50%) — powered 130-120 upset of Cleveland"},
  {category:"Steals",player:"Ryan Rollins",team:"MIL",value:"3",context:"20 PTS · 7 AST — stepped up after Giannis hyperextended knee"},
  {category:"Blocks",player:"Scottie Barnes",team:"TOR",value:"3",context:"14 PTS · 10 REB · 8 AST — all-around game in Pistons win"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Malika Andrews",quote:"SGA scored exactly 20 and you could feel the entire arena holding its breath. He hit 20 with a mid-range jumper in the third quarter and then just stopped scoring. He dished 10 assists instead. The record is at 128 and it almost ended tonight — but almost doesn't count. The Thunder have won 9 straight and SGA is the runaway MVP.",topic:"SGA's closest call — 20 points exactly to extend the streak to 128",sentiment:"hot"},
  {outlet:"The Athletic",author:"Shams Charania",quote:"Giannis hyperextended his left knee on a dunk in the third quarter and left the game. He's already missed a career-high 31 games this season. The Bucks are 28-39. If he's out for any significant time, the play-in is done. This is the most injury-plagued season of Giannis' career and it's not even close.",topic:"Giannis hyperextends knee — Bucks' season potentially over",sentiment:"cold"},
  {outlet:"NBC Sports",author:"Kurt Helin",quote:"Cooper Flagg just had one of the best revenge games you'll ever see. Two days after getting demolished 138-105 in Cleveland, he came back to the same building and dropped 27 points with 10 assists on 10-of-17 shooting. Dallas won 130-120. He's 19 years old. The ROY race is fascinating.",topic:"Flagg's 27/10 revenge game stuns Cleveland",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"Brunson led the Knicks back from 21 down against the Warriors on ABC and went 10-for-10 from the free throw line. The Knicks shot 22-for-23 from the line. That's not luck — that's mental toughness. New York is 43-25 and Brunson is an All-NBA lock. This team is a legitimate contender.",topic:"Brunson's 30-point, 21-point comeback on national TV",sentiment:"hot"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"The Sixers are playing without Embiid, Maxey, and Oubre and they've won two straight. Grimes had 31, Edwards 21, Edgecombe 18 and 12 rebounds. The kids are alright. Philadelphia is 37-31 and genuinely competitive despite being the most injured team in the NBA. That's coaching.",topic:"Sixers' youngsters win again without their Big Three",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"DeMar DeRozan had a season-high 41 points and 11 assists for a 18-51 team and nobody cared. That's the tragedy of DeRozan's final act — he's playing some of the best basketball of his career on a team that doesn't matter. The Kings have won back-to-back games. DeRozan deserves better.",topic:"DeRozan's 41/11 masterclass on a 18-51 team",sentiment:"cold"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Giannis Antetokounmpo",team:"MIL",status:"day-to-day",injury:"Hyperextended left knee",timeline:"Left game in third quarter after landing awkwardly on a dunk. Coach Rivers: 'My guess is he hyperextended his knee.' MRI pending. Has already missed career-high 31 games this season. Bucks are 28-39.",impact:"high"},
  {player:"Joel Embiid",team:"PHI",status:"out",injury:"Right oblique strain",timeline:"Still out. Sixers winning without him — 37-31 and rising. No timetable.",impact:"high"},
  {player:"Tyrese Maxey",team:"PHI",status:"out",injury:"Right finger tendon",timeline:"Out at least 3 weeks. Grimes (31) and Edwards (21) filling in admirably.",impact:"high"},
  {player:"Stephen Curry",team:"GSW",status:"out",injury:"Runner's knee",timeline:"Still sidelined. Warriors have lost 5 straight and are 32-36. No timetable.",impact:"high"},
  {player:"Kawhi Leonard",team:"LAC",status:"day-to-day",injury:"Left ankle (game exit March 14)",timeline:"Left game vs. Kings on Saturday. Status TBD for Monday.",impact:"high"},
  {player:"Ja Morant",team:"MEM",status:"out",injury:"Left elbow",timeline:"Still out. No timetable. Grizzlies struggling without him.",impact:"high"},
  {player:"Paul George",team:"PHI",status:"out",injury:"League suspension",timeline:"Still serving suspension.",impact:"high"},
  {player:"Max Strus",team:"CLE",status:"active",injury:"Season debut",timeline:"Made season debut — 24 PTS in 130-120 loss to Dallas. Adds shooting to Cleveland's lineup.",impact:"medium"},
  {player:"Cooper Flagg",team:"DAL",status:"active",injury:"Healthy",timeline:"27/10/6 revenge game in Cleveland. Playing at an elite level for a rookie.",impact:"low"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS (Tonight — Monday)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"HOU",homeRecord:"41-25",awayTeam:"LAL",awayRecord:"42-25",time:"8:00 PM ET",tv:"TNT",spread:"HOU -2.5",overUnder:"228.5",keyMatchup:"Luka Dončić vs. Kevin Durant",storyline:"A massive Western Conference showdown. The Lakers (42-25) are half a game ahead of Houston (41-25) for the 3-seed. Luka is coming off a 51-point game and an OT game-winner in his last two outings. The Rockets haven't lost at home in three weeks. Durant vs. Luka is must-see TV.",prediction:"LAL wins 121-118 — Luka has 35+ as the Lakers take sole possession of the 3-seed in a shootout.",featured:true},
  {homeTeam:"BOS",homeRecord:"44-23",awayTeam:"PHX",awayRecord:"33-33",time:"7:30 PM ET",tv:"League Pass",spread:"BOS -8",overUnder:"220.5",keyMatchup:"Tatum vs. Booker",storyline:"Tatum continues his Achilles comeback against the Suns. Boston (44-23) is 4.5 games behind Detroit. Phoenix (33-33) is at .500 and fighting for a play-in spot. Booker just had 43 against Indiana and will test Tatum's defensive conditioning.",prediction:"BOS wins 115-104 — Tatum plays 30+ minutes as the Celtics stay hot at home.",featured:false},
  {homeTeam:"SAS",homeRecord:"49-18",awayTeam:"LAC",awayRecord:"35-33",time:"8:30 PM ET",tv:"League Pass",spread:"SAS -9",overUnder:"216.5",keyMatchup:"Wembanyama vs. Kawhi (if active)",storyline:"The Spurs host the Clippers with Kawhi's status uncertain after his ankle issue Saturday. Wembanyama just put up 32/12/8 in his return. San Antonio (49-18) has won 17 of 19. If Kawhi sits, this could get ugly.",prediction:"SAS wins 119-100 — Wemby dominates with 30+ and the Spurs lock down the 2-seed.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Cooper Flagg",team:"DAL",statLine:"18.8 PPG · 7.4 RPG · 4.5 APG",note:"27/10/6 revenge game in Cleveland — 10-17 FG. Two days after a 33-point loss in the same building. Flagg's 12th game with 27+ points this season. His ability to dominate as a playmaker (10 assists) separates him from other rookies. ROY race is tightening.",trend:"up"},
  {rank:2,player:"Kon Knueppel",team:"CHA",statLine:"19.3 PPG · 5.4 RPG · 3.5 APG",note:"Charlotte didn't play Sunday. Knueppel had 20 in Saturday's loss to the Spurs. His consistency and Charlotte's better record had given him the edge, but Flagg's revenge game closes the gap significantly.",trend:"stable"},
  {rank:3,player:"VJ Edgecombe",team:"PHI",statLine:"13.0 PPG · 4.0 RPG",note:"18 points and a career-high 12 rebounds in the 109-103 win over Portland. Edgecombe's third double-double of the season. With Maxey and Embiid out, he's getting major minutes and producing. His athleticism is translating — the fadeaway to seal the game was pure confidence.",trend:"up"},
  {rank:4,player:"Justin Edwards",team:"PHI",statLine:"11.5 PPG · 3.5 RPG",note:"21 points with a steal-and-dunk highlight vs. Portland. Edwards is emerging as a legitimate two-way wing in the Sixers' depleted rotation. His defensive instincts are NBA-ready and the scoring is catching up.",trend:"up"},
  {rank:5,player:"Stephon Castle",team:"SAS",statLine:"12.4 PPG · 4.1 RPG · 3.8 APG",note:"Spurs didn't play Sunday. Castle's 30/11/10 triple-double Thursday remains the best single rookie game of the month. His role fluctuates with Wemby's health but the ceiling is All-Star caliber.",trend:"stable"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Quentin Grimes",team:"PHI",action:"add",reason:"Back-to-back 28 and 31-point games — 60 total over the weekend. With Embiid, Maxey, and Oubre all out, Grimes is the primary scorer. Must-add in all formats.",urgency:"high"},
  {player:"Bobby Portis",team:"MIL",action:"add",reason:"29/10 after Giannis hyperextended his knee. If Giannis misses time, Portis becomes a top-50 fantasy player overnight. Speculative must-add.",urgency:"high"},
  {player:"VJ Edgecombe",team:"PHI",action:"add",reason:"18 points and career-high 12 rebounds. With Maxey out 3+ weeks and Embiid sidelined, Edgecombe is locked into 30+ minutes. Deep league add with upside.",urgency:"medium"},
  {player:"Justin Edwards",team:"PHI",action:"stream",reason:"21 points with a steal-and-slam highlight. Another Sixers youngster getting extended run. Streaming option in deeper leagues.",urgency:"medium"},
  {player:"John Poulakidas",team:"DAL",action:"monitor",reason:"10 points in his second NBA game — a two-way rookie from Yale. If Dallas keeps getting blowout wins (unlikely), he could see more time. Deep deep league flyer.",urgency:"low"}
];

// ═══════════════════════════════════════════════════════════
// STANDINGS
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:49,losses:19,pct:".721",gb:"—",streak:"L1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:44,losses:23,pct:".657",gb:"4.5",streak:"W1",last10:"6-4",conf:"east"},
  {rank:3,team:"NYK",wins:43,losses:25,pct:".632",gb:"6.0",streak:"W3",last10:"7-3",conf:"east"},
  {rank:4,team:"CLE",wins:41,losses:27,pct:".603",gb:"8.0",streak:"L2",last10:"4-6",conf:"east"},
  {rank:5,team:"TOR",wins:39,losses:28,pct:".582",gb:"9.5",streak:"W2",last10:"7-3",conf:"east"},
  {rank:6,team:"MIA",wins:38,losses:30,pct:".559",gb:"11.0",streak:"L1",last10:"7-3",conf:"east"},
  {rank:7,team:"ORL",wins:37,losses:28,pct:".569",gb:"10.5",streak:"W7",last10:"9-1",conf:"east"},
  {rank:8,team:"PHI",wins:37,losses:31,pct:".544",gb:"12.0",streak:"W2",last10:"5-5",conf:"east"},
  {rank:9,team:"ATL",wins:35,losses:31,pct:".530",gb:"13.0",streak:"W9",last10:"9-1",conf:"east"},
  {rank:10,team:"MIL",wins:28,losses:39,pct:".418",gb:"20.5",streak:"W1",last10:"2-8",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:53,losses:15,pct:".779",gb:"—",streak:"W9",last10:"9-1",conf:"west"},
  {rank:2,team:"SAS",wins:49,losses:18,pct:".731",gb:"3.5",streak:"W1",last10:"8-2",conf:"west"},
  {rank:3,team:"LAL",wins:42,losses:25,pct:".627",gb:"10.5",streak:"W7",last10:"9-1",conf:"west"},
  {rank:4,team:"HOU",wins:41,losses:25,pct:".621",gb:"11.0",streak:"W1",last10:"6-4",conf:"west"},
  {rank:5,team:"DEN",wins:41,losses:27,pct:".603",gb:"12.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:6,team:"MIN",wins:40,losses:27,pct:".597",gb:"12.5",streak:"L1",last10:"5-5",conf:"west"},
  {rank:7,team:"PHX",wins:33,losses:33,pct:".500",gb:"19.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:8,team:"LAC",wins:35,losses:33,pct:".515",gb:"18.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:9,team:"POR",wins:32,losses:36,pct:".471",gb:"21.0",streak:"L1",last10:"5-5",conf:"west"},
  {rank:10,team:"GSW",wins:32,losses:36,pct:".471",gb:"21.0",streak:"L5",last10:"3-7",conf:"west"}
];
