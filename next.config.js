const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    domains: [],
    formats: ["image/avif", "image/webp"],
  },

  // Standalone build output
  output: "standalone",

  // Redirect rules
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/project",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/client",
        destination: "/clients",
        permanent: true,
      },
    ];
  },

  // Webpack configuration
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
};

module.exports = nextConfig;
