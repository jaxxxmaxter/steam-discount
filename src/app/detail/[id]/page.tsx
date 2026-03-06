'use client';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { formatPrice } from '@/data/games';
import { Game } from '@/types';
import Link from 'next/link';

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await fetch('/api/steam-games');
        const data = await response.json();
        const gameId = params.id as string;
        const foundGame = data.games?.find((g: Game) => g.id === gameId);
        setGame(foundGame || null);
      } catch (err) {
        console.error('获取游戏数据失败:', err);
        setGame(null);
      } finally {
        setLoading(false);
      }
    }
    fetchGame();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#171a21] flex items-center justify-center">
        <div className="text-white text-xl">加载中...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-[#171a21] flex flex-col items-center justify-center">
        <div className="text-white text-2xl mb-4">游戏未找到</div>
        <Link 
          href="/" 
          className="text-[#66c0f4] hover:underline"
        >
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#171a21]">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center text-[#8f98a0] hover:text-[#66c0f4] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] mt-4">
        <Image
          src={game.coverImage}
          alt={game.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-[#171a21]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-10">
        {/* Title and Badges */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {game.name}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {/* Discount Badge */}
            <div className="bg-[#a4d007] text-[#171a21] px-3 py-1.5 rounded font-bold text-xl">
              -{game.discountPercent}%
            </div>
            
            {/* Lowest Ever Badge */}
            {game.isLowestEver && (
              <div className="bg-[#ffb100] text-[#171a21] px-3 py-1.5 rounded flex items-center font-bold">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                历史最低
              </div>
            )}
          </div>
        </div>

        {/* Price Section */}
        <div className="bg-[#2a475e] rounded-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[#8f98a0] line-through text-lg">
                  {formatPrice(game.originalPrice)}
                </span>
                <span className="text-white font-bold text-3xl">
                  {formatPrice(game.currentPrice)}
                </span>
              </div>
              
              {game.isLowestEver ? (
                <div className="flex items-center text-[#ffb100]">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">史低!</span>
                  <span className="ml-2 text-[#8f98a0]">当前价格是历史最低</span>
                </div>
              ) : (
                <div className="text-[#8f98a0]">
                  历史最低: {formatPrice(game.lowestPrice)}
                </div>
              )}
            </div>

            {/* Steam Buy Button */}
            <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c7e10] hover:bg-[#6d9614] text-white font-bold py-3 px-8 rounded flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.668 0 .504 4.926.04 11.13L0 11.56c0 .104.008.208.023.312l.02.094c.028.104.06.207.097.308l.02.06c.041.1.087.197.137.292l.052.09c.046.07.095.138.147.203l.06.077c.053.064.108.126.166.186l.073.07c.06.054.121.106.185.155l.084.063c.063.047.128.092.195.133l.09.052c.066.038.134.074.204.107l.096.045c.07.03.141.058.214.082l.104.032c.072.02.145.038.22.052l.112.018c.075.01.15.018.227.022l.116.006h.007c.076.003.152.003.229 0l.116-.006c.077-.004.152-.012.227-.022l.112-.018c.075-.014.148-.032.22-.052l.104-.032c.073-.024.144-.052.214-.082l.096-.045c.07-.033.138-.069.204-.107l.09-.052c.067-.041.132-.086.195-.133l.084-.063c.064-.05.126-.102.185-.155l.073-.07c.058-.06.113-.122.166-.186l.06-.077c.052-.065.101-.133.147-.203l.052-.09c.05-.095.096-.192.137-.292l.02-.06c.037-.1.07-.204.097-.308l.02-.094c.015-.104.023-.208.023-.312l-.04-.43C.504 4.926 5.668 0 11.979 0zM8.6 5.733c-.623 0-1.13.507-1.13 1.13 0 .623.507 1.13 1.13 1.13.622 0 1.13-.507 1.13-1.13 0-.623-.508-1.13-1.13-1.13zm6.8 0c-.623 0-1.13.507-1.13 1.13 0 .623.507 1.13 1.13 1.13.622 0 1.13-.507 1.13-1.13 0-.623-.508-1.13-1.13-1.13z"/>
              </svg>
              在 Steam 上购买
            </a>
          </div>
        </div>

        {/* Game Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Rating */}
          <div className="bg-[#0e141d] rounded-lg p-4">
            <h3 className="text-[#8f98a0] text-sm mb-2">玩家评价</h3>
            <div className="flex items-center">
              <div className={`text-2xl font-bold ${game.rating >= 70 ? 'text-[#a4d007]' : game.rating >= 40 ? 'text-[#ffb100]' : 'text-[#e34c26]'}`}>
                {game.rating}%
              </div>
              <span className="ml-2 text-[#8f98a0] text-sm">
                ({game.reviewCount.toLocaleString()} 条评测)
              </span>
            </div>
          </div>

          {/* Release Date */}
          <div className="bg-[#0e141d] rounded-lg p-4">
            <h3 className="text-[#8f98a0] text-sm mb-2">发售日期</h3>
            <div className="text-white">
              {new Date(game.releaseDate).toLocaleDateString('zh-CN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>

          {/* Genres */}
          <div className="bg-[#0e141d] rounded-lg p-4">
            <h3 className="text-[#8f98a0] text-sm mb-2">游戏类型</h3>
            <div className="flex flex-wrap gap-2">
              {game.genres.length > 0 ? (
                game.genres.map((genre, index) => (
                  <span 
                    key={index} 
                    className="text-white bg-[#2a475e] px-3 py-1 rounded text-sm"
                  >
                    {genre}
                  </span>
                ))
              ) : (
                <span className="text-[#8f98a0]">未分类</span>
              )}
            </div>
          </div>

          {/* Platforms */}
          <div className="bg-[#0e141d] rounded-lg p-4">
            <h3 className="text-[#8f98a0] text-sm mb-2">平台</h3>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((platform, index) => (
                <span 
                  key={index} 
                  className="text-white bg-[#2a475e] px-3 py-1 rounded text-sm"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
