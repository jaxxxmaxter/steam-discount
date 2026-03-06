import { Game, SaleEvent } from '@/types';

/**
 * Mock Data for Steam Discounts
 * This data simulates the current Steam sale events
 */

// Current active sale event
export const currentSale: SaleEvent = {
  id: 'spring-sale-2026',
  name: '春季特卖',
  startDate: '2026-03-01T00:00:00Z',
  endDate: '2026-03-15T00:00:00Z',
  description: '春季特卖火热进行中，数千款游戏打折促销！',
  isActive: true,
};

// Mock game data
export const games: Game[] = [
  {
    id: '1',
    name: 'Baldur\'s Gate 3',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
    originalPrice: 39800,
    currentPrice: 27860,
    discountPercent: 30,
    lowestPrice: 27860,
    isLowestEver: true,
    releaseDate: '2023-08-03',
    rating: 96,
    reviewCount: 185000,
    genres: ['RPG', '策略', '冒险'],
    platforms: ['Windows', 'macOS', 'Linux'],
  },
  {
    id: '2',
    name: 'Cyberpunk 2077',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    originalPrice: 29800,
    currentPrice: 8940,
    discountPercent: 70,
    lowestPrice: 8940,
    isLowestEver: true,
    releaseDate: '2020-12-10',
    rating: 89,
    reviewCount: 320000,
    genres: ['RPG', '动作', '开放世界'],
    platforms: ['Windows', 'PS5', 'Xbox'],
  },
  {
    id: '3',
    name: 'Hades',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
    originalPrice: 2980,
    currentPrice: 894,
    discountPercent: 70,
    lowestPrice: 745,
    isLowestEver: false,
    releaseDate: '2020-09-17',
    rating: 97,
    reviewCount: 125000,
    genres: [' rogue-like', '动作', '地牢'],
    platforms: ['Windows', 'macOS', 'Linux', 'Switch'],
  },
  {
    id: '4',
    name: 'Elden Ring',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
    originalPrice: 29800,
    currentPrice: 20860,
    discountPercent: 30,
    lowestPrice: 20860,
    isLowestEver: true,
    releaseDate: '2022-02-25',
    rating: 95,
    reviewCount: 280000,
    genres: ['RPG', '动作', '开放世界', '魂类'],
    platforms: ['Windows', 'PS5', 'PS4', 'Xbox'],
  },
  {
    id: '5',
    name: 'Red Dead Redemption 2',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    originalPrice: 29800,
    currentPrice: 5960,
    discountPercent: 80,
    lowestPrice: 5960,
    isLowestEver: true,
    releaseDate: '2019-11-05',
    rating: 93,
    reviewCount: 210000,
    genres: ['动作', '开放世界', '冒险'],
    platforms: ['Windows'],
  },
  {
    id: '6',
    name: 'God of War Ragnarök',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
    originalPrice: 39800,
    currentPrice: 31840,
    discountPercent: 20,
    lowestPrice: 31840,
    isLowestEver: true,
    releaseDate: '2022-11-09',
    rating: 94,
    reviewCount: 95000,
    genres: ['动作', '冒险', '角色扮演'],
    platforms: ['Windows', 'PS5', 'PS4'],
  },
  {
    id: '7',
    name: 'Hollow Knight',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg',
    originalPrice: 2680,
    currentPrice: 670,
    discountPercent: 75,
    lowestPrice: 536,
    isLowestEver: false,
    releaseDate: '2017-02-24',
    rating: 96,
    reviewCount: 180000,
    genres: [' Metroidvania', '动作', '冒险'],
    platforms: ['Windows', 'macOS', 'Linux', 'Switch'],
  },
  {
    id: '8',
    name: 'Stardew Valley',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg',
    originalPrice: 1480,
    currentPrice: 888,
    discountPercent: 40,
    lowestPrice: 370,
    isLowestEver: false,
    releaseDate: '2016-02-26',
    rating: 98,
    reviewCount: 420000,
    genres: ['模拟经营', 'RPG', '休闲'],
    platforms: ['Windows', 'macOS', 'Linux', 'Switch', 'PS4', 'Xbox'],
  },
  {
    id: '9',
    name: 'The Witcher 3: Wild Hunt',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
    originalPrice: 14900,
    currentPrice: 1490,
    discountPercent: 90,
    lowestPrice: 1490,
    isLowestEver: true,
    releaseDate: '2015-05-18',
    rating: 95,
    reviewCount: 680000,
    genres: ['RPG', '开放世界', '冒险'],
    platforms: ['Windows', 'macOS', 'Linux', 'Switch', 'PS4', 'Xbox'],
  },
  {
    id: '10',
    name: 'Sekiro: Shadows Die Twice',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg',
    originalPrice: 29800,
    currentPrice: 8940,
    discountPercent: 70,
    lowestPrice: 8940,
    isLowestEver: true,
    releaseDate: '2019-03-22',
    rating: 94,
    reviewCount: 190000,
    genres: ['动作', '魂类', '冒险'],
    platforms: ['Windows', 'PS4', 'Xbox'],
  },
  {
    id: '11',
    name: 'Disco Elysium',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/632470/header.jpg',
    originalPrice: 2980,
    currentPrice: 1490,
    discountPercent: 50,
    lowestPrice: 745,
    isLowestEver: false,
    releaseDate: '2019-10-15',
    rating: 96,
    reviewCount: 85000,
    genres: ['RPG', '冒险', '叙事'],
    platforms: ['Windows', 'macOS', 'Linux', 'PS4', 'Xbox', 'Switch'],
  },
  {
    id: '12',
    name: 'Hollow Knight: Silksong',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/header.jpg',
    originalPrice: 2980,
    currentPrice: 2086,
    discountPercent: 30,
    lowestPrice: 2086,
    isLowestEver: true,
    releaseDate: '2025-06-01',
    rating: 94,
    reviewCount: 45000,
    genres: [' Metroidvania', '动作', '冒险'],
    platforms: ['Windows', 'macOS', 'Linux', 'Switch'],
  },
];

/**
 * API Functions
 * These simulate API calls with a delay
 */

export async function getGames(): Promise<Game[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return games;
}

export async function getCurrentSale(): Promise<SaleEvent> {
  await new Promise(resolve => setTimeout(resolve, 50));
  return currentSale;
}

export async function getGamesByDiscount(minDiscount: number): Promise<Game[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return games.filter(game => game.discountPercent >= minDiscount);
}

export async function getLowestEverGames(): Promise<Game[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return games.filter(game => game.isLowestEver);
}

/**
 * Utility function to format price from cents to display format
 */
export function formatPrice(cents: number): string {
  return `¥${(cents / 100).toFixed(2)}`;
}

/**
 * Get today's date for display
 */
export function getTodayDate(): string {
  return new Date().toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
