/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'kilometer-image.s3.ap-northeast-2.amazonaws.com',
      'ssl.pstatic.net',
    ],
  },

  // ReactDOMServer does not yet support Suspense 해결
  experimental: {
    concurrentFeatures: true,
  },
  // CORS 해결
  async rewrites() {
    return [
      {
        destination: process.env.BACK_URL,
        source: process.env.SOURCE_PATH,
      },
    ];
  },
};

module.exports = nextConfig;