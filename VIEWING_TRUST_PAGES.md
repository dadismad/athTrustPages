# How to View the Trust Pages Locally

## Quick Start

To see your new trust pages in action:

### 1. Start the Development Server
```bash
npm run dev
```

The server will start on: **http://localhost:5173** (or similar port shown in terminal)

### 2. Visit the New Pages

Once the dev server is running, navigate to:

| Page | URL |
|------|-----|
| **About Us** | http://localhost:5173/about-us |
| **Contact Us** | http://localhost:5173/contact-us |
| **Privacy Policy** | http://localhost:5173/privacy-policy |

Or find them via the navigation:
- **Header**: Click "About" in the main navigation (desktop view)
- **Footer**: Click any of the three links at the bottom of the page

## Page Overview

### ✅ About Us Page
A comprehensive page covering:
- ATH.live mission and values
- What makes us different
- Content strategy
- Company promises
- Link to Contact Us page

### ✅ Contact Us Page
A complete contact hub featuring:
- Contact form with category selection
- Multiple contact method information
- Editorial guidelines
- Business collaboration info
- Correction process
- Contributor opportunities
- Privacy inquiries section

### ✅ Privacy Policy Page
Full compliance documentation including:
- Data collection practices
- How information is used
- Security measures
- User rights (GDPR/CCPA)
- Cryptoasset investment disclaimer
- Clear, scannable sections

## Testing Checklist

- [ ] Page loads without errors (check browser console with F12)
- [ ] All internal links work (About → Contact, Contact → Privacy, etc.)
- [ ] Footer links navigate correctly
- [ ] Header "About" link appears and works
- [ ] Pages are mobile responsive (test with F12 → Toggle Device Toolbar)
- [ ] Text is readable with good contrast
- [ ] Forms display properly (Contact page)
- [ ] Cards/sections have proper spacing

## Important Notes

### Environment Setup Required
The pages will work, but to see the full layout with actual content connections:
1. Update `.env.local` with Strapi credentials (if needed)
2. Ensure the Footer loads (it requires VITE_HOST)
3. Images will use placeholder paths until configured

### Contact Form
The contact form on `/contact-us` is **UI-ready** but requires backend integration:
- Currently shows success message on submit
- To send actual emails, you'll need to:
  1. Create a server endpoint (e.g., `/api/contact`)
  2. Integrate with email service (SendGrid, AWS SES, etc.)
  3. Add form validation

### Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## File Locations

```
src/routes/
├── about-us/
│   ├── +page.ts          ← SEO metadata
│   └── +page.svelte      ← Page component
├── contact-us/
│   ├── +page.ts          ← SEO metadata
│   └── +page.svelte      ← Page component with form
└── privacy-policy/
    ├── +page.ts          ← SEO metadata
    └── +page.svelte      ← Page component
```

## Customization Tips

### Change Links or Contact Info
Edit the corresponding `+page.svelte` file:
```svelte
// Example: Change email in Contact Us
<a href="mailto:info@ath.live">info@ath.live</a>
```

### Update Content
All text is directly in the `.svelte` files - easily editable with your preferred editor.

### Modify Styling
Each page has custom SCSS in a `<style>` block at the bottom. Edit colors, spacing, fonts, etc. there.

### SEO Metadata
Edit the `+page.ts` files to update:
- Page title
- Meta description
- Canonical URL

## Production Deployment

When deploying to production:

1. **Update Environment Variables**
   ```
   VITE_API_HOST=https://your-strapi-instance.com
   VITE_HOST=https://ath.live
   ```

2. **Update SEO Image URLs**
   - Replace placeholder `{apiHost}/uploads/ath-logo.png` with actual image path

3. **Setup Contact Form Endpoint**
   - Create `/api/contact` route (or your preferred endpoint)
   - Implement email service integration

4. **Update Sitemap**
   - Add the three new pages to `static/sitemap.xml`:
   ```xml
   <url>
     <loc>https://ath.live/about-us</loc>
   </url>
   <url>
     <loc>https://ath.live/contact-us</loc>
   </url>
   <url>
     <loc>https://ath.live/privacy-policy</loc>
   </url>
   ```

5. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Other relevant search engines

## Troubleshooting

**Pages not loading?**
- Check that `npm run dev` is running without errors
- Verify port is correct (check terminal output)
- Check browser console (F12) for errors

**Links not working?**
- Ensure `VITE_HOST` is set in `.env.local`
- Check that relative paths match (use `{host}` variable)

**Form not submitting?**
- Form currently shows success message locally
- Backend endpoint needed for actual form processing
- Check browser console for errors

**Mobile layout looks wrong?**
- Bootstrap responsive classes should handle it
- Test with F12 Device Toolbar
- Check CSS isn't being overridden elsewhere

## Next Steps

1. ✅ **View pages locally** - Test everything works
2. 📧 **Setup contact form** - Implement email service
3. 🔍 **SEO fine-tuning** - Adjust titles/descriptions as needed
4. 📱 **Mobile testing** - Verify all pages on different devices
5. 🚀 **Deploy to production** - Follow deployment checklist above

---

**Your trust pages are ready for local testing!** 🎉

Start the dev server and navigate to any of the three pages to see them in action.

