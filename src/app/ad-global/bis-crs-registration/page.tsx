import AdGlobalTemplate from '@/components/AdGlobalTemplate';

export default function BISCRSRegistrationLP() {
  return (
    <AdGlobalTemplate
      title="BIS CRS Registration"
      subtitle="Mandatory product registration under the Compulsory Registration Scheme for electronic & IT products sold in India."
      description="BIS CRS Registration ensures safety compliance for electronic and IT products in India under the Bureau of Indian Standards Act. From documentation to lab testing to certification — our experts deliver end-to-end support for a smooth and timely registration process."
      color="blue"
      formName="BIS CRS Registration - Google Ads - Global-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      process={[
        { step: 'Documentation Prep', description: 'Collect and prepare all necessary documents including product details and testing reports.' },
        { step: 'Standard Mapping', description: 'Map your product to the correct CRS category and identify relevant Indian standards.' },
        { step: 'Product Testing', description: 'Test products at BIS-approved laboratories to verify safety and quality compliance.' },
        { step: 'Application Filing', description: 'Submit the application along with required documents and test results for review.' },
        { step: 'BIS Review', description: 'BIS team conducts inspection to validate documents and product conformity.' },
        { step: 'Certificate Issued', description: 'Upon successful verification, receive your CRS certificate for marketing products in India.' },
      ]}
      eligibleSection={{
        sectionId: 'eligible-products',
        title: 'CRS Product Categories',
        subtitle: 'Electronic and IT products that require mandatory CRS registration before sale in India.',
        items: [
          'Mobile Phones & Smartphones',
          'LED Lights & Luminaires',
          'Power Banks & Adapters',
          'Laptop & Tablet Chargers',
          'Smart Watches & Wearables',
          'Television Sets & Monitors',
          'Audio Equipment & Speakers',
          'Printers & Scanners',
          'Microwave Ovens',
          'Air Purifiers & Fans',
          'Set-Top Boxes',
          'CCTV Cameras & Video Monitors',
        ],
      }}
      documents={[
        'Business registration documents',
        'Product test reports from BIS labs',
        'Authorized signatory KYC',
        'Factory inspection reports',
        'Labeling & packaging details',
        'Technical specifications',
        'Brand authorization letter',
        'Import Export Code (if applicable)',
      ]}
      faqs={[
        { question: 'What is CRS Certification?', answer: 'BIS CRS Certification ensures safety for electronic and IT products in India, meeting standards set by the Bureau of Indian Standards. It is mandatory for specific product categories.' },
        { question: 'Which products need CRS Registration?', answer: 'Products such as mobile phones, LED lights, power banks, smart watches, televisions, and other electronic items are covered under the CRS BIS Scheme.' },
        { question: 'How long does it take to get a BIS CRS Certificate?', answer: 'The timeline varies based on documentation and testing, but typically takes 4-6 weeks if all requirements are met in a timely manner.' },
        { question: 'What is the validity of CRS Certification?', answer: 'BIS CRS Registration Certificate is valid for 2 years and must be renewed before expiry to continue selling in India.' },
        { question: 'How does JR Compliance help in the CRS process?', answer: 'We provide end-to-end support starting from documentation to testing to application submission, ensuring a smooth and time-bound certification process.' },
      ]}
      whyJrText="JR Compliance provides expert CRS certification consulting for electronic and IT product manufacturers. Our experienced team identifies applicable standards, coordinates testing at BIS-recognized laboratories, handles all documentation, and tracks your certification from start to finish. We stay updated with the latest CRS product list additions, helping you maintain compliance as regulations evolve. Post-registration, we offer renewal services, model inclusion filing, and ongoing compliance support."
    />
  );
}
