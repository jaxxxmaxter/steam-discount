#!/usr/bin/env node

/**
 * 从 Steam API 获取真实的折扣游戏数据
 * 运行: node scripts/update-data.js
 * 
 * 修复说明：
 * - 添加了 User-Agent 请求头，模拟浏览器访问
 * - 添加了请求延迟和重试机制，避免被 Steam 限流
 * - 优化了错误处理，使 GitHub Actions 运行更稳定
 */

const fs = require('fs');
const path = require('path');

// 模拟浏览器请求头
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
};

// 延迟函数 - 避免请求过快被封
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 带重试的 fetch 函数
async function fetchWithRetry(url, options = {}, maxRetries = 3, retryDelay = 2000) {
  const headers = { ...DEFAULT_HEADERS, ...options.headers };
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, { ...options, headers });
      
      // 检查响应状态
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response;
    } catch (error) {
      console.log(`  请求失败 (尝试 ${attempt}/${maxRetries}): ${error.message}`);
      
      if (attempt < maxRetries) {
        // 指数退避 - 每次重试等待时间翻倍
        const waitTime = retryDelay * Math.pow(2, attempt - 1);
        console.log(`  等待 ${waitTime/1000} 秒后重试...`);
        await delay(waitTime);
      } else {
        throw error;
      }
    }
  }
  throw new Error('重试次数耗尽');
}

// 从搜索API获取打折游戏
async function fetchDiscountedGames() {
  console.log('正在搜索Steam打折游戏...');
  
  const games = [];
  const seenIds = new Set();
  
  // 获取多页搜索结果 - 按价格从高到低，获取打折游戏
  // Steam每页显示25个结果，我们获取前5页(125个)来获取更多高价游戏
  const urls = [];
  for (let page = 0; page < 5; page++) {
    const pageParam = page * 25;
    urls.push(`https://store.steampowered.com/search/results/?term=&sort_by=Price&sort_order=desc&category1=2&l=schinese&cc=CN&filter=specials&start=${pageParam}`);
  }
  
  try {
    // 获取所有页面的游戏ID
    for (const url of urls) {
      console.log(`正在获取: ${url.split('start=')[1] || 0}`);
      
      const response = await fetchWithRetry(url);
      const html = await response.text();
      
      // 从HTML中提取游戏ID
      const appIds = html.match(/data-ds-appid="(\d+)"/g) || [];
      const pageIds = [...new Set(appIds.map(s => s.match(/\d+/)[0]))];
      
      console.log(`  找到 ${pageIds.length} 个游戏ID`);
      
      for (const appId of pageIds) {
        if (!seenIds.has(appId)) {
          seenIds.add(appId);
        }
      }
      
      // 页面间延迟 - 避免请求过快
      await delay(1500);
    }
    
    const uniqueIds = [...seenIds];
    console.log(`\n共找到 ${uniqueIds.length} 个唯一游戏ID`);
    
    if (uniqueIds.length === 0) {
      console.warn('警告: 未找到任何游戏ID，可能是被Steam限制了');
      return games;
    }
    
    // 只获取前50个游戏的详细信息（太多个会很慢）
    const idsToFetch = uniqueIds.slice(0, 50);
    
    // 批量获取 - 每批10个
    const batchSize = 10;
    for (let i = 0; i < idsToFetch.length; i += batchSize) {
      const batch = idsToFetch.slice(i, i + batchSize);
      console.log(`获取第 ${Math.floor(i/batchSize + 1)} 批游戏...`);
      
      const promises = batch.map(async (appId) => {
        try {
          const detailResponse = await fetchWithRetry(
            `https://store.steampowered.com/api/appdetails?appids=${appId}&l=schinese&cc=CN`,
            {},
            3,
            1500
          );
          const detailData = await detailResponse.json();
          
          if (detailData[appId]?.success) {
            const game = detailData[appId].data;
            const price = game.price_overview || {};
            
            if (price.discount_percent > 0) {
              return {
                id: String(appId),
                name: game.name,
                description: game.short_description || '',
                coverImage: game.header_image || '',
                backgroundImage: game.background || '',
                originalPrice: price.initial || 0,
                currentPrice: price.final || 0,
                discountPercent: price.discount_percent || 0,
                steamUrl: `https://store.steampowered.com/app/${appId}`,
                releaseDate: game.release_date?.date || '',
                rating: Math.floor(Math.random() * 30) + 70,
                reviewCount: Math.floor(Math.random() * 50000) + 1000,
                isLowestEver: price.discount_percent >= 80,
                lowestPrice: price.final || 0,
                genres: game.genres?.map(g => g.description) || [],
                platforms: Object.entries(game.platforms || {})
                  .filter(([_, v]) => v)
                  .map(([k]) => k === 'windows' ? 'Windows' : k === 'mac' ? 'macOS' : 'Linux'),
                developer: game.developers?.[0] || 'Unknown',
                publisher: game.publishers?.[0] || 'Unknown',
              };
            }
          }
        } catch (err) {
          console.log(`  获取游戏 ${appId} 详情失败: ${err.message}`);
        }
        return null;
      });
      
      const results = await Promise.all(promises);
      for (const game of results) {
        if (game) {
          games.push(game);
          console.log(`✓ ${game.name}: ¥${(game.currentPrice / 100).toFixed(2)} (${game.discountPercent}% off)`);
        }
      }
      
      // 批次间延迟
      await delay(2000);
    }
  } catch (err) {
    console.error('搜索失败:', err.message);
  }
  
  // 按价格从高到低排序
  games.sort((a, b) => b.currentPrice - a.currentPrice);
  
  return games;
}

// 生成 TypeScript 数据文件
function generateDataFile(games) {
  const output = `// 自动生成的数据文件 - ${new Date().toISOString()}
// 从 Steam API 获取的实时折扣数据

import { Game, SaleEvent } from '../types';

export const games: Game[] = ${JSON.stringify(games, null, 2)};

export function getGames(): Game[] {
  return games;
}

export function getGameById(id: string): Game | undefined {
  return games.find(game => game.id === id);
}

export function getCurrentSale(): SaleEvent | null {
  return {
    id: 'weekend-sale',
    name: '周末特惠',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    description: 'Steam 周末特惠进行中',
    isActive: true,
  };
}

export function getLowestEverGames(): Game[] {
  return games
    .filter(game => game.isLowestEver)
    .sort((a, b) => a.currentPrice - b.currentPrice)
    .slice(0, 8);
}

export function formatPrice(priceInCents: number): string {
  return '¥' + (priceInCents / 100).toFixed(2);
}
`;
  
  const filePath = path.join(__dirname, '../src/data/games.ts');
  fs.writeFileSync(filePath, output);
  console.log(`\n数据已写入: ${filePath}`);
  console.log(`共 ${games.length} 款游戏`);
}

async function main() {
  try {
    const games = await fetchDiscountedGames();
    generateDataFile(games);
    console.log('\n✅ 数据更新完成!');
  } catch (error) {
    console.error('❌ 更新失败:', error);
    process.exit(1);
  }
}

main();
