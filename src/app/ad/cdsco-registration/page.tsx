import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function CDSCORegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="CDSCO Registration"
      subtitle="Expert CDSCO registration support for medical devices under MDR 2017. Get your devices approved fast."
      description="Navigate the complex Medical Device Rules 2017 with JR Compliance. From device classification to SUGAM portal submission, we handle everything."
      color="blue"
      formName="CDSCO medical devices - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Legal market access for medical devices',
        'Patient safety compliance',
        'Market credibility with healthcare providers',
        'Competitive advantage in medical sector',
        'Access to hospital & clinic networks',
        'Government tender eligibility',
        'MDR 2017 compliance',
        'Expert regulatory guidance',
        'Streamlined approval process',
      ]}
      process={[
        { step: 'Product Classification', description: 'Determine device classification (A, B, C, D) under MDR 2017.' },
        { step: 'Document Preparation', description: 'Compile technical file, clinical data, and regulatory documents.' },
        { step: 'SUGAM Portal Registration', description: 'Create account and submit application on CDSCO portal.' },
        { step: 'Application Review', description: 'CDSCO reviews application and may request additional information.' },
        { step: 'Plant Inspection', description: 'Facility inspection for Class C and D devices (if applicable).' },
        { step: 'Registration Grant', description: 'Receive CDSCO registration certificate for your device.' },
      ]}
      documents={[
        'Application Form',
        'Device Master File',
        'ISO 13485 Certificate',
        'Free Sale Certificate',
        'Declaration of Conformity',
        'Clinical Evidence/Data',
        'Device Labeling & IFU',
        'Authorized Agent Agreement',
      ]}
      faqs={[
        { question: 'What is CDSCO registration?', answer: 'CDSCO (Central Drugs Standard Control Organization) registration is mandatory approval for manufacturing, importing, or selling medical devices in India under Medical Devices Rules, 2017.' },
        { question: 'What are device classification classes?', answer: 'MDR 2017 classifies devices into Class A (low risk), Class B (moderate risk), Class C (high risk), and Class D (very high risk) based on intended use and risk level.' },
        { question: 'How long does CDSCO registration take?', answer: 'Timeline varies by class: Class A takes 2-3 months, Class B takes 3-4 months, Class C/D may take 6-12 months including inspections.' },
        { question: 'Is ISO 13485 mandatory?', answer: 'ISO 13485 certification is mandatory for Class B, C, and D medical devices. Class A devices are exempt from this requirement.' },
        { question: 'What is the validity of CDSCO registration?', answer: 'CDSCO registration is valid for 5 years and must be renewed before expiry to continue selling in India.' },
      ]}
      whyJrText="JR Compliance's regulatory experts specialize in navigating the complex Medical Device Rules 2017 and Drug & Cosmetics Act requirements for your medical devices. We provide complete support from device classification and risk assessment to clinical evidence compilation and SUGAM portal submissions. Our team coordinates with notified bodies, manages comprehensive technical documentation, and handles all communication with CDSCO authorities on your behalf."
    />
  );
}
