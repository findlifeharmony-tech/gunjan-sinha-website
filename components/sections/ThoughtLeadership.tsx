'use client'

import { FaArrowRight, FaDownload, FaBook, FaHeadphones } from 'react-icons/fa'
import { useState } from 'react'

const blogPosts = [
  {
    title: '5 Signs You\'re Ready for a Life Transformation',
    excerpt: 'Discover the key indicators that suggest you\'re prepared to embark on a journey of personal growth and transformation.',
    category: 'Life Coaching',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
  },
  {
    title: 'Understanding Your Life Path Number: A Beginner\'s Guide',
    excerpt: 'Learn how numerology can reveal your core purpose and guide your life decisions with clarity and confidence.',
    category: 'Numerology',
    date: 'March 8, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
  },
  {
    title: 'Tarot for Decision Making: A Practical Approach',
    excerpt: 'Explore how tarot cards can serve as a tool for self-reflection and clarity when facing important life choices.',
    category: 'Tarot Guidance',
    date: 'March 1, 2024',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
  },
]

const resources = [
  {
    title: 'Free Numerology Report',
    description: 'Discover your life path, destiny, and personal year numbers',
    type: 'PDF Guide',
    icon: <FaDownload className="w-6 h-6" />,
  },
  {
    title: '10-Minute Morning Meditation',
    description: 'Start your day with clarity and intention',
    type: 'Audio Guide',
    icon: <FaHeadphones className="w-6 h-6" />,
  },
  {
    title: 'Goal Setting Workbook',
    description: 'A comprehensive guide to setting and achieving meaningful goals',
    type: 'PDF Workbook',
    icon: <FaBook className="w-6 h-6" />,
  },
]

export default function ThoughtLeadership() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for newsletter subscription API
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Thought <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Insights, resources, and guidance to support your transformation journey
          </p>
        </div>

        {/* Blog Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-serif font-bold text-neutral-900">Latest Articles</h3>
            <a href="#blog" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
              View All Articles
              <FaArrowRight />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="text-sm text-neutral-500 mb-3">
                  {post.date} • {post.readTime}
                </div>
                <h4 className="text-xl font-serif font-bold mb-3 text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <a href="#blog" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2">
                  Read More
                  <FaArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* Free Resources */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">
            Free Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h4 className="text-xl font-serif font-bold mb-2 text-neutral-900">
                  {resource.title}
                </h4>
                <p className="text-neutral-600 mb-4 text-sm">
                  {resource.description}
                </p>
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {resource.type}
                </span>
                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold 
                                 hover:bg-primary-700 transition-all duration-300">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Stay Connected
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Subscribe to receive weekly insights, exclusive resources, and updates on workshops and events
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg text-neutral-900 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold 
                         hover:bg-neutral-100 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="mt-4 text-green-200">Thank you for subscribing! Check your email for confirmation.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

