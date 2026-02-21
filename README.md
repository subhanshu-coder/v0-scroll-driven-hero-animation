# ITZFIZZ - Scroll-Driven Hero Section Animation

A premium scroll-driven hero section animation project featuring smooth scroll-based interactions, GSAP animations, and a responsive design. This project demonstrates advanced frontend animation techniques with vanilla JavaScript, CSS, and modern tooling.

## 🎯 Project Overview

**ITZFIZZ** is a high-performance hero section showcasing:
- Scroll-triggered animations with GSAP ScrollTrigger
- Smooth parallax and transform-based motion
- Custom cursor interactions
- Responsive design with Tailwind CSS
- Premium visual effects (grain, gradients, perspective grids)
- Performance-optimized animations using `transform` properties

### Live Demo
[View Live Demo](https://yourusername.github.io/itzfizz)

## ✨ Key Features

### 1. **Scroll-Based Animation**
- Car element moves based on scroll position
- Smooth easing and interpolation
- Uses GSAP ScrollTrigger for performance

### 2. **Initial Load Animation**
- Staggered headline reveal
- Animated statistics entrance
- Smooth fade and movement effects

### 3. **Visual Elements**
- Custom cursor (dot + ring)
- Progress bar at page top
- Perspective grid floor
- Horizon glow line
- Film grain overlay
- Headlight beam effects
- Speed streaks

### 4. **Interactive Features**
- Scroll progress indicator
- Dynamic scroll hints
- Responsive typography
- Accessibility-friendly markup

## 📋 Functional Requirements (Met)

✅ Hero section occupies full viewport  
✅ Letter-spaced headline animation  
✅ Impact metrics/statistics display  
✅ Smooth initial load animations  
✅ Scroll-based element movement  
✅ Easing and interpolation for natural motion  
✅ Transform-based animations for performance  
✅ Professional, premium feel  

## 🛠️ Tech Stack

### Required
- **HTML5** - Semantic structure
- **CSS3** - Advanced styling (gradients, filters, transforms)
- **JavaScript** - Vanilla JS with GSAP
- **GSAP** - Animation library with ScrollTrigger
- **Tailwind CSS** - Utility-first CSS framework (optional, for Next.js version)

### Optional (Plus Points)
- **Next.js/React.js** - Can be adapted to React version
- **Bootstrap** - For layout assistance (not used in this version)

## 📦 Installation & Setup

### Option 1: Using the HTML File Directly

1. Clone the repository
```bash
git clone https://github.com/yourusername/itzfizz.git
cd itzfizz
```

2. Open in a local server (required for performance)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using Live Server (VS Code extension)
# Right-click index.html → Open with Live Server
```

3. Visit `http://localhost:8000` in your browser

### Option 2: Using with Next.js

If using the Next.js version:

```bash
npm install
# or
pnpm install

npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
itzfizz/
├── public/
│   └── index.html           # Main scroll animation demo
├── src/
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   └── HeroSection.tsx  # React version (optional)
│   └── app/
│       └── page.tsx         # Next.js version (optional)
├── .gitignore               # Git ignore rules
├── package.json             # Project metadata
├── README.md                # This file
└── GITHUB_SETUP_GUIDE.md    # Step-by-step GitHub setup
```

## 🚀 Performance Optimization

### Techniques Used
- **CSS Transforms Only**: All animations use `transform` and `opacity` for 60fps performance
- **Will-change**: Applied to animated elements
- **GPU Acceleration**: Perspective and 3D transforms enable GPU rendering
- **Debounced Scroll Events**: GSAP ScrollTrigger handles efficient scroll handling
- **Lazy Loading**: Consider lazy-loading images for production

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## 🎨 Customization

### Color Scheme
Edit the CSS variables in `<style>` section:
```css
:root {
  --bg:    #05050a;      /* Dark background */
  --gold:  #d4a843;      /* Primary accent */
  --red:   #e03820;      /* Secondary accent */
  --cream: #ede8dc;      /* Text color */
  --dim:   rgba(237,232,220,0.38);   /* Muted text */
  --line:  rgba(212,168,67,0.15);    /* Border color */
}
```

### Typography
Modify font sizes and weights in CSS classes:
- `.hl-text` - Headline text
- `.stat-num` - Statistics numbers
- `.logo` - Logo styling

### Animation Duration
Adjust GSAP animation timings:
```javascript
// In JavaScript section
gsap.to(element, { duration: 1.2, /* animation props */ });
```

### Scroll Sensitivity
Modify the scroll container height:
```javascript
// In CSS: #page { height: 500vh; }
// Change 500vh to control scroll animation range
```

## 📱 Responsive Design

The design uses `clamp()` for fluid responsive sizing:
- Headlines: `clamp(46px, 7.8vw, 118px)`
- Statistics: `clamp(40px, 5vw, 64px)`
- Adapts seamlessly from mobile to desktop

## ♿ Accessibility

- Semantic HTML structure
- High contrast ratios (WCAG AA compliant)
- Cursor hint for scroll interaction
- No auto-playing audio/animations
- Keyboard navigation compatible

## 🐛 Troubleshooting

### Animation Not Playing
- Ensure you're using a local server (not file://)
- Check browser console for GSAP loading errors
- Verify GSAP library is loaded from CDN

### Performance Issues
- Reduce scroll container height (#page height)
- Disable grain overlay for lower-end devices
- Use DevTools Performance tab to profile

### Responsive Issues
- Test on actual devices, not just DevTools
- Check viewport meta tag is present
- Verify Tailwind/CSS media queries

## 📝 Assignment Checklist

- [x] Hero section layout with full viewport height
- [x] Letter-spaced headline ("W E L C O M E I T Z F I Z Z")
- [x] Impact metrics/statistics display
- [x] Smooth initial load animations
- [x] Staggered animation for statistics
- [x] Scroll-based animation tied to scroll progress
- [x] Natural easing/interpolation
- [x] Transform-based animations for performance
- [x] Clean, readable, well-structured code
- [x] Hosted on GitHub Pages
- [x] GSAP integration
- [x] Vanilla HTML/CSS/JavaScript core

## 📄 License

MIT License - Feel free to use this project for personal and commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues, questions, or suggestions, please open a GitHub Issue.

---

**Built with ❤️ for smooth animations and premium interactions**

Last Updated: 2026
