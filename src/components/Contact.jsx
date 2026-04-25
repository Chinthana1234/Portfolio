import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const contacts = [
  { icon: FiMail, label: 'Email', value: 'chinthana@example.com', href: 'mailto:chinthana@example.com' },
  { icon: FiGithub, label: 'GitHub', value: 'Chinthana1234', href: 'https://github.com/Chinthana1234' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'chinthana-sandeepa', href: 'https://linkedin.com/in/chinthana-sandeepa' },
]

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white dark:bg-black transition-colors duration-400">
      <div className="watermark">CONTACT</div>
      <div className="divider" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work <span className="accent-text">Together</span></h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 max-w-3xl mx-auto mb-20">
          {contacts.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.a
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href={item.href}
                target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="card group p-6 flex flex-col items-center text-center gap-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl border border-gray-200 dark:border-white/8 flex items-center justify-center group-hover:border-accent-500/30 group-hover:bg-accent-500/[0.06] transition-all duration-400">
                  <Icon className="w-5 h-5 text-gray-400 dark:text-white/30 group-hover:text-accent-500 transition-colors duration-400" />
                </div>
                <div>
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-gray-400 dark:text-white/25 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-white/60 group-hover:text-accent-500 transition-colors duration-300 font-medium">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Footer */}
        <div className="divider" />
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-400 dark:text-white/20 tracking-wide">
            © {new Date().getFullYear()} Chinthana Sandeepa. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {contacts.map((item, index) => {
              const Icon = item.icon
              return (
                <a key={index} href={item.href}
                  target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="text-gray-300 dark:text-white/20 hover:text-accent-500 transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
