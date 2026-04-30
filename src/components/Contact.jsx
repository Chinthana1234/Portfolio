import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiArrowUpRight, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-gray-300 tracking-wide uppercase">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows="6"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-2 focus:border-emerald-500 transition-all duration-300 resize-none py-3 px-4 min-h-[160px] text-sm rounded-lg"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-[#1a1a1a] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-2 focus:border-emerald-500 transition-all duration-300 py-3 px-4 min-h-[50px] text-sm rounded-lg"
        />
      )}
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/chinthanasandeepa123@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to send message. Please try again.");
    }
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
      <div className="flex-1 flex flex-col justify-center w-full max-w-[1400px] mx-auto py-12 lg:py-20 relative z-10 px-4 sm:px-8 lg:px-16">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-16 lg:gap-20 xl:gap-32"
        >

          {/* Left Column: Huge Typography & Info */}
          <div className="inset-[300px] top-4  left-100 flex flex-col justify-start items-start text-left lg:ml-[150px] xl:ml-[350px] rounded-[24px] overflow-hidden">

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[1.05] text-gray-900 dark:text-white mb-20"
            >
              Work <br />
              <span className="accent-text">with me.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-gray-500 dark:text-white/40 mb-10 max-w-lg font-light"
              style={{ lineHeight: '1.75' }}
            >

            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 w-fit pr-8 sm:pr-12 lg:pr-16">

              {/* Email Card */}
              <motion.a
                href="mailto:chinthanasandeepa123@gmail.com"
                whileHover="hover"
                className="group relative flex items-center gap-5 p-5 cursor-pointer"
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
                  <span className="text-sm font-medium text-gray-900 dark:text-white break-all">chinthanasandeepa123@gmail.com</span>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href="https://github.com/Chinthana1234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="group relative flex items-center gap-5 p-5 cursor-pointer"
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
                className="group relative flex items-center gap-5 p-5 cursor-pointer"
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
            className="flex items-center lg:ml-auto w-full lg:w-[90%] xl:w-[85%]"
          >
            <div className="w-full relative transition-all duration-500 p-8 sm:p-10" style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', background: '#111111' }}>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white mb-8">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <FormField
                        label="Name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <FormField
                        label="Email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />

                      <FormField
                        label="Message"
                        placeholder="How can I help you?"
                        isTextArea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        className="w-full flex items-center justify-center gap-3 mt-6 py-4 px-6 bg-[#1a1a1a] border border-white/5 hover:border-2 hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-xl min-h-[50px] group"
                      >
                        <span className="text-[14px] font-semibold tracking-wide text-white">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        <FiSend className="w-4 h-4 text-white group-hover:text-emerald-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200 }}
                    >
                      <FiCheckCircle className="w-20 h-20 text-emerald-500 mb-8" />
                    </motion.div>
                    <h3 className="text-3xl font-semibold text-white mb-4">Message Sent</h3>
                    <p className="text-gray-400 text-base mb-12">
                      Thank you for reaching out. I'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                      className="text-[13px] font-medium text-emerald-500 hover:text-emerald-400 transition-colors"
                    >
                      Send Another Message
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
        <p className="text-[12px] font-sans text-gray-600 uppercase">
          © {new Date().getFullYear()} CHINTHANA SANDEEPA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </section>
  )
}

export default Contact

