import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/mct',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
