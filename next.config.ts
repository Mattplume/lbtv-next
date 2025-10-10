import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net", // Pour tous les sous-domaines de fbcdn.net
      },
      {
        protocol: "https",
        hostname: "scontent-cdg4-2.xx.fbcdn.net", // Domaine spécifique de Facebook
      },
      {
        protocol: "https",
        hostname: "images.prismic.io", // Domaine de Prismic
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/news/:path*",
        destination: "https://www.facebook.com/labauletv",
        permanent: false,
      },
      {
        source: "/shows/:path*",
        destination: "https://www.facebook.com/labauletv",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

