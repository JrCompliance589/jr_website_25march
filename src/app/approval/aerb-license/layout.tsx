import type { Metadata } from 'next';

const title = 'AERB License Consultant | AERB Certificate for X-Ray';
const description =
  'Looking for an AERB Certificate for X-ray? Our AERB License Consultants handle registration, certification & approval end-to-end. Get a free consultation.';
const url = 'https://www.jrcompliance.com/approval/aerb-license';

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'AERB License, AERB Certificate, AERB License Consultant, AERB Certification, AERB Approval, AERB Registration, AERB Certificate For X Ray',
  robots: 'index,follow',
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const aerbLicenseSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.jrcompliance.com/#organization',
      name: 'JR Compliance',
      url: 'https://www.jrcompliance.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.jrcompliance.com/JRlogo2.png',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-1800-121-410-410',
        contactType: 'Customer Service',
        email: 'info@jrcompliance.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      sameAs: [
        'https://www.facebook.com/jrcompliance',
        'https://x.com/JrCompliance',
        'https://www.linkedin.com/company/jr-compliance-%26-testing-labs',
        'https://www.instagram.com/jrcompliance',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.jrcompliance.com/#website',
      url: 'https://www.jrcompliance.com/',
      name: 'JR Compliance',
      publisher: {
        '@id': 'https://www.jrcompliance.com/#organization',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.jrcompliance.com/approval/aerb-license/#webpage',
      url,
      name: title,
      description:
        'Looking for an AERB Certificate for X-ray? Our AERB License Consultants handle registration, certification, approvals, renewals and amendments across India.',
      keywords: [
        'AERB License',
        'AERB Certificate',
        'AERB Registration',
        'AERB Approval',
        'AERB License Consultant',
        'AERB Certificate for X-Ray',
      ],
      inLanguage: 'en-IN',
      image: 'https://www.jrcompliance.com/images/aerb-license.jpg',
      isPartOf: {
        '@id': 'https://www.jrcompliance.com/#website',
      },
      about: {
        '@id': 'https://www.jrcompliance.com/approval/aerb-license/#service',
      },
      breadcrumb: {
        '@id': 'https://www.jrcompliance.com/approval/aerb-license/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.jrcompliance.com/approval/aerb-license/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.jrcompliance.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AERB License',
          item: url,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.jrcompliance.com/approval/aerb-license/#service',
      name: 'AERB License Consultant',
      serviceType: 'AERB Licensing & Registration Consultancy',
      description:
        'JR Compliance provides consultancy for AERB registration, certification, approvals, renewals and amendments for hospitals, diagnostic centres, dental clinics and industrial radiography facilities across India.',
      url,
      image: 'https://www.jrcompliance.com/images/aerb-license.jpg',
      provider: {
        '@id': 'https://www.jrcompliance.com/#organization',
      },
      mainEntityOfPage: {
        '@id': 'https://www.jrcompliance.com/approval/aerb-license/#webpage',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      offers: {
        '@type': 'Offer',
        url,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AERB Licensing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AERB Certificate for X-Ray',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AERB Registration for Medical Radiation Equipment',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial Radiography AERB License',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'AERB License Renewal & Amendment',
            },
          },
        ],
      },
    },
  ],
};

export default function AERBLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        id="aerb-license-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aerbLicenseSchema) }}
      />
      {children}
    </>
  );
}
