'use client';

import { useState, useEffect } from 'react';
import { Game } from '@/types';

interface GameFilterProps {
  games: Game[];
  onFilter: (filteredGames: Game[]) => void;
}

type SortOption = 'discount' | 'price-asc' | 'price-desc' | 'rating' | 'reviews';

export default function GameFilter({ games, onFilter }: GameFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('discount');
  const [showNoDiscountMessage, setShowNoDiscountMessage] = useState(false);

  useEffect(() => {
    let filtered = [...games];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(game => 
        game.name.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortOption) {
      case 'discount':
        filtered.sort((a, b) => b.discountPercent - a.discountPercent);
        break;
      case 'price-asc':
        filtered.sort((a, b) => a.currentPrice - b.currentPrice);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.currentPrice - a.currentPrice);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    // Show message if search but no results with discount
    if (searchQuery.trim()) {
      const exactMatch = games.find(g => g.name.toLowerCase() === searchQuery.toLowerCase());
      if (exactMatch && filtered.length === 0) {
        setShowNoDiscountMessage(true);
      } else {
        setShowNoDiscountMessage(false);
      }
    } else {
      setShowNoDiscountMessage(false);
    }

    onFilter(filtered);
  }, [searchQuery, sortOption, games, onFilter]);

  return (
    <div className="bg-[#1b2838] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="搜索游戏名称..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0e141d] text-white border border-[#2a475e] rounded-lg py-2.5 px-4 pl-10 focus:outline-none focus:border-[#66c0f4] transition-colors placeholder-[#8f98a0]"
            />
            <svg 
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8f98a0]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8f98a0] hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Sort Options */}
          <div className="flex flex-wrap gap-2">
            <span className="text-[#8f98a0] text-sm self-center mr-2">排序:</span>
            <button
              onClick={() => setSortOption('discount')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortOption === 'discount'
                  ? 'bg-[#66c0f4] text-[#171a21]'
                  : 'bg-[#2a475e] text-white hover:bg-[#3a5a7c]'
              }`}
            >
              折扣优先
            </button>
            <button
              onClick={() => setSortOption('price-asc')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortOption === 'price-asc'
                  ? 'bg-[#66c0f4] text-[#171a21]'
                  : 'bg-[#2a475e] text-white hover:bg-[#3a5a7c]'
              }`}
            >
              价格从低到高
            </button>
            <button
              onClick={() => setSortOption('price-desc')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortOption === 'price-desc'
                  ? 'bg-[#66c0f4] text-[#171a21]'
                  : 'bg-[#2a475e] text-white hover:bg-[#3a5a7c]'
              }`}
            >
              价格从高到低
            </button>
            <button
              onClick={() => setSortOption('rating')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortOption === 'rating'
                  ? 'bg-[#66c0f4] text-[#171a21]'
                  : 'bg-[#2a475e] text-white hover:bg-[#3a5a7c]'
              }`}
            >
              好评率
            </button>
            <button
              onClick={() => setSortOption('reviews')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                sortOption === 'reviews'
                  ? 'bg-[#66c0f4] text-[#171a21]'
                  : 'bg-[#2a475e] text-white hover:bg-[#3a5a7c]'
              }`}
            >
              热门
            </button>
          </div>
        </div>

        {/* No Discount Message */}
        {showNoDiscountMessage && (
          <div className="mt-4 p-4 bg-[#2a475e] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[#ffb100] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-white">
              抱歉，<strong>{searchQuery}</strong> 这款游戏暂时没有折扣
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
