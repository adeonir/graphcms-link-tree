/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'media.graphcms.com'],
  },
}

module.exports = nextConfig
