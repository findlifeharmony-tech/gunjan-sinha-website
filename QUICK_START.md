# Quick Start Guide

Get your website up and running in minutes!

## 🚀 Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including Next.js, React, TypeScript, and Tailwind CSS.

## 🎨 Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your website.

## ✏️ Step 3: Customize Content

### Essential Updates (Do These First):

1. **Update Contact Information**
   - Open `components/sections/Booking.tsx`
   - Replace `gunjan@example.com` with your email
   - Replace `your-whatsapp-number` with your WhatsApp number
   - Update Calendly link or add your booking widget

2. **Update Social Media Links**
   - Open `components/sections/Footer.tsx`
   - Update LinkedIn, Instagram, and other social links
   - Also update in `app/layout.tsx` (Schema.org data)

3. **Replace Placeholder Images**
   - Add your professional photo to `public/images/`
   - Update image paths in:
     - `components/sections/Hero.tsx` (hero portrait)
     - `components/sections/About.tsx` (about photo)
     - `components/sections/Testimonials.tsx` (client photos)

4. **Update Personal Information**
   - Open `components/sections/About.tsx`
   - Replace placeholder biography with your story
   - Update certifications and achievements

5. **Add Real Testimonials**
   - Open `components/sections/Testimonials.tsx`
   - Replace placeholder testimonials with real client feedback
   - **Important**: Get written permission from clients first!

### SEO Updates:

6. **Update Metadata**
   - Open `app/layout.tsx`
   - Update title, description, and keywords
   - Add your Google Analytics ID (replace `GA_MEASUREMENT_ID`)
   - Update Open Graph data

7. **Update Sitemap**
   - Open `app/sitemap.ts`
   - Replace `https://gunjansinha.com` with your actual domain

## 🎯 Step 4: Test Your Website

1. **Check All Links**
   - Test navigation links
   - Verify social media links open correctly
   - Test booking/contact form

2. **Mobile Responsiveness**
   - Resize browser window
   - Test on actual mobile device
   - Check all sections display correctly

3. **Performance**
   - Run Lighthouse audit (Chrome DevTools)
   - Aim for 90+ scores
   - Optimize images if needed

## 🚢 Step 5: Deploy

### Option A: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic!)

### Option B: Netlify

1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop `.next` folder or connect GitHub

See `README.md` for detailed deployment instructions.

## 📋 Pre-Launch Checklist

- [ ] All placeholder content replaced
- [ ] Contact information updated
- [ ] Social media links working
- [ ] Images optimized and uploaded
- [ ] Testimonials have permission
- [ ] Booking system integrated
- [ ] Contact form connected to email
- [ ] SEO metadata updated
- [ ] Google Analytics configured
- [ ] Domain connected (if using custom domain)
- [ ] SSL certificate active
- [ ] Mobile testing completed
- [ ] All links tested
- [ ] Privacy Policy page created
- [ ] Terms of Service page created (if needed)

## 🆘 Common Issues

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public/` folder
- Verify image URLs (if using external images)

### Styles Not Applying
- Run `npm run dev` again
- Clear browser cache
- Check Tailwind is configured correctly

### Build Errors
- Run `npm install` again
- Check Node.js version (should be 18+)
- Delete `node_modules` and `.next`, then reinstall

## 📚 Next Steps

- Read `README.md` for full documentation
- Check `CONTENT_GUIDE.md` for content writing tips
- Review `DESIGN_TOKENS.md` for design customization

## 💡 Pro Tips

1. **Start Small**: Update the most important sections first (Hero, About, Contact)
2. **Test Often**: Check your changes in the browser frequently
3. **Backup**: Commit your changes to Git regularly
4. **Ask for Help**: If stuck, refer to Next.js documentation or reach out for support

---

**Ready to launch?** Once all checklist items are complete, you're ready to go live! 🎉

