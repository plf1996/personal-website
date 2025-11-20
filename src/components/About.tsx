'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: <Database className="h-8 w-8" />,
      title: '大语言模型',
      description: '专注于 LLM 训练、微调与应用开发，精通主流模型架构',
      tech: ['GPT', 'LLaMA', 'BERT', 'LangChain', 'Transformers']
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'AI 应用开发',
      description: '构建智能化的 Web 应用，集成 NLP 和机器学习能力',
      tech: ['Python', 'FastAPI', 'OpenAI API', 'Vector DB', 'RAG']
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '全栈开发',
      description: '从前端到后端的完整技术栈，打造高性能应用系统',
      tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'MLOps 与部署',
      description: '模型部署、监控与优化的完整 MLOps 实践经验',
      tech: ['Docker', 'Kubernetes', 'MLflow', 'AWS', 'GPU 加速']
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
            我是一名专注于大语言模型应用开发的全栈工程师，热衷于探索 AI 技术的前沿。
            我擅长将自然语言处理技术与现代Web开发相结合，构建智能化的应用解决方案。
            在 LLM 领域，我有丰富的模型训练、微调和应用部署经验。
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
            我相信 AI 将重塑软件开发的未来，致力于打造更加智能、高效的应用系统。
            在团队协作中，我乐于分享技术见解，推动技术创新，追求代码质量与用户体验的完美平衡。
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