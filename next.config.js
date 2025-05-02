/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(heic)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

module.exports = nextConfig; 