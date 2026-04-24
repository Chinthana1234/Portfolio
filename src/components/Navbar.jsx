import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  // Initialize dark mode from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isScrolled
            ? (isDark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.9)')
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled
            ? (isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)')
            : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo / Name */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-gray-900 dark:text-white font-semibold text-[15px] tracking-tight hover:text-accent-500 transition-colors duration-300"
            >
              Chinthana Sandeepa
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-[13px] font-medium tracking-[0.08em] uppercase
                           text-gray-400 dark:text-white/50 hover:text-accent-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="relative w-9 h-9 rounded-lg flex items-center justify-center
                         text-gray-400 dark:text-white/50 hover:text-accent-500
                         border border-gray-200 dark:border-white/10 hover:border-accent-500/30
                         transition-all duration-300 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                <FiSun
                  className={`w-4 h-4 absolute transition-all duration-500 ${
                    isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <FiMoon
                  className={`w-4 h-4 absolute transition-all duration-500 ${
                    isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                  }`}
                />
              </button>

              <a
                href="/cv.pdf"
                className="text-[13px] font-medium tracking-[0.05em] uppercase px-5 py-2
                         border border-gray-200 dark:border-white/15 rounded-md
                         text-gray-500 dark:text-white/60
                         hover:bg-accent-500 hover:text-white hover:border-accent-500
                         transition-all duration-350"
              >
                CV
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-lg flex items-center justify-center
                         text-gray-400 dark:text-white/50 hover:text-accent-500
                         transition-colors duration-300 cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-white/60 hover:text-accent-500 transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-2xl font-semibold tracking-wide text-gray-600 dark:text-white/70 hover:text-accent-500 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/cv.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              className="btn-outline mt-4"
            >
              Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
