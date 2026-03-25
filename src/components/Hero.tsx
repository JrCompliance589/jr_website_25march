'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Phone, CheckCircle, ChevronRight, Users, Clock, Award, Shield, BadgeCheck, Lock, Star, AlertCircle } from 'lucide-react';
import { submitLeadWithAutoDetection } from '@/lib/api';

const services = [
  { name: 'BIS Certification', href: '/approval/bis-certification', category: 'Technical' },
  { name: 'ISI Certification', href: '/approval/isi-mark-certification', category: 'Technical' },
  { name: 'TEC Certification', href: '/approval/tec-certificate', category: 'Technical' },
  { name: 'WPC Certification', href: '/approval/wpc-certification', category: 'Technical' },
  { name: 'CDSCO Registration', href: '/approval/cdsco-registration', category: 'Technical' },
  { name: 'EPR Certification', href: '/approval/epr-certification', category: 'Technical' },
  { name: 'BEE Certification', href: '/approval/bee-certification', category: 'Technical' },
  { name: 'Company Registration', href: '/services/company-registration', category: 'Corporate' },
  { name: 'GST Registration', href: '/services/gst-registration', category: 'Corporate' },
  { name: 'FSSAI License', href: '/services/fssai-license', category: 'Corporate' },
  { name: 'PSARA License', href: '/services/psara-license', category: 'Corporate' },
  { name: 'Private Limited Company', href: '/corporate/private-limited-company-registration-consultant', category: 'Corporate' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration', category: 'Corporate' },
  { name: 'ISO Certification', href: '/corporate/iso-certification', category: 'Corporate' },
  { name: 'MSME Registration', href: '/corporate/msme-registration', category: 'Corporate' },
];

const stats = [
  { value: '10,000+', label: 'Businesses Served', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Clock },
  { value: '98%', label: 'Success Rate', icon: Award },
  { value: '50+', label: 'Expert Consultants', icon: Shield },
];

const features = [
  'No credit card required',
  'Free consultation',
  '24/7 support',
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Media features for "As Seen On"
  const mediaFeatures = [
    { name: 'Economic Times', logo: 'https://m.economictimes.com/photo/msid-74726259,quality-100/et-logo.jpg', url: 'https://m.economictimes.com/industry/cons-products/fmcg/regulatory-delays-cripple-indian-cos-certifications-disrupt-fmcg-electronics-sectors-performance/amp_articleshow/126258894.cms' },
    { name: 'Business World', logo: 'https://static.businessworld.in/bw-main-logo.png', url: 'https://www.businessworld.in/article/survey-flags-red-tape-as-key-risk-to-indias-manufacturing-momentum-585429' },
    { name: 'Communications Today', logo: 'https://www.communicationstoday.co.in/wp-content/uploads/2020/10/glkgfdljkgkdf.png', url: 'https://www.communicationstoday.co.in/dot-revamps-security-certification-for-fibre-broadband-devices/' },
    { name: 'Entrepreneur India', logo: 'https://www.entrepreneurindia.com/insight-new/images/logo.svg', url: 'https://www.entrepreneurindia.com/blog/en/article/how-dots-streamlining-of-indias-efforts-to-simplify-security-testing-extend-the-pro-tem-certification-scheme-and-others-could-boost-indigenous-telecom-equipment-manufacturing-could-spur-local-telecom-growth.58714' },
    { name: 'Zee News', logo: 'https://english.cdn.zeenews.com/static/public/updated_logos/english.svg', url: 'https://zeenews.india.com/jr-compliance-a-house-for-all-global-compliance-services-2411707.html' },
    { name: 'Hindustan Times', logo: 'https://www.hindustantimes.com/static-content/1y/ht/ht_100_logoblack@2x.webp', url: 'https://www.hindustantimes.com/brand-post/jr-compliance-helping-indian-businesses-expand-global-outreach/story-vqZ4goyJEjTHMPwQiN2VxO.html' },
    { name: 'Dainik Bhaskar', logo: 'https://i.pinimg.com/736x/d7/a6/d0/d7a6d0bd61a6d438a8f402bf8b229f1e.jpg', url: 'https://www.bhaskar.com/local/delhi-ncr/gurgaon/news/rishikesh-mishra-of-jr-compliance-believes-that-corporate-compliance-will-facilitate-economic-growth-129422333.html' },
  ];

  // Featured services for sticky bar rotation
  const featuredServices = [
    { name: 'BIS Certification', desc: 'Bureau of Indian Standards' },
    { name: 'TEC Certification', desc: 'Telecom Engineering Centre' },
    { name: 'FSSAI License', desc: 'Food Safety & Standards' },
    { name: 'ISO Certification', desc: 'International Standards' },
    { name: 'WPC Certification', desc: 'Wireless Planning & Coordination' },
  ];

  // Calculate progress step based on form completion
  const currentStep = formData.phone.length === 10 ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;

  const filteredServices = useMemo(() =>
    services.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6), [searchQuery]
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Rotate featured services every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % featuredServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredServices.length]);

  // Show sticky bar on scroll, hide when form visible or near footer
  useEffect(() => {
    const handleVisibility = () => {
      const formElement = formRef.current;
      const footer = document.querySelector('footer');
      const scrollY = window.scrollY;

      // Only show after scrolling down 300px
      if (scrollY < 300) {
        setShowStickyBar(false);
        return;
      }

      let hideBar = false;

      // Check if form is in viewport
      if (formElement) {
        const formRect = formElement.getBoundingClientRect();
        const formVisible = formRect.top < window.innerHeight && formRect.bottom > 0;
        if (formVisible) hideBar = true;
      }

      // Check if footer is in viewport
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const footerVisible = footerRect.top < window.innerHeight;
        if (footerVisible) hideBar = true;
      }

      // Also hide when near bottom of page
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
      if (nearBottom) hideBar = true;

      setShowStickyBar(!hideBar);
    };

    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);
    handleVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await submitLeadWithAutoDetection(
        { name: formData.name, email: formData.email, phone: formData.phone },
        'Homepage - Enquiry Form',
        formData.message || undefined,
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Static with CSS animation */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Floating Icons - Decorative */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-32 left-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3s' }}>💬</div>
        <div className="absolute top-40 right-[15%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>📊</div>
        <div className="absolute bottom-40 right-[10%] text-4xl opacity-20 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>🔔</div>
        <div className="absolute bottom-60 left-[8%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>⭐</div>
        <div className="absolute bottom-32 right-[25%] text-3xl opacity-20 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>🚀</div>
      </div>

      {/* Main Content */}
      <div className="relative w-full overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">

            {/* Left Side - Content */}
            <div className="text-center lg:text-left overflow-hidden">

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6 lg:mb-8">
                <span className="text-cyan-400">✨</span>
                <span className="text-xs sm:text-sm font-medium text-gray-300">Trusted by 10,000+ enterprises India based</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Power Your Business{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Compliance
                </span>
              </h1>



              {/* Trusted Clients Logo Reel */}
              <div className="mb-6 overflow-hidden w-full max-w-full">
                <p className="text-xs text-gray-400 mb-3 text-center lg:text-left">Helped many global brands achieve compliance</p>
                <div className="relative w-full overflow-hidden">
                  {/* Scrolling container */}
                  <div className="flex animate-scroll w-max">
                    {/* First set of logos */}
                    <div className="flex items-center gap-8 sm:gap-10 px-4 shrink-0">
                      <img src="/logo/6750381b5985420c3fd6e61f_sony.png" alt="Sony" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/681867c363c09e87654cd69f_Tata_Play_2022_logo 1.png" alt="Tata Play" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/6750381ad02e6dfd82a68f4d_healthify.png" alt="Healthify" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/6750381bca61ce816f91953e_sennhe.png" alt="Sennheiser" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/672dc1a691c67b848963be5a_lipi logo.png" alt="Lipi" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/68495d3d9d0d20176f5d4f90_ISC Logo.png" alt="ISC" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/Gta3nPom.png" alt="Gta3nPom" className="h-11 sm:h-14 w-auto min-w-[90px] max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert -mx-2" />
                      <img src="/logo/intertek.png" alt="Intertek" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/toray_logo.png" alt="Toray" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <div className="h-9 sm:h-10 w-auto min-w-[90px] max-w-[140px] overflow-hidden flex items-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <img src="/logo/newline.png" alt="Newline" className="w-auto h-20 sm:h-24 object-cover brightness-0 invert" />
                      </div>
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-8 sm:gap-10 px-4 shrink-0">
                      <img src="/logo/6750381b5985420c3fd6e61f_sony.png" alt="Sony" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/681867c363c09e87654cd69f_Tata_Play_2022_logo 1.png" alt="Tata Play" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/6750381ad02e6dfd82a68f4d_healthify.png" alt="Healthify" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/6750381bca61ce816f91953e_sennhe.png" alt="Sennheiser" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/672dc1a691c67b848963be5a_lipi logo.png" alt="Lipi" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/68495d3d9d0d20176f5d4f90_ISC Logo.png" alt="ISC" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/Gta3nPom.png" alt="Gta3nPom" className="h-11 sm:h-14 w-auto min-w-[90px] max-w-[160px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert -mx-2" />
                      <img src="/logo/intertek.png" alt="Intertek" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <img src="/logo/toray_logo.png" alt="Toray" className="h-9 sm:h-10 w-auto min-w-[70px] max-w-[120px] object-contain opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-0 invert" />
                      <div className="h-9 sm:h-10 w-auto min-w-[90px] max-w-[140px] overflow-hidden flex items-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <img src="/logo/newline.png" alt="Newline" className="w-auto h-20 sm:h-24 object-cover brightness-0 invert" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-full lg:max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed px-1 sm:px-0">
                India&apos;s most trusted compliance partner for BIS, ISI, FSSAI, GST & 100+ regulatory services.
                Reach your business goals with our expert consultants.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Link
                  href="/contact"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 text-sm sm:text-base"
                >
                  <span>Start Free Consultation</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:1800121410410"
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm sm:text-base"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm text-gray-400">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-1 sm:gap-1.5 lg:gap-2">
                    <CheckCircle size={12} className="text-cyan-400 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Search Section */}
              
            </div>

            <div ref={formRef} className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto relative mt-4 lg:mt-0 overflow-hidden">
              {/* Floating Badge */}
              {/* <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 z-10">
                <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-xs font-semibold shadow-lg shadow-emerald-500/25">
                  <Lock size={10} className="sm:w-3 sm:h-3" />
                  <span>100% Secure</span>
                </div>
              </div> */}

              <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden w-full max-w-full">
                {/* Premium Header */}
                <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Get Expert Consultation</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Free quote in 2 minutes</p>
                    </div>
                    {/* <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-xs font-medium text-emerald-400">Online</span>
                    </div> */}
                  </div>

                  {/* Progress Steps */}
                  <div className="mt-4 flex items-center gap-2">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex-1 flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${currentStep >= step
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-white/5 text-gray-500 border border-white/10'
                          }`}>
                          {currentStep > step ? <CheckCircle size={14} /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`flex-1 h-0.5 rounded-full transition-all ${currentStep > step ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'
                            }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Form Body */}
                <div className="p-4 sm:p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                        <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <CheckCircle size={36} className="text-white" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Request Submitted!</h4>
                      <p className="text-gray-400 text-sm">Our expert will call you within 30 minutes</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      {/* Name Field */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative">
                          <Users size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none"
                          />
                          {formData.name.length > 2 && (
                            <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />
                          )}
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative">
                          <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none"
                          />
                          {formData.email.includes('@') && formData.email.includes('.') && (
                            <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />
                          )}
                        </div>
                      </div>

                      {/* Phone Field */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative flex">
                          <span className="inline-flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 rounded-l-lg sm:rounded-l-xl bg-white/10 border border-r-0 border-white/10 text-cyan-400 font-medium text-xs sm:text-sm">
                            <span>🇮🇳</span>
                            <span>+91</span>
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{10}"
                            className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-r-lg sm:rounded-r-xl bg-white/5 border border-l-0 border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none"
                          />
                          {formData.phone.length === 10 && (
                            <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />
                          )}
                        </div>
                      </div>

                      {/* Collapsible Message Field */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowMessageBox(!showMessageBox)}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          <ChevronRight size={14} className={`transition-transform ${showMessageBox ? 'rotate-90' : ''}`} />
                          <span>Add a message (optional)</span>
                        </button>
                        {showMessageBox && (
                          <div className="mt-2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                            <textarea
                              name="message"
                              placeholder="Tell us about your requirements..."
                              value={formData.message}
                              onChange={handleChange}
                              rows={3}
                              className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none resize-none"
                            />
                          </div>
                        )}
                      </div>

                      {/* Trust Indicators */}
                      <div className="flex items-center justify-between py-1.5 sm:py-2 px-0.5 sm:px-1">
                        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
                          <span className="flex items-center gap-0.5 sm:gap-1"><Shield size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> Secure</span>
                          <span className="flex items-center gap-0.5 sm:gap-1"><Clock size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> 2 min</span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500">No spam, ever</span>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] hover:bg-right text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
                      >
                        <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Get Free Consultation'}</span>
                        {isSubmitting ? (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                        )}
                      </button>

                      {/* Error Message */}
                      {submitError && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertCircle size={16} className="flex-shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      )}
                    </form>
                  )}
                </div>

                <div className="px-2 sm:px-4 py-3 bg-white/[0.02] border-t border-white/5 overflow-hidden">
                  <p className="text-[11px] sm:text-[12px] text-gray-400 text-center font-medium tracking-wide mb-1">
                    Trusted & Recognized By
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 text-center mb-2 px-1">
                    Featured across reputed platforms
                  </p>

                  <div className="relative overflow-hidden">
                    {/* Scrolling container - pauses on hover */}
                    <div className="flex animate-scroll-slow hover:[animation-play-state:paused]">
                      <div className="flex shrink-0">
                        {/* First set of logos */}
                        {mediaFeatures.map((media) => (
                          <a
                            key={media.name}
                            href={media.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 mx-2 sm:mx-3"
                          >
                            <img
                              src={media.logo}
                              alt={media.name}
                              className={`w-auto object-contain brightness-0 invert transition-all
    ${media.name === 'BW Businessworld'
                                  ? 'h-3 max-w-[90px]'
                                  : 'h-5 sm:h-6 max-w-[130px] sm:max-w-[150px]'
                                }
  `}
                            />

                          </a>
                        ))}
                      </div>
                      {/* Duplicate for seamless loop */}
                      <div className="flex shrink-0">
                        {mediaFeatures.map((media) => (
                          <a
                            key={`${media.name}-dup`}
                            href={media.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 mx-2 sm:mx-3"
                          >
                            <img
                              src={media.logo}
                              alt={media.name}
                              className={`w-auto object-contain brightness-0 invert transition-all
    ${media.name === 'BW Businessworld'
                                  ? 'h-3 max-w-[90px]'
                                  : 'h-5 sm:h-6 max-w-[130px] sm:max-w-[150px]'
                                }
  `}
                            />

                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>


                {/* Footer Trust Bar */}
                <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white/[0.02] border-t border-white/5">
                  <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Award size={14} className="text-amber-400" />
                      15+ Years of Industry Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* Stats Section */}
        <div className="relative py-8 sm:py-12 lg:py-16 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-2 sm:mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon size={20} className="text-cyan-400 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar - Left & Right Layout */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        {/* Gradient border top */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="bg-slate-950/98 backdrop-blur-xl py-3 sm:py-4 px-4 sm:px-6">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Left - Rotating Service Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <BadgeCheck size={18} className="text-white sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm sm:text-base truncate max-w-[150px] sm:max-w-[250px]">{featuredServices[currentServiceIndex].name}</p>
                <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">{featuredServices[currentServiceIndex].desc}</p>
              </div>
            </div>

            {/* Right - CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-500 hover:via-orange-600 hover:to-amber-600 text-slate-900 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
            >
              <span>Get Quotes</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
