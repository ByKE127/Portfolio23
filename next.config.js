/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build", //this line will tell the build to create a file with this name
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
