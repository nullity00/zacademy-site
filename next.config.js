/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Since you're using styled-components
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig