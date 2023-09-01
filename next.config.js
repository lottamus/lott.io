/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer");
const { withSentryConfig } = require("@sentry/nextjs");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    serverActions: true,
  },

  modularizeImports: {
    "@fortawesome/free-solid-svg-icons": {
      transform: "@fortawesome/free-solid-svg-icons/{{member}}",
      preventFullImport: true,
      skipDefaultConversion: true,
    },
    "@fortawesome/free-regular-svg-icons": {
      transform: "@fortawesome/free-regular-svg-icons/{{member}}",
      preventFullImport: true,
      skipDefaultConversion: true,
    },
    "@fortawesome/free-brands-svg-icons": {
      transform: "@fortawesome/free-brands-svg-icons/{{member}}",
      preventFullImport: true,
      skipDefaultConversion: true,
    },
  },

  async redirects() {
    return [
      {
        source: "/tools",
        destination: "/stack",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/cal/embed.js",
        destination: "https://app.cal.com/embed/embed.js",
      },
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ];
  },
};

nextConfig = withContentlayer(nextConfig);

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  nextConfig.sentry = {
    hideSourceMaps: true,
    tunnelRoute: "/api/reporter",
  };

  nextConfig = withSentryConfig(nextConfig, {
    silent: true,
  });
}

if (process.env.ANALYZE === "true") {
  nextConfig = withBundleAnalyzer({
    enabled: true,
  })(nextConfig);
}

module.exports = nextConfig;
