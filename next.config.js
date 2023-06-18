/** @type {import('next').NextConfig} */
const SITE = require('./src/config.js').SITE;
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: SITE.trailingSlash,
    basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',
  
    swcMinify: true,
    poweredByHeader: false,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
        },
      ],
    },
    experimental: { appDir: true ,typedRoutes: true},
    compiler: {
      styledComponents: true,
    }
}

module.exports = nextConfig
