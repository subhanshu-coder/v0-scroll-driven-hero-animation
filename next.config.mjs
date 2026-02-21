/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tells Next.js to generate static HTML
  basePath: '/v0-scroll-driven-hero-animation', // REPLACE with your actual repository name
  images: {
    unoptimized: true, // GitHub Pages doesn't support the default Next.js Image Optimization
  },
};

export default nextConfig;