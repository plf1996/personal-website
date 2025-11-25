// Environment configuration for personal information
// This provides fallback values for development/production

export const personalConfig = {
  // Personal Details
  name: process.env.NEXT_PUBLIC_PERSONAL_NAME || '您的名字',
  email: process.env.NEXT_PUBLIC_PERSONAL_EMAIL || 'your.email@example.com',
  phone: process.env.NEXT_PUBLIC_PERSONAL_PHONE || '+86 138 0000 0000',

  // Social Media Links
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/yourusername',
  zhihu: process.env.NEXT_PUBLIC_ZHIHU_URL || 'https://zhihu.com/people/yourid',

  // Platform Links
  huggingface: process.env.NEXT_PUBLIC_HUGGINGFACE_URL || 'https://huggingface.co/yourusername',
  arxiv: process.env.NEXT_PUBLIC_ARXIV_URL || 'https://arxiv.org/a/yourusername',
  blog: process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.yourwebsite.com',
  juejin: process.env.NEXT_PUBLIC_JUEJIN_URL || 'https://juejin.cn/user/yourid',

  // Project Links
  chat: process.env.NEXT_PUBLIC_CHAT_URL || 'https://chat.example.com',
  rag: process.env.NEXT_PUBLIC_RAG_URL || 'https://rag.example.com',
  finetune: process.env.NEXT_PUBLIC_FINETUNE_URL || 'https://finetune.example.com',
}