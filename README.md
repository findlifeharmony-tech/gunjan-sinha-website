# Gunjan Sinha - Personal Website

A modern, premium, responsive personal website for Gunjan Sinha, a certified Life Coach, Tarot Reader, and Numerologist. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **SEO Optimized**: Complete metadata, Open Graph tags, Schema.org markup, sitemap
- **High Performance**: Optimized for Lighthouse scores 90+
- **Accessibility**: WCAG 2.1 compliant with semantic HTML and ARIA labels
- **Beautiful UI**: Clean, elegant design with soft colors and modern aesthetics

## 📋 Sections

1. **Hero Section** - Professional portrait, compelling headline, primary CTAs
2. **About** - Personal story, certifications, mission, and philosophy
3. **Services** - Life Coaching, Tarot, Numerology, Workshops, Corporate Sessions, Retreats
4. **Contributions** - Conferences, media appearances, community initiatives
5. **Associations** - Professional associations, certifications, mentors
6. **Testimonials** - Client testimonials with ratings and social proof
7. **Thought Leadership** - Blog section, free resources, newsletter subscription
8. **Booking** - Calendar integration and contact form
9. **Footer** - Quick links, social media, legal pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Inter (sans-serif), Playfair Display (serif) via Google Fonts

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory)

```bash
cd "My Own Website Project"
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will automatically detect Next.js and configure the build
- Click "Deploy"

3. **Configure Environment Variables** (if needed)

- Add any API keys or environment variables in Vercel dashboard
- Update Google Analytics ID in `app/layout.tsx`

### Netlify

1. **Build the project**

```bash
npm run build
```

2. **Deploy**

- Go to [netlify.com](https://netlify.com)
- Drag and drop the `.next` folder, or
- Connect your GitHub repository for continuous deployment
- Set build command: `npm run build`
- Set publish directory: `.next`

### GitHub Pages

For static export (requires additional configuration):

1. **Update `next.config.js`** to enable static export
2. **Build and export**

```bash
npm run build
npm run export
```

3. **Deploy the `out` folder to GitHub Pages**

## ⚙️ Configuration

### Update Personal Information

1. **Contact Information**
   - Update email, phone, WhatsApp number in `components/sections/Booking.tsx`
   - Update social media links in `components/sections/Footer.tsx` and `app/layout.tsx`

2. **Images**
   - Replace placeholder images with actual photos
   - Update image paths in Hero, About, and other sections
   - Recommended: Use Next.js Image component for optimization

3. **Content**
   - Update biography, certifications, and achievements in `components/sections/About.tsx`
   - Customize services descriptions in `components/sections/Services.tsx`
   - Add real testimonials in `components/sections/Testimonials.tsx`
   - Update blog posts in `components/sections/ThoughtLeadership.tsx`

4. **SEO**
   - Update metadata in `app/layout.tsx`
   - Update sitemap URLs in `app/sitemap.ts`
   - Add Google Search Console verification code
   - Update Google Analytics ID (replace `GA_MEASUREMENT_ID`)

5. **Booking Integration**
   - Replace Calendly placeholder with actual embed code in `components/sections/Booking.tsx`
   - Set up contact form backend API endpoint

### Color Customization

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: { /* Your primary colors */ },
  accent: { /* Your accent colors */ },
  neutral: { /* Your neutral colors */ },
}
```

## 📝 Content Placeholders

All content is currently placeholder text and should be replaced with actual information:

- Biography and personal story
- Certifications and credentials
- Client testimonials
- Blog articles
- Service descriptions
- Contact information
- Social media links

## 🎨 Design Tokens

### Colors

- **Primary**: Purple shades (primary-50 to primary-900)
- **Accent**: Coral/red shades (accent-50 to accent-900)
- **Neutral**: Gray shades (neutral-50 to neutral-900)

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing

- Section padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl`
- Standard padding: `px-4 sm:px-6 lg:px-8`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   └── sections/           # All section components
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Contributions.tsx
│       ├── Associations.tsx
│       ├── Testimonials.tsx
│       ├── ThoughtLeadership.tsx
│       ├── Booking.tsx
│       └── Footer.tsx
├── public/                 # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 📊 Performance Optimization

- Images optimized with Next.js Image component
- Fonts loaded with `display: swap` for better performance
- Code splitting with Next.js automatic optimization
- CSS purged in production build
- Lazy loading for below-the-fold content

## 🔒 Security

- Form validation on client side
- CSRF protection (add server-side validation)
- Secure headers (configure in `next.config.js` if needed)
- Environment variables for sensitive data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal website project. For suggestions or improvements, please contact Gunjan Sinha.

## 📄 License

All rights reserved. © 2024 Gunjan Sinha

## 📞 Support

For questions or support, please contact:
- Email: gunjan@example.com
- Website: https://gunjansinha.com

---

**Built with ❤️ for transformation and growth**

