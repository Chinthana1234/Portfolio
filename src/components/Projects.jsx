import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Stall Reservation System',
    description: 'A full-stack reservation system allowing users to book stalls efficiently. Features an interactive UI, real-time availability checking, and a robust backend architecture for seamless transaction management.',
    tech: ['Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/Chinthana1234/sa-project', live: '#',
    image: '/images/stall1.jpg',
  },
  {
    title: 'Food Management System',
    description: 'A comprehensive management platform designed to track food inventory, process daily orders, and handle secure user authentication, streamlining operations for restaurant staff.',
    tech: ['React', 'PHP', 'MongoDB'],
    github: 'https://github.com/Chinthana1234/NA-HackDynamos', live: '#',
    image: '/images/food1.jpeg',
  },
  {
    title: 'Movie Hub',
    description: 'A modern, highly responsive movie discovery web application. It leverages external APIs to fetch real-time data, using sleek styling and dynamic component rendering for a premium user experience.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Chinthana1234/Movie-Hub', live: '#',
    image: '/images/movie1.webp',
  },
  {
    title: 'Pet Store E-commerce',
    description: 'An online pet store featuring a complete shopping cart system, dynamic product catalogs, and custom database integration to handle inventory, user profiles, and order history.',
    tech: ['PHP', 'HTML/CSS', 'MySQL'],
    github: 'https://github.com/Lochithya/Care4Pets', live: '#',
    image: '/images/pets1.jpeg  ',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

import { useTheme } from '../context/ThemeContext'
import { FiArrowRight } from 'react-icons/fi'

function Projects() {
  const { isDark } = useTheme()
  return (
    <section id="projects" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400 py-20 lg:py-32">
      <div className="divider" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20 sm:mb-32"
        >
          <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold mb-8 block" style={{ letterSpacing: '12px' }}>
            PORTFOLIO
          </span>
          <h2 className="section-title">Selected <span className="accent-text">Projects</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-16 gap-y-16 sm:gap-y-20 justify-items-center sm:justify-items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative flex flex-col h-full max-w-[260px] sm:max-w-none mx-auto w-full"
            >
              {/* Animated Border SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
                <rect
                  x="0" y="0" width="100%" height="100%"
                  rx="0" ry="0"
                  fill="none"
                  stroke={isDark ? "#2A2A2A" : "#E5E7EB"}
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

              <div className="relative flex flex-col h-full bg-black/[0.03] dark:bg-[#1A1A1A] rounded-none overflow-hidden transition-all duration-300">
                {/* Image Section - Reduced Height for mobile */}
                <div className="relative h-[130px] sm:h-[220px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#1A1A1A] via-transparent to-transparent opacity-80" />

                  {/* Action Links */}
                  <div className="absolute top-4 right-4 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300">
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content Section - Adjusted Padding */}
                <div className="p-6 sm:p-10 flex-1 flex flex-col gap-5 bg-black/10 backdrop-blur-md items-center sm:items-start text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#A0A0A0] text-sm leading-[1.6] flex-grow mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/5 w-full items-center sm:items-start">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 text-gray-500 dark:text-[#A0A0A0] group-hover:text-[#10B981]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* More Details Link */}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-mono uppercase tracking-widest text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 w-fit group/link mt-1">
                      More Details
                      <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
