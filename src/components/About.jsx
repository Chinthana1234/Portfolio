import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { HiOutlineCode, HiOutlineRocketLaunch, HiOutlineUsers } from 'react-icons/hi2'
import profileImg from '../assets/profile.jpeg'

const stats = [
  { icon: HiOutlineCode, value: '50+', label: 'Projects' },
  { icon: HiOutlineUsers, value: '30+', label: 'Clients' },
  { icon: HiOutlineRocketLaunch, value: '3+', label: 'Years Exp' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 xl:gap-20">

          {/* Left: Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left lg:pl-6"
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
                            bg-primary-500/10 border border-primary-500/20
                            backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-400" />
                </span>
                <span className="text-sm font-medium text-primary-400 tracking-wide">
                  Software Engineer · React Specialist
                </span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-heading font-bold leading-[1.08] tracking-tight text-surface-900 dark:text-white mb-7"
            >
              Crafting{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300 font-extrabold">
                  digital
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-primary-400 to-primary-300 rounded-full opacity-40" />
              </span>
              <br />
              experiences with
              <br />
              <span className="italic font-light text-surface-400">
                precision.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg text-surface-500 dark:text-surface-400 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
            >
              Hi, I'm <span className="text-surface-900 dark:text-white font-semibold">Pedro Machado</span> — a software engineer specializing in React, Next.js, and TypeScript. I build scalable, performant web applications that users love.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider
                         text-surface-950 rounded-2xl bg-gradient-to-r from-primary-400 to-primary-500
                         shadow-xl shadow-primary-500/20 hover:shadow-2xl hover:shadow-primary-500/30
                         hover:scale-[1.03] active:scale-[0.97]
                         transition-all duration-300 cursor-pointer group"
              >
                Contact Me
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider
                         text-surface-600 dark:text-surface-300 rounded-2xl
                         border-2 border-surface-200 dark:border-surface-700
                         hover:border-primary-400 dark:hover:border-primary-400
                         hover:text-primary-500 dark:hover:text-primary-400
                         hover:scale-[1.03] active:scale-[0.97]
                         transition-all duration-300 cursor-pointer group"
              >
                <FiDownload className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex items-center gap-5 justify-center lg:justify-start"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-600">
                Follow me
              </span>
              <span className="w-8 h-px bg-surface-200 dark:bg-surface-700" />
              <div className="flex items-center gap-2">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center
                             text-surface-400 dark:text-surface-500
                             bg-surface-50 dark:bg-surface-800/50
                             border border-surface-200 dark:border-surface-800
                             hover:border-primary-400 dark:hover:border-primary-400
                             hover:text-primary-500 dark:hover:text-primary-400
                             hover:bg-primary-50 dark:hover:bg-primary-950/30
                             hover:scale-110 hover:-translate-y-0.5
                             transition-all duration-300"
                  >
                    <social.icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image + Stats */}
          <motion.div
            className="flex-shrink-0 flex flex-col items-center gap-8"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Profile image */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-primary-400/40 via-primary-500/20 to-accent-500/10 blur-sm" />

              <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-[21rem] lg:h-[25rem] rounded-3xl bg-gradient-to-b from-primary-400/30 via-primary-500/10 to-transparent p-[2px]">
                <div className="w-full h-full rounded-3xl bg-surface-100 dark:bg-surface-900 overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Decorative dot */}
              <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-primary-400 blur-[1px] opacity-60" />
              <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-accent-400 blur-[1px] opacity-40" />
            </div>

            {/* Stats row under the image */}
            <div className="flex items-center gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-1.5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15 }}
                >
                  <stat.icon className="w-5 h-5 text-primary-400 mb-0.5" />
                  <span className="text-xl font-heading font-bold text-surface-900 dark:text-white">{stat.value}</span>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-surface-400 dark:text-surface-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
