import { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_BACKEND_API_URL

function About() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/about`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setAbout(data[0])
        }

        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching about information:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section
      id="about"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-12">

          <p className="text-blue-400 font-semibold mb-2">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center text-gray-400">
            Loading about information...
          </div>
        )}

        {/* About Content */}

        {!loading && about && (
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Side */}

            <div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {about.role}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {about.description}
              </p>

            </div>

            {/* Right Side */}

            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">
                  1+
                </h4>

                <p className="text-gray-400">
                  Years Learning
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">
                  3+
                </h4>

                <p className="text-gray-400">
                  Projects
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">
                  10+
                </h4>

                <p className="text-gray-400">
                  Technologies
                </p>
              </div>

              <div className="p-6 rounded-xl border border-gray-700 bg-gray-900">
                <h4 className="text-3xl font-bold text-blue-400 mb-2">
                  100%
                </h4>

                <p className="text-gray-400">
                  Passion
                </p>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  )
}

export default About