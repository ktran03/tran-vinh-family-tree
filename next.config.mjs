const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",  // ✅ Required for GitHub Pages static export
  assetPrefix: isProd ? "/tran-vinh-family-tree/" : "", // ✅ Correct repo name
  basePath: isProd ? "/tran-vinh-family-tree" : "", // ✅ Fixes relative paths
  images: {
    unoptimized: true, // ✅ Required for static hosting
  },
};