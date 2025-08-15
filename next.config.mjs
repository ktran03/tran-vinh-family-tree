const isProd = process.env.NODE_ENV === 'production';
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: (isProd && !isCustomDomain) ? '/tran-vinh-family-tree/' : '',
  basePath: (isProd && !isCustomDomain) ? '/tran-vinh-family-tree' : '',
  output: 'export'
};

export default nextConfig;