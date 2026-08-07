import {
  ApprovalContentLayout,
  ContentList,
  ContentParagraph,
  ContentSectionCard,
  FAQItem,
  FAQSection,
} from '@/components/ApprovalContent';

export default function CDSCORegistrationContent() {
  return (
    <ApprovalContentLayout>
      <div className="space-y-8">
        <ContentSectionCard heading="Why does the CDSCO Medical Device Registration matter?">
          <ContentList
            numbered
            items={[
              "It's basically your legal green light. Without CDSCO approval, you can't sell that drug or medical device in India, full stop. It's not some nice-to-have badge; it's the actual law.",
              "It's there to protect people. Every medicine or medical device goes through proper checks before it ever reaches a patient, so CDSCO ends up being that safety net standing between the public and something that might do more harm than good.",
              "It earns trust. When doctors, hospitals, or even everyday buyers see CDSCO backing on a product, they relax a little; it tells them the product has actually been vetted, not just thrown into the market.",
              "There's no running a pharma business without it. Manufacturing, importing, distributing, conducting clinical trials, none of that happens without CDSCO clearance first. Try skipping it, and you're not really in business, you're just breaking the law.",
              "It keeps you covered during audits. Companies and hospitals get inspected all the time, and if your CDSCO paperwork checks out, you've got nothing to worry about. If it doesn't, you're staring at penalties, or worse.",
              "It works in your favor internationally too. A lot of countries like to see that a product already has credible approval somewhere before letting it into their market, and CDSCO certification can genuinely help open that door.",
            ]}
          />
        </ContentSectionCard>

        <ContentSectionCard heading="Who can apply for the CDSCO Certificate?">
          <ContentList
            numbered
            items={[
              <>
                <strong className="text-white">Drug manufacturers</strong> – Companies that make
                pharmaceutical products within India need CDSCO approval before they can produce
                and sell those drugs.
              </>,
              <>
                <strong className="text-white">Medical device manufacturers</strong> – Same rule
                applies here. If you&apos;re making medical devices in India, you need clearance
                depending on the risk class of your device.
              </>,
              <>
                <strong className="text-white">Importers</strong> – Anyone bringing drugs or medical
                devices into India from another country has to get CDSCO approval first. You can&apos;t
                just import and sell without it.
              </>,
              <>
                <strong className="text-white">Clinical research organizations or sponsors</strong>{' '}
                – If a company or institute wants to conduct clinical trials in India, whether for a
                new drug or device, they need to apply through CDSCO.
              </>,
              <>
                <strong className="text-white">Distributors and marketers, in some cases</strong> –
                Depending on the product and how it&apos;s being sold, even distributors sometimes need
                to be part of the registration or licensing process.
              </>,
              <>
                <strong className="text-white">Foreign companies wanting to sell in India</strong>{' '}
                – International pharma or device companies that want their products available in the
                Indian market also go through CDSCO, usually via a local authorized agent or
                representative.
              </>,
              <>
                <strong className="text-white">Loan CDSCO license holders</strong> – Companies that
                don&apos;t have their own manufacturing setup but want to manufacture through another
                licensed facility also need to apply, this is called a loan license.
              </>,
            ]}
          />
        </ContentSectionCard>

        <ContentSectionCard heading="Divisions of the CDSCO Certification :">
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm text-gray-300 sm:text-base">
              <caption className="sr-only">CDSCO certification class risk evaluations</caption>
              <thead className="bg-white/10 text-white">
                <tr>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">
                    Class Type
                  </th>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">
                    Risk Evaluation
                  </th>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">
                    Class A
                  </th>
                  <td className="border border-white/10 px-4 py-3">Low risk</td>
                  <td className="border border-white/10 px-4 py-3">The safest like Thermometers.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">
                    Class B
                  </th>
                  <td className="border border-white/10 px-4 py-3">Low to moderate risk</td>
                  <td className="border border-white/10 px-4 py-3">
                    A bit more documentation is needed, but its manageable like a hospital bed,
                    syringes etc .
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">
                    Class C
                  </th>
                  <td className="border border-white/10 px-4 py-3">Moderate to high risk</td>
                  <td className="border border-white/10 px-4 py-3">
                    The bar goes slightly up here , like ventilators, dialysis machine etc.
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">
                    Class D
                  </th>
                  <td className="border border-white/10 px-4 py-3">High risk</td>
                  <td className="border border-white/10 px-4 py-3">
                    The toughest and most detailed approval process, since even a small defect can
                    be dangerous.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentSectionCard>

        <ContentSectionCard heading="Why choose JR Compliance?">
          <ContentParagraph>
            At JR Compliance, our regulatory experts genuinely know their way around the Medical
            Device Rules 2017 and the Drug &amp; Cosmetics Act, so you&apos;re not left figuring things
            out on your own. Our CDSCO Registration consultants take care of the whole process,
            device classification, risk assessment, clinical evidence, and{' '}
            <a
              href="https://cdscoonline.gov.in/CDSCO/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              SUGAM portal
            </a>{' '}
            submissions, without you having to chase any of it. Our team stays in touch with
            notified bodies, handles the technical paperwork, and deals with CDSCO directly on your
            behalf. Even after registration, we&apos;re still around for vigilance reporting, license
            renewals, and keeping things compliant. That&apos;s honestly why so many companies rely on
            JR Compliance for smooth CDSCO certification across India.
          </ContentParagraph>
        </ContentSectionCard>

        <ContentSectionCard heading="Easy Step-By-Step Guide :">
          <ContentList
            items={[
              'Determine device classification (A, B, C, D) under MDR 2017.',
              'Document preparation Compile clinical data, and regulatory documents.',
              'Create an account and submit the application on the CDSCO portal.',
              'CDSCO reviews the application and may request additional information',
              'Facility inspection for Class C and D devices (if applicable).',
              'Receive the CDSCO registration certificate for your device.',
            ]}
          />
        </ContentSectionCard>

        <ContentSectionCard heading="Required documents for online apply :">
          <ContentList
            items={[
              'Application Form',
              'Device Master File',
              'ISO 13485 Certificate',
              'Free Sale Certificate',
              'Declaration of Conformity',
              'Clinical Evidence/Data',
              'Device Labeling & IFU',
              'Authorized Agent Agreement',
            ]}
          />
        </ContentSectionCard>
      </div>

      <FAQSection heading="Frequently Asked Questions :">
        <FAQItem
          collapsible
          question="Is CDSCO approval mandatory for all medical devices?"
          answer="Not all; only notified devices need it, but since October 2023, Class C and D devices have been added to that list too."
        />
        <FAQItem
          collapsible
          question="How long does CDSCO registration usually take?"
          answer="Depends on the device class honestly, Class C and D take longer since they involve facility inspections."
        />
        <FAQItem
          collapsible
          question="Can a foreign company apply directly to CDSCO?"
          answer="Nope, they've got to go through an Authorized Indian Agent, can't apply on their own."
        />
        <FAQItem
          collapsible
          question="How long is the CDSCO online registration valid for ?"
          answer="CDSCO registration is valid for 5 years and you must be renewed before expiry to continue selling in India."
        />
        <FAQItem
          collapsible
          question="Is CDSCO approval needed to import drugs for personal use?"
          answer="Not required for small personal-use imports usually slide through without much hassle, but the moment it's commercial, you'll need proper approval for that."
        />
      </FAQSection>
    </ApprovalContentLayout>
  );
}
