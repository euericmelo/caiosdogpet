import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // O monorepo Dev Martins tem um package-lock.json na raiz, e sem isto o
  // Turbopack elege a raiz como workspace e resolve os caminhos errados.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
