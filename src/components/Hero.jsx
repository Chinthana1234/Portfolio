import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiTerminal } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiSpringboot, SiFlutter } from 'react-icons/si';
import profileImg from '../assets/profile.jpeg';

function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-white dark:bg-[#050505] pointer-events-none transition-colors duration-400">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.08), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 opacity-[0.1]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-black/5 dark:text-white/10" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
    </div>
  );
}

function TypewriterText({ text }) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey((prev) => prev + 1);
    }, 6000); // Reset every 6 seconds (typing + pause)
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <span key={key} className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-emerald-500 font-bold flex flex-wrap">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: index * 0.05,
            ease: "easeInOut",
          }}
          style={{ whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-4 bg-emerald-500 ml-1 self-center"
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-400">
      <AnimatedBackground />

      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <TypewriterText text="Software Engineering Undergraduate" />
            </motion.div>

            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[5rem] font-bold tracking-[-0.04em] text-gray-900 dark:text-white mb-8 leading-[1.05]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Crafting Digital <br />
              <span className="text-emerald-500">
                Experience With
              </span> <br />
              Precision.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl leading-loose font-light mb-10"
            >
              Hi, I'm <span className="text-gray-900 dark:text-white font-bold">Chinthana Sandeepa</span> — a Full-stack Developer dedicated to architecting scalable digital solutions. I bridge the gap between complex system logic and seamless user experiences, transforming conceptual ideas into production-ready applications with engineering precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="group flex items-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-white text-sm sm:text-base rounded-xl transition-all duration-300">
                Connect
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/Chinthana1234" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-white text-sm sm:text-base rounded-xl transition-all duration-300">
                <FiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chinthana-sandeepa-03976a357/" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 px-7 py-3.5 sm:px-9 sm:py-4 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.08] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.08] text-gray-900 dark:text-white text-sm sm:text-base rounded-xl transition-all duration-300">
                <FiLinkedin /> Linkedin
              </a>
            </motion.div>

            {/* Tech stack small row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-10 mt-8 ml-2"
            >


            </motion.div>
          </div>

          {/* Right: Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center order-first lg:order-last"
          >
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Image Frame */}
              <div className="relative w-56 h-[16rem] sm:w-72 sm:h-[20rem] lg:w-80 lg:h-[24rem] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/[0.08] bg-white dark:bg-[#0a0a0a] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Chinthana Sandeepa"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out"
                />

                {/* Vignette overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#050505] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 dark:from-[#050505]/20 via-transparent to-transparent opacity-40" />

                {/* Float tag */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 p-4 rounded-2xl flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 dark:text-white/50">Software Engineer</span>
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t border-r border-emerald-500/20 rounded-tr-[2rem] pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b border-l border-emerald-500/20 rounded-bl-[2rem] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
