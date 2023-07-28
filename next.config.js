/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'www.usnews.com'
      },
      {
        protocol: "https",
        hostname: "d1xn1bcogdo8ve.cloudfront.net"
      },
      {
        protocol: "https",
        hostname: "research-assets.cbinsights.com"
      }
    ]
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "next/router": "next-router-mock",
    };
    return config;
  },
};

module.exports = nextConfig;
