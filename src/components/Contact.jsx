import { useEffect, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  ExternalLink,
} from 'lucide-react'

const API_URL = import.meta.env.VITE_BACKEND_API_URL

function Contact() {
  const [profile, setProfile] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    setSubmitted(false)
  }

  const handleSubmit = async (event) => {
  event.preventDefault()

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message')
    }

    console.log('Server Response:', data)

    setSubmitted(true)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  } catch (error) {
    console.error('Error sending message:', error)
    setSubmitted(false)
    alert('Failed to send message. Please try again.')
  }
}

  const contactItems = [
    {
      title: 'Email',
      value: profile?.email || 'Loading...',
      href: profile?.email
        ? `mailto:${profile.email}`
        : '#',
      icon: Mail,
    },
    {
      title: 'Phone',
      value: profile?.phone || 'Loading...',
      href: profile?.phone
        ? `tel:${profile.phone.replace(/\s/g, '')}`
        : '#',
      icon: Phone,
    },
    {
      title: 'Location',
      value: profile?.location || 'Loading...',
      href: '#',
      icon: MapPin,
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}

        <div className="text-center mb-14">

          <p className="text-blue-400 font-semibold mb-2">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Interested in working together or have a question?
            Feel free to get in touch with me.
          </p>

        </div>

        {/* Contact Information */}

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.title}
                href={item.href}
                className="group p-7 rounded-2xl border border-gray-700 bg-gray-900 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 mb-5 group-hover:bg-blue-600 group-hover:text-white transition duration-300">

                  <Icon
                    size={27}
                    strokeWidth={2}
                  />

                </div>

                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 break-words">
                  {item.value}
                </p>

              </a>
            )
          })}

        </div>

        {/* Contact Form */}

        <div className="max-w-3xl mx-auto p-8 md:p-10 rounded-2xl border border-gray-700 bg-gray-900">

          <h3 className="text-2xl font-semibold text-white mb-2">
            Send Me a Message
          </h3>

          <p className="text-gray-400 mb-8">
            Fill out the form below and I will get back to you.
          </p>

          {/* Success Message */}

          {submitted && (
            <div className="mb-6 p-4 rounded-lg border border-green-500/30 bg-green-500/10 text-green-400">
              Your message has been submitted successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name + Email */}

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label
                  htmlFor="name"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                />

              </div>

              <div>

                <label
                  htmlFor="email"
                  className="block text-gray-300 font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
                />

              </div>

            </div>

            {/* Subject */}

            <div>

              <label
                htmlFor="subject"
                className="block text-gray-300 font-medium mb-2"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* Message */}

            <div>

              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-950 text-white placeholder-gray-500 outline-none focus:border-blue-500 transition resize-none"
              ></textarea>

            </div>

            {/* Submit */}

            <button
              type="submit"
              className="w-full md:w-auto px-7 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:-translate-y-1 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

        {/* Social Links */}

        <div className="flex justify-center gap-5 mt-10">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition duration-300"
          >
            <GitBranch size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400 transition duration-300"
          >
            <ExternalLink size={20} />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact