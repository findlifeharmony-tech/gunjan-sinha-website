'use client'

import { FaArrowRight, FaLightbulb, FaHeart, FaUsers, FaChartLine, FaBookOpen, FaHandsHelping, FaBuilding } from 'react-icons/fa'

const services = [
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Life Coaching',
    description: 'Comprehensive guidance to help you clarify your purpose, overcome obstacles, and create a life aligned with your values and aspirations.',
    benefits: [
      'Career transition and advancement',
      'Mindset transformation',
      'Relationship enhancement',
      'Personal growth and self-discovery',
      'Goal setting and achievement',
    ],
    duration: '60-90 minutes',
    format: '1-on-1 sessions',
  },
  {
    icon: <FaBookOpen className="w-8 h-8" />,
    title: 'Tarot Guidance',
    description: 'Gain clarity and insight into your current situation, future possibilities, and the deeper patterns influencing your life journey.',
    benefits: [
      'Clarity on life decisions',
      'Understanding hidden patterns',
      'Guidance on relationships and career',
      'Spiritual insight and connection',
      'Empowerment through self-awareness',
    ],
    duration: '45-60 minutes',
    format: 'In-person or virtual',
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Numerology Consultation',
    description: 'Discover your life path, destiny numbers, and personal year cycles to understand your strengths, challenges, and optimal timing for decisions.',
    benefits: [
      'Life path and destiny analysis',
      'Personal year and month forecasts',
      'Compatibility insights',
      'Career and business guidance',
      'Timing for major decisions',
    ],
    duration: '60 minutes',
    format: 'Detailed report + consultation',
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Workshops & Group Sessions',
    description: 'Transformative group experiences designed to foster community, shared learning, and collective growth.',
    benefits: [
      'Interactive learning environment',
      'Community support and connection',
      'Cost-effective transformation',
      'Diverse perspectives and insights',
      'Group energy and motivation',
    ],
    duration: '2-4 hours',
    format: 'In-person or virtual groups',
  },
  {
    icon: <FaBuilding className="w-8 h-8" />,
    title: 'Corporate Sessions',
    description: 'Bring transformation to your organization with tailored workshops on leadership, team dynamics, and employee well-being.',
    benefits: [
      'Leadership development',
      'Team building and cohesion',
      'Stress management and resilience',
      'Work-life balance strategies',
      'Organizational culture enhancement',
    ],
    duration: 'Customizable',
    format: 'On-site or virtual',
  },
  {
    icon: <FaHandsHelping className="w-8 h-8" />,
    title: 'Retreats & Intensive Programs',
    description: 'Immersive multi-day experiences designed for deep transformation, renewal, and lasting change.',
    benefits: [
      'Deep personal transformation',
      'Sacred space for reflection',
      'Holistic approach to growth',
      'Lifelong connections',
      'Sustained momentum for change',
    ],
    duration: '2-7 days',
    format: 'In-person retreats',
  },
]

export default function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Services & <span className="gradient-text">Offerings</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive guidance tailored to your unique journey and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-neutral-900">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="text-sm font-semibold text-neutral-700">Key Benefits:</div>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex justify-between items-center text-sm text-neutral-500">
                <span>{service.duration}</span>
                <span>{service.format}</span>
              </div>

              <button
                onClick={scrollToBooking}
                className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold 
                         hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book Session
                <FaArrowRight className="inline" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book a free discovery call to explore how we can work together to unlock your potential
          </p>
          <button
            onClick={scrollToBooking}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg 
                     hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl
                     transform hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Schedule Your Free Discovery Call
            <FaArrowRight className="inline" />
          </button>
        </div>
      </div>
    </section>
  )
}

