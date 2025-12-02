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
    <section id="about" className="py-20 px-4 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-white/90 leading-relaxed drop-shadow-md">
            {t('about.intro1')} {t('about.intro2')} {t('about.intro3')}
          </p>
          <p className="text-lg text-white/90 leading-relaxed mt-4 drop-shadow-md">
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
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:bg-white/20 hover:shadow-2xl transition-all border border-white/20"
            >
              <div className="text-blue-300 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {skill.title}
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs border border-blue-400/30"
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