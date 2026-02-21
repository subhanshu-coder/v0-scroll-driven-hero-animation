# 🚀 Deployment Guide - ITZFIZZ

Complete guide to deploy your ITZFIZZ scroll animation project to GitHub Pages and other platforms.

---

## Table of Contents

1. [GitHub Pages Deployment](#github-pages-deployment)
2. [Vercel Deployment](#vercel-deployment)
3. [Netlify Deployment](#netlify-deployment)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Local Testing Before Deployment](#local-testing-before-deployment)
6. [Troubleshooting Deployments](#troubleshooting-deployments)

---

## GitHub Pages Deployment

### ✅ Recommended for This Project

GitHub Pages is perfect for static projects like ITZFIZZ. It's free and integrates seamlessly with GitHub.

### Prerequisites

- ✅ GitHub account
- ✅ Code pushed to GitHub repository
- ✅ Repository must be **PUBLIC** (required for free GitHub Pages)

### Step 1: Repository Setup

1. Go to your repository: `https://github.com/yourusername/itzfizz`
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - **Branch:** `main`
   - **Folder:** `/root` (if index.html is at repository root)
   - **Folder:** `/public` (if index.html is in `/public` folder)
4. Click **Save**

### Step 2: Wait for Deployment

- GitHub will build and deploy your site
- Initial deployment takes 1-2 minutes
- You'll see a green checkmark when done

### Step 3: Access Your Site

Your site is now live at:
```
https://yourusername.github.io/itzfizz
```

### Troubleshooting GitHub Pages

**Site not showing:**
- Verify repository is PUBLIC
- Check Pages settings are configured correctly
- Wait 2-5 minutes and refresh
- Check GitHub Actions tab for build errors

**Files not loading:**
- Ensure all files are committed to Git
- Check file paths in HTML (use relative paths)
- Verify index.html exists in the source folder

**Custom JavaScript not working:**
- Check browser console (F12) for CORS errors
- Verify GSAP CDN is loading (Network tab)
- Ensure no `window.location` changes to absolute URLs

---

## Vercel Deployment

### ✅ Recommended for Next.js Version

Vercel is the platform built by the Next.js creators. Perfect for React/Next.js projects.

### Prerequisites

- ✅ GitHub repository linked
- ✅ Vercel account (free tier available)
- ✅ Code pushed to GitHub

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or sign in with GitHub
3. Click **New Project**
4. Select your `itzfizz` repository
5. Click **Import**

### Step 2: Configure Project

**Build Settings:**
- **Framework:** Next.js (auto-detected)
- **Build Command:** `npm run build` or `pnpm build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` or `pnpm install`

**Environment Variables:**
- Add any `.env` variables needed (if not already added)

**Root Directory:** Leave blank (or set to project root)

### Step 3: Deploy

1. Click **Deploy**
2. Vercel will build and deploy your project
3. Deployment completes in 1-3 minutes

### Step 4: Access Your Site

Your site is live at:
```
https://itzfizz-[random].vercel.app
```

### After Deployment

**Use Production Deployment:**
- Vercel auto-creates preview deployments for branches
- Main branch builds are production
- Check deployment status in Vercel dashboard

**Add Custom Domain:**
1. Go to Vercel project settings
2. Click **Domains**
3. Enter your domain
4. Update DNS at domain registrar

---

## Netlify Deployment

### Alternative Option

Netlify offers similar free static hosting with great features.

### Prerequisites

- ✅ GitHub repository
- ✅ Netlify account (free at netlify.com)

### Step 1: Connect GitHub

1. Go to [netlify.com](https://netlify.com)
2. Click **Sign up** → Choose **GitHub**
3. Authorize Netlify to access your repositories
4. Click **Create site**
5. Select `itzfizz` repository

### Step 2: Configure Build

**Build Settings:**
- **Repository:** itzfizz
- **Branch:** main
- **Build command:** Leave blank (for static site)
- **Publish directory:** `.` or `public/`

### Step 3: Deploy

1. Click **Deploy site**
2. Netlify builds and deploys
3. Get your site URL: `https://random-name.netlify.app`

### Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Update DNS records

---

## Custom Domain Setup

### Purchase Domain

1. Buy domain from:
   - **Namecheap** (affordable)
   - **GoDaddy** (popular)
   - **Google Domains** (simple)

### For GitHub Pages

1. Create file `CNAME` in repository root:
   ```
   yourdomain.com
   ```

2. Push to GitHub:
   ```bash
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

3. Go to domain registrar DNS settings
4. Add CNAME record:
   ```
   Name: www
   Type: CNAME
   Value: yourusername.github.io
   ```

5. Or add A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

6. Wait 24-48 hours for DNS propagation

### For Vercel/Netlify

Both platforms provide instructions after adding domain.

---

## Local Testing Before Deployment

### Test the Entire Site Locally

```bash
# Navigate to project
cd /path/to/itzfizz

# Start local server
python -m http.server 8000
# or
npx http-server
# or
npx live-server
```

### Visit Local Site

Open: `http://localhost:8000`

### Test Features

- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Scroll animation works smoothly
- [ ] Custom cursor appears
- [ ] Statistics animate in
- [ ] Responsive design works on mobile
- [ ] No console errors (F12 → Console)
- [ ] Images/files load correctly (Network tab)
- [ ] GSAP library loads from CDN

### Performance Testing

```bash
# Chrome DevTools
1. Press F12 to open DevTools
2. Go to Performance tab
3. Click Record
4. Scroll the page
5. Click Stop
6. Analyze performance metrics
```

---

## Troubleshooting Deployments

### Issue: Site shows 404

**Solution:**
- Check repository is PUBLIC
- Verify source folder in Pages settings
- Ensure `index.html` exists in source folder
- Wait 2-5 minutes and refresh

### Issue: Animations don't work

**Solution:**
- Check console for CORS errors (F12)
- Verify GSAP CDN URL is accessible
- Check file paths are relative, not absolute
- Test locally first: `python -m http.server 8000`

### Issue: Images/files not loading

**Solution:**
- Verify all files are committed to Git
- Use relative paths: `./images/file.png`
- Don't use absolute paths: `/images/file.png`
- Check file capitalization matches exactly

### Issue: Styles don't apply

**Solution:**
- Verify CSS files are referenced correctly
- Check GitHub Pages source folder
- Clear browser cache (Ctrl+Shift+Delete)
- Test in different browser

### Issue: Custom cursor not working

**Solution:**
- Check JavaScript is enabled
- Verify GSAP is loaded (Network tab)
- Check console for JavaScript errors
- Test locally first

### Issue: Slow performance

**Solution:**
- Optimize images (compress before uploading)
- Reduce animation complexity
- Enable lazy loading for heavy assets
- Check Network tab for slow file loads

### Issue: GitHub Pages says "Your site is ready to be published"

**Solution:**
- Go to Settings → Pages
- Select source branch and folder
- Save settings
- Wait 2-5 minutes

### Issue: Deployment keeps failing

**Solution:**
- Check GitHub Actions logs (Actions tab)
- Look for build errors
- Verify all files are committed
- Test locally first with: `python -m http.server 8000`

---

## Performance Optimization

### Before Deployment

#### 1. Optimize Images
```bash
# Use ImageOptim, TinyPNG, or similar
# Compress all images before deploying
```

#### 2. Minify Code
```bash
# Consider minifying HTML/CSS/JS for production
# Tools: UglifyJS, CleanCSS, HTMLMinifier
```

#### 3. Lazy Load Images
```javascript
// Add loading="lazy" to images
<img src="image.jpg" loading="lazy" alt="description">
```

#### 4. Check Bundle Size
```bash
# For Next.js projects
npm run build

# Check .next/static size
du -sh .next/static
```

### Monitor After Deployment

#### Google Lighthouse
```
1. Go to your deployed site
2. Open DevTools (F12)
3. Click Lighthouse tab
4. Run audit
5. Review performance metrics
```

#### Web Vitals
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

---

## Continuous Deployment

### Auto-Deploy on Push

GitHub Pages and Vercel auto-deploy when you push to main:

```bash
# Make changes locally
git add .
git commit -m "Update animation timing"
git push origin main

# Site auto-deploys in 1-2 minutes
```

### Preview Deployments

Vercel creates preview deployments for pull requests:

1. Create feature branch
2. Make changes
3. Push branch
4. Create Pull Request
5. Vercel creates preview URL
6. Review changes
7. Merge to main when ready
8. Production auto-deploys

---

## Rollback/Revert Deployment

### GitHub Pages

GitHub Pages auto-deploys from your repository. To revert:

```bash
# Revert to previous commit
git revert HEAD

# Or reset to previous commit
git reset --hard <commit-hash>

# Push changes
git push origin main

# Site updates automatically
```

### Vercel

1. Go to Vercel dashboard
2. Select project
3. Click **Deployments** tab
4. Find previous good deployment
5. Click **⋮** → **Promote to Production**

---

## Success Checklist

- [ ] Repository is public
- [ ] Code is pushed to GitHub
- [ ] All files are committed (nothing in `.gitignore` that shouldn't be)
- [ ] Deployment service configured
- [ ] Site is live and accessible
- [ ] All features work correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Custom domain set up (optional)
- [ ] SSL certificate issued (auto for GitHub Pages/Vercel)

---

## Next Steps

1. **Share your site:**
   - Share GitHub profile link
   - Add to portfolio/resume
   - Share on social media

2. **Monitor performance:**
   - Check analytics
   - Test on real devices
   - Gather user feedback

3. **Keep updating:**
   - Push improvements regularly
   - Fix bugs when found
   - Add new features

---

## Additional Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals)

---

**Your ITZFIZZ project is now live to the world! 🎉**
