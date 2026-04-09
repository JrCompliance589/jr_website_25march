import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'BIS CRS Registration | Process | Required Documents',
  description:
    'Get BIS CRS Registration from our compliance experts with error-free documentation, and smooth CRS approval for your products.',
  keywords:
    'BIS CRS Registration, BIS CRS Certification, CRS Registration, CRS BIS, BIS CRS Certificate',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/bis-crs-registration',
  },
  openGraph: {
    title: 'BIS CRS Registration | Process | Required Documents',
    description:
      'Get BIS CRS Registration from our compliance experts with error-free documentation, and smooth CRS approval for your products.',
    url: 'https://www.jrcompliance.com/approval/bis-crs-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const crsProductSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'BIS CRS Registration | Process | Required Documents',
  image: 'https://www.jrcompliance.com/JRlogo2.png',
  description:
    ' Get BIS CRS Registration from our compliance experts with error-free documentation, and smooth CRS approval for your products.',
  brand: {
    '@type': 'Brand',
    name: 'JR Compliance',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.0',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '29546',
  },
};

export default function BISCRSRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="bis-crs-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crsProductSchema) }}
      />
      {children}
    </>
  );
}
