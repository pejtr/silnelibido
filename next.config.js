/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.proerecta.cz', 'upload.wikimedia.org'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
