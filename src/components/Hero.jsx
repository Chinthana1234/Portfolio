import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub } from 'react-icons/fi'
import profileImg from '../assets/profile.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-400"
    >
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(16,185,129,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="section-container w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">

            {/* Overline */}
            <motion.p
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[11px] font-medium tracking-[0.25em] uppercase text-accent-500 mb-6"
            >
              Software Engineering Undergraduate
            </motion.p>

            {/* Headline */}
            <motion.h1
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-gray-900 dark:text-white mb-8"
            >
              Crafting Digital
              <br />
              <span className="accent-text">Experience With</span>
              <br />
              Precision.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={0.35}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-gray-500 dark:text-white/45 max-w-md mb-10 leading-[1.8] font-light"
            >
              Hi, I'm <span className="text-gray-900 dark:text-white font-medium">Chinthana Sandeepa</span> —
              transforming ideas into production-ready applications with precision and craft.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={0.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-outline"
              >
                Get In Touch
                <FiArrowDown className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Chinthana1234"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 z-10"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-accent-500/[0.05] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-80 lg:h-[26rem] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/[0.06] transition-colors duration-400">
                <img
                  src={profileImg}
                  alt="Chinthana Sandeepa — Software Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gray-300 dark:border-white/15 flex items-start justify-center p-1.5 transition-colors duration-400"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
