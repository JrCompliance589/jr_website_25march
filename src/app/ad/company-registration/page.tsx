import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function CompanyRegistrationLandingPage() {
  return (
    <AdLandingTemplate
      title="Company Registration"
      subtitle="Register your company in India — Pvt Ltd, LLP, OPC, Partnership & more. Expert guidance, fast processing."
      description="From choosing the right business structure to receiving your Certificate of Incorporation, our registration experts handle every step. Trusted by 5,000+ businesses across India."
      color="blue"
      formName="Company Registration - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Corporate"
      leadType="corporate"
      benefits={[
        'Private Limited Company registration',
        'LLP & OPC registration',
        'Partnership firm registration',
        'Section 8 Company (NGO)',
        'DSC & DIN processing',
        'MOA & AOA drafting',
        'Post-registration compliance',
        'Government scheme eligibility',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Choose Company Name', description: 'Select a unique and legally compliant name that reflects your business activities.' },
        { step: 'Identify Structure', description: 'Determine the appropriate structure — Pvt Ltd, LLP, OPC, or Partnership — based on your needs.' },
        { step: 'Get DSC & DIN', description: 'Obtain Digital Signature Certificate and Director Identification Number for all directors.' },
        { step: 'Draft MOA & AOA', description: 'Prepare Memorandum and Articles of Association detailing objectives and governance rules.' },
        { step: 'File Application', description: 'Submit the registration application and all required documents to MCA.' },
      ]}
      documents={[
        'Director Identity Proof (Aadhar, PAN, or Passport)',
        'Registered Office Address Proof',
        'Director Address Proof',
        'Memorandum & Articles of Association',
        'Digital Signature Certificate (DSC)',
        'Director Identification Number (DIN)',
        'Passport Size Photographs',
        'PAN Card of Directors',
      ]}
      faqs={[
        { question: 'What types of company registration are available in India?', answer: 'Private Limited, LLP, OPC, Public Limited, Sole Proprietorship, Section 8 Company, Partnership Firm, and more.' },
        { question: 'How long does company registration take?', answer: 'The registration process typically takes 5-20 working days depending on document verification and government approvals.' },
        { question: 'Can a foreign entrepreneur register a company in India?', answer: 'Yes, foreign entrepreneurs and NRIs can register through a Private Limited Company or LLP, meeting FDI guidelines and appointing an Indian resident director.' },
        { question: 'What are post-registration compliance requirements?', answer: 'After registration, businesses must obtain PAN & TAN, register for GST (if applicable), maintain financial records, and file annual returns with MCA.' },
        { question: 'What will I receive after company registration?', answer: 'You will receive an Incorporation Certificate, DIN & DSC, PAN & TAN of the company, and MOA & AOA or Partnership Deed.' },
      ]}
      whyJrText="JR Compliance has helped 5,000+ businesses incorporate in India with a seamless, expert-driven registration process. From choosing the right business structure to obtaining your Certificate of Incorporation, we handle every step — DSC & DIN processing, MOA & AOA drafting, MCA filing, and post-registration compliance. Our team ensures 100% legal compliance so you can focus on building your business."
    />
  );
}
