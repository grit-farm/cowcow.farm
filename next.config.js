/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ozdpdjrffqiiapyoinrt.supabase.co"],
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
