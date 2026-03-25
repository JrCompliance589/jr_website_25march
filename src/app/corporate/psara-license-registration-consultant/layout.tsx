import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PSARA License Registration Consultant - JR Compliance',
  description: 'JR Compliance can help you obtain your Private Security Agency License (PSARA). Our knowledgeable experts help you secure PSARA licenses throughout India, guarantee compliance to the Private Security Agencies Regulation Act of 2005, and simplify your security company operations.',
  keywords: 'PSARA license, private security agency, security license, PSARA registration',
  alternates: {
    canonical: 'https://www.jrcompliance.com/corporate/psara-license-registration-consultant',
  },
  openGraph: {
    title: 'PSARA License Registration Consultant - JR Compliance',
    description: 'JR Compliance can help you obtain your Private Security Agency License (PSARA). Our knowledgeable experts help you secure PSARA licenses throughout India.',
    url: 'https://www.jrcompliance.com/corporate/psara-license-registration-consultant',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PSARALicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
