import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["scontent-cdg4-2.xx.fbcdn.net", "fbcdn.net"], // Ajoute les sous-domaines de Facebook
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fbcdn.net", // Permet tous les sous-domaines
      },
    ],
  },
};

export default nextConfig;
