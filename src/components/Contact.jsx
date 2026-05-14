import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const FormField = ({ label, type = 'text', placeholder, value, onChange, isTextArea = false }) => {
  return (
    <div className="flex flex-col gap-2 group/field">
      <label className="text-sm font-semibold text-gray-700 dark:text-white/80 group-focus-within/field:text-[#10B981] transition-colors duration-300">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows="5"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/15 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#10B981]/50 focus:bg-black/[0.05] dark:focus:bg-white/[0.05] transition-all duration-500 resize-none py-3 px-4 text-sm rounded-sm"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/15 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#10B981]/50 focus:bg-black/[0.05] dark:focus:bg-white/[0.05] transition-all duration-500 py-3 px-4 text-sm rounded-sm h-12"
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
          message: formData.message,
          _captcha: "false",
          _template: "table"
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
      value: 'chinthanasandeepa123@gmail.com',
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+94 713179561',
      icon: <FiPhone className="w-5 h-5" />,
    },
    {
      id: 'location',
      label: 'Location',
      value: 'Ambalangoda , Sri Lanka',
      icon: <FiMapPin className="w-5 h-5" />,
    }
  ]

  return (
    <section id="contact" className="contact-section">
      {/* Dynamic Background Accents */}
      <div className="contact-bg-accent contact-bg-accent--top" />
      <div className="contact-bg-accent contact-bg-accent--bottom" />

      <div className="contact-container">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-header__title">
            Work <span className="accent-text">With Me.</span>
          </h2>
          <div className="contact-header__accent" />
          <p className="contact-header__subtitle">

          </p>
        </motion.div>

        {/* Two-Column: Contact Info + Form */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="contact-grid"
        >
          {/* Left Column: Contact Information */}
          <motion.div variants={itemVariants} className="contact-info">
            <h3 className="contact-info__title">
              Contact Information
            </h3>

            <div className="contact-info__list">
              {contactInfo.map((info) => (
                <div key={info.id} className="contact-info__item">
                  <div className="contact-info__icon">
                    {info.icon}
                  </div>
                  <div className="contact-info__text">
                    <span className="contact-info__label">
                      {info.label}
                    </span>
                    <span className="contact-info__value">
                      {info.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div variants={itemVariants} className="contact-form-wrapper">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Name & Email — Same Row */}
                    <div className="contact-form__row">
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

                    {/* Subject — Full Width */}
                    <FormField
                      label="Subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />

                    {/* Message — Full Width */}
                    <FormField
                      label="Message"
                      placeholder="Your message"
                      isTextArea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    {/* Submit Button — Right Aligned */}
                    <div className="contact-form__actions">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                        className="contact-form__submit"
                      >
                        <span className="contact-form__submit-inner">
                          <FiSend className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </span>
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="contact-success"
                >
                  <div className="contact-success__icon-wrap">
                    <FiCheckCircle className="contact-success__icon" />
                    <div className="contact-success__icon-glow" />
                  </div>
                  <h3 className="contact-success__title">Message Received</h3>
                  <p className="contact-success__text">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }}
                    className="contact-success__reset"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Enhanced Footer */}
        <div className="contact-footer">
          <div className="contact-footer__left">
            <p className="contact-footer__copyright">
              © {new Date().getFullYear()} CHINTHANA SANDEEPA
            </p>
            <p className="contact-footer__tagline">
              Designed & Built with Passion
            </p>
          </div>
          <div className="contact-footer__socials">
            {[
              { name: 'Email', href: 'mailto:chinthanasandeepa123@gmail.com' },
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chinthana-sandeepa-03976a357/' },
              { name: 'GitHub', href: 'https://github.com/Chinthana1234' }
            ].map((social) => (
              <a 
                key={social.name} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-footer__social-link"
              >
                {social.name}
                <span className="contact-footer__social-underline" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact