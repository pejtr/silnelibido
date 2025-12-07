/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.proerecta.cz', 'upload.wikimedia.org'],
    unoptimized: true, // This is important for static export
  },
  output: 'export', // Explicitly set output to export
}

module.exports = nextConfig
