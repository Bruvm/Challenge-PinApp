import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/(.*)',
        destination: 'api/server.js',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/product/:sku',
        destination: '/product/:sku',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
