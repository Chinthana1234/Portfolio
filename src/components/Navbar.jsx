import { useState, useEffect } from 'react'
import { HiOutlineSun, HiOutlineMoon, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
]

function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  // Dark mode toggle
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'blog', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/70 dark:bg-surface-950/70 backdrop-blur-2xl shadow-lg shadow-surface-900/5 dark:shadow-surface-950/30 border-b border-surface-200/50 dark:border-surface-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick('#about') }}
            className="group flex items-center gap-3 transition-colors duration-300"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500
                           flex items-center justify-center text-white text-base font-bold font-heading
                           group-hover:scale-110 transition-transform duration-300 shadow-lg
                           shadow-primary-500/30">
              P
            </span>
            <span className="text-xl font-heading font-bold tracking-tight text-surface-900 dark:text-white">
              Portfolio
            </span>
          </a>

          {/* Desktop: Links + Dark Mode + Contact — all in one row */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300
                  ${activeSection === link.href.slice(1)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-surface-500 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                  }`}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1) ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            ))}

            {/* Divider */}
            <span className="w-px h-6 bg-surface-200 dark:bg-surface-700" />

            {/* Dark Mode Toggle */}
            <button
              id="dark-mode-toggle"
              onClick={toggleDarkMode}
              className="relative w-10 h-10 rounded-xl flex items-center justify-center
                       text-surface-500 dark:text-surface-400
                       hover:bg-surface-100 dark:hover:bg-surface-800
                       hover:text-amber-500 dark:hover:text-amber-400
                       transition-all duration-300 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <HiOutlineSun
                className={`w-5 h-5 absolute transition-all duration-500 ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <HiOutlineMoon
                className={`w-5 h-5 absolute transition-all duration-500 ${
                  isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              id="contact-btn"
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold
                       text-white rounded-xl
                       bg-gradient-to-r from-primary-500 to-primary-600
                       hover:from-primary-600 hover:to-accent-600
                       shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30
                       hover:scale-105 active:scale-95
                       transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile: Dark Mode + Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              id="dark-mode-toggle-mobile"
              onClick={toggleDarkMode}
              className="relative w-10 h-10 rounded-xl flex items-center justify-center
                       text-surface-500 dark:text-surface-400
                       hover:bg-surface-100 dark:hover:bg-surface-800
                       transition-all duration-300 cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <HiOutlineSun
                className={`w-5 h-5 absolute transition-all duration-500 ${
                  isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <HiOutlineMoon
                className={`w-5 h-5 absolute transition-all duration-500 ${
                  isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center
                       text-surface-500 dark:text-surface-400
                       hover:bg-surface-100 dark:hover:bg-surface-800
                       transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              <HiOutlineBars3
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <HiOutlineXMark
                className={`w-5 h-5 absolute transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-8 pt-4 bg-white/95 dark:bg-surface-950/95 backdrop-blur-2xl
                      border-t border-surface-100 dark:border-surface-800">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className={`px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeSection === link.href.slice(1)
                    ? 'bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400'
                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-50 dark:hover:bg-surface-900 hover:text-surface-900 dark:hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="mt-3 text-center px-5 py-3.5 text-sm font-semibold text-white rounded-xl
                       bg-gradient-to-r from-primary-500 to-primary-600
                       shadow-lg shadow-primary-500/20
                       transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
