import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/profile.jpeg';

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-400">
      <div className="section-container relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-12 h-[1px] bg-emerald-500" />
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">About Me</span>
            <div className="w-12 h-[1px] bg-emerald-500" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            A Passion for <span className="text-emerald-500">Digital Craftsmanship</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/[0.08] bg-white dark:bg-[#0a0a0a] shadow-2xl">
                <img
                  src={profileImg}
                  alt="Chinthana Sandeepa"
                  className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/30 rounded-tr-[2rem] pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-[2rem] pointer-events-none" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-emerald-500">Chinthana Sandeepa</span>
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                A dedicated <span className="text-gray-900 dark:text-white font-medium">Full Stack Developer</span> passionate about building scalable, efficient, and user-friendly web applications. I enjoy transforming ideas into modern digital solutions by combining clean frontend experiences with powerful backend systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                As a Software Engineering undergraduate at the University of Kelaniya, I'm continuously learning new technologies and improving my skills to create impactful and innovative software solutions. I specialize in crafting seamless digital experiences that balance aesthetics with performance.
              </p>
            </div>

            {/* Stats/Info Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
                <div className="text-emerald-500 font-bold text-xl mb-1">20+</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest font-mono">Projects Done</div>
              </div>
              <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05]">
                <div className="text-emerald-500 font-bold text-xl mb-1">UoK</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest font-mono">Education</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-8">
              <a 
                href="https://github.com/Chinthana1234" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.03] group-hover:bg-emerald-500/10 transition-colors">
                  <FiGithub className="w-5 h-5" />
                </div>
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/chinthana-sandeepa-03976a357/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.03] group-hover:bg-emerald-500/10 transition-colors">
                  <FiLinkedin className="w-5 h-5" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href="mailto:your-email@example.com"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/[0.03] dark:bg-white/[0.03] group-hover:bg-emerald-500/10 transition-colors">
                  <FiMail className="w-5 h-5" />
                </div>
                <span className="font-medium">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
