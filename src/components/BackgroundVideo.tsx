'use client'

import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

interface BackgroundVideoProps {
  // 可以自定义视频源
  videoSrc?: string
  fallbackSrc?: string
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ 
  videoSrc = '/videos/background.mp4',
  fallbackSrc = '/videos/background-fallback.mp4'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc)
  const videoRef = useRef<HTMLVideoElement>(null)

  // 检测移动设备 - 使用 useCallback优化
  const checkMobile = useCallback(() => {
    const isMobileDevice = window.innerWidth < 768 || 
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    setIsMobile(isMobileDevice)
  }, [])

  // 检测移动设备
  useEffect(() => {
    checkMobile()
    const handleResize = () => {
      checkMobile()
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [checkMobile])

  // 视频加载处理 - 使用 useCallback
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  // 视频错误处理 - 使用 useCallback
  const handleVideoError = useCallback(() => {
    console.warn('Video load failed, switching to fallback')
    setHasError(true)
  }, [])

  // 视频源列表 - 使用 useMemo缓存
  const videoSources = useMemo(() => [
    currentVideoSrc,
    fallbackSrc,
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  ], [currentVideoSrc, fallbackSrc])

  // 如果是移动设备或视频加载失败，使用渐变背景
  if (isMobile || hasError) {
    return (
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-[length:400%_400%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        
        {/* 动态光效 - 使用 will-change 优化 */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse will-change-transform will-change-opacity"
            aria-hidden="true"
          />
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 will-change-transform will-change-opacity"
            aria-hidden="true"
          />
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000 will-change-transform will-change-opacity"
            aria-hidden="true"
          />
        </div>
      </div>
    )
  }

  // 动态光效组件 - 使用 useMemo缓存
  const AnimatedLights = useMemo(() => (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl will-change-transform"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl will-change-transform"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl will-change-transform"
        aria-hidden="true"
      />
    </div>
  ), [])

  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      {/* 视频背景 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform scale-105 will-change-transform"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          preload="metadata"
          aria-hidden="true"
        >
          {/* 本地视频源 - 优先使用 */}
          {videoSources.map((src, index) => (
            <source
              key={index}
              src={src}
              type="video/mp4"
            />
          ))}
        </video>
      </motion.div>

      {/* 视频覆盖层 - 确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30" />

      {/* 动态渐变叠加 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />

      {/* 动态光效 */}
      {AnimatedLights}

      {/* 加载状态 */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-700">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        </div>
      )}
    </div>
  )
}

export default BackgroundVideo
