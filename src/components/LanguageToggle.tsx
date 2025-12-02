'use client'

import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-md text-white/90 hover:text-white transition-colors flex items-center space-x-2"
      aria-label={t('nav.toggleLang')}
      title={t('nav.toggleLang')}
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-medium hidden sm:inline">
        {language === 'zh' ? 'EN' : '中'}
      </span>
    </button>
  )
}

export default LanguageToggle