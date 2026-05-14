import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import profileImg from '../assets/profile.jpeg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=80%", // Reduced pin duration for a faster transition
        scrub: 0.8, // Adjusted scrub for smoother, more responsive feel
        pin: true,
      }
    });

    tl.to(contentRef.current, {
      scale: 3, // Zoom in
      opacity: 0, // Fade out
      ease: "power2.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black transition-colors duration-400">
      
      <div ref={contentRef} className="w-full h-full flex flex-col items-center justify-center relative min-h-screen pt-20 pb-12">
        
        {/* Large Background Typography */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.03] text-[12vw] font-black leading-[0.85] uppercase select-none pointer-events-none overflow-hidden whitespace-nowrap z-0 flex flex-col text-white"
          style={{ transform: `translateY(calc(-50% + ${offsetY * 0.2}px))` }}
        >
          <span>DESIGN</span>
          <span>DEVELOP</span>
          <span>DELIVER</span>
        </div>

        {/* Subtle Grid overlay for texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left: Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] font-bold tracking-[-0.04em] text-white mb-6 leading-[1.1]" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Crafting Digital <br />
                <span className="text-emerald-500">
                  Experience With
                </span> <br />
                Precision.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-gray-400 text-lg mb-10 max-w-md"
              >
                Transforming ideas into production-ready applications
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <a href="#contact" className="group flex items-center gap-2.5 px-8 py-3.5 border border-white hover:border-emerald-500 hover:bg-emerald-500/10 text-white hover:text-emerald-500 text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300">
                  GET IN TOUCH
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#about" className="group flex items-center gap-2.5 px-8 py-3.5 border border-white/20 hover:border-white text-white/70 hover:text-white text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300">
                  ABOUT
                </a>
              </motion.div>
            </div>

            {/* Right: Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end z-10"
            >
              <div className="relative group w-72 sm:w-80 lg:w-[28rem]">
                {/* Image Frame blending with black background */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
                  <img
                    src={profileImg}
                    alt="Chinthana Sandeepa"
                    className="w-full h-full object-cover object-center opacity-90 transition-all duration-1000 ease-out grayscale hover:grayscale-0"
                    style={{ filter: 'contrast(1.1) brightness(0.9)' }}
                  />
                  {/* Aggressive fade edges to black to blend the image seamlessly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent opacity-100" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
        >
          <a href="#about" className="flex flex-col items-center text-white/40 hover:text-white transition-colors group">
            <span className="text-[9px] tracking-[0.3em] uppercase font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll</span>
            <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
              <motion.div
                className="w-full h-1/2 bg-white absolute top-0"
                animate={{ y: [0, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
