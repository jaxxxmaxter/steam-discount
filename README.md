# Steam 折扣精选

一个展示 Steam 游戏打折信息的现代化网页应用。

## 功能特性

- 🎮 **实时折扣展示**：显示当前正在打折的 Steam 游戏
- 📊 **历史最低价**：清晰标识历史最低价游戏
- 🔥 **热门折扣**：按折扣力度排序的游戏列表
- 🎨 **Steam 风格 UI**：采用 Steam 官方深蓝色调设计
- 📱 **响应式设计**：完美支持桌面端和移动端

## 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **语言**: TypeScript
- **图片**: Next.js Image 组件

## 项目结构

```
steam-discount/
├── src/
│   ├── app/               # Next.js App Router 页面
│   │   ├── layout.tsx    # 根布局
│   │   ├── page.tsx      # 首页
│   │   └── globals.css   # 全局样式
│   ├── components/       # React 组件
│   │   ├── Header.tsx   # 顶部导航
│   │   ├── Hero.tsx     # 英雄区域
│   │   ├── GameCard.tsx # 游戏卡片
│   │   ├── GameGrid.tsx # 游戏网格
│   │   └── Footer.tsx   # 页脚
│   ├── data/             # Mock 数据
│   │   └── games.ts     # 游戏数据
│   └── types/            # TypeScript 类型
│       └── index.ts     # 类型定义
├── public/               # 静态资源
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 生产构建

```bash
npm run build
npm start
```

## 数据更新

当前使用 Mock 数据，后续可以：
1. 接入 Steam API 获取真实数据
2. 实现定时任务自动更新
3. 添加数据缓存机制

## 设计参考

- 色彩方案参考 Steam 官方风格
- 深蓝色调 (#1b2838, #171a21)
- 强调色: 蓝色 (#66c0f4), 绿色 (#a4d007), 红色 (#ff4e45)
- 圆角卡片设计

## License

MIT License
