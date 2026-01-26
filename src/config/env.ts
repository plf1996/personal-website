// Environment configuration for personal information
// This provides fallback values for development/production
// 使用环境变量保护个人信息，生产环境必须配置正确的值

/**
 * 个人配置接口
 * 定义了所有个人信息和链接的类型
 */
export interface PersonalConfig {
  // 个人基本信息
  name: string
  email: string
  phone: string

  // 社交媒体链接
  github: string
  linkedin: string
  twitter: string
  zhihu: string

  // 平台链接
  huggingface: string
  arxiv: string
  blog: string
  juejin: string

  // 项目链接
  chat: string
  rag: string
  finetune: string
}

/**
 * 个人配置对象
 * 从环境变量读取配置，提供默认值用于开发
 * 
 * ⚠️ 安全提示：
 * - 生产环境必须配置真实的邮箱和链接
 * - 不要在代码中硬编码敏感信息
 * - .env.local文件不应该提交到版本控制
 */
export const personalConfig: PersonalConfig = {
  // 个人基本信息
  name: process.env.NEXT_PUBLIC_PERSONAL_NAME || '您的名字',
  email: process.env.NEXT_PUBLIC_PERSONAL_EMAIL || 'your.email@example.com',
  phone: process.env.NEXT_PUBLIC_PERSONAL_PHONE || '+86 138 0000 0000',

  // 社交媒体链接
  github: process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yourusername',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/in/yourusername',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/yourusername',
  zhihu: process.env.NEXT_PUBLIC_ZHIHU_URL || 'https://zhihu.com/people/yourid',

  // 平台链接
  huggingface: process.env.NEXT_PUBLIC_HUGGINGFACE_URL || 'https://huggingface.co/yourusername',
  arxiv: process.env.NEXT_PUBLIC_ARXIV_URL || 'https://arxiv.org/a/yourusername',
  blog: process.env.NEXT_PUBLIC_BLOG_URL || 'https://blog.yourwebsite.com',
  juejin: process.env.NEXT_PUBLIC_JUEJIN_URL || 'https://juejin.cn/user/yourid',

  // 项目链接
  chat: process.env.NEXT_PUBLIC_CHAT_URL || 'https://chat.example.com',
  rag: process.env.NEXT_PUBLIC_RAG_URL || 'https://rag.example.com',
  finetune: process.env.NEXT_PUBLIC_FINETUNE_URL || 'https://finetune.example.com',
}

/**
 * 验证个人配置的完整性
 * 在生产环境中，确保所有必需的配置都已设置
 */
export function validatePersonalConfig(config: PersonalConfig): {
  isValid: boolean
  missingFields: string[]
} {
  const requiredFields: (keyof PersonalConfig)[] = [
    'name',
    'email',
  ]

  const missingFields: string[] = []

  requiredFields.forEach((field) => {
    // 检查是否使用默认值
    const isDefault = config[field].includes('your') || 
                         config[field].includes('example.com') ||
                         config[field].includes('0000')
    
    if (isDefault) {
      missingFields.push(field)
    }
  })

  return {
    isValid: missingFields.length === 0,
    missingFields,
  }
}
