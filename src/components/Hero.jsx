import { motion } from 'framer-motion';
import { FiMessageSquare, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/Profile.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden bg-black transition-colors duration-400">
      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center -mt-24 lg:-mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20 -mt-20 lg:-mt-52">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >


              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-normal text-white mb-8 leading-[1.25]" style={{ fontFamily: "'Inter', sans-serif" }}>
                CRAFTING DIGITAL<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  EXPERIENCE WITH
                </span><br />
                PRECISION.
              </h1>


            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-light mb-12"
            >
              Transforming ideas into production-ready applications
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white text-white text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300">
                <FiMessageSquare className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                GET IN TOUCH
              </a>
              <a href="#about" className="group flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-white text-white text-xs sm:text-sm font-medium tracking-[0.2em] uppercase transition-all duration-300">
                <FiDownload className="text-lg opacity-70 group-hover:opacity-100 transition-opacity" />
                CV
              </a>
            </motion.div>

          </div>

          {/* Right: Image Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 absolute bottom-0 right-0 lg:relative w-full h-[60vh] lg:h-[85vh] flex justify-center lg:justify-end opacity-40 lg:opacity-100 pointer-events-none lg:pointer-events-auto -z-10 lg:z-10"
          >
            <div className="relative w-full h-full max-w-md lg:max-w-none">
              <img
                src={profileImg}
                alt="Chinthana Sandeepa"
                className="w-full h-full object-cover object-top transition-all duration-1000 ease-out"
              />

              {/* Aggressive Vignette overlays to blend into black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
