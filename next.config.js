/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bricks.axudastudio.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
}

module.exports = nextConfig
