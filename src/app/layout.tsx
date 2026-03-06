import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Steam 折扣精选 - 热门游戏打折中",
  description: "Steam 游戏折扣信息聚合网站，展示当前打折游戏、历史最低价、热门促销",
  keywords: "Steam, 游戏, 折扣, 特卖, 便宜, 游戏推荐",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
