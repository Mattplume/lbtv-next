import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "scontent-cdg4-2.xx.fbcdn.net",
      "fbcdn.net",
      "images.prismic.io" // Ajout du domaine Prismic
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
};

export default nextConfig;
