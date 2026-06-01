'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WPCLicensePage() {
  return (
    <ServicePageTemplate
      title="WPC License"
      subtitle="Wireless Product Approval under WPC Guidelines"
      processTitle="Step-by-Step Approach"
      logo="/services_logo/wpc.png"
      color="indigo"
      description="Wireless Planning and Coordination (WPC) provides certification to manufacturers to sell, produce and import wireless equipment under Equipment Type Approval (ETA). WPC License is important for manufacturers and importers to legally sell wireless products and services in India. With the help of WPC ETA certificate  you adhere to Indian telecommunication laws while guaranteeing vast market access.Get regulatory assistance for wireless and RF-enabled products under WPC and ETA approval norms."
      serviceInfo="JR Compliance's help you to understand and fulfill your Wireless Planning & Coordination Wing approval process for all radio frequency devices entering the Indian market. We will  handle Equipment Type Approval (ETA) applications, coordinate testing at authorized laboratories.Will  Ensure complete compliance with Indian spectrum regulations. Our team manages the entire documentation process including technical specifications, frequency details, and import permits required for your products.We stay updated of policies and changes that help you to meet both dealer and non-dealer occupancy license requirements. Our WPC consultant provides end-to-end support from starting assessment to final approval and ensuring a smooth certification journey.Following certification we provide ongoing support to ensure that your  products remain compliant throughout their lifecycle."
      stats={[
        { value: '2500+', label: 'WPC Licenses' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      benefits={[
        'Access to Indian wireless market',
        'Consumer confidence with WPC approval',
        'Avoid legal penalties and complications',
        'Streamlined product launch process',
        'RF spectrum compliance assurance',
        'DoT registration support',
        'Expert guidance throughout process',
        'Quick turnaround time',
        'Pan-India regulatory compliance',
      ]}
      process={[
        {
          step: 'Application Submission',
          description:
            'Submit your completed application via Saral Sanchar Portal with all necessary documents.',
        },
        {
          step: 'Product Evaluation',
          description:
            'Product undergoes performance tests to verify compliance with WPC guidelines and standards.',
        },
        {
          step: 'RF Testing',
          description:
            'Mandatory RF (Radio Frequency) testing at certified labs to ensure frequency of compliance.',
        },
        {
          step: 'Certification Approval',
          description:
            'Upon successful testing, receive WPC certification for lawful use in India.',
        },
        {
          step: 'DoT Registration',
          description:
            'Register the certified product with the Department of Telecommunications.',
        },
        {
          step: 'Market Launch',
          description: 'Your product is now ready for the Indian wireless market.',
        },
      ]}
      documents={[
        'Application Form via Saral Sanchar',
        'Product Technical Specifications',
        'RF Test Reports',
        'Manufacturer Authorization Letter',
        'Company Registration Documents',
        'Product Photographs & Labels',
        'Import Export Code (if applicable)',
        'BIS Registration (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is WPC certificate ?',
          answer:
            'This certificate ensures your wireless and telecom devices meet the required Indian regulatory standards for legal operation. It is mandatory for all wireless devices operating in India.',
        },
        {
          question: 'Who needs WPC Approval?',
          answer:
            'It is obligatory for manufacturers of wireless and telecom products including WiFi devices, Bluetooth products, RF equipment, and IoT devices to get WPC approval for marketing in India',
        },
        {
          question: 'How long does a WPC license take?',
          answer:
            'This certification process typically takes four to eight weeks. Depending on RF testing, completeness of documentation and regulatory processing times.',
        },
        {
          question: 'What is the difference between WPC and TEC?',
          answer:
            'WPC deals with wireless spectrum and RF equipment approvals while TEC handles telecom equipment approvals. Some products may require both certifications.',
        },
      ]}
    />
  );
}