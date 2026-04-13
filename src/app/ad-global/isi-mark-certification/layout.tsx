import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISI Mark Certification – Expert Consultation | JR Compliance',
  description: 'Get ISI Mark Certification for your products with expert guidance from JR Compliance. Trusted by 5000+ businesses with 15+ years of experience.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.jrcompliance.com/ad-global/isi-mark-certification',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
