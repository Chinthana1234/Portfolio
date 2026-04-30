import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Stall Reservation System',
    description: 'A full-stack reservation system allowing users to book stalls efficiently with interactive UI and robust backend architecture.',
    tech: ['Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/Chinthana1234/sa-project', live: '#',
    image: '/images/stall1.jpg',
  },
  {
    title: 'Food Management System',
    description: 'A comprehensive management platform to track food inventory, process orders, and handle user authentication seamlessly.',
    tech: ['React', 'PHP', 'MongoDB'],
    github: 'https://github.com/Chinthana1234/NA-HackDynamos', live: '#',
    image: '/images/food1.jpeg',
  },
  {
    title: 'Movie Hub',
    description: 'A modern, highly responsive movie discovery web application using sleek styling and dynamic component rendering.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Chinthana1234/Movie-Hub', live: '#',
    image: '/images/movie1.webp',
  },
  {
    title: 'Pet Store E-commerce',
    description: 'An online pet store featuring a shopping cart system, dynamic product catalogs, and custom database integration.',
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

function Projects() {
  const { isDark } = useTheme()
  return (
    <section id="projects" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400">
      <div className="divider" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >

          <h2 className="section-title">Selected <span className="accent-text">Projects</span></h2>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-14 sm:gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: '-40px' }}
              className="group relative flex flex-col h-full"
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
                {/* Image Section */}
                <div className="relative h-[240px] sm:h-[280px] overflow-hidden">
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
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-30">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-emerald-400 hover:border-emerald-500/30 transition-all duration-300">
                      <FiGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content Section - Glassmorphism */}
                <div className="px-8 sm:px-14 pt-8 sm:pt-12 pb-10 sm:pb-16 flex-1 flex flex-col bg-black/10 backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-[#A0A0A0] text-base leading-[1.75] mt-6 mb-10 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Tags - Silver-Ash logic */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium tracking-wide transition-all duration-300 text-gray-500 dark:text-[#A0A0A0] group-hover:text-[#10B981]"
                      >
                        {tech}
                      </span>
                    ))}
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
