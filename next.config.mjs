const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/tran-vinh-family-tree/' : '',
  basePath: isProd ? '/tran-vinh-family-tree' : '',
  output: 'export'
};

export default nextConfig;