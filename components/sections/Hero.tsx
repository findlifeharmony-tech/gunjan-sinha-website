'use client'

import { useState, useEffect } from 'react'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`text-center md:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-2xl opacity-50"></div>
              <div className="relative bg-white p-2 rounded-full shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face"
                  alt="Gunjan Sinha - Certified Life Coach, Tarot Reader & Numerologist"
                  className="w-80 h-80 rounded-full object-cover border-8 border-white shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-900 leading-tight">
                Transform Your Life with{' '}
                <span className="gradient-text">Clarity, Purpose,</span> and Inner Power
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 font-medium">
                Certified Life Coach | Tarot Reader | Numerologist
              </p>
            </div>

            <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl">
              Discover your true path and unlock your potential through personalized guidance that blends 
              intuitive wisdom with practical transformation strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('booking')}
                className="btn-primary inline-flex items-center justify-center gap-2"
                aria-label="Book a Free Discovery Call"
              >
                Book a Free Discovery Call
                <FaArrowRight className="inline" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="btn-secondary inline-flex items-center justify-center gap-2"
                aria-label="Explore My Services"
              >
                Explore My Services
                <FaArrowRight className="inline" />
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-8 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="text-primary-600 font-bold">500+</span>
                <span>Clients Transformed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-600 font-bold">10+</span>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary-600 font-bold">Certified</span>
                <span>Professional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-neutral-400 hover:text-primary-600 transition-colors"
            aria-label="Scroll to next section"
          >
            <FaChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

