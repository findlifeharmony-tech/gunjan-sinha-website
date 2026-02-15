import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
            About <span className="gradient-text">Gunjan Sinha</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A trusted guide on your journey to transformation, clarity, and purpose
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              My journey into life coaching and spiritual guidance began over a decade ago, 
              when I discovered the profound impact that clarity, purpose, and inner alignment 
              can have on life. What started as a personal quest for meaning evolved into 
              a passionate mission to help others unlock their true potential.
            </p>
            <p>
              Through years of dedicated study, certification, and practice, I have developed a 
              unique approach that seamlessly blends corporate professionalism with intuitive 
              spiritual wisdom. This synthesis allows me to serve clients who seek both practical 
              transformation strategies and deeper spiritual understanding.
            </p>
            <p>
              Today, I am honored to guide hundreds of individuals and organizations toward 
              greater clarity, purpose, and fulfillment—helping them navigate life & challenges 
              with confidence and grace.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Gunjan Sinha in a professional setting"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years of Experience</div>
            </div>
          </div>
        </div>

        {/* Certifications & Training */}
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h4 className="text-xl font-semibold mb-2">Certified Life Coach</h4>
              <p className="text-neutral-600">
                International Coach Federation (ICF) Accredited Program
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🔮</div>
              <h4 className="text-xl font-semibold mb-2">Advanced Tarot Certification</h4>
              <p className="text-neutral-600">
                Master-level training in intuitive tarot reading and guidance
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🔢</div>
              <h4 className="text-xl font-semibold mb-2">Numerology Mastery</h4>
              <p className="text-neutral-600">
                Certified in Pythagorean and Chaldean numerology systems
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Philosophy */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary-600">My Mission</h3>
            <p className="text-neutral-700 leading-relaxed">
              To empower individuals and organizations to discover their authentic purpose, 
              overcome limiting beliefs, and create lives of meaning, fulfillment, and impact. 
              I believe everyone has the capacity for transformation when given the right tools, 
              guidance, and support.
            </p>
          </div>
          <div className="card">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-600">My Philosophy</h3>
            <p className="text-neutral-700 leading-relaxed">
              True transformation happens at the intersection of practical action and spiritual 
              alignment. By combining evidence-based coaching methodologies with intuitive 
              wisdom, we can unlock profound shifts that create lasting change in every area 
              of life—career, relationships, health, and personal growth.
            </p>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-neutral-600">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-neutral-600">Workshops Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-neutral-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

