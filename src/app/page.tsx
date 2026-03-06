  'use client';

import { useState, useCallback, useEffect } from 'react';
import { getCurrentSale } from '@/data/games';
import { Game } from '@/types';
import Hero from '@/components/Hero';
import GameGrid from '@/components/GameGrid';
import GameFilter from '@/components/GameFilter';

// Default sale event if none found
const defaultSaleEvent = {
  id: 'default',
  name: 'Steam 特卖',
  startDate: '2026-03-06',
  endDate: '2026-03-06',
  description: 'Steam 游戏特卖中',
  isActive: true,
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [lowestGames, setLowestGames] = useState<Game[]>([]);
  const [sale] = useState(getCurrentSale() ?? defaultSaleEvent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // 从 API 获取真实的 Steam 折扣数据
  useEffect(() => {
    async function fetchGames() {
      try {
        setLoading(true);
        const response = await fetch('/api/steam-games');

        if (!response.ok) {
          throw new Error('获取数据失败');
        }

        const data = await response.json();

        if (data.games && data.games.length > 0) {
          setGames(data.games);
          setFilteredGames(data.games);
          setLastUpdate(data.fetchTime || data.cacheTime || '');

          // 计算历史最低价游戏（折扣 >= 80%）
          const lowest = data.games
            .filter((g: Game) => g.isLowestEver || g.discountPercent >= 80)
            .sort((a: Game, b: Game) => a.currentPrice - b.currentPrice)
            .slice(0, 8);
          setLowestGames(lowest);
        } else {
          setError('暂无折扣游戏数据');
        }
      } catch (err) {
        console.error('获取游戏数据失败:', err);
        setError('获取数据失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  const handleFilter = useCallback((filtered: Game[]) => {
    setFilteredGames(filtered);
  }, []);

  // 加载状态
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">正在从 Steam 获取最新折扣数据...</p>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
          >
            重新加载
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero sale={sale} />

      {/* Search and Filter */}
      <GameFilter games={games} onFilter={handleFilter} />

      {/* Filtered Games Results */}
      <GameGrid 
        games={filteredGames} 
        title="搜索结果" 
      />

      {/* Historical Lowest Price Games (only show when not searching) */}
      {filteredGames.length === games.length && (
        <>
          <GameGrid 
            games={lowestGames} 
            title="历史最低价" 
          />

          {/* Top Discount Games */}
          <GameGrid 
            games={[...games].sort((a, b) => b.discountPercent - a.discountPercent).slice(0, 8)} 
            title="热门折扣" 
          />
        </>
      )}
    </div>
  );
}
