import { useEffect, useState } from 'react'
import { GraduationCap } from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Education() {
  const [education, setEducation] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/education`)
      .then((response) => response.json())
      .then((data) => {
        setEducation(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching education:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold mb-2">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic background and educational journey.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400">
            Loading education...
          </div>
        )}

        {/* Education Cards */}
        {!loading && (
          <div className="max-w-3xl mx-auto space-y-6">

            {education.map((item) => (
              <div
                key={item._id}
                className="p-8 rounded-2xl border border-gray-700 bg-gray-900 hover:border-blue-500 hover:-translate-y-1 transition duration-300"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 mb-6">
                  <GraduationCap size={28} strokeWidth={2} />
                </div>

                {/* Period */}
                <span className="text-blue-400 text-sm font-semibold">
                  {item.duration}
                </span>

                {/* Degree */}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mt-3 mb-2">
                  {item.degree}
                </h3>

                {/* Institution */}
                <h4 className="text-lg text-gray-300 mb-5">
                  {item.institution}
                </h4>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default Education