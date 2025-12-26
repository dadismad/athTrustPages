# ATH UI - Local Setup Guide

## ✅ What's Been Done
- [x] Dependencies installed (`npm install`)
- [x] TypeScript/Svelte type checking passed (0 errors)
- [x] Production build verified (successful)
- [x] Environment template created (`.env.local`)
- [x] Startup script created (`start-dev.sh`)

## 🚀 Quick Start

### Option 1: Direct Command
```bash
npm run dev
```
Then open: **http://localhost:5173**

### Option 2: Using Startup Script
```bash
./start-dev.sh
```

## ⚙️ Configuration Required

### Update `.env.local`
Before running `npm run dev`, update the environment variables in `.env.local`:

```env
# YOUR_STRAPI_API_HOST - typically:
# - Local: http://localhost:1337
# - Remote: https://your-strapi-instance.com
VITE_API_HOST=http://localhost:1337

# YOUR_STRAPI_API_TOKEN - Get this from Strapi admin panel
# Settings → Users & Permissions Plugin → Tokens
VITE_API_TOKEN=your_actual_token_here

# Frontend URL (for canonical links and redirects)
VITE_HOST=http://localhost:5173
```

## 📋 Available Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run dev -- --open   # Start and auto-open in browser

# Building
npm run build           # Create production build
npm run preview         # Preview production build locally

# Code Quality
npm run check           # TypeScript/Svelte type checking
npm run check:watch     # Type checking in watch mode
npm run lint            # Prettier + ESLint validation
npm run format          # Auto-format all code

# Testing
npm run test:unit       # Run unit tests (Vitest)
npm run test:e2e        # Run integration tests (Playwright)
npm run test            # Run all tests
```

## 🔧 Troubleshooting

### "API calls returning 401/403"
- Verify `VITE_API_TOKEN` is correct in `.env.local`
- Check that Strapi instance is running and accessible
- Confirm token hasn't expired in Strapi admin panel

### "Cannot find module '~lib'"
- Run `svelte-kit sync` to regenerate alias mappings
- Ensure `tsconfig.json` path aliases are configured (already done)

### "Port 5173 already in use"
- Change port: `npm run dev -- --port 5174`
- Or kill the process using port 5173

### Build fails with TypeScript errors
- Run `npm run check` to see detailed errors
- Run `npm run format` to fix formatting issues
- Check that all imports use correct alias paths (`~lib`, `~`)

## 📁 Project Structure

- `src/routes/` - Page routes (file-based routing)
- `src/lib/services/` - Strapi API calls
- `src/lib/components/` - Reusable UI components
- `src/lib/types/` - TypeScript interfaces
- `src/lib/styles/` - SCSS variables and styling
- `e2e/` - End-to-end tests
- `static/` - Static assets (sitemap, robots.txt, images)

## 📚 Documentation

- See `.github/copilot-instructions.md` for comprehensive development patterns
- See `README.md` for project overview
- Check individual component files for usage examples

## ✨ Ready to Develop

Your project is fully configured and ready! Just:
1. Update `.env.local` with your Strapi credentials
2. Run `npm run dev`
3. Open http://localhost:5173 in your browser

Happy coding! 🎉
