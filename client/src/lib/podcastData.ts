// Podcast Companion — Daily Episode Blueprint
// Last updated: May 18, 2026
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
  date: "May 18, 2026",

  episodeTitle:
    "The Blowout Heard Round the Playoffs: Cleveland's Road Game 7 Massacre, the ECF Is Set, and SGA vs. Wemby Tips Tonight",

  coldOpen:
    "Thirty-one points. On the road. In a Game 7. Let that breathe for a second. " +
    "Cleveland walked into Little Caesars Arena on Saturday night — a building that was supposed to be a fortress — " +
    "and they didn't just win, they obliterated Detroit by thirty-one points in front of a crowd that went silent by halftime. " +
    "Evan Mobley dropped a 21-12-6 masterpiece. Sam Merrill — yes, SAM MERRILL — came off the bench and hit five threes. " +
    "And Cade Cunningham, who averaged 27 points through the first six games of this series, " +
    "went zero-for-seven from three and minus-32 while his season died in front of his home fans. " +
    "The Eastern Conference Finals are set: New York versus Cleveland. " +
    "And tonight? Tonight the Western Conference Finals begin — SGA against Wembanyama, Oklahoma City against San Antonio, " +
    "eight-thirty Eastern on NBC. The conference finals are fully locked in, people. " +
    "This is Hoops Intel. Let's get into it.",

  rundown: [
    {
      topic:
        "Cleveland's 31-Point Road Game 7 — The Most Dominant Elimination Statement of the 2026 Playoffs",
      segment: "opener",
      duration: "9 minutes",
      keyStats: [
        "CLE 125, DET 94 — 31-point margin, one of the most dominant road Game 7 wins in modern playoff history",
        "Evan Mobley: 21 PTS (7-of-10 FG), 12 REB, 6 AST, +31 — game-high plus-minus",
        "Sam Merrill: 23 PTS off bench, 5-of-8 from three, +22 — series-high reserve performance",
        "Donovan Mitchell: 26 PTS, 8 AST, 0 TO — bounced back from a 6-of-20 Game 6 disaster",
        "Jarrett Allen: 23 PTS on 8-of-14 — dominant interior presence all night",
        "Cade Cunningham: 13 PTS on 5-of-16, 0-of-7 from three, -32 — series average was 27.0 PPG through Game 6",
      ],
      debateAngle:
        "Is this the moment we officially flip the Cleveland hierarchy? Mobley had the highest-impact Game 7 performance of any player this postseason — does he wake up Monday as the Cavaliers' best player, ahead of Donovan Mitchell?",
      suggestedQuote:
        "Here's the thing that gets me about this game — the box score almost undersells how complete a performance this was. " +
        "Mobley was unstoppable on the interior, he was facilitating from the high post, and he anchored a defense that held a 94-win regular-season team to 94 points in an elimination game on their own floor. " +
        "He is 24 years old. Twenty-four. This was a coming-of-age moment that we are going to be referencing for years.",
      relevantPlayers: [
        "Evan Mobley",
        "Donovan Mitchell",
        "Sam Merrill",
        "Jarrett Allen",
        "James Harden",
        "Cade Cunningham",
      ],
    },

    {
      topic:
        "The Sam Merrill Paradox and James Harden's Invisible Genius — Cleveland's Supporting Cast Carried the Moment",
      segment: "deep-dive",
      duration: "8 minutes",
      keyStats: [
        "Sam Merrill entered Game 7 averaging just 7.4 PPG in the 2026 postseason — exploded for 23 on 5-of-8 from three",
        "Merrill's 5-of-8 three-point game: highest single-game three-point total by any reserve in a Game 7 this postseason",
        "James Harden: 9 PTS on 2-of-10 FG, 6 AST — but finished +31, the same as Mobley",
        "Harden's plus-31 on 2-of-10 shooting is among the most impactful bad-shooting nights in recent postseason memory",
        "No Piston starter finished with a positive plus-minus — Cunningham at -32 was the worst on the floor",
        "Cleveland's bench outscored Detroit's bench 38-14 — the reserve differential decided the margin",
      ],
      debateAngle:
        "James Harden scored 9 points and finished plus-31. Is that the most useful a bad-shooting-night has ever been in a playoff game, or does it just confirm that the modern Harden's floor-general identity is more sustainable — and more dangerous — than the volume-scoring version Detroit was preparing for?",
      suggestedQuote:
        "Harden's line is the kind of thing that breaks box-score brains. " +
        "Two-of-ten. Nine points. Plus-31. How? He controlled the tempo, he freed up Mobley and Mitchell in pick-and-roll actions, " +
        "he made Detroit defend him on the perimeter even when he wasn't scoring, and he essentially ran a perfectly executed game plan " +
        "without needing to be the guy who executed it. That's mastery. That's a different kind of brilliant. " +
        "And Merrill? Five threes off the bench in a road Game 7? That's the kind of thing you tell your kids about.",
      relevantPlayers: ["James Harden", "Sam Merrill", "Evan Mobley", "Donovan Mitchell"],
    },

    {
      topic:
        "Hot Take: New York is the Favorite to Reach the NBA Finals — And It's Not Even Close",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "NYK odds: +500 to win the Finals (post-Game 7 update) — third-best odds despite the most rest",
        "Knicks have been resting since May 11 — a full seven days off entering the ECF",
        "CLE survived a brutal seven-game series; Mitchell and Allen are both carrying minutes loads",
        "OG Anunoby trending toward ECF availability — day-to-day with hamstring",
        "Jalen Brunson: 27.8 PPG, 6.3 APG in the playoffs — the most well-rested superstar remaining",
        "NYK swept Philadelphia; CLE needed seven games and a historic collapse by Cunningham just to survive",
      ],
      debateAngle:
        "The betting market has Cleveland at +900 and New York at +500, but the matchup analysis suggests the gap should be even wider. A fully rested Brunson, a potentially returning Anunoby, and Towns going against a Cleveland frontcourt that just played 40 combined minutes in a war game — is New York not only the ECF favorite but the most likely team in the East to reach the Finals?",
      suggestedQuote:
        "I'm going to say something that I think the market is still underreacting to: " +
        "New York is the favorite to reach the NBA Finals, and it's not a coin flip. " +
        "Brunson hasn't played a game in a week. Anunoby is coming back. Towns gets to feast on a Cleveland frontcourt " +
        "that just played seven brutal games. And home court belongs to the Knicks. " +
        "Cleveland's Game 7 performance was magnificent — but magnificent and fresh are two very different things " +
        "when you tip again in four days.",
      relevantPlayers: [
        "Jalen Brunson",
        "Karl-Anthony Towns",
        "OG Anunoby",
        "Donovan Mitchell",
        "Evan Mobley",
        "Jarrett Allen",
      ],
    },

    {
      topic:
        "Rapid Fire: WCF Game 1 Preview, Cunningham's Legacy, Injury Updates, and Finals Odds",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "OKC vs SAS tips tonight at 8:30 PM ET on NBC/Peacock — spread: OKC -6.5, O/U 218.5",
        "SGA: 30.1 PPG, 6.5 APG, 6.2 RPG in the playoffs — 25+ points in every game of an 8-0 run",
        "Wembanyama: 24.3 PPG, 10.8 RPG, 3.2 BPG — SGA and Wemby split their regular-season meetings 2-2",
        "Jalen Williams (OKC): Out for WCF Game 1 with hamstring — no return timeline",
        "Finals odds post-Game 7: OKC -165, SAS +350, NYK +500, CLE +900",
        "Detroit's miracle run: rallied from 3-1 vs Orlando, won a 21-point road game in Game 6 — ends at 4-3 loss in the Semis",
      ],
      debateAngle:
        "San Antonio just demolished Minnesota by 30 on the road to close that series — they arrive in OKC fresher, healthier, and arguably more dangerous than any team the Thunder have faced. Does OKC's home-court advantage and six days of rest actually matter tonight, or does San Antonio's three-headed attack make this the closest Game 1 of the entire postseason?",
      suggestedQuote:
        "Let me do this fast because we have a game tonight and I don't want you missing tip-off. " +
        "SGA versus Wembanyama. The reigning MVP against the reigning DPOY. " +
        "OKC is eight-and-oh and hasn't been tested. San Antonio just won by thirty on the road. " +
        "Something has to give. Williams is out. Anunoby is day-to-day. " +
        "And Cade Cunningham — man, he led Detroit back from three-one against Orlando, " +
        "won a road game by twenty-one in Game 6, and then went zero-for-seven from three at home in Game 7. " +
        "The NBA doesn't do narrative justice. It just doesn't.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Stephon Castle",
        "De'Aaron Fox",
        "Jalen Williams",
        "Cade Cunningham",
      ],
    },

    {
      topic:
        "Looking Ahead: WCF Game 1 Sets the Tone Tonight — And the ECF Begins Later This Week",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "WCF Game 1: SAS @ OKC, 8:30 PM ET tonight — the marquee individual matchup of the postseason",
        "ECF: NYK vs CLE — series begins later this week; Knicks hold home court as the 3-seed",
        "OKC enters tonight 8-0 — a perfect postseason run that has never truly been tested",
        "SGA Finals MVP odds: -150 (runaway favorite); Wembanyama at +350 is the only realistic challenger",
        "Mobley (25-1) and Brunson (+600) are the dark-horse Finals MVP candidates after this weekend",
        "This day in NBA history: May 18, 1997 — Michael Jordan's Bulls opened ECF with a win over Miami en route to their fifth title",
      ],
      debateAngle:
        "By midnight tonight we will know whether OKC's unbeaten run has a genuine challenger or whether the Thunder are simply the class of the 2026 playoffs. If Wembanyama drops 30 and San Antonio steals Game 1 on the road, does every Finals prediction get rewritten before the Eastern Conference Finals even tips?",
      suggestedQuote:
        "Here's where we are on May 18th: the conference finals are fully set, " +
        "the most dominant road Game 7 in recent playoff memory just happened last night, " +
        "and in about twelve hours we'll know whether OKC's perfect postseason gets its first real scar. " +
        "SGA versus Wembanyama. Tonight. NBC. Eight-thirty Eastern. " +
        "Do yourself a favor — clear the schedule. " +
        "And twenty-nine years ago today, Michael Jordan opened the Eastern Conference Finals in Chicago. " +
        "History has a way of repeating itself in this league. " +
        "That's all from Hoops Intel. We'll have full WCF Game 1 reaction tomorrow morning. Stay locked in.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Evan Mobley",
        "Jalen Brunson",
        "Donovan Mitchell",
        "Stephon Castle",
      ],
    },
  ],

  socialClip:
    "CLIP DESCRIPTION — 'The Merrill Moment' (Shareable Segment, ~60 seconds): " +
    "Pull the section from the deep-dive where the host walks through Sam Merrill's Game 7 explosion — " +
    "open on the stat drop ('he was averaging SEVEN POINT FOUR points per game in these playoffs'), " +
    "build through the five-of-eight three-point line, and land on the punchline about Harden's plus-31 " +
    "on two-of-ten shooting. The contrast between Merrill going nuclear and Harden being invisible-but-dominant " +
    "is the single most shareable analytical moment of this episode. " +
    "Suggested on-screen text overlay: 'SAM MERRILL. 23 PTS. 5-8 FROM 3. OFF THE BENCH. GAME 7. ON THE ROAD.' " +
    "Caption copy: 'Sam Merrill just had one of the most unexpected Game 7 performances in playoff history. " +
    "Hoops Intel breaks down how Cleveland's most unlikely hero buried Detroit. 🎙️🔥 #NBAPlayoffs #Cavaliers'",

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel, May 18 | " +
      "Cleveland just delivered the most dominant road Game 7 in recent playoff history. " +
      "ECF is set: NYK vs CLE. And SGA vs Wembanyama tips TONIGHT. " +
      "Full breakdown 🧵👇 #NBAPlayoffs #HoopsIntel",

    "1/ MOBLEY'S MASTERPIECE 🏔️ | " +
      "21 PTS (7-10 FG) · 12 REB · 6 AST · +31 on the road in a Game 7. " +
      "That is the most complete single-game performance of the 2026 playoffs. " +
      "He's 24 years old. The Cleveland hierarchy may have permanently shifted Saturday night. " +
      "#Cavaliers #EvanMobley",

    "2/ THE MERRILL GAME 🤯 | " +
      "Sam Merrill entered Game 7 averaging 7.4 PPG in these playoffs. " +
      "He left with 23 points on 5-of-8 from three off the bench. " +
      "PLUS-22. In a road Game 7. " +
      "James Harden scored 9 on 2-of-10 and finished +31. " +
      "Cleveland is built different. #NBAPlayoffs",

    "3/ ECF WATCH 🗽⚔️🏀 | " +
      "NYK vs CLE — and the Knicks are the pick. " +
      "Brunson hasn't played since May 11. Anunoby trending toward return. " +
      "Towns vs Mobley/Allen is the matchup of the round. " +
      "Cleveland won by 31 last night — but they also just played seven wars. " +
      "Rest matters. Home court matters. NYK +500 feels light. #Knicks #Cavaliers",

    "4/ TONIGHT 🌩️ | " +
      "SGA vs Wembanyama. WCF Game 1. 8:30 PM ET on NBC. " +
      "OKC is 8-0 and hasn't been tested. SAN ANTONIO just won by 30 on the road to close out Minnesota. " +
      "Castle. Fox. Wemby. At full strength. " +
      "Something has to give tonight. Don't miss it. 🔥 #Thunder #Spurs #NBAPlayoffs",
  ],
};
