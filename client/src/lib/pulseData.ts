// NBA Pulse — Daily Edition Data
// Last updated: March 12, 2026 (Vol. 2026 · No. 71)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"March 12, 2026",edition:"Vol. 2026 · No. 71"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE NIGHT
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Kawhi Explodes for 45. Jokic Triple-Doubles Denver to a Blowout. Knicks Snap Skid. Magic Rise.",subhead:"Kawhi Leonard scores 45 on 15-of-20 shooting as the Clippers demolish Minnesota 153-128; Jokic posts 16/13/12 and Murray scores 30 as Denver destroys Houston 129-93; Brunson's 28 rallies New York past Utah; Orlando takes down Cleveland; LaMelo and Knueppel combine for 54 in Charlotte win.",body:["Kawhi Leonard reminded everyone exactly who he is. He scored 45 points on 15-of-20 shooting — 6-of-9 from three, 9-of-10 from the line — as the Clippers annihilated the Timberwolves 153-128 for their highest-scoring game of the season. It was Leonard's third straight game with 28+ points and his most dominant performance since joining the Clippers. Bennedict Mathurin added 22 and Darius Garland had 21 with five threes in his best game since the trade deadline acquisition. Anthony Edwards scored 36 for Minnesota but the Wolves had no answers on defense. LA (35-32) has won six of seven and three straight — they're surging up the West standings. Minnesota (39-26) has lost three straight and is dropping.","Nikola Jokic was ruthlessly efficient. He posted 16 points, 13 assists, and 12 rebounds in just 30 minutes — his 25th triple-double of the season — as the Nuggets demolished the Rockets 129-93. Jamal Murray was the story offensively with 30 points on 11-of-21 shooting, and Christian Braun added 19 on 8-of-9 from the floor. Denver opened the game on a 17-4 run and never looked back. Kevin Durant was held to just 11 points on 8 shots — one of his quietest nights of the season. The Nuggets (39-26) snapped their two-game skid and won the season series over Houston 3-1, securing the tiebreaker. Houston (40-25) got a reality check after their recent surge.","The Knicks were down 18 in the first half and it looked like the wheels were coming off after three losses in four games. Then Jalen Brunson happened. He scored 28 with 8 assists and led a 20-4 run spanning the third and fourth quarters as New York roared back to beat Utah 134-117. Jordan Clarkson had 27, OG Anunoby added 22, and Karl-Anthony Towns contributed 21/7/7. The Jazz started scorching hot — 11-of-13 from three to open the game — but couldn't sustain it. Brice Sensabaugh scored 29 for Utah and Keyonte George left with a right hamstring injury. The Knicks (41-25) needed that. In other action: Paolo Banchero had 25/8/7 as the Magic beat the Cavaliers 128-122 — Harden's 30 and Mitchell's 25 weren't enough for Cleveland. The Pelicans beat the Raptors 122-111 behind Trey Murphy's 28 and Dejounte Murray's 27 — Toronto has lost six of eight and dropped to 7th in the East. And LaMelo Ball scored 30, Miles Bridges had 26, and Kon Knueppel added 24 as the Hornets beat the Kings 117-109 — DeMar DeRozan passed Tim Duncan for 18th on the all-time scoring list with 39 points in defeat."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"TONIGHT: SGA vs. Tatum — SGA can BREAK Wilt's record — 127 straight 20+ point games — 9:30 PM ET on Prime",type:"alert"},
  {text:"TONIGHT: SAS @ DEN — Wembanyama vs. Jokic — first meeting in over a year — 9:00 PM ET",type:"alert"},
  {text:"FINAL: LAC 153, MIN 128 — Kawhi 45 PTS (15-20 FG · 6-9 3PM) · Clippers' highest-scoring game of season",type:"score"},
  {text:"FINAL: DEN 129, HOU 93 — Jokic 16/13/12 triple-double · Murray 30 · Braun 19 (8-9 FG) · Durant held to 11",type:"score"},
  {text:"FINAL: NYK 134, UTA 117 — Brunson 28/8 AST · Clarkson 27 · KAT 21/7/7 · Knicks rally from 18 down",type:"score"},
  {text:"FINAL: ORL 128, CLE 122 — Banchero 25/8/7 · da Silva 23 · Harden 30/8 AST · Cavaliers drop 5 of 9",type:"score"},
  {text:"FINAL: NOP 122, TOR 111 — Murphy 28 · D. Murray 27 · Ingram 22 in return · Raptors drop to 7th in East",type:"score"},
  {text:"FINAL: CHA 117, SAC 109 — LaMelo 30 · Bridges 26 · Knueppel 24 · DeRozan 39 (passes Tim Duncan, 18th all-time)",type:"score"},
  {text:"ALERT: Clippers have won 6 of 7 — Kawhi playing at MVP level — LAC surging in West play-in race",type:"alert"},
  {text:"ALERT: Nuggets win season series vs. Rockets 3-1 — hold tiebreaker — within half-game of Houston",type:"news"},
  {text:"ALERT: Toronto has lost 6 of 8 — dropped from 5th to 7th in the East — Raptors skidding",type:"news"},
  {text:"INJURY: Keyonte George (UTA) — right hamstring; left game vs. NYK in 3rd quarter; MRI pending",type:"injury"},
  {text:"INJURY: Stephen Curry (GSW) — runner's knee; still sidelined; Warriors 32-33 and below .500",type:"injury"},
  {text:"INJURY: Ja Morant (MEM) — left elbow; still out; Grizzlies have lost 5 straight",type:"injury"},
  {text:"INJURY: Joel Embiid (PHI) — oblique; reevaluation around March 13",type:"injury"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"MIN",homeScore:128,awayTeam:"LAC",awayScore:153,status:"final",topPerformer:"Kawhi Leonard",topLine:"45 PTS · 15-20 FG · 6-9 3PM · 9-10 FT",recap:"Kawhi Leonard scored 45 points on 15-of-20 shooting — his most dominant performance of the season — as the Clippers destroyed the Timberwolves 153-128 for their highest-scoring game of the year. Leonard was 6-of-9 from three and 9-of-10 from the line. Bennedict Mathurin added 22 and Darius Garland had 21 with five threes. Anthony Edwards scored 36 and Naz Reid had 18 for Minnesota, but the Wolves had no answers defensively. The Clippers (35-32) have won six of seven and three straight — they're surging in the West play-in race. Minnesota (39-26) has lost three in a row.",gameId:"LAC-MIN-20260311"},
  {homeTeam:"DEN",homeScore:129,awayTeam:"HOU",awayScore:93,status:"final",topPerformer:"Jamal Murray",topLine:"30 PTS · 11-21 FG · 3-4 3PM",recap:"Jamal Murray scored 30 points and Nikola Jokic posted his 25th triple-double of the season — 16 points, 13 assists, 12 rebounds in 30 minutes — as the Nuggets blew out the Rockets 129-93. Christian Braun added 19 on 8-of-9 shooting. Jokic's first half was historic: 6 points, 7 rebounds, 9 assists, and 5 steals — a stat combination not seen since 1996-97. Denver opened on a 17-4 run and led by as many as 40. Kevin Durant was held to just 11 points on 8 shots. The Nuggets (39-26) won the season series 3-1 over Houston and moved within a half-game in the standings. Houston (40-25) suffered their worst loss of the season.",gameId:"DEN-HOU-20260311"},
  {homeTeam:"UTA",homeScore:117,awayTeam:"NYK",awayScore:134,status:"final",topPerformer:"Jalen Brunson",topLine:"28 PTS · 8 AST · 3 STL",recap:"Jalen Brunson scored 28 points and led a furious comeback as the Knicks rallied from 18 down to beat the Jazz 134-117. Jordan Clarkson had 27, OG Anunoby added 22, and Karl-Anthony Towns contributed 21/7/7. New York was down 49-31 early in the second quarter before Brunson sparked a 20-4 run spanning the third and fourth quarters. The Knicks made 17 three-pointers and shot 52% from the field. Brice Sensabaugh scored 29 for Utah and Ace Bailey added 21, but the Jazz went cold after starting 11-of-13 from three. Keyonte George left with a right hamstring injury. New York (41-25) snapped a two-game skid.",gameId:"NYK-UTA-20260311"},
  {homeTeam:"CLE",homeScore:122,awayTeam:"ORL",awayScore:128,status:"final",topPerformer:"Paolo Banchero",topLine:"25 PTS · 8 REB · 7 AST",recap:"Paolo Banchero had 25 points, 8 rebounds, and 7 assists as the Magic beat the Cavaliers 128-122 to extend their winning streak to five games. Tristan da Silva scored 23, with 9 in the fourth quarter, and Desmond Bane hit a falling-out-of-bounds three-pointer with 17.4 seconds left to seal it. James Harden had 30 points and 8 assists for Cleveland, Donovan Mitchell added 25, and Evan Mobley had 18/13, but the Cavaliers have now lost five of nine. Orlando (35-28) moved into sole possession of 6th in the East. Cleveland (40-26) is slipping.",gameId:"ORL-CLE-20260311"},
  {homeTeam:"NOP",homeScore:122,awayTeam:"TOR",awayScore:111,status:"final",topPerformer:"Trey Murphy III",topLine:"28 PTS",recap:"Trey Murphy III scored 28 points and Dejounte Murray added 27 — his highest-scoring game since returning from a torn Achilles — as the Pelicans beat the Raptors 122-111. Zion Williamson added 19. Brandon Ingram scored 22 in his return to New Orleans after being traded to Toronto last February, and Immanuel Quickley had 25, but Toronto has now lost six of eight and dropped from 5th to 7th in the East. New Orleans (23-41) has won seven of ten despite their poor record.",gameId:"NOP-TOR-20260311"},
  {homeTeam:"SAC",homeScore:109,awayTeam:"CHA",awayScore:117,status:"final",topPerformer:"LaMelo Ball",topLine:"30 PTS · 20 in first half",recap:"LaMelo Ball scored 30 points — 20 in the first half — and the Hornets beat the Kings 117-109 in Sacramento. Miles Bridges had 26, including the alley-oop to Brandon Miller that gave Charlotte an 88-83 lead in the third. Rookie Kon Knueppel added 24 and Miller scored 20. DeMar DeRozan scored 39 for the Kings and passed Tim Duncan for 18th on the NBA's all-time scoring list with 26,505 points. Charlotte (32-33) got a critical road win in their play-in push.",gameId:"CHA-SAC-20260311"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 Players)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"51-13",indexScore:99.5,trend:"stable",keyStats:"Tied Wilt — 126 straight 20+ games",note:"Tonight is the night. SGA faces the Celtics at home on Prime Video with a chance to BREAK Wilt Chamberlain's 63-year-old record. He needs just 20 points for No. 127. During his streak, OKC is 102-24 (.810). The most anticipated individual game of the decade. 9:30 PM ET."},
  {rank:2,player:"Kawhi Leonard",team:"LAC",teamRecord:"35-32",indexScore:98.6,trend:"up",keyStats:"45 PTS · 15-20 FG · 6-9 3PM",note:"45 points on 75% shooting. Kawhi is playing at the highest level of his career in the last seven games — 6 wins in 7 games, with Leonard averaging 33+ points over that stretch. The Clippers started 6-21 and are now 35-32. Kawhi is the reason. If he stays healthy, LA is dangerous in the play-in."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",teamRecord:"48-17",indexScore:97.8,trend:"stable",keyStats:"39 PTS last game · faces Jokic tonight",note:"Wembanyama faces Jokic tonight for the first time in over a year. The Spurs are 48-17 with a 9-game winning streak. Wemby is coming off a 39-point, 8-three-pointer masterclass against Boston. This matchup — Wemby vs. Jokic — is appointment television."},
  {rank:4,player:"Bam Adebayo",team:"MIA",teamRecord:"37-29",indexScore:97.2,trend:"stable",keyStats:"83 PTS (Mar 10) — 2nd-most ever",note:"Still riding the wave of 83 points — the second-highest single-game total in NBA history. Miami has won six straight. Bam is a different player now — the world knows what he's capable of. The Heat are the most dangerous low seed in the East."},
  {rank:5,player:"Nikola Jokić",team:"DEN",teamRecord:"39-26",indexScore:95.4,trend:"up",keyStats:"16 PTS · 13 AST · 12 REB (triple-double)",note:"His 25th triple-double of the season in a 36-point blowout of Houston. Jokic's first half was historically unique — 6/7/9/5STL in one half. Denver won the season series over Houston 3-1. Faces Wembanyama and the Spurs tonight."},
  {rank:6,player:"Luka Dončić",team:"LAL",teamRecord:"40-25",indexScore:94.2,trend:"stable",keyStats:"31/11/11 last game · faces CHI tonight",note:"Coming off a triple-double sweep of the Timberwolves. Lakers host the Bulls tonight. Luka has been the best player on the Western Conference's 4th-best team and he's doing it without LeBron half the time."},
  {rank:7,player:"Jalen Brunson",team:"NYK",teamRecord:"41-25",indexScore:92.1,trend:"up",keyStats:"28 PTS · 8 AST · comeback from 18 down",note:"Led the Knicks back from 18 down in Utah with 28 and 8 assists. Brunson sparked a 20-4 run that buried the Jazz. New York (41-25) snapped their two-game skid. Brunson is the engine — when he's aggressive, the Knicks are elite."},
  {rank:8,player:"Paolo Banchero",team:"ORL",teamRecord:"35-28",indexScore:90.4,trend:"up",keyStats:"25 PTS · 8 REB · 7 AST",note:"25/8/7 to beat Cleveland. Orlando has won five straight and moved into sole possession of 6th in the East. Banchero is making an All-NBA case — averaging 27/10/6 over the win streak."},
  {rank:9,player:"Jamal Murray",team:"DEN",teamRecord:"39-26",indexScore:87.8,trend:"up",keyStats:"30 PTS · 11-21 FG",note:"30 points in the blowout of Houston — his most impactful game in weeks. Murray's ankle is clearly feeling better. When he and Jokic are both cooking, Denver is a title contender. Tonight they face the Spurs."},
  {rank:10,player:"LaMelo Ball",team:"CHA",teamRecord:"32-33",indexScore:84.6,trend:"up",keyStats:"30 PTS · 20 in first half",note:"30 points to beat Sacramento on the road. LaMelo, Bridges, Knueppel, and Miller combined for 100 of Charlotte's 117 points. The Hornets (32-33) are one game below .500 and fighting for a play-in spot. Ball is their engine."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Kawhi Leonard",team:"LAC",value:"45",context:"15-20 FG · 6-9 3PM — most dominant performance of the season in 153-128 rout"},
  {category:"Rebounds",player:"Evan Mobley",team:"CLE",value:"13",context:"18 PTS alongside — Cavaliers fell 128-122 to Orlando despite his effort"},
  {category:"Assists",player:"Nikola Jokić",team:"DEN",value:"13",context:"16 PTS · 12 REB (triple-double) — 25th of season in 36-point blowout of Houston"},
  {category:"3-Pointers",player:"Kawhi Leonard",team:"LAC",value:"6",context:"45 PTS total · 6-9 3PM — Clippers' best game of the season"},
  {category:"Steals",player:"Nikola Jokić",team:"DEN",value:"5",context:"Triple-double alongside — historic first half (6/7/9/5STL) not seen since 1996-97"},
  {category:"Blocks",player:"Paolo Banchero",team:"ORL",value:"3",context:"25 PTS · 8 REB · 7 AST — complete two-way performance vs. Cleveland"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Adrian Wojnarowski",quote:"Kawhi Leonard scored 45 points on 15-of-20 shooting against Minnesota. Forty-five points on 75 percent shooting. The Clippers started the season 6-21 and people wrote them off. They're 35-32 now. Kawhi has been playing at an MVP level for seven games straight. If this version of Kawhi shows up in the play-in, nobody wants to face the Clippers.",topic:"Kawhi's 45-point masterpiece revives Clippers' season",sentiment:"hot"},
  {outlet:"The Athletic",author:"Sam Amick",quote:"Nikola Jokic had 16 points, 13 assists, 12 rebounds, and 5 steals in 30 minutes. His first half was historically unique — nobody since 1996-97 had posted that stat combination in a single half. And then the Nuggets won by 36. When Jokic decides to assert himself, Denver is as good as anyone in the West. They own the tiebreaker over Houston now.",topic:"Jokic's historic first half in Denver's demolition of Houston",sentiment:"hot"},
  {outlet:"The Ringer",author:"Kevin O'Connor",quote:"The Knicks were down 18 in the first half against the Jazz and it felt like this team was falling apart. Then Brunson decided to take over. He scored 28 with 8 assists, sparked a 20-4 run, and the Knicks won by 17. That's a 35-point swing. When Brunson is aggressive, this team is different. He just needs KAT and Bridges to match his intensity consistently.",topic:"Brunson's 28-point comeback keeps Knicks afloat",sentiment:"hot"},
  {outlet:"CBS Sports",author:"Jack Maloney",quote:"Toronto has lost six of eight. They dropped from 5th to 7th in the East overnight. Brandon Ingram scored 22 in his return to New Orleans but the Raptors couldn't close. Quickley had 25 and it didn't matter. This team that looked so stable a month ago is spiraling at the worst possible time. The play-in is becoming a real possibility for Toronto.",topic:"Raptors in freefall — from 5th to 7th in the East",sentiment:"cold"},
  {outlet:"NBC Sports",author:"Kurt Helin",quote:"DeMar DeRozan scored 39 and passed Tim Duncan for 18th on the all-time scoring list and the Kings still lost by 8 to the Hornets. DeRozan is having a remarkable individual season on the worst team in the West. The Kings are 16-50. He deserves better.",topic:"DeRozan passes Duncan but Kings keep losing",sentiment:"cold"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"The Magic have won five straight. Paolo Banchero went to Cleveland and put up 25/8/7. Tristan da Silva scored 23 including the clutch shots. Desmond Bane hit a falling three-pointer to seal it. Orlando has the best young core in the East — Banchero, da Silva, Bane, Suggs. They're 35-28 and climbing. This team is going to be a nightmare matchup in the playoffs.",topic:"Magic's five-game streak and their terrifying young core",sentiment:"hot"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Keyonte George",team:"UTA",status:"day-to-day",injury:"Right hamstring",timeline:"Left game vs. NYK in 3rd quarter. MRI pending. Could miss significant time if it's a strain. Huge blow to Utah's development plans.",impact:"medium"},
  {player:"Joel Embiid",team:"PHI",status:"out",injury:"Right oblique strain",timeline:"Reevaluation around March 13. Missed 5 straight games. Sixers surviving without him somehow.",impact:"high"},
  {player:"Tyrese Maxey",team:"PHI",status:"out",injury:"Right finger tendon",timeline:"Out at least 3 weeks (announced March 10). Sixers missing their top three players.",impact:"high"},
  {player:"Stephen Curry",team:"GSW",status:"out",injury:"Runner's knee",timeline:"Still sidelined. Warriors 32-33 and below .500. No specific return date. Season on the brink.",impact:"high"},
  {player:"Ja Morant",team:"MEM",status:"out",injury:"Left elbow",timeline:"Still out. Grizzlies have lost 5 straight. No timetable. Memphis (33-32) in play-in danger.",impact:"high"},
  {player:"Tyler Herro",team:"MIA",status:"day-to-day",injury:"Quadriceps",timeline:"Missed Bam's 83-point game. Day-to-day. Heat have won 6 straight without him.",impact:"medium"},
  {player:"LeBron James",team:"LAL",status:"day-to-day",injury:"Elbow",timeline:"Sat out Lakers' last game. LA is 10-2 when Luka and Reaves play without him. May rest for playoffs.",impact:"medium"},
  {player:"Paul George",team:"PHI",status:"out",injury:"League suspension",timeline:"Still serving suspension. Duration unclear.",impact:"high"},
  {player:"Aaron Gordon",team:"DEN",status:"active",injury:"Hamstring (recovered)",timeline:"Played 22 minutes in the blowout of Houston. Managing his load as the Nuggets gear up for the stretch run.",impact:"low"},
  {player:"Cooper Flagg",team:"DAL",status:"active",injury:"Healthy",timeline:"Dallas has lost 8 straight. Flagg is healthy but the team around him is tanking.",impact:"low"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS (Tonight — Thursday)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"OKC",homeRecord:"51-13",awayTeam:"BOS",awayRecord:"43-22",time:"9:30 PM ET",tv:"Prime Video",spread:"OKC -6.5",overUnder:"226.5",keyMatchup:"Shai Gilgeous-Alexander vs. Jayson Tatum",storyline:"THE game of the year. Shai Gilgeous-Alexander can BREAK Wilt Chamberlain's all-time record of 126 consecutive 20-point games — a mark that has stood since 1963. SGA needs just 20 points for No. 127. He faces a Celtics team that has lost two straight, with Jaylen Brown's status uncertain after his ejection. Jayson Tatum will be in his fifth game back. During his streak, OKC is 102-24 (.810). This is the most anticipated regular-season game in years. All eyes on Paycom Center.",prediction:"OKC wins 119-112 — SGA breaks the record with 28+ points. The building erupts. Tatum scores 26 but this is SGA's coronation. History is written.",featured:true},
  {homeTeam:"SAS",homeRecord:"48-17",awayTeam:"DEN",awayRecord:"39-26",time:"9:00 PM ET",tv:"League Pass",spread:"SAS -5",overUnder:"224.5",keyMatchup:"Victor Wembanyama vs. Nikola Jokić",storyline:"The two most complete players in basketball meet for the first time in over a year. Wembanyama is coming off 39 with 8 threes against the Celtics. Jokic had a triple-double in 30 minutes last night in the blowout of Houston. The Spurs (48-17) have a 9-game winning streak. Denver is playing the second night of a back-to-back. This is a potential Western Conference Finals preview.",prediction:"SAS wins 116-110 — Wembanyama's home-court edge and Denver's fatigue give the Spurs the win. Jokic has 25/10/8 but Wemby matches him with 30/12.",featured:true},
  {homeTeam:"DET",homeScore:null,awayTeam:"PHI",awayScore:null,time:"7:00 PM ET",tv:"Prime Video",spread:"DET -8.5",overUnder:"218.5",keyMatchup:"Cade Cunningham vs. Cam Payne",storyline:"The East-leading Pistons host the depleted Sixers on Prime Video. Detroit (47-17) is looking to maintain their lead after snapping a 4-game skid. Philadelphia is without Embiid, Maxey, and George but Cam Payne (32 last game) and VJ Edgecombe (21) have been keeping them alive.",prediction:"DET wins 115-104 — Cunningham has another 20+ assist-heavy game. The Sixers fight but can't match Detroit's depth.",featured:false},
  {homeTeam:"ATL",homeRecord:"33-31",awayTeam:"BKN",awayRecord:"17-48",time:"7:30 PM ET",tv:"League Pass",spread:"ATL -10",overUnder:"220.5",keyMatchup:"Hawks streak vs. Nets",storyline:"The Hawks go for their eighth straight win against a Brooklyn team that got blown out by Detroit 138-100 last game. Atlanta's surge has pushed them to the edge of the play-in. Brooklyn is focused on development.",prediction:"ATL wins 118-105 — Hawks make it 8 in a row. Alexander-Walker and Johnson lead the way.",featured:false},
  {homeTeam:"LAL",homeRecord:"40-25",awayTeam:"CHI",awayRecord:"22-43",time:"10:30 PM ET",tv:"League Pass",spread:"LAL -12",overUnder:"228.5",keyMatchup:"Luka Dončić vs. Chicago Bulls",storyline:"The Lakers host the struggling Bulls. Luka is averaging a triple-double over his last three games. LeBron's status is uncertain. Chicago just beat the Warriors in OT but that's the exception to their miserable season.",prediction:"LAL wins 128-110 — Luka cruises. Reaves adds 22. The Lakers keep climbing.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Kon Knueppel",team:"CHA",statLine:"19.3 PPG · 5.4 RPG · 3.5 APG",note:"24 points in Charlotte's 117-109 road win at Sacramento. Knueppel was the Hornets' third-best scorer behind LaMelo's 30 and Bridges' 26, but his 24 on efficient shooting was critical to the win. The Hornets (32-33) are fighting for the play-in and Knueppel's consistency is the biggest reason for their competitiveness. ROY leader.",trend:"up"},
  {rank:2,player:"Cooper Flagg",team:"DAL",statLine:"18.7 PPG · 7.3 RPG · 4.2 APG",note:"Dallas was off Wednesday. The Mavericks have lost 8 straight and 18 of 20. Flagg's individual numbers remain elite for a rookie but he's playing on the worst team in the league. Team context matters for ROY voting and Knueppel has the edge.",trend:"down"},
  {rank:3,player:"VJ Edgecombe",team:"PHI",statLine:"12.6 PPG · 3.8 RPG",note:"21 points in his last game. With Maxey out 3+ weeks, Edgecombe is getting 30+ minutes and producing. Late-season surge could push him into the ROY conversation if he sustains it.",trend:"up"},
  {rank:4,player:"Dylan Harper",team:"SAS",statLine:"14.3 PPG · 4.2 APG · 3.9 RPG",note:"Contributing on a 48-17 team with a 9-game winning streak. Harper is learning behind Fox and Wembanyama. His ceiling is enormous and the winning environment is invaluable.",trend:"stable"},
  {rank:5,player:"Ace Bailey",team:"UTA",statLine:"13.1 PPG · 4.8 RPG",note:"21 points vs. the Knicks before Utah collapsed. Bailey has been showing flashes of his lottery pick potential. With George potentially missing time (hamstring), Bailey could see even more minutes.",trend:"up"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Kawhi Leonard",team:"LAC",action:"must-start",reason:"45 points on 15-20 shooting. Six of seven wins. Kawhi is playing at an MVP level and the Clippers are surging. He's a top-10 fantasy asset when healthy and right now he's the hottest player in the league.",urgency:"high"},
  {player:"Christian Braun",team:"DEN",action:"stream",reason:"19 points on 8-9 shooting in the blowout of Houston. Braun gets consistent minutes and when Denver is winning, he produces. Strong streaming option.",urgency:"medium"},
  {player:"Tristan da Silva",team:"ORL",action:"hold",reason:"23 points including 9 in the clutch fourth quarter vs. Cleveland. Da Silva is Orlando's second scorer behind Banchero and he's rising. Solid hold in 12+ team leagues.",urgency:"medium"},
  {player:"Jordan Clarkson",team:"NYK",action:"stream",reason:"27 points off the bench vs. Utah. Clarkson provides instant offense and when the Knicks need scoring punch, he delivers. Strong streaming option for scoring categories.",urgency:"medium"},
  {player:"Keyonte George",team:"UTA",action:"monitor",reason:"Left with a hamstring injury vs. NYK. MRI pending. If he misses time, his fantasy value drops to zero — but if it's minor, he's still a strong holds on a tanking Jazz team that gives him volume.",urgency:"high"}
];

// ═══════════════════════════════════════════════════════════
// STANDINGS
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:47,losses:17,pct:".734",gb:"—",streak:"W1",last10:"6-4",conf:"east"},
  {rank:2,team:"BOS",wins:43,losses:22,pct:".662",gb:"4.5",streak:"L2",last10:"7-3",conf:"east"},
  {rank:3,team:"NYK",wins:41,losses:25,pct:".621",gb:"7.0",streak:"W1",last10:"5-5",conf:"east"},
  {rank:4,team:"CLE",wins:40,losses:26,pct:".606",gb:"8.0",streak:"L1",last10:"5-5",conf:"east"},
  {rank:5,team:"ORL",wins:35,losses:28,pct:".556",gb:"11.5",streak:"W5",last10:"8-2",conf:"east"},
  {rank:6,team:"MIA",wins:37,losses:29,pct:".561",gb:"11.0",streak:"W6",last10:"8-2",conf:"east"},
  {rank:7,team:"TOR",wins:37,losses:27,pct:".578",gb:"10.5",streak:"L2",last10:"5-5",conf:"east"},
  {rank:8,team:"PHI",wins:34,losses:29,pct:".540",gb:"12.5",streak:"W1",last10:"4-6",conf:"east"},
  {rank:9,team:"ATL",wins:33,losses:31,pct:".516",gb:"14.0",streak:"W7",last10:"8-2",conf:"east"},
  {rank:10,team:"MIL",wins:27,losses:37,pct:".422",gb:"20.0",streak:"L2",last10:"3-7",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:51,losses:13,pct:".797",gb:"—",streak:"W7",last10:"9-1",conf:"west"},
  {rank:2,team:"SAS",wins:48,losses:17,pct:".738",gb:"3.5",streak:"W9",last10:"9-1",conf:"west"},
  {rank:3,team:"HOU",wins:40,losses:25,pct:".615",gb:"11.5",streak:"L1",last10:"6-4",conf:"west"},
  {rank:4,team:"LAL",wins:40,losses:25,pct:".615",gb:"11.5",streak:"W5",last10:"8-2",conf:"west"},
  {rank:5,team:"DEN",wins:39,losses:26,pct:".600",gb:"12.5",streak:"W1",last10:"5-5",conf:"west"},
  {rank:6,team:"MIN",wins:39,losses:26,pct:".600",gb:"12.5",streak:"L3",last10:"5-5",conf:"west"},
  {rank:7,team:"LAC",wins:35,losses:32,pct:".522",gb:"17.5",streak:"W3",last10:"7-3",conf:"west"},
  {rank:8,team:"DAL",wins:33,losses:32,pct:".508",gb:"18.5",streak:"L8",last10:"2-8",conf:"west"},
  {rank:9,team:"MEM",wins:33,losses:32,pct:".508",gb:"18.5",streak:"L5",last10:"3-7",conf:"west"},
  {rank:10,team:"PHX",wins:32,losses:32,pct:".500",gb:"19.0",streak:"W1",last10:"5-5",conf:"west"}
];
