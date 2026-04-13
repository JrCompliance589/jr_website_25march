import AdGlobalTemplate from '@/components/AdGlobalTemplate';

export default function BISCertificationLP() {
  return (
    <AdGlobalTemplate
      title="BIS Certification"
      subtitle="Ensuring product compliance with Indian quality & safety standards. Get BIS certified — fast quotes, expert support."
      description="BIS Certification from Bureau of Indian Standards is mandatory for products sold in India. Whether it's ISI Mark, CRS, or FMCS — our team handles the entire process from documentation to approval. Trusted by 5000+ manufacturers worldwide."
      color="cyan"
      formName="BIS Certification - Google Ads - Global-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      process={[
        { step: 'Product Analysis', description: 'Analyze your product to determine applicable BIS standards and certification scheme.' },
        { step: 'Lab Testing', description: 'Coordinate product testing at BIS-recognized laboratories to verify compliance.' },
        { step: 'Documentation', description: 'Prepare and compile all required technical documents and test reports.' },
        { step: 'Application Filing', description: 'Submit the complete application to BIS through the official portal.' },
        { step: 'Factory Inspection', description: 'Coordinate and prepare for BIS factory audit at your manufacturing facility.' },
        { step: 'Certification Grant', description: 'Receive your BIS certificate and start selling in the Indian market.' },
      ]}
      eligibleSection={{
        sectionId: 'eligible-products',
        title: 'Eligible Products',
        subtitle: 'Products that require mandatory BIS certification before sale in India.',
        items: [
          'Electronics & IT Products',
          'Steel & Steel Products',
          'Cement & Building Materials',
          'Batteries & Cells',
          'Toys & Children Products',
          'Footwear & Leather Goods',
          'Electrical Appliances',
          'Automotive Components',
          'Food Products & Packaged Goods',
          'Cables & Wires',
          'LED & Lighting Products',
          'Safety Equipment & PPE',
        ],
      }}
      documents={[
        'Company incorporation documents',
        'Factory/manufacturing unit details',
        'Product specifications & technical data',
        'Quality management system documents',
        'Test equipment calibration certificates',
        'Product test reports from BIS labs',
        'Authorization letter for Indian representative',
        'Brand ownership proof',
      ]}
      faqs={[
        { question: 'What products require BIS certification?', answer: 'Electronics, IT products, steel, cement, batteries, toys, footwear, and many other products require BIS certification. The list is regularly updated by the government.' },
        { question: 'What is the difference between ISI Mark and CRS?', answer: 'ISI Mark is for domestic manufacturers following quality standards. CRS (Compulsory Registration Scheme) is specifically for electronic and IT products.' },
        { question: 'How long does BIS registration take?', answer: 'BIS registration typically takes 3-6 months depending on product category, testing requirements, and factory audit scheduling.' },
        { question: 'Can foreign manufacturers get BIS certification?', answer: 'Yes, foreign manufacturers can obtain BIS certification through the FMCS scheme with an Authorized Indian Representative (AIR).' },
        { question: 'What is the validity of BIS certification?', answer: 'BIS certification is typically valid for 1-2 years and must be renewed before expiry to continue selling in India.' },
      ]}
      whyJrText="JR Compliance is India's leading BIS certification consultancy with 15+ years of experience and 5000+ successful certifications. Our expert team guides manufacturers through every step — from initial product assessment to final BIS approval. We handle documentation, lab coordination, factory inspection preparation, and application filing. Trusted by global brands like Sony, Tata, Sennheiser, and more."
    />
  );
}
