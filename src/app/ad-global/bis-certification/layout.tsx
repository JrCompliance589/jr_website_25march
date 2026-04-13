import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIS Certification – Expert Consultation | JR Compliance',
  description: 'Get BIS Certification for your products with expert guidance from JR Compliance. Fast processing, complete documentation support & 15+ years of experience.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.jrcompliance.com/ad-global/bis-certification',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
