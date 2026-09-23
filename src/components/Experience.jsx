import { useEffect, useState } from 'react'
import { BriefcaseBusiness } from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Experience() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/experience`)
      .then((response) => response.json())
      .then((data) => {
        setExperiences(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching experience:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section
      id="experience"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold mb-2">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional experience, technical journey
            and continuous learning.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center text-gray-400">
            Loading experience...
          </div>
        )}

        {/* Timeline */}

        {!loading && (
          <div className="relative">

            {/* Timeline Line */}

            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gray-700"></div>

            {experiences.map((experience, index) => (

              <div
                key={experience._id}
                className="relative mb-12 last:mb-0"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-blue-600 border-4 border-gray-950 flex items-center justify-center">

                  <BriefcaseBusiness
                    size={12}
                    className="text-white"
                  />

                </div>

                {/* Experience Card */}

                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? 'md:pr-12'
                      : 'md:ml-auto md:pl-12'
                  }`}
                >

                  <div className="p-6 rounded-2xl border border-gray-700 bg-gray-900 hover:border-blue-500 transition duration-300">

                    {/* Period */}

                    <span className="text-blue-400 text-sm font-semibold">
                      {experience.duration}
                    </span>

                    {/* Role */}

                    <h3 className="text-2xl font-semibold text-white mt-2 mb-1">
                      {experience.role}
                    </h3>

                    {/* Company */}

                    <h4 className="text-gray-300 mb-4">
                      {experience.company}
                    </h4>

                    {/* Description */}

                    <p className="text-gray-400 leading-relaxed mb-5">
                      {experience.description}
                    </p>

                    {/* Technologies */}

                    <p className="text-sm text-blue-400">
                      {experience.technologies}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default Experience