'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Marketing Director',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Working with Gunjan transformed my entire perspective on career and life purpose. Her blend of practical coaching and intuitive guidance helped me make a major career transition with confidence. I\'m now in a role that truly aligns with my values.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Entrepreneur',
    location: 'Delhi, India',
    rating: 5,
    text: 'The numerology consultation was eye-opening. Gunjan\'s insights about timing and business decisions have been incredibly accurate. Her guidance helped me launch my business at the perfect moment, and we\'ve been thriving ever since.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    name: 'Anita Patel',
    role: 'Life Coach',
    location: 'Bangalore, India',
    rating: 5,
    text: 'As a fellow coach, I was impressed by Gunjan\'s depth of knowledge and genuine care for her clients. Her tarot readings provide clarity that goes beyond the cards—she has a true gift for intuitive guidance.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    location: 'San Francisco, USA',
    rating: 5,
    text: 'I was skeptical about tarot and numerology, but Gunjan\'s professional approach and the accuracy of her insights won me over. She helped me understand relationship patterns I\'d been repeating and gave me practical tools for change.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    name: 'Sneha Reddy',
    role: 'Corporate Executive',
    location: 'Hyderabad, India',
    rating: 5,
    text: 'The life coaching sessions with Gunjan have been transformative. She helped me identify limiting beliefs I didn\'t even know I had and supported me through a complete mindset shift. My relationships and career have improved dramatically.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
  {
    name: 'David Thompson',
    role: 'Retreat Participant',
    location: 'London, UK',
    rating: 5,
    text: 'Attending Gunjan\'s retreat was a life-changing experience. The combination of group sessions and personal guidance created a safe space for deep transformation. I left with clarity, purpose, and a renewed sense of direction.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Real stories of transformation from clients who&apos;ve worked with Gunjan
          </p>
        </div>

        {/* Featured Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
              <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
              <p className="text-neutral-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel for Additional Testimonials */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-5 h-5" />
              ))}
            </div>
            <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
            <p className="text-neutral-700 leading-relaxed mb-6 italic text-lg">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-neutral-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-neutral-600">
                  {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary-600 w-8' : 'bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-primary-100 text-primary-600 hover:bg-primary-200 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-neutral-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-neutral-600">Would Recommend</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-neutral-600">Social Media Followers</div>
          </div>
        </div>
      </div>
    </section>
  )
}

