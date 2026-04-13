import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMCS Certification – Foreign Manufacturer BIS License | JR Compliance',
  description: 'Get FMCS Certification for your products with expert AIR services from JR Compliance. BIS certification for foreign manufacturers entering India.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.jrcompliance.com/ad-global/fmcs-certification',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
