import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Footer() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/profile`)
      .then((response) => response.json())
      .then((data) => {
        setProfile(data)
      })
      .catch((error) => {
        console.error('Error fetching profile for footer:', error)
      })
  }, [])

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-gray-400 mb-4">
          © 2026 {profile?.name || 'Kundan'}. All Rights Reserved.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${profile?.email || 'mandalkundan197@gmail.com'}`}
            className="text-gray-400 hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer