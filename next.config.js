const isProd = process.env.NODE_ENV === 'production';
const prefixPath = !isProd ? '/mypage/org-contents/next-app' : '';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: '/mypage/org-contents/next-app',
  // basePath: '/mypage/org-contents/next-app',
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  images: {
    //loader: 'custom',
    domains: ['images.microcms-assets.io'],
  },
};

module.exports = nextConfig;
