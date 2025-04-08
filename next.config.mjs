/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export
  trailingSlash: true, // Good for static hosting
  basePath: '/dgtalistsnew', // 👈 Important
  assetPrefix: '/dgtalistsnew', // 👈 Super important
};


export default nextConfig;
