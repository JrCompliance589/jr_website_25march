import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function TECLandingPage() {
  return (
    <AdLandingTemplate
      title="TEC Certificate"
      subtitle="Expert TEC certification support for telecom equipment. 10-year validity, fast approvals."
      description="For businesses designing, manufacturing, importing, or selling telecom equipment in India, obtaining a TEC certificate is essential. We ensure full regulatory compliance."
      color="cyan"
      formName="TEC registration - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Technical"
      leadType="technical"
      benefits={[
        'Simplified market access to Indian telecom sector',
        'Enhanced customer trust with TEC approval',
        'Competitive advantage in the industry',
        'Regulatory assurance and compliance',
        '10-year validity for TEC certificates',
        'Legal compliance for telecom equipment',
        'Protection against counterfeit claims',
        'Streamlined market entry process',
        'Expert support throughout certification',
      ]}
      process={[
        { step: 'Document Verification', description: 'We review all essential documents from product specifications to compliance history.' },
        { step: 'Application Submission', description: 'Submit completed application with all necessary documents to TEC.' },
        { step: 'Product Testing', description: 'Product undergoes testing at approved labs for TEC standards compliance.' },
        { step: 'Facility Inspection', description: 'Officials may inspect facilities to verify production practices.' },
        { step: 'Certification Approval', description: 'Upon successful testing and inspection, TEC issues your certification.' },
        { step: 'Market Launch', description: 'Your product is now certified for the Indian telecom market.' },
      ]}
      documents={[
        'Application Form',
        'Product Technical File',
        'Testing Reports from TEC Labs',
        'Sample Product for Review',
        'Compliance Statement',
        'Manufacturer Authorization',
        'Company Registration Documents',
        'Product Photographs & Labels',
      ]}
      faqs={[
        { question: 'Who needs TEC certification in India?', answer: 'All enterprises who produce, import, or distribute telecom equipment in India need TEC certification to comply with regulatory requirements.' },
        { question: 'How long is TEC certification valid?', answer: 'Thanks to government reforms, TEC certificates in India now last for 10 years instead of 5, offering businesses longer validity.' },
        { question: 'Is TEC certification transferable?', answer: 'No, TEC certification is non-transferable. It belongs solely to the applicant who submitted the product for testing.' },
        { question: 'What happens if a product fails testing?', answer: 'If the product fails, the applicant must rectify issues and reapply. This ensures all telecom equipment meets safety requirements.' },
        { question: 'What is the difference between Type Approval and Interface Approval?', answer: 'Type Approval confirms products meet GR standards, while Interface Approval validates equipment can interact within network systems based on IR standards.' },
      ]}
      whyJrText="For businesses designing, manufacturing, importing, or selling telecom equipment in India, obtaining a TEC certificate is a necessary requirement. We ensure that your products do not breach any Indian regulatory norms and show your concern about quality and safety. With a TEC certification, it's no longer only about compliance; you are redefining the benchmarks of the market."
    />
  );
}
