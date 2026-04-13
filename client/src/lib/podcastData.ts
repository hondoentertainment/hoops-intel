// Podcast Companion — Daily Episode Blueprint
// Last updated: April 13, 2026
// Generated from today's Hoops Intel edition

export interface TalkingPoint {
  topic: string;
  segment: "opener" | "deep-dive" | "hot-take" | "rapid-fire" | "closer";
  duration: string;
  keyStats: string[];
  debateAngle: string;
  suggestedQuote: string;
  relevantPlayers: string[];
}

export interface PodcastCompanionData {
  date: string;
  episodeTitle: string;
  rundown: TalkingPoint[];
  coldOpen: string;
  socialClip: string;
  tweetThread: string[];
}

export const podcastCompanion: PodcastCompanionData = {
  date: "April 13, 2026",

  episodeTitle: "The Chef Is Back: Curry Returns, Reed Goes Perfect, and the Play-In Just Got Dangerous",

  coldOpen:
    "Seventy-three days. That's how long the NBA held its breath waiting for Stephen Curry to come back. And last night — in the final game of the regular season — he walked into Crypto.com Arena and dropped 24 points with four threes like he never left. Oh, and while that was happening? Paul Reed shot a perfect 11-for-11 in Detroit, Phoenix blew out the best team in basketball by 32 points, and Denver just kept winning — twelve straight to close the year. The regular season is officially dead. The play-in starts Tuesday. And folks, I am telling you right now — this postseason is going to be absolutely unhinged. Let's get into it.",

  rundown: [
    {
      topic: "Stephen Curry's 73-Day Return and What It Means for the Play-In",
      segment: "opener",
      duration: "8–10 minutes",
      keyStats: [
        "24 PTS · 4 3PM · 7-14 FG in 29 minutes — first game back after 73 days",
        "Warriors fell 115-110 to the Clippers despite Curry's performance",
        "Curry reportedly told teammates he feels 'the best I've felt since November'",
        "Golden State enters the play-in as the 10-seed at 37-45",
        "Wednesday's rematch with LAC is a winner-take-all elimination game",
        "Jimmy Butler remains out with a torn ACL — Curry is the entire show"
      ],
      debateAngle:
        "Is Golden State actually the most dangerous team in the play-in field now that Curry is healthy — or is one good performance after a 73-day layoff not enough to make them a genuine threat? Do the Warriors have enough around Curry to beat the Clippers twice, let alone survive into the first round?",
      suggestedQuote:
        "Here's the thing about Stephen Curry — you don't ease back into being Stephen Curry. You either ARE Stephen Curry or you're not. And last night, in game one back from a 73-day absence, the man knocked down four threes, played 29 minutes, and looked like he'd been playing all week. The Warriors went from a lottery footnote to the most interesting team in the tournament overnight.",
      relevantPlayers: [
        "Stephen Curry",
        "Bennedict Mathurin",
        "Jimmy Butler",
        "Bogdan Bogdanovic"
      ]
    },
    {
      topic: "Paul Reed's Perfect 11-for-11 Night and Detroit's Historic 60-Win Season",
      segment: "deep-dive",
      duration: "7–9 minutes",
      keyStats: [
        "Reed: 11-for-11 FG · 26 PTS · 3 STL · 3 BLK · +28 in just 22 minutes",
        "The odds of shooting perfect on 11+ field goal attempts in an NBA game are astronomically rare",
        "Cade Cunningham: 14 AST in 22 MIN — second game back from a collapsed lung",
        "Detroit finished 60-22 — their best record since the 2005-06 Ben Wallace era",
        "Pistons own the East's 1-seed and home-court advantage throughout the playoffs",
        "Detroit beat Indiana 133-121 to close the year on a dominant note"
      ],
      debateAngle:
        "Is the 2025-26 Detroit Pistons squad genuinely a championship-caliber team, or are they the best regular season story that gets exposed when the real competition starts? Cunningham is two games back from a collapsed lung, Reed is a reserve going perfect — can this team hold up for four playoff rounds against Boston, New York, and Cleveland?",
      suggestedQuote:
        "Paul Reed shot 11-for-11. Let that sink in. Not a layup line drill, not a free throw contest — eleven field goal attempts in an NBA game, and every single one went in. He also had three steals and three blocks. In twenty-two minutes. If you're building a highlight tape for the Pistons' season, you end it right there.",
      relevantPlayers: [
        "Paul Reed",
        "Cade Cunningham",
        "Jalen Duren",
        "Killian Hayes"
      ]
    },
    {
      topic: "Phoenix Just Torched the 1-Seed by 32 — Is OKC's Regular Season Success a Red Flag?",
      segment: "hot-take",
      duration: "6–8 minutes",
      keyStats: [
        "Phoenix 135, OKC 103 — a 32-point blowout despite Thunder owning the league's best record",
        "Jamaree Bouyea: 27 PTS · 9 AST · +37 — the game's best plus-minus",
        "Khaman Maluach: 18 PTS · 14 REB for Phoenix's second unit",
        "OKC finished 64-18 — the best record in basketball — but lost by 32 to reserves",
        "SGA and the Thunder's full rotation were all rested for the game",
        "Phoenix enters Tuesday's play-in opener vs Portland with genuine momentum"
      ],
      debateAngle:
        "Hot take: Does OKC getting blown out by 32 — even with reserves — actually matter as playoff bulletin board material? Opposing coaches and players notice these things. Does this game reveal anything about the Thunder's depth, or is this completely meaningless noise that we should all ignore? And seriously — is Phoenix a sleeper that nobody is taking seriously enough heading into this play-in?",
      suggestedQuote:
        "I know, I know — the Thunder rested everybody. SGA didn't play. Their whole rotation sat. But I'm sorry, you cannot lose to anybody in this league by 32 points without it meaning SOMETHING. Jamaree Bouyea had a +37 rating. The Suns looked sharp, connected, and hungry. Meanwhile OKC's second unit got cooked for three quarters. That's a data point. File it away.",
      relevantPlayers: [
        "Jamaree Bouyea",
        "Khaman Maluach",
        "Shai Gilgeous-Alexander",
        "Kevin Durant"
      ]
    },
    {
      topic: "Rapid Fire: Denver's 12-Game Streak, Barnes' Triple-Double, Knueppel's Record, and LeBron's Finale",
      segment: "rapid-fire",
      duration: "5–6 minutes",
      keyStats: [
        "Denver won 12 straight to close the season — longest streak of the Jokić era — clinching the West's 3-seed",
        "Julian Strawther: 25 PTS · 4-8 3PT in San Antonio · Jokić had 23 in just 18 minutes before being pulled",
        "Scottie Barnes: 18 PTS · 12 REB · 12 AST on 8-of-11 FG in Toronto's 35-point blowout of Brooklyn",
        "Kon Knueppel finished with 268 made threes — obliterating Keegan Murray's rookie record of 206 from 2022-23",
        "LeBron James: 18 PTS · 4 REB · 6 AST in 17 MIN alongside Bronny (11/1/4) as Lakers beat Jazz 131-107",
        "Miami dropped a season-high 143 points on Atlanta — Jaquez 26, Adebayo 25-10, Powell 25"
      ],
      debateAngle:
        "Which of these stories deserves more attention than it's getting: Denver's 12-game streak making them a legit title contender, Knueppel's shattered rookie three-point record as a ROY argument, or the LeBron-Bronny finale moment as a cultural landmark? Pick one and make the case.",
      suggestedQuote:
        "Real quick — can we spend just thirty seconds appreciating that Kon Knueppel made 268 threes as a rookie? The previous record was 206. He didn't just break the record, he lapped it by sixty-two makes. Meanwhile Scottie Barnes had a triple-double on 8-of-11 shooting and we're barely talking about it because there's too much other stuff happening. This was a wild night of basketball, people.",
      relevantPlayers: [
        "Julian Strawther",
        "Nikola Jokić",
        "Scottie Barnes",
        "Kon Knueppel",
        "LeBron James",
        "Bronny James",
        "Jaime Jaquez Jr.",
        "Bam Adebayo"
      ]
    },
    {
      topic: "Play-In Preview: Every Series, Every Storyline — What to Watch Starting Tuesday",
      segment: "closer",
      duration: "6–8 minutes",
      keyStats: [
        "East Play-In: (7) PHI vs (8) ORL on Tuesday · (9) CHA vs (10) MIA on Wednesday",
        "West Play-In: (7) PHX vs (8) POR on Tuesday · (9) LAC vs (10) GSW on Wednesday — Curry rematch",
        "First round of playoffs begins Saturday, April 18",
        "Cooper Flagg ROY favorite at -290 odds — Knueppel's record keeps race interesting",
        "Wembanyama fully healthy for San Antonio after precautionary rest — SAS drew DEN in Round 1",
        "Detroit's Cade Cunningham is day-to-day (collapsed lung) but available for Round 1 vs TBD"
      ],
      debateAngle:
        "Biggest first-round upset pick: Denver over San Antonio as the 3-seed, or Golden State — if they survive the play-in — knocking off a higher seed in the first round on the back of a fully healthy Curry? Which team scares you most as a potential bracket-breaker entering this postseason?",
      suggestedQuote:
        "Tuesday night, Phoenix and Portland tip off the play-in. Wednesday, Stephen Curry goes back to Crypto.com Arena for a rematch with the Clippers in an elimination game. I need you to understand — if Curry plays like he did last night and the Warriors win that game, we are going to be talking about Golden State for the entire first round of the playoffs. The regular season is a memory. The real season starts now. Don't miss a second of it.",
      relevantPlayers: [
        "Stephen Curry",
        "Paolo Banchero",
        "Jamaree Bouyea",
        "Cade Cunningham",
        "Victor Wembanyama",
        "Nikola Jokić",
        "Cooper Flagg",
        "Kon Knueppel"
      ]
    }
  ],

  socialClip:
    "Best clip for social: Open on the graphic — '73 DAYS' — then cut to Curry draining back-to-back threes in the third quarter, the arena erupting. Voice-over: 'Stephen Curry. 73 days. 24 points. 4 threes. 29 minutes. He's back.' End on his sideline reaction after the fourth three drops — pure joy, fist pump, pointing at a teammate. Caption: 'The most dangerous 10-seed in play-in history just showed up. 🍳🔥 #CurryIsBack #NBAPlayIn'. This clip will perform on every platform — the combo of the long absence, the immediate impact, and Curry's unmistakable personality gives it massive organic reach.",

  tweetThread: [
    "🚨 HOOPS INTEL — April 13, 2026 | The regular season is over. The play-in starts Tuesday. And last night was one of the wildest final nights in recent memory. Here's everything that happened and why it matters. Thread 🧵👇",

    "1/ CURRY IS BACK. 73 days after bilateral runner's knee shut him down, Stephen Curry returned last night: 24 PTS · 4 3PM · 7-14 FG in 29 minutes. Golden State still lost 115-110 to the Clippers, but nobody cares about that. Wednesday's elimination rematch is now the most must-watch game of the week. The 10-seed just became the most dangerous team in the play-in. 🍳",

    "2/ PERFECTION. Paul Reed went 11-for-11 from the field for 26 points in 22 minutes. Three steals. Three blocks. +28. The most makes without a miss in any game this entire season. Detroit finished 60-22 — East's 1-seed — with Cade Cunningham dropping 14 assists in 22 minutes in just his second game back from a collapsed lung. The Pistons are built different. 🏆",

    "3/ WAIT — PHOENIX DID WHAT? The Suns just beat OKC 135-103. A 32-point beatdown of the team with the league's best record. Yes, the Thunder rested everyone. But Jamaree Bouyea went for 27-9 with a +37. Phoenix looks DANGEROUS heading into Tuesday's play-in opener vs Portland. Also: Denver won their 12th straight to clinch the West's 3-seed. Jokić needed 18 minutes. 💥",

    "4/ RECORDS & MILESTONES from the season finale: Kon Knueppel finished with 268 made threes — crushing the rookie record of 206. Scottie Barnes had an 18-12-12 triple-double on 8-of-11 shooting. LeBron and Bronny James played side-by-side one last time in the regular season. Miami dropped 143 points. Cooper Flagg closed with a +21 to seal his ROY case.",

    "5/ THE BRACKET IS SET. Play-in tips TUESDAY: PHI vs ORL | PHX vs POR. Wednesday's elimination games: CHA vs MIA | LAC vs GSW (Curry rematch). Round 1 starts Saturday April 18. Every series has upset potential. Every team has a storyline. The real season starts now — and after last night, we have absolutely no idea what's coming next. Don't sleep on any of it. 🏀🔥 | Full breakdown: hoopsintel.net"
  ]
};
