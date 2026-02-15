# Design Tokens & Style Guide

This document outlines the design system, color palette, typography, and component styles used in the Gunjan Sinha website.

## 🎨 Color Palette

### Primary Colors (Purple)
Used for primary actions, links, and brand elements.

- `primary-50`: #f5f3ff (Lightest background)
- `primary-100`: #ede9fe
- `primary-200`: #ddd6fe
- `primary-300`: #c4b5fd
- `primary-400`: #a78bfa
- `primary-500`: #8b5cf6
- `primary-600`: #7c3aed (Main brand color)
- `primary-700`: #6d28d9
- `primary-800`: #5b21b6
- `primary-900`: #4c1d95 (Darkest)

### Accent Colors (Coral/Red)
Used for highlights, CTAs, and emphasis.

- `accent-50`: #fef3f2
- `accent-100`: #fee4e2
- `accent-200`: #fececa
- `accent-300`: #fdaba5
- `accent-400`: #fb7a70
- `accent-500`: #f95245
- `accent-600`: #e72f20
- `accent-700`: #c2261a
- `accent-800`: #a01f17
- `accent-900`: #7f1913

### Neutral Colors (Gray)
Used for text, backgrounds, and borders.

- `neutral-50`: #fafafa (Lightest background)
- `neutral-100`: #f5f5f5
- `neutral-200`: #e5e5e5
- `neutral-300`: #d4d4d4
- `neutral-400`: #a3a3a3
- `neutral-500`: #737373
- `neutral-600`: #525252
- `neutral-700`: #404040
- `neutral-800`: #262626
- `neutral-900`: #171717 (Main text color)

## 📝 Typography

### Font Families

- **Sans-serif (Body)**: Inter
  - Clean, modern, highly readable
  - Used for body text, buttons, and UI elements
  
- **Serif (Headings)**: Playfair Display
  - Elegant, sophisticated
  - Used for all headings (h1-h6)

### Font Sizes

- **Hero H1**: 5xl (3rem) → 6xl (3.75rem) → 7xl (4.5rem)
- **Section H2**: 4xl (2.25rem) → 5xl (3rem)
- **Section H3**: 3xl (1.875rem)
- **Card H4**: 2xl (1.5rem) → xl (1.25rem)
- **Body**: base (1rem) → lg (1.125rem) → xl (1.25rem)
- **Small**: sm (0.875rem) → xs (0.75rem)

### Font Weights

- **Bold**: 700 (Headings)
- **Semibold**: 600 (Subheadings, CTAs)
- **Medium**: 500 (Emphasis)
- **Regular**: 400 (Body text)

## 🧩 Component Styles

### Buttons

#### Primary Button
```css
.btn-primary
- Background: primary-600
- Text: white
- Padding: px-8 py-4
- Border radius: lg (0.5rem)
- Hover: primary-700, shadow-xl, translate-y-1
- Focus: ring-4 ring-primary-300
```

#### Secondary Button
```css
.btn-secondary
- Background: white
- Text: primary-600
- Border: 2px solid primary-600
- Padding: px-8 py-4
- Hover: primary-50 background
- Focus: ring-4 ring-primary-300
```

### Cards

```css
.card
- Background: white
- Border radius: 2xl (1rem)
- Shadow: lg → hover: 2xl
- Padding: p-8
- Transition: all 300ms
```

### Sections

```css
.section-padding
- Padding: py-16 (4rem) → md:py-24 (6rem) → lg:py-32 (8rem)
```

### Container

```css
.container-custom
- Max width: 7xl (80rem / 1280px)
- Margin: auto
- Padding: px-4 → sm:px-6 → lg:px-8
```

## 🎯 Spacing Scale

Based on Tailwind's default spacing scale:

- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `24`: 6rem (96px)

## 🌈 Gradients

### Text Gradient
```css
.gradient-text
- Background: linear-gradient(to right, primary-600, accent-500)
- Background clip: text
- Color: transparent
```

### Background Gradients
- Hero: `from-primary-50 via-white to-accent-50`
- Services: `from-neutral-50 to-primary-50`
- CTA Sections: `from-primary-600 to-accent-500`

## ✨ Effects & Animations

### Hover Effects
- **Scale**: `hover:scale-105` (5% increase)
- **Translate**: `hover:-translate-y-1` (lift effect)
- **Shadow**: Enhanced shadow on hover
- **Color**: Smooth color transitions

### Transitions
- **Duration**: 300ms (standard)
- **Timing**: `ease-in-out` (default)

### Animations
- **Blob**: Floating background elements (7s infinite)
- **Bounce**: Scroll indicator
- **Fade In**: Hero section content

## 📐 Layout Patterns

### Grid Layouts
- **2 Columns**: `md:grid-cols-2`
- **3 Columns**: `lg:grid-cols-3`
- **4 Columns**: `md:grid-cols-4`

### Flexbox Patterns
- **Center**: `flex items-center justify-center`
- **Space Between**: `flex justify-between`
- **Gap**: `gap-4` to `gap-12` depending on context

## 🎨 Visual Hierarchy

### Heading Sizes
1. Hero H1: Largest (7xl)
2. Section H2: Large (5xl)
3. Section H3: Medium (3xl)
4. Card H4: Small (xl-2xl)

### Text Colors
- **Primary Text**: neutral-900
- **Secondary Text**: neutral-600
- **Tertiary Text**: neutral-500
- **Links**: primary-600 → primary-700 on hover

## 🔍 Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Primary buttons: white on primary-600 (high contrast)
- Focus states: Visible ring indicators

### Interactive Elements
- Minimum touch target: 44x44px
- Focus indicators on all interactive elements
- ARIA labels where appropriate

## 📱 Responsive Breakpoints

- **sm**: 640px (Small tablets)
- **md**: 768px (Tablets)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large desktop)
- **2xl**: 1536px (Extra large)

## 🎭 Design Principles

1. **Minimalism**: Clean, uncluttered layouts
2. **Balance**: Spiritual warmth with corporate professionalism
3. **Clarity**: Clear hierarchy and readable typography
4. **Consistency**: Unified color palette and component styles
5. **Accessibility**: Inclusive design for all users

---

**Note**: All design tokens are defined in `tailwind.config.js` and can be customized there.

