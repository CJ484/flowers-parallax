import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    implementation: 'sass-embedded',
  }
};

export default nextConfig;
