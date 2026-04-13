import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Get AERB License Online | AERB Certificate For X-Ray',
  description: 'Get your AERB License today from the best consultants. Visit today for hassle-free AERB approvals and know the AERB certificate registration process for x-ray.',
  keywords: 'AERB License, AERB Certificate, AERB Certification, AERB Registration, Atomic Energy Regulatory Board, AERB License Consultant, AERB Approval, AERB Certificate For X-Ray',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/aerb-license',
  },
  openGraph: {
    title: 'Get AERB License Online | AERB Certificate For X-Ray',
    description: 'Get your AERB License today from the best consultants. Visit today for hassle-free AERB approvals and know the AERB certificate registration process for x-ray.',
    url: 'https://www.jrcompliance.com/approval/aerb-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

const aerbFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an AERB License?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An AERB License is an authorization issued by the Atomic Energy Regulatory Board (AERB) of India, allowing organizations to handle, install, or operate radiation-emitting equipment like X-ray machines and other radiological devices."
      }
    },
    {
      "@type": "Question",
      "name": "What are the documents required for an AERB License application?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will need documents such as equipment details, layout plans, radiation safety officer (RSO) approval, installation reports, and manufacturer certificates. JR Compliance helps you prepare and submit all required documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Does the AERB License need renewal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, the AERB License must be renewed periodically to ensure ongoing compliance with safety standards and regulatory requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How can JR Compliance help in obtaining the AERB License?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our experts assist in every step — from document preparation, application submission, and follow-up to approval. We ensure 100% compliance with AERB regulations."
      }
    }
  ]
};

const aerbBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "WebPage",
        "@id": "https://www.jrcompliance.com/",
        "url": "https://www.jrcompliance.com/",
        "name": "Home"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "WebPage",
        "@id": "https://www.jrcompliance.com/approval",
        "url": "https://www.jrcompliance.com/approval",
        "name": "Approval"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "WebPage",
        "@id": "https://www.jrcompliance.com/approval/aerb-license",
        "url": "https://www.jrcompliance.com/approval/aerb-license",
        "name": "AERB License Consultant in India"
      }
    }
  ]
};

const aerbProductSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Get AERB License Online | AERB Certificate For X-Ray",
  "image": "https://www.jrcompliance.com/JRlogo2.png",
  "description": "Get your AERB License today from the best consultants. Visit today for hassle-free AERB approvals and know the AERB certificate registration process for x-ray.",
  "brand": {
    "@type": "Brand",
    "name": "JR Compliance"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "106"
  }
};

export default function AERBLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        id="aerb-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aerbFaqSchema) }}
      />
      <Script
        id="aerb-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aerbBreadcrumbSchema) }}
      />
      <Script
        id="aerb-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aerbProductSchema) }}
      />
      {children}
    </>
  );
}
