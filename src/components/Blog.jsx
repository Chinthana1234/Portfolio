import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const articles = [
  {
    title: 'Stop Confusing REST API and RESTful API',
    description: 'A clear explanation of the fundamental differences between REST and RESTful APIs, and why the distinction matters for modern web services.',
    tags: ['API', 'REST', 'Web Dev'],
    date: 'Apr 26, 2026',
    readTime: '3 min read',
    link: 'https://medium.com/@chinthanasandeepa123/stop-confusing-rest-api-and-restful-api-8027b4023bf4?postPublishedType=initial',
    image: '/images/rest_blog.png',
  },
  {
    title: 'Getting Started with Spring Boot',
    description: 'A quick-start walkthrough for spinning up Spring Boot services, structuring REST APIs, and shipping your first backend feature.',
    tags: ['Java', 'Spring Boot', 'Backend'],
    date: 'Apr 1, 2025',
    readTime: '1 min read',
    link: 'https://medium.com/@chinthanasandeepa123/a-complete-guide-to-nodemon-in-node-js-development-88f428635c97',
    image: '/images/blog_nodemon_1776858969198.png',
  },
  {
    title: 'Understanding the MVC Architecture in Web Development',
    description: 'A plain-language breakdown of the MVC pattern, why it still matters, and how to keep controllers lean while views stay clean.',
    tags: ['Full-Stack', 'Architecture', 'Trends'],
    date: 'Dec 3, 2024',
    readTime: '4 min read',
    link: 'https://medium.com/@chinthanasandeepa123/create-a-simple-operating-system-2eead9a6b3d5',
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
    <section id="blog" className="relative overflow-hidden bg-[#000000] py-40">
      <div className="watermark">WRITING</div>
      <div className="divider" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">Technical <span className="accent-text">Articles</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-12">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col h-full"
            >
              {/* Animated Border SVG (matching Projects) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                <rect
                  x="0" y="0" width="100%" height="100%"
                  rx="0" ry="0"
                  fill="none"
                  stroke="#2A2A2A"
                  strokeWidth="1"
                  className="transition-opacity duration-300 group-hover:opacity-0"
                />
                <motion.rect
                  x="0" y="0" width="100%" height="100%"
                  rx="0" ry="0"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  variants={{
                    hover: {
                      pathLength: 1,
                      opacity: 1,
                      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
                    }
                  }}
                  style={{ filter: 'drop-shadow(0 0 4px #10B981)' }}
                />
              </svg>

              <div className="relative flex flex-col h-full bg-[#1A1A1A] rounded-none overflow-hidden transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-[220px] overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />

                  {/* Date & Read Time Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-[10px] font-mono text-white/50">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-12 pt-10 pb-14 flex-1 flex flex-col bg-black/10 backdrop-blur-md">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 mb-4 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-[1.6] mb-8 flex-grow line-clamp-3">
                    {article.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] font-mono border border-white/5 bg-white/[0.02] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Article Link */}
                  <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-white transition-all duration-300 group-hover:text-[#10B981]">
                    Read Article
                    <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
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
