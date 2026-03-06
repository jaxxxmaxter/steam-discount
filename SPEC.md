# Steam 打折信息网页 - 项目规范

## 1. 项目概述

- **项目名称**: Steam Discount Hub
- **项目类型**: Web 应用 (Next.js)
- **核心功能**: 展示 Steam 当前打折游戏、折扣力度对比、历史最低价信息
- **目标用户**: Steam 游戏玩家、游戏爱好者

## 2. 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **数据**: Mock 数据 (后续可扩展为真实 API)

## 3. UI/UX 规范

### 3.1 色彩方案 (Steam 官方风格)

```
--primary-bg: #1b2838 (主背景深蓝)
--secondary-bg: #171a21 (卡片背景)
--accent-blue: #66c0f4 (Steam 蓝)
--accent-green: #a4d007 (折扣绿)
--accent-red: #ff4e45 (促销红)
--text-primary: #c7d5e0 (主文字)
--text-secondary: #8f98a0 (次要文字)
--border-color: #2a475e (边框)
--hover-bg: #233545 (悬停背景)
```

### 3.2 布局结构

- **Header**: 固定顶部，包含 Logo 和导航
- **Hero Section**: 展示当前促销活动概览
- **Game Grid**: 游戏卡片网格展示
- **Footer**: 版权信息

### 3.3 响应式断点

- Mobile: < 640px (1 列)
- Tablet: 640px - 1024px (2 列)
- Desktop: > 1024px (3-4 列)

### 3.4 组件设计

#### 游戏卡片
- 圆角: 8px
- 阴影: 0 4px 12px rgba(0,0,0,0.3)
- 包含: 游戏封面图、标题、原价、折扣价、折扣百分比、历史最低价标记
- 悬停效果: 轻微上浮 + 边框发光

#### 折扣标签
- 绿色背景 (#a4d007)
- 白色文字
- 圆角: 4px
- 折扣百分比放大加粗

#### 历史最低价标记
- 金色/黄色标识
- 小图标 + 文字 "历史最低"

## 4. 功能规范

### 4.1 核心功能

1. **游戏列表展示**
   - 展示当前打折的游戏
   - 显示游戏封面、名称
   - 显示原价、当前折扣价
   - 显示折扣百分比

2. **折扣对比**
   - 清晰展示原价 vs 折扣价
   - 折扣金额计算

3. **历史最低价**
   - 标记是否为历史最低价
   - 对比当前价格与历史最低价

4. **数据更新机制**
   - Mock 数据接口
   - 支持每日自动更新逻辑 (cron job 预留)

### 4.2 Mock 数据结构

```typescript
interface Game {
  id: string;
  name: string;
  coverImage: string;
  originalPrice: number;      // 原价 (分)
  currentPrice: number;       // 当前价 (分)
  discountPercent: number;    // 折扣百分比
  lowestPrice: number;        // 历史最低价 (分)
  isLowestEver: boolean;      // 是否为历史最低
  releaseDate: string;        // 发布日期
  rating: number;            // 好评率 (0-100)
  reviewCount: number;       // 评价数量
}
```

## 5. 页面结构

```
/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 首页
│   │   └── globals.css      # 全局样式
│   ├── components/
│   │   ├── Header.tsx       # 头部导航
│   │   ├── GameCard.tsx     # 游戏卡片
│   │   ├── GameGrid.tsx     # 游戏网格
│   │   ├── DiscountBadge.tsx # 折扣标签
│   │   └── Hero.tsx         # 英雄区
│   ├── data/
│   │   └── games.ts         # Mock 数据
│   └── types/
│       └── index.ts         # 类型定义
├── public/
│   └── images/              # 静态图片
├── tailwind.config.ts       # Tailwind 配置
├── next.config.ts           # Next.js 配置
└── package.json
```

## 6. 验收标准

- [ ] 项目成功初始化并运行
- [ ] 页面采用深蓝色 Steam 风格
- [ ] 游戏卡片展示完整信息
- [ ] 响应式布局在各设备正常工作
- [ ] 折扣百分比清晰醒目
- [ ] 历史最低价有明显标记
- [ ] Mock 数据正确加载
- [ ] README.md 已创建
- [ ] PROGRESS.md 已创建
- [ ] 代码已提交到 GitHub

## 7. 后续扩展

- 集成真实 Steam API
- 添加搜索和筛选功能
- 实现价格提醒
- 添加收藏功能
- 支持更多语言
