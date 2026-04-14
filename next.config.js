/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true
  },
  output: 'export',
  basePath: '/academic-tutoring'
}

export default nextConfig