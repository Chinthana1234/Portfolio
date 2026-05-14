import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'


const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#certifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { isDark, toggleDarkMode } = useTheme()

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
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Glassmorphism container */}
        <div
          className="transition-all duration-700 flex justify-center"
          style={{
            backgroundColor: isScrolled
              ? (isDark ? 'rgba(8, 8, 8, 0.75)' : 'rgba(255, 255, 255, 0.8)')
              : 'transparent',
            backdropFilter: isScrolled ? 'blur(24px) saturate(1.4)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(1.4)' : 'none',
            borderBottom: isScrolled
              ? (isDark
                ? '1px solid rgba(16, 185, 129, 0.12)'
                : '1px solid rgba(16, 185, 129, 0.15)')
              : '1px solid transparent',
            boxShadow: isScrolled
              ? (isDark
                ? '0 4px 30px rgba(16, 185, 129, 0.06), inset 0 1px 0 rgba(255,255,255,0.03)'
                : '0 4px 30px rgba(0, 0, 0, 0.08)')
              : 'none',
          }}
        >
          {/* Desktop layout */}
          <div className="relative w-full max-w-[1200px] mx-auto px-8 md:px-12 hidden md:flex justify-between items-center h-[76px]">

            {/* Left — Logo / Name */}
            <div className="flex items-center">
              <motion.a
                href="#hero"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className="transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="font-black text-[15px] tracking-[-0.01em]"
                  style={{
                    fontFamily: "'Georgia', 'Times New Roman', serif",
                    color: isDark ? 'rgba(240, 233, 233, 0.56)' : '#111827',
                  }}
                >
                  Chinthana
                </span>
              </motion.a>
            </div>

            {/* Center — Nav Links */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="nav-link-hover text-[12px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
                  style={{
                    color: isDark ? 'rgba(255, 255, 255, 0.45)' : '#9ca3af',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#34d399' }}
                  onMouseLeave={(e) => { e.target.style.color = isDark ? 'rgba(255, 255, 255, 0.45)' : '#9ca3af' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Right — Toggle + Resume */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.5)' : '#6b7280',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle dark mode"
              >
                <FiSun
                  className={`w-[15px] h-[15px] absolute transition-all duration-500 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                    }`}
                />
                <FiMoon
                  className={`w-[15px] h-[15px] absolute transition-all duration-500 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                    }`}
                />
              </motion.button>

              {/* Pill-shaped Download CV button */}
              <motion.a
                href="/cv.pdf"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] uppercase text-black transition-all duration-300"
                style={{
                  padding: '7px 16px',
                  borderRadius: '999px',
                  background: '#10B981',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2), 0 2px 8px rgba(0,0,0,0.15)',
                }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.4), 0 4px 16px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="w-3 h-3" />
                Resume
              </motion.a>
            </div>
          </div>

          {/* Mobile: simple flex row */}
          <div className="max-w-[1200px] mx-auto px-8 flex md:hidden items-center justify-between h-[76px]">
            {/* Mobile Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-black text-[15px] tracking-[-0.01em]"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  color: isDark ? 'rgba(240, 233, 233, 0.56)' : '#111827',
                }}
              >
                CHINTHANA
              </span>
            </motion.a>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.5)' : '#6b7280',
                }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.6)' : '#6b7280',
                }}
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
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.96)' : 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(30px)',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-semibold tracking-wide transition-colors duration-300"
                style={{
                  color: isDark ? 'rgba(255,255,255,0.5)' : '#9ca3af',
                }}
                onMouseEnter={(e) => { e.target.style.color = '#34d399' }}
                onMouseLeave={(e) => { e.target.style.color = isDark ? 'rgba(255,255,255,0.5)' : '#9ca3af' }}
              >
                {link.name}
              </motion.a>
            ))}

            {/* Mobile CV Button */}
            <motion.a
              href="/cv.pdf"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: navLinks.length * 0.08, duration: 0.45 }}
              className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-bold tracking-[0.1em] uppercase text-black"
              style={{
                padding: '9px 20px',
                borderRadius: '999px',
                background: '#10B981',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.25)',
              }}
            >
              <FiDownload className="w-3.5 h-3.5" />
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
