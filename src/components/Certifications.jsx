import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Certifications() {
  const { isDark } = useTheme()

  return (
    <section id="certifications" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400 py-20 lg:py-32">
      <div className="divider" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 sm:mb-24"
        >
          <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold mb-8 block" style={{ letterSpacing: '12px' }}>
            ACHIEVEMENTS
          </span>
          <h2 className="section-title">Licenses & <span className="accent-text">Certifications</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12">
          {certifications.map((cert, index) => (
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

              <div className="relative flex-1 p-8 sm:p-10 bg-black/[0.03] dark:bg-[#1A1A1A] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-none bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <FiAward className="w-6 h-6 text-emerald-500" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-[#A0A0A0] font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-[#707070] mb-6">
                      Issued {cert.date} · Credential ID {cert.credentialId}
                    </p>

                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-gray-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300"
                    >
                      <span>Show Credential</span>
                      <FiExternalLink className="w-4 h-4" />
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

export default Certifications
