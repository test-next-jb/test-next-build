import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    trailingSlash: true,
    distDir: "build",
    ...(process.env.NODE_ENV === "production" && { output: "export" }),
};

export default nextConfig;
