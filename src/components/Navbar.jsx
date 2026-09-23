import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
          onClick={closeMenu}
        >
          Kundan
        </a>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-7">

          <a href="#home" className="text-gray-300 hover:text-blue-400 transition">
            Home
          </a>

          <a href="#about" className="text-gray-300 hover:text-blue-400 transition">
            About
          </a>

          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">
            Skills
          </a>

          <a href="#services" className="text-gray-300 hover:text-blue-400 transition">
            Services
          </a>

          <a href="#experience" className="text-gray-300 hover:text-blue-400 transition">
            Experience
          </a>

          <a href="#education" className="text-gray-300 hover:text-blue-400 transition">
            Education
          </a>

          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}

        <button
          type="button"
          className="lg:hidden text-gray-300 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-gray-950">

          <div className="flex flex-col px-6 py-4 gap-4">

            <a href="#home" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Home
            </a>

            <a href="#about" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              About
            </a>

            <a href="#skills" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#services" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Services
            </a>

            <a href="#experience" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#education" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Education
            </a>

            <a href="#projects" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" onClick={closeMenu} className="text-gray-300 hover:text-blue-400 transition">
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar