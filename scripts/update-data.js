/**
 * 游戏数据更新脚本
 * 
 * 此脚本模拟从 Steam API 获取最新折扣游戏数据
 * 实际使用时需要替换为真实的 Steam API 调用
 * 
 * 运行方式: node scripts/update-data.js
 */

const fs = require('fs');
const path = require('path');

const UPDATES_LOG = path.join(__dirname, '..', 'UPDATES.log');
const GAMES_DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'games.ts');

// 模拟从 Steam 获取数据
function fetchSteamGames() {
  // 实际项目中这里应该调用 Steam API
  // 例如: https://store.steampowered.com/api/storesales/?cc=cn&l=schinese
  
  // 模拟返回的游戏数据
  const mockGames = [
    {
      id: '1',
      name: 'Counter-Strike 2',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg',
      originalPrice: 0,
      currentPrice: 0,
      discountPercent: 0,
      lowestPrice: 0,
      isLowestEver: false,
      rating: 89,
      genres: ['FPS', '动作', '多人'],
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
      rating: 83,
      genres: ['MOBA', '策略', '多人'],
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
      rating: 72,
      genres: ['射击', '生存', '多人'],
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
      rating: 88,
      genres: ['动作', '开放世界', '冒险'],
      steamUrl: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
    },
    {
      id: '5',
      name: 'Baldur\'s Gate 3',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
      originalPrice: 298,
      currentPrice: 238.40,
      discountPercent: 20,
      lowestPrice: 178.80,
      isLowestEver: false,
      rating: 96,
      genres: ['RPG', '策略', '回合制'],
      steamUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
    },
    {
      id: '6',
      name: 'ELDEN RING',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
      originalPrice: 298,
      currentPrice: 208.60,
      discountPercent: 30,
      lowestPrice: 178.80,
      isLowestEver: false,
      rating: 95,
      genres: ['动作', 'RPG', '开放世界'],
      steamUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },
    {
      id: '7',
      name: 'Red Dead Redemption 2',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
      originalPrice: 249,
      currentPrice: 124.50,
      discountPercent: 50,
      lowestPrice: 99.60,
      isLowestEver: false,
      rating: 93,
      genres: ['动作', '开放世界', '西部'],
      steamUrl: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
    },
    {
      id: '8',
      name: 'Monster Hunter: World',
      coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/header.jpg',
      originalPrice: 308,
      currentPrice: 92.40,
      discountPercent: 70,
      lowestPrice: 61.60,
      isLowestEver: false,
      rating: 88,
      genres: ['动作', '角色扮演', '合作'],
      steamUrl: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/'
    }
  ];
  
  return mockGames;
}

// 格式化游戏数据为 TypeScript 代码
function formatGamesData(games) {
  const gamesJson = JSON.stringify(games, null, 2)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/: "([^"]+)"/g, ": '$1'")
    .replace(/: (-?\d+\.?\d*)/g, ': $1');
  
  return `import { Game } from '@/types';

export const games: Game[] = ${gamesJson};
`;
}

// 记录更新日志
function logUpdate(gameCount) {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] 更新了 ${gameCount} 个游戏数据\n`;
  
  // 确保目录存在
  const logDir = path.dirname(UPDATES_LOG);
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  // 追加日志
  fs.appendFileSync(UPDATES_LOG, logEntry);
  
  console.log(`✅ 数据更新完成: ${gameCount} 个游戏`);
  console.log(`📝 已记录到: ${UPDATES_LOG}`);
}

// 主函数
function main() {
  console.log('🔄 开始更新游戏数据...');
  
  try {
    // 获取游戏数据
    const games = fetchSteamGames();
    
    // 写入数据文件
    const dataContent = formatGamesData(games);
    fs.writeFileSync(GAMES_DATA_FILE, dataContent, 'utf-8');
    
    // 记录更新日志
    logUpdate(games.length);
    
    console.log('✨ 更新成功!');
  } catch (error) {
    console.error('❌ 更新失败:', error.message);
    process.exit(1);
  }
}

main();
