// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/mypage/org-contents/next-app',
  basePath: '/mypage/org-contents/next-app',
  reactStrictMode: true,
  trailingSlash: true,
  // swcMinify は削除（Next.js 15では不要）
  images: {
    unoptimized: true,
    domains: ["images.microcms-assets.io"],
  },
  // 環境変数プレフィックスを NEXT_PUBLIC_ に変更
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.NEXT_PUBLIC_MICROCMS_API_KEY
  }
};

export default nextConfig;

// next.config.mjs
