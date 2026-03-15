// NBA Pulse — Daily Edition Data
// Last updated: March 15, 2026 (Vol. 2026 · No. 74)
// Live at: https://hoopsintel.net

// ═══════════════════════════════════════════════════════════
// EDITION METADATA
// ═══════════════════════════════════════════════════════════

export const pulseEdition = {date:"March 15, 2026",edition:"Vol. 2026 · No. 74"};

// ═══════════════════════════════════════════════════════════
// NARRATIVE OF THE NIGHT
// ═══════════════════════════════════════════════════════════

export const narrative = {headline:"Luka's OT Dagger. Reaves' Free-Throw Trick. Lakers Take the West's 3-Seed.",subhead:"Luka Doncic hits a game-winning jumper with 0.5 seconds left in overtime — and Austin Reaves forces the extra period by rebounding his own intentionally missed free throw — as the Lakers beat the Nuggets 127-125 on ABC. Both Luka and Jokic post triple-doubles. The Hawks win their 9th straight. Wembanyama returns with 32/12/8. The Magic beat the Heat for the 5th time this season.",body:["The NBA's game of the year unfolded on ABC. Austin Reaves missed a free throw on purpose with 1.9 seconds left in regulation, grabbed the rebound, and hit a floater to tie it — one of the most creative plays of the season. Then in overtime, Luka Doncic drained a fall-away jumper over Aaron Gordon with 0.5 seconds remaining to give the Lakers a 127-125 win over Denver. Luka finished with 30 points, 11 rebounds, and 13 assists — his 14th triple-double as a Laker. Reaves added 32 points, 7 rebounds, and 6 assists. Nikola Jokic countered with 24 points, 16 rebounds, and 14 assists — his 27th triple-double of the season. Aaron Gordon led Denver with 27 but Jamal Murray fouled out just 31 seconds into overtime after going 1-for-14 from the field. The Lakers improved to 42-25 and now own the tiebreaker over the Nuggets (41-27). Los Angeles is firmly in the 3-seed in the West — half a game ahead of Houston.","CJ McCollum scored 30 points on 10-of-18 shooting with 7 three-pointers — surpassing Paul Pierce for 16th place on the NBA's all-time made threes list — as the Hawks demolished the Bucks 122-99 for their ninth consecutive win. Jalen Johnson posted his 12th triple-double of the season with 23 points, 12 assists, and 10 rebounds. Milwaukee (27-39) has lost seven of their last eight and is fading fast from play-in contention. Atlanta (35-31) is the hottest team in basketball and nobody wants to see them in April.","Victor Wembanyama returned from a one-game absence to score 32 points, grab 12 rebounds, dish 8 assists, and block 3 shots as the Spurs beat the Hornets 115-102. He shot 13-for-24 and was 5-of-10 from three — he's shooting 46.9% from deep over his last five games. The Spurs (49-18) have won 17 of 19 and are 7½ games ahead of the 3-seed. In Orlando, Paolo Banchero had 27 points, 8 rebounds, and 7 assists as the Magic beat the Heat 121-117 for their seventh straight win and their fifth victory over Miami this season. Jayson Tatum had 20 and 14 rebounds in a season-high 32 minutes as the Celtics beat the Wizards 111-100 — Washington has now lost 11 straight. Quentin Grimes scored 28 as the shorthanded Sixers held off the Nets 104-97. And the 16-51 Kings shocked the Clippers 118-109 behind Russell Westbrook's 209th career triple-double (12/12/10), DeMar DeRozan's 27, and Precious Achiuwa's 25 points, 13 rebounds, and 4 blocks."]};

// ═══════════════════════════════════════════════════════════
// TICKER ITEMS
// ═══════════════════════════════════════════════════════════

export const tickerItems = [
  {text:"FINAL: LAL 127, DEN 125 OT — Luka 30/11/13 · game-winning jumper with 0.5 sec left · Reaves 32 (forced OT with missed FT trick)",type:"score"},
  {text:"FINAL: LAL 127, DEN 125 OT — Jokic 24/16/14 (27th triple-double) · Gordon 27 · Murray fouls out 1-14 FG",type:"score"},
  {text:"FINAL: ATL 122, MIL 99 — McCollum 30 (7 3PM · passes Paul Pierce all-time 3s) · Johnson 23/12/10 (12th triple-double) · Hawks 9th straight",type:"score"},
  {text:"FINAL: SAS 115, CHA 102 — Wembanyama 32/12/8/3BLK · 13-24 FG · 5-10 3PM · returns from ankle · Spurs 49-18",type:"score"},
  {text:"FINAL: ORL 121, MIA 117 — Banchero 27/8/7 · Magic 7th straight · 5-0 vs. Heat this season",type:"score"},
  {text:"FINAL: BOS 111, WAS 100 — Tatum 20/14 · Queta 24/10 · Wizards lose 11th straight",type:"score"},
  {text:"FINAL: PHI 104, BKN 97 — Grimes 28 · J. Edwards 19 · Sixers hold off Nets rally",type:"score"},
  {text:"FINAL: SAC 118, LAC 109 — Westbrook triple-double (12/12/10) · DeRozan 27 · Achiuwa 25/13/4BLK · 16-51 Kings shock Clippers",type:"score"},
  {text:"ALERT: Luka named Player of the Night — 30/11/13 with OT game-winner · 2nd straight 40+ performance night for LAL",type:"alert"},
  {text:"ALERT: Hawks have longest winning streak in the NBA — 9 straight — McCollum passes Pierce for 16th all-time in 3PM",type:"alert"},
  {text:"INJURY: Jamal Murray (DEN) — fouled out 31 seconds into OT · 1-14 FG on the night",type:"injury"},
  {text:"INJURY: Kawhi Leonard (LAC) — left game vs. Kings · Clippers blew 20-point lead without him",type:"injury"},
  {text:"INJURY: Joel Embiid (PHI) — oblique; still out · Maxey (finger) still out · George (suspension) still out",type:"injury"},
  {text:"INJURY: Stephen Curry (GSW) — runner's knee; still sidelined; no timetable",type:"injury"}
];

// ═══════════════════════════════════════════════════════════
// GAME RESULTS
// ═══════════════════════════════════════════════════════════

export const gameResults = [
  {homeTeam:"LAL",homeScore:127,awayTeam:"DEN",awayScore:125,status:"final (OT)",topPerformer:"Luka Dončić",topLine:"30 PTS · 11 REB · 13 AST · game-winning jumper (0.5 sec left in OT)",recap:"Luka Doncic hit a fall-away jumper over Aaron Gordon with 0.5 seconds left in overtime as the Lakers beat the Nuggets 127-125 on ABC. Austin Reaves forced OT with one of the most creative plays of the season — intentionally missing a free throw with 1.9 seconds left, grabbing the rebound, and hitting a floater to tie it. Reaves finished with 32 points, 7 rebounds, and 6 assists. Luka had 30/11/13 for his 14th triple-double as a Laker. Nikola Jokic countered with 24/16/14 — his 27th triple-double — but it wasn't enough. Aaron Gordon led Denver with 27. Jamal Murray fouled out 31 seconds into overtime after going 1-for-14 from the field. The Lakers (42-25) now own the tiebreaker over Denver (41-27) and hold the 3-seed.",gameId:"LAL-DEN-20260314"},
  {homeTeam:"ATL",homeScore:122,awayTeam:"MIL",awayScore:99,status:"final",topPerformer:"CJ McCollum",topLine:"30 PTS · 10-18 FG · 7-10 3PM · passed Paul Pierce (16th all-time 3s)",recap:"CJ McCollum scored 30 points on 10-of-18 shooting with 7 three-pointers — surpassing Paul Pierce for 16th place on the NBA's all-time made threes list — as the Hawks demolished the Bucks 122-99 for their ninth straight win. Jalen Johnson posted his 12th triple-double of the season with 23 points, 12 assists, and 10 rebounds over 35 minutes. Milwaukee (27-39) has lost seven of its last eight and is fading from play-in contention. Atlanta (35-31) continues the hottest streak in the NBA.",gameId:"ATL-MIL-20260314"},
  {homeTeam:"SAS",homeScore:115,awayTeam:"CHA",awayScore:102,status:"final",topPerformer:"Victor Wembanyama",topLine:"32 PTS · 12 REB · 8 AST · 3 BLK · 13-24 FG · 5-10 3PM",recap:"Victor Wembanyama returned from a one-game absence to dominate with 32 points, 12 rebounds, 8 assists, and 3 blocks. He shot 13-for-24 from the field and 5-for-10 from three — he's hitting 46.9% from deep over his last five games, going 23-for-49. Miles Bridges scored 22 and Kon Knueppel added 20 for Charlotte, which had won two straight and eight of 10. LaMelo Ball had 17 points. The Spurs (49-18) have won 17 of 19 and closed their longest homestand 5-1.",gameId:"SAS-CHA-20260314"},
  {homeTeam:"BOS",homeScore:111,awayTeam:"WAS",awayScore:100,status:"final",topPerformer:"Neemias Queta",topLine:"24 PTS · 10 REB · Tatum 20/14 in 32 min",recap:"Jayson Tatum had 20 points and 14 rebounds in a season-high 32 minutes and Neemias Queta had 24 points and 10 rebounds as the Celtics beat Washington 111-100, sending the Wizards to their 11th straight loss. Tatum posted his second double-double since his Achilles return. Boston (44-23) is rolling. Washington (15-51) can't buy a win.",gameId:"BOS-WAS-20260314"},
  {homeTeam:"MIA",homeScore:117,awayTeam:"ORL",awayScore:121,status:"final",topPerformer:"Paolo Banchero",topLine:"27 PTS · 8 REB · 7 AST",recap:"Paolo Banchero had 27 points, 8 rebounds, and 7 assists as the Magic beat the Heat 121-117 for their seventh straight win. Orlando is now 5-0 against Miami this season and has established themselves as the dominant team in Florida. Bam Adebayo led Miami with 23 points, 5 rebounds, and 6 assists but the Heat's 8-game winning streak (including the March 12 win over Milwaukee) came to an end. Orlando (37-28) has surged into the 5-seed. Miami (38-30) drops to 6th.",gameId:"ORL-MIA-20260314"},
  {homeTeam:"PHI",homeScore:104,awayTeam:"BKN",awayScore:97,status:"final",topPerformer:"Quentin Grimes",topLine:"28 PTS · 8 REB · 4 AST (season-high)",recap:"Quentin Grimes scored a season-high 28 points as the Sixers held off the Nets 104-97 in a game they led by 28 at one point. Philadelphia played without Embiid (oblique), Maxey (finger), Oubre (elbow), and George (suspension). Justin Edwards had 19 points with 3 steals and 2 blocks. Danny Wolf was the only Brooklyn starter in double figures with 15 points and 10 rebounds. Philadelphia (35-30) got a much-needed win. Brooklyn (17-50) continues to struggle.",gameId:"PHI-BKN-20260314"},
  {homeTeam:"LAC",homeScore:109,awayTeam:"SAC",awayScore:118,status:"final",topPerformer:"Russell Westbrook",topLine:"12 PTS · 12 REB · 10 AST · 4 STL (209th career triple-double)",recap:"Russell Westbrook posted his 209th career triple-double with 12 points, 12 rebounds, 10 assists, and 4 steals as the 16-51 Kings stunned the Clippers 118-109. DeMar DeRozan scored 27 with 7 assists and Precious Achiuwa had 25 points, 13 rebounds, and 4 blocks. The Kings led 68-54 at halftime, saw the Clippers rally to within 103-100 in the fourth, then outscored LA 15-9 down the stretch. Kawhi Leonard had 31 before leaving the game. The Clippers (35-33) had their 4-game winning streak snapped on a back-to-back. Sacramento (17-51) pulled off one of the biggest upsets of the season.",gameId:"SAC-LAC-20260314"}
];

// ═══════════════════════════════════════════════════════════
// PULSE INDEX (Top 10 Players)
// ═══════════════════════════════════════════════════════════

export const pulseIndex = [
  {rank:1,player:"Luka Dončić",team:"LAL",teamRecord:"42-25",indexScore:99.5,trend:"up",keyStats:"30 PTS · 11 REB · 13 AST · OT game-winner",note:"51 points on Thursday. OT game-winner on Saturday. Back-to-back performances that define a generational talent. Luka hit a fall-away over Gordon with 0.5 seconds left to beat the Nuggets 127-125. The Lakers now own the tiebreaker and the 3-seed in the West. He has 14 triple-doubles as a Laker. This is his conference now."},
  {rank:2,player:"Shai Gilgeous-Alexander",team:"OKC",teamRecord:"52-15",indexScore:99.2,trend:"stable",keyStats:"127-game streak · 52-15 · MVP favorite",note:"The record belongs to him. SGA has the best record in the NBA, the 20-point streak record, and the MVP conversation locked up. OKC didn't play tonight but the Thunder have won 8 straight and are 37 games over .500. The most dominant season since Curry's 73-9 year."},
  {rank:3,player:"Victor Wembanyama",team:"SAS",teamRecord:"49-18",indexScore:98.1,trend:"up",keyStats:"32 PTS · 12 REB · 8 AST · 3 BLK",note:"Returned from ankle soreness and immediately dropped 32/12/8/3 on 13-24 shooting and 5-10 from three. He's shooting 46.9% from deep over his last 5 games. The Spurs have won 17 of 19 and are 49-18. Wemby is the most terrifying two-way player in the league."},
  {rank:4,player:"Nikola Jokić",team:"DEN",teamRecord:"41-27",indexScore:96.8,trend:"down",keyStats:"24 PTS · 16 REB · 14 AST (triple-double in loss)",note:"27th triple-double of the season in a heartbreaking OT loss to the Lakers. Jokic did everything — 24/16/14 — but Murray going 1-14 and fouling out 31 seconds into OT killed Denver. The Nuggets (41-27) now trail the Lakers in the standings and lost the tiebreaker."},
  {rank:5,player:"Austin Reaves",team:"LAL",teamRecord:"42-25",indexScore:95.4,trend:"up",keyStats:"32 PTS · 7 REB · 6 AST · forced OT with missed FT trick",note:"One of the most clutch plays in NBA history. Reaves intentionally missed a free throw with 1.9 seconds left, grabbed his own rebound, and hit a floater to tie it. Then Luka won it in OT. Reaves had 32/7/6. He's the perfect second star next to Luka."},
  {rank:6,player:"CJ McCollum",team:"ATL",teamRecord:"35-31",indexScore:94.7,trend:"up",keyStats:"30 PTS · 7-10 3PM · passed Paul Pierce all-time",note:"30 points with 7 threes in the Hawks' 9th straight win. Surpassed Paul Pierce for 16th on the all-time made three-pointers list. McCollum has been reborn in Atlanta — 9 straight wins with no signs of slowing down."},
  {rank:7,player:"Jalen Johnson",team:"ATL",teamRecord:"35-31",indexScore:93.1,trend:"up",keyStats:"23 PTS · 12 AST · 10 REB (12th triple-double)",note:"12th triple-double of the season as the Hawks destroyed the Bucks by 23. Johnson is the engine of Atlanta's 9-game winning streak. At 23 years old, he's one of the most improved players in the league — averaging near a triple-double during the streak."},
  {rank:8,player:"Paolo Banchero",team:"ORL",teamRecord:"37-28",indexScore:92.4,trend:"up",keyStats:"27 PTS · 8 REB · 7 AST · Magic 7th straight",note:"27/8/7 to beat Miami for the fifth time this season. The Magic have won 7 straight and Banchero is playing like a franchise cornerstone. Orlando is 5-0 against the Heat — complete domination of the Florida rivalry."},
  {rank:9,player:"Jayson Tatum",team:"BOS",teamRecord:"44-23",indexScore:90.6,trend:"up",keyStats:"20 PTS · 14 REB · 32 minutes (season-high)",note:"Second double-double since his Achilles return. Tatum is ramping up — 32 minutes is his highest since coming back. The Celtics are winning and Tatum is getting stronger. Boston (44-23) is 1.5 games back of Detroit for the 1-seed."},
  {rank:10,player:"Russell Westbrook",team:"SAC",teamRecord:"17-51",indexScore:87.3,trend:"up",keyStats:"12 PTS · 12 REB · 10 AST · 4 STL (209th triple-double)",note:"209th career triple-double in one of the season's biggest upsets. The 16-51 Kings beat the Clippers 118-109. Westbrook is still Westbrook — the triple-double machine doesn't care about his team's record."}
];

// ═══════════════════════════════════════════════════════════
// STAT LEADERS
// ═══════════════════════════════════════════════════════════

export const statLeaders = [
  {category:"Points",player:"Victor Wembanyama",team:"SAS",value:"32",context:"12 REB · 8 AST · 3 BLK · 13-24 FG · 5-10 3PM — dominant return from ankle"},
  {category:"Rebounds",player:"Nikola Jokić",team:"DEN",value:"16",context:"24 PTS · 14 AST (triple-double) — 127-125 OT loss to Lakers"},
  {category:"Assists",player:"Nikola Jokić",team:"DEN",value:"14",context:"24 PTS · 16 REB — 27th triple-double of the season"},
  {category:"3-Pointers",player:"CJ McCollum",team:"ATL",value:"7",context:"30 PTS · 7-10 3PM — surpassed Paul Pierce for 16th all-time in 3PM"},
  {category:"Steals",player:"Russell Westbrook",team:"SAC",value:"4",context:"12/12/10 triple-double — 209th career — in upset win over Clippers"},
  {category:"Blocks",player:"Precious Achiuwa",team:"SAC",value:"4",context:"25 PTS · 13 REB — Kings shock Clippers 118-109"}
];

// ═══════════════════════════════════════════════════════════
// MEDIA REACTIONS
// ═══════════════════════════════════════════════════════════

export const mediaReactions = [
  {outlet:"ESPN",author:"Malika Andrews",quote:"Austin Reaves intentionally bricked a free throw, grabbed his own rebound, and hit a floater to tie the game with 1.9 seconds left. Then Luka hit the game-winner in OT. That's not basketball — that's performance art. The Lakers are the 3-seed and they have the most entertaining team in the NBA.",topic:"Reaves' free-throw trick and Luka's OT game-winner beat the Nuggets",sentiment:"hot"},
  {outlet:"The Athletic",author:"Sam Amick",quote:"Luka had 30/11/13 with the game-winning shot. Jokic had 24/16/14 and still lost. Jamal Murray went 1-for-14 and fouled out 31 seconds into overtime. This game was an instant classic and a devastating loss for Denver. The Nuggets now trail the Lakers in the standings and lost the tiebreaker. This might be the game that decides the 3-seed.",topic:"Lakers-Nuggets OT thriller reshapes the Western Conference",sentiment:"hot"},
  {outlet:"NBC Sports",author:"Kurt Helin",quote:"Wembanyama came back from a game off and dropped 32/12/8/3 on 13-24 shooting. He's shooting 47% from three over his last five games. The Spurs are 49-18. They've won 17 of 19. And Wemby looks like he's in a completely different gear heading into the playoffs. The MVP race between SGA and Wemby is closer than people think.",topic:"Wembanyama's dominant return — 32/12/8 with 5-10 from three",sentiment:"hot"},
  {outlet:"The Ringer",author:"Bill Simmons",quote:"The Hawks have won NINE straight. Nine! CJ McCollum passed Paul Pierce on the all-time three-pointers list. Jalen Johnson had his 12th triple-double. They destroyed the Bucks by 23. This is the scariest team in the play-in and I wouldn't want to see them in a first-round series. Atlanta is for real.",topic:"Hawks' 9-game streak is the NBA's most surprising story",sentiment:"hot"},
  {outlet:"CBS Sports",author:"Brad Botkin",quote:"The Magic are 5-0 against the Heat this season. Five and zero. Paolo Banchero had 27/8/7 and Orlando has won 7 straight. They've completely owned the Florida rivalry and they're doing it with Banchero playing like an All-NBA player. This team is a real threat in the East.",topic:"Magic dominate Heat for 5th time — Banchero leads 7-game streak",sentiment:"hot"},
  {outlet:"Bleacher Report",author:"Jake Fischer",quote:"Jamal Murray went 1-for-14 and fouled out 31 seconds into overtime. One for fourteen. In a game the Nuggets lost by 2 in OT. Murray's playoff reputation is legendary but his regular season has been wildly inconsistent. Denver needs him to be better — they just lost the tiebreaker to the Lakers.",topic:"Murray's 1-14 nightmare costs Denver the tiebreaker",sentiment:"cold"}
];

// ═══════════════════════════════════════════════════════════
// INJURY UPDATES
// ═══════════════════════════════════════════════════════════

export const injuryUpdates = [
  {player:"Victor Wembanyama",team:"SAS",status:"active",injury:"Right ankle (returned)",timeline:"Returned vs. Charlotte with 32/12/8/3BLK in 24 FGA. Back to full dominance. Spurs (49-18).",impact:"low"},
  {player:"Kawhi Leonard",team:"LAC",status:"day-to-day",injury:"Left ankle/game exit",timeline:"Left game vs. Kings. Clippers rallied from down 20 without him but ultimately lost 118-109. Status for Monday TBD.",impact:"high"},
  {player:"Jamal Murray",team:"DEN",status:"active",injury:"Fouled out (1-14 FG)",timeline:"Fouled out 31 seconds into OT after going 1-for-14 in the 127-125 loss to the Lakers. Not injured but worst game of the season.",impact:"medium"},
  {player:"Joel Embiid",team:"PHI",status:"out",injury:"Right oblique strain",timeline:"Still out. Sixers beat Nets without him, Maxey, Oubre, and George. No timetable.",impact:"high"},
  {player:"Tyrese Maxey",team:"PHI",status:"out",injury:"Right finger tendon",timeline:"Out at least 3 weeks. Grimes (28) stepping up in his absence.",impact:"high"},
  {player:"Stephen Curry",team:"GSW",status:"out",injury:"Runner's knee",timeline:"Still sidelined. No timetable for return.",impact:"high"},
  {player:"Ja Morant",team:"MEM",status:"out",injury:"Left elbow",timeline:"Still out. Grizzlies lost to Pistons 110-126 on Friday. No timetable.",impact:"high"},
  {player:"Paul George",team:"PHI",status:"out",injury:"League suspension",timeline:"Still serving suspension.",impact:"high"},
  {player:"LeBron James",team:"LAL",status:"active",injury:"Healthy",timeline:"Available but did not start vs. Nuggets — came off bench with key minutes in OT thriller.",impact:"low"},
  {player:"Cooper Flagg",team:"DAL",status:"active",injury:"Healthy",timeline:"25 points in 138-105 loss to Cleveland on Friday. ROY candidate playing well despite team struggles.",impact:"low"}
];

// ═══════════════════════════════════════════════════════════
// GAME PREVIEWS (Tonight — Sunday)
// ═══════════════════════════════════════════════════════════

export const gamePreviews = [
  {homeTeam:"OKC",homeRecord:"52-15",awayTeam:"DET",awayRecord:"48-18",time:"3:30 PM ET",tv:"ABC",spread:"OKC -6.5",overUnder:"218.5",keyMatchup:"SGA vs. Cade Cunningham",storyline:"The NBA's two best teams collide in a potential Finals preview. Oklahoma City (52-15) has won 8 straight behind SGA's record-breaking streak. Detroit (48-18) leads the East. SGA vs. Cunningham is the most compelling point guard matchup in the league. Can the Pistons hang with the Thunder on the road?",prediction:"OKC wins 112-105 — SGA has 30+ as the Thunder protect homecourt against the East's best.",featured:true},
  {homeTeam:"SAC",homeRecord:"17-51",awayTeam:"UTA",awayRecord:"20-46",time:"6:00 PM ET",tv:"League Pass",spread:"SAC -2",overUnder:"224.5",keyMatchup:"Westbrook vs. Ace Bailey",storyline:"Two lottery-bound teams meet in Sacramento. The Kings are riding high after shocking the Clippers behind Westbrook's triple-double. Utah has lost 4 of 5. Tank positioning is at stake — both teams want lottery luck.",prediction:"SAC wins 116-110 — Westbrook stays hot and the Kings' momentum carries over from the Clippers upset.",featured:false},
  {homeTeam:"TOR",homeRecord:"37-28",awayTeam:"DEN",awayRecord:"41-27",time:"6:00 PM ET",tv:"League Pass",spread:"DEN -2.5",overUnder:"225.5",keyMatchup:"Jokic vs. Scottie Barnes",storyline:"Denver looks to bounce back from the heartbreaking OT loss to the Lakers. Murray's 1-14 night was a disaster — can the Nuggets reset on the road? Toronto just beat the Suns behind Ingram's 36 and is fighting for the 7-seed.",prediction:"DEN wins 120-114 — Jokic has another triple-double as the Nuggets avoid a back-to-back loss.",featured:false}
];

// ═══════════════════════════════════════════════════════════
// ROOKIE WATCH
// ═══════════════════════════════════════════════════════════

export const rookieWatch = [
  {rank:1,player:"Kon Knueppel",team:"CHA",statLine:"19.3 PPG · 5.4 RPG · 3.5 APG",note:"20 points in the 115-102 loss to San Antonio. Knueppel continues to produce even in losses — 20+ in three of his last five. Charlotte's 32-34 record with a play-in spot gives him the best team context among rookies. ROY frontrunner.",trend:"stable"},
  {rank:2,player:"Cooper Flagg",team:"DAL",statLine:"18.6 PPG · 7.3 RPG · 4.2 APG",note:"25 points in the 138-105 blowout loss at Cleveland. Flagg is scoring efficiently but Dallas can't win. The Mavericks snapped their 8-game skid on Thursday but lost by 33 to Cleveland on Friday. Individual numbers are elite but team context hurts.",trend:"stable"},
  {rank:3,player:"VJ Edgecombe",team:"PHI",statLine:"12.8 PPG · 3.8 RPG",note:"With Maxey, Embiid, Oubre, and George all out, Edgecombe is getting 30+ minutes. His athleticism is translating but shooting consistency remains the question. The Sixers need him to be a contributor.",trend:"stable"},
  {rank:4,player:"Stephon Castle",team:"SAS",statLine:"12.4 PPG · 4.1 RPG · 3.8 APG",note:"DNP Saturday as Wembanyama returned. But his 30/11/10 triple-double on Thursday showed star potential. Castle's usage will fluctuate based on Wemby's health, but the ceiling is obvious.",trend:"stable"},
  {rank:5,player:"Justin Edwards",team:"PHI",statLine:"11.2 PPG · 3.5 RPG",note:"19 points with 3 steals and 2 blocks vs. Brooklyn. Edwards is emerging as a two-way wing in the Sixers' depleted rotation. His defensive instincts are NBA-ready.",trend:"up"}
];

// ═══════════════════════════════════════════════════════════
// FANTASY ALERTS
// ═══════════════════════════════════════════════════════════

export const fantasyAlerts = [
  {player:"Austin Reaves",team:"LAL",action:"must-start",reason:"32/7/6 with the game-tying play in regulation. Reaves is a top-30 fantasy player and the perfect complement to Luka. Start him every night.",urgency:"high"},
  {player:"CJ McCollum",team:"ATL",action:"add",reason:"30 points with 7-10 from three in the Hawks' 9th straight win. McCollum is thriving in Atlanta's system. Must-add in all formats during this streak.",urgency:"high"},
  {player:"Jalen Johnson",team:"ATL",action:"must-start",reason:"12th triple-double (23/12/10). Johnson is averaging near a triple-double during the 9-game winning streak. Top-20 fantasy value right now.",urgency:"high"},
  {player:"Quentin Grimes",team:"PHI",action:"stream",reason:"Season-high 28 points. With Maxey, Embiid, Oubre, and George all out, Grimes is the primary scorer. Strong streaming option as long as the Sixers are shorthanded.",urgency:"medium"},
  {player:"Precious Achiuwa",team:"SAC",action:"stream",reason:"25 points, 13 rebounds, 4 blocks vs. Clippers. Achiuwa is getting extended run on the Kings and producing big numbers. Deep league add.",urgency:"medium"}
];

// ═══════════════════════════════════════════════════════════
// STANDINGS
// ═══════════════════════════════════════════════════════════

export const eastStandings = [
  {rank:1,team:"DET",wins:48,losses:18,pct:".727",gb:"—",streak:"W1",last10:"7-3",conf:"east"},
  {rank:2,team:"BOS",wins:44,losses:23,pct:".657",gb:"3.5",streak:"W1",last10:"6-4",conf:"east"},
  {rank:3,team:"NYK",wins:42,losses:25,pct:".627",gb:"6.5",streak:"W2",last10:"6-4",conf:"east"},
  {rank:4,team:"CLE",wins:41,losses:26,pct:".612",gb:"7.5",streak:"W1",last10:"5-5",conf:"east"},
  {rank:5,team:"ORL",wins:37,losses:28,pct:".569",gb:"10.5",streak:"W7",last10:"9-1",conf:"east"},
  {rank:6,team:"MIA",wins:38,losses:30,pct:".559",gb:"11.0",streak:"L1",last10:"8-2",conf:"east"},
  {rank:7,team:"TOR",wins:38,losses:28,pct:".576",gb:"10.0",streak:"W1",last10:"6-4",conf:"east"},
  {rank:8,team:"ATL",wins:35,losses:31,pct:".530",gb:"13.0",streak:"W9",last10:"9-1",conf:"east"},
  {rank:9,team:"PHI",wins:35,losses:30,pct:".538",gb:"12.5",streak:"W1",last10:"4-6",conf:"east"},
  {rank:10,team:"MIL",wins:27,losses:39,pct:".409",gb:"21.0",streak:"L4",last10:"1-9",conf:"east"}
];

export const westStandings = [
  {rank:1,team:"OKC",wins:52,losses:15,pct:".776",gb:"—",streak:"W8",last10:"9-1",conf:"west"},
  {rank:2,team:"SAS",wins:49,losses:18,pct:".731",gb:"3.0",streak:"W1",last10:"8-2",conf:"west"},
  {rank:3,team:"LAL",wins:42,losses:25,pct:".627",gb:"10.0",streak:"W7",last10:"9-1",conf:"west"},
  {rank:4,team:"HOU",wins:41,losses:25,pct:".621",gb:"10.5",streak:"W1",last10:"6-4",conf:"west"},
  {rank:5,team:"DEN",wins:41,losses:27,pct:".603",gb:"11.5",streak:"L1",last10:"6-4",conf:"west"},
  {rank:6,team:"MIN",wins:40,losses:26,pct:".606",gb:"11.5",streak:"W1",last10:"6-4",conf:"west"},
  {rank:7,team:"LAC",wins:35,losses:33,pct:".515",gb:"17.5",streak:"L1",last10:"6-4",conf:"west"},
  {rank:8,team:"DAL",wins:34,losses:33,pct:".507",gb:"18.0",streak:"L1",last10:"3-7",conf:"west"},
  {rank:9,team:"PHX",wins:33,losses:33,pct:".500",gb:"19.5",streak:"L1",last10:"6-4",conf:"west"},
  {rank:10,team:"POR",wins:32,losses:35,pct:".478",gb:"20.5",streak:"W1",last10:"5-5",conf:"west"}
];
