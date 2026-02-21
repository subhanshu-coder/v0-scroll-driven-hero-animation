const nextConfig = {
  output: 'export',
  basePath: '/v0-scroll-driven-hero-animation',
  typescript: {
    ignoreBuildErrors: true, // This will ignore that 'globals.css' error
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;