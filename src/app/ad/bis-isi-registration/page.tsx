import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function BISISIRegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="BIS ISI Registration"
      subtitle="Get your products ISI Mark certified for the Indian market. Fast processing, expert documentation, complete audit support."
      description="ISI Mark certification by BIS is mandatory for products under compulsory certification. It assures consumers of safety and quality compliance. JR Compliance offers end-to-end ISI Mark registration with 15+ years of expertise."
      color="emerald"
      formName="BIS ISI - Google Ads - Main LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Legal authorization to use ISI Mark',
        'Mandatory for compulsory certification products',
        'Consumer trust & brand credibility',
        'Access to government tenders',
        'Compliance with Indian safety standards',
        'Competitive advantage in the market',
        'Pan-India product acceptance',
        'Expert guidance through BIS audit',
        'Renewal & surveillance support',
      ]}
      process={[
        { step: 'Product Assessment', description: 'Identify applicable Indian Standard (IS) for your product.' },
        { step: 'Documentation', description: 'Prepare technical files, QC manual and supporting records.' },
        { step: 'Lab Testing', description: 'Test samples at BIS-approved laboratories against IS specifications.' },
        { step: 'Application Filing', description: 'Submit the ISI application on BIS Manak portal.' },
        { step: 'Factory Audit', description: 'Support BIS officer during factory inspection & sample drawal.' },
        { step: 'License Grant', description: 'Receive ISI Mark license and start using the mark on products.' },
      ]}
      documents={[
        'Company incorporation & factory ownership proof',
        'Factory layout and machinery list',
        'Quality Control (QC) manual',
        'Test equipment calibration certificates',
        'In-house test records & reports',
        'Product technical specifications',
        'Authorized signatory KYC',
        'Trademark / brand ownership proof',
      ]}
      faqs={[
        { question: 'What is ISI Mark certification?', answer: 'ISI Mark is a certification mark issued by the Bureau of Indian Standards confirming a product conforms to the relevant Indian Standard (IS) specification.' },
        { question: 'Which products require ISI Mark?', answer: 'Products like steel, cement, electrical appliances, LPG cylinders, packaged drinking water, helmets, and many more covered under mandatory certification require ISI Mark.' },
        { question: 'How long does ISI Mark registration take?', answer: 'ISI Mark certification typically takes 3-4 months depending on product testing, documentation readiness, and factory audit scheduling.' },
        { question: 'What is the validity of ISI license?', answer: 'The ISI Mark license is issued for 1 year initially and can be renewed for up to 2 years based on compliance and surveillance.' },
        { question: 'Is factory inspection mandatory?', answer: 'Yes, BIS officers inspect the factory, verify in-house testing capability, draw samples, and assess the quality control system before granting the license.' },
      ]}
      whyJrText="JR Compliance is a trusted ISI Mark certification consultancy with 15+ years of experience across diverse industries. Our experts help identify the correct IS standard, prepare robust documentation, coordinate lab testing, and support factory audits. We ensure your facility is audit-ready with complete QC manuals, test record formats, and calibration schedules. Post-certification, we provide renewal, surveillance, and compliance support so your ISI license stays uninterrupted."
    />
  );
}
