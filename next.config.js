const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sentry: {
    hideSourceMaps: true,
    tunnelRoute: '/api/reporter',
  },

  async rewrites() {
    return [
      {
        source: '/bee.js',
        destination: 'https://cdn.splitbee.io/sb.js',
      },
      {
        source: '/_hive/:slug',
        destination: 'https://hive.splitbee.io/:slug',
      },
    ];
  },
};

module.exports = withSentryConfig(nextConfig, {
  silent: true, // Suppresses all logs
});
