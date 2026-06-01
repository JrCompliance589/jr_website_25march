import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'EPR Registration - Certified Consultant India',
  description:
    'Get BIS certification for your products with JR Compliance. We handle BIS registration, testing & all documentation across India.',
  keywords:
    'EPR Registration, EPR Certificate, EPR License, EPR Certification, EPR Registration Certificate, EPR Registration In India',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/epr-registration',
  },
  openGraph: {
    title: 'EPR Registration - Certified Consultant India',
    description:
      'Get BIS certification for your products with JR Compliance. We handle BIS registration, testing & all documentation across India.',
    url: 'https://www.jrcompliance.com/approval/epr-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const eprRegistrationProductSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'EPR Registration - Certified Consultant India',
  image: 'https://www.jrcompliance.com/JRlogo2.png',
  description:
    'Get BIS certification for your products with JR Compliance. We handle BIS registration, testing & all documentation across India',
  brand: {
    '@type': 'Brand',
    name: 'JR Compliance',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '112',
  },
};

export default function EPRRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="epr-registration-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eprRegistrationProductSchema) }}
      />
      {children}
    </>
  );
}