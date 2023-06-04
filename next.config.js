/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ttf$/i,
      type: "assets/font",
    });
    return config;
  },
}

module.exports = nextConfig


/**
 * react-PDF
 * 
 * webpack: (config) => {
    config.module.rules.push({
      test: /\.ttf$/i,
      type: "assets/font",
    });
    return config;
  },
 */