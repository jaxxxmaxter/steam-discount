import { getGames, getCurrentSale, getLowestEverGames } from '@/data/games';
import Hero from '@/components/Hero';
import GameGrid from '@/components/GameGrid';

export default async function Home() {
  // Fetch data from mock API
  const [games, sale, lowestGames] = await Promise.all([
    getGames(),
    getCurrentSale(),
    getLowestEverGames(),
  ]);

  // Sort games by discount percent (highest first)
  const topDiscountGames = [...games].sort((a, b) => b.discountPercent - a.discountPercent);

  // Default sale event if none found
  const saleEvent = sale ?? {
    id: 'default',
    name: 'Steam 特卖',
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
    description: 'Steam 游戏特卖中',
    isActive: true,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero sale={saleEvent} />

      {/* Historical Lowest Price Games */}
      <GameGrid 
        games={lowestGames} 
        title="历史最低价" 
      />

      {/* Top Discount Games */}
      <GameGrid 
        games={topDiscountGames.slice(0, 8)} 
        title="热门折扣" 
      />

      {/* All Games */}
      <GameGrid 
        games={games} 
        title="全部打折游戏" 
      />
    </div>
  );
}
