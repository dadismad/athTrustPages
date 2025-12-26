# ATH.live - Quick Start Local Setup Guide

## 🚀 Everything is Ready to Run!

Your ATH.live website is fully configured and ready to use on your laptop. Here's how to get started:

---

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (usually comes with Node.js)

Check versions:
```bash
node --version
npm --version
```

---

## 🎯 Quick Start (3 Steps)

### Step 1: Navigate to Project Directory
```bash
cd /Users/alexandersolianin/Downloads/ath-ui-main\ 2
```

### Step 2: Install Dependencies (First Time Only)
```bash
npm install
```
This installs all required packages. You only need to do this once.

### Step 3: Start Development Server
```bash
npm run dev
```

✅ **Server is now running!**

---

## 🌐 Access Your Website

Once the dev server is running, open your browser and visit:

### Local Access:
- **http://localhost:5173** (Main development URL)
- **http://localhost:8080** (Alternative network address)

### From Other Devices on Your Network:
- **http://192.168.1.105:8173** (Replace with your machine's IP if different)
- Look for the Network URL shown in terminal when dev server starts

---

## 📄 Pages to Check

### ✅ Completed Pages:
1. **Home / News Page** - `http://localhost:5173/`
   - New trader-focused intro section
   - Live price ticker
   - Latest articles carousel

2. **About Us** - `http://localhost:5173/about-us`
   - Full company profile
   - Mission, values, community info
   - Optimized spacing matching industry standards

3. **Contact Us** - `http://localhost:5173/contact-us`
   - Contact form with categories
   - Direct email option
   - Response time commitment

4. **Privacy Policy** - `http://localhost:5173/privacy-policy`
   - GDPR/CCPA compliance
   - Data protection info
   - Crypto disclaimer

5. **Categories** - `http://localhost:5173/categories`
   - Browse all news categories

6. **Events** - `http://localhost:5173/events`
   - Upcoming crypto events

7. **Search** - Use search feature to find articles

---

## 🛠️ Available Commands

```bash
# Start development server (hot reload enabled)
npm run dev

# Type check your code
npm run check

# Run linter and formatter checks
npm run lint

# Auto-format code
npm run format

# Run unit tests
npm run test:unit

# Run E2E tests
npm run test:e2e

# Production build
npm run build
```

---

## 📝 Environment Configuration

The project is pre-configured with a `.env.local` file containing:
- `VITE_API_HOST` - Strapi CMS API endpoint
- `VITE_API_TOKEN` - API authentication token
- `VITE_HOST` - Frontend base URL

If you need to modify these, edit `.env.local` in the project root.

---

## 🔍 What's Been Updated

### Recent Improvements:
✅ **About Us Page Redesigned** - Professional wide layout with optimized spacing
✅ **Home Page Enhanced** - New trader-focused introduction under banner
✅ **Spacing Optimized** - Industry-standard section distances throughout
✅ **Trust Pages Complete** - About, Contact, Privacy fully implemented
✅ **Responsive Design** - Mobile, tablet, and desktop optimized

---

## 🎨 Design Specifications (Already Applied)

- **Fonts**: Playfair Display (headers), Futura (body)
- **Colors**: #1CA167 (primary green), #212FB2 (CTA blue), #000000/#454545 (text)
- **Typography**: 42px titles, 14px body text
- **Spacing**: Consistent 35px between sections (industry standard)
- **Layout**: Full-width modern grid system, no Bootstrap constraints

---

## ✨ Features

- 🌍 **Multilingual Ready** - Infrastructure for multiple languages
- 📱 **Responsive Design** - Works on desktop, tablet, mobile
- ⚡ **Fast Rendering** - Server-side rendering (SSR) with SvelteKit
- 🔒 **Privacy-First** - GDPR/CCPA compliant
- 🎯 **SEO Optimized** - Meta tags, canonical links, structured data
- 🔗 **Strapi CMS Integration** - Pull content from headless CMS
- 🎨 **Modern Styling** - Bootstrap 5.3.3 + custom SCSS

---

## 🐛 Troubleshooting

### Dev server won't start?
```bash
# Kill any existing process on port 8080
lsof -ti:8080 | xargs kill -9

# Try again
npm run dev
```

### Port already in use?
The dev server will auto-increment ports. Check terminal output for the actual URL.

### Styles not updating?
Hard refresh browser: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

### Type errors?
```bash
npm run check
```

### Need to reinstall dependencies?
```bash
rm -rf node_modules
npm install
```

---

## 📞 Contact & Support

For issues or questions:
- **Email**: info@ath.live
- **Contact Form**: http://localhost:5173/contact-us
- **Response Time**: 24-48 hours

---

## 🎯 Next Steps

1. ✅ Start the dev server (`npm run dev`)
2. ✅ Visit the home page to see the new intro section
3. ✅ Check the About Us page with optimized spacing
4. ✅ Browse other pages to verify everything works
5. ✅ Test on mobile by using Network URL on your phone

---

## 📊 Project Structure

```
ath-ui-main 2/
├── src/
│   ├── routes/              # SvelteKit pages
│   │   ├── +page.svelte     # Home page (with new intro section)
│   │   ├── about-us/        # About page (redesigned)
│   │   ├── contact-us/      # Contact page
│   │   ├── privacy-policy/  # Privacy page
│   │   └── ...
│   ├── lib/
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # Strapi API calls
│   │   ├── styles/          # Global SCSS
│   │   └── types/           # TypeScript types
│   └── app.html             # HTML template
├── static/                  # Static assets
├── package.json             # Dependencies
├── svelte.config.js        # Svelte configuration
├── vite.config.ts          # Vite build config
└── tsconfig.json           # TypeScript config
```

---

## ✅ You're All Set!

Everything is configured and ready to run. Just execute:

```bash
npm run dev
```

Then open your browser to `http://localhost:5173` 🎉

Enjoy building and testing your ATH.live website locally!
