import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function CDSCOCosmeticLandingPage() {
  return (
    <AdLandingTemplate
      title="CDSCO Cosmetic Registration"
      subtitle="Expert CDSCO cosmetic registration support. Get your cosmetic products legally approved for the Indian market."
      description="Navigate Cosmetics Rules 2020 with ease. From product classification to SUGAM portal submission, our regulatory experts handle the entire process."
      color="purple"
      formName="CDSCO Cosmetic - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Legal authorization to manufacture/import cosmetics',
        'Market access for cosmetic products in India',
        'Compliance with Cosmetics Rules 2020',
        'Import license for foreign cosmetics',
        'Brand credibility with CDSCO approval',
        'Expert regulatory guidance',
        'Quick processing and approval',
        'Complete documentation support',
        'Post-approval compliance assistance',
      ]}
      process={[
        { step: 'Product Classification', description: 'Determine if product is cosmetic or drug under Drugs & Cosmetics Act.' },
        { step: 'Document Preparation', description: 'Compile product formulation, safety data, and manufacturing details.' },
        { step: 'Application Filing', description: 'Submit application on SUGAM portal with required documents.' },
        { step: 'Testing', description: 'Product testing for safety and quality parameters if required.' },
        { step: 'CDSCO Review', description: 'CDSCO reviews application and may request additional information.' },
        { step: 'License Issuance', description: 'Receive manufacturing/import license for cosmetic products.' },
      ]}
      documents={[
        'Application Form',
        'Product Formulation',
        'Product Label and Artwork',
        'Safety Data Sheet',
        'Manufacturing License (for manufacturers)',
        'Free Sale Certificate (for imports)',
        'Certificate of Analysis',
        'GMP Certificate',
        'Authorization Letter',
      ]}
      faqs={[
        { question: 'What products fall under cosmetic category?', answer: 'Products like skin creams, lipsticks, shampoos, hair dyes, perfumes, and similar items intended for beautification fall under cosmetics.' },
        { question: 'Is CDSCO registration mandatory for cosmetics?', answer: 'Yes, manufacturing or importing cosmetics in India requires license/registration from CDSCO under the Drugs & Cosmetics Act.' },
        { question: 'How long does cosmetic registration take?', answer: 'The process typically takes 2-4 months depending on product category and completeness of documentation.' },
        { question: 'What is the difference between cosmetic and drug?', answer: 'Cosmetics are for beautification while drugs claim therapeutic benefits. Products claiming to treat conditions are classified as drugs.' },
        { question: 'Can I import cosmetics without license?', answer: 'No, importing cosmetics for sale requires an import license from CDSCO. Personal use imports have separate provisions.' },
        { question: 'What testing is required for cosmetics?', answer: 'Testing includes safety tests, microbial limits, heavy metals, and specific tests based on product category.' },
      ]}
      whyJrText="At JR Compliance, we provide specialized regulatory support for cosmetic product registration under CDSCO guidelines and the Cosmetics Rules 2020. Our experts help you determine whether your product falls under cosmetics or drug categories and guide you through the appropriate approval pathway. We prepare comprehensive documentation including product formulation, safety data, and label compliance for submission on the SUGAM portal."
    />
  );
}
