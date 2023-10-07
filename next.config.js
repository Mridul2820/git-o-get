const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    CLOUD_NAME: process.env.CLOUD_NAME,
    BASE_IMAGE_URL: process.env.BASE_IMAGE_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  publicRuntimeConfig: {},
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["localhost", "avatars.githubusercontent.com","www.google.com"],
  },

  webpack: (config) => {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["public"] = path.join(__dirname, "public");

    return config;
  },
};
