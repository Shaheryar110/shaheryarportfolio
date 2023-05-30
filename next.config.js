/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // outDir: "./build",
};
const withImages = require("next-images");

module.exports = { nextConfig, withImages };

