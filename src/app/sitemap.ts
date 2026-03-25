import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jrcompliance.com'
  const currentDate = new Date().toISOString()

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Approval pages
  const approvalPages = [
    'aerb-license',
    'bee-certification',
    'bis-certification',
    'cdsco-registration',
    'cpcb-guidelines',
    'cpcb-registration',
    'dealer-possession-license',
    'delhi-pollution-control',
    'epr-battery-waste',
    'epr-certification',
    'epr-e-waste',
    'epr-plastic-waste',
    'epr-tyre-waste',
    'epr-used-oil-waste',
    'isi-mark-certification',
    'mtcte-certification',
    'non-dealer-possession-license',
    'state-pollution-board',
    'tec-certificate',
    'wpc-certification',
  ].map((slug) => ({
    url: `${baseUrl}/approval/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // BIS Certification sub-pages
  const bisCertificationSubPages = [
    'crs-certification',
    'fmcs-bis-certification',
    'scheme-x',
  ].map((slug) => ({
    url: `${baseUrl}/approval/bis-certification/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // CDSCO Registration sub-pages
  const cdscoSubPages = [
    'cosmetic-cdsco-registration',
    'drug-cdsco-registration',
    'in-vitro-diagnostics',
    'mdr-cdsco-registration',
  ].map((slug) => ({
    url: `${baseUrl}/approval/cdsco-registration/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // EPR Certification sub-pages
  const eprCertificationSubPages = [
    'battery-waste-compliance',
    'e-waste-compliance',
    'plastic-waste-compliance',
    'tyre-waste',
    'used-oil',
  ].map((slug) => ({
    url: `${baseUrl}/approval/epr-certification/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // State Pollution Board sub-pages
  const statePollutionSubPages = [
    {
      url: `${baseUrl}/approval/state-pollution-board/dpcc`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Corporate pages
  const corporatePages = [
    'annual-compliance',
    'apeda-registration',
    'asset-reconstruction-company-registration',
    'ayush-license',
    'coffee-board-registration',
    'company-registration',
    'copyright-objection',
    'copyright-registration',
    'csr-regisration',
    'design-registration',
    'dsc-certificate',
    'epf-registration',
    'esic-registration',
    'fcra-registration',
    'foreign-company-registration',
    'fssai-certificate',
    'fssai-modification',
    'gst-registration',
    'gst-return',
    'iec-registration',
    'income-tax-return-filing',
    'insurance-company-registration',
    'iso-certification',
    'llp-registration',
    'microfinance-company-registration',
    'msme-registration',
    'msme-return',
    'mutual-fund-company-registration',
    'nbfc-registration',
    'ngo-registration',
    'nidhi-company-registration',
    'niti-aayog',
    'opc-registration',
    'pan-registration-company',
    'pan-registration-individual',
    'partnership-firm-registration',
    'patent-registration-consultant',
    'pf-esi-return',
    'portfolio-manager-registration',
    'private-limited-company-registration-consultant',
    'producer-company-registration',
    'professional-tax-registration',
    'psara-license-registration-consultant',
    'public-limited-company-registration',
    'rera-registration',
    'roc-return',
    'section-8-company-registration',
    'seed-funding',
    'shop-and-establishment-act-registration',
    'society-registration',
    'sole-proprietorship-registration',
    'spice-board-registration-consultant',
    'startup-india-registration',
    'tds-return',
    'tea-board-registration',
    'tobacco-board-registration-consultant',
    'trademark-registration',
    'trademark-hearing',
    'trademark-opposition',
    'trademark-evidence-filing',
    'trademark-withdrawal',
    'trust-registration',
    'water-report',
  ].map((slug) => ({
    url: `${baseUrl}/corporate/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // FSSAI sub-pages
  const fssaiSubPages = [
    'fssai-central-license',
    'fssai-state-license',
  ].map((slug) => ({
    url: `${baseUrl}/corporate/fssai/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Trademark Registration sub-pages
  const trademarkSubPages = [
    'trademark-application-filing',
    'trademark-formality-check-fail',
    'trademark-modification',
    'trademark-objection',
    'trademark-renewal',
    'trademark-search',
  ].map((slug) => ({
    url: `${baseUrl}/corporate/trademark-registration/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    ...mainPages,
    ...approvalPages,
    ...bisCertificationSubPages,
    ...cdscoSubPages,
    ...eprCertificationSubPages,
    ...statePollutionSubPages,
    ...corporatePages,
    ...fssaiSubPages,
    ...trademarkSubPages,
  ]
}
