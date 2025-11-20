import { motion } from 'framer-motion'
import { ExternalLink, Github, Twitter, Youtube, BookOpen, Briefcase, Heart } from 'lucide-react'

const Links = () => {
  const linkCategories = [
    {
      title: '社交媒体',
      icon: <Twitter className="h-5 w-5" />,
      links: [
        {
          name: 'Twitter',
          description: '关注我的最新动态和技术分享',
          url: 'https://twitter.com/yourusername',
          icon: <Twitter className="h-6 w-6" />,
          color: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400'
        },
        {
          name: 'LinkedIn',
          description: '专业的职场社交和职业经历',
          url: 'https://linkedin.com/in/yourusername',
          icon: <Briefcase className="h-6 w-6" />,
          color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        }
      ]
    },
    {
      title: '代码与项目',
      icon: <Github className="h-5 w-5" />,
      links: [
        {
          name: 'GitHub',
          description: '我的开源项目和代码贡献',
          url: 'https://github.com/yourusername',
          icon: <Github className="h-6 w-6" />,
          color: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
        },
        {
          name: '个人博客',
          description: '技术文章和学习心得分享',
          url: 'https://blog.yourwebsite.com',
          icon: <BookOpen className="h-6 w-6" />,
          color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        }
      ]
    },
    {
      title: '作品展示',
      icon: <ExternalLink className="h-5 w-5" />,
      links: [
        {
          name: '项目作品集',
          description: '精选项目展示和案例研究',
          url: 'https://portfolio.yourwebsite.com',
          icon: <Briefcase className="h-6 w-6" />,
          color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        },
        {
          name: 'YouTube频道',
          description: '技术教程和编程分享视频',
          url: 'https://youtube.com/yourchannel',
          icon: <Youtube className="h-6 w-6" />,
          color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
        }
      ]
    },
    {
      title: '其他兴趣',
      icon: <Heart className="h-5 w-5" />,
      links: [
        {
          name: '摄影作品',
          description: '记录生活美好瞬间',
          url: 'https://photos.yourwebsite.com',
          icon: <Heart className="h-6 w-6" />,
          color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
        },
        {
          name: '技术周刊',
          description: '每周技术精选和资讯分享',
          url: 'https://newsletter.yourwebsite.com',
          icon: <BookOpen className="h-6 w-6" />,
          color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
        }
      ]
    }
  ]

  return (
    <section id="links" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            我的链接
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            探索我的数字足迹，了解我在各个平台的动态和分享
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
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
                <div className="text-slate-700 dark:text-slate-300 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
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
                    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`${link.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                        {link.icon}
                      </div>
                      <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      {link.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300">
                      访问链接 →
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
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            如果您想要联系我，可以访问{' '}
            <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              联系方式
            </a>{' '}
            页面
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Links