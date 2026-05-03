import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiMail, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="flex flex-col gap-3 group/field">
      <div className="flex justify-between items-center px-1">
        <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/30 group-focus-within/field:text-[#10B981] transition-colors duration-300">
          {label}
        </label>
        <div className="h-[1px] w-4 bg-white/10 group-focus-within/field:w-8 group-focus-within/field:bg-[#10B981] transition-all duration-500" />
      </div>
      {isTextArea ? (
        <textarea
          rows="5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.05] transition-all duration-500 resize-none py-5 px-6 text-sm rounded-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.05] transition-all duration-500 py-5 px-6 text-sm rounded-none h-16"
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
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      value: 'chinthanasandeepa123@gmail.com',
      href: 'mailto:chinthanasandeepa123@gmail.com',
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'Chinthana1234',
      href: 'https://github.com/Chinthana1234',
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'chinthana-sandeepa',
      href: 'https://linkedin.com/in/chinthana-sandeepa',
      icon: <FiLinkedin className="w-5 h-5" />,
    }
  ]

  return (
    <section id="contact" className="relative bg-[#050505] py-24 lg:py-40 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981]/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 blur-[150px] rounded-full -ml-80 -mb-80 pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#10B981] font-mono text-xs tracking-[0.4em]">04</span>
          <div className="h-[1px] w-12 bg-[#10B981]/30" />
          <span className="text-white/40 font-mono text-xs tracking-[0.4em] uppercase">Contact</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start"
        >
          {/* Left Column: Typography & Info */}
          <div className="flex flex-col">
            <motion.h2
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white mb-12 leading-[0.95]"
            >
              Work <br />
              <span className="text-[#10B981] font-normal italic">With Me.</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {contactLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' ? "_blank" : undefined}
                  rel={link.id !== 'email' ? "noopener noreferrer" : undefined}
                  whileHover="hover"
                  className="group relative flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 transition-all duration-500 hover:border-[#10B981]/20 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-black border border-white/10 text-white/50 group-hover:text-[#10B981] group-hover:border-[#10B981]/30 transition-all duration-500">
                      {link.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/30">
                        {link.label}
                      </span>
                      <span className="text-white/80 group-hover:text-white transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-white/0 group-hover:text-[#10B981] group-hover:translate-x-2 transition-all duration-500" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: The Form */}
          <motion.div variants={itemVariants} className="w-full">
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-14 relative overflow-hidden">
              {/* Subtle Decorative Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-4 mb-12">
                      <h3 className="text-2xl font-light text-white tracking-tight">Send a Message</h3>
                      <div className="h-[1px] flex-grow bg-white/5" />
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                      <FormField
                        label="Name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />

                      <FormField
                        label="Email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />

                      <FormField
                        label="Message"
                        placeholder="What's on your mind?"
                        isTextArea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />

                      <motion.button
                        type="submit"
                        whileHover="hover"
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        className="group relative w-full h-16 bg-white text-black text-xs font-bold tracking-[0.3em] uppercase overflow-hidden transition-all duration-500"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? 'Sending...' : 'Submit Message'}
                          <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#10B981] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center"
                  >
                    <div className="w-24 h-24 bg-[#10B981]/10 rounded-full flex items-center justify-center mb-10 relative">
                      <FiCheckCircle className="w-12 h-12 text-[#10B981] relative z-10" />
                      <div className="absolute inset-0 bg-[#10B981]/20 blur-2xl rounded-full scale-150 animate-pulse" />
                    </div>
                    <h3 className="text-3xl font-light text-white mb-6 tracking-tight">Message Received</h3>
                    <p className="text-white/40 text-lg font-light mb-12 max-w-sm">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', message: '' }) }}
                      className="text-[#10B981] hover:text-white transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.4em]"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <div className="mt-32 lg:mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">
              © {new Date().getFullYear()} CHINTHANA SANDEEPA
            </p>
            <p className="text-[9px] font-mono tracking-[0.2em] text-white/10 uppercase">
              Designed & Built with Passion
            </p>
          </div>
          <div className="flex gap-12">
            {['Twitter', 'Instagram', 'Dribbble'].map((social) => (
              <a key={social} href="#" className="relative group text-[10px] font-mono tracking-[0.4em] text-white/30 hover:text-[#10B981] uppercase transition-colors">
                {social}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#10B981] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact