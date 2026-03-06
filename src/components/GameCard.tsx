'use client';

import Image from 'next/image';
import { Game } from '@/types';
import { formatPrice } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group bg-[#171a21] rounded-lg overflow-hidden border border-[#2a475e] hover:border-[#66c0f4] transition-all duration-300 hover:shadow-lg hover:shadow-[#66c0f4]/10 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[460/215] overflow-hidden bg-[#0e141d]">
        <Image
          src={game.coverImage}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Discount Badge */}
        <div className="absolute top-2 right-2 bg-[#a4d007] text-[#171a21] px-2 py-1 rounded">
          <span className="font-bold text-lg">-{game.discountPercent}%</span>
        </div>

        {/* Lowest Ever Badge */}
        {game.isLowestEver && (
          <div className="absolute top-2 left-2 bg-[#ffb100] text-[#171a21] px-2 py-1 rounded flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold text-sm">历史最低</span>
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-2 left-2 bg-[#171a21]/90 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
          <svg className="w-4 h-4 text-[#a4d007]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>{game.rating}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-3 truncate group-hover:text-[#66c0f4] transition-colors">
          {game.name}
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-3 mb-3">
          <span className="text-[#8f98a0] line-through text-sm">
            {formatPrice(game.originalPrice)}
          </span>
          <span className="text-white font-bold text-xl">
            {formatPrice(game.currentPrice)}
          </span>
        </div>

        {/* Lowest Price Info */}
        {game.isLowestEver ? (
          <div className="flex items-center space-x-1 text-[#ffb100] text-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
            </svg>
            <span>史低!</span>
          </div>
        ) : (
          <div className="text-[#8f98a0] text-sm">
            史低: {formatPrice(game.lowestPrice)}
          </div>
        )}

        {/* Genres */}
        <div className="mt-3 flex flex-wrap gap-1">
          {game.genres.slice(0, 3).map((genre, index) => (
            <span 
              key={index} 
              className="text-xs text-[#8f98a0] bg-[#2a475e]/50 px-2 py-1 rounded"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
