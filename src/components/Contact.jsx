import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiArrowUpRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false, delay = 0 }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group mb-10"
    >
      <motion.label
        initial={false}
        animate={{
          y: isFocused || value ? -30 : 0,
          scale: isFocused || value ? 0.82 : 1,
          color: isFocused ? '#2EE59D' : '#555555',
        }}
        className="absolute left-0 text-[10px] font-mono tracking-[0.4em] uppercase pointer-events-none origin-left"
      >
        {label}
      </motion.label>

      {isTextArea ? (
        <textarea
          rows="5"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent focus:outline-none transition-all duration-300 resize-none text-base text-gray-900 dark:text-white placeholder:opacity-0 pt-5 pb-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.18)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent focus:outline-none transition-all duration-300 text-base text-gray-900 dark:text-white placeholder:opacity-0 pt-5 pb-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.18)', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
        />
      )}

      {/* Animated mint glow on focus */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
        style={{ backgroundColor: '#2EE59D', boxShadow: '0 0 14px #2EE59D' }}
      />
    </motion.div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400 min-h-screen flex flex-col pt-24">
      <div className="divider" />

      {/* Main Content Area - Full height to center content vertically */}
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto py-12 lg:py-20 relative z-10" style={{ paddingLeft: '120px', paddingRight: '40px' }}>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 w-full" style={{ gap: '2.5rem', columnGap: '4rem' }}
        >

          {/* Left Column: Huge Typography & Info */}
          <div className="flex flex-col justify-start items-start text-left">

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-gray-900 dark:text-white mb-5"
            >
              Work <br />
              <span className="accent-text">with me.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 dark:text-white/40 mb-8 max-w-lg font-light"
              style={{ lineHeight: '1.6' }}
            >

            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full max-w-md mx-auto">

              {/* Email Card */}
              <motion.a
                href="mailto:chinthanasandeepa123@gmail.com"
                whileHover="hover"
                className="group relative flex items-center gap-4 p-4 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                  <rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="transition-opacity duration-300 group-hover:opacity-0" />
                  <motion.rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="#10B981" strokeWidth="2" initial={{ pathLength: 0, opacity: 0 }} variants={{ hover: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } }} style={{ filter: 'drop-shadow(0 0 4px #10B981)' }} />
                </svg>
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 relative z-10" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <FiMail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: '#2EE59D' }}>Email</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">chinthanasandeepa123@gmail.com</span>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href="https://github.com/Chinthana1234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="group relative flex items-center gap-4 p-4 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                  <rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="transition-opacity duration-300 group-hover:opacity-0" />
                  <motion.rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="#10B981" strokeWidth="2" initial={{ pathLength: 0, opacity: 0 }} variants={{ hover: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } }} style={{ filter: 'drop-shadow(0 0 4px #10B981)' }} />
                </svg>
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 relative z-10" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <FiGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: '#2EE59D' }}>GitHub</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">Chinthana1234</span>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a
                href="https://linkedin.com/in/chinthana-sandeepa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="group relative flex items-center gap-4 p-4 cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                  <rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="transition-opacity duration-300 group-hover:opacity-0" />
                  <motion.rect x="0" y="0" width="100%" height="100%" rx="0" ry="0" fill="none" stroke="#10B981" strokeWidth="2" initial={{ pathLength: 0, opacity: 0 }} variants={{ hover: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } } }} style={{ filter: 'drop-shadow(0 0 4px #10B981)' }} />
                </svg>
                <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 relative z-10" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  <FiLinkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: '#2EE59D' }}>LinkedIn</span>
                  <span className="text-base font-medium text-gray-900 dark:text-white">chinthana-sandeepa</span>
                </div>
              </motion.a>

            </motion.div>


          </div>

          {/* Right Column: The Form */}
          <motion.div
            variants={itemVariants}
            className="flex items-center lg:justify-end"
          >
            <div className="w-full relative overflow-hidden transition-all duration-500" style={{ padding: '60px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 40px rgba(0,0,0,0.4)', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(24px)' }}>

              {/* Subtle background glow inside the form card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10"
                  >
                    <form onSubmit={handleSubmit} className="flex flex-col">
                      <FormField
                        label="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <FormField
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />

                      <FormField
                        label="Message"
                        isTextArea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />

                      <motion.button
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="relative flex items-center justify-end gap-3 mt-10 ml-auto disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer group/btn"
                      >
                        <span
                          className="text-[11px] font-black tracking-[0.5em] uppercase text-gray-900 dark:text-white transition-colors duration-300 group-hover/btn:opacity-80"
                        >
                          {isSubmitting ? 'Transmitting...' : 'Initiate Project'}
                        </span>
                        <motion.div
                          animate={isSubmitting ? { x: 20, y: -20, opacity: 0 } : {}}
                        >
                          <FiSend
                            className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                            style={{ color: '#2EE59D' }}
                          />
                        </motion.div>
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-24 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    >
                      <FiCheckCircle className="w-20 h-20 text-emerald-500 mb-8" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent</h3>
                    <p className="text-gray-500 dark:text-white/50 text-base mb-12">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                      className="text-[11px] font-mono tracking-[0.3em] text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors uppercase underline underline-offset-8"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Footer info at the absolute bottom of the screen */}
      <div className="w-full border-t border-black/5 dark:border-white/[0.03] py-8 flex items-center justify-center text-center mt-auto">
        <p className="text-[10px] font-mono text-[#444444] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Chinthana Sandeepa. All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Contact

