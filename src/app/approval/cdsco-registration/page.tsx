import ServicePageTemplate from '@/components/ServicePageTemplate';
import CDSCORegistrationContent from './CDSCORegistrationContent';

export default function CDSCORegistrationPage() {
  return (
    <ServicePageTemplate
      title="CDSCO Registration"
      logo="/services_logo/cdsco.png"
      color="orange"
      description={
        <div className="space-y-4">
          <p>
            CDSCO, short for Central Drugs Standard Control Organisation. This is essentially the authority India relies on to make sure medicines and medical devices are actually safe before they reach people. This works under the Ministry of Health and Family Welfare, and the one heading it is known as the Drugs Controller General of India, or DCGI.It ensures compliance with the Drugs and Cosmetics Act, 1940, and Indian regulatory standards for safety and quality.
          </p>
          <p>
            Before any new drug hits the Indian market, or before a clinical trial can even begin, CDSCO registration has to give the green light. They also set the rules that drug companies and medical device makers have to follow, keep a check on imported medicines, and work hand in hand with state drug departments across the country. In short, if the FDA does this job in the US, CDSCO does the same job in India.
          </p>
        </div>
      }
      additionalContent={<CDSCORegistrationContent />}
      showDefaultSections={false}
      benefits={[]}
      process={[]}
      documents={[]}
      faqs={[]}
    />
  );
}
