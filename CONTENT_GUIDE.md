# Content Guide

This document provides guidance on updating and customizing the content throughout the website.

## 📝 Content Update Checklist

### 1. Hero Section (`components/sections/Hero.tsx`)

**Update:**
- [ ] Replace placeholder image with professional portrait
- [ ] Verify headline: "Transform Your Life with Clarity, Purpose, and Inner Power"
- [ ] Update subheadline if needed
- [ ] Update trust indicators (500+ clients, 10+ years, etc.)

**Image Requirements:**
- Professional portrait: 800x800px minimum
- High quality, well-lit
- Professional attire
- Warm, approachable expression
- Save as: `public/images/hero-portrait.jpg`

### 2. About Section (`components/sections/About.tsx`)

**Update:**
- [ ] Personal story paragraph (first paragraph)
- [ ] Journey description (second paragraph)
- [ ] Current mission statement (third paragraph)
- [ ] Replace placeholder image with actual photo
- [ ] Update certification details:
  - Certification names
  - Issuing organizations
  - Certification dates (if relevant)
- [ ] Update mission statement
- [ ] Update philosophy statement
- [ ] Verify achievement numbers (500+ clients, 50+ workshops, etc.)

**Content Tone:**
- Authentic and personal
- Professional yet warm
- Focus on transformation and impact

### 3. Services Section (`components/sections/Services.tsx`)

**Update Each Service:**
- [ ] Life Coaching: Description, benefits, duration, format
- [ ] Tarot Guidance: Description, benefits, duration, format
- [ ] Numerology Consultation: Description, benefits, duration, format
- [ ] Workshops & Group Sessions: Description, benefits, duration, format
- [ ] Corporate Sessions: Description, benefits, duration, format
- [ ] Retreats & Intensive Programs: Description, benefits, duration, format

**Service Details to Include:**
- Clear value proposition
- Specific benefits (5-6 per service)
- Session duration
- Format (1-on-1, group, virtual, in-person)
- Pricing (if displaying publicly)

### 4. Contributions Section (`components/sections/Contributions.tsx`)

**Update:**
- [ ] Add actual conferences and speaking engagements
- [ ] Include media appearances (magazines, podcasts, blogs)
- [ ] List community initiatives
- [ ] Update dates and locations
- [ ] Add links to media appearances (if available)

**Categories:**
- Conferences & Speaking
- Media & Publications
- Community Initiatives

### 5. Associations Section (`components/sections/Associations.tsx`)

**Update:**
- [ ] List actual professional associations
- [ ] Add certification details
- [ ] Include mentor names and organizations
- [ ] Add association logos (if available)
- [ ] Update membership status

**Information Needed:**
- Association names
- Membership type/level
- Certification names
- Mentor names and roles

### 6. Testimonials Section (`components/sections/Testimonials.tsx`)

**Update:**
- [ ] Replace with real client testimonials
- [ ] Get permission to use client names and photos
- [ ] Include diverse testimonials (different services, backgrounds)
- [ ] Update client photos (or use professional stock photos with permission)
- [ ] Verify social proof statistics

**Testimonial Format:**
- Client name
- Role/title
- Location (city, country)
- 5-star rating
- Testimonial text (2-4 sentences)
- Professional photo (or avatar)

**Legal Note:**
- Always get written permission before publishing testimonials
- Consider using initials if privacy is preferred

### 7. Thought Leadership Section (`components/sections/ThoughtLeadership.tsx`)

**Update:**
- [ ] Write actual blog posts (or link to existing blog)
- [ ] Create free resources (PDFs, audio files)
- [ ] Update blog post images
- [ ] Add actual blog post links
- [ ] Set up newsletter integration (Mailchimp, ConvertKit, etc.)

**Blog Post Structure:**
- Title
- Category
- Publication date
- Read time
- Excerpt (2-3 sentences)
- Featured image
- Link to full article

**Free Resources:**
- Numerology Report PDF
- Meditation Audio
- Goal Setting Workbook
- Other downloadable resources

### 8. Booking Section (`components/sections/Booking.tsx`)

**Update:**
- [ ] Integrate actual booking calendar (Calendly, Acuity, etc.)
- [ ] Set up contact form backend (Formspree, Netlify Forms, custom API)
- [ ] Update email address
- [ ] Update WhatsApp number
- [ ] Update LinkedIn profile URL
- [ ] Update Instagram handle

**Booking Integration Options:**
- Calendly (recommended)
- Acuity Scheduling
- Square Appointments
- Custom booking system

**Contact Form Backend:**
- Formspree (easy setup)
- Netlify Forms (if using Netlify)
- Custom API endpoint
- Email service (SendGrid, Mailgun)

### 9. Footer (`components/sections/Footer.tsx`)

**Update:**
- [ ] Update social media links
- [ ] Update email address
- [ ] Update WhatsApp number
- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Create Cookie Policy page (if needed)

### 10. SEO & Metadata (`app/layout.tsx`)

**Update:**
- [ ] Update page title
- [ ] Update meta description
- [ ] Add keywords
- [ ] Update Open Graph image
- [ ] Add Google Search Console verification
- [ ] Update Google Analytics ID
- [ ] Update canonical URL
- [ ] Update Schema.org data (name, job title, URLs)

**Schema.org Updates:**
- Person schema: Name, job title, description
- ProfessionalService schema: Service types
- SameAs: Social media profiles
- URLs: Website, social profiles

### 11. Sitemap (`app/sitemap.ts`)

**Update:**
- [ ] Update base URL to actual domain
- [ ] Add blog post URLs (if separate pages)
- [ ] Add other page URLs
- [ ] Update lastModified dates

### 12. Images

**Image Checklist:**
- [ ] Hero portrait (800x800px, professional)
- [ ] About section photo (600x600px)
- [ ] Blog post featured images (1200x630px)
- [ ] Client testimonial photos (200x200px)
- [ ] Favicon (32x32px, 16x16px)
- [ ] Open Graph image (1200x630px)

**Image Optimization:**
- Use WebP format when possible
- Compress images before uploading
- Use Next.js Image component for optimization
- Add alt text for accessibility

## 🎯 Content Writing Tips

### Headlines
- Clear and benefit-focused
- Use power words: Transform, Discover, Unlock, Empower
- Keep under 60 characters for SEO

### Descriptions
- Focus on transformation outcomes
- Use "you" language
- Include specific benefits
- Keep paragraphs short (3-4 sentences)

### CTAs (Call-to-Actions)
- Action-oriented verbs: Book, Discover, Explore, Start
- Create urgency when appropriate
- Clear and specific

### Testimonials
- Authentic and specific
- Include transformation details
- Show diversity in clients
- Use real names (with permission)

## 📧 Content Approval Process

1. **Draft Content**: Write all content in a document first
2. **Review**: Check for accuracy and tone
3. **Legal Review**: Ensure testimonials have permission
4. **SEO Check**: Verify keywords and meta descriptions
5. **Final Review**: Proofread for typos and grammar
6. **Publish**: Update website content

## 🔄 Regular Updates

**Monthly:**
- Update blog section with new posts
- Refresh testimonials (if new ones available)
- Update statistics (client count, etc.)

**Quarterly:**
- Review and update service descriptions
- Update contributions section
- Refresh images if needed

**Annually:**
- Major content audit
- Update certifications and achievements
- Refresh design elements if needed

---

**Remember**: All content should reflect your authentic voice and brand. This guide provides structure, but your personal touch is what will make the website truly yours.

