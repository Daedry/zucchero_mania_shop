import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    }
  },
  images: {
    domains: ["static.wixstatic.com"], // ✅ Aggiunto il dominio di Wix
  },
};

export default nextConfig;
