import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/Profile.png'; // Reuse image for consistency if needed, or leave it out

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#050505] transition-colors duration-400">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About <span className="accent-text">Me</span></h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <img
                src={profileImg}
                alt="Chinthana Sandeepa"
                className="relative w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-[#111] shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <h3 className="text-base sm:text-lg font-mono uppercase tracking-[0.15em] text-emerald-500 mb-8 h-8 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'Software Engineering Undergraduate',
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
              />
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-[1.8] sm:text-lg mb-10">
              Hi, I'm <span className="text-gray-900 dark:text-white font-bold">Chinthana Sandeepa</span> — a Full Stack Developer passionate about building scalable, efficient, and user-friendly web applications. I enjoy transforming ideas into modern digital solutions by combining clean frontend experiences with powerful backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-[1.8] sm:text-lg mb-14">
              As a Software Engineering undergraduate at the University of Kelaniya, I'm continuously learning new technologies and improving my skills to create impactful and innovative software solutions.
            </p>

            <div className="flex flex-wrap gap-6">
              <a href="https://github.com/Chinthana1234" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl transition-all duration-300">
                <FiGithub className="text-lg" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chinthana-sandeepa-03976a357/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl transition-all duration-300">
                <FiLinkedin className="text-lg" /> LinkedIn
              </a>
              <a href="#contact" className="flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                <FiMail className="text-lg" /> Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
