import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR Certificate | EPR Registration - A Certificate For E-Waste Management | Extended Producer Responsibility',
  description: 'We make the EPR certification procedure hassle-free to ensure customer satisfaction. Click here to know how to get an EPR certificate. Get your EPR Registration today.',
  keywords: 'EPR certificate, EPR registration, e-waste management, extended producer responsibility, EPR compliance',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/epr-certification',
  },
  openGraph: {
    title: 'EPR Certificate | EPR Registration - Extended Producer Responsibility',
    description: 'We make the EPR certification procedure hassle-free to ensure customer satisfaction. Get your EPR Registration today.',
    url: 'https://www.jrcompliance.com/approval/epr-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function EPRCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
