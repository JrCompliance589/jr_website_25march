'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FMCSCertificationPage() {
  return (
    <ServicePageTemplate
      title="FMCS Certification"
      subtitle="Bis Certification Scheme For Foreign Manufacturers"
      logo="/services_logo/fmcs.png"
      color="purple"
      description="The Foreign Manufacturers Certification Scheme (FMCS) is a certificate offered to foreign manufacturers by the Bureau of Indian Standards (BIS). Foreign manufacturers can use the BIS Standard Mark on their products to sell them in the Indian market. Manufacturers who are located outside India and want to export or sell products to India need to get FMCS Certification. This BIS Standard Mark can be used by a manufacturer to demonstrate that a product complies with relevant Indian Standards once they have approval."
      serviceInfo="JR Compliance specializes in helping foreign manufacturers to avail BIS Certification to set foot in the Indian market. From the initial application to final approval, we, as your Authorized Indian Representative (AIR), take care of all regulatory requirements on your behalf. Your overseas manufacturing facilities will be in compliance with BIS standards and requirements, our team manages the coordination of factory inspections. We create extensive documentation, coordinate product testing at reputable labs, and communicate with Bureau of Indian Standards officials frequently. Our FMCS certification consultant offers custom solutions to expedite your process because they are aware of the particular difficulties faced by International companies. Post-certification, we offer complete AIR services including compliance monitoring, annual renewal management, and representation during any regulatory proceedings."
      stats={[
        { value: '2500+', label: 'FMCS Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      trustedBy={['Philips', 'Samsung', 'Bosch', 'Siemens', 'Haier']}
      benefits={[
        'Access to Indian market for foreign firms',
        'ISI Mark credibility with consumers',
        'Legal compliance for imports',
        'Competitive edge in Indian market',
        'AIR services included',
        'Factory audit preparation support',
        'Documentation assistance',
        'Quick certification process',
        'Ongoing compliance management',
      ]}
      process={[
        { step: 'Eligibility Assessment', description: 'We evaluate your products and determine applicable required standards.' },
        { step: 'AIR Appointment', description: 'Appoint our team as your Authorized Indian Representative.' },
        { step: 'Documentation', description: 'Prepare technical files, test reports, and application documents.' },
        { step: 'Application Submission', description: 'Submit complete application to BIS through official portal.' },
        { step: 'Factory Audit', description: 'Officials conduct factory inspection at your overseas facility.' },
        { step: 'License Grant', description: 'Receive FMCS license to use ISI Mark in India.' },
      ]}
      documents={[
        'Application Form with AIR Details',
        'Test Equipment Calibration Reports',
        'AIR Authorization Letter',
        'Factory Layout & Infrastructure',
        'Quality Control Manual',
        'Company Registration Documents',
        'Production Process Documents',
        'Product Test Reports from BIS Labs',
      ]}
      faqs={[
        {
          question: 'What is FMCS Certificate?',
          answer: 'Foreign Manufacturers Certification Scheme (FMCS) is a Bureau of Indian Standards scheme that allows external manufacturers to obtain FMCS Certificate for products manufactured outside India.',
        },
        {
          question: 'Is AIR mandatory for FMCS?',
          answer: 'Yes, an Authorized Indian Representative (AIR) appointed to represent foreign enterprises in India for all their certificate matters. If the manufacturer is located outside of India without an AIR the application will not be processed by BIS.',
        },
        {
          question: 'How long does FMCS BIS Certification take?',
          answer: 'This certification typically takes 4-6 months depending on documentation readiness and BIS factory audit scheduling.',
        },
        {
          question: 'What is the validity of the FMC license?',
          answer: 'This license is valid for 2 years initially and can be renewed through surveillance audits and annual testing.',
        },
        {
          question: 'Can I sell without FMCS in India?',
          answer: 'No, products under mandatory BIS mark certificate cannot be sold, imported, or distributed in India without a valid BIS FMCS license.',
        },
      ]}
    />
  );
}
