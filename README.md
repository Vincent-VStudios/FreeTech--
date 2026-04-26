# FreeTech 灵感库

> 一个简洁高效的技术博客主题，基于 Tailwind CSS 构建，支持暗色模式、标签筛选、实时搜索。

## ✨ 特性

- 🚀 **零依赖** - 仅需 HTML + CSS + JS，无需构建工具
- 🌙 **暗色模式** - 自动记忆用户偏好
- 🏷️ **标签系统** - 便捷的内容分类与筛选
- 🔍 **实时搜索** - 毫秒级内容检索
- 📱 **响应式设计** - 完美适配移动端

## 🏃 快速开始

### 本地预览

**方法一：VS Code Live Server**
1. 用 VS Code 打开项目
2. 安装 "Live Server" 插件
3. 右键点击 `index.html` → "Open with Live Server"

**方法二：Python 静态服务器**
```bash
cd FreeTech-灵感库
python -m http.server 8000
# 访问 http://localhost:8000
```

**方法三：Node.js serve**
```bash
npx serve .
```

### 添加文章

编辑 `app.js` 中的 `blogData` 数组，按以下格式添加：

```javascript
{
    id: 5,
    title: "你的文章标题",
    summary: "文章摘要，简洁描述内容",
    content: `<h2>正文内容</h2><p>支持 HTML 格式</p>`,
    tags: ["标签1", "标签2"],
    date: "2026-04-26",
    readingTime: "5 分钟"
}
```

## 🚀 部署

### GitHub Pages（免费）

1. 创建 GitHub 仓库
2. 上传全部文件
3. Settings → Pages → Source: main 分支
4. 完成！自动获得 `username.github.io/repo-name` 访问地址

### Cloudflare Pages（推荐）

1. 推送代码到 GitHub/GitLab
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Workers & Pages → Create → Pages → 导入仓库
4. 配置：框架选择"无"，构建命令留空
5. 完成部署，获得 `*.pages.dev` 免费域名

### Vercel

```bash
npm i -g vercel
vercel
```

## 🛠️ 自定义

### 修改主题色

编辑 `styles.css`，修改 CSS 变量：
```css
:root {
    --accent: #6366f1; /*  Indigo  */
}
```

### 修改导航栏

编辑 `index.html` 中的 `<nav>` 部分。

### 修改 SEO 信息

编辑 `index.html` 的 `<head>` 部分，添加 meta 标签。

## 📝 许可

MIT License - 随意使用、修改、商用。

---

Made with ❤️ | 技术让创作更自由