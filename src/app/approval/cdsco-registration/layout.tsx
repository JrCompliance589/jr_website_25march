import type { Metadata } from 'next';

const pageUrl = 'https://www.jrcompliance.com/approval/cdsco-registration';
const pageUrlWithSlash = `${pageUrl}/`;
const pageTitle = 'CDSCO Registration | Medical Device Registration | JR Compliance';
const pageDescription =
  "Get CDSCO Registration with JR Compliance – India's trusted platform. Fast approvals, expert CDSCO registration consultants guidance & 100% compliance.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'CDSCO Registration',
    'CDSCO Medical Devices',
    'CDSCO Medical Device Registration',
    'CDSCO License',
    'CDSCO Certificate',
    'CDSCO Registration consultants',
    'CDSCO Online Registration',
    'CDSCO approval',
  ],
  robots: 'index,follow',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const cdscoSchema = {
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
      '@id': `${pageUrlWithSlash}#webpage`,
      url: pageUrlWithSlash,
      name: pageTitle,
      description: pageDescription,
      keywords: [
        'CDSCO Registration',
        'CDSCO Medical Devices',
        'CDSCO Medical Device Registration',
        'CDSCO License',
        'CDSCO Certificate',
        'CDSCO Registration Consultants',
        'CDSCO Online Registration',
        'CDSCO Approval',
      ],
      inLanguage: 'en-IN',
      image: {
        '@type': 'ImageObject',
        url: 'https://www.jrcompliance.com/images/cdsco-registration.jpg',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://www.jrcompliance.com/images/cdsco-registration.jpg',
      },
      isPartOf: {
        '@id': 'https://www.jrcompliance.com/#website',
      },
      publisher: {
        '@id': 'https://www.jrcompliance.com/#organization',
      },
      about: {
        '@id': `${pageUrlWithSlash}#service`,
      },
      breadcrumb: {
        '@id': `${pageUrlWithSlash}#breadcrumb`,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrlWithSlash}#breadcrumb`,
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
          name: 'CDSCO Registration',
          item: pageUrlWithSlash,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${pageUrlWithSlash}#service`,
      name: 'CDSCO Medical Devices',
      serviceType: 'CDSCO Medical Device Registration',
      description:
        'JR Compliance provides CDSCO Registration, Medical Device Registration, Import License, Manufacturing License, Cosmetic Registration, Renewals and Regulatory Consultancy across India.',
      url: pageUrlWithSlash,
      image: {
        '@type': 'ImageObject',
        url: 'https://www.jrcompliance.com/images/cdsco-registration.jpg',
      },
      provider: {
        '@id': 'https://www.jrcompliance.com/#organization',
      },
      mainEntityOfPage: {
        '@id': `${pageUrlWithSlash}#webpage`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      offers: {
        '@type': 'Offer',
        url: pageUrlWithSlash,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'CDSCO Registration',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CDSCO Medical Devices',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CDSCO License',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CDSCO Certificate',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CDSCO Registration Consultants',
            },
          },
        ],
      },
    },
  ],
};

export default function CDSCORegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cdscoSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
