# Vercel Deployment Guide

Your ATH UI project is ready for Vercel deployment! Follow these simple steps to make your website live.

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in (create account if needed)
2. Click **"+"** icon → **"New repository"**
3. Name it: `ath-ui` (or any name)
4. Click **"Create repository"**
5. Copy the repository URL (looks like: `https://github.com/YOUR-USERNAME/ath-ui.git`)

## Step 2: Push Code to GitHub

In your terminal, run these commands:

```bash
cd /Users/alexandersolianin/Downloads/ath-ui-main\ 2

git remote add origin https://github.com/YOUR-USERNAME/ath-ui.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign up"** (or sign in if you have an account)
3. Choose **"Sign up with GitHub"**
4. Authorize Vercel to access GitHub
5. Click **"Add New..."** → **"Project"**
6. Select your `ath-ui` repository
7. Click **"Import"**

**Configuration (important):**
- **Framework Preset**: SvelteKit
- **Build Command**: `npm run build`
- **Output Directory**: `.svelte-kit/output`

Click **"Deploy"** and wait 2-3 minutes!

## Step 4: Get Your Live URL

After deployment completes, Vercel gives you a URL like:
```
https://ath-ui.vercel.app
```

**Send this to your client** — they can access your website from anywhere in the world!

## Environment Variables (Important)

If you're using Strapi API (for news articles, events, etc.):

1. In Vercel dashboard, go to **Project Settings** → **Environment Variables**
2. Add these variables:
   - `VITE_API_HOST`: `http://localhost:1337` (or your live Strapi URL)
   - `VITE_API_TOKEN`: Your Strapi API token
   - `VITE_HOST`: Your deployed Vercel URL (e.g., `https://ath-ui.vercel.app`)

3. Click **"Save"**
4. Redeploy to apply changes

## Automatic Updates

From now on, whenever you:
1. Update code locally
2. Commit: `git commit -m "message"`
3. Push: `git push`

**Vercel automatically deploys the new version** — no manual steps needed!

## Troubleshooting

**Build fails?**
- Check Vercel logs (Deployments tab → see error details)
- Ensure `npm run build` works locally first

**API not working?**
- Verify environment variables are set correctly
- Check VITE_API_HOST points to working Strapi server

**Page looks different?**
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Wait for Vercel deployment to fully complete

## Your Live Site

**Client can now visit:**
```
https://ath-ui.vercel.app
```

✅ No port numbers needed!
✅ Works from any country!
✅ Always available (24/7)!
