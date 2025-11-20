# 个人主页部署指南

这是一个基于 Next.js 14 和 Tailwind CSS 构建的个人主页项目，包含个人介绍、链接展示和联系表单等功能。

## 功能特性

- ✨ 现代化的响应式设计
- 🌙 深色/浅色主题切换
- 🎱 流畅的动画效果（Framer Motion）
- 🔗 分类链接展示
- 📝 联系表单
- 🚀 SEO 优化
- 🐳 Docker 支持

## 本地开发

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

3. 启动开发服务器
```bash
npm run dev
```

4. 访问 [http://localhost:3000](http://localhost:3000)

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

## 自定义配置

### 修改个人信息

1. 编辑 `src/components/Hero.tsx`：
   - 修改姓名和职业描述
   - 更新社交媒体链接

2. 编辑 `src/components/About.tsx`：
   - 修改个人介绍内容
   - 更新技能列表

3. 编辑 `src/components/Links.tsx`：
   - 添加或修改链接分类
   - 更新每个链接的信息

4. 编辑 `src/components/Contact.tsx`：
   - 更新联系信息
   - 修改表单接收邮箱

### 添加新链接

在 `src/components/Links.tsx` 中的 `linkCategories` 数组中添加新的链接：

```typescript
{
  title: '新分类',
  icon: <YourIcon className="h-5 w-5" />,
  links: [
    {
      name: '链接名称',
      description: '链接描述',
      url: 'https://example.com',
      icon: <LinkIcon className="h-6 w-6" />,
      color: 'bg-xxx-100 dark:bg-xxx-900/30 text-xxx-600 dark:text-xxx-400'
    }
  ]
}
```

## 维护和更新

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

## 常见问题

### 1. 端口被占用
```bash
# 查看占用端口的进程
sudo netstat -tulpn | grep :3000
# 终止进程
sudo kill -9 [PID]
```

### 2. SSL 证书问题
使用 Certbot 获取免费证书：
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### 3. 性能优化
- 启用 Gzip 压缩（已配置）
- 配置静态资源缓存（已配置）
- 使用 CDN 加速
- 启用 HTTP/2（已配置）

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Docker + Nginx
- **语言**: TypeScript

## 许可证

MIT License