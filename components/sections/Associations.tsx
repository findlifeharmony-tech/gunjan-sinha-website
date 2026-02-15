import { FaAward, FaCertificate, FaHandshake } from 'react-icons/fa'

const associations = [
  {
    name: 'International Coach Federation (ICF)',
    type: 'Professional Association',
    description: 'Certified member of the world\'s largest organization of professionally trained coaches',
    logo: '🏆',
  },
  {
    name: 'International Tarot Foundation',
    type: 'Certification Body',
    description: 'Advanced certification in tarot reading and intuitive guidance',
    logo: '🔮',
  },
  {
    name: 'Numerology Association of India',
    type: 'Professional Network',
    description: 'Recognized practitioner in Pythagorean and Chaldean numerology systems',
    logo: '🔢',
  },
  {
    name: 'Global Transformation Network',
    type: 'Community Partnership',
    description: 'Active member of a worldwide community of transformation coaches and spiritual guides',
    logo: '🌍',
  },
]

const mentors = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Master Life Coach & Mentor',
    organization: 'Transformational Leadership Institute',
  },
  {
    name: 'Master Elena Rodriguez',
    role: 'Spiritual Guidance Mentor',
    organization: 'International Spiritual Academy',
  },
]

export default function Associations() {
  return (
    <section id="associations" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Associations & <span className="gradient-text">Partnerships</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Connected with leading organizations and mentors in the transformation and spiritual guidance space
          </p>
        </div>

        {/* Professional Associations */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaAward className="w-6 h-6 text-primary-600" />
            <h3 className="text-3xl font-serif font-bold text-neutral-900">
              Professional Associations
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {associations.map((association, index) => (
              <div key={index} className="card">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{association.logo}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-xl font-serif font-bold text-neutral-900">
                        {association.name}
                      </h4>
                    </div>
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {association.type}
                    </span>
                    <p className="text-neutral-600 leading-relaxed">
                      {association.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Badges */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FaCertificate className="w-6 h-6 text-primary-600" />
            <h3 className="text-3xl font-serif font-bold text-neutral-900">
              Certifications & Credentials
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'ICF Certified Coach', icon: '🎓' },
              { name: 'Advanced Tarot Master', icon: '🔮' },
              { name: 'Numerology Expert', icon: '🔢' },
              { name: 'Spiritual Guidance Practitioner', icon: '✨' },
            ].map((cert, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold text-neutral-900">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors & Influences */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <FaHandshake className="w-6 h-6 text-primary-600" />
            <h3 className="text-3xl font-serif font-bold text-neutral-900">
              Mentors & Influences
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <div key={index} className="card">
                <h4 className="text-xl font-serif font-bold text-neutral-900 mb-2">
                  {mentor.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-2">{mentor.role}</p>
                <p className="text-neutral-600">{mentor.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

