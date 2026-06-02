export type Competitor = {
  channel: string;
  niche: string;
  subscribers: number;
  averageViews: number;
  latestOutlier: string;
  status: "Tracking" | "Watching";
};

export type OutlierVideo = {
  title: string;
  channel: string;
  averageViews: number;
  views: number;
  score: number;
  uploadDate: string;
  signal: string;
};

export type ContentIdea = {
  title: string;
  reason: string;
  confidence: number;
  pattern: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

export type Trend = { title: string; strength: string; description: string };
export type Report = {
  title: string;
  date: string;
  outliers: number;
  topScore: number;
  href: string;
};

export const competitors: Competitor[] = [
  {
    channel: "BlockForge",
    niche: "Minecraft",
    subscribers: 148000,
    averageViews: 25000,
    latestOutlier: "16.4x",
    status: "Tracking",
  },
  {
    channel: "CraftPulse",
    niche: "Minecraft",
    subscribers: 94000,
    averageViews: 18000,
    latestOutlier: "11.7x",
    status: "Tracking",
  },
  {
    channel: "RedstoneLabs",
    niche: "Minecraft",
    subscribers: 211000,
    averageViews: 32000,
    latestOutlier: "8.9x",
    status: "Tracking",
  },
  {
    channel: "SurvivalStack",
    niche: "Minecraft",
    subscribers: 305000,
    averageViews: 41000,
    latestOutlier: "8.7x",
    status: "Tracking",
  },
  {
    channel: "PixelPilot",
    niche: "Roblox",
    subscribers: 126000,
    averageViews: 22000,
    latestOutlier: "7.6x",
    status: "Watching",
  },
  {
    channel: "DeskMode",
    niche: "Tech Reviews",
    subscribers: 86000,
    averageViews: 16000,
    latestOutlier: "5.4x",
    status: "Tracking",
  },
];

export const outliers: OutlierVideo[] = [
  {
    title: "I Survived 100 Days Underground",
    channel: "BlockForge",
    averageViews: 25000,
    views: 410000,
    score: 16.4,
    uploadDate: "2 days ago",
    signal: "Breakout",
  },
  {
    title: "Minecraft But Villagers Control Me",
    channel: "CraftPulse",
    averageViews: 18000,
    views: 211000,
    score: 11.7,
    uploadDate: "4 days ago",
    signal: "Fast Growth",
  },
  {
    title: "I Built a Base in the Deep Dark",
    channel: "RedstoneLabs",
    averageViews: 32000,
    views: 284000,
    score: 8.9,
    uploadDate: "5 days ago",
    signal: "Strong Niche Pull",
  },
  {
    title: "100 Days Without Crafting",
    channel: "SurvivalStack",
    averageViews: 41000,
    views: 356000,
    score: 8.7,
    uploadDate: "6 days ago",
    signal: "Repeatable Format",
  },
  {
    title: "Minecraft But Every Mob Evolves",
    channel: "VoxelVerse",
    averageViews: 31000,
    views: 238000,
    score: 7.7,
    uploadDate: "1 week ago",
    signal: "Rising Mechanic",
  },
];

export const contentIdeas: ContentIdea[] = [
  {
    title: "Minecraft But I Can Only Live Underground",
    reason:
      "Combines the strongest restriction and survival signals in one instantly clear premise.",
    confidence: 89,
    pattern: "Restriction challenge",
    difficulty: "Medium",
  },
  {
    title: "100 Days Without Crafting",
    reason:
      "A familiar format with a severe limitation that creates natural story beats.",
    confidence: 86,
    pattern: "100 days + limitation",
    difficulty: "Hard",
  },
  {
    title: "I Let Villagers Control My Survival World",
    reason:
      "Turns a growing control mechanic into a character-led survival story.",
    confidence: 84,
    pattern: "External control",
    difficulty: "Medium",
  },
  {
    title: "I Built a Base Inside the Deep Dark",
    reason:
      "Pairs a strong build payoff with a dangerous and recognisable biome.",
    confidence: 82,
    pattern: "Build under pressure",
    difficulty: "Medium",
  },
  {
    title: "Minecraft But Every Tool Breaks Instantly",
    reason:
      "A simple rule creates immediate friction and strong thumbnail potential.",
    confidence: 79,
    pattern: "Tool restriction",
    difficulty: "Easy",
  },
  {
    title: "I Survived 100 Days With No Inventory",
    reason:
      "Pushes the proven survival format with a severe, easy-to-understand restriction.",
    confidence: 78,
    pattern: "100 days + limitation",
    difficulty: "Hard",
  },
  {
    title: "Minecraft But Mobs Upgrade Every Night",
    reason: "Escalating stakes give the video a natural retention curve.",
    confidence: 76,
    pattern: "Escalating danger",
    difficulty: "Medium",
  },
  {
    title: "I Trapped Myself Below Bedrock",
    reason:
      "A visually obvious setting and escape question open a strong curiosity gap.",
    confidence: 74,
    pattern: "Survival restriction",
    difficulty: "Medium",
  },
  {
    title: "I Built the Safest Base in the Most Dangerous Biome",
    reason: "Uses contrast to create a satisfying build transformation.",
    confidence: 72,
    pattern: "Build under pressure",
    difficulty: "Hard",
  },
  {
    title: "Minecraft But I Cannot Touch the Surface",
    reason:
      "A clean rule that supports a distinctive underground visual language.",
    confidence: 71,
    pattern: "Restriction challenge",
    difficulty: "Easy",
  },
];

export const trends: Trend[] = [
  {
    title: "Restriction Challenges",
    strength: "High",
    description:
      "Clear limitations are consistently outperforming open-ended survival uploads.",
  },
  {
    title: "Villager / AI Control",
    strength: "Medium-High",
    description:
      "Creator-control mechanics are growing quickly and create natural chaos.",
  },
  {
    title: "Deep Dark Survival",
    strength: "Medium",
    description:
      "The biome remains a reliable visual shorthand for danger and pressure.",
  },
];

export const reports: Report[] = [
  {
    title: "Minecraft Niche Weekly Report",
    date: "June 2026",
    outliers: 12,
    topScore: 16.4,
    href: "/reports/sample",
  },
  {
    title: "Roblox Niche Weekly Report",
    date: "June 2026",
    outliers: 9,
    topScore: 11.2,
    href: "/reports/sample",
  },
  {
    title: "Tech Reviews Weekly Report",
    date: "June 2026",
    outliers: 7,
    topScore: 9.8,
    href: "/reports/sample",
  },
];
