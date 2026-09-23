import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Experience />

      <Education />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default App