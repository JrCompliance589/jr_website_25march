import Link from 'next/link';
import type { ReactNode } from 'react';
import { CheckCircle, FileCheck, Radiation } from 'lucide-react';
import AERBLeadForm from './AERBLeadForm';

const title = 'AERB License';

const intro =
  "AERB License is a mandatory requirement for hospitals, diagnostic centres, dental clinics, veterinary hospitals, and organizations that use radiation-emitting equipment such as X-ray machines, CT scanners, mammography units, and other medical imaging devices. The licensing process helps ensure that radiation equipment is installed, operated, and maintained in accordance with India's prescribed radiation safety standards.";

const sections = [
  {
    heading: 'What is an AERB License?',
    body: [
      'An AERB Certificate is an official license issued by the Atomic Energy Regulatory Board that attests to the safety and legal compliance of your radiation-related facility or equipment in India. AERB is the statutory body established on 15th November 1983 by the President of India by utilising the powers vested under Section 27 of the Atomic Energy Act, 1962, and the Atomic Energy (Radiation Protection) Rules, 2004. To reduce the radiation effect for human safety, the AERB certification is required for both those importing radiation-producing machinery and producing medical diagnostic X-ray products domestically.',
    ],
  },
  {
    heading: 'Why is an AERB License required?',
    body: ['Key Reasons Why an AERB License is Required'],
    list: [
      'Protects Patients and Healthcare Workers: Ensures that radiation exposure remains within permissible safety limits, reducing health risks to patients, doctors, technicians, and the general public.',
      'Legal Compliance: Operating radiation-generating equipment without the required AERB consent is prohibited under Indian law. Healthcare facilities and businesses must obtain the appropriate approval before using such equipment.',
      'Radiation Safety Standards: The Radiation Safety Certificate verifies that the equipment installation, room shielding, quality assurance, and operational procedures meet national radiation safety standards before granting approval.',
      'Ensures Proper Installation and Operation: The licensing process confirms that the equipment is installed correctly, operated by qualified personnel, and maintained according to prescribed safety guidelines.',
      'Prevents Radiation Hazards: Regular inspections and regulatory oversight help prevent accidental radiation exposure and ensure continuous compliance with safety requirements.',
      'Mandatory for Registration and Renewal: Medical institutions, diagnostic centres, hospitals, dental clinics, and industrial facilities using radiation equipment must obtain and periodically renew their AERB Approval Process through the e-LORA portal.',
    ],
  },
  {
    heading: 'Who needs an AERB License?',
    body: [
      'An AERB License Application is required by any individual, organization, or healthcare facility that manufactures, imports, installs, possesses, or operates radiation-emitting equipment or radioactive materials in India. Here are more examples:',
    ],
    list: [
      'Hospitals',
      'Dental clinics',
      'Diagnostic Centers',
      'Industrial Radiography Firms',
      'Manufacturers Of Radiation Equipment',
      'Research Laboratories',
      'Manufacturer/Suppliers/Service Agency For Diagnostic Radiology',
    ],
  },
  {
    heading: 'Which documents are required for an AERB License?',
    list: [
      'Company registration proof',
      'RSO qualification documents',
      'Radiation Safety and Equipment Reports',
      'Layout plan with shielding details',
      'Radiation safety procedures',
      'Personnel monitoring arrangements',
      'Previous license (if renewal)',
    ],
  },
  {
    heading: 'AERB Registration Process',
    body: ['We follow the steps below for the AERB Registration Process procedure:'],
    list: [
      <>
        Registration on{' '}
        <a
          href="https://elora.aerb.gov.in/ELORA/populateLoginAction.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-orange-300 underline decoration-orange-300/60 underline-offset-4 transition-colors hover:text-orange-200"
        >
          eLORA
        </a>{' '}
        Portal
      </>,
      'Provide detailed information regarding your facility',
      'Upload all necessary Documents',
      'Inspection (If Necessary)',
      'Get Approval & AERB Certificate',
    ],
    numbered: true,
  },
  {
    heading: 'Why choose JR Compliance?',
    body: [
      <>
        JR Compliance provides comprehensive support for obtaining Atomic Energy Regulatory Board
        licenses for radiation-generating equipment and facilities. Our AERB Radiation Safety
        License Consultant guides you through the entire licensing process, from initial application
        on the eLORA portal to final approval. We assist with Radiation Safety Officer (RSO)
        requirements, facility layout planning, and shielding calculations to meet AERB safety
        standards. Our team prepares all necessary documentation, including safety procedures and
        personnel monitoring arrangements. We coordinate facility inspections and help address any
        observations from AERB officials promptly. After post-licensing, we provide support for
        license renewals, amendments, and compliance monitoring to ensure your facility maintains
        AERB standards throughout operations.JR Compliance India&apos;s most trusted compliance
        partner for BIS, ISI,{' '}
        <Link
          href="https://www.jrcompliance.com/approval/fmcs-certification"
          className="font-semibold text-orange-300 underline decoration-orange-300/60 underline-offset-4 transition-colors hover:text-orange-200"
        >
          FMCS
        </Link>
        , GST &amp; 100+ regulatory services. Reach your business goals with our expert consultants.
      </>,
    ],
  },
  {
    heading: 'What are the benefits of hiring a consultant?',
    list: [
      'Expert Knowledge of AERB Regulations',
      'Faster Approval Process',
      'Error-Free Documentation',
      'End-to-End Assistance',
      'Compliance with Safety Standards',
      'Saves Time and Resources',
      'Support for AERB Inspections',
      'Assistance with Renewals and Amendments',
      'Reduced Risk of License Rejection',
      'Ongoing Regulatory Support',
    ],
  },
];

const faqs = [
  {
    question: 'What is an AERB license?',
    answer:
      'AERB license is mandatory authorization for possessing and using radiation-generating equipment and radioactive sources.',
  },
  {
    question: 'Who needs an AERB Certification?',
    answer:
      'AERB certification is mandatory for manufacturing indigenous medical diagnostic X-ray products and importing machinery with radiation to minimize the radiation effect for the safety of humans.',
  },
  {
    question: 'What is RSO?',
    answer:
      'RSO is also known as a Radiation Safety Officer, who is a qualified person and responsible for radiation safety at the facility.',
  },
  {
    question: 'How long does an AERB Registration take?',
    answer:
      'AERB registration typically takes 2-4 months, depending on equipment type and documentation.',
  },
  {
    question: 'What is the validity of the AERB Compliance?',
    answer:
      'AERB Certificate validity varies from 1-5 years, depending on the equipment category.',
  },
];

function ContentList({
  items,
  numbered,
}: {
  items: ReactNode[];
  numbered?: boolean;
}) {
  const ListTag = numbered ? 'ol' : 'ul';

  return (
    <ListTag className={`mt-5 grid gap-3 ${numbered ? 'list-decimal pl-6' : ''}`}>
      {items.map((item, index) => (
        <li
          key={typeof item === 'string' ? item : index}
          className={`rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-gray-200 sm:text-base ${
            numbered ? 'pl-3' : 'flex gap-3'
          }`}
        >
          {numbered ? (
            item
          ) : (
            <>
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-400" />
              <span>{item}</span>
            </>
          )}
        </li>
      ))}
    </ListTag>
  );
}

export default function AERBLicensePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pb-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute top-40 right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <div className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-400">
              <span>Home</span>
              <span className="text-gray-600">/</span>
              <span className="text-white">{title}</span>
            </div>

            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <Radiation className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300">
                AERB License Consultant | AERB Certificate for X-Ray
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
              {intro}
            </p>
          </div>

          <AERBLeadForm />
        </div>
      </section>

      <article className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.heading}
                className="rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:p-7"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                    <FileCheck className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>

                {section.body?.map((paragraph, index) => (
                  <p
                    key={`${section.heading}-${index}`}
                    className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.list && (
                  <ContentList items={section.list} numbered={section.numbered} />
                )}
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/10 sm:p-7">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">FAQs</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
                >
                  <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
