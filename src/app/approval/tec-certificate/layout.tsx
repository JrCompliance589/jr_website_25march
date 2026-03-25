import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEC Certificate | TEC Registration | Types, Schemes, and Process',
  description: 'Looking for a reliable consultant who can assist you in obtaining a TEC certificate? Get your TEC Registration today. Click here to know all about TEC certificate registration, Types, and Schemes.',
  keywords: 'TEC certificate, TEC registration, telecom equipment certification, MTCTE, TEC consultants',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/tec-certificate',
  },
  openGraph: {
    title: 'TEC Certificate | TEC Registration | Types, Schemes, and Process',
    description: 'Looking for a reliable consultant who can assist you in obtaining a TEC certificate? Get your TEC Registration today.',
    url: 'https://www.jrcompliance.com/approval/tec-certificate',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TECCertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
