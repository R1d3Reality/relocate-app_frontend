/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
    NEXT_PUBLIC_STRAPI_URL_PURE: process.env.NEXT_PUBLIC_STRAPI_URL_PURE,
  },
}

module.exports = nextConfig
