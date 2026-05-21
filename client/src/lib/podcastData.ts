// Podcast Companion — Daily Episode Blueprint
// Last updated: May 21, 2026
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
  date: "May 21, 2026",

  episodeTitle:
    "SGA Answers the Bell · Seven in Double Figures · Jalen Williams Changes Everything",

  coldOpen:
    "After Game 1, people were writing Shai Gilgeous-Alexander off. Eight for twenty-four. Wembanyama in his head. The Thunder on the ropes. And then last night happened. Thirty points. Nine assists. Plus-fourteen. A mid-range clinic so precise, so deliberate, so completely different from Game 1 that it looked like a different player wearing the same jersey. Oklahoma City wins one twenty-two to one thirteen. The Western Conference Finals is tied at one. But here is the thing — the biggest story in Oklahoma City last night wasn't SGA. It was a guy who played seven minutes. Seven. Minutes. Welcome to Hoops Intel. Let's get into it.",

  rundown: [
    {
      topic: "SGA's 30-Point Redemption and the WCF Reset",
      segment: "opener",
      duration: "7 min",
      keyStats: [
        "SGA: 30 PTS, 9 AST, 4 REB, 2 BLK, 2 STL, 12-24 FG, +14 (WCF G2)",
        "SGA went 8-for-24 in Game 1 — his worst shooting game of the 2026 playoffs",
        "OKC won 122-113 — series now tied 1-1",
        "SGA controlled Q3 as OKC outscored SAS by 12 in the period",
        "He abandoned rim pressure vs. Wembanyama entirely — lived at 15 feet and in floater range",
        "Seven Thunder players scored in double figures: SGA 30, Caruso 17, Holmgren 13, McCain 12, Wallace 12, Hartenstein 10, A. Mitchell 10",
      ],
      debateAngle:
        "Is SGA's Game 2 adaptation — completely restructuring his attack against Wembanyama in 48 hours — the most impressive in-series adjustment by a star player we have seen in this postseason? Or does it actually expose something about his ceiling: that he needs a safety valve game plan and can't simply impose his will against elite shot-blockers?",
      suggestedQuote:
        "He didn't just bounce back — he solved a chess problem at thirty thousand feet. Wembanyama took away the rim in Game 1 and SGA said, fine, I'll play an entirely different game. That is not stubbornness. That is elite adaptability. The back-to-back MVP just looked like the best player alive again.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Victor Wembanyama",
        "Alex Caruso",
        "Cason Wallace",
        "Isaiah Hartenstein",
      ],
    },
    {
      topic:
        "The Seven-Minute Earthquake: What Jalen Williams' Return Means for the WCF",
      segment: "deep-dive",
      duration: "9 min",
      keyStats: [
        "Williams played 7 minutes — first action since May 3 (hamstring strain)",
        "Stat line: 4 PTS, 2 STL, no visible restriction in movement",
        "OKC already had 7 players in double figures without Williams contributing meaningfully",
        "SAS is playing a shortened rotation without De'Aaron Fox (ankle sprain, 0 minutes in Games 1 and 2)",
        "If Williams ramps to 15-20 minutes by Game 3, OKC's depth advantage becomes historically unprecedented",
        "OKC championship odds moved to +125 — best of the four remaining teams — after Game 2",
      ],
      debateAngle:
        "Seven minutes in a playoff box score is almost statistically invisible. But contextually, does Jalen Williams' return make OKC the most unstoppable team in the conference finals? They just won by nine with a seven-deep rotation and their third-best player barely played. What happens when he is at full strength?",
      suggestedQuote:
        "Think about what just happened. Oklahoma City won by nine points with seven players in double figures and Jalen Williams playing seven minutes. Seven. They have a guy who was averaging twenty-plus points before he got hurt just sitting there, slowly coming back online like a sleeper weapon. San Antonio is already shorthanded. The math here is genuinely alarming for the Spurs.",
      relevantPlayers: [
        "Jalen Williams",
        "Shai Gilgeous-Alexander",
        "Alex Caruso",
        "Cason Wallace",
        "Ajay Mitchell",
      ],
    },
    {
      topic:
        "Hot Take: Stephon Castle's 9 Turnovers Were More Damaging Than Wembanyama's Brilliance Was Helpful",
      segment: "hot-take",
      duration: "6 min",
      keyStats: [
        "Castle: 25 PTS, 8 AST, 5 REB — but 9 TO (most by any player in the 2026 Conference Finals)",
        "Castle's 9 turnovers generated 14 OKC transition points — more than the final margin of defeat",
        "Wembanyama: 21 PTS, 17 REB, 6 AST, 4 BLK in 37 minutes",
        "Wemby is averaging 31.0 PPG and 20.5 RPG through two WCF games",
        "De'Aaron Fox: missed both Games 1 and 2 with a left ankle sprain",
        "San Antonio's full rotation featured Castle, Vassell, Harper, and Wemby — no Fox",
      ],
      debateAngle:
        "The take: San Antonio didn't lose Game 2 because Wembanyama was shut down or because OKC had a deeper roster. They lost because Stephon Castle's turnovers were a one-man wrecking ball that neutralized everything positive the Spurs built. The nine-point final margin is almost exactly the value of those 14 transition points. Castle lost this game. Unpack it.",
      suggestedQuote:
        "I love Stephon Castle. He is twenty-one years old and carrying an impossible load without his starting point guard in the Conference Finals. But nine turnovers that become fourteen layups? That is not a bad game. That is the entire box score. You cannot give Oklahoma City's transition offense that many free possessions and expect to win. This is fixable. Fox's return is the fix. But until then, Castle is both San Antonio's best weapon and their most dangerous liability.",
      relevantPlayers: [
        "Stephon Castle",
        "De'Aaron Fox",
        "Victor Wembanyama",
        "Devin Vassell",
        "Dylan Harper",
      ],
    },
    {
      topic:
        "Rapid Fire: Caruso's Historic Bench Run · Vassell's Six Threes · ECF Preview · Castle Odds · History Trivia",
      segment: "rapid-fire",
      duration: "5 min",
      keyStats: [
        "Caruso: 48 combined points on 65% shooting across two WCF games — best bench production in the 2026 postseason",
        "Caruso was +18 in Game 2 — game-high across both teams",
        "Vassell: 22 PTS on 6-of-12 from three — best perimeter performance for SAS in Game 2",
        "CLE @ NYK tonight — 8:00 PM ET, ESPN. NYK leads ECF 1-0. NYK -5.5",
        "No team has ever blown a 20-plus-point Conference Finals lead in Game 1 and recovered to win the series",
        "This Day in NBA History: May 21, 1986 — Ralph Sampson's spinning buzzer-beater eliminated the Lakers in WCF Game 5",
      ],
      debateAngle:
        "Rapid fire means quick and spicy. Is Alex Caruso the most valuable non-star in the 2026 playoffs? Can Cleveland possibly recover from what happened in Game 1? And should Devin Vassell be starting over Dylan Harper with Fox out?",
      suggestedQuote:
        "Real quick — forty-eight points on sixty-five percent shooting across two Conference Finals games off the bench. Alex Caruso is not a story anymore, he is a problem. A beautiful, efficient, plus-eighteen problem that Oklahoma City's front office got for two first-round picks that now look like a steal of historic proportions.",
      relevantPlayers: [
        "Alex Caruso",
        "Devin Vassell",
        "Donovan Mitchell",
        "Jalen Brunson",
        "Ralph Sampson",
      ],
    },
    {
      topic:
        "Looking Ahead: Cleveland's Existential Game 2, Fox's Return Timeline, and the WCF Shifts to San Antonio",
      segment: "closer",
      duration: "5 min",
      keyStats: [
        "CLE @ NYK — Game 2 tonight, 8:00 PM ET, ESPN. NYK leads ECF 1-0",
        "Cleveland blew a 22-point lead and scored only 3 points in overtime in ECF Game 1",
        "Brunson scored 38 in Game 1 comeback — Mitchell was -13 in the same game",
        "OKC @ SAS — WCF Game 3, Friday 8:30 PM ET on NBC at Frost Bank Center",
        "Fox (ankle) targeting return for WCF Game 3 — day-to-day status update expected Thursday",
        "NBA Finals begin June 3 on ABC — OKC +125, SAS +225, NYK +350, CLE +800",
      ],
      debateAngle:
        "Two massive questions heading into the next 72 hours: First — can Cleveland walk into Madison Square Garden and steal a game after that Game 1 trauma, or is this series already effectively over? Second — does De'Aaron Fox come back for Game 3 in San Antonio, and if so, does the home crowd and full roster flip the WCF back in the Spurs' favor?",
      suggestedQuote:
        "Here is where we stand tonight. Cleveland goes into Madison Square Garden facing the single most important game of the Donovan Mitchell era. Not an overstatement. Down 0-2 on the road after blowing twenty-two points would make this series a fait accompli — history says it has never been done. Meanwhile in San Antonio, the most anticipated injury return in the 2026 playoffs is De'Aaron Fox, and if he is back on Friday alongside a home crowd and a motivated Wembanyama, we might have ourselves a full seven-game Western Conference Finals. The NBA is giving us everything right now. Do not look away.",
      relevantPlayers: [
        "Donovan Mitchell",
        "Jalen Brunson",
        "De'Aaron Fox",
        "Victor Wembanyama",
        "Stephon Castle",
        "Jalen Williams",
      ],
    },
  ],

  socialClip:
    "BEST CLIP FOR SOCIAL — The Jalen Williams return moment: pull the raw broadcast footage of Williams checking in during Q2 at Paycom Center to the crowd roar, overlay his fluid lateral cut on defense and the 2-steal sequence, then freeze-frame on his face coming off the court at the seven-minute mark looking zero percent bothered by the hamstring. Caption: 'He played 7 minutes. The WCF will never be the same.' Target platforms: Instagram Reels, TikTok, X. Estimated engagement hook: the crowd audio alone does the work — this is the most emotionally resonant moment of Game 2 and requires no extra production. Pair with the stat card: OKC already had 7 players in double figures WITHOUT him.",

  tweetThread: [
    "🧵 HOOPS INTEL DAILY — May 21, 2026 | WCF GAME 2 RECAP + ECF GAME 2 PREVIEW | Let's go through everything that happened and everything that's coming tonight 👇",

    "1/ SGA ANSWERED THE BELL. 30 PTS · 9 AST · +14 after going 8-for-24 in Game 1. He completely restructured his attack against Wembanyama — abandoned the rim, lived at 15 feet and in floater range, and turned the 7-3 rim protector into a spectator. OKC wins 122-113. WCF tied 1-1. 🎯",

    "2/ BUT THE REAL STORY WAS 7 MINUTES. Jalen Williams came back from his hamstring strain and played 7 fluid, unrestricted minutes. OKC already had 7 players in double figures without him. If he ramps to 15-20 mins in San Antonio… the depth advantage becomes genuinely historic. 👀 Caruso added 17 PTS on 5-7 FG, +18 off the bench. 48 combined WCF points on 65% shooting. The best bench player alive.",

    "3/ WEMBY POSTED 21/17/6/4BLK IN A LOSS and it barely registered because we are already desensitized. He is AVERAGING 31.0 PPG and 20.5 RPG in the WCF. Historically unprecedented. The problem was Castle's 9 turnovers → 14 OKC transition points. Fox MUST return for Game 3 Friday in SA. Day-to-day update expected Thursday. 🏥",

    "4/ TONIGHT: CLE @ NYK — 8 PM ET, ESPN. ECF Game 2. NYK leads 1-0. Cleveland blew a 22-point lead and scored 3 pts in OT in Game 1. No team has ever recovered from blowing a 20+ point Conference Finals lead in Game 1 and won the series. Mitchell needs 35+. Brunson needs to be stopped. This might be the most important game of the Donovan Mitchell era. 🔥 NYK -5.5 · O/U 215.5",

    "5/ BIG PICTURE: OKC +125 · SAS +225 · NYK +350 · CLE +800. NBA Finals start June 3 on ABC. WCF shifts to San Antonio — Game 3 Friday 8:30 PM ET on NBC. Fox return imminent. Williams ramping up. The entire postseason is sitting on the next 72 hours. 🏆 Full breakdown + Hoops IQ quiz at hoopsintel.net | 🎙️ New episode dropping now — link in bio",
  ],
};
