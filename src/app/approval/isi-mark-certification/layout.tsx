import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'ISI Mark Certification - Get Expert Guidance With JR Compliance',
  description: 'Looking for ISI Mark Certification in India? JR Compliance helps businesses to get certification approval quickly and smoothly. Apply today.',
  keywords: 'ISI Mark Certification, ISI Mark Certification in India, ISI Certificate, ISI Mark, ISI Certification Consultant.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/isi-mark-certification',
  },
  openGraph: {
    title: 'ISI Mark Certification - Get Expert Guidance With JR Compliance',
    description: 'JR Compliance guarantees to provide you with complete support in acquiring the ISI mark-a mark for safety.',
    url: 'https://www.jrcompliance.com/approval/isi-mark-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const isiProductSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "ISI Mark Certification - Get Expert Guidance With JR Compliance",
  "image": "https://www.jrcompliance.com/JRlogo2.png",
  "description": "Looking for ISI Mark Certification in India? JR Compliance helps businesses to get certification approval quickly and smoothly. Apply today.",
  "brand": {
    "@type": "Brand",
    "name": "JR Compliance"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "31546"
  }
};

export default function ISICertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="isi-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(isiProductSchema) }}
      />
      {children}
    </>
  );
}
