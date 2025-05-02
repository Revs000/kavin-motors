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
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig; 