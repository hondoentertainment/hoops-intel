// Podcast Companion — Daily Episode Blueprint
// Last updated: May 16, 2026
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
  date: "May 16, 2026",

  episodeTitle:
    "Game 7 Sunday, Castle's Coronation, and the West Finals We've All Been Waiting For",

  coldOpen:
    "Friday night handed us two of the most consequential playoff results of the entire 2026 postseason — and neither one went according to script. In Cleveland, the Cavaliers threw a closeout party and the Detroit Pistons crashed it and burned the place down, 115-94. Game 7. Sunday. Little Caesars Arena. And in Minneapolis, Stephon Castle walked into Target Center and dropped 32 points, 11 rebounds, and 6 assists on 69 percent shooting to personally escort the San Antonio Spurs into a West Finals date with Oklahoma City. SGA versus Wembanyama. The matchup that defines the next decade. It is official. It is happening. And we have a lot to get into — let's go.",

  rundown: [
    {
      topic: "Detroit Forces Game 7: The Pistons Crash Cleveland's Closeout Party",
      segment: "opener",
      duration: "8 min",
      keyStats: [
        "DET 115, CLE 94 — 21-point road demolition in a would-be clinch game",
        "Cade Cunningham: 21 PTS, 8 AST — the best player in this series, full stop",
        "Paul Reed: 17 PTS on 7-of-9 shooting off the bench — bench catalyst of the playoffs",
        "Donovan Mitchell: 6-of-20 FG, minus-25 — worst performance of his series",
        "James Harden: 23 PTS but 8 turnovers — the good and the catastrophic in one box score",
        "Evan Mobley: minus-24 — Cleveland's entire starting unit was a disaster",
      ],
      debateAngle:
        "Is Cade Cunningham now the single most important player in the Eastern Conference playoff picture? He has been the best player on the floor in six straight games against a team with three All-Star-caliber players — and he's doing it on both ends. Meanwhile, Mitchell, Harden, and Mobley collectively imploded in a must-win situation at home. Do the Cavaliers have a real shot in Game 7, or has Cade just broken this team psychologically?",
      suggestedQuote:
        "Look — Cleveland had home court, they had the crowd, they had the moment. And the Pistons walked in and treated it like a regular-season back-to-back. That's not a fluke. That's Cade Cunningham telling the world exactly who he is.",
      relevantPlayers: [
        "Cade Cunningham",
        "Paul Reed",
        "Donovan Mitchell",
        "James Harden",
        "Evan Mobley",
        "Jalen Duren",
        "Daniss Jenkins",
      ],
    },
    {
      topic:
        "Stephon Castle's Coronation: The 32-Point Masterpiece That Changed Everything",
      segment: "deep-dive",
      duration: "10 min",
      keyStats: [
        "Castle: 32 PTS, 11 REB, 6 AST — 11-of-16 FG, 5-of-7 from three (69% overall)",
        "De'Aaron Fox: 21 PTS, 9 AST on 8-of-10 shooting — surgical doesn't cover it",
        "Wembanyama: 19 PTS, 6 REB, 3 BLK in just 27 minutes — resting while winning by 30",
        "Julian Champagnie: +35 in 26 bench minutes — the postseason's single best plus-minus",
        "SAS won their four series victories by an average of 25.5 points",
        "Minnesota's Anthony Edwards: 9-of-26, minus-31 — a brutal, season-ending night",
      ],
      debateAngle:
        "Here's the real question after Friday night: is Stephon Castle already the second-best player on the San Antonio Spurs — and does it even matter who the second-best player is when they have three legitimate stars under 24 and a fourth in De'Aaron Fox? Castle's 32-point closeout was described as the best sophomore playoff game since Jayson Tatum in 2018. But is this a comp that actually holds, or is Castle doing something even more unusual — redefining his own ceiling in real time while Wembanyama barely breaks a sweat?",
      suggestedQuote:
        "The most alarming thing about Friday's game wasn't that Castle went for 32. It's that Wembanyama played 27 minutes, coasted, and the Spurs still won by 30. Pop has three nuclear options and he didn't even need to fully arm one of them. OKC, you have been warned.",
      relevantPlayers: [
        "Stephon Castle",
        "Victor Wembanyama",
        "De'Aaron Fox",
        "Julian Champagnie",
        "Dylan Harper",
        "Anthony Edwards",
        "Karl-Anthony Towns",
        "Rudy Gobert",
      ],
    },
    {
      topic:
        "Hot Take: Mitchell's Game 6 Collapse Is the Most Damaging Star Performance of the 2026 Playoffs",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Mitchell: 6-of-20 from the floor, 18 PTS, minus-25 — failed closeout on home court",
        "Just two games earlier, Mitchell dropped 43 points in Game 4 to retake the series lead",
        "Harden had 30 points in Game 5 then 8 turnovers in Game 6 — the duality is real",
        "Cleveland outscored Detroit by just 1 point total across Games 4 and 5 combined before Friday's collapse",
        "DET -3.5 favorites for Game 7 — the betting market agrees this was a psychological shift",
        "History: Road teams are just 38% in Game 7s over the last decade — Sunday's math is brutal for CLE",
      ],
      debateAngle:
        "Take the other side of this if you can: Donovan Mitchell's 6-of-20, minus-25 game in a must-win clinch situation at home is the single most damaging star performance of the entire 2026 playoffs. Not because it was the worst statistically — it wasn't. But because of the context. You had home court. You had the moment. You had the crowd. And your best player shot 30 percent and finished minus-25. Can Cleveland's stars actually be trusted in Game 7, or has this franchise's ceiling just been permanently exposed?",
      suggestedQuote:
        "I'm not here to bury Donovan Mitchell. The man dropped 43 two games ago. But there is something genuinely alarming about a star player who can go from one of the best games of the playoffs to one of the worst in 48 hours — especially when his team needs him to be a rock, not a roller coaster.",
      relevantPlayers: [
        "Donovan Mitchell",
        "James Harden",
        "Cade Cunningham",
        "Evan Mobley",
        "Paul Reed",
      ],
    },
    {
      topic: "Rapid Fire: West Finals Set, Injury Watch, Knicks Waiting, and the Rookie Explosion",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "OKC vs SAS West Finals — likely starts Wednesday, May 20",
        "OKC 8-0, rested since May 11 — they haven't played in nearly a week",
        "Jalen Williams: still out with hamstring strain, no return timeline for the WCF",
        "NYK resting since May 11 — Brunson and company at maximum freshness for East Finals",
        "Ajay Mitchell: 20.5 PPG, 3.4 SPG off bench — most productive undrafted rookie in playoff history",
        "OG Anunoby: Questionable for East Finals with an undisclosed injury — critical subplot for NYK",
      ],
      debateAngle:
        "Does Jalen Williams' hamstring status flip the West Finals odds entirely? OKC went 8-0 without him, which is both remarkable and potentially misleading — none of those opponents were the San Antonio Spurs. And is the Knicks' week-plus of rest actually an advantage or a curse? Teams with long layoffs between rounds have historically struggled with rhythm. These are the subplots that will define the next two weeks.",
      suggestedQuote:
        "OKC has been perfect without Jalen Williams. Eight wins, zero losses. But perfect against who? The Spurs are a completely different organism than anything the Thunder faced in the first two rounds, and that hamstring question is going to shadow every single game of this series.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Jalen Williams",
        "Victor Wembanyama",
        "Stephon Castle",
        "Jalen Brunson",
        "OG Anunoby",
        "Ajay Mitchell",
      ],
    },
    {
      topic: "Looking Ahead: Game 7 Sunday, the West Finals Preview, and What We're Watching",
      segment: "closer",
      duration: "7 min",
      keyStats: [
        "Game 7: DET vs CLE — Sunday at Little Caesars Arena, DET favored at -3.5",
        "Prediction: DET 109, CLE 103 — Cunningham delivers 30 and 10 on home court",
        "West Finals OKC vs SAS: SGA (30.1 PPG, 8-0) vs Wembanyama (24.3 PPG, 3.2 BPG in semis)",
        "This Day in NBA History: May 16, 2024 — Luka's Mavs eliminated the Thunder 117-116 in Game 6; two years later SGA's OKC is 8-0",
        "Hoops IQ Answer: Castle's 32-point closeout is the correct answer — medium difficulty",
        "Fantasy priority adds: Castle and Wemby for WCF, Cunningham for Game 7 — all rated urgent",
      ],
      debateAngle:
        "Here's the question we're leaving you with heading into Sunday: who has the higher ceiling in the West Finals — SGA operating in the system that made him MVP, or Wembanyama at 21 years old on the sport's biggest remaining stage with Castle, Fox, and a Popovich-built machine around him? We're about to find out. And in the East, is a Cade Cunningham Game 7 at home the most bankable bet in the 2026 playoffs? History says the 1-seed at home in Game 7 wins roughly 62 percent of the time. Cade's been the series' best player. Little Caesars Arena will be shaking. Make your pick.",
      suggestedQuote:
        "Two years ago on this exact date, Luka Doncic dropped 36 to eliminate a young OKC team that had no idea what was coming. Today, that same OKC team is 8-0 and about to face a Spurs squad that just won by 30 on the road. The kids grew up. Both sets of them. And this weekend, we find out which generation takes over.",
      relevantPlayers: [
        "Cade Cunningham",
        "Donovan Mitchell",
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Stephon Castle",
        "Jalen Brunson",
        "Paul Reed",
        "De'Aaron Fox",
      ],
    },
  ],

  socialClip:
    "CLIP: Deep-dive segment, 2:15–3:45 — Host breaks down how Victor Wembanyama played just 27 minutes, coasted to 19/6/3 blocks, and the Spurs still won by 30. Overlay Castle's 32/11/6 stat line with the slow-motion highlight reel of his five three-pointers. End on the line: 'Pop has three nuclear options and he didn't even need to fully arm one of them. OKC, you have been warned.' Perfect 90-second cut for Twitter, Instagram Reels, and TikTok. Tag: #WestFinals #SpursUp #CastleTime",

  tweetThread: [
    "🎙️ NEW EPISODE — Hoops Intel Podcast | May 16, 2026\n\n'Game 7 Sunday, Castle's Coronation, and the West Finals We've All Been Waiting For'\n\nFriday gave us two of the wildest playoff results of the year. We break all of it down. 🧵",

    "1/ DETROIT CRASHES THE PARTY 🔥\n\nPistons go into Cleveland — where CLE expected to close it out — and WIN BY 21.\n\nCade: 21/8 AST\nPaul Reed: 17 PTS on 7-9 FG off the bench\nMitchell: 6-20, minus-25\nHarden: 8 turnovers\n\nGAME 7. SUNDAY. LITTLE CAESARS ARENA.\n\n#DetroitBasketball #NBAPlayoffs",

    "2/ STEPHON CASTLE IS A STAR 👑\n\n32 PTS · 11 REB · 6 AST\n11-of-16 FG · 5-of-7 from three\n69% shooting in a SERIES-CLINCHING road blowout\n\nBest sophomore playoff game since Tatum in 2018.\n\nAnd Wembanyama played 27 EASY minutes and still had 19/6/3 blocks.\n\nOKC, start preparing. #Spurs",

    "3/ THE WEST FINALS ARE SET 🏆\n\nOKC vs SAS. SGA vs Wembanyama.\n\nThe reigning MVP against the reigning DPOY. 8-0 Thunder vs a Spurs team that won by 25+ four times this postseason.\n\nJalen Williams' hamstring = the biggest injury subplot in basketball.\n\nThis series will define the next decade. #OKCThunder #GoSpursGo",

    "4/ GAME 7 SUNDAY — OUR PICK 🎯\n\nDET -3.5 at home. Cade has been the best player in this series all six games.\n\nWe're taking Detroit 109-103. Cunningham goes for 30 and 10 in front of a deafening Little Caesars crowd.\n\nMitchell's ceiling is real. So is Detroit's depth. The 1-seed at home wins Game 7. #NBAPlayoffs",

    "5/ BOTTOM LINE 📊\n\nFriday night proved two things:\n\n① Detroit's collective depth is more dangerous than Cleveland's star power\n② San Antonio doesn't need Wembanyama to go nuclear to win by 30\n\nBoth facts should terrify the rest of the field.\n\n🎙️ Full episode at hoopsintel.net | #HoopsIntel",
  ],
};
