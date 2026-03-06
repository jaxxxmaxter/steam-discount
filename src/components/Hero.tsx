'use client';

import { SaleEvent } from '@/types';
import { getTodayDate } from '@/data/games';

interface HeroProps {
  sale: SaleEvent;
}

export default function Hero({ sale }: HeroProps) {
  const today = getTodayDate();

  return (
    <section className="relative bg-gradient-to-r from-[#1b2838] via-[#1e3a4f] to-[#1b2838] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #66c0f4 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #66c0f4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          {/* Sale Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#a4d007] text-[#171a21] px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
            </svg>
            <span className="font-bold">{sale.name}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Steam <span className="text-[#66c0f4]">游戏折扣</span>精选
          </h1>

          {/* Description */}
          <p className="text-[#8f98a0] text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {sale.description}
          </p>

          {/* Date */}
          <div className="flex items-center justify-center space-x-2 text-[#8f98a0]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{today}</span>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#a4d007]">12</div>
              <div className="text-sm text-[#8f98a0]">热门游戏</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#66c0f4]">最高90%</div>
              <div className="text-sm text-[#8f98a0]">折扣力度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff4e45]">8</div>
              <div className="text-sm text-[#8f98a0]">历史新低</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1b2838] to-transparent" />
    </section>
  );
}
