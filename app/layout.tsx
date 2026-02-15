import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gunjan Sinha | Certified Life Coach, Tarot Reader & Numerologist',
  description: 'Transform your life with clarity, purpose, and inner power. Expert guidance in life coaching, tarot reading, and numerology to unlock your true potential.',
  keywords: 'life coach, tarot reader, numerologist, personal transformation, spiritual guidance, career coaching, relationship coaching',
  authors: [{ name: 'Gunjan Sinha' }],
  creator: 'Gunjan Sinha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gunjansinha.com',
    title: 'Gunjan Sinha | Certified Life Coach, Tarot Reader & Numerologist',
    description: 'Transform your life with clarity, purpose, and inner power. Expert guidance in life coaching, tarot reading, and numerology.',
    siteName: 'Gunjan Sinha',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gunjan Sinha | Certified Life Coach, Tarot Reader & Numerologist',
    description: 'Transform your life with clarity, purpose, and inner power.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://gunjansinha.com" />
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Gunjan Sinha',
              jobTitle: 'Certified Life Coach, Tarot Reader & Numerologist',
              description: 'Transform your life with clarity, purpose, and inner power through expert guidance in life coaching, tarot reading, and numerology.',
              url: 'https://gunjansinha.com',
              sameAs: [
                'https://www.linkedin.com/in/gunjan-sinha',
                'https://www.instagram.com/gunjan_sinha',
                'https://wa.me/your-whatsapp-number',
              ],
              knowsAbout: [
                'Life Coaching',
                'Tarot Reading',
                'Numerology',
                'Personal Transformation',
                'Spiritual Guidance',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Gunjan Sinha - Life Coaching & Spiritual Guidance',
              description: 'Professional life coaching, tarot reading, and numerology services',
              provider: {
                '@type': 'Person',
                name: 'Gunjan Sinha',
              },
              areaServed: 'Worldwide',
              serviceType: ['Life Coaching', 'Tarot Reading', 'Numerology Consultation'],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Google Analytics - Replace with your tracking ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </body>
    </html>
  )
}

