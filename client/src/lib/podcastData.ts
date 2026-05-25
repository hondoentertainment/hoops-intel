// Podcast Companion — Daily Episode Blueprint
// Last updated: May 25, 2026
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
  date: "May 25, 2026",

  episodeTitle:
    "Wemby Wakes Up, the WCF Is Alive, and New York Is One Win From the Finals — Memorial Day NBA",

  coldOpen:
    "Twenty-one points. That is the margin by which San Antonio dismantled the best team in the NBA last night. Oklahoma City — sixty-four wins, the top seed in the West, the team everyone had penciled into the Finals — came into the Frost Bank Center and got outplayed in every single category for forty-eight minutes straight. Victor Wembanyama had THIRTY-ONE points, EIGHTEEN rebounds, and FIVE blocks. After a four-rebound Game Three that had all of San Antonio holding its breath, Wemby came back out and reminded the basketball world exactly what he is. The Western Conference Finals is tied two-two. It is a best-of-three with the NBA Finals on the line. And tonight — TONIGHT — the New York Knicks walk into Cleveland with a chance to end a twenty-seven-year drought and sweep into the NBA Finals. Happy Memorial Day. Welcome to Hoops Intel.",

  rundown: [
    {
      topic:
        "San Antonio Stuns OKC 103-82 — Wembanyama Delivers a Series-Saving Performance to Even the WCF at 2-2",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Wembanyama: 31 PTS · 18 REB · 5 BLK · +24 in 21-point win",
        "OKC held to 82 points — lowest postseason total of the entire 2026 season",
        "San Antonio won by 21 after losing Game 3 by 15 — a 36-point swing in 48 hours",
        "Stephon Castle bounced back from 1-of-8 in Game 3 with an aggressive, foul-drawing performance",
        "De'Aaron Fox noticeably sharper in Game 4 — second game back on the ankle",
        "WCF is now a best-of-three: Game 5 Tuesday at San Antonio, then Paycom Center if necessary"
      ],
      debateAngle:
        "Is Wembanyama's Game 4 the single greatest individual performance of the 2026 postseason — and does one historic night mean San Antonio is now the favorite to win the WCF, or does OKC's talent ceiling still make them the team to beat in a Game 5 environment?",
      suggestedQuote:
        "Look, after four rebounds in Game Three, everyone in San Antonio was asking whether the moment had gotten too big for Wemby. And then he goes out and posts eighteen rebounds and five blocks in a twenty-one-point win. That is not a response — that is a statement. That is a franchise player telling an entire city: I heard you, and here is my answer.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Stephon Castle",
        "De'Aaron Fox",
        "Shai Gilgeous-Alexander",
        "Jalen Williams"
      ]
    },
    {
      topic:
        "Popovich's Masterplan: How San Antonio's Switching Defense Completely Neutralized OKC Without Jalen Williams",
      segment: "deep-dive",
      duration: "9 minutes",
      keyStats: [
        "OKC bench held in check after posting four players at +20 or better in Game 3",
        "Jared McCain went from 24 points and +28 in Game 3 to a quiet, hounded Game 4",
        "SGA contested all night — finished well below his WCF series average",
        "Jalen Williams missed his fourth consecutive WCF game with a right hamstring strain",
        "OKC scored just 82 without Williams — the halfcourt execution problem is critical",
        "Popovich's Game 4 scheme: limit transition, force OKC into halfcourt sets, switch everything on the perimeter"
      ],
      debateAngle:
        "Is this series now less about basketball matchups and more about a health referendum on Jalen Williams' hamstring? Because if Williams cannot go in Game 5 at Frost Bank Center, OKC is walking into one of the loudest buildings in the playoffs with half a playbook — and Pop already knows exactly how to exploit it.",
      suggestedQuote:
        "Pop made a thirty-six-point adjustment in forty-eight hours. Think about that. His team loses by fifteen at home, and he comes back out with a completely redesigned defensive scheme that holds OKC to their lowest scoring game of the season. That is not scheme — that is mastery. That is why the man has five rings.",
      relevantPlayers: [
        "Gregg Popovich",
        "Shai Gilgeous-Alexander",
        "Jalen Williams",
        "Jared McCain",
        "Victor Wembanyama",
        "De'Aaron Fox"
      ]
    },
    {
      topic:
        "Hot Take: Donovan Mitchell's Minus-53 Cumulative Plus/Minus Is the Most Damning Stat Line in the 2026 Playoffs — He Is Getting Exposed Tonight",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Mitchell: 78 points scored across 3 ECF games on -53 cumulative plus/minus",
        "Individual game plus/minus splits: -9 (G1), -22 (G2), -22 (G3)",
        "Cleveland three-point shooting: 26.4% for the series — worst of any team remaining",
        "Jalen Brunson: 32.7 PPG with a POSITIVE plus/minus in all three ECF games",
        "No team in NBA history has ever come back from 0-3 in a playoff series",
        "James Harden shot 1-of-7 from three in ECF Game 3 — availability is not the issue"
      ],
      debateAngle:
        "The hot take is this: Donovan Mitchell is the most productive losing player in this postseason. Seventy-eight points. Minus fifty-three. Those two numbers cannot coexist on a team that wants to survive. You can point to Cleveland's three-point shooting, to the supporting cast falling apart — but the guy eating the most shots on this team has a minus-fifty-three. At some point, volume scoring that does not move the needle is not a feature. Tonight is the moment of truth.",
      suggestedQuote:
        "I will say it plainly: Donovan Mitchell has been an isolation scorer in a team-elimination series. Seventy-eight points sound great until you realize the Cavaliers are losing by double digits every time he is on the floor. That is not a supporting cast problem. That is a shot-selection, shot-creation, make-my-teammates-better problem. And tonight he has one last chance to prove me wrong.",
      relevantPlayers: [
        "Donovan Mitchell",
        "Jalen Brunson",
        "James Harden",
        "Mikal Bridges",
        "Karl-Anthony Towns"
      ]
    },
    {
      topic:
        "Rapid Fire: Brunson's Coronation Window, Mikal's Efficiency Record, Towns as the Knicks' Secret Weapon, and Wemby's Playoff MVP Case",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Brunson: 32.7 PPG · 8.7 APG — leads ALL Conference Finals scorers through four games",
        "Mikal Bridges: 11-of-15 shooting (73.3%) in ECF Game 3 — most efficient CF game of the round",
        "Karl-Anthony Towns: +23 in ECF Game 3 — best single-game plus/minus of the Conference Finals round",
        "Wembanyama: 30.5 PPG · 16.0 RPG · 3.5 BPG across 4 WCF games — a statistical profile that has no historical parallel",
        "Landry Shamet: 4-of-5 from three in ECF Game 3 — most efficient three-point night (min. 4 makes) of the CF round",
        "Stephon Castle's bounce-back after back-to-back shooting disasters is the underrated story of the WCF"
      ],
      debateAngle:
        "If the Knicks win tonight, Brunson locks up Playoff MVP and the conversation is over. But if the Spurs go on to win the WCF, does Wembanyama's statistical case — thirty points, sixteen boards, three and a half blocks per game — become impossible to ignore? We could be heading toward the most interesting Playoff MVP debate in a decade.",
      suggestedQuote:
        "Real quick — shoutout to KAT. Thirteen points, eight rebounds, seven assists, plus twenty-three. Nobody is talking about Karl-Anthony Towns and he is the reason every other Knick can operate freely. The connective tissue of a potential Finals team. Give that man his flowers.",
      relevantPlayers: [
        "Jalen Brunson",
        "Mikal Bridges",
        "Karl-Anthony Towns",
        "Victor Wembanyama",
        "Landry Shamet",
        "Stephon Castle"
      ]
    },
    {
      topic:
        "Looking Ahead: Knicks vs. Cavaliers ECF Game 4 Tonight — Sweep or Survival, and What a 2-2 WCF Means for the Rest of the Playoffs",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "NYK leads ECF 3-0 — no team in NBA history has ever recovered from 0-3",
        "Knicks favored by 3.5 — line moved from -3.0 on sharp action backing New York",
        "WCF now tied 2-2 with Game 5 on Tuesday at San Antonio — best-of-three with Finals implications",
        "Wembanyama: 30.5 PPG · 16.0 RPG · 3.5 BPG through four WCF games",
        "Prediction: NYK 115-107 — Brunson 34 PTS, Mitchell 32 PTS, Knicks close with a 12-4 run",
        "New York's last Finals appearance: 1999 — a 27-year drought ends tonight if the Knicks close it out"
      ],
      debateAngle:
        "Here is the closing argument: the NBA just gave us the best possible Memorial Day setup. In the East, you have a sweep on the table and history about to be made — or denied. In the West, you have the most fascinating best-of-three remaining in the postseason with two of the three best players in the world going head-to-head. Which story are you watching more closely tonight and through the week — and which Finals matchup do you actually want to see?",
      suggestedQuote:
        "Twenty-seven years. Think about what New York has been through since 1999. The heartbreak, the rebuilds, the near misses. Tonight, Jalen Brunson walks into Rocket Arena with a chance to end all of it. And in San Antonio, a twenty-two-year-old alien is forcing a best-of-three for the Western Conference title. This is the best week of the NBA season. Do not look away.",
      relevantPlayers: [
        "Jalen Brunson",
        "Donovan Mitchell",
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Mikal Bridges",
        "De'Aaron Fox"
      ]
    }
  ],

  socialClip:
    "CLIP DESCRIPTION — 'The Wemby Wake-Up Call' (Target: 60–90 seconds, Instagram Reels / TikTok / X): Open on the Game 3 stat graphic — four rebounds, Wembanyama's worst postseason performance — overlaid with the cold silence of the Frost Bank Center after the loss. Cut hard to Game 4 highlights: the first tip, the first block at the rim, the second-chance put-back, the transition dunk, the mid-post fadeaway that drops through the net with nobody close enough to contest it. Voice-over drops the number: 'Thirty-one points. Eighteen rebounds. Five blocks. Plus twenty-four.' Pause. Let it breathe. Then: 'You wanted to know if the moment was too big for him. He just answered.' End on Wembanyama walking off the Frost Bank Center floor to a standing ovation, crowd noise building to a crescendo. Text card: 'WCF TIED 2-2. GAME 5 TUESDAY.' This is the most shareable sixty seconds of the postseason — a redemption arc, a stat line nobody believes until they see it, and a building that was silent forty-eight hours ago suddenly the loudest arena in basketball.",

  tweetThread: [
    "🏀 HOOPS INTEL MEMORIAL DAY THREAD — May 25, 2026 // Victor Wembanyama just saved the Western Conference Finals. San Antonio 103, Oklahoma City 82. Series tied 2-2. Let's go. 🧵",

    "1/ WEMBY WOKE UP. After 4 rebounds in Game 3 — the performance that had all of San Antonio questioning everything — Wembanyama came back out with 31 PTS · 18 REB · 5 BLK · +24. The WCF is alive because one player decided it would be. That is franchise player behavior.",

    "2/ The Pop masterclass deserves its own paragraph. OKC bench torched SAS in Game 3 (four players at +20 or better). In Game 4, Popovich's switching scheme held them in check, neutralized SGA's angles, and held the Thunder to 82 — their lowest postseason total of 2026. He made a 36-point adjustment in 48 hours. Five rings for a reason.",

    "3/ Meanwhile: Donovan Mitchell has scored 78 ECF points on a -53 cumulative plus/minus. That is the most damning empty-scoring stat line of the postseason. Tonight in Cleveland — elimination game, home crowd, everything on the line — he either rewrites that narrative or the Knicks are going to the Finals. NYK -3.5. No team has ever come back from 0-3. History does not favor Cleveland.",

    "4/ THE BIGGER PICTURE: We have a WCF best-of-three with Wembanyama (30.5/16.0/3.5 BLK) vs. Gilgeous-Alexander AND a potential ECF sweep-clincher tonight with Brunson (32.7 PPG) trying to end a 27-year Knicks drought. This is the best week of NBA basketball of the entire 2026 season. Do not look away. 🏆 #NBAPlayoffs #HoopsIntel"
  ]
};
