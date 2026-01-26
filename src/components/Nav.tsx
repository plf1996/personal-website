'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

/**
 * 导航组件属性
 */
interface NavProps {
  logo?: string  // Logo文字或图片
}

/**
 * 导航菜单项类型
 */
interface NavItem {
  label: string
  href: string
}

/**
 * 导航栏组件
 * 功能：
 * - 响应式设计（桌面和移动端）
 * - 深色/浅色主题切换
 * - 语言切换
 * - 平滑滚动
 */
const Nav: React.FC<NavProps> = ({ logo = 'AI-Lab' }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const { t } = useLanguage()

  // 初始化主题设置 - 使用 useCallback优化
  const initTheme = useCallback(() => {
    const darkModePreference = window.localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const shouldBeDark = darkModePreference === 'true' || 
                        (!darkModePreference && prefersDark)
    
    if (shouldBeDark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // 初始化主题
  useEffect(() => {
    initTheme()
  }, [initTheme])

  // 切换主题 - 使用 useCallback优化
  const toggleDarkMode = useCallback(() => {
    setIsDark((prev) => {
      const newDarkMode = !prev
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark')
        window.localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove('dark')
        window.localStorage.setItem('darkMode', 'false')
      }
      
      return newDarkMode
    })
  }, [])

  // 切换移动菜单
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  // 关闭移动菜单
  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  // 导航菜单项 - 使用 useMemo缓存
  const navItems: NavItem[] = useMemo(() => [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.links'), href: '#links' },
    { label: t('nav.contact'), href: '#contact' },
  ], [t])

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">{logo}</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={toggleDarkMode}
                  className="ml-4 p-2 rounded-md text-white/90 hover:text-white transition-colors"
                  aria-label={t('nav.toggleTheme')}
                  type="button"
                >
                  {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                </button>
                <LanguageToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-white/90"
                aria-label={t('nav.toggleTheme')}
                type="button"
              >
                {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
              </button>
              <LanguageToggle />
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
                type="button"
              >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-md border-b border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
