import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FMCS Certification | Get BIS Approval for Foreign Manufacturers',
  description:
    'Get quick FMCS Certification for foreign manufacturers. End-to-end support with documentation & registration process. Apply today !',
  keywords:
    'FMCS Certification, FMCS license, FMCS certification consultant, FMCS BIS Certification',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/fmcs-certification',
  },
};

export default function FMCSCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: 'FMCS Certification | Get BIS Approval for Foreign Manufacturers',
            image: 'https://www.jrcompliance.com/JRlogo2.png',
            description:
              'Get quick FMCS Certification for foreign manufacturers. End-to-end support with documentation & registration process. Apply today.',
            brand: {
              '@type': 'Brand',
              name: 'JR Compliance',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.1',
              bestRating: '5',
              worstRating: '1',
              ratingCount: '32541',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
