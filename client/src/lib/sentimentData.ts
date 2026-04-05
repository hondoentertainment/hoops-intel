// Social Sentiment Pulse — Daily NBA Sentiment Analysis
// Last updated: April 5, 2026
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
  generatedDate: "April 5, 2026",
  players: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      overallSentiment: 99,
      sentimentTrend: "positive",
      twitterScore: 99,
      redditScore: 99,
      volume: "viral",
      topTake: "32/10/6/3BLK against OKC and the Spurs SEIZE the one-seed at 60-18 with a 12-game win streak. Wemby just took down the Thunder in their own building with a fadeaway over Holmgren that broke the internet. He is the best player in basketball and it's no longer close.",
      contraryTake: "OKC was missing key rotation minutes and SGA looked gassed in the fourth. The Thunder will have home court sorted out by the playoffs. One regular season game in April doesn't crown you the best player alive.",
      performanceGap: 2,
      buzzTopics: ["32/10/6/3BLK", "one-seed seized", "W12 streak", "60-18", "fadeaway over Holmgren", "best in the world"],
    },
    {
      player: "Luka Dončić",
      team: "LAL",
      overallSentiment: 95,
      sentimentTrend: "positive",
      twitterScore: 96,
      redditScore: 94,
      volume: "high",
      topTake: "36/8/10 to destroy Denver and the Lakers have won 5 straight at 52-26. Luka just outdueled Jokic in a game that felt like a playoff preview. He had 10 assists, controlled the pace all night, and the Lakers look like genuine title contenders heading into the postseason.",
      contraryTake: "Denver was on the second night of a back-to-back and Jokic still nearly had a triple-double in the loss. The Lakers needed Luka to go nuclear just to beat a tired Nuggets team. That's not the flex LA fans think it is.",
      performanceGap: 3,
      buzzTopics: ["36/8/10", "Lakers W5", "52-26", "outdueled Jokic", "playoff contender", "Luka masterclass"],
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      overallSentiment: -20,
      sentimentTrend: "shifting",
      twitterScore: -25,
      redditScore: -15,
      volume: "high",
      topTake: "SGA watched the Spurs walk into OKC and take the one-seed right out of the Thunder's hands. 113 points at home against San Antonio is embarrassing. The MVP campaign is unraveling in real time and SGA looks like he's pressing under the weight of Wemby's shadow.",
      contraryTake: "SGA still had a solid game and the Thunder lost by 5 to the hottest team in the league. One loss doesn't erase a 59-win season. OKC fans need to take a breath — this team is still elite and SGA is still a top-5 player.",
      performanceGap: -15,
      buzzTopics: ["lost one-seed", "Wemby owned him", "MVP slipping", "Thunder collapse", "pressing under pressure"],
    },
    {
      player: "Jalen Brunson",
      team: "NYK",
      overallSentiment: 88,
      sentimentTrend: "positive",
      twitterScore: 90,
      redditScore: 86,
      volume: "high",
      topTake: "28/7 to take down Cleveland and the Knicks have won 3 straight with 51 wins. Brunson is the engine of this team and he just proved New York can beat the best in the East when it matters. MSG was electric and this team is peaking at the right time.",
      contraryTake: "Cleveland was resting starters down the stretch and the Cavaliers clearly had one eye on the playoffs. Beating a coasting Cavs team at home doesn't make the Knicks a contender — let's see this in a seven-game series.",
      performanceGap: 5,
      buzzTopics: ["28/7", "Knicks W3", "51 wins", "beat Cleveland", "MSG electric", "playoff ready"],
    },
    {
      player: "Trae Young",
      team: "ATL",
      overallSentiment: 85,
      sentimentTrend: "positive",
      twitterScore: 87,
      redditScore: 83,
      volume: "high",
      topTake: "28/9 and the Hawks have won 3 straight to climb to 45-34. Trae is orchestrating Atlanta's late-season surge and this team is suddenly a dangerous playoff matchup for anyone. The floater game is back and he's running the pick-and-roll at an elite level.",
      contraryTake: "Miami has been a mess all month and beating a dysfunctional Heat team doesn't prove Atlanta belongs with the elite. Trae still gets cooked on defense and the Hawks' ceiling is a second-round exit at best.",
      performanceGap: 10,
      buzzTopics: ["28/9", "Hawks W3", "45-34", "late-season surge", "floater game elite", "playoff dark horse"],
    },
    {
      player: "Nikola Jokić",
      team: "DEN",
      overallSentiment: 78,
      sentimentTrend: "negative",
      twitterScore: 75,
      redditScore: 81,
      volume: "high",
      topTake: "32/12/9 in a loss to the Lakers and Jokic nearly willed Denver back from a 15-point deficit. He was magnificent individually but the supporting cast couldn't keep up with Luka and the Nuggets' win streak is over. Jokic deserves better.",
      contraryTake: "Jokic had 32/12/9 and still lost. At some point the 'he did everything he could' narrative gets old. The Nuggets need Jokic to elevate his teammates, not just put up stats in losses. Denver's title window is closing.",
      performanceGap: -8,
      buzzTopics: ["32/12/9 in loss", "streak snapped", "Luka outdueled him", "supporting cast failing", "title window closing"],
    },
    {
      player: "Scottie Barnes",
      team: "TOR",
      overallSentiment: 76,
      sentimentTrend: "positive",
      twitterScore: 74,
      redditScore: 78,
      volume: "moderate",
      topTake: "29/8/7 to lead the Raptors past Charlotte and Barnes looked like a genuine All-Star in every facet. He's doing everything — scoring, rebounding, playmaking — and Toronto is starting to build something real around him. The bounce-back game was exactly what he needed.",
      contraryTake: "It's Charlotte. The Hornets are one of the worst teams in the league and dropping 29 on them doesn't make Barnes an All-Star. Toronto still has a long way to go and beating bad teams doesn't change the trajectory.",
      performanceGap: 18,
      buzzTopics: ["29/8/7", "bounce back", "all-around game", "underrated star", "Raptors building"],
    },
    {
      player: "Anthony Edwards",
      team: "MIN",
      overallSentiment: 80,
      sentimentTrend: "neutral",
      twitterScore: 78,
      redditScore: 82,
      volume: "moderate",
      topTake: "Edwards didn't play last night but the vibes are stable in Minnesota. Ant is still a franchise cornerstone and the Wolves are in a solid playoff position. The focus is on rest and preparation for the postseason push.",
      contraryTake: "Minnesota has been treading water for weeks and Edwards hasn't had a signature win in a month. The Timberwolves need Ant to be a top-5 player and he's been closer to top-15 lately. The playoffs will expose this.",
      performanceGap: 8,
      buzzTopics: ["rest day", "playoff prep", "franchise cornerstone", "Wolves steady", "postseason focus"],
    },
  ],
  teams: [
    {
      team: "SAS Spurs",
      fanMood: "ecstatic",
      moodScore: 98,
      topGrievance: "The only complaint is that the national media took this long to acknowledge San Antonio as the best team in basketball. Twelve straight wins and the one-seed and the Spurs are still getting less coverage than losing teams in bigger markets.",
      brightSpot: "Wembanyama's 32/10/6/3BLK masterclass in OKC seizes the one-seed at 60-18 with a 12-game win streak. The Spurs own the best record in the NBA. The rebuild didn't just work — it produced a dynasty in the making. San Antonio is back on top of the basketball world.",
    },
    {
      team: "LAL Lakers",
      fanMood: "ecstatic",
      moodScore: 92,
      topGrievance: "The defense still has lapses and allowing Jokic to nearly get a triple-double is concerning for a playoff matchup against Denver. The Lakers need the supporting cast to step up so Luka doesn't have to drop 36 every night.",
      brightSpot: "Luka's 36/8/10 demolition of Denver extends the win streak to 5 and pushes the Lakers to 52-26. Los Angeles just beat a legitimate contender with Luka outdueling Jokic head-to-head. This team is peaking at the perfect time and the vibes are championship-level.",
    },
    {
      team: "OKC Thunder",
      fanMood: "furious",
      moodScore: -45,
      topGrievance: "The Spurs came into OKC and ripped the one-seed away with Wembanyama dropping 32/10/6/3BLK. The Thunder lost at home in the biggest game of the season and now trail San Antonio at 59-19. The coaching adjustments were nonexistent and the fourth-quarter collapse was inexcusable. This franchise is watching its best season slip away in real time.",
      brightSpot: "OKC is still 59-19 and has the second-best record in the NBA. One loss to the hottest team in the league doesn't define the season. The Thunder have the roster depth and talent to make a deep playoff run regardless of seeding.",
    },
    {
      team: "NYK Knicks",
      fanMood: "optimistic",
      moodScore: 85,
      topGrievance: "The Knicks still haven't proven they can beat Cleveland in a playoff series and the regular season win felt too easy — like the Cavs weren't fully engaged. New York needs to prove this translates when the stakes are real.",
      brightSpot: "Brunson's 28/7 leads a 3-game win streak and the Knicks hit 51 wins. New York just beat the best team in the East at Madison Square Garden and the building was shaking. This team has the chemistry and the closer to make a deep playoff run.",
    },
    {
      team: "ATL Hawks",
      fanMood: "optimistic",
      moodScore: 78,
      topGrievance: "Atlanta's defense is still inconsistent and giving up 108 to a struggling Miami team is not inspiring confidence for the playoffs. The Hawks need to prove they can get stops against elite offenses.",
      brightSpot: "Trae's 28/9 powers a 3-game win streak and the Hawks are 45-34. Atlanta is surging at the perfect time and the combination of Trae's playmaking and the team's offensive firepower makes them a nightmare matchup in the first round.",
    },
    {
      team: "DEN Nuggets",
      fanMood: "frustrated",
      moodScore: -20,
      topGrievance: "Jokic put up 32/12/9 and the Nuggets still lost to the Lakers. The supporting cast disappeared in the second half and Denver's win streak is over at the worst possible time. If Jokic has to be this dominant just to keep games close, this team has a ceiling problem.",
      brightSpot: "Jokic's individual brilliance is undeniable — 32/12/9 against a playoff-caliber team shows he's still the most skilled player in the world. Denver is battle-tested and one loss doesn't change the Nuggets' playoff pedigree.",
    },
    {
      team: "TOR Raptors",
      fanMood: "neutral",
      moodScore: 40,
      topGrievance: "Beating Charlotte is the bare minimum and doesn't change the fact that Toronto is still in the middle of a rebuild. The Raptors need to see consistent growth from the young core, not just one good game against a bad team.",
      brightSpot: "Barnes' 29/8/7 bounce-back against Charlotte shows the franchise cornerstone is locked in. Toronto is developing its young talent and nights like this prove the future is bright even if the present is still a work in progress.",
    },
    {
      team: "CHA Hornets",
      fanMood: "frustrated",
      moodScore: -55,
      topGrievance: "Another blowout loss and the Hornets looked lifeless from the second quarter onward. Charlotte's rebuild feels like it has no direction and the roster lacks the talent to compete on most nights. The front office needs to make moves this offseason or the fanbase will completely check out.",
      brightSpot: "The young players are getting minutes and experience. Every loss is another step closer to a high lottery pick that could change the franchise's trajectory. The pain is temporary if the front office makes the right decisions this summer.",
    },
  ],
  viralMoment: {
    description: "Victor Wembanyama's third-quarter fadeaway over Chet Holmgren broke the internet. With the shot clock winding down and Holmgren draped all over him, Wemby rose up for a silky fadeaway from the elbow that kissed off the glass and dropped through the net. The 7-foot-4 unicorn fading away over the 7-foot-1 Holmgren — both former number-one picks — instantly became the defining image of the one-seed battle. The clip has been viewed over 35 million times and 'Wemby fadeaway' trended worldwide within minutes.",
    player: "Victor Wembanyama",
    platform: "Twitter/X",
    engagement: "35.2M views, 412K likes, 115K retweets, 67K quote tweets",
  },
  overrated: {
    player: "OKC Collapse Panic",
    team: "OKC",
    explanation: "Social media is in full meltdown mode after the Thunder lost the one-seed to San Antonio at home. The takes about OKC's window closing, SGA not being a real MVP candidate, and the Thunder being pretenders are wildly overblown. This is a 59-19 team that lost by 5 to the hottest team in basketball — a team on a 12-game win streak led by a generational talent. One loss at home in April does not invalidate one of the best seasons in franchise history. The Thunder are still elite and the panic is performative.",
  },
  underrated: {
    player: "Scottie Barnes",
    team: "TOR",
    explanation: "Barnes put up 29/8/7 against Charlotte — scoring, rebounding, and playmaking at an All-Star level — and it barely registered on the national radar. He is doing everything for Toronto, filling up every column of the box score, and developing into a legitimate franchise cornerstone. If Barnes played for New York or Los Angeles, his all-around game would be treated as elite. Instead he dominates on a rebuilding team in a market the American media ignores and his growth goes completely unnoticed. Barnes is one of the most complete young players in the NBA and deserves far more recognition.",
  },
  narrative: "Wembanyama seized the throne tonight. The 32/10/6/3BLK destruction of OKC — punctuated by the viral fadeaway over Holmgren — gave the Spurs the one-seed at 60-18 and a 12-game win streak. San Antonio walked into Oklahoma City and took the best record in basketball. The West has its king and his name is Wemby. Luka answered with 36/8/10 to outshoot Jokic and push the Lakers to 52-26 with five straight wins — LA looks terrifying. Brunson's 28/7 powered the Knicks past Cleveland for their third straight win and 51st of the season. Trae Young's 28/9 extended Atlanta's surge to three straight at 45-34. Barnes quietly dropped 29/8/7 on Charlotte while nobody watched. And OKC is in full crisis mode after losing the one-seed at home, with Thunder Twitter spiraling into existential dread. The Spurs are ascending, the Lakers are rolling, and Wemby's fadeaway over Holmgren is the image that will define April.",
};
