'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ISICertificationPage() {
  return (
    <ServicePageTemplate
      title="ISI Certification"
      subtitle="Product Safety Certification under ISI Standards"
      logo="/services_logo/isi.png"
      color="emerald"
      description="Ensuring products comply with Indian safety standards required for ISI mark certification."
      serviceInfo="Our certification experts at JR Compliance provide complete support for obtaining the prestigious ISI Mark, which signifies conformity to Indian Standards. We guide manufacturers through comprehensive product testing at BIS-recognized laboratories, factory inspection preparation, and quality management system implementation. Our team handles all documentation requirements, application filing on the BIS portal, and coordination with BIS officers throughout the certification process. We assist with scheme selection including Scheme-I for domestic manufacturers and Scheme-II for foreign manufacturers, ensuring your manufacturing processes meet all required standards. Our consultants provide regular updates and address any queries that arise during the evaluation. Post-certification, we offer renewal support, surveillance audit preparation, and ongoing compliance maintenance services."
      stats={[
        { value: '3500+', label: 'ISI Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' },
      ]}
      trustedBy={['Havells', 'Crompton', 'Bajaj', 'Orient', 'V-Guard']}
      benefits={[
        'Enhanced product credibility with ISI Mark',
        'Legal compliance for mandatory products',
        'Competitive market advantage',
        'Access to government procurement',
        'Consumer trust and confidence',
        'Quality assurance certification',
        'Nationwide recognition',
        'Protection against counterfeit claims',
        'Institutional sales eligibility',
      ]}
      process={[
        { step: 'Initial Consultation', description: 'We assess your product category and determine applicable IS standards.' },
        { step: 'Documentation Preparation', description: 'Compile technical files, test reports, and factory documentation.' },
        { step: 'Application Submission', description: 'Submit application with all necessary documents to BIS.' },
        { step: 'Product Testing', description: 'Products undergo testing at BIS-recognized laboratories.' },
        { step: 'Factory Inspection', description: 'BIS officials inspect manufacturing facility for compliance.' },
        { step: 'ISI Mark Grant', description: 'Upon approval, license to use ISI Mark is granted.' },
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
          answer: 'ISI (Indian Standards Institute) certification, now managed by BIS, confirms that products meet specified Indian Standards. The ISI Mark is a certification mark for industrial products.',
        },
        {
          question: 'Is ISI mandatory for all products?',
          answer: 'ISI is mandatory for products under the mandatory certification scheme like electrical appliances, cement, LPG cylinders, and others. For other products, it\'s voluntary but recommended.',
        },
        {
          question: 'How long does ISI certification take?',
          answer: 'The process typically takes 3-6 months depending on product complexity, testing requirements, and documentation readiness.',
        },
        {
          question: 'How long is ISI license valid?',
          answer: 'The ISI license is valid for 1-2 years initially and can be renewed upon satisfactory surveillance audits.',
        },
        {
          question: 'Can foreign manufacturers get ISI certification?',
          answer: 'Yes, foreign manufacturers can obtain ISI certification through the Foreign Manufacturers Certification Scheme (FMCS) with an authorized Indian representative.',
        },
      ]}
    />
  );
}
