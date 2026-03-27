'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight, Phone, ArrowRight, Search, Building2, FileText, Globe, Shield, Lightbulb, UtensilsCrossed, TrendingUp, Calculator, Users, Coins, Cpu, Factory, Radio, Wifi, Home, MessageCircle } from 'lucide-react';

// Corporate Services Categories
const corporateCategories = [
  {
    id: 'company-registration',
    name: 'Company Registration',
    description: 'Register your business entity with complete legal compliance',
    icon: Building2,
    items: [
      { name: 'Company Registration', href: '/corporate/company-registration', desc: 'Complete registration guide' },
      { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant', desc: 'Most popular for startups' },
      { name: 'Public Limited Company', href: '/corporate/public-limited-company-registration', desc: 'For large enterprises' },
      { name: 'One Person Company', href: '/corporate/opc-registration', desc: 'Single owner business' },
      { name: 'Sole Proprietorship', href: '/corporate/sole-proprietorship-registration', desc: 'Individual business' },
      { name: 'LLP Registration', href: '/corporate/llp-registration', desc: 'Limited liability partnership' },
      { name: 'Partnership Firm', href: '/corporate/partnership-firm-registration', desc: 'Traditional partnership' },
      { name: 'Section 8 Company', href: '/corporate/section-8-company-registration', desc: 'Non-profit organization' },
      { name: 'Nidhi Company', href: '/corporate/nidhi-company-registration', desc: 'Mutual benefit society' },
      { name: 'Producer Company', href: '/corporate/producer-company-registration', desc: 'For farmers & producers' },
      { name: 'Society Registration', href: '/corporate/society-registration', desc: 'Charitable societies' },
      { name: 'Trust Registration', href: '/corporate/trust-registration', desc: 'Public & private trusts' },
      { name: 'NGO Registration', href: '/corporate/ngo-registration', desc: 'Non-governmental org' },
      { name: 'Foreign Company', href: '/corporate/foreign-company-registration', desc: 'For foreign entities' },
    ]
  },
  {
    id: 'mca-services',
    name: 'MCA Services',
    description: 'Ministry of Corporate Affairs filings and compliance',
    icon: FileText,
    items: [
      { name: 'Annual Compliance', href: '/corporate/annual-compliance', desc: 'Yearly statutory filings' },
      { name: 'ROC Return', href: '/corporate/roc-return', desc: 'Annual compliance filing' },
      { name: 'MSME Return', href: '/corporate/msme-return', desc: 'MSME annual returns' },
    ]
  },
  {
    id: 'import-export',
    name: 'Import Export',
    description: 'International trade licenses and registrations',
    icon: Globe,
    items: [
      { name: 'IEC Registration', href: '/corporate/iec-registration', desc: 'Import export code' },
      { name: 'APEDA Registration', href: '/corporate/apeda-registration', desc: 'Agricultural exports' },
      { name: 'Spice Board Registration', href: '/corporate/spice-board-registration-consultant', desc: 'Spice exports' },
      { name: 'Tea Board Registration', href: '/corporate/tea-board-registration', desc: 'Tea exports' },
      { name: 'Coffee Board Registration', href: '/corporate/coffee-board-registration', desc: 'Coffee exports' },
      { name: 'Tobacco Board', href: '/corporate/tobacco-board-registration-consultant', desc: 'Tobacco exports' },
    ]
  },
  {
    id: 'govt-license',
    name: 'Government License',
    description: 'Essential government licenses for your business',
    icon: Shield,
    items: [
      { name: 'PSARA License', href: '/corporate/psara-license-registration-consultant', desc: 'Security agency license' },
      { name: 'Shop & Establishment', href: '/corporate/shop-and-establishment-act-registration', desc: 'Shop registration' },
      { name: 'RERA Registration', href: '/corporate/rera-registration', desc: 'Real estate registration' },
      { name: 'MSME Registration', href: '/corporate/msme-registration', desc: 'Udyam registration' },
      { name: 'Startup India', href: '/corporate/startup-india-registration', desc: 'DPIIT recognition' },
      { name: 'NITI Aayog', href: '/corporate/niti-aayog', desc: 'NGO Darpan registration' },
      { name: 'ISO Certification', href: '/corporate/iso-certification', desc: 'Quality standards' },
      { name: 'AYUSH License', href: '/corporate/ayush-license', desc: 'Traditional medicine' },
    ]
  },
  {
    id: 'ipr-services',
    name: 'IPR Services',
    description: 'Protect your intellectual property rights',
    icon: Lightbulb,
    items: [
      { name: 'Trademark Registration', href: '/corporate/trademark-registration', desc: 'Brand protection' },
      { name: 'Trademark Hearing', href: '/corporate/trademark-hearing', desc: 'Hearing assistance' },
      { name: 'Trademark Opposition', href: '/corporate/trademark-opposition', desc: 'Opposition response' },
      { name: 'Trademark Evidence Filing', href: '/corporate/trademark-evidence-filing', desc: 'Evidence submission' },
      { name: 'Trademark Withdrawal', href: '/corporate/trademark-withdrawal', desc: 'Withdraw application' },
      { name: 'Copyright Registration', href: '/corporate/copyright-registration', desc: 'Creative protection' },
      { name: 'Copyright Objection', href: '/corporate/copyright-objection', desc: 'Objection response' },
      { name: 'Patent Registration', href: '/corporate/patent-registration-consultant', desc: 'Invention protection' },
      { name: 'Design Registration', href: '/corporate/design-registration', desc: 'Product design' },
    ]
  },
  {
    id: 'fssai',
    name: 'FSSAI',
    description: 'Food safety and standards authority licenses',
    icon: UtensilsCrossed,
    items: [
      { name: 'FSSAI Registration', href: '/corporate/fssai-certificate', desc: 'Basic food license' },
      { name: 'FSSAI State License', href: '/corporate/fssai/fssai-state-license', desc: 'State level license' },
      { name: 'FSSAI Central License', href: '/corporate/fssai/fssai-central-license', desc: 'Central license' },
      { name: 'FSSAI Modification', href: '/corporate/fssai-modification', desc: 'Modify license details' },
      { name: 'Water Report', href: '/corporate/water-report', desc: 'FSSAI water testing' },
    ]
  },
  {
    id: 'sebi-business',
    name: 'SEBI Business',
    description: 'Financial services and SEBI registrations',
    icon: TrendingUp,
    items: [
      { name: 'NBFC Registration', href: '/corporate/nbfc-registration', desc: 'Non-banking finance' },
      { name: 'Microfinance Company', href: '/corporate/microfinance-company-registration', desc: 'Microfinance license' },
      { name: 'Asset Reconstruction', href: '/corporate/asset-reconstruction-company-registration', desc: 'ARC registration' },
      { name: 'Insurance Company', href: '/corporate/insurance-company-registration', desc: 'Insurance license' },
      { name: 'Mutual Fund Company', href: '/corporate/mutual-fund-company-registration', desc: 'AMC registration' },
      { name: 'Portfolio Manager', href: '/corporate/portfolio-manager-registration', desc: 'PMS registration' },
    ]
  },
  {
    id: 'tax-accounting',
    name: 'Tax & Accounting',
    description: 'Tax registration and filing services',
    icon: Calculator,
    items: [
      { name: 'GST Registration', href: '/corporate/gst-registration', desc: 'Goods & services tax' },
      { name: 'GST Return Filing', href: '/corporate/gst-return', desc: 'Monthly/quarterly returns' },
      { name: 'Income Tax Return', href: '/corporate/income-tax-return-filing', desc: 'ITR filing services' },
      { name: 'TDS Return', href: '/corporate/tds-return', desc: 'TDS filing services' },
      { name: 'PAN for Company', href: '/corporate/pan-registration-company', desc: 'Company PAN card' },
      { name: 'PAN for Individual', href: '/corporate/pan-registration-individual', desc: 'Individual PAN' },
      { name: 'Professional Tax', href: '/corporate/professional-tax-registration', desc: 'State professional tax' },
      { name: 'DSC Certificate', href: '/corporate/dsc-certificate', desc: 'Digital signature' },
    ]
  },
  {
    id: 'labour-compliance',
    name: 'Labour Compliance',
    description: 'Employee and labour law compliance',
    icon: Users,
    items: [
      { name: 'EPF Registration', href: '/corporate/epf-registration', desc: 'Provident fund' },
      { name: 'ESIC Registration', href: '/corporate/esic-registration', desc: 'Employee insurance' },
      { name: 'PF & ESI Return', href: '/corporate/pf-esi-return', desc: 'Monthly returns' },
    ]
  },
  {
    id: 'fund-raising',
    name: 'Fund Raising',
    description: 'Funding and grant registration services',
    icon: Coins,
    items: [
      { name: 'CSR Registration', href: '/corporate/csr-regisration', desc: 'Corporate social responsibility' },
      { name: 'FCRA Registration', href: '/corporate/fcra-registration', desc: 'Foreign contributions' },
      { name: 'Seed Funding', href: '/corporate/seed-funding', desc: 'Startup funding' },
    ]
  },
];

// Technical Services Categories
const technicalCategories = [
  {
    id: 'bis',
    name: 'BIS Certification',
    description: 'Bureau of Indian Standards product certifications',
    icon: Cpu,
    items: [
      { name: 'BIS Certification', href: '/approval/bis-certification', desc: 'Foreign manufacturer cert' },
      { name: 'ISI Mark Certification', href: '/approval/isi-mark-certification', desc: 'Indian standards mark' },
      { name: 'FMCS Certification', href: '/approval/bis-certification/fmcs-bis-certification', desc: 'Foreign manufacturer scheme' },
      { name: 'CRS Certification', href: '/approval/bis-certification/crs-certification', desc: 'Compulsory registration' },
      { name: 'Scheme-X', href: '/approval/bis-certification/scheme-x', desc: 'Self-declaration scheme' },
    ]
  },
  {
    id: 'pollution',
    name: 'Pollution Advisory',
    description: 'Environmental clearances and waste management',
    icon: Factory,
    items: [
      { name: 'CPCB Registration', href: '/approval/cpcb-registration', desc: 'Central pollution board' },
      { name: 'CPCB Guidelines', href: '/approval/cpcb-guidelines', desc: 'Compliance guidelines' },
      { name: 'State Pollution Board', href: '/approval/state-pollution-board', desc: 'State level NOC' },
      { name: 'Delhi Pollution Control', href: '/approval/delhi-pollution-control', desc: 'DPCC compliance' },
      { name: 'EPR Certification', href: '/approval/epr-certification', desc: 'Extended producer resp.' },
      { name: 'EPR E-Waste', href: '/approval/epr-e-waste', desc: 'Electronic waste EPR' },
      { name: 'EPR Battery Waste', href: '/approval/epr-battery-waste', desc: 'Battery waste EPR' },
      { name: 'EPR Plastic Waste', href: '/approval/epr-plastic-waste', desc: 'Plastic waste EPR' },
      { name: 'EPR Tyre Waste', href: '/approval/epr-tyre-waste', desc: 'Tyre waste EPR' },
      { name: 'EPR Used Oil Waste', href: '/approval/epr-used-oil-waste', desc: 'Used oil EPR' },
      { name: 'BEE Certification', href: '/approval/bee-certification', desc: 'Energy efficiency' },
    ]
  },
  {
    id: 'tec',
    name: 'DoT Certification',
    description: 'Telecom Engineering Centre approvals',
    icon: Radio,
    items: [
      { name: 'TEC Certificate', href: '/approval/tec-certificate', desc: 'Telecom equipment cert' },
      { name: 'MTCTE Certification', href: '/approval/mtcte-certification', desc: 'Mandatory testing' },
    ]
  },
  {
    id: 'wpc',
    name: 'WPC Certification',
    description: 'Wireless Planning & Coordination approvals',
    icon: Wifi,
    items: [
      { name: 'WPC ETA Approval', href: '/approval/wpc-certification', desc: 'Equipment type approval' },
      { name: 'Dealer Possession License', href: '/approval/dealer-possession-license', desc: 'For dealers' },
      { name: 'Non-Dealer License', href: '/approval/non-dealer-possession-license', desc: 'End user license' },
    ]
  },
  {
    id: 'others',
    name: 'Other Approvals',
    description: 'Additional regulatory approvals and certifications',
    icon: Shield,
    items: [
      { name: 'CDSCO Medical Devices', href: '/approval/cdsco-registration', desc: 'Medical devices' },
      { name: 'MDR CDSCO Registration', href: '/approval/cdsco-registration/mdr-cdsco-registration', desc: 'Medical device rules' },
      { name: 'Cosmetic CDSCO', href: '/approval/cdsco-registration/cosmetic-cdsco-registration', desc: 'Cosmetic products' },
      { name: 'IVD CDSCO Registration', href: '/approval/cdsco-registration/in-vitro-diagnostics', desc: 'In-vitro diagnostics' },
      { name: 'Drug CDSCO Registration', href: '/approval/cdsco-registration/drug-cdsco-registration', desc: 'Drug licensing' },
      { name: 'AERB License', href: '/approval/aerb-license', desc: 'Radiation safety' },
    ]
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveSection, setMobileActiveSection] = useState<string | null>(null);
  const [activeCorporateCategory, setActiveCorporateCategory] = useState(corporateCategories[0].id);
  const [activeTechnicalCategory, setActiveTechnicalCategory] = useState(technicalCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Filter items based on search
  const getFilteredItems = (categories: typeof corporateCategories) => {
    if (!searchQuery.trim()) return null;
    const filtered: { name: string; href: string; category: string }[] = [];
    categories.forEach(cat => {
      cat.items.forEach(item => {
        if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          filtered.push({ ...item, category: cat.name });
        }
      });
    });
    return filtered;
  };

  const filteredCorporateItems = getFilteredItems(corporateCategories);
  const filteredTechnicalItems = getFilteredItems(technicalCategories);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/JRlogo2.png"
              alt="JR Compliance"
              width={250}
              height={75}
              className="w-auto h-15 lg:h-18 object-contain brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Home
            </Link>

            {/* Corporate Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('corporate');
                setSearchQuery('');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Corporate Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown - Light Theme */}
              <div className={`fixed left-1/2 -translate-x-1/2 top-16 lg:top-20 pt-4 transition-all duration-300 ${
                activeDropdown === 'corporate' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                <div className="w-[95vw] max-w-5xl bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-64 bg-gray-50/80 border-r border-gray-100 py-4">
                      {/* Search Bar */}
                      <div className="px-4 mb-4">
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Category List */}
                      <div className="space-y-0.5 max-h-[380px] overflow-y-auto px-2">
                        {corporateCategories.map((category) => {
                          const IconComponent = category.icon;
                          return (
                            <button
                              key={category.id}
                              onMouseEnter={() => setActiveCorporateCategory(category.id)}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all group ${
                                activeCorporateCategory === category.id
                                  ? 'bg-blue-50 text-blue-700'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                  activeCorporateCategory === category.id 
                                    ? 'bg-blue-100' 
                                    : 'bg-white border border-gray-200 group-hover:border-gray-300'
                                }`}>
                                  <IconComponent size={16} className={activeCorporateCategory === category.id ? 'text-blue-600' : 'text-gray-500'} />
                                </div>
                                <span className="text-sm font-medium">{category.name}</span>
                              </div>
                              <ChevronRight size={16} className={`transition-colors ${
                                activeCorporateCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                              }`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Side - Items Grid */}
                    <div className="flex-1 flex flex-col">
                      {/* Search Results */}
                      {filteredCorporateItems && filteredCorporateItems.length > 0 ? (
                        <div className="p-4 max-h-[380px] overflow-y-auto">
                          <p className="text-xs text-gray-500 mb-3 font-medium">Found {filteredCorporateItems.length} services</p>
                          <div className="grid grid-cols-2 gap-2">
                            {filteredCorporateItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                              >
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">{item.name}</p>
                                  <p className="text-xs text-gray-400">{item.category}</p>
                                </div>
                                <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : filteredCorporateItems && filteredCorporateItems.length === 0 ? (
                        <div className="p-12 text-center flex-1 flex items-center justify-center">
                          <div>
                            <Search size={40} className="mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-500 text-sm">No services found for &quot;{searchQuery}&quot;</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* Items Content */}
                          <div className="p-5 flex-1 max-h-[400px] overflow-y-auto">
                            {corporateCategories.map((category) => (
                              <div
                                key={category.id}
                                className={`${activeCorporateCategory === category.id ? 'block' : 'hidden'}`}
                              >
                                <div className="grid grid-cols-3 gap-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all group"
                                    >
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.desc}</p>
                                      </div>
                                      <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500 flex-shrink-0" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Footer - Selected Category Info */}
                          <div className="border-t border-gray-100 bg-gradient-to-r from-blue-50 to-white">
                            {corporateCategories.map((category) => (
                              <div
                                key={category.id}
                                className={`${activeCorporateCategory === category.id ? 'block' : 'hidden'}`}
                              >
                                <div className="px-5 py-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                      <category.icon size={20} className="text-blue-600" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-800">{category.name}</p>
                                      <p className="text-xs text-gray-500">{category.description}</p>
                                    </div>
                                  </div>
                                  <a
                                    href="https://api.whatsapp.com/send?phone=919266450125&text=Hi%2C+I+need+help+with+compliance+services&type=phone_number&app_absent=0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                                  >
                                    <MessageCircle size={14} />
                                    <span>WhatsApp</span>
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => {
                setActiveDropdown('technical');
                setSearchQuery('');
              }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                <span>Technical Services</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown - Light Theme */}
              <div className={`fixed left-1/2 -translate-x-1/2 top-16 lg:top-20 pt-4 transition-all duration-300 ${
                activeDropdown === 'technical' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
              }`}>
                <div className="w-[95vw] max-w-4xl bg-white rounded-2xl shadow-2xl shadow-black/20 overflow-hidden border border-gray-100">
                  <div className="flex">
                    {/* Left Sidebar - Categories */}
                    <div className="w-56 bg-gray-50/80 border-r border-gray-100 py-4">
                      {/* Search Bar */}
                      <div className="px-4 mb-4">
                        <div className="relative">
                          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            placeholder="Search approvals..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-800 text-sm placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Category List */}
                      <div className="space-y-0.5 max-h-[320px] overflow-y-auto px-2">
                        {technicalCategories.map((category) => {
                          const IconComponent = category.icon;
                          return (
                            <button
                              key={category.id}
                              onMouseEnter={() => setActiveTechnicalCategory(category.id)}
                              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all group ${
                                activeTechnicalCategory === category.id
                                  ? 'bg-cyan-50 text-cyan-700'
                                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                                  activeTechnicalCategory === category.id 
                                    ? 'bg-cyan-100' 
                                    : 'bg-white border border-gray-200 group-hover:border-gray-300'
                                }`}>
                                  <IconComponent size={16} className={activeTechnicalCategory === category.id ? 'text-cyan-600' : 'text-gray-500'} />
                                </div>
                                <span className="text-sm font-medium">{category.name}</span>
                              </div>
                              <ChevronRight size={16} className={`transition-colors ${
                                activeTechnicalCategory === category.id ? 'text-cyan-600' : 'text-gray-400'
                              }`} />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Side - Items Grid */}
                    <div className="flex-1 flex flex-col">
                      {/* Search Results */}
                      {filteredTechnicalItems && filteredTechnicalItems.length > 0 ? (
                        <div className="p-4 max-h-[380px] overflow-y-auto">
                          <p className="text-xs text-gray-500 mb-3 font-medium">Found {filteredTechnicalItems.length} approvals</p>
                          <div className="grid grid-cols-2 gap-2">
                            {filteredTechnicalItems.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group"
                              >
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-gray-800 group-hover:text-cyan-600">{item.name}</p>
                                  <p className="text-xs text-gray-400">{item.category}</p>
                                </div>
                                <ChevronRight size={14} className="text-gray-300 group-hover:text-cyan-500" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : filteredTechnicalItems && filteredTechnicalItems.length === 0 ? (
                        <div className="p-12 text-center flex-1 flex items-center justify-center">
                          <div>
                            <Search size={40} className="mx-auto text-gray-300 mb-3" />
                            <p className="text-gray-500 text-sm">No approvals found for &quot;{searchQuery}&quot;</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* Items Content */}
                          <div className="p-5 flex-1 max-h-[280px] overflow-y-auto">
                            {technicalCategories.map((category) => (
                              <div
                                key={category.id}
                                className={`${activeTechnicalCategory === category.id ? 'block' : 'hidden'}`}
                              >
                                <div className="grid grid-cols-2 gap-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-cyan-50 border border-transparent hover:border-cyan-100 transition-all group"
                                    >
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-gray-800 group-hover:text-cyan-600">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.desc}</p>
                                      </div>
                                      <ChevronRight size={14} className="text-gray-300 group-hover:text-cyan-500 flex-shrink-0" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Footer - Selected Category Info */}
                          <div className="border-t border-gray-100 bg-gradient-to-r from-cyan-50 to-white">
                            {technicalCategories.map((category) => (
                              <div
                                key={category.id}
                                className={`${activeTechnicalCategory === category.id ? 'block' : 'hidden'}`}
                              >
                                <div className="px-5 py-4 flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                                      <category.icon size={20} className="text-cyan-600" />
                                    </div>
                                    <div>
                                      <p className="text-sm font-semibold text-gray-800">{category.name}</p>
                                      <p className="text-xs text-gray-500">{category.description}</p>
                                    </div>
                                  </div>
                                  <a
                                    href="https://wa.me/919266450125?text=Hi%2C%20I%20need%20help%20with%20technical%20certifications"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                                  >
                                    <MessageCircle size={14} />
                                    <span>WhatsApp</span>
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              About
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone */}
            <a 
              href="tel:1800121410410" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              <Phone size={16} />
              <span>1800-121-410-410</span>
            </a>

            {/* CTA Button */}
            <a
              href="https://api.whatsapp.com/send?phone=919266450125&text=Hi%2C+I+need+help+with+compliance+services&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Call Button */}
            <a
              href="tel:1800121410410"
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Call us"
            >
              <Phone size={22} />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal - Rendered via Portal */}
      <MobileMenuModal 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        mobileActiveSection={mobileActiveSection}
        setMobileActiveSection={setMobileActiveSection}
      />
    </header>
  );
}

// Mobile Menu Modal Component
function MobileMenuModal({ 
  isOpen, 
  onClose,
  mobileActiveSection,
  setMobileActiveSection
}: { 
  isOpen: boolean; 
  onClose: () => void;
  mobileActiveSection: string | null;
  setMobileActiveSection: (section: string | null) => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  const modalContent = (
    <div 
      className={`fixed inset-0 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ zIndex: 99999 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`absolute inset-x-0 top-0 bg-slate-900 max-h-[100vh] overflow-hidden transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10 bg-slate-900">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/JRlogo2.png"
              alt="JR Compliance"
              width={220}
              height={55}
              className="w-auto h-12 object-contain brightness-0 invert"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(100vh-80px)] bg-slate-900">
          <div className="px-4 py-4 space-y-3">
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Home size={20} className="text-blue-400" />
              </div>
              <span>Home</span>
            </Link>

            {/* Corporate Services */}
            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'corporate' ? null : 'corporate')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold text-base hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <FileText size={20} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <span className="block">Corporate Services</span>
                    <span className="text-xs text-white/50 font-normal">100+ Services</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 text-blue-400 ${mobileActiveSection === 'corporate' ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileActiveSection === 'corporate' && (
                <div className="border-t border-white/10 max-h-[50vh] overflow-y-auto">
                  <div className="p-3 space-y-2">
                    {corporateCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.id} className="rounded-lg border border-white/5 overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2.5 bg-blue-500/10">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                              <IconComponent size={14} className="text-blue-400" />
                            </div>
                            <span className="text-blue-400 font-medium text-sm">{category.name}</span>
                            <span className="ml-auto text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{category.items.length}</span>
                          </div>
                          <div className="p-2 space-y-1 bg-slate-900/50">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-3 py-2.5 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span>{item.name}</span>
                                <ArrowRight size={14} className="text-white/30" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Technical Services */}
            <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02]">
              <button
                onClick={() => setMobileActiveSection(mobileActiveSection === 'technical' ? null : 'technical')}
                className="w-full flex items-center justify-between px-4 py-3 text-white font-semibold text-base hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Cpu size={20} className="text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <span className="block">Technical Services</span>
                    <span className="text-xs text-white/50 font-normal">Certifications & Approvals</span>
                  </div>
                </div>
                <ChevronDown size={20} className={`transition-transform duration-300 text-cyan-400 ${mobileActiveSection === 'technical' ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileActiveSection === 'technical' && (
                <div className="border-t border-white/10 max-h-[50vh] overflow-y-auto">
                  <div className="p-3 space-y-2">
                    {technicalCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.id} className="rounded-lg border border-white/5 overflow-hidden">
                          <div className="flex items-center gap-2 px-3 py-2.5 bg-cyan-500/10">
                            <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                              <IconComponent size={14} className="text-cyan-400" />
                            </div>
                            <span className="text-cyan-400 font-medium text-sm">{category.name}</span>
                            <span className="ml-auto text-[10px] text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{category.items.length}</span>
                          </div>
                          <div className="p-2 space-y-1 bg-slate-900/50">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between px-3 py-2.5 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <span>{item.name}</span>
                                <ArrowRight size={14} className="text-white/30" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <Users size={20} className="text-purple-400" />
              </div>
              <span>About Us</span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-white font-medium text-base rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Phone size={20} className="text-emerald-400" />
              </div>
              <span>Contact Us</span>
            </Link>

            {/* CTA Section */}
            <div className="pt-4 space-y-3 border-t border-white/10 mt-4">
              <a
                href="tel:1800121410410"
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-white/5 border border-white/10 text-white font-medium text-base rounded-xl hover:bg-white/10 transition-colors"
              >
                <Phone size={20} />
                <span>1800-121-410-410</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=919266450125&text=Hi%2C+I+need+help+with+compliance+services&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center font-bold text-base rounded-xl transition-colors shadow-lg shadow-green-500/25"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
