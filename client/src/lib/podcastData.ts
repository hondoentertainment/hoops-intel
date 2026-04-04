// Podcast Companion — Daily Episode Blueprint
// Last updated: April 4, 2026
// Generated from today's Hoops Intel edition

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const podcastCompanion: PodcastCompanionData = {
  date: "April 4, 2026",
  episodeTitle:
    "Spurs Win 11 Straight and Tie OKC for the 1-Seed, Tatum Owns Detroit, and Luka Won't Stop",
  rundown: [
    {
      topic: "Spurs W11 — Wemby 28/12/5/4BLK Ties OKC for the 1-Seed at 59-18",
      segment: "opener",
      duration: "5-7 min",
      keyStats: [
        "Wembanyama: 28 PTS, 12 REB, 5 AST, 4 BLK in the Spurs' 11th straight win",
        "San Antonio is now 59-18, tied with OKC for the best record in the NBA",
        "The Spurs have not lost since mid-March — the longest active streak in the league",
        "Anthony Edwards scored 30 in the loss — Minnesota had no answer for Wemby",
        "OKC and SAS meet TONIGHT at 8:30 PM ET on ESPN with the 1-seed on the line",
      ],
      debateAngle:
        "Is San Antonio now the best team in the West? Eleven straight wins, Wemby putting up historic two-way numbers, and they've pulled completely even with OKC. Are the Spurs the team nobody wants to face in the playoffs, and is Wemby already the best player in basketball?",
      suggestedQuote:
        "Victor Wembanyama had 28, 12, 5, and 4 blocks last night and the Spurs won their eleventh straight game. They are now tied with OKC at 59-18 for the best record in basketball. And tonight — tonight they play each other. This is the game of the year.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Anthony Edwards",
        "Shai Gilgeous-Alexander",
        "Chet Holmgren",
      ],
    },
    {
      topic: "Tatum 29/7/5 and Boston Wins 6 Straight — The East Gap Is Growing",
      segment: "deep-dive",
      duration: "8-10 min",
      keyStats: [
        "Tatum: 29 PTS, 7 REB, 5 AST as Boston extended its win streak to 6",
        "Boston's gap over the East field has grown to 2 games during the streak",
        "Tatum is averaging 28.4 PPG over his last 8 games on elite efficiency",
        "The Celtics' defense has held opponents under 105 in 5 of the last 6",
        "Detroit had no answer for Tatum in the fourth quarter — he scored 12 in the final frame",
      ],
      debateAngle:
        "Has Tatum finally silenced the 'he disappears in big moments' narrative? Six straight wins, dominant fourth quarters, and the Celtics look like a team peaking at exactly the right time. Is Boston the clear East favorite, or are we sleeping on Cleveland and New York?",
      suggestedQuote:
        "Jayson Tatum dropped 29, 7, and 5 last night and Boston won their sixth straight. The Celtics' lead in the East has grown to two games. Tatum scored 12 in the fourth quarter against Detroit and made it look routine. This version of Tatum is the one that scares the rest of the conference.",
      relevantPlayers: [
        "Jayson Tatum",
        "Jaylen Brown",
        "Cade Cunningham",
        "Derrick White",
      ],
    },
    {
      topic: "Hot Take: The Lakers Are the Scariest Team in the West Playoffs Behind Their Big Two",
      segment: "hot-take",
      duration: "5-7 min",
      keyStats: [
        "Luka Doncic: 32 PTS, 7 REB, 9 AST in the Lakers' 4th straight win",
        "The Lakers are surging at exactly the right time — 4-game win streak heading into DEN tonight",
        "Luka and AD have combined for 60+ points in 3 of the last 4 games",
        "LA's net rating over the win streak is +9.2 — elite at both ends",
        "Maxey had 33 in a Philly bounce-back win, but the Lakers are the story in the West",
      ],
      debateAngle:
        "Hot take: the Lakers are the team nobody wants to draw in the West playoffs. Luka at 32/7/9, AD anchoring the defense, and a roster that's finally clicking — are they a dark horse to come out of the West? Or is this just a regular-season mirage that OKC and San Antonio will expose?",
      suggestedQuote:
        "Luka Doncic went for 32, 7, and 9 last night and the Lakers won their fourth straight. They play Denver tonight on TNT. If you're OKC or San Antonio, you do NOT want to see this Lakers team in the bracket. Luka and AD together when they're rolling is a nightmare matchup for anyone.",
      relevantPlayers: [
        "Luka Doncic",
        "Anthony Davis",
        "Tyrese Maxey",
        "Nikola Jokic",
      ],
    },
    {
      topic:
        "Rapid-Fire: Edwards 30 Not Enough, Maxey 33 Bounce-Back, Play-In Race Tightening",
      segment: "rapid-fire",
      duration: "4-5 min",
      keyStats: [
        "Anthony Edwards: 30 PTS in a loss to San Antonio — Minnesota's playoff position slipping",
        "Tyrese Maxey: 33 PTS in a Sixers bounce-back win — Philly showing life",
        "The East play-in picture is a mess — ATL and MIA play each other tonight",
        "CHA @ TOR tonight is a desperation game for two teams on the brink of elimination",
        "Edwards has now lost 3 of his last 5 despite averaging 28+ PPG in those games",
      ],
      debateAngle:
        "Is Edwards' Minnesota situation becoming a problem? He's scoring 30 a night and they keep losing. And is Maxey's 33-point bounce-back a sign that Philly has one more run in them, or just noise?",
      suggestedQuote:
        "Ant Edwards dropped 30 last night and it still wasn't enough against the Spurs. Minnesota is losing games that Edwards is dominating individually — that's a roster problem, not a star problem. Meanwhile Maxey went for 33 in a Sixers bounce-back. The East play-in race is about to get wild tonight.",
      relevantPlayers: [
        "Anthony Edwards",
        "Tyrese Maxey",
        "Trae Young",
        "Jimmy Butler",
      ],
    },
    {
      topic: "Tonight's Preview: OKC @ SAS for the 1-Seed, DEN @ LAL on TNT, CLE @ NYK Rematch",
      segment: "closer",
      duration: "3-4 min",
      keyStats: [
        "OKC @ SAS — 8:30 PM ET, ESPN — 1-seed showdown, both 59-18, game of the year",
        "DEN @ LAL — 10:00 PM ET, TNT — West 3 vs. 4, Luka vs. Jokic",
        "CLE @ NYK — 7:30 PM ET, TNT — East heavyweights rematch at MSG",
        "ATL @ MIA — 7:30 PM ET — play-in battle, loser is in serious trouble",
        "CHA @ TOR — 7:00 PM ET — play-in desperation, safe to skip",
      ],
      debateAngle:
        "OKC at San Antonio is the game of the regular season. Both teams at 59-18, the 1-seed on the line, Wemby vs. SGA on ESPN Friday night. If you watch one game tonight, this is it. But DEN-LAL on TNT at 10 is the nightcap worth staying up for.",
      suggestedQuote:
        "Tonight is the best Friday night slate of the entire season. OKC and San Antonio at 59-18 playing for the 1-seed on ESPN. Then Denver at the Lakers on TNT with the 3-4 seeds on the line. Then Cavs-Knicks at MSG to start your evening. Set your alarms. Cancel your plans. This is what the regular season is for.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Luka Doncic",
        "Nikola Jokic",
        "Jalen Brunson",
      ],
    },
  ],
  coldOpen:
    "What's up everybody — welcome back to the show. The San Antonio Spurs have won ELEVEN straight games. Victor Wembanyama went for 28, 12, 5, and 4 blocks last night to pull the Spurs dead even with OKC at 59-18. Jayson Tatum dropped 29, 7, and 5 as Boston won their sixth straight and opened a 2-game gap in the East. And Luka Doncic went for 32, 7, and 9 to push the Lakers' win streak to four. Oh — and tonight? OKC goes to San Antonio for the 1-seed. Denver goes to LA for the 3-4 matchup. And Cleveland visits the Knicks at MSG. This is the best Friday slate of the entire year. Let's get into it.",
  socialClip:
    "The Spurs opener is the clip. Wemby's 28/12/5/4BLK line, the 11-game win streak, the fact that they play OKC TONIGHT for the 1-seed — it's the most shareable story in basketball right now. The Wemby hype train meets real stakes, and the preview of tonight's showdown drives clicks and tune-in urgency.",
  tweetThread: [
    "1/ NEW EPISODE: Spurs win 11 straight, tie OKC at 59-18, and they play TONIGHT for the 1-seed. Plus Tatum owns Detroit, Luka won't stop, and the best Friday slate of the year. A thread.",
    "2/ Victor Wembanyama: 28 PTS, 12 REB, 5 AST, 4 BLK. The Spurs have won ELEVEN STRAIGHT. They're 59-18 — tied with OKC for the best record in basketball. And tonight they play each other on ESPN at 8:30. This is the game of the year.",
    "3/ Jayson Tatum went for 29/7/5 and Boston won their 6th straight. The Celtics' lead in the East is now 2 games. Tatum scored 12 in the fourth against Detroit. This version of Boston is peaking at exactly the right time.",
    "4/ Luka Doncic: 32/7/9. Lakers win 4 straight. They play Denver TONIGHT on TNT at 10 PM. The 3 vs. 4 seed in the West. Luka and AD together when they're rolling is a nightmare matchup for anyone in the bracket.",
    "5/ Ant Edwards dropped 30 in a loss to the Spurs. Maxey had 33 in a Philly bounce-back. The East play-in race gets wild tonight with ATL @ MIA. Individual brilliance everywhere, but winning is what matters now.",
    "6/ TONIGHT: OKC @ SAS on ESPN at 8:30 for the 1-seed. DEN @ LAL on TNT at 10 for West 3-4. CLE @ NYK on TNT at 7:30. This is the best Friday night slate of the season. Full breakdown in today's episode. Don't miss it.",
  ],
};
