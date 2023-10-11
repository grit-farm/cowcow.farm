/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
