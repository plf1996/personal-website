'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { useState, useCallback } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { personalConfig } from '@/config/env'

/**
 * 表单数据类型
 */
interface FormData {
  name: string
  email: string
  message: string
}

/**
 * 提交状态类型
 */
interface SubmitStatus {
  type: 'success' | 'error' | null
  message: string
}

/**
 * 联系组件
 * 功能：
 * - 显示联系信息
 * - 表单提交（带API验证）
 * - 加载状态和错误处理
 * - 响应式设计
 */
const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ 
    type: null, 
    message: '' 
  })

  // 处理表单输入变化 - 使用 useCallback优化
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    
    // 清除之前的提交状态
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' })
    }
  }, [submitStatus.type])

  // 处理表单提交 - 使用 useCallback优化
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '提交失败')
      }

      setSubmitStatus({ type: 'success', message: data.message || t('contact.success') })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : '提交失败，请稍后重试'
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, t])

  // 联系信息配置 - 使用 useMemo缓存
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: t('contact.emailLabel'),
      value: personalConfig.email,
      href: `mailto:${personalConfig.email}`
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t('contact.phoneLabel'),
      value: personalConfig.phone,
      href: `tel:${personalConfig.phone}`
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: t('contact.locationLabel'),
      value: t('contact.location'),
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {t('contact.subtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('contact.info')}
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors group border border-white/20"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-blue-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white/70">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md p-6 rounded-xl border border-white/20"
            >
              <div className="flex items-center mb-3">
                <MessageSquare className="h-6 w-6 text-blue-300 mr-3" />
                <h4 className="text-lg font-semibold text-white">
                  {t('contact.response')}
                </h4>
              </div>
              <p className="text-white/90">
                {t('contact.responseDesc')}
              </p>
            </motion.div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('contact.sendMsg')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-white/50"
                  placeholder={t('contact.namePlaceholder')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white placeholder-white/50"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-white resize-none placeholder-white/50"
                  placeholder={t('contact.messagePlaceholder')}
                />
              </motion.div>

              {/* 提交状态消息 */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-6 p-4 rounded-lg border ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border-green-500 text-green-300'
                      : 'bg-red-500/20 border-red-500 text-red-300'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center backdrop-blur-sm border border-white/20 ${
                  isSubmitting
                    ? 'bg-blue-500/50 cursor-not-allowed opacity-70'
                    : 'bg-blue-500/80 hover:bg-blue-500 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    {t('contact.submit')}...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    {t('contact.submit')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
