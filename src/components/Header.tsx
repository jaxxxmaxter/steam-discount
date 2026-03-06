import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#171a21] border-b border-[#2a475e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#66c0f4] to-[#1b2838] rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <svg 
                className="w-6 h-6 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M11.979 0C5.678 0 .511 4.926.042 11.15l4.661 6.71c.56-.37 1.21-.58 1.89-.58 1.89 0 3.42 1.53 3.42 3.42 0 .29-.04.57-.11.84l2.83 1.51c.59.31.76.95.45 1.54-.31.59-.95.76-1.54.45l-2.83-1.51c-.63.25-1.3.39-2.01.39-2.49 0-4.51-2.02-4.51-4.51 0-.38.05-.75.14-1.1L.16 11.3C1.45 5.32 6.16 1.19 11.979 0zM8.3 14.89c-1.08 0-1.95-.87-1.95-1.95 0-.87.87-1.95 1.95-1.95.87 0 1.95.87 1.95 1.95 0 .87-.87 1.95-1.95 1.95zm8.09-5.63c-1.16 0-2.1.94-2.1 2.1 0 1.16.94 2.1 2.1 2.1 1.16 0 2.1-.94 2.1-2.1 0-1.16-.94-2.1-2.1-2.1z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-white">
              Steam <span className="text-[#66c0f4]">折扣</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-[#c7d5e0] hover:text-white hover:bg-[#233545] px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              全部游戏
            </Link>
            <Link 
              href="/?filter=lowest" 
              className="text-[#c7d5e0] hover:text-white hover:bg-[#233545] px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              历史最低
            </Link>
            <Link 
              href="/?filter=top" 
              className="text-[#c7d5e0] hover:text-white hover:bg-[#233545] px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              热门折扣
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="text-[#8f98a0] hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
