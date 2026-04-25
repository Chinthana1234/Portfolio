import MouseGlow from './components/MouseGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-700 dark:text-white/70 transition-colors duration-400 relative">
      <MouseGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
    </div>
  )
}

export default App
