'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function GPTAdBISCertificationPage() {
  return (
    <ServicePageTemplate
      title="BIS Certification"
      contactPopupDelayMs={3000}
      landingPageMode
      subtitle="Ensuring Product Compliance with BIS Standards"
      logo="/services_logo/bis.png"
      color="cyan"
      description="Helping manufacturers meet Indian quality and safety standards through structured certification and ongoing compliance support."
      serviceInfo="At JR Compliance, our team of experienced BIS consultants guides you through every step of the certification process, from initial product assessment to final approval. We handle all documentation requirements, coordinate with BIS-recognized laboratories for product testing, and ensure your application meets all regulatory standards. With our deep understanding of Indian Standards and BIS procedures, we minimize delays and help you achieve certification efficiently. Our dedicated support team provides regular updates throughout the process and assists with any queries from BIS officials. Post-certification, we offer comprehensive renewal management, surveillance audit preparation, and assistance with amendments or expansions to your product range."
      benefits={[
        'Expert product evaluation',
        'Complete documentation support',
        'Factory inspection coordination',
        'Sample testing facilitation',
        'Quick processing and follow-up',
        'Surveillance audit support',
        'License renewal services',
        'Multi-product certification',
        'Foreign manufacturer registration',
      ]}
      process={[
        { step: 'Product Analysis', description: 'Analyze product to determine applicable BIS standards.' },
        { step: 'Testing', description: 'Coordinate product testing at BIS-recognized labs.' },
        { step: 'Application', description: 'Prepare and submit application with test reports.' },
        { step: 'Certification', description: 'Receive BIS certificate after approval.' },
      ]}
      documents={[
        'Company incorporation documents',
        'Factory/manufacturing details',
        'Product specifications and technical documents',
        'Quality management system documents',
        'Test equipment calibration certificates',
        'Previous test reports (if any)',
        'Authorization letter for Indian representative',
        'Brand ownership proof',
      ]}
      faqs={[
        {
          question: 'What products require BIS certification?',
          answer: 'Electronics, IT products, steel, cement, batteries, toys, footwear, and many other products require BIS certification. The list is regularly updated by the government.',
        },
        {
          question: 'What is the difference between ISI Mark and CRS?',
          answer: 'ISI Mark is for domestic manufacturers following quality standards. CRS (Compulsory Registration Scheme) is specifically for electronic and IT products.',
        },
        {
          question: 'How long does BIS registration take?',
          answer: 'BIS registration typically takes 3-6 months depending on product category, testing requirements, and factory audit scheduling.',
        },
        {
          question: 'Can foreign manufacturers get BIS certification?',
          answer: 'Yes, foreign manufacturers can obtain BIS certification through an Authorized Indian Representative (AIR).',
        },
      ]}
    />
  );
}
