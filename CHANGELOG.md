# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-03-06

### Added
- 游戏卡片添加了跳转到 Steam 商店的按钮
- 在 Game 类型中添加了 `steamUrl` 属性
- 为所有游戏数据添加了 Steam 商店链接
- 游戏卡片添加了 Tailwind 动画效果:
  - 悬停时卡片上浮 (`hover:-translate-y-1`)
  - 悬停时边框颜色变化 (`hover:border-[#66c0f4]`)
  - 悬停时阴影效果 (`hover:shadow-lg hover:shadow-[#66c0f4]/10`)
  - 封面图悬停缩放 (`group-hover:scale-105`)
  - Steam 按钮悬停时图标放大 (`group-hover/btn:scale-110`)
  - 平滑过渡动画 (`transition-all duration-300`)

### Changed
- 响应式游戏展示网格已优化，支持不同屏幕尺寸 (1/2/3/4列)

## [1.1.0] - 2026-03-06

### Added
- **自动化数据更新机制**: 添加 GitHub Actions 工作流
  - 每天 UTC 0:00 (北京时间 8:00) 自动执行
  - 支持手动触发 (workflow_dispatch)
  - 自动检测数据变化并提交更新
- **数据更新脚本**: `scripts/update-data.js`
  - 模拟从 Steam API 获取数据
  - 自动更新 `src/data/games.ts` 文件
- **日志系统**: `UPDATES.log`
  - 记录每次更新的时间戳
  - 记录更新的游戏数量
- 更新 `package.json` 添加 `update:data` 脚本

## [1.0.0] - 2026-03-01

### Added
- 初始版本发布
- 春季特卖游戏展示页面
- 游戏折扣信息展示 (原价/现价/折扣百分比)
- 历史最低价格标签
- 游戏评分显示
- 游戏类型标签
