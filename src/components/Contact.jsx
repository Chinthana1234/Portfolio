import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  const [isFocused, setIsFocused] = useState(false)
  
  return (
    <div className="relative group mb-10">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || value ? -28 : 0,
          scale: isFocused || value ? 0.85 : 1,
          color: isFocused ? '#10B981' : '#666666',
        }}
        className="absolute left-0 text-[10px] font-mono tracking-[0.4em] uppercase pointer-events-none origin-left"
      >
        {label}
      </motion.label>
      
      {isTextArea ? (
        <textarea
          rows="4"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/[0.1] pt-4 pb-2 text-gray-900 dark:text-white focus:outline-none transition-all duration-300 resize-none text-sm placeholder:opacity-0"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent border-b border-black/10 dark:border-white/[0.1] pt-4 pb-2 text-gray-900 dark:text-white focus:outline-none transition-all duration-300 text-sm placeholder:opacity-0"
        />
      )}
      
      {/* Animated Bottom Border Glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left"
        style={{ boxShadow: '0 0 10px #10B981' }}
      />
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400 py-40">
      <div className="watermark">CONTACT</div>
      <div className="divider" />

      <div className="section-container relative z-10 max-w-7xl mx-auto px-10">
        <div className="flex justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-2xl bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl border border-black/10 dark:border-white/[0.05] p-12 lg:p-20 rounded-none relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-16 tracking-tight">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <FormField 
                      label="Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    
                    <FormField 
                      label="Email" 
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

                    <button 
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden border border-black/10 dark:border-white/[0.1] p-6 text-[12px] font-bold tracking-[0.5em] text-gray-900 dark:text-white transition-colors duration-300 group mt-4"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-black transition-colors duration-300">
                        {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                        <motion.div
                          animate={isSubmitting ? { x: 40, y: -40, opacity: 0 } : {}}
                        >
                          <FiSend className="w-5 h-5 transition-transform" />
                        </motion.div>
                      </span>
                      
                      {/* Button Fill Animation */}
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="absolute inset-0 bg-emerald-500 z-0"
                      />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  >
                    <FiCheckCircle className="w-24 h-24 text-emerald-500 mb-8" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-[#A0A0A0] font-mono text-sm tracking-widest uppercase">
                    Your transmission was successful.
                  </p>
                  <button 
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                    className="mt-12 text-[10px] font-mono tracking-[0.3em] text-emerald-500 hover:text-gray-900 dark:hover:text-white transition-colors uppercase underline underline-offset-8"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Footer info */}
        <div className="mt-40 pt-10 border-t border-black/5 dark:border-white/[0.03] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] font-mono text-[#444444] tracking-widest uppercase">
            © {new Date().getFullYear()} Chinthana Sandeepa. All rights reserved.
          </p>
          <div className="flex gap-8">
            {[
              { Icon: FiMail, href: 'mailto:minindubim@gmail.com' },
              { Icon: FiGithub, href: 'https://github.com/Chinthana1234' },
              { Icon: FiLinkedin, href: 'https://linkedin.com/in/chinthana-sandeepa' }
            ].map((item, index) => (
              <motion.a 
                key={index} 
                whileHover={{ y: -3, color: '#10B981' }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#444444] transition-colors"
              >
                <item.Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
