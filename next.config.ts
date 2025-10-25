import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',  // if you're using this too
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // Add this
      },

      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**", // Matches all GitHub avatar URLs
      },
    ],
  },
};

export default nextConfig;
