import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CDSCO Registration | Medical Device Registration - Certificate',
  description: 'We make the MDR license procedure hassle-free to ensure customer satisfaction. Click here to know how to get a CDSCO registration. Get your CDSCO certificate today.',
  keywords: 'CDSCO registration, medical device registration, MDR license, CDSCO certificate, medical device rules',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/cdsco-registration',
  },
  openGraph: {
    title: 'CDSCO Registration | Medical Device Registration - Certificate',
    description: 'We make the MDR license procedure hassle-free to ensure customer satisfaction. Get your CDSCO certificate today.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CDSCORegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
