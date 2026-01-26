import { NextRequest, NextResponse } from 'next/server'
import { RateLimit } from '@/lib/rate-limit'

// 速率限制：每个IP每小时最多5条消息
const rateLimiter = new RateLimit({
  windowMs: 60 * 60 * 1000, // 1小时
  max: 5,
})

// 输入清理函数 - 防止XSS攻击
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // 移除HTML标签
    .replace(/javascript:/gi, '') // 移除javascript:伪协议
    .replace(/on\w+=/gi, '') // 移除事件处理器
    .trim()
    .substring(0, 1000) // 限制长度
}

// 邮箱验证正则
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    // 应用速率限制
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    if (!rateLimiter.check(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // 验证必填字段
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      )
    }

    // 验证字段类型
    if (typeof body.name !== 'string' || 
        typeof body.email !== 'string' || 
        typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid field types' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // 清理输入数据
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message)
    }

    // 额外的字段验证
    if (sanitizedData.name.length < 2 || sanitizedData.name.length > 100) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      )
    }

    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 5000 characters' },
        { status: 400 }
      )
    }

    // TODO: 在这里实现实际的邮件发送或数据库存储
    // 例如使用 SendGrid, AWS SES, 或保存到数据库
    
    // 示例：记录到日志（生产环境应该用更安全的方式）
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ip: ip,
      data: sanitizedData
    })

    // 返回成功响应
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// 不支持其他HTTP方法
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
