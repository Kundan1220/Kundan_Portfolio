import { useEffect, useState } from 'react'
const API_URL = import.meta.env.VITE_BACKEND_API_URL
import {
  Code2,
  FileCode2,
  Server,
  Database,
  Braces,
  Coffee,
  Table2,
  Globe,
  Palette,
  GitBranch,
  BarChart3,
  LineChart,
} from 'lucide-react'

function Skills() {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then((response) => response.json())
      .then((data) => {
        setSkills(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching skills:', error)
        setLoading(false)
      })
  }, [])

  const getSkillIcon = (skill) => {
    const icons = {
      'React.js': Code2,
      JavaScript: FileCode2,
      'Node.js': Server,
      'Express.js': Server,
      MongoDB: Database,
      FastAPI: Braces,
      Python: Code2,
      Java: Coffee,
      MySQL: Table2,
      PostgreSQL: Database,
      HTML: Globe,
      CSS: Palette,
      'Git & GitHub': GitBranch,
      'Power BI': BarChart3,
      'Data Analysis': LineChart,
    }

    return icons[skill] || Code2
  }

  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold mb-2">
            MY TECHNOLOGIES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern
            full-stack applications and data solutions.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center text-gray-400">
            Loading skills...
          </div>
        )}

        {/* Skills Grid */}

        {!loading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

            {skills.map((skill) => {

              const Icon = getSkillIcon(skill)

              return (
                <div
                  key={skill}
                  className="group p-6 rounded-2xl border border-gray-700 bg-gray-900 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                >

                  {/* Icon */}

                  <div className="flex justify-center mb-4">

                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">

                      <Icon
                        size={25}
                        strokeWidth={2}
                      />

                    </div>

                  </div>

                  {/* Skill Name */}

                  <p className="text-gray-200 font-semibold">
                    {skill}
                  </p>

                </div>
              )
            })}

          </div>
        )}

      </div>
    </section>
  )
}

export default Skills