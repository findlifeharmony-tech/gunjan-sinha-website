import { FaMicrophone, FaVideo, FaNewspaper, FaUsers, FaAward } from 'react-icons/fa'

const contributions = [
  {
    category: 'Conferences & Speaking',
    items: [
      {
        title: 'International Life Coaching Summit 2023',
        role: 'Keynote Speaker',
        description: 'Presented on "Integrating Spiritual Wisdom with Practical Transformation"',
        location: 'Virtual Global Conference',
      },
      {
        title: 'Women in Leadership Forum',
        role: 'Workshop Facilitator',
        description: 'Led interactive session on "Purpose-Driven Leadership and Intuitive Decision Making"',
        location: 'Mumbai, India',
      },
      {
        title: 'Spiritual Wellness Expo',
        role: 'Featured Presenter',
        description: 'Shared insights on "Numerology for Career Alignment"',
        location: 'Delhi, India',
      },
    ],
  },
  {
    category: 'Media & Publications',
    items: [
      {
        title: 'Featured in "Transform Your Life" Magazine',
        role: 'Cover Story',
        description: 'In-depth interview on the journey from corporate professional to transformation coach',
        location: 'Print & Digital',
      },
      {
        title: 'Podcast: "The Purpose Path"',
        role: 'Guest Expert',
        description: 'Episode on "Using Tarot and Numerology for Life Clarity"',
        location: 'Available on all major platforms',
      },
      {
        title: 'Blog: "Mindful Living Today"',
        role: 'Regular Contributor',
        description: 'Monthly articles on personal transformation and spiritual growth',
        location: 'Online Publication',
      },
    ],
  },
  {
    category: 'Community Initiatives',
    items: [
      {
        title: 'Free Monthly Community Sessions',
        role: 'Founder & Facilitator',
        description: 'Providing accessible guidance to underserved communities',
        location: 'Virtual & Local',
      },
      {
        title: 'Youth Mentorship Program',
        role: 'Program Director',
        description: 'Supporting young adults in career and life purpose discovery',
        location: 'Multiple Cities',
      },
    ],
  },
]

export default function Contributions() {
  return (
    <section id="contributions" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            Contributions & <span className="gradient-text">Participation</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Sharing wisdom and insights through conferences, media, and community initiatives
          </p>
        </div>

        <div className="space-y-16">
          {contributions.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center gap-3 mb-8">
                <div className="text-primary-600">
                  {sectionIndex === 0 && <FaMicrophone className="w-6 h-6" />}
                  {sectionIndex === 1 && <FaVideo className="w-6 h-6" />}
                  {sectionIndex === 2 && <FaUsers className="w-6 h-6" />}
                </div>
                <h3 className="text-3xl font-serif font-bold text-neutral-900">
                  {section.category}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="card">
                    <div className="flex items-start justify-between mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.role}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-2 text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="text-neutral-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-600 mb-6">
            Interested in collaborating or having me speak at your event?
          </p>
          <a
            href="#booking"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

