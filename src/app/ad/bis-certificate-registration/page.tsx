import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function BISRegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="BIS Registration"
      subtitle="Mandatory BIS certification for selling products in India. Fast quotes, expert support, end-to-end handling."
      description="BIS (Bureau of Indian Standards) registration ensures your products meet Indian quality and safety standards. From ISI Mark and CRS to FMCS — our team handles documentation, lab testing, factory audit, and approval."
      color="blue"
      formName="BIS Registration - Google Ads - Main LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Legal market access in India',
        'Mandatory compliance with BIS Act',
        'Enhanced product credibility & trust',
        'Access to government tenders',
        'Brand reputation & consumer confidence',
        'Protection against counterfeit products',
        'Quality assurance recognition',
        'Expert regulatory guidance',
        'End-to-end documentation support',
      ]}
      process={[
        { step: 'Product Analysis', description: 'Identify applicable BIS standards and correct certification scheme.' },
        { step: 'Documentation', description: 'Prepare technical files, QC manual, and supporting documents.' },
        { step: 'Lab Testing', description: 'Test product samples at BIS-recognized laboratories.' },
        { step: 'Application Filing', description: 'Submit complete application through BIS official portal.' },
        { step: 'Factory Inspection', description: 'Coordinate and prepare for BIS audit at manufacturing facility.' },
        { step: 'Certificate Grant', description: 'Receive BIS certificate and start selling in Indian market.' },
      ]}
      documents={[
        'Company incorporation documents',
        'Factory & manufacturing unit details',
        'Product specifications & technical data',
        'Quality management system documents',
        'Test equipment calibration certificates',
        'Product test reports from BIS labs',
        'Authorized signatory KYC',
        'Brand ownership proof',
      ]}
      faqs={[
        { question: 'What is BIS Registration?', answer: 'BIS Registration is mandatory certification from the Bureau of Indian Standards that confirms a product meets Indian safety and quality standards before being sold in India.' },
        { question: 'Which BIS scheme applies to my product?', answer: 'It depends on the product — ISI Mark for domestic products covered under mandatory certification, CRS for electronics & IT products, and FMCS for foreign manufacturers.' },
        { question: 'How long does BIS registration take?', answer: 'Timelines typically range from 4 weeks to 6 months depending on scheme, product testing, and factory audit scheduling.' },
        { question: 'Can foreign manufacturers get BIS certification?', answer: 'Yes, through the FMCS scheme with an Authorized Indian Representative (AIR). JR Compliance acts as your AIR for the process.' },
        { question: 'What is the validity of BIS certification?', answer: 'Validity ranges from 1 to 2 years depending on scheme and product and must be renewed before expiry.' },
      ]}
      whyJrText="JR Compliance is India's leading BIS certification consultancy with 15+ years of experience and 5000+ successful certifications. Our experts guide manufacturers through every step — from product assessment and documentation to lab testing coordination, factory audit preparation, and final approval. We handle all three BIS schemes (ISI, CRS, FMCS) end-to-end, ensuring timely certification and hassle-free market entry. Trusted by Sony, Tata, Sennheiser, and hundreds of global brands."
    />
  );
}
