'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/types';
import { formatPrice } from '@/data/games';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div className="group bg-[#171a21] rounded-lg overflow-hidden border border-[#2a475e] hover:border-[#66c0f4] transition-all duration-300 hover:shadow-lg hover:shadow-[#66c0f4]/10 hover:-translate-y-1">
      {/* Image Container - 点击进入详情 */}
      <Link href={`/detail/${game.id}`} className="block relative aspect-[460/215] overflow-hidden bg-[#0e141d] cursor-pointer">
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
      </Link>

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

        {/* Detail Button - 跳转到详情页 */}
        <Link
          href={`/detail/${game.id}`}
          className="mt-4 block w-full bg-[#171a21] hover:bg-[#2a475e] text-white font-semibold py-2.5 px-4 rounded border border-[#2a475e] hover:border-[#66c0f4] transition-all duration-300 text-center group/btn"
        >
          <span className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.979 0C5.668 0 .504 4.926.04 11.13L0 11.56c0 .104.008.208.023.312l.02.094c.028.104.06.207.097.308l.02.06c.041.1.087.197.137.292l.052.09c.046.07.095.138.147.203l.06.077c.053.064.108.126.166.186l.073.07c.06.054.121.106.185.155l.084.063c.063.047.128.092.195.133l.09.052c.066.038.134.074.204.107l.096.045c.07.03.141.058.214.082l.104.032c.072.02.145.038.22.052l.112.018c.075.01.15.018.227.022l.116.006h.007c.076.003.152.003.229 0l.116-.006c.077-.004.152-.012.227-.022l.112-.018c.075-.014.148-.032.22-.052l.104-.032c.073-.024.144-.052.214-.082l.096-.045c.07-.033.138-.069.204-.107l.09-.052c.067-.041.132-.086.195-.133l.084-.063c.064-.05.126-.102.185-.155l.073-.07c.058-.06.113-.122.166-.186l.06-.077c.052-.065.101-.133.147-.203l.052-.09c.05-.095.096-.192.137-.292l.02-.06c.037-.1.07-.204.097-.308l.02-.094c.015-.104.023-.208.023-.312l-.04-.43C.504 4.926 5.668 0 11.979 0zM8.6 5.733c-.623 0-1.13.507-1.13 1.13 0 .623.507 1.13 1.13 1.13.622 0 1.13-.507 1.13-1.13 0-.623-.508-1.13-1.13-1.13zm6.8 0c-.623 0-1.13.507-1.13 1.13 0 .623.507 1.13 1.13 1.13.622 0 1.13-.507 1.13-1.13 0-.623-.508-1.13-1.13-1.13z"/>
            </svg>
            <span>查看详情</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
