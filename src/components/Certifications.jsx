import { motion } from 'framer-motion'
import { FiAward, FiExternalLink, FiBook, FiMapPin } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

/* ── Education Data ─────────────────────────────────────── */
const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Kelaniya',
    period: '2024 – Present',
    grade: 'CGPA: 3.30 / 4.0',
    description:
      'Specializing in Net-Centric Web Application Development, Data Science and Engineering Application, Health Informatic Engineering domains.',
  },
  {
    degree: 'GCE Advanced Level',
    institution: 'Kularathna College Ambalangoda',
    period: '2022– 2024',
    grade: 'Z-Score: 1.546',
    description:
      'Completed coursework in Mathematics, Chemistry, and Physics.',
  },
]

/* ── Certification Data ─────────────────────────────────── */
const certifications = [
  {
    title: 'Figma Design Basics and Features',
    issuer: 'Alison',
    date: 'May 2025',
    credentialId: '4408-47654177',
    verifyLink: 'https://alison.com/certification/check/6a4fdd6c1d',
  },
  {
    title: 'Web Development with HTML and CSS for Beginners',
    issuer: 'Alison',
    date: 'Apr 2025',
    credentialId: '3757-47654177',
    verifyLink: 'https://alison.com/certification/check/b1a61b6332',
  },
  {
    title: 'Fundamentals of HTML',
    issuer: 'Alison',
    date: 'Apr 2025',
    credentialId: '3588-47654177',
    verifyLink: 'https://alison.com/certification/check/e990c6193d',
  },
  {
    title: 'Describe cloud computing',
    issuer: 'Microsoft Learn',
    date: 'Badge',
    credentialId: 'Microsoft Learn',
    verifyLink: 'https://learn.microsoft.com/en-us/users/chinthanasandeepa-8061/achievements/nmw5jejf?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
]

/* ── Animation Variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ══════════════════════════════════════════════════════════
   Component
══════════════════════════════════════════════════════════ */
function Certifications() {
  const { isDark } = useTheme()

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400 py-20 lg:py-32"
    >
      <div className="divider" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Section Header ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <span
            className="text-[10px] font-mono uppercase text-emerald-500 font-bold mb-8 block"
            style={{ letterSpacing: '12px' }}
          >
            ACHIEVEMENTS
          </span>
          <h2 className="section-title">
            Education &amp; <span className="accent-text">Certifications</span>
          </h2>
        </motion.div>

        {/* ── Two-Column Layout ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ══ LEFT — Education ═════════════════════════ */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-8 rounded-none bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <FiBook className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 dark:text-white/40">
                Education
              </h3>
            </motion.div>

            <div className="relative pl-6 border-l border-gray-200 dark:border-white/[0.06] flex flex-col gap-12">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="relative group cursor-default"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[1.65rem] top-1.5 w-3 h-3 rounded-none border-2 border-emerald-500 bg-white dark:bg-black group-hover:bg-emerald-500 transition-colors duration-300" />

                  {/* Hover card wrapper */}
                  <div className="relative p-4 -mx-4 rounded-none transition-all duration-300
                    group-hover:bg-emerald-500/[0.04] dark:group-hover:bg-emerald-500/[0.06]
                  ">

                    {/* Period badge */}
                    <span className="inline-block mb-3 text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-500 bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20 transition-colors duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40">
                      {edu.period}
                    </span>

                    <h4 className="text-lg sm:text-xl font-bold leading-snug mb-1 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400">
                      {edu.degree}
                    </h4>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <p className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-white/50 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-white/70">
                        <FiMapPin className="w-3 h-3 flex-shrink-0 transition-colors duration-300 group-hover:text-emerald-500" />
                        {edu.institution}
                      </p>
                      <span className="text-xs font-mono font-bold text-emerald-500 transition-all duration-300 group-hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]">
                        {edu.grade}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-500 dark:text-white/35 transition-colors duration-300 group-hover:text-gray-600 dark:group-hover:text-white/50">
                      {edu.description}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* ══ RIGHT — Certifications ═══════════════════ */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-8 rounded-none bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                <FiAward className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 dark:text-white/40">
                Certifications
              </h3>
            </motion.div>

            <div className="flex flex-col divide-y divide-gray-100 dark:divide-white/[0.05]">
              {certifications.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-20px' }}
                  className="group flex items-start justify-between gap-4 py-5 hover:bg-emerald-500/[0.03] transition-colors duration-300 px-3 -mx-3 cursor-pointer"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white/80 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-snug mb-1">
                      {cert.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-white/30">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  <FiExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-white/20 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0 mt-0.5" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Certifications
