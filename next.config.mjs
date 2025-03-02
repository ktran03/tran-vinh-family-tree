/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/tran-vinh-family-tree",
  assetPrefix: "/tran-vinh-family-tree/",
  images: {
    unoptimized: true,  // Fixes Next.js image optimization issues
  },
};

export default nextConfig;