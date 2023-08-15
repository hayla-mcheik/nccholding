/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export', // Corrected the output option value to use string 'export'
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '/',
  }
};

module.exports = nextConfig;
