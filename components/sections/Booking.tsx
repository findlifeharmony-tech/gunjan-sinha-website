'use client'

import { useState } from 'react'
import { FaCalendarAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="booking" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Book Your <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Take the first step toward transformation. Choose your preferred method to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calendar Booking */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarAlt className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-serif font-bold text-neutral-900">
                Schedule a Session
              </h3>
            </div>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Book a free discovery call or schedule a paid consultation directly through our calendar system.
              Choose a time that works best for you.
            </p>
            <div className="bg-neutral-100 rounded-lg p-8 text-center mb-6">
              <p className="text-neutral-600 mb-4">Calendar Integration</p>
              <p className="text-sm text-neutral-500 mb-4">
                Replace this section with your Calendly embed or preferred booking widget
              </p>
              <div className="bg-white rounded-lg p-4 border-2 border-dashed border-neutral-300">
                <p className="text-sm text-neutral-500">
                  {/* Calendly inline embed code would go here */}
                  <code className="text-xs">
                    {'<iframe src="https://calendly.com/your-username" />'}
                  </code>
                </p>
              </div>
            </div>
            <a
              href="https://calendly.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center inline-block"
            >
              Open Calendar
            </a>
          </div>

          {/* Contact Form */}
          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <FaEnvelope className="w-8 h-8 text-primary-600" />
              <h3 className="text-2xl font-serif font-bold text-neutral-900">
                Send a Message
              </h3>
            </div>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Prefer to reach out via email? Fill out the form below and I&apos;ll get back to you within 24-48 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service...</option>
                  <option value="life-coaching">Life Coaching</option>
                  <option value="tarot">Tarot Reading</option>
                  <option value="numerology">Numerology Consultation</option>
                  <option value="workshop">Workshop/Group Session</option>
                  <option value="corporate">Corporate Session</option>
                  <option value="retreat">Retreat/Intensive Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your goals and how I can help..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-green-600 text-center font-semibold">
                  Thank you! Your message has been sent. I&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Quick Contact Links */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center hover:scale-105 transition-transform duration-300 group"
          >
            <FaWhatsapp className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-1">WhatsApp</h4>
            <p className="text-sm text-neutral-600">Quick Chat</p>
          </a>
          <a
            href="mailto:gunjan@example.com"
            className="card text-center hover:scale-105 transition-transform duration-300 group"
          >
            <FaEnvelope className="w-8 h-8 text-primary-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-1">Email</h4>
            <p className="text-sm text-neutral-600">gunjan@example.com</p>
          </a>
          <a
            href="https://www.linkedin.com/in/gunjan-sinha"
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center hover:scale-105 transition-transform duration-300 group"
          >
            <FaLinkedin className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-1">LinkedIn</h4>
            <p className="text-sm text-neutral-600">Connect</p>
          </a>
          <a
            href="https://www.instagram.com/gunjan_sinha"
            target="_blank"
            rel="noopener noreferrer"
            className="card text-center hover:scale-105 transition-transform duration-300 group"
          >
            <FaInstagram className="w-8 h-8 text-pink-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-1">Instagram</h4>
            <p className="text-sm text-neutral-600">Follow</p>
          </a>
        </div>
      </div>
    </section>
  )
}

