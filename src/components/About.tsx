import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: '前端开发',
      description: '精通 React、Next.js、TypeScript，构建现代化的用户界面',
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: '后端开发',
      description: '熟练使用 Node.js、Python，构建高性能的服务端应用',
      tech: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '云服务与DevOps',
      description: '具备 AWS、Docker、CI/CD 实践经验',
      tech: ['AWS', 'Docker', 'GitHub Actions', 'Nginx']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: '移动开发',
      description: 'React Native 跨平台移动应用开发经验',
      tech: ['React Native', 'iOS', 'Android', 'Flutter']
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
            关于我
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
            我是一名充满热情的全栈开发者，拥有多年的软件开发经验。我热爱将创意转化为现实，
            专注于构建高性能、用户友好的Web应用。我相信技术的力量可以改变世界，
            并不断学习新技术来提升自己的能力。
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
            在团队协作中，我善于沟通，乐于分享知识，并始终保持积极的学习态度。
            我追求代码的优雅和效率，注重用户体验，致力于创造有价值的产品。
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