'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radiation } from 'lucide-react';

export default function AERBLicensePage() {
  return (
    <ServicePageTemplate
      title="AERB License"
      subtitle="Radiation Safety Licensing from AERB License Consultant"
      icon={Radiation}
      color="orange"
      description="The Atomic Energy Regulatory Board also known as AERB ensures that the usage of radiation and nuclear energy adhere to stringent safety standards to prevent radiation exposure to patients, employees, and the general public. such as X-ray machines, CT scanners, dental X-rays, and radiotherapy units that meet the required radiation shielding norms and follow standardized safety procedures. AERB License is more than just a legal license; This is necessary and Safeguards to prevent overexposure and operational risks of radiation. Without AERB approval usage of radiation equipment is illegal and gives rise to serious health and legal risks."
      serviceInfo="JR Compliance provides comprehensive support for obtaining Atomic Energy Regulatory Board licenses for radiation-generating equipment and facilities. Our AERB License Consultant guides you through the entire licensing process, from initial application on the eLORA portal to final approval. We assist with Radiation Safety Officer (RSO) requirements, facility layout planning, and shielding calculations to meet AERB safety standards. Our team prepares all necessary documentation including safety procedures and personnel monitoring arrangements. We coordinate facility inspections and help address any observations from AERB officials promptly. After Post-licensing we provide support for license renewals, amendments and compliance monitoring to ensure your facility maintains AERB standards throughout operations."
      benefits={[
        'Mandatory for radiation equipment',
        'AERB certificate for X-Ray',
        'Industrial radiography license',
        'Medical radiation equipment',
        'Expert regulatory guidance',
        'Radiation safety compliance',
        'Quick processing',
        'Renewal support',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Equipment Identification', description: 'Identify radiation equipment requiring AERB Certificate.' },
        { step: 'RSO Appointment', description: 'Appoint qualified Officers.' },
        { step: 'Documentation', description: 'Prepare safety documents and layout plans.' },
        { step: 'AERB Application', description: 'Submit application on eLORA portal.' },
        { step: 'License Grant', description: 'Receive AERB Approval after inspection.' },
      ]}
      documents={[
        'Company registration documents',
        'Equipment specifications',
        'Layout plan with shielding details',
        'RSO qualification documents',
        'Radiation safety procedures',
        'Personnel monitoring arrangements',
        'Waste disposal plan',
        'Previous license (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is AERB license?',
          answer: 'AERB license is mandatory authorization for possessing and using radiation generating equipment and radioactive sources.',
        },
        {
          question: 'Who needs an AERB Certification?',
          answer: 'AERB certification is mandatory for manufacturing indigenous medical diagnostic X-ray products and importing machinery with radiation to minimize the radiation effect for the safety of humans.',
        },
        {
          question: 'What is RSO?',
          answer: 'RSO is also known as a Radiation Safety Officer who are qualified person and responsible for radiation safety at the facility.',
        },
        {
          question: 'How long does an AERB Registration take?',
          answer: 'AERB registration typically takes 2-4 months depending on equipment type and documentation.',
        },
        {
          question: 'What is the validity of the AERB Certificate?',
          answer: 'AERB Certificate validity varies from 1-5 years and depending on equipment category.',
        },
      ]}
    />
  );
}
