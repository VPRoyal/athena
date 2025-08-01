import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove or comment out the static-export mode
  // output: "export",

  // Keep any other options you need
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
