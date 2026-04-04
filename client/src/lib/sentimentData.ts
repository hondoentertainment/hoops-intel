// Social Sentiment Pulse — Daily NBA Sentiment Analysis
// Last updated: April 4, 2026
// Live at: https://hoopsintel.net/sentiment

// ═══════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════

export interface PlayerSentiment {
  player: string;
  team: string;
  overallSentiment: number; // -100 to +100
  sentimentTrend: "positive" | "negative" | "neutral" | "shifting";
  twitterScore: number;
  redditScore: number;
  volume: "viral" | "high" | "moderate" | "low";
  topTake: string;
  contraryTake: string;
  performanceGap: number; // sentiment vs actual performance (-50 to +50, positive = underrated, negative = overrated)
  buzzTopics: string[];
}

export interface TeamSentiment {
  team: string;
  fanMood: "ecstatic" | "optimistic" | "neutral" | "frustrated" | "furious";
  moodScore: number; // -100 to +100
  topGrievance: string;
  brightSpot: string;
}

export interface SentimentData {
  generatedDate: string;
  players: PlayerSentiment[];
  teams: TeamSentiment[];
  viralMoment: { description: string; player: string; platform: string; engagement: string };
  overrated: { player: string; team: string; explanation: string };
  underrated: { player: string; team: string; explanation: string };
  narrative: string;
}

// ═══════════════════════════════════════════════════════════
// SENTIMENT DATA
// ═══════════════════════════════════════════════════════════

export const sentimentData: SentimentData = {
  generatedDate: "April 3, 2026",
  players: [
    {
      player: "Nikola Jokić",
      team: "DEN",
      overallSentiment: 97,
      sentimentTrend: "positive",
      twitterScore: 98,
      redditScore: 96,
      volume: "viral",
      topTake: "34/14/11 on OKC — the best team in the West — with the game on the line. Jokić is the greatest basketball player alive and it's not a debate anymore. Four MVPs aren't enough.",
      contraryTake: "He had 34 points but Denver barely escaped a team they should've blown out. If SGA had his A-game, OKC wins by 15. Jokić feasts in the regular season.",
      performanceGap: 3,
      buzzTopics: ["34/14/11", "triple-double machine", "fourth MVP push", "greatest ever", "W8 streak"],
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      overallSentiment: 74,
      sentimentTrend: "shifting",
      twitterScore: 70,
      redditScore: 78,
      volume: "high",
      topTake: "SGA dropped 30+ in a loss to Denver. He gave everything. Sometimes Jokić just wins and that's okay — SGA is still a top-3 player in the world.",
      contraryTake: "You can't be the MVP frontrunner and lose a home game to a team on a 7-game win streak. SGA didn't show up when OKC needed him most. Big question mark now.",
      performanceGap: -8,
      buzzTopics: ["MVP race", "home loss", "Jokić vs SGA", "OKC stumble", "50-win mark"],
    },
    {
      player: "Jalen Brunson",
      team: "NYK",
      overallSentiment: 91,
      sentimentTrend: "positive",
      twitterScore: 93,
      redditScore: 89,
      volume: "viral",
      topTake: "34 points against the best defense in the East. Brunson just willed the Knicks to win number 50 and he looks like the most reliable closer in the league right now. This is his city.",
      contraryTake: "Cleveland was missing two starters and Brunson padded the stat line in garbage time. The Knicks need him to do this in May, not April.",
      performanceGap: 5,
      buzzTopics: ["50 wins", "NYC closer", "34 points", "Knicks ceiling", "Garden eruption"],
    },
    {
      player: "Trae Young",
      team: "ATL",
      overallSentiment: 82,
      sentimentTrend: "positive",
      twitterScore: 80,
      redditScore: 84,
      volume: "high",
      topTake: "31 and 11 dimes against Philly and people still sleep on Trae. Atlanta just hit 44 wins with two games left and Trae is orchestrating one of the best stretches of his career.",
      contraryTake: "The Hawks are beating up on a Philly team that's already checked out for the season. Trae's 31 points came against a defense that stopped competing in the third quarter.",
      performanceGap: 10,
      buzzTopics: ["31/11", "W2", "Hawks resurgence", "Trae underrated", "point god mode"],
    },
    {
      player: "Devin Booker",
      team: "PHX",
      overallSentiment: 88,
      sentimentTrend: "positive",
      twitterScore: 90,
      redditScore: 86,
      volume: "high",
      topTake: "35 points and the Suns just demolished the Warriors by 21. Book is locked in and Phoenix is making a real push for a top-6 seed. He's the most underrated superstar in the West.",
      contraryTake: "He dropped 35 on a Warriors team that's 36-41 and imploding without Curry. Wait until Booker has to carry Phoenix against OKC or Denver in the playoffs before crowning him.",
      performanceGap: 12,
      buzzTopics: ["35 points", "Suns surge", "top-6 push", "Book cooking", "Warriors destruction"],
    },
    {
      player: "Paolo Banchero",
      team: "ORL",
      overallSentiment: 76,
      sentimentTrend: "positive",
      twitterScore: 72,
      redditScore: 80,
      volume: "moderate",
      topTake: "26/8/6 in a must-win game to keep Orlando alive at 40-36. Banchero is quietly becoming one of the best young forwards in the league and nobody talks about it enough.",
      contraryTake: "The Magic barely survived Charlotte — a team with 28 wins. If Banchero is so good, why is Orlando clinging to the 8-seed? He needs to be more consistent in close games.",
      performanceGap: 25,
      buzzTopics: ["26/8/6", "Magic survival", "must-win mode", "underrated forward", "40 wins"],
    },
    {
      player: "Victor Wembanyama",
      team: "SAS",
      overallSentiment: 89,
      sentimentTrend: "positive",
      twitterScore: 87,
      redditScore: 91,
      volume: "high",
      topTake: "Wemby didn't play last night but the discourse is still all about him. The Spurs are locked in and he's putting up numbers no 22-year-old has any business putting up. Generational.",
      contraryTake: "Wemby sat last night and the Spurs didn't play. He's resting while other teams are fighting for seeding. Can't be the face of the league if you're not on the floor.",
      performanceGap: 4,
      buzzTopics: ["generational", "Spurs locked in", "DPOY candidate", "alien", "rest day"],
    },
    {
      player: "Anthony Edwards",
      team: "MIN",
      overallSentiment: 85,
      sentimentTrend: "positive",
      twitterScore: 88,
      redditScore: 82,
      volume: "high",
      topTake: "Ant didn't play last night but he's healthy again and coming back soon. The league is genuinely terrified. A fully locked-in Edwards coming off rest into the playoffs is a nightmare matchup for every team.",
      contraryTake: "Minnesota's winning without him anyway, which raises questions about whether the Wolves are actually better as a team when Ant isn't forcing shots in isolation.",
      performanceGap: 8,
      buzzTopics: ["return timeline", "healthy Ant", "Wolves depth", "playoff terror", "isolation concerns"],
    },
  ],
  teams: [
    {
      team: "DEN Nuggets",
      fanMood: "ecstatic",
      moodScore: 92,
      topGrievance: "The national media still doesn't respect this Denver team. Eight straight wins and a win over OKC and they're treated like a feel-good story rather than a legitimate title contender.",
      brightSpot: "Jokić's 34/14/11 triple-double against the best team in the West is the single best performance of the season. Eight straight wins, 50-28 record, and Jokić is absolutely on fire. Denver is real.",
    },
    {
      team: "OKC Thunder",
      fanMood: "frustrated",
      moodScore: -18,
      topGrievance: "A home loss to Denver is genuinely concerning. The Thunder had OKC fans panicking in the fourth quarter and SGA couldn't close. Playoff pressure is a different animal and last night raised questions.",
      brightSpot: "Still 51-28 and the second-best record in the West. One loss at home to a Jokić triple-double game is not a crisis — it's a footnote. The Thunder will be fine.",
    },
    {
      team: "NYK Knicks",
      fanMood: "ecstatic",
      moodScore: 88,
      topGrievance: "The bench depth is thin and the Knicks will need more than Brunson to beat a top-3 seed in the playoffs. Hartenstein's minutes have been inconsistent.",
      brightSpot: "50 wins. The Madison Square Garden faithful have been waiting years for this. Brunson's 34 points against Cleveland sealed it and the vibes in New York are electric right now.",
    },
    {
      team: "ATL Hawks",
      fanMood: "optimistic",
      moodScore: 72,
      topGrievance: "Still no national media coverage despite a two-game win streak and 44 wins. Atlanta sports fans are perpetually ignored and it's exhausting.",
      brightSpot: "Trae's 31/11 dropped Philly and the Hawks are playing with real confidence heading into the final stretch. 44-34 with playoff seeding implications still very much alive.",
    },
    {
      team: "PHX Suns",
      fanMood: "optimistic",
      moodScore: 74,
      topGrievance: "The Suns have been too inconsistent all season to trust. A 21-point win over a broken Warriors team is encouraging, but Phoenix has beaten bad teams all year and folded against contenders.",
      brightSpot: "Booker's 35-point performance and a dominant 21-point win over Golden State has Phoenix at 42-34 and firmly in the playoff picture. The Suns are surging at the right time.",
    },
    {
      team: "GSW Warriors",
      fanMood: "furious",
      moodScore: -78,
      topGrievance: "Blown out by 21 against Phoenix. Without Curry, this team is a league-average unit at best and the roster construction is a disaster. The dynasty is not just over — it's been over for two years and the front office won't admit it.",
      brightSpot: "The lottery odds keep improving. A top-4 pick and a healthy Curry comeback next season is the best-case scenario. At least there's a light somewhere at the end of this tunnel.",
    },
    {
      team: "ORL Magic",
      fanMood: "neutral",
      moodScore: 38,
      topGrievance: "The Magic barely survived Charlotte by 6 points. If Banchero hadn't gone off, this is a loss. Orlando's offense stalls out for long stretches and they can't score against elite defenses.",
      brightSpot: "40-36 and still in the play-in mix. Banchero's 26/8/6 showed his ceiling and the Magic are battle-tested. This team is young and gaining experience when it matters most.",
    },
    {
      team: "CLE Cavaliers",
      fanMood: "frustrated",
      moodScore: -32,
      topGrievance: "A home loss to the Knicks drops Cleveland out of the top-3 conversation. The Cavs have now lost three of their last five and the defensive intensity that defined their season has evaporated.",
      brightSpot: "Still comfortably in the top-4 in the East and the roster has enough talent to bounce back. Garland and Mitchell will be motivated after this one.",
    },
  ],
  viralMoment: {
    description: "Nikola Jokić's postgame interview after his 34/14/11 triple-double against OKC went viral when he shrugged off questions about a fourth MVP with a deadpan smile and said 'I just like playing basketball.' The clip has been viewed over 31 million times and spawned hundreds of thousands of memes, with fans contrasting his quiet humility against the league's most vocal players. The 'I just like playing basketball' line is already a trending sound on TikTok.",
    player: "Nikola Jokić",
    platform: "Twitter/X",
    engagement: "31.2M views, 398K likes, 112K retweets, 67K quote tweets",
  },
  overrated: {
    player: "Warriors Without Curry",
    team: "GSW",
    explanation: "Social media keeps treating each Golden State loss as a shocking development and running hot takes about 'the dynasty's collapse' — as if anyone expected this Warriors roster to compete without Stephen Curry. The outrage engagement is entirely manufactured. Golden State at 36-41 is exactly what a Curry-less Warriors team should be: a below-.500 squad with aging veterans and an unproven supporting cast. The internet is generating drama where there is none. This is a roster management issue, not a crisis. Save the hot takes for when Curry comes back.",
  },
  underrated: {
    player: "Paolo Banchero",
    team: "ORL",
    explanation: "Banchero put up 26/8/6 in a road must-win against the team above them in the standings and the reaction was a collective shrug from the national media. He is 22 years old, averaging 24 and 8 on the season, and carrying a franchise with no reliable second option into playoff position. The performance gap is enormous — he plays like a top-12 power forward but gets covered like a role player on a fringe team. If Banchero were in New York or Los Angeles, he'd be an All-Star talking point every night. Orlando's market invisibility is costing him the recognition he has fully earned.",
  },
  narrative: "The internet has crowned Jokić the undisputed king of the night — the triple-double against OKC sent the Denver subreddit into celebration mode and flipped the MVP discourse overnight. SGA truthers are quietly nervous. Brunson stans are celebrating 50 wins like a championship. Trae Young is begging for attention. And the Warriors' subreddit has graduated from grief counseling to full post-apocalyptic survival mode — 36-41, blown out by Phoenix, and the takes about trading everyone and rebuilding have reached peak volume. The East is tightening, the West is wild, and Jokić is walking pace-ing his way toward history. Business as usual.",
};
