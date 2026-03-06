export default function Footer() {
  return (
    <footer className="bg-[#171a21] border-t border-[#2a475e] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="text-[#8f98a0] text-sm mb-4 md:mb-0">
            © 2026 Steam Discount Hub. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://store.steampowered.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8f98a0] hover:text-[#66c0f4] text-sm transition-colors"
            >
              Steam 商店
            </a>
            <a 
              href="#" 
              className="text-[#8f98a0] hover:text-[#66c0f4] text-sm transition-colors"
            >
              关于
            </a>
            <a 
              href="#" 
              className="text-[#8f98a0] hover:text-[#66c0f4] text-sm transition-colors"
            >
              隐私政策
            </a>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="mt-6 text-center text-[#8f98a0] text-xs">
          本网站仅供学习演示目的，并非官方 Steam 网站。Steam 及 Steam 徽标是 Valve Corporation 在美国和其他国家的注册商标。
        </div>
      </div>
    </footer>
  );
}
