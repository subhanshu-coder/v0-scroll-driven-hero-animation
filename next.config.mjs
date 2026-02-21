/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-scroll-driven-hero-animation',
  // This ensures the site knows it lives at /v0-scroll-driven-hero-animation/
  images: {
    unoptimized: true,
  },
};

export default nextConfig;