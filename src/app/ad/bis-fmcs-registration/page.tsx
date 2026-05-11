import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function BISFMCSRegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="BIS FMCS Registration"
      subtitle="BIS certification for foreign manufacturers. Sell your products in India with a valid FMCS license — we act as your AIR."
      description="The Foreign Manufacturers Certification Scheme (FMCS) allows overseas manufacturers to obtain BIS certification and use the ISI Mark on products sold in India. As your Authorized Indian Representative (AIR), JR Compliance manages the entire process end-to-end."
      color="purple"
      formName="BIS FMCS - Google Ads - Main LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Legal access to the Indian market',
        'Authorization to use ISI Mark',
        'AIR representation by JR Compliance',
        'Factory audit coordination',
        'Single point of contact with BIS',
        'Support for renewal & surveillance',
        'Compliance with BIS FMCS regulations',
        'Faster market entry for global brands',
        'Pan-industry experience (electronics, steel, cement, etc.)',
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Confirm product coverage and applicable Indian Standard.' },
        { step: 'AIR Appointment', description: 'Appoint JR Compliance as your Authorized Indian Representative.' },
        { step: 'Documentation', description: 'Prepare technical files, QC manual, and application forms.' },
        { step: 'Application Submission', description: 'Submit FMCS application on BIS Manak online portal.' },
        { step: 'Factory Audit', description: 'BIS officers conduct audit at overseas manufacturing facility.' },
        { step: 'License Grant', description: 'Receive FMCS license to use ISI Mark in India.' },
      ]}
      documents={[
        'Application form with AIR details',
        'AIR authorization letter',
        'Company registration documents',
        'Factory layout & infrastructure details',
        'Quality Control (QC) manual',
        'Production process documents',
        'Product test reports from BIS labs',
        'Test equipment calibration reports',
      ]}
      faqs={[
        { question: 'What is BIS FMCS certification?', answer: 'FMCS (Foreign Manufacturers Certification Scheme) is a BIS scheme allowing manufacturers outside India to obtain ISI Mark certification for products sold in India.' },
        { question: 'Is an AIR mandatory for FMCS?', answer: 'Yes, foreign manufacturers must appoint an Authorized Indian Representative (AIR) resident in India before applying for FMCS.' },
        { question: 'How long does FMCS registration take?', answer: 'FMCS typically takes 6-9 months including documentation, application processing, lab testing, and BIS factory audit.' },
        { question: 'What is the validity of FMCS license?', answer: 'The FMCS license is initially valid for 2 years and can be renewed after surveillance audits and successful annual compliance.' },
        { question: 'Can I sell without FMCS in India?', answer: 'No. Products under mandatory BIS certification cannot be sold, imported, or distributed in India without a valid FMCS license or equivalent.' },
      ]}
      whyJrText="JR Compliance is a trusted AIR partner for foreign manufacturers entering the Indian market. With 15+ years of experience and 2500+ FMCS certifications, we understand the unique challenges faced by overseas companies. We manage documentation, factory audit coordination with BIS officers, lab testing, renewals, and all communication with BIS — so you can focus on your core business. Trusted by Philips, Samsung, Bosch, Siemens, and hundreds of global brands."
    />
  );
}
