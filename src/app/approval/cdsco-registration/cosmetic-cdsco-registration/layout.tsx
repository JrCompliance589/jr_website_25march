import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COSMETIC CDSCO REGISTRATION | Cosmetic Product Registration',
  description: 'Looking for expert assistance in Cosmetic Cdsco Registration? Click to know all about Cosmetic Cdsco Registration.',
  keywords: 'cosmetic CDSCO registration, cosmetic product registration, cosmetic import license, CDSCO cosmetics',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/cdsco-registration/cosmetic-cdsco-registration',
  },
  openGraph: {
    title: 'COSMETIC CDSCO REGISTRATION | Cosmetic Product Registration',
    description: 'Looking for expert assistance in Cosmetic Cdsco Registration?',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration/cosmetic-cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CosmeticCDSCOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
