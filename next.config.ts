import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/approval/bis-certification/fmcs-bis-certification',
        destination: '/approval/fmcs-certification',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
