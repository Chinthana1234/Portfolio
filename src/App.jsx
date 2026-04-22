import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-surface-950 text-surface-700 dark:text-surface-200 transition-colors duration-300">
      <Navbar />

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl font-heading font-bold text-surface-900 dark:text-white">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Me</span>
          </h1>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Skills</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Projects</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            My
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Blog</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-surface-900 dark:text-white">
            Contact
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500"> Me</span>
          </h2>
          <p className="mt-4 text-lg text-surface-500 dark:text-surface-400">Section coming soon...</p>
        </div>
      </section>
    </div>
  )
}

export default App
