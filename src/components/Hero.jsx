import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiMessageSquare, FiDownload } from 'react-icons/fi';
import profileImg from '../assets/Profile.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-0 overflow-hidden bg-white dark:bg-black transition-colors duration-400">
      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center -mt-24 lg:-mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">

          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-20 -mt-32 lg:mt-16 lg:self-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-4 h-6 flex items-center justify-center lg:justify-start">
                <TypeAnimation
                  sequence={[
                    'Fullstack Developer',
                    2000,
                    '',
                    500
                  ]}
                  repeat={Infinity}
                  wrapper="span"
                  className="text-emerald-400 font-medium tracking-[0.2em] uppercase text-sm sm:text-base"
                  cursor={true}
                />
              </div>

              <h1 className="text-3xl min-[375px]:text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-gray-900 dark:text-white mb-8 sm:mb-10 leading-[1.3] flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="whitespace-nowrap">CRAFTING DIGITAL</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 whitespace-nowrap">
                  EXPERIENCE WITH
                </span>
                <span className="whitespace-nowrap">PRECISION.</span>
              </h1>


            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-[1.8] font-light"
              style={{ marginBottom: '16px' }}
            >
              Transforming abstract concepts into scalable, intuitive, and production-ready digital solutions with a dedication to end-to-end excellence.
            </motion.p>

            {/* Action Buttons - Modified to two buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6 w-full sm:w-auto px-4 sm:px-0"
            >
              <a
                href="/cv.pdf"
                download
                className="flex items-center justify-center border border-black dark:border-white text-black dark:text-white text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 hover:bg-white hover:!text-black dark:hover:bg-white dark:hover:!text-black w-full sm:w-auto"
                style={{ padding: '16px 48px' }}
              >
                DOWNLOAD CV
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center border border-black dark:border-white text-black dark:text-white text-[11px] sm:text-[13px] font-bold tracking-[0.2em] uppercase rounded-none transition-all duration-300 hover:bg-white hover:!text-black dark:hover:bg-white dark:hover:!text-black w-full sm:w-auto"
                style={{ padding: '16px 48px' }}
              >
                VIEW MY WORK
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
