'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CDSCORegistrationPage() {
  return (
    <ServicePageTemplate
      title="CDSCO Registration"
      subtitle="Medical Device Registration as per CDSCO Regulations"
      processTitle="Simple Step-by-Step Process"
      logo="/services_logo/cdsco.png"
      color="orange"
      description="Central Drugs Standard Control Organization(CDSO) is the national drug and medical device regulatory organization of India. An institution under the Ministry of Health and Family Welfare of the Government of India, it ensures the safety, quality, and efficacy of drugs, medical devices and cosmetics, CDSCO ensures compliance with pharmaceutical, medical device, and cosmetic standards helping manufacturers meet national and international regulations. CDSCO medical devices enforces controls guidelines and inspects and approves clinical studies. It seeks to serve the public health interest by controlling the drug approval process and its subsequent supervision.provide end-to-end assistance for registering medical devices in compliance with India's medical device regulations."
      serviceInfo="JR Compliance's regulatory experts specialize in navigating the complex Medical Device Rules 2017 and Drug & Cosmetics Act requirements for your medical devices. We provide complete support from device classification and risk assessment to clinical evidence compilation and SUGAM portal submissions. Our team coordinates with notified bodies, manages comprehensive technical documentation, and handles all communication with CDSCO authorities on your behalf. We ensure your products meet stringent safety and performance standards while accelerating your time-to-market. Our consultants guide you through every stage of the approval process, addressing queries promptly and maintaining compliance. Post-registration, we offer vigilance reporting support, license renewal services, and ongoing compliance management. JR Compliance is trusted by industry leaders for our CDSCO-related compliance. The company ensures that critical licensing requirements can be met professionally and efficiently with CDSCO certificate services across India."
      stats={[
        { value: '1800+', label: 'CDSCO Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '97%', label: 'Success Rate' },
      ]}
      trustedBy={['Abbott', 'Medtronic', 'J&J', 'Philips', 'Siemens']}
      benefits={[
        'Legal market access for medical devices',
        'Patient safety compliance',
        'Market credibility with healthcare providers',
        'Competitive advantage in medical sector',
        'Access to hospital & clinic networks',
        'Government tender eligibility',
        'MDR 2017 compliance',
        'Expert regulatory guidance',
        'Streamlined approval process',
      ]}
      process={[
        { step: 'Product Classification', description: 'Determine device classification (A, B, C, D) under MDR 2017.' },
        { step: 'Document Preparation', description: 'Compile technical file, clinical data, and regulatory documents.' },
        { step: 'SUGAM Portal Registration', description: 'Create account and submit application on CDSCO portal.' },
        { step: 'Application Review', description: 'CDSCO reviews application and may request additional information.' },
        { step: 'Plant Inspection', description: 'Facility inspection for Class C and D devices (if applicable).' },
        { step: 'Registration Grant', description: 'Receive CDSCO registration certificate for your device.' },
      ]}
      documents={[
        'Application Form',
        'Device Master File',
        'ISO 13485 Certificate',
        'Free Sale Certificate',
        'Declaration of Conformity',
        'Clinical Evidence/Data',
        'Device Labeling & IFU',
        'Authorized Agent Agreement',
      ]}
      faqs={[
        {
          question: 'What is CDSCO registration?',
          answer: 'CDSCO (Central Drugs Standard Control Organization) registration is mandatory approval for manufacturing, importing, or selling medical devices in India under Medical Devices Rules, 2017.',
        },
        {
          question: 'What are the functions of CDSCO?',
          answer: 'CDSCO is responsible for the approval of drugs, cosmetics, medical devices, clinical trials, security, effectiveness and quality control. ',
        },
        {
          question: 'How long does it take to get a CDSCO license?',
          answer: 'Timeframes vary by class Here it is :  Class A takes 2-3 months, Class B takes 3-4 months, Class C/D may take 6-12 months including inspection.',
        },
        {
          question: 'How does a CDSCO Certificate guarantee drug safety?',
          answer: 'Central Drugs Standard Control Organization reviews and regulates drugs for safety and efficacy before approving them.',
        },
        {
          question: 'How long is the CDSCO registration valid for ?',
          answer: 'CDSCO registration is valid for 5 years and you must be renewed before expiry to continue selling in India.',
        },
      ]}
    />
  );
}
