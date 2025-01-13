const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
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


