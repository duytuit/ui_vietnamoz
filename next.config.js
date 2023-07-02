/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // webpack: (config, options) => {
  //   config.externals.push({
  //     'react-hook-form': 'react-hook-form',
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
