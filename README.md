# Steam 折扣精选

一个展示 Steam 游戏打折信息的现代化网页应用。

## 功能特性

- 🎮 **实时折扣展示**：显示当前正在打折的 Steam 游戏
- 📡 **动态数据获取**：从 Steam 商店实时获取最新折扣数据
- ⏱️ **智能缓存**：10分钟缓存机制，加快页面加载速度
- 📊 **历史最低价**：清晰标识历史最低价游戏
- 🔥 **热门折扣**：按折扣力度排序的游戏列表
- 🔍 **搜索筛选**：支持按名称搜索游戏
- 📝 **排序功能**：支持按价格、折扣、评分排序
- 🎨 **Steam 风格 UI**：采用 Steam 官方深蓝色调设计
- 📱 **响应式设计**：完美支持桌面端和移动端
- 📄 **详情页**：点击查看游戏详情
- 🛒 **Steam 跳转**：详情页一键跳转到 Steam 商店购买

## 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) (App Router)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **语言**: TypeScript
- **图片**: Next.js Image 组件

## 项目结构

```
steam-discount/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── steam-games/
│   │   │       └── route.ts  # Steam API 路由
│   │   ├── detail/
│   │   │   └── [id]/
│   │   │       └── page.tsx  # 详情页
│   │   ├── globals.css       # 全局样式
│   │   ├── layout.tsx        # 根布局
│   │   └── page.tsx          # 首页
│   ├── components/            # React 组件
│   │   ├── Footer.tsx
│   │   ├── GameCard.tsx
│   │   ├── GameFilter.tsx
│   │   ├── GameGrid.tsx
│   │   ├── Header.tsx
│   │   └── Hero.tsx
│   ├── data/
│   │   └── games.ts          # 价格格式化函数
│   └── types/
│       └── index.ts          # TypeScript 类型
├── scripts/
│   └── update-data.js        # 数据更新脚本
├── public/
├── package.json
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

## 数据获取

### 方式一：动态获取（默认）
页面加载时自动从 Steam 商店获取实时折扣数据：
- API 路由：`/api/steam-games`
- 10分钟缓存机制
- 支持 `?refresh=true` 参数强制刷新缓存

```bash
# 测试 API
curl http://localhost:3000/api/steam-games

# 强制刷新缓存
curl http://localhost:3000/api/steam-games?refresh=true
```

### 方式二：本地脚本更新
运行脚本更新本地数据文件：

```bash
node scripts/update-data.js
```

## 设计参考

- 色彩方案参考 Steam 官方风格
- 深蓝色调 (#1b2838, #171a21)
- 强调色: 蓝色 (#66c0f4), 绿色 (#a4d007), 红色 (#ff4e45)
- 圆角卡片设计

## License

MIT License
