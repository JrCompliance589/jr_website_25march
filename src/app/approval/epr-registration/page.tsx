'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Recycle } from 'lucide-react';

export default function EPRRegistrationPage() {
  return (
    <ServicePageTemplate
      title="EPR Registration"
      subtitle="Extended Producer Responsibility Compliance in India"
      icon={Recycle}
      color="green"
      description="Extended Producer Responsibility (EPR) is considered a policy approach that involves the care of a manufacturer for a product from its beginning until its ultimate disposal.EPR Registration involves the safe collection and recycling of used and discarded products with the intent of containing their adverse effects on the environment. Do you need comprehensive EPR solutions? Look no further. We at JR Compliance ensure proper management of the product lifecycle and updated legal compliance by providing you with the means of achieving environmental sustainability."
      serviceInfo="JR Compliance's EPR consultants help you understand and fulfill your environmental obligations under CPCB guidelines effectively. Being top consultants in India, we tailor industry-specific solutions to EPR compliance. We help you register your business under specific Extended Producer Responsibility (EPR) law for various sectors. To collect, recycle, and manage post-consumer products, plans are customized based on Plastic Waste Management standards. We assist with EPR Certificate on the centralized portal with accurate target calculation, and comprehensive action plan development tailored to your business needs. We provide complete quarterly and annual return filing support, ongoing compliance monitoring, and audit assistance to keep you penalty-free. With our end-to-end support you can meet your EPR Registration  targets effectively while contributing to sustainable waste management practices in India."
      processTitle="Simple Step-by-Step Process"
      benefits={[
        'Environmental compliance assurance',
        'Enhanced brand reputation for sustainability',
        'Avoid heavy legal penalties',
        'Market access for electronic products',
        'CPCB authorization support',
        'Waste channelization guidance',
        'Annual compliance management',
        'Expert recycler network access',
        'Multiple waste category coverage',
      ]}
      process={[
        { step: 'Initial Assessment', description: 'We evaluate your product categories and determine applicable EPR requirements.' },
        { step: 'Documentation Preparation', description: 'Compile all required documents including product details and waste estimates.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on Central Pollution Control Board portal.' },
        { step: 'Collection Plan', description: 'Develop a waste collection and channelization plan with authorized recyclers.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization certificate from CPCB.' },
        { step: 'Annual Compliance', description: 'Submit annual returns and meet collection targets regularly.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'PAN Card & GST Registration',
        'Product Sales Data',
        'Waste Channelization Agreement',
        'Collection Plan Details',
        'Authorized Dismantler Agreement',
        'Recycler Partnership Documents',
        'Import/Export License (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is EPR compliance?',
          answer: 'EPR compliance is a directive by which producers are obliged to take responsibility for disposal at the end of the life cycle of their product to achieve proper recycling and environmental protection.',
        },
        {
          question: 'Who needs EPR registration in India?',
          answer: 'All the importers, producers and brand owners who deal with electronic equipment, plastic packaging and batteries need EPR registration as per CPCB guidelines.',
        },
        {
          question: 'What are the penalties for non-compliance?',
          answer: 'Non-compliance can result in fines up to ₹1 crore, business restrictions and legal action under Environment Protection Act.',
        },
        {
          question: 'How long does an EPR license take?',
          answer: 'EPR license takes 4-8 weeks depending on documentation completeness and product category.',
        },
        {
          question: 'What are the annual compliance requirements?',
          answer: 'Annual filing of returns, meeting collection targets, and maintaining records of waste channelization are mandatory requirements.',
        },
      ]}
    />
  );
}