import { Game } from '@/types';

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
    rating: 89,
    genres: [
      "FPS",
      "动作",
      "多人"
    ],
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
    genres: [
      "MOBA",
      "策略",
      "多人"
    ],
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
    genres: [
      "射击",
      "生存",
      "多人"
    ],
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
    genres: [
      "动作",
      "开放世界",
      "冒险"
    ],
    steamUrl: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
  },
  {
    id: '5',
    name: 'Baldur's Gate 3',
    coverImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
    originalPrice: 298,
    currentPrice: 238.4,
    discountPercent: 20,
    lowestPrice: 178.8,
    isLowestEver: false,
    rating: 96,
    genres: [
      "RPG",
      "策略",
      "回合制"
    ],
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
    rating: 95,
    genres: [
      "动作",
      "RPG",
      "开放世界"
    ],
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
    rating: 93,
    genres: [
      "动作",
      "开放世界",
      "西部"
    ],
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
    rating: 88,
    genres: [
      "动作",
      "角色扮演",
      "合作"
    ],
    steamUrl: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/'
  }
];
