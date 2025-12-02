'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Twitter, Youtube, BookOpen, Briefcase, Heart, MessageSquare, Database } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { personalConfig } from '@/config/env'

const Links = () => {
  const { t } = useLanguage()

  const linkCategories = [
    {
      title: t('links.aiCommunity'),
      icon: <Github className="h-5 w-5" />,
      links: [
        {
          name: 'GitHub',
          description: t('links.github.desc'),
          url: personalConfig.github,
          icon: <Github className="h-6 w-6" />,
          color: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
        },
        {
          name: 'Hugging Face',
          description: t('links.huggingface.desc'),
          url: personalConfig.huggingface,
          icon: <Heart className="h-6 w-6" />,
          color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
        },
        {
          name: 'arXiv',
          description: t('links.arxiv.desc'),
          url: personalConfig.arxiv,
          icon: <BookOpen className="h-6 w-6" />,
          color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        }
      ]
    },
    {
      title: t('links.techBlog'),
      icon: <BookOpen className="h-5 w-5" />,
      links: [
        {
          name: 'Blog',
          description: t('links.blog.desc'),
          url: personalConfig.blog,
          icon: <BookOpen className="h-6 w-6" />,
          color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        },
        {
          name: 'Juejin',
          description: t('links.juejin.desc'),
          url: personalConfig.juejin,
          icon: <Briefcase className="h-6 w-6" />,
          color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        }
      ]
    },
    {
      title: t('links.social'),
      icon: <Twitter className="h-5 w-5" />,
      links: [
        {
          name: 'Twitter',
          description: t('links.twitter.desc'),
          url: personalConfig.twitter,
          icon: <Twitter className="h-6 w-6" />,
          color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400'
        },
        {
          name: 'LinkedIn',
          description: t('links.linkedin.desc'),
          url: personalConfig.linkedin,
          icon: <Briefcase className="h-6 w-6" />,
          color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        },
        {
          name: 'Zhihu',
          description: t('links.zhihu.desc'),
          url: personalConfig.zhihu,
          icon: <MessageSquare className="h-6 w-6" />,
          color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
        }
      ]
    },
    {
      title: t('links.projects'),
      icon: <ExternalLink className="h-5 w-5" />,
      links: [
        {
          name: 'AI Chat Assistant',
          description: t('links.chat.desc'),
          url: personalConfig.chat,
          icon: <MessageSquare className="h-6 w-6" />,
          color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        },
        {
          name: 'RAG Knowledge Base',
          description: t('links.rag.desc'),
          url: personalConfig.rag,
          icon: <Database className="h-6 w-6" />,
          color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
        },
        {
          name: 'Fine-tune Platform',
          description: t('links.finetune.desc'),
          url: personalConfig.finetune,
          icon: <ExternalLink className="h-6 w-6" />,
          color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
        }
      ]
    }
  ]

  return (
    <section id="links" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {t('links.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {t('links.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="space-y-12">
          {linkCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="text-white/90 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ml-8">
                {category.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-300 group border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`${link.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                        {link.icon}
                      </div>
                      <ExternalLink className="h-5 w-5 text-white/60 group-hover:text-white/90 transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {link.name}
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 text-sm text-blue-300 font-medium group-hover:text-blue-200">
                      {t('links.visit')} →
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 text-sm">
            {t('links.contactNote')}{' '}
            <a href="#contact" className="text-blue-300 hover:text-blue-200 hover:underline">
              {t('links.contactPage')}
            </a>{' '}
            {t('links.note')}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Links