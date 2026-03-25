import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function AERBLandingPage() {
  return (
    <AdLandingTemplate
      title="AERB License"
      subtitle="Radiation safety licensing support for equipment and facilities regulated by AERB. Quotes in seconds — call now."
      description="Get expert AERB licensing assistance for radiation-generating equipment. From initial application on eLORA portal to final approval, our team handles it all."
      color="orange"
      formName="AERB Registration - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Mandatory for radiation equipment',
        'X-ray machine registration',
        'Industrial radiography license',
        'Medical radiation equipment',
        'Expert regulatory guidance',
        'Radiation safety compliance',
        'Quick processing',
        'Renewal support',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Equipment Identification', description: 'Identify radiation equipment requiring AERB license.' },
        { step: 'RSO Appointment', description: 'Appoint qualified Radiation Safety Officer.' },
        { step: 'Documentation', description: 'Prepare safety documents and layout plans.' },
        { step: 'AERB Application', description: 'Submit application on eLORA portal.' },
        { step: 'License Grant', description: 'Receive AERB license after inspection.' },
      ]}
      documents={[
        'Company registration documents',
        'Equipment specifications',
        'Layout plan with shielding details',
        'RSO qualification documents',
        'Radiation safety procedures',
        'Personnel monitoring arrangements',
        'Waste disposal plan',
        'Previous license (if renewal)',
      ]}
      faqs={[
        { question: 'What is AERB license?', answer: 'AERB license is mandatory authorization for possessing and using radiation generating equipment and radioactive sources.' },
        { question: 'Who needs AERB license?', answer: 'Hospitals, diagnostic centers, industries using X-ray/gamma ray equipment, and research facilities need AERB license.' },
        { question: 'What is RSO?', answer: 'RSO (Radiation Safety Officer) is a qualified person responsible for radiation safety at the facility.' },
        { question: 'How long does AERB license take?', answer: 'AERB license typically takes 2-4 months depending on equipment type and documentation.' },
        { question: 'What is the validity of AERB license?', answer: 'AERB license validity varies from 1-5 years depending on equipment category.' },
      ]}
      whyJrText="JR Compliance provides comprehensive support for obtaining Atomic Energy Regulatory Board licenses for radiation-generating equipment and facilities. Our radiation safety experts guide you through the entire licensing process, from initial application on the eLORA portal to final approval. We assist with Radiation Safety Officer (RSO) requirements, facility layout planning, and shielding calculations to meet AERB safety standards."
    />
  );
}
