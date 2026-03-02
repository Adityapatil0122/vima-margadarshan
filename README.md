# 🛡️ विमा मार्गदर्शन — Marathi Insurance Information Portal

A React + Vite + TypeScript + Tailwind CSS information portal explaining health, term, and car insurance in simple Marathi.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Responsive nav with mobile menu
│   └── Footer.tsx        # Footer with IRDAI, HDFC ERGO, Tata AIG links
├── pages/
│   ├── Home.tsx          # Hero, feature cards, testimonial, CTA
│   ├── HealthInsurance.tsx
│   ├── TermInsurance.tsx
│   ├── CarInsurance.tsx
│   ├── Blog.tsx          # Blog listing with 4 sample posts
│   ├── FAQ.tsx           # Filterable accordion FAQ (15 questions)
│   ├── About.tsx         # Team, values, disclaimer
│   └── Contact.tsx       # Validated form + WhatsApp integration
├── App.tsx               # React Router v6 routing
├── main.tsx              # Entry point
└── index.css             # Tailwind + custom design tokens
```

---

## 🎨 Design System

### Colors
- **Saffron** (`saffron-*`): Primary CTA, accents — inspired by Maharashtra
- **Earth** (`earth-*`): Text, backgrounds — warm and trustworthy
- **Forest green** (`forest-*`): Accent for positive/coverage indicators

### Typography
- **Display**: `Noto Serif Devanagari` — headings
- **Body**: `Noto Sans Devanagari` — paragraphs, UI
- Loaded from Google Fonts (Devanagari-optimized)

### Components (via CSS classes)
| Class | Usage |
|---|---|
| `.card` | Rounded card with hover shadow |
| `.btn-primary` | Saffron filled button |
| `.btn-outline` | Bordered button |
| `.btn-whatsapp` | Green WhatsApp CTA |
| `.form-input` | Consistent form fields |
| `.section-title` | H2 headings |
| `.section-wrap` | Centered container |
| `.page-hero` | Top hero section |
| `.prose-mar` | Marathi long-form content |
| `.tag` | Badge/category label |

---

## ✅ Features — Phase 1 (Complete)

- [x] All 8 pages with full Marathi content
- [x] Responsive mobile-first design
- [x] React Router v6 routing with scroll-to-top
- [x] Fixed header with mobile hamburger menu
- [x] Contact form with client-side validation
- [x] WhatsApp deep-link integration (all pages)
- [x] Footer with IRDAI, HDFC ERGO, Tata AIG links
- [x] SEO-friendly `<html lang="mr">` + meta tags
- [x] Filterable FAQ accordion (15 questions across 4 categories)
- [x] Blog listing with sample posts
- [x] Devanagari-optimized fonts
- [x] Animations (fade-up, fade-in)

---

## 🔧 Customization

### Update WhatsApp Number
Search and replace `919876543210` with your actual WhatsApp number (country code + number, no +).

### Add Blog Posts
Edit `src/pages/Blog.tsx` → `posts` array.

### Add FAQ Questions
Edit `src/pages/FAQ.tsx` → `faqs` array. Add the `category` field from existing categories.

### Change Brand Colors
Edit `tailwind.config.js` → `theme.extend.colors`.

---

## 🗺️ Phase 2 Roadmap (Optional)

- [ ] Markdown-based CMS for blog posts (e.g., Contentlayer)
- [ ] Search within articles and FAQs
- [ ] Marathi ↔ English language toggle
- [ ] YouTube video embedding section
- [ ] Newsletter / lead capture integration (Mailchimp, etc.)
- [ ] ARIA improvements and focus states
- [ ] Sitemap.xml + robots.txt for SEO
- [ ] Google Analytics / Plausible integration

---

## ⚠️ Disclaimer

This portal is for educational purposes only. Not affiliated with any insurance company.
All insurance advice should be sought from an IRDAI-registered agent/broker.

---

## 📦 Dependencies

| Package | Version | Purpose |
|---|---|---|
| react | 18.x | UI framework |
| react-dom | 18.x | DOM rendering |
| react-router-dom | 6.x | Client-side routing |
| lucide-react | 0.344 | SVG icons |
| tailwindcss | 3.x | Utility CSS |
| vite | 5.x | Build tool |
| typescript | 5.x | Type safety |
