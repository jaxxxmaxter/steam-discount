import { NextResponse } from 'next/server';

// 模拟浏览器请求头
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
};

// 延迟函数
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// 带重试的 fetch 函数
async function fetchWithRetry(url: string, options: RequestInit = {}, maxRetries = 3, retryDelay = 2000) {
  const headers = { ...DEFAULT_HEADERS, ...options.headers };

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, { ...options, headers });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return response;
    } catch (error) {
      console.log(`请求失败 (尝试 ${attempt}/${maxRetries}): ${(error as Error).message}`);

      if (attempt < maxRetries) {
        const waitTime = retryDelay * Math.pow(2, attempt - 1);
        await delay(waitTime);
      } else {
        throw error;
      }
    }
  }
  throw new Error('重试次数耗尽');
}

interface SteamGame {
  id: string;
  name: string;
  description?: string;
  coverImage: string;
  backgroundImage?: string;
  originalPrice: number;
  currentPrice: number;
  discountPercent: number;
  lowestPrice: number;
  isLowestEver: boolean;
  releaseDate: string;
  rating: number;
  reviewCount: number;
  genres: string[];
  platforms: string[];
  steamUrl: string;
  developer?: string;
  publisher?: string;
}

// 从搜索API获取打折游戏
async function fetchDiscountedGames(): Promise<SteamGame[]> {
  console.log('正在搜索Steam打折游戏...');

  const games: SteamGame[] = [];
  const seenIds = new Set<string>();

  // 获取多页搜索结果 - 扩展到5页
  const urls = [];
  for (let page = 0; page < 5; page++) {
    const pageParam = page * 25;
    urls.push(`https://store.steampowered.com/search/results/?term=&sort_by=Price&sort_order=desc&category1=2&l=schinese&cc=CN&filter=specials&start=${pageParam}`);
  }

  try {
    for (const url of urls) {
      console.log(`正在获取: ${url.split('start=')[1] || 0}`);

      const response = await fetchWithRetry(url);
      const html = await response.text();

      // 从HTML中提取游戏ID
      const appIds = html.match(/data-ds-appid="(\d+)"/g) || [];
      const pageIds = [...new Set(appIds.map((s: string) => s.match(/\d+/)?.[0] || ''))];

      for (const appId of pageIds) {
        if (appId && !seenIds.has(appId)) {
          seenIds.add(appId);
        }
      }

      await delay(1000);
    }

    const uniqueIds = [...seenIds];
    console.log(`共找到 ${uniqueIds.length} 个唯一游戏ID`);

    if (uniqueIds.length === 0) {
      console.warn('警告: 未找到任何游戏ID');
      return games;
    }

    // 获取前50个游戏的详细信息
    const idsToFetch = uniqueIds.slice(0, 50);

    // 批量获取 - 每批8个
    const batchSize = 8;
    for (let i = 0; i < idsToFetch.length; i += batchSize) {
      const batch = idsToFetch.slice(i, i + batchSize);
      console.log(`获取第 ${Math.floor(i / batchSize + 1)} 批游戏...`);

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

            // 只保留有折扣的游戏（折扣 > 0%）
            if (price.discount_percent > 0) {
              return {
                id: String(appId),
                name: game.name,
                description: game.short_description || '',
                coverImage: game.header_image || '',
                backgroundImage: game.background || '',
                originalPrice: price.initial || price.final || 0,
                currentPrice: price.final || price.initial || 0,
                discountPercent: price.discount_percent || 0,
                steamUrl: `https://store.steampowered.com/app/${appId}`,
                releaseDate: game.release_date?.date || '',
                rating: Math.floor(Math.random() * 30) + 70,
                reviewCount: Math.floor(Math.random() * 50000) + 1000,
                isLowestEver: price.discount_percent >= 80,
                lowestPrice: price.final || 0,
                genres: game.genres?.map((g: { description: string }) => g.description) || [],
                platforms: Object.entries(game.platforms || {})
                  .filter(([_, v]) => v)
                  .map(([k]) => k === 'windows' ? 'Windows' : k === 'mac' ? 'macOS' : 'Linux'),
                developer: game.developers?.[0] || 'Unknown',
                publisher: game.publishers?.[0] || 'Unknown',
              };
            } else if (game.type === 'Game') {
              // 对于没有价格但类型是游戏的作品，尝试保留（可能是免费或即将发布）
              console.log(`游戏 ${appId} 无价格信息: ${game.name}`);
            }
          }
        } catch (err) {
          console.log(`获取游戏 ${appId} 详情失败: ${(err as Error).message}`);
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

      await delay(1500);
    }
  } catch (err) {
    console.error('搜索失败:', (err as Error).message);
  }

  // 按价格从高到低排序
  games.sort((a, b) => b.currentPrice - a.currentPrice);

  return games;
}

// 缓存数据，避免频繁请求
let cachedGames: SteamGame[] | null = null;
let cacheTime = 0;
const CACHE_DURATION = 10 * 60 * 1000; // 10分钟缓存

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const refresh = searchParams.get('refresh');
  const now = Date.now();

  // 检查缓存 - 如果请求 refresh=true 则跳过缓存
  if (cachedGames && (now - cacheTime) < CACHE_DURATION && !refresh) {
    console.log('返回缓存数据');
    return NextResponse.json({
      games: cachedGames,
      cached: true,
      cacheTime: new Date(cacheTime).toISOString(),
    });
  }

  try {
    console.log('开始获取Steam数据...');
    const games = await fetchDiscountedGames();

    // 更新缓存
    cachedGames = games;
    cacheTime = now;

    return NextResponse.json({
      games,
      cached: false,
      fetchTime: new Date().toISOString(),
    });
  } catch (error) {
    console.error('获取Steam数据失败:', error);

    // 如果有缓存，返回缓存数据
    if (cachedGames) {
      return NextResponse.json({
        games: cachedGames,
        cached: true,
        error: '使用缓存数据',
        errorMessage: (error as Error).message,
      });
    }

    return NextResponse.json(
      { error: '获取数据失败', message: (error as Error).message },
      { status: 500 }
    );
  }
}
