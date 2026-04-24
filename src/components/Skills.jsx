import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiSpringboot, SiTailwindcss,
  SiMongodb, SiMysql, SiDocker, SiGit, SiFirebase, SiPhp,
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'PHP', icon: SiPhp },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Firebase', icon: SiFirebase },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-400">
      <div className="watermark">TECHNOLOGIES</div>
      <div className="divider" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">What I Use</p>
          <h2 className="section-title">Technologies & <span className="accent-text">Tools</span></h2>
          <p className="section-subtitle mx-auto">
            The tools and frameworks I use to build production-ready software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="card group flex flex-col items-center justify-center gap-3 p-5 sm:p-6 cursor-default"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400 dark:text-white/30 group-hover:text-accent-500 transition-all duration-400" />
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.1em] uppercase text-gray-400 dark:text-white/25 group-hover:text-accent-500 transition-colors duration-400">
                  {skill.name}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
