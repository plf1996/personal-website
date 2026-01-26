import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

// 完整的元数据配置
export const metadata: Metadata = {
  // 基础元数据
  title: {
    default: 'LLM工程师 - 个人主页',
    template: '%s | AI-Lab'
  },
  description: '专注于大语言模型应用开发的全栈工程师，分享AI技术、LLM应用开发和全栈开发经验',
  keywords: ['LLM', 'AI', '全栈开发', '大语言模型', 'RAG', '微调', 'ChatGPT', 'OpenAI', 'React', 'Next.js'],
  authors: [{ name: process.env.NEXT_PUBLIC_PERSONAL_NAME || 'AI Engineer' }],
  creator: process.env.NEXT_PUBLIC_PERSONAL_NAME || 'AI Engineer',
  publisher: 'AI-Lab',

  // 验证标签
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
  },

  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: ['en_US', 'en_GB'],
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
    title: 'LLM工程师 - 个人主页',
    description: '专注于大语言模型应用开发的全栈工程师，分享AI技术、LLM应用开发和全栈开发经验',
    siteName: 'AI-Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LLM工程师个人主页',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'LLM工程师 - 个人主页',
    description: '专注于大语言模型应用开发的全栈工程师，分享AI技术、LLM应用开发和全栈开发经验',
    images: ['/og-image.jpg'],
    creator: process.env.NEXT_PUBLIC_TWITTER_USERNAME || '@username',
  },

  // 爬虫设置
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 图标
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // 清单
  manifest: '/manifest.json',

  // 其他
  category: 'technology',
}

// 视口配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

// 结构化数据
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: process.env.NEXT_PUBLIC_PERSONAL_NAME || 'AI Engineer',
  jobTitle: 'LLM Engineer',
  description: '专注于大语言模型应用开发的全栈工程师',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  email: process.env.NEXT_PUBLIC_PERSONAL_EMAIL || 'your.email@example.com',
  worksFor: {
    '@type': 'Organization',
    name: 'AI-Lab',
  },
  knowsAbout: ['LLM', 'RAG', 'Fine-tuning', 'Full-Stack Development', 'AI Applications'],
  sameAs: [
    process.env.NEXT_PUBLIC_GITHUB_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_TWITTER_URL,
    process.env.NEXT_PUBLIC_ZHIHU_URL,
    process.env.NEXT_PUBLIC_BLOG_URL,
  ].filter(Boolean),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* 预连接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
