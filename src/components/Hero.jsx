import { useEffect, useState } from 'react'
import profileImage from '../assets/profile.jpg'
const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Hero() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/profile`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data)
      })
      .catch((error) => {
        console.error('Error fetching profile:', error)
      })
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center overflow-hidden px-6 sm:px-10 lg:px-16 pt-24"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}

        <div className="text-center md:text-left">

          <p className="text-lg md:text-xl text-gray-400 mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {profile?.name || 'Kundan Kumar Mondal'}
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mb-6">
            {profile?.role || 'Full Stack Developer'}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
            I build scalable, responsive and user-friendly
            web applications using modern frontend and
            backend technologies.
          </p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Contact Me
            </a>

            <a
                href="/Kundan_mondal_resume.pdf"
              download
              className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold hover:border-blue-500 hover:text-blue-400 transition duration-300"
            >
              Download Resume
            </a>

          </div>

          {/* Social Links */}

          <div className="flex justify-center md:justify-start gap-6 text-gray-400">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${profile?.email || 'mandalkundan197@gmail.com'}`}
              className="hover:text-blue-400 transition duration-300"
            >
              Email
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="flex justify-center md:justify-end">

          <img
            src={profileImage}
            alt="Kundan Kumar Mondal"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl border-4 border-blue-500 shadow-2xl"
          />

        </div>

      </div>
    </section>
  )
}

export default Hero