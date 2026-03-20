# ADoc Template

基于 Tome 的漂亮文档模板，开箱即用。

## 使用方法

1. Fork 或使用此模板创建仓库
2. 编辑 `pages/` 目录下的 Markdown 文件
3. 修改 `tome.config.js` 中的站点名称
4. 推送到 GitHub，自动部署

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

输出在 `out/` 目录。

## 文件结构

```
pages/
├── getting-started/
│   ├── index.md
│   └── quickstart.md
├── features/
│   └── index.md
└── faq/
    └── index.md
```

## 配置

编辑 `tome.config.js` 自定义：
- `name`: 站点名称
- `navigation`: 导航结构
- `theme`: 主题配色
