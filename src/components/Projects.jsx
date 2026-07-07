import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'CareerCoach AI',
    type: 'Individual Project',
    description: 'Developing an AI-powered career preparation platform featuring CV analysis, HR and technical mock interviews, LinkedIn profile reviews, and personalized career guidance. Building secure RESTful APIs using Spring Boot, Spring Security, JWT, and PostgreSQL.',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'OpenAI API'],
    github: 'https://github.com/Chinthana1234/CareerCoach-AI', live: '#',
    image: '/images/career_coach_ai.png',
  },
  {
    title: 'Aura Gems',
    type: 'Individual Project',
    description: 'Built a full-stack MERN e-commerce platform featuring an admin dashboard, advanced product filtering, and Redux Toolkit for state management. Engineered secure backend systems with JWT authentication, Stripe/PayPal integrations, and Cloudinary.',
    tech: ['Express.js', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Chinthana1234/MERN-Gemstone-Shop-', live: '#',
    image: '/images/aura_gems.png',
  },
  {
    title: 'The Grand Ceylon',
    type: 'Individual Project',
    description: 'Built a containerized MERN-based hotel booking system using a microservices architecture. Developed a custom API Gateway to route User, Room, Booking, Payment, and Review services with secure JWT authentication.',
    tech: ['Microservices', 'Node.js', 'React.js', 'Docker'],
    github: 'https://github.com/Chinthana1234/hotel-booking-microservices', live: '#',
    image: '/images/grand_ceylon.png',
  },
  {
    title: 'StallRes',
    type: 'Group Project',
    description: 'Developed a full-stack stall reservation system for managing book fair exhibitor bookings. Implemented real-time availability tracking, role-based access control, automated confirmations, and an admin dashboard.',
    tech: ['Spring Boot', 'React', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/nalinduash/sa-project', live: '#',
    image: '/images/stallres.png',
  },
  {
    title: 'Care4Pets',
    type: 'Group Project',
    description: 'Developed a full-stack e-commerce platform for pet owners. Implemented dynamic product browsing, shopping cart management, secure user authentication, and order processing with a dedicated admin dashboard.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/Lochithya/Care4Pets', live: '#',
    image: '/images/care4pets.png',
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

              <div className="relative flex flex-col h-full bg-[#fafafa] dark:bg-[#111111] rounded-none overflow-hidden transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-[200px] sm:h-[260px] overflow-hidden group/image">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50" />

                  {/* Action Links at bottom left */}
                  <div className="absolute bottom-4 left-4 flex gap-2 z-30">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-300">
                      <FiGithub className="w-5 h-5" />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-300">
                        <FiArrowRight className="w-5 h-5 -rotate-45" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col items-start text-left" style={{ padding: 'clamp(24px, 3vw, 36px)' }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 dark:text-emerald-400 mb-5 block">
                    {project.type}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 dark:text-[#8b95a5] text-[15px] leading-[1.85] flex-grow mb-10 text-justify">
                    {project.description}
                  </p>

                  <div className="mt-auto w-full">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gray-100 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/[0.08] text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
