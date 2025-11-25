'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const skills = [
    {
      icon: <Database className="h-8 w-8" />,
      title: t('skills.llm'),
      description: t('skills.llmDesc'),
      tech: ['GPT', 'LLaMA', 'BERT', 'LangChain', 'Transformers']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: t('skills.aiDev'),
      description: t('skills.aiDevDesc'),
      tech: ['Python', 'FastAPI', 'OpenAI API', 'Vector DB', 'RAG']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('skills.fullstack'),
      description: t('skills.fullstackDesc'),
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('skills.mlops'),
      description: t('skills.mlopsDesc'),
      tech: ['Docker', 'Kubernetes', 'MLflow', 'AWS', 'GPU 加速']
    }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('about.intro1')} {t('about.intro2')} {t('about.intro3')}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
            {t('about.intro4')} {t('about.intro5')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About