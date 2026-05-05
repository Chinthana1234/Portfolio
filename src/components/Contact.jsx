import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="flex flex-col gap-2 group/field">
      <label className="text-sm font-semibold text-white/80 group-focus-within/field:text-[#10B981] transition-colors duration-300">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows="5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/[0.03] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.05] transition-all duration-500 resize-none py-3 px-4 text-sm rounded-sm"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-white/[0.03] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-[#10B981]/50 focus:bg-white/[0.05] transition-all duration-500 py-3 px-4 text-sm rounded-sm h-12"
        />
      )}
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
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
          subject: formData.subject,
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

  const contactInfo = [
    {
      id: 'email',
      label: 'Email',
      value: 'imansha.idr@gmail.com',
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+94 76 311 7229',
      icon: <FiPhone className="w-5 h-5" />,
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Mahiyangana, Sri Lanka',
      icon: <FiMapPin className="w-5 h-5" />,
    }
  ]

  return (
    <section id="contact" className="relative bg-[#050505] py-24 lg:py-40 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10B981]/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 blur-[150px] rounded-full -ml-80 -mb-80 pointer-events-none opacity-30" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
          <div className="w-14 h-[3px] bg-[#10B981] mx-auto mb-5" />
          <p className="text-white/40 text-sm md:text-base">
            Have a question or want to work together? Send me a message!
          </p>
        </motion.div>

        {/* Two-Column: Contact Info + Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 max-w-4xl mx-auto"
        >
          {/* Left Column: Contact Information */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-8 tracking-tight">
              Contact Information
            </h3>

            <div className="flex flex-col gap-7">
              {contactInfo.map((info) => (
                <div key={info.id} className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-0.5 text-white/60 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold text-white">
                      {info.label}
                    </span>
                    <span className="text-sm text-white/50">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div variants={itemVariants} className="w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name & Email — Same Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField
                        label="Name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                      <FormField
                        label="Email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Subject */}
                    <FormField
                      label="Subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />

                    {/* Message */}
                    <FormField
                      label="Message"
                      placeholder="Your message"
                      isTextArea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    {/* Submit Button — Right Aligned */}
                    <div className="flex justify-end mt-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        className="group relative px-6 h-11 bg-white text-black text-xs font-semibold tracking-[0.1em] overflow-hidden transition-all duration-500 flex items-center gap-2.5 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center gap-2.5">
                          <FiSend className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#10B981] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                      </motion.button>
                    </div>
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
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                    className="text-[#10B981] hover:text-white transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.4em]"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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