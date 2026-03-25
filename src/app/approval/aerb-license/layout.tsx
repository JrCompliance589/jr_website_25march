import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'How to Get AERB License | AERB Certificate Registration Consultants',
  description: 'We make the AERB license registration hassle-free. Get your AERB certificate today from best consultants. Click here to know how to get AERB approvals and know AERB certificate registration process.',
  keywords: 'AERB license, Atomic Energy Regulatory Board, AERB certificate, radiation equipment license, AERB consultants',
  alternates: {
    canonical: 'https://www.jrcompliance.com/approval/aerb-license',
  },
  openGraph: {
    title: 'How to Get AERB License | AERB Certificate Registration Consultants',
    description: 'We make the AERB license registration hassle-free. Get your AERB certificate today from best consultants.',
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
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AERB License Consultant in India",
  "image": "https://jrcompliance.com/JRlogo2.png",
  "description": "With JR Compliance, get your AERB (Atomic Energy Regulatory Board) license. We guarantee obedience to safety requirements and help with applications for approvals about nuclear plants, medical X-ray machines, and radiation equipment.",
  "brand": {
    "@type": "Brand",
    "name": "JR Compliance"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.2",
      "bestRating": "5"
    },
    "author": {
      "@type": "Organization",
      "name": "JR Compliance"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.2",
    "reviewCount": "37"
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
