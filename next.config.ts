import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  basePath: isDev ? "" : "/web-huynhminhtri",
};

export default nextConfig;
