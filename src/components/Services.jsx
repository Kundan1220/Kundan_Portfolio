import { useEffect, useState } from 'react'
import {
  Code2,
  Server,
  Database,
  BarChart3,
  LayoutDashboard,
  Settings,
} from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/api/services`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
        setLoading(false)
      })
  }, [])

  const getServiceIcon = (iconName) => {
    const icons = {
      Code2,
      Server,
      Database,
      BarChart3,
      LayoutDashboard,
      Settings,
    }

    return icons[iconName] || Settings
  }

  return (
    <section
      id="services"
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold mb-2">
            WHAT I DO
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Services
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Areas where I can contribute my development,
            database and data analytics skills.
          </p>

        </div>

        {/* Loading */}

        {loading && (
          <div className="text-center text-gray-400">
            Loading services...
          </div>
        )}

        {/* Services Grid */}

        {!loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => {

              const Icon = getServiceIcon(service.icon)

              return (
                <div
                  key={service._id}
                  className="group p-7 rounded-2xl border border-gray-700 bg-gray-900 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
                >

                  {/* Icon */}

                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition duration-300">

                    <Icon size={28} strokeWidth={2} />

                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
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

export default Services