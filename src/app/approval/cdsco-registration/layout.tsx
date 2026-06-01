import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'CDSCO Registration | Medical Device Registration | JR Compliance',
  description:
    'JR Compliance assists with CDSCO registration for medical devices, surgical instruments & diagnostics. Get expert consultants for certification.',
  keywords:
    'CDSCO Registration, CDSCO Medical Devices, CDSCO Certificate, CDSCO Medical Device Registration, CDSCO Licence',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/cdsco-registration',
  },
  openGraph: {
    title: 'CDSCO Registration | Medical Device Registration | JR Compliance',
    description:
      'JR Compliance assists with CDSCO registration for medical devices, surgical instruments & diagnostics. Get expert consultants for certification.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const cdscoProductSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'CDSCO Registration | Medical Device Registration | JR Compliance',
  image: 'https://www.jrcompliance.com/JRlogo2.png',
  description:
    'JR Compliance assists with CDSCO registration for medical devices, surgical instruments & diagnostics. Get expert consultants for certification.',
  brand: {
    '@type': 'Brand',
    name: 'JR Compliance',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '2344',
  },
};

export default function CDSCORegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="cdsco-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cdscoProductSchema) }}
      />
      {children}
    </>
  );
}
