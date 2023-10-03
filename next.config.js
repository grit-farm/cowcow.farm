/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
