import { Game, SaleEvent } from '@/types';

export const games: Game[] = [
  {
    "id": "1",
    "name": "Cities: Skylines",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/255710/b5334b972d024e20e656d18fdc0b16444905bf3a/header/6.jpg?t=1772730040",
    "originalPrice": 2999,
    "currentPrice": 299,
    "discountPercent": 90,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2015-03-10",
    "rating": 85,
    "reviewCount": 98362,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/255710/"
  },
  {
    "id": "2",
    "name": "Injustice 2",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/627270/header.jpg?t=1745536404",
    "originalPrice": 4999,
    "currentPrice": 499,
    "discountPercent": 90,
    "lowestPrice": 499,
    "isLowestEver": true,
    "releaseDate": "2017-11-30",
    "rating": 86,
    "reviewCount": 6637,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/627270/"
  },
  {
    "id": "3",
    "name": "LIMBO",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/48000/header.jpg?t=1761819450",
    "originalPrice": 1249,
    "currentPrice": 124,
    "discountPercent": 90,
    "lowestPrice": 124,
    "isLowestEver": true,
    "releaseDate": "2011-08-02",
    "rating": 88,
    "reviewCount": 12521,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/48000/"
  },
  {
    "id": "4",
    "name": "Warhammer: Vermintide 2",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/552500/header.jpg?t=1764008361",
    "originalPrice": 2999,
    "currentPrice": 299,
    "discountPercent": 90,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2018-03-08",
    "rating": 82,
    "reviewCount": 43441,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/552500/"
  },
  {
    "id": "5",
    "name": "INSIDE",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/304430/header.jpg?t=1761819581",
    "originalPrice": 2499,
    "currentPrice": 249,
    "discountPercent": 90,
    "lowestPrice": 249,
    "isLowestEver": true,
    "releaseDate": "2016-07-07",
    "rating": 87,
    "reviewCount": 23366,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/304430/"
  },
  {
    "id": "6",
    "name": "Stealth Bastard Deluxe",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/209190/header.jpg?t=1747738814",
    "originalPrice": 1299,
    "currentPrice": 129,
    "discountPercent": 90,
    "lowestPrice": 129,
    "isLowestEver": true,
    "releaseDate": "2012-11-28",
    "rating": 80,
    "reviewCount": 710,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/209190/"
  },
  {
    "id": "7",
    "name": "NBA 2K26",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3472040/0ffdd59df23c0204fa922ab0704c7faccb56a934/header/3.jpg?t=1771603429",
    "originalPrice": 7999,
    "currentPrice": 1999,
    "discountPercent": 75,
    "lowestPrice": 1999,
    "isLowestEver": false,
    "releaseDate": "2025-09-05",
    "rating": 83,
    "reviewCount": 6703,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/3472040/"
  },
  {
    "id": "8",
    "name": "When Ski Lifts Go Wrong",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/638000/header.jpg?t=1743421609",
    "originalPrice": 1499,
    "currentPrice": 149,
    "discountPercent": 90,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2019-01-23",
    "rating": 80,
    "reviewCount": 510,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/638000/"
  },
  {
    "id": "9",
    "name": "Hamilton's Great Adventure",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/42140/header.jpg?t=1591085088",
    "originalPrice": 999,
    "currentPrice": 99,
    "discountPercent": 90,
    "lowestPrice": 99,
    "isLowestEver": true,
    "releaseDate": "2011-05-31",
    "rating": 77,
    "reviewCount": 229,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/42140/"
  },
  {
    "id": "10",
    "name": "The Next Penelope",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/332250/header.jpg?t=1750429361",
    "originalPrice": 1299,
    "currentPrice": 129,
    "discountPercent": 90,
    "lowestPrice": 129,
    "isLowestEver": true,
    "releaseDate": "2015-01-21",
    "rating": 82,
    "reviewCount": 134,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/332250/"
  },
  {
    "id": "11",
    "name": "Invincible Presents: Atom Eve",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2060870/header.jpg?t=1731368197",
    "originalPrice": 999,
    "currentPrice": 99,
    "discountPercent": 90,
    "lowestPrice": 99,
    "isLowestEver": true,
    "releaseDate": "2023-11-14",
    "rating": 79,
    "reviewCount": 475,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/2060870/"
  },
  {
    "id": "12",
    "name": "Warhammer: End Times - Vermintide",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/235540/13b1be07e53f1febe5c229b8539e5a964dfbecc5/header.jpg?t=1761316136",
    "originalPrice": 2999,
    "currentPrice": 299,
    "discountPercent": 90,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2015-10-23",
    "rating": 79,
    "reviewCount": 7838,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/235540/"
  },
  {
    "id": "13",
    "name": "Stealth Inc. 2: A Game of Clones",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/329380/header.jpg?t=1747738919",
    "originalPrice": 1499,
    "currentPrice": 149,
    "discountPercent": 90,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2015-04-30",
    "rating": 77,
    "reviewCount": 120,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/329380/"
  },
  {
    "id": "14",
    "name": "Impulsion",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/811270/header.jpg?t=1722517971",
    "originalPrice": 1299,
    "currentPrice": 129,
    "discountPercent": 90,
    "lowestPrice": 129,
    "isLowestEver": true,
    "releaseDate": "2018-07-19",
    "rating": 79,
    "reviewCount": 149,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/811270/"
  },
  {
    "id": "15",
    "name": "Anarcute",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/390720/header.jpg?t=1750429312",
    "originalPrice": 1499,
    "currentPrice": 149,
    "discountPercent": 90,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2016-07-12",
    "rating": 79,
    "reviewCount": 558,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/390720/"
  },
  {
    "id": "16",
    "name": "Splasher",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/446840/header.jpg?t=1656581950",
    "originalPrice": 1499,
    "currentPrice": 149,
    "discountPercent": 90,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2017-02-07",
    "rating": 79,
    "reviewCount": 583,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/446840/"
  },
  {
    "id": "17",
    "name": "Soul Calibur VI",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/544750/header.jpg?t=1718967845",
    "originalPrice": 5999,
    "currentPrice": 599,
    "discountPercent": 90,
    "lowestPrice": 599,
    "isLowestEver": true,
    "releaseDate": "2018-10-18",
    "rating": 80,
    "reviewCount": 5627,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/544750/"
  },
  {
    "id": "18",
    "name": "Blasphemous",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/774361/header.jpg?t=1766049817",
    "originalPrice": 2499,
    "currentPrice": 249,
    "discountPercent": 90,
    "lowestPrice": 249,
    "isLowestEver": true,
    "releaseDate": "2019-09-10",
    "rating": 77,
    "reviewCount": 17955,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/774361/"
  },
  {
    "id": "19",
    "name": "RUINER",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/464060/header.jpg?t=1708036132",
    "originalPrice": 1999,
    "currentPrice": 199,
    "discountPercent": 90,
    "lowestPrice": 199,
    "isLowestEver": true,
    "releaseDate": "2017-09-26",
    "rating": 75,
    "reviewCount": 4507,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/464060/"
  },
  {
    "id": "20",
    "name": "Planet of Lana",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1608230/b00c729a886eca256812f55c3c9df64cff0dde8d/header.jpg?t=1772728759",
    "originalPrice": 1999,
    "currentPrice": 199,
    "discountPercent": 90,
    "lowestPrice": 199,
    "isLowestEver": true,
    "releaseDate": "2023-05-23",
    "rating": 80,
    "reviewCount": 3171,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/1608230/"
  },
  {
    "id": "21",
    "name": "Suicide Squad: Kill the Justice League",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/315210/header.jpg?t=1739898445",
    "originalPrice": 6999,
    "currentPrice": 349,
    "discountPercent": 95,
    "lowestPrice": 349,
    "isLowestEver": true,
    "releaseDate": "2024-02-02",
    "rating": 63,
    "reviewCount": 7466,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/315210/"
  },
  {
    "id": "22",
    "name": "Hacknet",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/365450/d804e605ff11ded917f7049f29a32a6894100cd7/header.jpg?t=1758156718",
    "originalPrice": 999,
    "currentPrice": 149,
    "discountPercent": 85,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2015-08-12",
    "rating": 82,
    "reviewCount": 7496,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/365450/"
  },
  {
    "id": "23",
    "name": "TowerFall Ascension",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/251470/header.jpg?t=1715114308",
    "originalPrice": 1499,
    "currentPrice": 299,
    "discountPercent": 80,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2014-03-11",
    "rating": 87,
    "reviewCount": 1724,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/251470/"
  },
  {
    "id": "24",
    "name": "LEGO Batman: The Videogame",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/21000/header.jpg?t=1752107972",
    "originalPrice": 1999,
    "currentPrice": 299,
    "discountPercent": 85,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2008-09-23",
    "rating": 80,
    "reviewCount": 6028,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/21000/"
  },
  {
    "id": "25",
    "name": "Hitman 2: Silent Assassin",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/6850/header.jpg?t=1732293077",
    "originalPrice": 899,
    "currentPrice": 89,
    "discountPercent": 90,
    "lowestPrice": 89,
    "isLowestEver": true,
    "releaseDate": "2002-10-01",
    "rating": 87,
    "reviewCount": 1730,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/6850/"
  },
  {
    "id": "26",
    "name": "Lead and Gold: Gangs of the Wild West",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/42120/header.jpg?t=1729084001",
    "originalPrice": 999,
    "currentPrice": 99,
    "discountPercent": 90,
    "lowestPrice": 99,
    "isLowestEver": true,
    "releaseDate": "2010-04-08",
    "rating": 70,
    "reviewCount": 899,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/42120/"
  },
  {
    "id": "27",
    "name": "Bury me, my Love",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/808090/header.jpg?t=1750427184",
    "originalPrice": 499,
    "currentPrice": 74,
    "discountPercent": 85,
    "lowestPrice": 74,
    "isLowestEver": true,
    "releaseDate": "2019-01-10",
    "rating": 80,
    "reviewCount": 119,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/808090/"
  },
  {
    "id": "28",
    "name": "SteamWorld Dig 2",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/571310/header.jpg?t=1726132098",
    "originalPrice": 1999,
    "currentPrice": 119,
    "discountPercent": 94,
    "lowestPrice": 119,
    "isLowestEver": true,
    "releaseDate": "2017-09-22",
    "rating": 85,
    "reviewCount": 2984,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/571310/"
  },
  {
    "id": "29",
    "name": "Bloodsports.TV",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/336420/header.jpg?t=1729083945",
    "originalPrice": 999,
    "currentPrice": 99,
    "discountPercent": 90,
    "lowestPrice": 99,
    "isLowestEver": true,
    "releaseDate": "2015-03-30",
    "rating": 69,
    "reviewCount": 250,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/336420/"
  },
  {
    "id": "30",
    "name": "Huntdown",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/598550/header.jpg?t=1723637797",
    "originalPrice": 1999,
    "currentPrice": 399,
    "discountPercent": 80,
    "lowestPrice": 399,
    "isLowestEver": true,
    "releaseDate": "2020-05-12",
    "rating": 85,
    "reviewCount": 1881,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/598550/"
  },
  {
    "id": "31",
    "name": "Tropico 3",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/23490/header.jpg?t=1755702268",
    "originalPrice": 1999,
    "currentPrice": 199,
    "discountPercent": 90,
    "lowestPrice": 199,
    "isLowestEver": true,
    "releaseDate": "2009-10-20",
    "rating": 79,
    "reviewCount": 811,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/23490/"
  },
  {
    "id": "32",
    "name": "Fury Unleashed",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/465200/header.jpg?t=1748606260",
    "originalPrice": 1999,
    "currentPrice": 199,
    "discountPercent": 90,
    "lowestPrice": 199,
    "isLowestEver": true,
    "releaseDate": "2020-05-08",
    "rating": 79,
    "reviewCount": 1930,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/465200/"
  },
  {
    "id": "33",
    "name": "Borderlands 2",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/49520/header.jpg?t=1751931279",
    "originalPrice": 3999,
    "currentPrice": 879,
    "discountPercent": 78,
    "lowestPrice": 879,
    "isLowestEver": false,
    "releaseDate": "2012-09-17",
    "rating": 89,
    "reviewCount": 121808,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/49520/"
  },
  {
    "id": "34",
    "name": "Frostpunk",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/323190/45bfdc7f6b60b2acab44cc96c488f938219c42fd/header.jpg?t=1769440234",
    "originalPrice": 2999,
    "currentPrice": 449,
    "discountPercent": 85,
    "lowestPrice": 449,
    "isLowestEver": true,
    "releaseDate": "2018-04-24",
    "rating": 84,
    "reviewCount": 37812,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/323190/"
  },
  {
    "id": "35",
    "name": "GOD EATER 2 Rage Burst",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/438490/header.jpg?t=1703657122",
    "originalPrice": 4999,
    "currentPrice": 499,
    "discountPercent": 90,
    "lowestPrice": 499,
    "isLowestEver": true,
    "releaseDate": "2016-08-29",
    "rating": 73,
    "reviewCount": 1793,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/438490/"
  },
  {
    "id": "36",
    "name": "The Wanderer: Frankensteins Creature",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/966670/header.jpg?t=1733852616",
    "originalPrice": 1599,
    "currentPrice": 159,
    "discountPercent": 90,
    "lowestPrice": 159,
    "isLowestEver": true,
    "releaseDate": "2019-10-31",
    "rating": 69,
    "reviewCount": 261,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/966670/"
  },
  {
    "id": "37",
    "name": "Undertale",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1757349115",
    "originalPrice": 999,
    "currentPrice": 249,
    "discountPercent": 75,
    "lowestPrice": 249,
    "isLowestEver": false,
    "releaseDate": "2015-09-15",
    "rating": 92,
    "reviewCount": 157406,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/391540/"
  },
  {
    "id": "38",
    "name": "Tumblestone",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/269710/header.jpg?t=1768587840",
    "originalPrice": 2499,
    "currentPrice": 499,
    "discountPercent": 80,
    "lowestPrice": 499,
    "isLowestEver": true,
    "releaseDate": "2016-07-12",
    "rating": 91,
    "reviewCount": 172,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/269710/"
  },
  {
    "id": "39",
    "name": "Mediterranea Inferno",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2103680/header.jpg?t=1727787632",
    "originalPrice": 1499,
    "currentPrice": 224,
    "discountPercent": 85,
    "lowestPrice": 224,
    "isLowestEver": true,
    "releaseDate": "2023-08-24",
    "rating": 84,
    "reviewCount": 218,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/2103680/"
  },
  {
    "id": "40",
    "name": "Qora",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/304460/header.jpg?t=1747739469",
    "originalPrice": 999,
    "currentPrice": 99,
    "discountPercent": 90,
    "lowestPrice": 99,
    "isLowestEver": true,
    "releaseDate": "2014-10-02",
    "rating": 63,
    "reviewCount": 255,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/304460/"
  },
  {
    "id": "41",
    "name": "Shadowgrounds Survivor",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/11200/header.jpg?t=1725011465",
    "originalPrice": 999,
    "currentPrice": 149,
    "discountPercent": 85,
    "lowestPrice": 149,
    "isLowestEver": true,
    "releaseDate": "2007-11-14",
    "rating": 79,
    "reviewCount": 571,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/11200/"
  },
  {
    "id": "42",
    "name": "Yoku's Island Express",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/334940/header.jpg?t=1763040310",
    "originalPrice": 1999,
    "currentPrice": 399,
    "discountPercent": 80,
    "lowestPrice": 399,
    "isLowestEver": true,
    "releaseDate": "2018-05-29",
    "rating": 84,
    "reviewCount": 1767,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/334940/"
  },
  {
    "id": "43",
    "name": "Scribblenauts Unmasked: A DC Comics Adventure",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/249870/header.jpg?t=1729804459",
    "originalPrice": 1999,
    "currentPrice": 199,
    "discountPercent": 90,
    "lowestPrice": 199,
    "isLowestEver": true,
    "releaseDate": "2013-09-24",
    "rating": 68,
    "reviewCount": 1923,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/249870/"
  },
  {
    "id": "44",
    "name": "Hammerting",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/760650/header.jpg?t=1763038124",
    "originalPrice": 2499,
    "currentPrice": 249,
    "discountPercent": 90,
    "lowestPrice": 249,
    "isLowestEver": true,
    "releaseDate": "2020-10-27",
    "rating": 64,
    "reviewCount": 1719,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/760650/"
  },
  {
    "id": "45",
    "name": "Galactic Glitch",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1536620/333707797f2ca708dc0e8fe3c3b0b72134666b64/header.jpg?t=1769073550",
    "originalPrice": 1299,
    "currentPrice": 389,
    "discountPercent": 70,
    "lowestPrice": 389,
    "isLowestEver": false,
    "releaseDate": "2025-06-03",
    "rating": 74,
    "reviewCount": 732,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/1536620/"
  },
  {
    "id": "46",
    "name": "Monaco: What's Yours Is Mine",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/113020/header.jpg?t=1741126657",
    "originalPrice": 1499,
    "currentPrice": 299,
    "discountPercent": 80,
    "lowestPrice": 299,
    "isLowestEver": true,
    "releaseDate": "2013-04-24",
    "rating": 83,
    "reviewCount": 2550,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/113020/"
  },
  {
    "id": "47",
    "name": "Digimon Survive",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/871980/header.jpg?t=1684948621",
    "originalPrice": 5999,
    "currentPrice": 959,
    "discountPercent": 84,
    "lowestPrice": 959,
    "isLowestEver": true,
    "releaseDate": "2022-07-29",
    "rating": 83,
    "reviewCount": 1700,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/871980/"
  },
  {
    "id": "48",
    "name": "The Stillness of the Wind",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/828900/header.jpg?t=1761727476",
    "originalPrice": 1299,
    "currentPrice": 194,
    "discountPercent": 85,
    "lowestPrice": 194,
    "isLowestEver": true,
    "releaseDate": "2019-02-07",
    "rating": 76,
    "reviewCount": 1310,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/828900/"
  },
  {
    "id": "49",
    "name": "Slay the Spire",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/646570/header.jpg?t=1769094928",
    "originalPrice": 2499,
    "currentPrice": 624,
    "discountPercent": 75,
    "lowestPrice": 624,
    "isLowestEver": false,
    "releaseDate": "2019-01-23",
    "rating": 89,
    "reviewCount": 73027,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/646570/"
  },
  {
    "id": "50",
    "name": "EA SPORTS FC 26",
    "coverImage": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3405690/abca0fd9695521a046d407327d82f808162315f7/header.jpg?t=1769020260",
    "originalPrice": 6999,
    "currentPrice": 2099,
    "discountPercent": 70,
    "lowestPrice": 2099,
    "isLowestEver": false,
    "releaseDate": "2025-09-26",
    "rating": 78,
    "reviewCount": 13400,
    "genres": [],
    "platforms": [
      "Windows"
    ],
    "steamUrl": "https://store.steampowered.com/app/3405690/"
  }
];

// Current sale event
const currentSale: SaleEvent = {
  "id": "current",
  "name": "Steam 促销中",
  "startDate": "2026-03-06",
  "endDate": "2026-03-13",
  "description": "Steam 商店最新折扣促销中，热门游戏限时优惠！",
  "isActive": true
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
  return `¥${(price / 100).toFixed(2)}`;
}

// Get today's date formatted
export function getTodayDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  return `${year}年${month}月${day}日`;
}
