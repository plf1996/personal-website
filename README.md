# 个人主页

一个基于 Next.js 16 和 Tailwind CSS 构建的现代化个人主页项目，专为 LLM 工程师和技术爱好者设计。

## ✨ 功能特性

- 🌍 **国际化支持** - 支持中英文一键切换
- 🎨 **主题切换** - 深色/浅色模式自由切换
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎭 **流畅动画** - 使用 Framer Motion 实现优雅的页面动画
- 🎬 **动态背景视频** - 类似字节跳动官网的活力背景效果
- 🔗 **链接展示** - 分类展示个人社交媒体、博客和项目链接
- 📝 **联系表单** - 便捷的联系表单
- 🔐 **信息安全** - 使用环境变量保护个人信息
- 🚀 **SEO 优化** - 优化搜索引擎收录
- 🐳 **Docker 支持** - 支持容器化部署

## 🛠️ 技术栈

- **框架**: Next.js 16 (App Router)
- **UI**: React 19 + TypeScript
- **样式**: Tailwind CSS 3.4
- **动画**: Framer Motion 12
- **图标**: Lucide React
- **国际化**: 自定义语言上下文
- **部署**: Docker + Nginx

## 📦 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

### 安装步骤

1. 克隆项目
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量（重要）
```bash
# 复制环境变量模板
cp .env.local.example .env.local

# 编辑 .env.local 文件，填入您的个人信息
# 详细说明请参考 ENV_SETUP.md
```

4. 启动开发服务器
```bash
npm run dev
```

5. 访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 部署到云服务器

### 方法一：使用 Docker 部署（推荐）

#### 准备工作

1. 确保服务器已安装 Docker 和 Docker Compose
2. 将域名解析到服务器IP
3. 准备SSL证书（可以使用 Let's Encrypt 免费证书）

#### 部署步骤

1. 克隆项目到服务器
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. 配置域名
编辑 `nginx.conf` 文件，将 `yourdomain.com` 替换为您的实际域名。

3. 配置SSL证书
创建 `ssl` 目录并放置证书文件：
```bash
mkdir ssl
# 将您的证书文件放到 ssl 目录下
# cert.pem 和 key.pem
```

4. 启动服务
```bash
docker-compose up -d
```

5. 查看服务状态
```bash
docker-compose ps
```

### 方法二：传统部署

#### 安装依赖

```bash
# 安装 Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 PM2
npm install -g pm2
```

#### 部署步骤

1. 克隆并构建项目
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
npm install
npm run build
```

2. 使用 PM2 启动
```bash
pm2 start npm --name "personal-website" -- start
pm2 save
pm2 startup
```

3. 配置 Nginx 反向代理
创建 Nginx 配置文件：
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：
```bash
sudo ln -s /etc/nginx/sites-available/your-website /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## ⚙️ 自定义配置

### 1. 动态背景视频设置

**背景视频功能特性**：
- 🎬 **智能视频加载** - 多级备用视频源，自动降级机制
- 📱 **移动端优化** - 自动检测设备，降级到CSS动画背景
- 🎨 **视觉优化** - 毛玻璃效果、动态光效、渐变覆盖
- ⚡ **性能优化** - 懒加载、硬件加速、内存优化

**添加自己的背景视频**：
```bash
# 推荐视频规格：
- 分辨率：1920x1080 或更高
- 时长：15-30秒循环
- 格式：MP4 (H.264编码)
- 文件大小：< 20MB
- 内容：科技感、活力动感

# 放置视频文件
cp your-video.mp4 public/videos/background.mp4
```

**视频文件结构**：
```
public/videos/
├── background.mp4         # 主背景视频
├── background-fallback.mp4  # 备用视频
└── background-mobile.mp4   # 移动端优化版本（可选）
```

**自定义视觉效果**：
- 调整 `src/components/BackgroundVideo.tsx` 中的覆盖层透明度
- 修改各组件的颜色和透明度设置
- 更新 `tailwind.config.ts` 中的动画参数

### 2. 配置个人信息

**推荐方式：使用环境变量**
```bash
# 编辑 .env.local 文件
NEXT_PUBLIC_PERSONAL_NAME=您的姓名
NEXT_PUBLIC_PERSONAL_EMAIL=your.email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
# ... 其他配置
```

详细配置说明请参考 [ENV_SETUP.md](./ENV_SETUP.md)

### 3. 添加新语言

项目支持国际化，可以添加更多语言：

1. 在 `src/contexts/LanguageContext.tsx` 中的 `translations` 对象添加新语言
2. 更新 `Language` 类型定义
3. 在语言切换组件中添加新语言选项

### 4. 自定义主题

主题使用 CSS 变量，可以在 `src/app/globals.css` 中自定义：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* 添加更多自定义颜色 */
}
```

### 5. 修改页面内容

- **导航栏**: `src/components/Nav.tsx`
- **首页**: `src/components/Hero.tsx`
- **关于**: `src/components/About.tsx`
- **链接**: `src/components/Links.tsx`
- **联系**: `src/components/Contact.tsx`
- **页脚**: `src/components/Footer.tsx`

## 📋 项目结构

```
personal-website/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # 根布局
│   │   ├── page.tsx          # 主页面
│   │   └── globals.css       # 全局样式
│   ├── components/           # React 组件
│   │   ├── BackgroundVideo.tsx # 背景视频组件
│   │   ├── Hero.tsx          # 首页展示
│   │   ├── About.tsx         # 关于我
│   │   ├── Links.tsx         # 链接展示
│   │   ├── Contact.tsx       # 联系表单
│   │   ├── Nav.tsx           # 导航栏
│   │   ├── Footer.tsx        # 页脚
│   │   └── LanguageToggle.tsx # 语言切换
│   ├── contexts/             # React Context
│   │   └── LanguageContext.tsx # 国际化上下文
│   └── config/               # 配置文件
│       └── env.ts            # 环境变量配置
├── .env.local.example        # 环境变量模板
├── ENV_SETUP.md             # 环境变量说明
├── Dockerfile               # Docker 配置
├── docker-compose.yml       # Docker Compose
├── nginx.conf              # Nginx 配置
├── public/videos/           # 背景视频资源目录
└── scripts/                # 工具脚本
    └── download-sample-video.js # 视频下载工具
```

## 🔄 维护和更新

### 更新内容

1. 拉取最新代码
```bash
git pull origin main
```

2. 重新构建
```bash
# Docker 部署
docker-compose down
docker-compose build --no-cache
docker-compose up -d

# 传统部署
npm run build
pm2 restart personal-website
```

### 查看日志

```bash
# Docker
docker-compose logs -f

# PM2
pm2 logs personal-website
```

## ❓ 常见问题

### 1. 背景视频相关问题
- **视频无法播放**：检查视频文件路径、格式支持，查看浏览器控制台
- **性能问题**：降低视频分辨率、减少动画复杂度、启用硬件加速
- **移动端显示异常**：确认移动设备检测正常，检查CSS动画效果
- **文字可读性差**：调整覆盖层透明度、增强毛玻璃效果

### 2. 环境变量不生效
- 确保文件名为 `.env.local`（不是 `.env`）
- 变量名必须以 `NEXT_PUBLIC_` 开头
- 修改后需要重启开发服务器

### 3. 端口被占用
```bash
# 查看占用端口的进程
sudo netstat -tulpn | grep :3000
# 终止进程
sudo kill -9 [PID]
```

### 4. SSL 证书问题
使用 Certbot 获取免费证书：
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 5. 生产环境配置
- Vercel: 在项目设置中添加 Environment Variables
- Netlify: 在 Site settings > Build & deploy > Environment 中添加
- Docker: 在 docker-compose.yml 中配置环境变量

## 🌟 部署建议

### 推荐部署平台

1. **Vercel**（推荐）
   - 自动部署
   - 内置环境变量管理
   - 全球 CDN 加速
   - 自带 HTTPS

2. **Netlify**
   - 简单易用
   - 持续部署
   - 表单处理

3. **自建服务器**
   - 使用 Docker 部署
   - 更高的控制权
   - 需要自己维护

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**提示**: 首次使用前请务必阅读 [ENV_SETUP.md](./ENV_SETUP.md) 配置您的个人信息。