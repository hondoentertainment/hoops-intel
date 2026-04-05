// Podcast Companion — Daily Episode Blueprint
// Last updated: April 5, 2026
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
  date: "April 5, 2026",
  episodeTitle:
    "Wemby Seizes the 1-Seed, Luka Ends Denver's Streak, and OKC Is in Crisis Mode",
  rundown: [
    {
      topic: "Wemby's Coronation — 32/10/6/3BLK Seizes the 1-Seed, Spurs W12",
      segment: "opener",
      duration: "5-7 min",
      keyStats: [
        "Wembanyama: 32 PTS, 10 REB, 6 AST, 3 BLK as the Spurs won their 12th straight",
        "San Antonio has seized the 1-seed outright over OKC, who have now lost 3 straight",
        "The Spurs' 12-game win streak is the longest in the NBA this season",
        "Wemby is putting up historic two-way numbers — nobody in the league is playing at this level right now",
        "This is a coronation moment: the best player in basketball on the best team in basketball",
      ],
      debateAngle:
        "Is this the moment Wemby officially became the best player in the world? Thirty-two, ten, six, and three blocks to take the 1-seed while OKC collapses. The Spurs have won 12 straight and Wemby is the engine of everything they do. Is the MVP race over?",
      suggestedQuote:
        "Victor Wembanyama had 32, 10, 6, and 3 blocks last night. The Spurs have won TWELVE straight games. They have the 1-seed. OKC has lost three in a row for the first time all season. This isn't a hot streak anymore — this is a coronation. Wemby is the best player in basketball right now and it's not particularly close.",
      relevantPlayers: [
        "Victor Wembanyama",
        "Shai Gilgeous-Alexander",
        "Chet Holmgren",
      ],
    },
    {
      topic: "Luka 36/8/10 Ends Denver's 8-Game Streak — Lakers Win 5 Straight",
      segment: "deep-dive",
      duration: "8-10 min",
      keyStats: [
        "Luka Doncic: 36 PTS, 8 REB, 10 AST in the Lakers' 5th straight win",
        "The Lakers snapped Denver's 8-game win streak on the road",
        "Luka is averaging 33.2 PPG over his last 6 games on elite efficiency",
        "The Lakers' 5-game win streak has them surging up the West standings",
        "Denver's loss, combined with OKC's skid, has blown the West race wide open",
      ],
      debateAngle:
        "Luka just went into Denver and dropped 36/8/10 to end an 8-game win streak. The Lakers have won 5 straight. Is Luka playing the best basketball of his career right now? And has this Lakers surge turned the West into a four-team race instead of a two-team coronation?",
      suggestedQuote:
        "Luka Doncic went into Denver last night and dropped 36, 8, and 10. He ended the Nuggets' 8-game win streak and pushed the Lakers to 5 straight wins. That is a statement game. That is Luka saying 'we belong in this conversation.' The West is wide open right now and Luka is the reason the Lakers are in the middle of it.",
      relevantPlayers: [
        "Luka Doncic",
        "Anthony Davis",
        "Nikola Jokic",
        "Jamal Murray",
      ],
    },
    {
      topic: "Hot Take: OKC Is in Crisis — 3 Straight Losses for the First Time All Season",
      segment: "hot-take",
      duration: "5-7 min",
      keyStats: [
        "OKC has lost 3 consecutive games for the first time all season",
        "The Thunder have surrendered the 1-seed to San Antonio during the skid",
        "OKC's defense has allowed 115+ points in all three losses",
        "SGA's efficiency has dipped significantly during the losing streak",
        "Tonight: OKC @ DEN at 9:30 PM ET on TNT — a must-win to stop the bleeding",
      ],
      debateAngle:
        "Hot take: this OKC losing streak isn't just a blip — it's exposing a real vulnerability. Three straight losses for the first time all year, the 1-seed gone, and now they have to go into Denver tonight? Is this the kind of late-season stumble that carries over into the playoffs, or will the Thunder use this as a wake-up call?",
      suggestedQuote:
        "OKC has lost three straight games for the first time all season. They've given the 1-seed to San Antonio. And tonight they have to go into Denver on TNT. This is a crisis. I don't care how good your record is — when you lose three straight in April after leading the league all year, something is wrong. The Thunder need to figure this out fast or they're going to be the 2-seed playing with a crisis of confidence heading into the playoffs.",
      relevantPlayers: [
        "Shai Gilgeous-Alexander",
        "Chet Holmgren",
        "Jalen Williams",
        "Nikola Jokic",
      ],
    },
    {
      topic:
        "Rapid-Fire: Brunson 28/7 and 51 Wins, Trae 28/9 Hawks W3, Barnes 29/8/7 Bounce-Back",
      segment: "rapid-fire",
      duration: "4-5 min",
      keyStats: [
        "Jalen Brunson: 28 PTS, 7 AST as the Knicks reached 51 wins",
        "Trae Young: 28 PTS, 9 AST as the Hawks extended their win streak to 3",
        "Scottie Barnes: 29 PTS, 8 REB, 7 AST in a big bounce-back performance",
        "The Knicks host Detroit tonight on ABC in a Saturday primetime East 1 vs. 3 showdown",
        "Atlanta's 3-game streak has them rolling into Boston tonight on ESPN",
      ],
      debateAngle:
        "Brunson has quietly pushed the Knicks to 51 wins and they host Detroit on ABC tonight. Trae has the Hawks on a 3-game streak heading into Boston. And Barnes bounced back with 29/8/7. Which of these performances matters most for the playoff picture?",
      suggestedQuote:
        "Brunson had 28 and 7 last night and the Knicks have 51 wins. That's a special season in New York. Trae dropped 28 and 9 and the Hawks have won three straight — they go to Boston tonight on ESPN. And Scottie Barnes bounced back with 29, 8, and 7. A lot of star guards showed up last night.",
      relevantPlayers: [
        "Jalen Brunson",
        "Trae Young",
        "Scottie Barnes",
        "Cade Cunningham",
      ],
    },
    {
      topic: "Tonight's Preview: DET @ NYK on ABC, OKC @ DEN on TNT, BOS @ ATL on ESPN",
      segment: "closer",
      duration: "3-4 min",
      keyStats: [
        "DET @ NYK — 7:30 PM ET, ABC — Saturday primetime, East 1 vs. 3, Brunson vs. Cade",
        "OKC @ DEN — 9:30 PM ET, TNT — Thunder desperate, Jokic vs. SGA III",
        "BOS @ ATL — 8:00 PM ET, ESPN — Celtics W6 vs. Hawks W3, streaks collide",
        "PHI @ ORL — 6:00 PM ET — play-in battle, Maxey vs. Paolo",
        "LAC @ PHX — 10:00 PM ET — Booker vs. Kawhi in the late window",
      ],
      debateAngle:
        "Saturday night is loaded. DET-NYK on ABC is the headliner — East 1 vs. 3 in primetime at the Garden. OKC-DEN on TNT is the desperation game with the Thunder trying to stop a 3-game skid. And BOS-ATL on ESPN is two streaking teams colliding. This is one of the best Saturday slates of the season.",
      suggestedQuote:
        "Tonight is a massive Saturday slate. Detroit at the Knicks on ABC at 7:30 — East 1 vs. 3, Brunson vs. Cade, the Garden on national TV. Then OKC at Denver on TNT at 9:30 — the Thunder have lost three straight and need a win desperately. And Boston at Atlanta on ESPN at 8 — two teams on winning streaks colliding. Set your reminders. This is appointment television.",
      relevantPlayers: [
        "Jalen Brunson",
        "Cade Cunningham",
        "Shai Gilgeous-Alexander",
        "Nikola Jokic",
        "Trae Young",
        "Devin Booker",
      ],
    },
  ],
  coldOpen:
    "What's up everybody — welcome back to the show. Victor Wembanyama just seized the 1-seed. Thirty-two points, 10 rebounds, 6 assists, 3 blocks — and the Spurs have won TWELVE straight games. Meanwhile OKC has lost three in a row for the first time all season. Luka Doncic went into Denver and dropped 36, 8, and 10 to end the Nuggets' 8-game streak and push the Lakers to five straight wins. Brunson had 28 and 7 as the Knicks hit 51 wins. Trae had 28 and 9 as the Hawks won their third straight. And tonight? Detroit at the Knicks on ABC. OKC at Denver on TNT. Boston at Atlanta on ESPN. Saturday night basketball at its absolute best. Let's get into it.",
  socialClip:
    "The Wemby coronation opener is the clip. His 32/10/6/3BLK line seizing the 1-seed while OKC collapses with three straight losses is the most dramatic storyline in basketball right now. The combination of Wemby's dominance, the Spurs' 12-game streak, and OKC's sudden crisis makes this the most shareable segment — it captures the biggest power shift of the season in one story.",
  tweetThread: [
    "1/ NEW EPISODE: Wemby seizes the 1-seed with 32/10/6/3BLK, Spurs W12. Luka drops 36/8/10 to end Denver's streak. OKC loses 3 straight for the first time all year. Plus a loaded Saturday slate tonight. A thread.",
    "2/ Victor Wembanyama: 32 PTS, 10 REB, 6 AST, 3 BLK. The Spurs have won TWELVE STRAIGHT. They own the 1-seed outright. OKC has lost three in a row for the first time all season. This is a coronation. Wemby is the best player in basketball.",
    "3/ Luka Doncic went INTO Denver and dropped 36/8/10 to end the Nuggets' 8-game win streak. The Lakers have won 5 straight. The West is wide open and Luka is playing the best ball of his career at exactly the right time.",
    "4/ OKC has lost 3 straight for the first time all season. They've given up the 1-seed. And tonight they go to Denver on TNT at 9:30. This is a crisis. The Thunder need to stop the bleeding or they're heading into the playoffs with serious questions.",
    "5/ Brunson: 28/7, Knicks at 51 wins. Trae: 28/9, Hawks W3. Barnes: 29/8/7 bounce-back. A lot of star guards showed up last night. The playoff picture is taking shape and these performances matter.",
    "6/ TONIGHT: DET @ NYK on ABC at 7:30 — East 1 vs. 3 in primetime. OKC @ DEN on TNT at 9:30 — Thunder desperate. BOS @ ATL on ESPN at 8 — streaks collide. Plus PHI @ ORL and LAC @ PHX. Saturday night basketball is LOADED.",
  ],
};
