/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async redirects() {
    return [
      {
        source: '/categories',
        destination: '/',
        permanent: true,
      },
      {
        source: '/subcategories',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
