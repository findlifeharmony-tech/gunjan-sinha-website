'use client'

import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Gunjan Sinha</h3>
            <p className="text-neutral-400 leading-relaxed mb-4">
              Certified Life Coach, Tarot Reader & Numerologist dedicated to helping you 
              transform your life with clarity, purpose, and inner power.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gunjan-sinha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/gunjan_sinha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/your-whatsapp-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:gunjan@example.com"
                className="text-neutral-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contributions" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contributions
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Life Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Tarot Reading
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Numerology
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Corporate Sessions
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#booking" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Gunjan Sinha. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors"
            aria-label="Scroll to top"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}

