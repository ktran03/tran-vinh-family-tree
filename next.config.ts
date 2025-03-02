/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "./", // Ensures CSS and assets are correctly loaded in static mode
};

export default nextConfig;