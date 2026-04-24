import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Stall Reservation System',
    description: 'A full-stack reservation system allowing users to book stalls efficiently with interactive UI and robust backend architecture.',
    tech: ['Spring Boot', 'React', 'MySQL'],
    github: '#', live: '#',
    image: '/images/proj_stall_1776858898983.png',
  },
  {
    title: 'Food Management System',
    description: 'A comprehensive management platform to track food inventory, process orders, and handle user authentication seamlessly.',
    tech: ['React', 'PHP', 'MongoDB'],
    github: '#', live: '#',
    image: '/images/proj_food_1776858917316.png',
  },
  {
    title: 'Movie Hub',
    description: 'A modern, highly responsive movie discovery web application using sleek styling and dynamic component rendering.',
    tech: ['React', 'Tailwind CSS'],
    github: '#', live: '#',
    image: '/images/proj_movie_1776858934526.png',
  },
  {
    title: 'Pet Store E-commerce',
    description: 'An online pet store featuring a shopping cart system, dynamic product catalogs, and custom database integration.',
    tech: ['PHP', 'HTML/CSS', 'MySQL'],
    github: '#', live: '#',
    image: '/images/proj_pet_1776858952580.png',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400">
      <div className="watermark">PROJECTS</div>
      <div className="divider" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Selected <span className="accent-text">Projects</span></h2>
          <p className="section-subtitle">A selection of things I've built and shipped.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="card group overflow-hidden flex flex-col"
            >
              <div className="relative h-[200px] sm:h-[220px] overflow-hidden">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300">
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-accent-400 hover:border-accent-500/30 transition-all duration-300">
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-6 lg:p-7 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-white/40 leading-relaxed mb-5 flex-grow line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tag group-hover:border-accent-500/20 group-hover:text-accent-500">
                      {tech}
                    </span>
                  ))}
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
