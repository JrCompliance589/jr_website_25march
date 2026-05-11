import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIS Certification | BIS Certification Process | BIS Certification Services',
  description: 'Get BIS certification services from the best Consultants in India known for trusted guidance, 100% compliance, and the best results for businesses.',
  keywords: 'BIS certification, BIS registration, BIS consultants, ISI mark, CRS certification, Bureau of Indian Standards',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/bis-certification',
  },
  openGraph: {
    title: 'BIS Certification | BIS Certification Process | BIS Certification Services',
    description: 'Get BIS certification services from the best Consultants in India known for trusted guidance, 100% compliance, and the best results for businesses.',
    url: 'https://www.jrcompliance.com/approval/bis-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BISCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
