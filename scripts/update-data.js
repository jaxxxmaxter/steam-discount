/**
 * Data Update Script
 * Fetches real Steam game deals from CheapShark API
 * Run: node scripts/update-data.js
 */

const fs = require('fs');
const path = require('path');

// CheapShark API endpoint - storeID=1 is Steam
const API_URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=100&pageSize=50';

// Output file
const OUTPUT_FILE = path.join(__dirname, '../src/data/games.ts');

// Convert dollar price to cents
function toCents(dollars) {
  return Math.round(parseFloat(dollars) * 100);
}

// Format release date
function formatReleaseDate(timestamp) {
  return new Date(timestamp * 1000).toISOString().split('T')[0];
}

// Fetch deals from CheapShark
async function fetchDeals() {
  console.log('Fetching deals from CheapShark API...');
  
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }
  
  const deals = await response.json();
  console.log(`Found ${deals.length} deals`);
  
  return deals;
}

// Transform CheapShark data to our Game format
function transformDeal(deal, index) {
  const game = {
    id: String(index + 1),
    name: deal.title,
    // Use Steam thumbnail as cover image
    coverImage: deal.thumb.replace('capsule_231x87', 'header').replace('_alt_assets_', '/'),
    originalPrice: toCents(deal.normalPrice),
    currentPrice: toCents(deal.salePrice),
    discountPercent: Math.round(parseFloat(deal.savings)),
    // CheapShark doesn't provide historical lowest, use current as approximation
    lowestPrice: toCents(deal.salePrice),
    isLowestEver: parseFloat(deal.savings) >= 80, // Consider 80%+ as "lowest ever"
    releaseDate: formatReleaseDate(deal.releaseDate),
    rating: deal.metacriticScore ? parseInt(deal.metacriticScore) : 0,
    reviewCount: deal.steamRatingCount ? parseInt(deal.steamRatingCount) : 0,
    genres: [], // CheapShark doesn't provide genres, we'll leave empty
    platforms: ['Windows'], // Default to Windows
    steamUrl: `https://store.steampowered.com/app/${deal.steamAppID}/`
  };
  
  // Try to get more game info if we have app ID
  if (deal.steamAppID) {
    game.steamUrl = `https://store.steampowered.com/app/${deal.steamAppID}/`;
  }
  
  return game;
}

// Generate TypeScript file
function generateTypeScript(games) {
  const saleEvent = {
    id: 'current',
    name: 'Steam 促销中',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    description: 'Steam 商店最新折扣促销中，热门游戏限时优惠！',
    isActive: true,
  };

  const gamesArray = games.map((game, index) => transformDeal(game, index));

  const content = `import { Game, SaleEvent } from '@/types';

export const games: Game[] = ${JSON.stringify(gamesArray, null, 2)};

// Current sale event
const currentSale: SaleEvent = ${JSON.stringify(saleEvent, null, 2)};

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
  return \`¥\${(price / 100).toFixed(2)}\`;
}

// Get today's date formatted
export function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return \`\${year}年\${month}月\${day}日\`;
}
`;

  return content;
}

// Main function
async function main() {
  try {
    const deals = await fetchDeals();
    const typescript = generateTypeScript(deals);
    
    fs.writeFileSync(OUTPUT_FILE, typescript);
    console.log(`✓ Data written to ${OUTPUT_FILE}`);
    console.log(`✓ Updated ${deals.length} games`);
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
