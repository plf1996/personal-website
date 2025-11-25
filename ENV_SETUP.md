# 环境变量配置说明

本项目使用环境变量来管理个人信息，确保敏感信息不会被提交到版本控制系统。

## 快速设置

### 1. 创建环境变量文件

复制示例文件创建本地环境变量：

```bash
cp .env.local.example .env.local
```

### 2. 编辑环境变量

编辑 `.env.local` 文件，填入您的真实信息：

```bash
# 个人信息
NEXT_PUBLIC_PERSONAL_NAME=张三
NEXT_PUBLIC_PERSONAL_EMAIL=zhangsan@example.com
NEXT_PUBLIC_PERSONAL_PHONE=18888888888

# 社交媒体链接
NEXT_PUBLIC_GITHUB_URL=https://github.com/zhangsan
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/zhangsan
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/zhangsan
NEXT_PUBLIC_ZHIHU_URL=https://zhihu.com/people/zhangsan

# 平台链接
NEXT_PUBLIC_HUGGINGFACE_URL=https://huggingface.co/zhangsan
NEXT_PUBLIC_ARXIV_URL=https://arxiv.org/a/zhangsan
NEXT_PUBLIC_BLOG_URL=https://blog.zhangsan.com
NEXT_PUBLIC_JUEJIN_URL=https://juejin.cn/user/zhangsan

# 项目链接
NEXT_PUBLIC_CHAT_URL=https://chat.zhangsan.com
NEXT_PUBLIC_RAG_URL=https://rag.zhangsan.com
NEXT_PUBLIC_FINETUNE_URL=https://finetune.zhangsan.com
```

### 3. 注意事项

- 所有环境变量必须以 `NEXT_PUBLIC_` 开头，这样才能在客户端访问
- `.env.local` 文件已经在 `.gitignore` 中，不会被提交到 GitHub
- 如果没有某个平台的账号，可以保留示例值或留空

### 4. 生产环境部署

在 Vercel、Netlify 或其他平台部署时，需要在部署设置中添加环境变量：

1. 进入部署平台的环境变量设置页面
2. 添加所有以 `NEXT_PUBLIC_` 开头的变量
3. 确保值与您的 `.env.local` 文件一致

### 5. 环境变量列表

| 变量名 | 说明 | 示例值 |
|--------|------|--------|
| `NEXT_PUBLIC_PERSONAL_NAME` | 您的姓名 | 张三 |
| `NEXT_PUBLIC_PERSONAL_EMAIL` | 您的邮箱 | zhangsan@example.com |
| `NEXT_PUBLIC_PERSONAL_PHONE` | 您的电话 | 18888888888 |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub 主页 | https://github.com/zhangsan |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn 主页 | https://linkedin.com/in/zhangsan |
| `NEXT_PUBLIC_TWITTER_URL` | Twitter 主页 | https://twitter.com/zhangsan |
| `NEXT_PUBLIC_ZHIHU_URL` | 知乎主页 | https://zhihu.com/people/zhangsan |
| `NEXT_PUBLIC_HUGGINGFACE_URL` | Hugging Face 主页 | https://huggingface.co/zhangsan |
| `NEXT_PUBLIC_ARXIV_URL` | arXiv 主页 | https://arxiv.org/a/zhangsan |
| `NEXT_PUBLIC_BLOG_URL` | 个人博客 | https://blog.zhangsan.com |
| `NEXT_PUBLIC_JUEJIN_URL` | 掘金主页 | https://juejin.cn/user/zhangsan |
| `NEXT_PUBLIC_CHAT_URL` | AI 聊天助手项目 | https://chat.zhangsan.com |
| `NEXT_PUBLIC_RAG_URL` | RAG 知识库项目 | https://rag.zhangsan.com |
| `NEXT_PUBLIC_FINETUNE_URL` | 微调平台项目 | https://finetune.zhangsan.com |

## 安全提示

- 永远不要将包含真实信息的 `.env.local` 文件提交到版本控制系统
- 在生产环境中，确保使用部署平台提供的环境变量功能
- 定期检查和更新您的敏感信息