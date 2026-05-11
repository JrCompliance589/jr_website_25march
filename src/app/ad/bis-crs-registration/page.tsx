import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function BISCRSRegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="BIS CRS Registration"
      subtitle="Mandatory product registration for electronic & IT products sold in India. End-to-end CRS certification support."
      description="BIS CRS (Compulsory Registration Scheme) ensures safety compliance for electronic and IT products in India. From standard mapping and lab testing to online application and certificate grant — our team handles the complete process."
      color="cyan"
      formName="BIS CRS - Google Ads - Main LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Mandatory for electronics & IT products',
        'Legal authorization to sell in India',
        'Consumer safety & product trust',
        'Access to e-commerce & retail channels',
        'Compliance under BIS Act 2016',
        'Brand credibility & market expansion',
        'Coverage for 60+ electronic categories',
        'Expert standard mapping',
        'End-to-end lab & application support',
      ]}
      process={[
        { step: 'Standard Mapping', description: 'Identify applicable IS standard for your electronic product.' },
        { step: 'Documentation', description: 'Collect product data, BOM, and technical specifications.' },
        { step: 'Lab Testing', description: 'Test at BIS-recognized CRS labs for safety compliance.' },
        { step: 'Application Filing', description: 'Submit application on BIS portal with test reports.' },
        { step: 'BIS Review', description: 'BIS reviews documents, test reports & model details.' },
        { step: 'CRS Grant', description: 'Receive CRS Registration Certificate to sell in India.' },
      ]}
      documents={[
        'Business registration documents',
        'Product test reports from BIS labs',
        'Technical specifications & BOM',
        'Authorized signatory KYC',
        'Labeling & packaging artwork',
        'Brand authorization letter',
        'AIR (for foreign manufacturers)',
        'Import Export Code (if applicable)',
      ]}
      faqs={[
        { question: 'What is BIS CRS Registration?', answer: 'BIS CRS (Compulsory Registration Scheme) is a mandatory registration for electronic and IT products to confirm they meet Indian safety standards under the BIS Act.' },
        { question: 'Which products require CRS?', answer: 'Mobile phones, LED lights, power banks, adapters, smart watches, TVs, laptops, printers, CCTV cameras and 60+ other electronic items are covered under CRS.' },
        { question: 'How long does CRS registration take?', answer: 'Typical timeline is 4-6 weeks if documentation and lab testing are completed without delays.' },
        { question: 'What is the validity of CRS Certificate?', answer: 'CRS Registration is valid for 2 years and must be renewed before expiry.' },
        { question: 'Is factory inspection required for CRS?', answer: 'No routine factory inspection is required for CRS, but BIS may conduct surprise market surveillance and sample verification.' },
      ]}
      whyJrText="JR Compliance provides expert CRS certification consulting for electronic and IT product manufacturers across India and overseas. We map your product to the correct IS standard, coordinate testing at BIS-recognized CRS labs, prepare complete documentation, and track the application until grant. We also manage model inclusion, label approvals, and renewals — keeping your compliance active as the CRS product list evolves. Trusted by Sony, Sennheiser, and global electronics brands."
    />
  );
}
