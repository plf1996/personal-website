'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { personalConfig } from '@/config/env'

const Hero = () => {
  const { t } = useLanguage()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl border border-white/20">
            {personalConfig.name[0]}
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
        >
          {t('hero.greeting')}<span className="text-blue-300">{personalConfig.name}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md"
        >
          {t('hero.title')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href={personalConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/20"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-white" />
          </a>
          <a
            href={personalConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/20"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-white" />
          </a>
          <a
            href={`mailto:${personalConfig.email}`}
            className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/20"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 text-white" />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero