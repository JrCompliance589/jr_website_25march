import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/approval/bis-certification/fmcs-bis-certification',
        destination: '/approval/fmcs-certification',
        permanent: true,
      },
      {
        source: '/approval/isi-certificate',
        destination: '/approval/isi-mark-certification',
        permanent: true,
      },
      {
        source: '/approval/bis-certification/crs-certification',
        destination: '/approval/bis-crs-registration',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
