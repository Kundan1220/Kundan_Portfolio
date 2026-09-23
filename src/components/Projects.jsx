import { useEffect, useState } from 'react'
import {
  BriefcaseBusiness,
  ExternalLink,
  GitBranch,
  BarChart3,
} from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold mb-2">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the projects I have built using modern
            development and data technologies.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center text-gray-400">
            Loading projects...
          </div>
        )}

        {/* Projects Grid */}

        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {projects.map((project) => {

              const Icon =
                project.title === 'Data Analytics Dashboard'
                  ? BarChart3
                  : BriefcaseBusiness

              return (
                <div
                  key={project._id}
                  className="group flex flex-col p-7 rounded-2xl border border-gray-700 bg-gray-900 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                >

                  {/* Project Icon */}

                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition duration-300">

                    <Icon
                      size={28}
                      strokeWidth={2}
                    />

                  </div>

                  {/* Project Title */}

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-7">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3 mt-auto">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition duration-300"
                    >
                      <GitBranch size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>
              )
            })}

          </div>
        )}

      </div>
    </section>
  )
}

export default Projects