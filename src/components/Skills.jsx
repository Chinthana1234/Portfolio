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

      <div className="section-container relative z-10 max-w-7xl mx-auto px-10 flex flex-col gap-40">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
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
                  scale: isActive ? 1.05 : 1,
                  boxShadow: isActive
                    ? '0 0 30px 10px rgba(16, 185, 129, 0.4)'
                    : '0 0 0px rgba(16, 185, 129, 0)',
                  borderColor: isActive ? 'rgba(16, 185, 129, 0.6)' : 'rgba(255, 255, 255, 0.05)',
                  backgroundColor: isActive ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                }}
                transition={{ duration: 0.2, ease: "circOut" }}
                className="relative flex flex-col items-center justify-center gap-6 p-10 w-full aspect-square rounded-none border-[0.5px] backdrop-blur-sm cursor-pointer group overflow-hidden"
              >
                {/* Internal Sweeping Light Animation */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ x: '-150%', opacity: 0 }}
                      animate={{ x: '150%', opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent skew-x-12 pointer-events-none"
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <div className="flex items-center justify-center relative">
                    <Icon
                      className={`w-12 h-12 transition-all duration-300 ${isActive
                        ? 'text-emerald-400 brightness-125 scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                        : 'text-white/30'
                        }`}
                    />

                    {/* Technical Square Glow around Icon */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: [0, 0.4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 border border-emerald-500/20 rounded-none blur-[1px]"
                      />
                    )}
                  </div>
                </div>

                <span className={`relative z-10 text-[9px] font-mono tracking-[0.3em] uppercase text-center transition-all duration-300 ${isActive ? 'text-white font-black' : 'text-white/20'
                  }`}>
                  {skill.name}
                </span>

                {/* Technical Square Corner Indicator */}
                <div className={`absolute top-4 right-4 w-1.5 h-1.5 transition-all duration-300 ${isActive ? 'bg-emerald-500 shadow-[0_0_12px_#10b981] rotate-45' : 'bg-white/10'
                  }`} />

                {/* Decorative Square Borders for active state */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-4 h-[1px] bg-emerald-500/50" />
                    <div className="absolute top-0 left-0 w-[1px] h-4 bg-emerald-500/50" />
                    <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-emerald-500/50" />
                    <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-emerald-500/50" />
                  </>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
