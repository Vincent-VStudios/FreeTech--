// FreeTech 灵感库 - 博客数据与应用逻辑

// 博客文章数据
const blogData = [
    {
        id: 1,
        title: "五分钟搭建 AI 工作流：n8n + DeepSeek 实战",
        summary: "本文介绍如何利用 n8n 自动化平台结合 DeepSeek API，构建一个能够自动抓取内容、AI 整理归档的智能工作流。无需编写代码，即可实现复杂的内容处理流程。",
        content: `<h2>为什么需要自动化工作流？</h2>
        <p>在日常内容创作中，我们经常需要从多个来源收集信息、整理分类、然后发布到不同平台。这个过程如果纯手工做，既耗时又容易出错。</p>
        <p>通过 n8n 这个开源自动化平台，我们可以把重复性的工作流程自动化，每天省下 2-3 小时的重复劳动。</p>
        <h2>工具准备</h2>
        <ul>
            <li><strong>n8n</strong> - 开源自动化平台，支持拖拽式工作流设计</li>
            <li><strong>DeepSeek API</strong> - 国产大模型，性价比高</li>
            <li><strong>RSS 源</strong> - 订阅你感兴趣的技术博客</li>
        </ul>
        <h2>核心步骤</h2>
        <ol>
            <li>在 n8n 中创建新工作流</li>
            <li>添加 RSS 触发节点，定时抓取更新</li>
            <li>配置 DeepSeek 节点，进行内容摘要</li>
            <li>设置输出节点，发送到 Notion 或邮件</li>
        </ol>
        <p>完整的配置文件可以在 GitHub 仓库中找到。</p>`,
        tags: ["AI", "自动化", "效率工具"],
        date: "2026-04-20",
        readingTime: "8 分钟"
    },
    {
        id: 2,
        title: "macOS 上搭建本地 AI 开发环境：M1/M2/M3 芯片优化指南",
        summary: "在 Apple Silicon 芯片的 Mac 上运行本地大模型已成为现实。本文详细讲解如何在 Mac 上配置 CUDA 替代方案、内存优化、以及适合 M 系列芯片的模型选择。",
        content: `<h2>Apple Silicon 的优势</h2>
        <p>Apple M 系列芯片采用统一内存架构，CPU 和 GPU 共享内存池。这意味着当你运行本地 LLM 时，不需要繁琐的 GPU 内存拷贝，延迟更低、效率更高。</p>
        <p>M1/M2/M3 的统一内存从 8GB 到 128GB 不等。如果你的 Mac 有 16GB 以上内存，就可以流畅运行 7B 参数的量化模型。</p>
        <h2>推荐模型</h2>
        <ul>
            <li><strong>Llama 3 8B</strong> - 通用对话能力强</li>
            <li><strong>Qwen 2 7B</strong> - 中文理解优秀</li>
            <li><strong>DeepSeek Coder 6.7B</strong> - 代码辅助专用</li>
        </ul>
        <h2> Ollama 实战</h2>
        <pre>brew install ollama
ollama pull llama3:8b
ollama run llama3:8b</pre>`,
        tags: ["Mac", "AI", "本地部署", "苹果芯片"],
        date: "2026-04-18",
        readingTime: "12 分钟"
    },
    {
        id: 3,
        title: "从零开始：用 GitHub Actions 自动化你的工作流程",
        summary: "GitHub Actions 是强大的自动化工具，本文通过三个实际案例演示：自动部署网站、自动检查代码格式、自动生成更新日志。让你的开发流程更加高效。",
        content: `<h2>什么是 GitHub Actions？</h2>
        <p>GitHub Actions 是 GitHub 提供的 CI/CD 工具，可以在代码仓库中自动化构建、测试、部署流程。每次 push 代码、创建 release、或者定时触发，都能执行你定义的工作流。</p>
        <h2>实战案例一：自动部署静态网站</h2>
        <p>当代码推送到 main 分支时，自动同步到 GitHub Pages。</p>
        <h2>实战案例二：代码格式化检查</h2>
        <p>每次 PR 自动运行 Prettier + ESLint，确保代码风格统一。</p>
        <h2>实战案例三：自动生成 Changelog</h2>
        <p>根据 commit 信息自动生成版本更新日志。</p>`,
        tags: ["GitHub", "自动化", "CI/CD"],
        date: "2026-04-15",
        readingTime: "10 分钟"
    },
    {
        id: 4,
        title: "Notion API 高级用法：打造你的第二大脑",
        summary: "Notion 不仅是笔记工具，通过 API 可以连接一切。本文分享如何利用 Notion API 实现任务自动化、跨平台同步、以及 AI 辅助整理笔记。",
        content: `<h2>Notion API 能做什么？</h2>
        <p>Notion API 允许你读写数据库、创建页面、管理用户。通过 API，你可以把 Notion 当作一个数据中枢，连接各种工具和自动化流程。</p>
        <h2>实战场景</h2>
        <ul>
            <li>自动把邮件归档到 Notion 待办</li>
            <li>把微信读书笔记同步到 Notion</li>
            <li>AI 自动整理并标签化笔记</li>
        </ul>
        <h2>入门资源</h2>
        <p>推荐使用官方 Notion SDK，Python 和 JavaScript 版本都有完善的文档。</p>`,
        tags: ["Notion", "效率工具", "API"],
        date: "2026-04-12",
        readingTime: "7 分钟"
    },
    {
        id: 5,
        title: "DeepSeek-V4 正式发布：免费开源 + 百万上下文，Agent能力逼近顶级模型！",
        summary: "时隔半年，DeepSeek 新一代模型 DeepSeek-V4 正式发布。这一次，它不仅在性能上大幅跃升，还直接把「开源大模型」的上限再次拉高。百万级上下文窗口，SWE-bench 测试达到 80.6%，性能已经接近顶级闭源模型。",
        content: `<h2>终于来了！</h2>
        <p>时隔半年，DeepSeek 新一代模型 <strong>DeepSeek-V4</strong> 正式发布。这一次，它不仅在性能上大幅跃升，还直接把「开源大模型」的上限再次拉高。结合官方发布与实测，这篇文章带你系统看懂：<strong>DeepSeek-V4 到底强在哪？值不值得用？</strong></p>
        
        <h2>一、DeepSeek-V4 核心亮点</h2>
        
        <h3>1. 免费 + 开源 + 可商用</h3>
        <p>DeepSeek-V4 延续了 DeepSeek 一贯的策略：<strong>完全开源（含权重）+ 支持商业使用</strong></p>
        <p>这意味着：</p>
        <ul>
            <li>企业可以直接落地应用</li>
            <li>开发者可以自由二次开发</li>
            <li>不再被 API 成本卡死</li>
        </ul>
        
        <h3>2. 四大模型版本（按需选择）</h3>
        <p>本次一共发布了 4 个模型：</p>
        <table>
            <thead>
                <tr><th>模型</th><th>参数规模</th><th>激活参数</th><th>类型</th></tr>
            </thead>
            <tbody>
                <tr><td>DeepSeek-V4-Flash-Base</td><td>284B</td><td>13B</td><td>基础模型</td></tr>
                <tr><td>DeepSeek-V4-Flash</td><td>284B</td><td>13B</td><td>聊天模型</td></tr>
                <tr><td>DeepSeek-V4-Pro-Base</td><td>1.6T</td><td>49B</td><td>基础模型</td></tr>
                <tr><td>DeepSeek-V4-Pro</td><td>1.6T</td><td>49B</td><td>聊天模型</td></tr>
            </tbody>
        </table>
        <p>简单理解：</p>
        <ul>
            <li><strong>Base</strong>：适合训练 / 微调 / 研究</li>
            <li><strong>Flash</strong>：轻量、响应快</li>
            <li><strong>Pro</strong>：最强性能版本</li>
        </ul>
        
        <h3>3. 百万 Token 上下文（真正的质变）</h3>
        <p>DeepSeek-V4 支持 <strong>百万级上下文窗口</strong>。</p>
        <p>这是什么概念？一次性可以处理：</p>
        <ul>
            <li>《三体》三部曲（约 90 万字）</li>
            <li>再加一整套《哈利·波特》</li>
        </ul>
        <p>这已经不是"长文本"，而是直接进入 <strong>"超长记忆模型"时代</strong>。</p>
        
        <h3>4. Agent 能力大幅提升</h3>
        <p>在 SWE-bench 测试中：</p>
        <p><strong>DeepSeek-V4-Pro 达到 80.6%</strong></p>
        <p>这意味着：</p>
        <ul>
            <li>能处理复杂工程任务</li>
            <li>支持多步推理</li>
            <li>能像"工程师"一样思考</li>
        </ul>
        <p>性能已经接近顶级闭源模型。</p>
        
        <h2>二、实测环节：DeepSeek-V4 到底有多强？</h2>
        
        <h3>测试1：大海捞针（长文本检索）</h3>
        <p><strong>测试方式</strong></p>
        <p>在《三体》90万字文本中插入一句隐藏密码：</p>
        <pre>DS-V4-PASSWORD-2026-ROCKS</pre>
        <p><strong>提问：</strong></p>
        <p><em>请告诉我文档中隐藏的测试密码是什么？</em></p>
        <p><strong>结果</strong></p>
        <p>模型<strong>精准命中</strong>：</p>
        <pre>DS-V4-PASSWORD-2026-ROCKS</pre>
        <p><strong>结论</strong></p>
        <ul>
            <li>百万上下文不是噱头</li>
            <li>长文定位能力极强</li>
            <li>明显优于很多"小模型拼接方案"</li>
        </ul>
        
        <h3>测试2：代码生成（从0到1）</h3>
        <p><strong>输入需求</strong></p>
        <p><em>写一个番茄钟 Web 应用（HTML/CSS/JS）</em></p>
        <p><strong>输出表现</strong></p>
        <ul>
            <li>一次性生成完整前端代码（约150行）</li>
            <li>包含：倒计时、任务管理、图表统计</li>
        </ul>
        <p><strong>关键亮点</strong></p>
        <p><strong>直接可运行！</strong></p>
        <p>一句话总结：<em>从需求到成品，只用了几十秒。</em></p>
        
        <h3>测试3：Agent能力（工程级任务）</h3>
        <p><strong>任务描述</strong></p>
        <p>生成一个 Python 脚本：</p>
        <ul>
            <li>扫描 Downloads 文件夹</li>
            <li>找出最近7天截图</li>
            <li>自动重命名</li>
        </ul>
        <p><strong>V4 的表现</strong></p>
        <p><strong>第一阶段：主动输出风险评估</strong></p>
        <p>例如：文件重名、权限问题、空目录情况</p>
        <p><strong>第二阶段：再生成代码</strong></p>
        <ul>
            <li>支持 --dry-run</li>
            <li>结构清晰</li>
            <li>可直接运行</li>
        </ul>
        <p><strong>核心价值</strong></p>
        <p>它不是"写代码"，而是：<strong>像工程师一样思考代码</strong></p>
        
        <h3>测试4：图片识别 + 推理能力</h3>
        <p><strong>任务</strong></p>
        <ul>
            <li>解析复杂图表</li>
            <li>输出 Markdown 文档</li>
            <li>转换为 Mermaid 流程图</li>
        </ul>
        <p><strong>表现</strong></p>
        <ul>
            <li>能理解结构关系</li>
            <li>输出清晰结构化内容</li>
            <li>还能给优化建议</li>
        </ul>
        <p>不足：美术类（SVG精美程度）一般</p>
        
        <h2>三、对比：DeepSeek-V4 vs 其他模型</h2>
        <table>
            <thead>
                <tr><th>能力</th><th>DeepSeek-V4</th><th>一些小模型</th></tr>
            </thead>
            <tbody>
                <tr><td>长文本</td><td>百万级</td><td>易崩</td></tr>
                <tr><td>代码生成</td><td>工程级</td><td>Demo级</td></tr>
                <tr><td>Agent能力</td><td>强</td><td>弱</td></tr>
                <tr><td>开源</td><td>完全开源</td><td>多为闭源</td></tr>
            </tbody>
        </table>
        <p>尤其是在长文本和工程能力上，差距非常明显。</p>
        
        <h2>四、适合谁用？</h2>
        <ul>
            <li><strong>开发者</strong> - 做 AI 应用、写代码、自动化任务</li>
            <li><strong>研究人员</strong> - 模型微调、Agent研究</li>
            <li><strong>企业</strong> - 私有化部署、降低 API 成本</li>
        </ul>
        
        <h2>五、如何获取？</h2>
        <p>官方模型已发布在 Hugging Face：</p>
        <ul>
            <li>DeepSeek-V4-Pro（最强版本）</li>
            <li>完整模型集合</li>
        </ul>
        <p>链接直达：<a href="https://huggingface.co/collections/deepseek-ai/deepseek-v4">https://huggingface.co/collections/deepseek-ai/deepseek-v4</a></p>
        
        <h2>六、总结</h2>
        <p>DeepSeek-V4 这一代的关键词只有三个：</p>
        <p><strong>更长（百万上下文）</strong><br>
        <strong>更强（Agent能力）</strong><br>
        <strong>更开放（完全开源）</strong></p>
        <p>如果说上一代只是"强模型"，那这一代已经是：</p>
        <p><em><strong>真正能干活的 AI 工程助手</strong></em></p>
        
        <h2>最后一句话</h2>
        <p>如果你还在观望开源模型：</p>
        <p><strong>DeepSeek-V4，很可能就是当前最值得上手的一款。</strong></p>`,
        tags: ["AI", "DEEPSEEK", "大模型", "开源"],
        date: "2026-04-24",
        readingTime: "10 分钟"
    }
];

// 状态管理
let currentTag = null;
let searchQuery = '';
let isDarkMode = localStorage.getItem('theme') === 'dark';

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderHome();
});

// 主题切换
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (isDarkMode) {
        document.body.classList.add('dark');
        toggle.textContent = '☀️';
    }
    toggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        toggle.textContent = isDarkMode ? '☀️' : '🌙';
    });
}

// 渲染首页
function renderHome() {
    currentTag = null;
    searchQuery = '';
    document.getElementById('searchInput').value = '';
    
    const articles = blogData;
    renderArticles(articles);
    renderTags(articles);
}

// 渲染归档页
function renderArchive() {
    const articles = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
    renderArticles(articles, true);
    renderTags(blogData);
}

// 搜索处理
function handleSearch(query) {
    searchQuery = query.toLowerCase();
    filterAndRender();
}

// 标签筛选
function filterByTag(tag) {
    currentTag = currentTag === tag ? null : tag;
    filterAndRender();
}

function filterAndRender() {
    let articles = blogData;
    
    // 标签过滤
    if (currentTag) {
        articles = articles.filter(a => a.tags.includes(currentTag));
    }
    
    // 搜索过滤
    if (searchQuery) {
        articles = articles.filter(a => 
            a.title.toLowerCase().includes(searchQuery) ||
            a.summary.toLowerCase().includes(searchQuery) ||
            a.tags.some(t => t.toLowerCase().includes(searchQuery))
        );
    }
    
    renderArticles(articles);
}

// 渲染文章列表
function renderArticles(articles, showDate = false) {
    const container = document.getElementById('mainContent');
    
    if (articles.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-500 dark:text-gray-400">
                <p class="text-4xl mb-4">📭</p>
                <p>没有找到相关文章</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = articles.map(article => `
        <article class="article-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-4 cursor-pointer hover:shadow-md transition"
            onclick="openArticle(${article.id})">
            <div class="flex flex-wrap gap-2 mb-3">
                ${article.tags.map(tag => `
                    <span class="tag">${tag}</span>
                `).join('')}
            </div>
            <h2 class="text-xl font-semibold mb-2 hover:text-indigo-600 dark:hover:text-indigo-400">${article.title}</h2>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">${article.summary}</p>
            <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                ${showDate ? `<span>📅 ${article.date}</span>` : ''}
                <span>⏱️ ${article.readingTime}</span>
            </div>
        </article>
    `).join('');
}

// 渲染标签筛选
function renderTags(articles) {
    const allTags = [...new Set(articles.flatMap(a => a.tags))];
    const container = document.getElementById('tagFilter');
    
    container.innerHTML = `
        <button onclick="renderHome()" class="px-4 py-2 rounded-full text-sm ${!currentTag ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'} transition">
            全部
        </button>
        ${allTags.map(tag => `
            <button onclick="filterByTag('${tag}')" 
                class="px-4 py-2 rounded-full text-sm ${currentTag === tag ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'} transition">
                ${tag}
            </button>
        `).join('')}
    `;
}

// 打开文章详情
function openArticle(id) {
    const article = blogData.find(a => a.id === id);
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <div class="p-6">
            <button onclick="closeArticle()" class="mb-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                ← 返回
            </button>
            <div class="flex flex-wrap gap-2 mb-4">
                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <h1 class="text-3xl font-bold mb-4">${article.title}</h1>
            <div class="flex gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span>📅 ${article.date}</span>
                <span>⏱️ ${article.readingTime}</span>
            </div>
            <div class="article-content border-t pt-6">
                ${article.content}
            </div>
            
            <!-- Giscus 评论 -->
            <div class="border-t mt-8 pt-6">
                <h3 class="text-lg font-semibold mb-4">💬 评论</h3>
                <div id="giscus-container"></div>
            </div>
        </div>
    `;
    
    // 延迟加载 Giscus，确保容器已渲染
    setTimeout(() => {
        const container = document.getElementById('giscus-container');
        if (!container) return;
        
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'Vincent-VStudios/FreeTech--');
        script.setAttribute('data-repo-id', 'R_kgDOSNAyBw');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'DIC_kwDOSNAyB84C7uze');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'bottom');
        script.setAttribute('data-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        script.setAttribute('data-lang', 'zh-CN');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        container.appendChild(script);
    }, 100);
    
    modal.classList.remove('hidden');
    modal.onclick = (e) => {
        if (e.target === modal) closeArticle();
    };
}

// 关闭文章详情
function closeArticle() {
    document.getElementById('articleModal').classList.add('hidden');
}

// ESC 关闭弹窗
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticle();
});