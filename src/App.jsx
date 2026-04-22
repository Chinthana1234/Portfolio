import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-700 dark:text-surface-200 transition-colors duration-300">
      <Navbar />

      {/* About / Hero Section */}
      <About />

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> Skills</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> Projects</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> Blog</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-300"> Me</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>
    </div>
  )
}

export default App
