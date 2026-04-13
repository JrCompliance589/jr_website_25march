import AdGlobalTemplate from '@/components/AdGlobalTemplate';

export default function FMCSCertificationLP() {
  return (
    <AdGlobalTemplate
      title="FMCS Certification"
      subtitle="BIS certification scheme for foreign manufacturers. Sell your products in India with a valid FMCS license — we handle everything as your AIR."
      description="The Foreign Manufacturers Certification Scheme (FMCS) allows overseas manufacturers to obtain BIS certification and use the ISI Mark on their products sold in India. As your Authorized Indian Representative (AIR), JR Compliance manages the entire process from application to approval."
      color="purple"
      formName="FMCS Certification - Google Ads - Global-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      process={[
        { step: 'Eligibility Assessment', description: 'Evaluate your products and determine applicable Indian standards for FMCS.' },
        { step: 'AIR Appointment', description: 'Appoint JR Compliance as your Authorized Indian Representative (AIR).' },
        { step: 'Documentation', description: 'Prepare technical files, test reports, and complete the application.' },
        { step: 'Application Submission', description: 'Submit the application to BIS through the official portal.' },
        { step: 'Factory Audit', description: 'BIS officials conduct factory inspection at your overseas facility.' },
        { step: 'License Grant', description: 'Receive FMCS license to use ISI Mark and sell products in India.' },
      ]}
      eligibleSection={{
        sectionId: 'eligible-countries',
        title: 'Approved Origin Countries',
        subtitle: 'Foreign manufacturers from these regions have successfully obtained FMCS certification through JR Compliance.',
        items: [
          'China & Hong Kong',
          'South Korea',
          'Japan',
          'Taiwan',
          'United States',
          'Germany & EU Countries',
          'United Kingdom',
          'Turkey',
          'Vietnam',
          'Thailand',
          'Malaysia',
          'Singapore',
        ],
      }}
      documents={[
        'Application Form with AIR details',
        'AIR Authorization Letter',
        'Company registration documents',
        'Factory layout & infrastructure details',
        'Quality Control Manual',
        'Production process documents',
        'Product test reports from BIS labs',
        'Test equipment calibration reports',
      ]}
      faqs={[
        { question: 'What is FMCS Certificate?', answer: 'Foreign Manufacturers Certification Scheme (FMCS) is a BIS scheme that allows manufacturers located outside India to obtain certification for products manufactured overseas.' },
        { question: 'Is AIR mandatory for FMCS?', answer: 'Yes, an Authorized Indian Representative (AIR) is mandatory. Without an AIR appointed in India, BIS will not process the application.' },
        { question: 'How long does FMCS BIS Certification take?', answer: 'FMCS certification typically takes 4-6 months depending on documentation readiness and BIS factory audit scheduling.' },
        { question: 'What is the validity of the FMCS license?', answer: 'The FMCS license is valid for 2 years initially and can be renewed through surveillance audits and annual testing.' },
        { question: 'Can I sell without FMCS in India?', answer: 'No, products under mandatory BIS certification cannot be sold, imported, or distributed in India without a valid FMCS license.' },
      ]}
      whyJrText="JR Compliance is the trusted AIR partner for foreign manufacturers entering the Indian market. With 15+ years of experience and 2500+ FMCS certifications, we understand the unique challenges faced by international companies. From documentation to factory audit coordination, we handle the entire FMCS process so you can focus on your business. Trusted by Philips, Samsung, Bosch, Siemens, and hundreds of global brands."
    />
  );
}
