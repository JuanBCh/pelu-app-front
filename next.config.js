/** @type {import('next').NextConfig} */
// const path = require("path");

const nextConfig = {
  // webpack: (config) => {
  //   config.externals = [...config.externals, "bcrypt"];
  //   config.resolve.fallback = { fs: false, dns: false, net: false, tls: false };
  //   return config;
  // },
  // output: "standalone",
  // webpack: (config, { isServer }) => {
  //   config.resolve.alias["@"] = path.join(__dirname, "src");
  //   return config;
  // },
  serverRuntimeConfig: {
    apiUrl: process.env.NEXT_SERVER_API_URL,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
