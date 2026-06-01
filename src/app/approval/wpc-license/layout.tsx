import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'WPC License –  Apply Online With Expert Guidance',
  description:
    'Get WPC License for your wireless and telecom products with JR Compliance. Fast processing, complete documentation support, expert consultants across India.',
  keywords:
    'WPC License, WPC Certification, WPC Approval, WPC ETA Certificate, WPC Consultant',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/wpc-license',
  },
  openGraph: {
    title: 'WPC License –  Apply Online With Expert Guidance',
    description:
      'Get WPC License for your wireless and telecom products with JR Compliance. Fast processing, complete documentation support, expert consultants across India.',
    url: 'https://www.jrcompliance.com/approval/wpc-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const wpcLicenseProductSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'WPC License –  Apply Online With Expert Guidance',
  image: 'https://www.jrcompliance.com/JRlogo2.png',
  description:
    'Get WPC License for your wireless and telecom products with JR Compliance. Fast processing, complete documentation support, expert consultants across India.',
  brand: {
    '@type': 'Brand',
    name: 'JR Compliance',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.3',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1698',
  },
};

export default function WPCLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="wpc-license-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(wpcLicenseProductSchema) }}
      />
      {children}
    </>
  );
}