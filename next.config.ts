/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable TypeScript support
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
