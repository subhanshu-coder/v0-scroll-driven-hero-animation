/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/v0-scroll-driven-hero-animation',
  images: {
    unoptimized: true,
  },
  // ADD THIS SECTION:
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;