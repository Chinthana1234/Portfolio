import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const articles = [
  {
    title: 'A Complete Guide to Nodemon in Node.js Development',
    description: 'Focus on development efficiency and automation in Node.js.',
    tag: 'Node.js', link: '#',
    image: '/images/blog_nodemon_1776858969198.png',
  },
  {
    title: 'Create a Simple Operating System',
    description: 'Low-level programming and system architecture exploration.',
    tag: 'Systems',
    link: 'https://github.com/Chinthana1234/Chin-Os.git',
    image: '/images/blog_os_1776858986597.png',
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-400">
      <div className="watermark">WRITING</div>
      <div className="divider" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">Insights</p>
          <h2 className="section-title">Technical <span className="accent-text">Articles</span></h2>
          <p className="section-subtitle">Writing about things I learn and build.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href={article.link}
              target={article.link.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="card group overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                <img src={article.image} alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="tag bg-black/50 backdrop-blur-sm border-white/10 text-white/60">
                    {article.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/35 leading-relaxed mb-5 flex-grow line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-[12px] font-medium tracking-[0.06em] uppercase text-gray-400 dark:text-white/30 group-hover:text-accent-500 transition-colors mt-auto">
                  Read Article
                  <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
