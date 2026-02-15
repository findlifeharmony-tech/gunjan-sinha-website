import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Contributions from '@/components/sections/Contributions'
import Associations from '@/components/sections/Associations'
import Testimonials from '@/components/sections/Testimonials'
import ThoughtLeadership from '@/components/sections/ThoughtLeadership'
import Booking from '@/components/sections/Booking'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contributions />
      <Associations />
      <Testimonials />
      <ThoughtLeadership />
      <Booking />
      <Footer />
    </main>
  )
}

