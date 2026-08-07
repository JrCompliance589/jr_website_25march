const sectionClass = 'py-10 sm:py-14 lg:py-20';
const containerClass = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const headingClass = 'text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8';
const bodyClass = 'text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed';

export default function CDSCORegistrationContent() {
  return (
    <>
      <section className={`${sectionClass} bg-slate-950`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Why does the CDSCO Medical Device Registration matter?</h2>
          <ol className={`${bodyClass} list-decimal space-y-4 pl-6 sm:pl-8`}>
            <li>
              It&apos;s basically your legal green light. Without CDSCO approval, you can&apos;t sell that drug or medical device in India, full stop. It&apos;s not some nice-to-have badge; it&apos;s the actual law.
            </li>
            <li>
              It&apos;s there to protect people. Every medicine or medical device goes through proper checks before it ever reaches a patient, so CDSCO ends up being that safety net standing between the public and something that might do more harm than good.
            </li>
            <li>
              It earns trust. When doctors, hospitals, or even everyday buyers see CDSCO backing on a product, they relax a little; it tells them the product has actually been vetted, not just thrown into the market.
            </li>
            <li>
              There&apos;s no running a pharma business without it. Manufacturing, importing, distributing, conducting clinical trials, none of that happens without CDSCO clearance first. Try skipping it, and you&apos;re not really in business, you&apos;re just breaking the law.
            </li>
            <li>
              It keeps you covered during audits. Companies and hospitals get inspected all the time, and if your CDSCO paperwork checks out, you&apos;ve got nothing to worry about. If it doesn&apos;t, you&apos;re staring at penalties, or worse.
            </li>
            <li>
              It works in your favor internationally too. A lot of countries like to see that a product already has credible approval somewhere before letting it into their market, and CDSCO certification can genuinely help open that door.
            </li>
          </ol>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-900`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Who can apply for the CDSCO Certificate?</h2>
          <ol className={`${bodyClass} list-decimal space-y-3 pl-6 sm:pl-8`}>
            <li>
              <strong className="text-white">Drug manufacturers</strong> – Companies that make pharmaceutical products within India need CDSCO approval before they can produce and sell those drugs.
            </li>
            <li>
              <strong className="text-white">Medical device manufacturers</strong> – Same rule applies here. If you&apos;re making medical devices in India, you need clearance depending on the risk class of your device.
            </li>
            <li>
              <strong className="text-white">Importers</strong> – Anyone bringing drugs or medical devices into India from another country has to get CDSCO approval first. You can&apos;t just import and sell without it.
            </li>
            <li>
              <strong className="text-white">Clinical research organizations or sponsors</strong> – If a company or institute wants to conduct clinical trials in India, whether for a new drug or device, they need to apply through CDSCO.
            </li>
            <li>
              <strong className="text-white">Distributors and marketers, in some cases</strong> – Depending on the product and how it&apos;s being sold, even distributors sometimes need to be part of the registration or licensing process.
            </li>
            <li>
              <strong className="text-white">Foreign companies wanting to sell in India</strong> – International pharma or device companies that want their products available in the Indian market also go through CDSCO, usually via a local authorized agent or representative.
            </li>
            <li>
              <strong className="text-white">Loan CDSCO license holders</strong> – Companies that don&apos;t have their own manufacturing setup but want to manufacture through another licensed facility also need to apply, this is called a loan license.
            </li>
          </ol>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-950`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Divisions of the CDSCO Certification :</h2>
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="min-w-[720px] w-full border-collapse text-left text-sm sm:text-base text-gray-300">
              <thead className="bg-white/10 text-white">
                <tr>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">Class Type</th>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">Risk Evaluation</th>
                  <th scope="col" className="border border-white/10 px-4 py-3 font-semibold">Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">Class A</th>
                  <td className="border border-white/10 px-4 py-3">Low risk</td>
                  <td className="border border-white/10 px-4 py-3">The safest like Thermometers.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">Class B</th>
                  <td className="border border-white/10 px-4 py-3">Low to moderate risk</td>
                  <td className="border border-white/10 px-4 py-3">A bit more documentation is needed, but its manageable like a hospital bed, syringes etc .</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">Class C</th>
                  <td className="border border-white/10 px-4 py-3">Moderate to high risk</td>
                  <td className="border border-white/10 px-4 py-3">The bar goes slightly up here , like ventilators, dialysis machine etc.</td>
                </tr>
                <tr>
                  <th scope="row" className="border border-white/10 px-4 py-3 font-semibold text-white">Class D</th>
                  <td className="border border-white/10 px-4 py-3">High risk</td>
                  <td className="border border-white/10 px-4 py-3">The toughest and most detailed approval process, since even a small defect can be dangerous.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-900`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={headingClass}>Why choose JR Compliance?</h2>
          <p className={bodyClass}>
            At JR Compliance, our regulatory experts genuinely know their way around the Medical Device Rules 2017 and the Drug &amp; Cosmetics Act, so you&apos;re not left figuring things out on your own. Our CDSCO Registration consultants take care of the whole process, device classification, risk assessment, clinical evidence, and{' '}
            <a
              href="https://cdscoonline.gov.in/CDSCO/homepage"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline hover:text-cyan-300"
            >
              SUGAM portal
            </a>{' '}
            submissions, without you having to chase any of it. Our team stays in touch with notified bodies, handles the technical paperwork, and deals with CDSCO directly on your behalf. Even after registration, we&apos;re still around for vigilance reporting, license renewals, and keeping things compliant. That&apos;s honestly why so many companies rely on JR Compliance for smooth CDSCO certification across India.
          </p>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-950`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Easy Step-By-Step Guide :</h2>
          <ul className={`${bodyClass} list-disc space-y-3 pl-6 sm:pl-8`}>
            <li>Determine device classification (A, B, C, D) under MDR 2017.</li>
            <li>Document preparation Compile clinical data, and regulatory documents.</li>
            <li>Create an account and submit the application on the CDSCO portal.</li>
            <li>CDSCO reviews the application and may request additional information</li>
            <li>Facility inspection for Class C and D devices (if applicable).</li>
            <li>Receive the CDSCO registration certificate for your device.</li>
          </ul>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-900`}>
        <div className={containerClass}>
          <h2 className={headingClass}>Required documents for online apply :</h2>
          <ul className={`${bodyClass} list-disc space-y-3 pl-6 sm:pl-8`}>
            <li>Application Form</li>
            <li>Device Master File</li>
            <li>ISO 13485 Certificate</li>
            <li>Free Sale Certificate</li>
            <li>Declaration of Conformity</li>
            <li>Clinical Evidence/Data</li>
            <li>Device Labeling &amp; IFU</li>
            <li>Authorized Agent Agreement</li>
          </ul>
        </div>
      </section>

      <section className={`${sectionClass} bg-slate-950`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={headingClass}>Frequently Asked Questions :</h2>
          <ol className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg text-gray-400 list-decimal pl-6 sm:pl-8">
            <li>
              <details className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <strong>Is CDSCO approval mandatory for all medical devices?</strong>
                </summary>
                <p className="mt-4 leading-relaxed">Not all; only notified devices need it, but since October 2023, Class C and D devices have been added to that list too.</p>
              </details>
            </li>
            <li>
              <details className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <strong>How long does CDSCO registration usually take?</strong>
                </summary>
                <p className="mt-4 leading-relaxed">Depends on the device class honestly, Class C and D take longer since they involve facility inspections.</p>
              </details>
            </li>
            <li>
              <details className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <strong>Can a foreign company apply directly to CDSCO?</strong>
                </summary>
                <p className="mt-4 leading-relaxed">Nope, they&apos;ve got to go through an Authorized Indian Agent, can&apos;t apply on their own.</p>
              </details>
            </li>
            <li>
              <details className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <strong>How long is the CDSCO online registration valid for ?</strong>
                </summary>
                <p className="mt-4 leading-relaxed">CDSCO registration is valid for 5 years and you must be renewed before expiry to continue selling in India.</p>
              </details>
            </li>
            <li>
              <details className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 p-4 sm:p-6">
                <summary className="cursor-pointer list-none font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400">
                  <strong>Is CDSCO approval needed to import drugs for personal use?</strong>
                </summary>
                <p className="mt-4 leading-relaxed">Not required for small personal-use imports usually slide through without much hassle, but the moment it&apos;s commercial, you&apos;ll need proper approval for that.</p>
              </details>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
