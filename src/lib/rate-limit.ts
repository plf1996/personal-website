// 简单的内存速率限制器
// 注意：在生产环境中，应该使用Redis等外部存储来实现分布式速率限制

interface RateLimitOptions {
  windowMs: number      // 时间窗口（毫秒）
  max: number            // 最大请求数
}

interface RateLimitResult {
  success: boolean
  remaining?: number
  resetTime?: number
}

export class RateLimit {
  private requests: Map<string, number[]> = new Map()
  private windowMs: number
  private max: number

  constructor(options: RateLimitOptions) {
    this.windowMs = options.windowMs
    this.max = options.max

    // 定期清理过期记录（每5分钟）
    setInterval(() => {
      this.cleanup()
    }, 5 * 60 * 1000)
  }

  // 检查是否允许请求
  check(identifier: string): RateLimitResult {
    const now = Date.now()
    const timestamps = this.requests.get(identifier) || []

    // 移除超过时间窗口的记录
    const validTimestamps = timestamps.filter(
      timestamp => now - timestamp < this.windowMs
    )

    // 检查是否超过限制
    if (validTimestamps.length >= this.max) {
      // 计算重置时间
      const oldestTimestamp = Math.min(...validTimestamps)
      const resetTime = oldestTimestamp + this.windowMs
      
      return {
        success: false,
        remaining: 0,
        resetTime
      }
    }

    // 添加当前请求记录
    validTimestamps.push(now)
    this.requests.set(identifier, validTimestamps)

    const remaining = this.max - validTimestamps.length

    return {
      success: true,
      remaining
    }
  }

  // 清理过期记录
  private cleanup(): void {
    const now = Date.now()
    
    for (const [identifier, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(
        timestamp => now - timestamp < this.windowMs
      )
      
      if (validTimestamps.length === 0) {
        this.requests.delete(identifier)
      } else {
        this.requests.set(identifier, validTimestamps)
      }
    }
  }

  // 重置指定标识符的速率限制
  reset(identifier: string): void {
    this.requests.delete(identifier)
  }

  // 重置所有速率限制
  resetAll(): void {
    this.requests.clear()
  }
}
