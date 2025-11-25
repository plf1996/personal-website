'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'zh' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  zh: {
    // Nav
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.links': '链接',
    'nav.contact': '联系',
    'nav.toggleTheme': '切换主题',
    'nav.toggleLang': '切换语言',

    // Hero
    'hero.greeting': '您好，我是',
    'hero.name': '您的名字',
    'hero.title': '大语言模型工程师 | 全栈开发者 | AI 技术爱好者',

    // About
    'about.title': '关于我',
    'about.intro1': '我是一名专注于大语言模型应用开发的全栈工程师，热衷于探索 AI 技术的前沿。',
    'about.intro2': '我擅长将自然语言处理技术与现代Web开发相结合，构建智能化的应用解决方案。',
    'about.intro3': '在 LLM 领域，我有丰富的模型训练、微调和应用部署经验。',
    'about.intro4': '我相信 AI 将重塑软件开发的未来，致力于打造更加智能、高效的应用系统。',
    'about.intro5': '在团队协作中，我乐于分享技术见解，推动技术创新，追求代码质量与用户体验的完美平衡。',

    // Skills
    'skills.llm': '大语言模型',
    'skills.llmDesc': '专注于 LLM 训练、微调与应用开发，精通主流模型架构',
    'skills.aiDev': 'AI 应用开发',
    'skills.aiDevDesc': '构建智能化的 Web 应用，集成 NLP 和机器学习能力',
    'skills.fullstack': '全栈开发',
    'skills.fullstackDesc': '从前端到后端的完整技术栈，打造高性能应用系统',
    'skills.mlops': 'MLOps 与部署',
    'skills.mlopsDesc': '模型部署、监控与优化的完整 MLOps 实践经验',

    // Links
    'links.title': '我的链接',
    'links.subtitle': '探索我的数字足迹，了解我在各个平台的动态和分享',
    'links.visit': '访问链接',
    'links.contactNote': '如果您想要联系我，可以访问',
    'links.contactPage': '联系方式',
    'links.note': '页面',

    // Link Categories
    'links.aiCommunity': 'AI & 技术社区',
    'links.techBlog': '技术博客',
    'links.social': '社交平台',
    'links.projects': '项目展示',

    // Link Descriptions
    'links.github.desc': 'AI/LLM 相关开源项目和实验代码',
    'links.huggingface.desc': '分享模型、数据集和 AI 应用',
    'links.arxiv.desc': '学术论文和研究方向',
    'links.blog.desc': 'LLM 应用开发实践与思考',
    'links.juejin.desc': '中文技术文章分享',
    'links.twitter.desc': 'AI 技术动态和行业洞察',
    'links.linkedin.desc': '职业背景和项目经历',
    'links.zhihu.desc': '中文社区的技术分享',
    'links.chat.desc': '基于 LLM 的智能对话系统',
    'links.rag.desc': '企业级检索增强生成系统',
    'links.finetune.desc': '模型微调和实验管理平台',

    // Contact
    'contact.title': '联系我',
    'contact.subtitle': '有任何问题或合作意向？欢迎与我联系，期待收到您的消息！',
    'contact.info': '联系方式',
    'contact.sendMsg': '发送消息',
    'contact.response': '响应时间',
    'contact.responseDesc': '我通常会在24小时内回复您的邮件。如果事情紧急，请在邮件标题中注明[紧急]。',
    'contact.name': '姓名',
    'contact.namePlaceholder': '您的姓名',
    'contact.email': '邮箱',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': '消息',
    'contact.messagePlaceholder': '请输入您的消息...',
    'contact.submit': '发送消息',
    'contact.success': '感谢您的留言！我会尽快回复您。',

    // Contact Info
    'contact.emailLabel': '邮箱',
    'contact.phoneLabel': '电话',
    'contact.locationLabel': '位置',
    'contact.location': '中国，北京',
    'contact.phone': '+86 138 0000 0000',

    // Footer
    'footer.brand': 'AI-Lab',
    'footer.desc': '探索 AI 的边界，构建智能应用。专注于大语言模型技术的创新与实践。',
    'footer.quickLinks': '快速链接',
    'footer.follow': '关注我',
    'footer.copyright': 'Made with',
    'footer.using': 'using Next.js & Tailwind CSS',

    // Meta
    'meta.title': 'LLM工程师 - 个人主页',
    'meta.description': '专注于大语言模型应用开发的全栈工程师，分享AI技术、LLM应用开发和全栈开发经验',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.links': 'Links',
    'nav.contact': 'Contact',
    'nav.toggleTheme': 'Toggle Theme',
    'nav.toggleLang': 'Toggle Language',

    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Your Name',
    'hero.title': 'LLM Engineer | Full-Stack Developer | AI Enthusiast',

    // About
    'about.title': 'About Me',
    'about.intro1': 'I am a full-stack engineer specializing in Large Language Model application development, passionate about exploring the frontiers of AI technology.',
    'about.intro2': 'I excel at combining natural language processing technology with modern web development to build intelligent application solutions.',
    'about.intro3': 'In the LLM field, I have extensive experience in model training, fine-tuning, and application deployment.',
    'about.intro4': 'I believe AI will reshape the future of software development, and I am committed to building more intelligent and efficient application systems.',
    'about.intro5': 'In team collaboration, I enjoy sharing technical insights, driving technological innovation, and pursuing the perfect balance between code quality and user experience.',

    // Skills
    'skills.llm': 'Large Language Models',
    'skills.llmDesc': 'Focus on LLM training, fine-tuning and application development, proficient in mainstream model architectures',
    'skills.aiDev': 'AI Application Development',
    'skills.aiDevDesc': 'Build intelligent web applications with integrated NLP and machine learning capabilities',
    'skills.fullstack': 'Full-Stack Development',
    'skills.fullstackDesc': 'Complete technology stack from frontend to backend, creating high-performance application systems',
    'skills.mlops': 'MLOps & Deployment',
    'skills.mlopsDesc': 'Complete MLOps practices for model deployment, monitoring and optimization',

    // Links
    'links.title': 'My Links',
    'links.subtitle': 'Explore my digital footprint and understand my activities and sharing on various platforms',
    'links.visit': 'Visit Link',
    'links.contactNote': 'If you want to contact me, you can visit the',
    'links.contactPage': 'Contact',
    'links.note': 'page',

    // Link Categories
    'links.aiCommunity': 'AI & Tech Community',
    'links.techBlog': 'Tech Blog',
    'links.social': 'Social Platforms',
    'links.projects': 'Project Showcase',

    // Link Descriptions
    'links.github.desc': 'AI/LLM related open source projects and experimental code',
    'links.huggingface.desc': 'Share models, datasets and AI applications',
    'links.arxiv.desc': 'Academic papers and research directions',
    'links.blog.desc': 'LLM application development practices and insights',
    'links.juejin.desc': 'Chinese technical articles sharing',
    'links.twitter.desc': 'AI technology trends and industry insights',
    'links.linkedin.desc': 'Professional background and project experience',
    'links.zhihu.desc': 'Technical sharing in Chinese community',
    'links.chat.desc': 'Intelligent dialogue system based on LLM',
    'links.rag.desc': 'Enterprise-level retrieval augmented generation system',
    'links.finetune.desc': 'Model fine-tuning and experiment management platform',

    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Any questions or cooperation intentions? Welcome to contact me, looking forward to hearing from you!',
    'contact.info': 'Contact Information',
    'contact.sendMsg': 'Send Message',
    'contact.response': 'Response Time',
    'contact.responseDesc': 'I usually reply to your email within 24 hours. If it\'s urgent, please mark [URGENT] in the subject line.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your Name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Please enter your message...',
    'contact.submit': 'Send Message',
    'contact.success': 'Thank you for your message! I will reply to you as soon as possible.',

    // Contact Info
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.locationLabel': 'Location',
    'contact.location': 'Beijing, China',
    'contact.phone': '+86 138 0000 0000',

    // Footer
    'footer.brand': 'AI-Lab',
    'footer.desc': 'Exploring the boundaries of AI, building intelligent applications. Focusing on innovation and practice of LLM technology.',
    'footer.quickLinks': 'Quick Links',
    'footer.follow': 'Follow Me',
    'footer.copyright': 'Made with',
    'footer.using': 'using Next.js & Tailwind CSS',

    // Meta
    'meta.title': 'LLM Engineer - Personal Website',
    'meta.description': 'Full-stack engineer focusing on LLM application development, sharing AI technology, LLM application development and full-stack development experience',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'zh' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    window.localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.zh] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}