import { Game, SaleEvent } from '@/types';

export const games: Game[] = [
  {
    id: '1',
    name: 'Counter-Strike 2',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
    originalPrice: 0,
    currentPrice: 0,
    discountPercent: 0,
    lowestPrice: 0,
    isLowestEver: false,
    releaseDate: '2023-09-27',
    rating: 89,
    reviewCount: 1250000,
    genres: ['FPS', '动作', '多人'],
    platforms: ['Windows', 'Mac', 'Linux'],
    steamUrl: 'https://store.steampowered.com/app/730/CounterStrike_2/'
  },
  {
    id: '2',
    name: 'DOTA 2',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg',
    originalPrice: 0,
    currentPrice: 0,
    discountPercent: 0,
    lowestPrice: 0,
    isLowestEver: false,
    releaseDate: '2013-07-09',
    rating: 83,
    reviewCount: 980000,
    genres: ['MOBA', '策略', '多人'],
    platforms: ['Windows', 'Mac', 'Linux'],
    steamUrl: 'https://store.steampowered.com/app/570/DOTA_2/'
  },
  {
    id: '3',
    name: 'PUBG: BATTLEGROUNDS',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg',
    originalPrice: 998,
    currentPrice: 298,
    discountPercent: 70,
    lowestPrice: 298,
    isLowestEver: true,
    releaseDate: '2017-12-21',
    rating: 72,
    reviewCount: 850000,
    genres: ['射击', '生存', '多人'],
    platforms: ['Windows'],
    steamUrl: 'https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/'
  },
  {
    id: '4',
    name: 'Grand Theft Auto V',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
    originalPrice: 199,
    currentPrice: 59.64,
    discountPercent: 70,
    lowestPrice: 59.64,
    isLowestEver: true,
    releaseDate: '2015-04-14',
    rating: 88,
    reviewCount: 620000,
    genres: ['动作', '开放世界', '冒险'],
    platforms: ['Windows'],
    steamUrl: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  },
  {
    id: '5',
    name: "Baldur's Gate 3",
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
    originalPrice: 298,
    currentPrice: 238.4,
    discountPercent: 20,
    lowestPrice: 178.8,
    isLowestEver: false,
    releaseDate: '2023-08-03',
    rating: 96,
    reviewCount: 320000,
    genres: ['RPG', '策略', '回合制'],
    platforms: ['Windows', 'Mac'],
    steamUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
  },
  {
    id: '6',
    name: 'ELDEN RING',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    originalPrice: 298,
    currentPrice: 208.6,
    discountPercent: 30,
    lowestPrice: 178.8,
    isLowestEver: false,
    releaseDate: '2022-02-25',
    rating: 95,
    reviewCount: 580000,
    genres: ['动作', 'RPG', '开放世界'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    steamUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
  },
  {
    id: '7',
    name: 'Red Dead Redemption 2',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    originalPrice: 249,
    currentPrice: 124.5,
    discountPercent: 50,
    lowestPrice: 99.6,
    isLowestEver: false,
    releaseDate: '2019-11-05',
    rating: 93,
    reviewCount: 450000,
    genres: ['动作', '开放世界', '西部'],
    platforms: ['Windows'],
    steamUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
  },
  {
    id: '8',
    name: 'Monster Hunter: World',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg',
    originalPrice: 308,
    currentPrice: 92.4,
    discountPercent: 70,
    lowestPrice: 61.6,
    isLowestEver: false,
    releaseDate: '2018-08-09',
    rating: 88,
    reviewCount: 380000,
    genres: ['动作', '角色扮演', '合作'],
    platforms: ['Windows', 'PlayStation', 'Xbox'],
    steamUrl: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/'
  }
];

// Mock sale event
const currentSale: SaleEvent = {
  id: 'spring-2026',
  name: '春季特卖',
  startDate: '2026-03-01',
  endDate: '2026-03-15',
  description: 'Steam 春季特卖活动中，大量游戏打折！',
  isActive: true,
};

// Get all games
export function getGames(): Promise<Game[]> {
  return Promise.resolve(games);
}

// Get current sale event
export function getCurrentSale(): Promise<SaleEvent | null> {
  return Promise.resolve(currentSale);
}

// Get games with lowest ever price
export function getLowestEverGames(): Promise<Game[]> {
  const lowestGames = games.filter(game => game.isLowestEver);
  return Promise.resolve(lowestGames);
}

// Format price for display
export function formatPrice(price: number): string {
  if (price === 0) return '免费';
  return `¥${price.toFixed(2)}`;
}

// Get today's date formatted
export function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}年${month}月${day}日`;
}
