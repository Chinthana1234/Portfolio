import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress, SiSpringboot, SiTailwindcss,
  SiMongodb, SiMysql, SiDocker, SiGit, SiFirebase, SiFlutter,
} from 'react-icons/si'

const skills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'Firebase', icon: SiFirebase },
]

function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  // Auto-hover sequential loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length)
    }, 800) // Even faster cycle for high-energy scanning
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="skills" className="relative py-40 overflow-hidden bg-[#000000]">
      {/* Background Watermark - Static */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[12vw] font-black text-white/[0.015] tracking-widest uppercase">
          Technologies
        </span>
      </div>

      <div className=" space-y-6 section-container relative z-10 max-w-7xl mx-auto px-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-32"
        >
          <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold mb-6 block" style={{ letterSpacing: '12px' }}>
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technologies & Tools
          </h2>
        </motion.div>

        {/* Skills Grid - Strict 7-column grid (2 rows of 7) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-24 max-w-[1600px] mx-auto px-10 justify-items-center">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            const isAutoActive = activeIndex === i && hoveredIndex === null
            const isHovered = hoveredIndex === i
            const isActive = isHovered || isAutoActive

            return (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  scale: isActive ? 1.03 : 1,
                  boxShadow: isActive
                    ? '0 0 25px 8px rgba(16, 185, 129, 0.9)'
                    : '0 0 0px rgba(16, 185, 129, 0)',
                  borderColor: isActive ? 'rgba(16, 185, 129, 0.8)' : 'rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="relative flex flex-col items-center justify-center gap-6 p-12 w-full aspect-[1.1/1] rounded-[2.5rem] border backdrop-blur-md cursor-pointer group overflow-hidden"
              >
                {/* Internal Sweeping Light Animation */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ x: '-100%', opacity: 0 }}
                      animate={{ x: '100%', opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <div className="flex items-center justify-center relative">
                    <Icon
                      className={`w-10 h-10 transition-all duration-100 ${isActive
                        ? 'text-emerald-400 brightness-125 scale-110 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]'
                        : 'text-white/40'
                        }`}
                    />

                    {/* Subtle Pulsing Glow Ring around Icon */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.4, opacity: [0, 0.5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 border border-emerald-500/30 rounded-full blur-[2px]"
                      />
                    )}
                  </div>
                </div>

                <span className={`relative z-10 text-[10px] font-mono tracking-[0.2em] uppercase text-center transition-all duration-100 ${isActive ? 'text-white font-bold' : 'text-white/20'
                  }`}>
                  {skill.name}
                </span>

                {/* Technical Corner Indicator */}
                <div className={`absolute top-6 right-6 w-1.5 h-1.5 rounded-full transition-all duration-100 ${isActive ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-transparent'
                  }`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
