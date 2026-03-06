'use client';

import { Game } from '@/types';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  title?: string;
}

export default function GameGrid({ games, title }: GameGridProps) {
  if (games.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-[#8f98a0] text-lg">暂无游戏数据</div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-[#1b2838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        {title && (
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-1 h-8 bg-[#66c0f4] rounded-full mr-3"></span>
            {title}
            <span className="ml-3 text-[#8f98a0] text-base font-normal">
              ({games.length} 款游戏)
            </span>
          </h2>
        )}

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
