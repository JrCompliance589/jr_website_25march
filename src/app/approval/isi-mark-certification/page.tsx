'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ISICertificationPage() {
  return (
    <ServicePageTemplate
      title="ISI Mark Certification"
      subtitle="Certification for Products Safety under ISI Standards"
      logo="/services_logo/isi.png"
      color="emerald"
      description="The Indian Standards Institute mark, more commonly known as ISI certificate, is issued by the BIS (Bureau of Indian Standards). ISI Mark Certification is a required certification for specific goods sold in the Indian market to ensure that their product or service meets the required standards. Products with ISI mark indicate compliance with quality, safety and reliability standards, making them more reliable and preferred by consumers in the market."
      serviceInfo="JR Compliance is a trusted ISI Certification Consultant that helps businesses to get regulatory approvals in India. With our supported and experienced team, we help manufacturers obtain certification through a simple, efficient, and compliant process."
      stats={[
        { value: '3500+', label: 'ISI Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' },
      ]}
      trustedBy={['Havells', 'Crompton', 'Bajaj', 'Orient', 'V-Guard']}
      benefits={[
        'Guaranteed Product Quality — ISI certificate guarantees products meet all BIS standards, ensuring safety and reliability',
        'Mandatory for Products — Home appliances, packaged drinking water, cement, and pressure cookers require compulsory ISI mark certification before sale in India',
        'Builds Consumer Belief — Consumers look for products with ISI mark compliance because they indicate quality assurance with government standards',
        'Strengthens Brand Credibility — Products with <a href="/approval/bis-certification" style="color:#34d399;text-decoration:underline">BIS Certification</a> in India gain higher market reliability and improved brand influence',
      ]}
      process={[
        { step: 'Initial Consultation', description: 'We assess your product category and determine applicable IS standards.' },
        { step: 'Documentation Preparation', description: 'Compile technical files, test reports, and factory documentation.' },
        { step: 'Application Submission', description: 'Submit application with all necessary documents to BIS.' },
        { step: 'Product Testing', description: 'Products undergo testing at BIS-recognized laboratories.' },
        { step: 'Factory Inspection', description: 'BIS officials inspect manufacturing facilities for compliance.' },
        { step: 'ISI Mark Grant', description: 'Depending on approval, license to utilize ISI Mark is granted.' },
      ]}
      documents={[
        'Application Form',
        'Factory Layout Plan',
        'List of Testing Equipment',
        'Process Flow Chart',
        'Quality Control Manual',
        'Test Reports',
        'Trademark Registration',
        'Company Registration Certificate',
      ]}
      faqs={[
        {
          question: 'What is ISI certification?',
          answer: 'ISI (Indian Standards Institute) certification, now managed by BIS, confirms that products meet specified Indian Standards. This certification mark is used on industrial products.',
        },
        {
          question: 'Is ISI mandatory for all products?',
          answer: 'ISI is mandatory for products under the Compulsory Certification Scheme like electrical equipment, cement, LPG cylinders and others. For other products, it is optional but recommended.',
        },
        {
          question: 'How long does ISI certification take?',
          answer: 'This will take a 3-6 months timeline to complete, depending on the complexity of the product, documentation preparation and testing requirements.',
        },
        {
          question: 'How long is ISI Certification valid?',
          answer: 'The ISI license is valid for 1-2 years initially and can be renewed upon satisfactory surveillance audits.',
        },
        {
          question: 'Can foreign manufacturers get ISI Certification?',
          answer: 'Yes, foreign manufacturers can obtain ISI certification through the Foreign Manufacturers Certification Scheme (FMCS) with an authorized Indian representative.',
        },
      ]}
    />
  );
}
