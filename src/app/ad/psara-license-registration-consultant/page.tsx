import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function PSARALandingPage() {
  return (
    <AdLandingTemplate
      title="PSARA License"
      subtitle="Expert PSARA license registration support for private security agencies. Complete compliance under PSARA Act 2005."
      description="Get your Private Security Agency license with expert assistance. From eligibility check to license issuance, we handle state-specific requirements across India."
      color="amber"
      formName="PSARA Registration - Google Ads - Main-LP"
      source="Advertising"
      responsible="ABHAY"
      stage="Corporate"
      leadType="corporate"
      benefits={[
        'Legal authorization to operate security agency',
        'Pan-India security services eligibility',
        'Business credibility and recognition',
        'Government contract eligibility',
        'Employee protection coverage',
        'Professional recognition in security sector',
        'Client trust and confidence',
        'Compliance with PSARA Act 2005',
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify eligibility criteria for PSARA license under the Act.' },
        { step: 'Document Preparation', description: 'Prepare all required documents and proofs for submission.' },
        { step: 'Application Filing', description: 'Submit application to the Controlling Authority.' },
        { step: 'Police Verification', description: 'Background verification of applicant and premises.' },
        { step: 'Inspection', description: 'Physical inspection of office and training facilities.' },
        { step: 'License Issuance', description: 'Receive PSARA license upon successful approval.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'MOA & AOA',
        "Directors' ID & Address Proof",
        'Office Address Proof',
        'Police Verification Report',
        'Training Infrastructure Details',
        'Employee List with Photos',
        'Bank Account Details',
      ]}
      faqs={[
        { question: 'What is PSARA License?', answer: 'PSARA License is mandatory authorization required to operate a private security agency in India under the Private Security Agencies (Regulation) Act, 2005.' },
        { question: 'Who needs PSARA License?', answer: 'Any individual or company providing private security guard services, security consultancy, or training services needs PSARA License.' },
        { question: 'What is the validity of PSARA License?', answer: 'PSARA License is valid for 5 years from the date of issuance and must be renewed before expiry.' },
        { question: 'Can PSARA License be used across states?', answer: 'No, PSARA License is state-specific. You need separate licenses for operating in different states.' },
        { question: 'What are the eligibility criteria?', answer: 'The applicant must be an Indian citizen, at least 18 years old, with clean criminal record, and have adequate training facilities for security personnel.' },
      ]}
      whyJrText="JR Compliance provides comprehensive PSARA license services for private security agencies across all states in India. Our regulatory experts guide you through state-specific PSARA requirements under the Private Security Agencies Regulation Act 2005. We assist with company registration verification, prepare documentation including character certificates, and coordinate police verification for principals and directors. Our team handles security guard training documentation and manages the complete submission process."
    />
  );
}
