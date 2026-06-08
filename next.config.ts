import type { NextConfig } from "next";

// @ts-ignore
const rootDir = typeof __dirname !== "undefined" ? __dirname : process.cwd();

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;



