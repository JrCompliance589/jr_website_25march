import AdLandingTemplate from '@/components/AdLandingTemplate';

export default function AnnualComplianceLandingPage() {
  return (
    <AdLandingTemplate
      title="Annual Compliance"
      subtitle="Stay compliant, avoid penalties — expert annual filing support for Private Ltd, LLP, OPC & more. Free quote in seconds."
      description="From ROC filings to GST returns and income tax submissions, our compliance experts handle everything so you never miss a deadline. Trusted by 200+ companies across India."
      color="indigo"
      formName="Annual Compliance - Google Ads - Main-LP"
      source="Advertising"
      responsible="Lalit"
      stage="Corporate"
      leadType="corporate"
      benefits={[
        'Avoid heavy penalties & fines',
        'ROC filings (MGT-7, AOC-4)',
        'GST & TDS return filing',
        'Income tax submissions',
        'Financial statement preparation',
        'Board meeting compliance',
        'Year-round deadline tracking',
        'Startup to enterprise support',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather financial statements, board meeting details, audit reports, and tax filing proof.' },
        { step: 'Compliance Assessment', description: 'Evaluate applicable ROC, statutory, financial, and tax compliance requirements.' },
        { step: 'Filing Preparation', description: 'Prepare all mandatory forms including MGT-7, AOC-4, GST returns, and TDS returns.' },
        { step: 'Review & Approval', description: 'Expert review of all documents for accuracy before director approval and digital signing.' },
        { step: 'Filing & Submission', description: 'Submit all forms on MCA portal and relevant regulatory platforms before deadlines.' },
      ]}
      documents={[
        'Audited Balance Sheet',
        'Director KYC Form',
        'Income Tax Return Copy',
        'Board Meeting Resolutions',
        'Financial Statements',
        'Audit Reports',
        'KYC Documents',
        'Tax Filing Proof',
      ]}
      faqs={[
        { question: 'What is annual compliance for a private limited company?', answer: 'It includes filing obligatory forms like MGT-7 and AOC-4, income tax returns, and holding periodic board meetings under MCA regulations.' },
        { question: 'What happens if I miss annual compliance?', answer: 'Penalties, legal notices, or even disqualification of directors can result from missing mandatory deadlines.' },
        { question: 'Is annual compliance mandatory for dormant companies?', answer: 'Yes, minimum compliance is required unless your company has been formally struck off.' },
        { question: 'Who needs annual compliance?', answer: 'All registered businesses — Private Ltd, LLPs, OPCs, partnerships, and NGOs — must complete annual compliance to avoid penalties.' },
        { question: 'How long does the annual compliance process take?', answer: 'It typically takes 7-15 working days depending on your business type and completeness of documentation.' },
      ]}
      whyJrText="JR Compliance provides end-to-end annual compliance services for all types of registered businesses in India. Our expert team handles ROC filings, statutory compliance, financial accounting, and tax submissions with complete accuracy. We track every deadline, offer legal guidance for complex filings, and deliver personalized support for startups, SMEs, and large enterprises alike — so you can focus on growing your business while we keep you compliant."
    />
  );
}
