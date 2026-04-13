'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Award,
  Users,
  Star,
  Clock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Zap,
  FileCheck,
  Sparkles,
  AlertCircle,
  Calendar,
  Globe,
} from 'lucide-react';
import { submitAdLead, LeadType } from '@/lib/api';

const countryCodes = [
  { code: '+1', flag: '🇺🇸', name: 'USA', minLen: 10, maxLen: 10 },
  { code: '+44', flag: '🇬🇧', name: 'UK', minLen: 10, maxLen: 11 },
  { code: '+91', flag: '🇮🇳', name: 'India', minLen: 10, maxLen: 10 },
  { code: '+61', flag: '🇦🇺', name: 'Australia', minLen: 9, maxLen: 9 },
  { code: '+49', flag: '🇩🇪', name: 'Germany', minLen: 10, maxLen: 11 },
  { code: '+33', flag: '🇫🇷', name: 'France', minLen: 9, maxLen: 9 },
  { code: '+81', flag: '🇯🇵', name: 'Japan', minLen: 10, maxLen: 10 },
  { code: '+86', flag: '🇨🇳', name: 'China', minLen: 11, maxLen: 11 },
  { code: '+971', flag: '🇦🇪', name: 'UAE', minLen: 9, maxLen: 9 },
  { code: '+65', flag: '🇸🇬', name: 'Singapore', minLen: 8, maxLen: 8 },
  { code: '+82', flag: '🇰🇷', name: 'South Korea', minLen: 10, maxLen: 11 },
  { code: '+55', flag: '🇧🇷', name: 'Brazil', minLen: 10, maxLen: 11 },
  { code: '+52', flag: '🇲🇽', name: 'Mexico', minLen: 10, maxLen: 10 },
  { code: '+7', flag: '🇷🇺', name: 'Russia', minLen: 10, maxLen: 10 },
  { code: '+27', flag: '🇿🇦', name: 'South Africa', minLen: 9, maxLen: 9 },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia', minLen: 9, maxLen: 9 },
  { code: '+39', flag: '🇮🇹', name: 'Italy', minLen: 9, maxLen: 10 },
  { code: '+34', flag: '🇪🇸', name: 'Spain', minLen: 9, maxLen: 9 },
  { code: '+1', flag: '🇨🇦', name: 'Canada', minLen: 10, maxLen: 10 },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands', minLen: 9, maxLen: 9 },
];

interface EligibleSection {
  sectionId: string;
  title: string;
  subtitle?: string;
  items: string[];
}

interface AdGlobalProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  process: { step: string; description: string }[];
  documents: string[];
  faqs: { question: string; answer: string }[];
  whyJrText: string;
  eligibleSection?: EligibleSection;
  heroOnly?: boolean;
  // CRM metadata
  formName: string;
  source: string;
  responsible: string;
  stage: string;
  leadType: LeadType;
}

const colorClasses: Record<string, { bg: string; text: string; gradient: string; light: string; border: string }> = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500', light: 'bg-blue-500/10', border: 'border-blue-500/20' },
  cyan: { bg: 'bg-cyan-600', text: 'text-cyan-400', gradient: 'from-cyan-500 to-teal-500', light: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-400', gradient: 'from-indigo-500 to-purple-500', light: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-400', gradient: 'from-emerald-500 to-teal-500', light: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  amber: { bg: 'bg-amber-600', text: 'text-amber-400', gradient: 'from-amber-500 to-orange-500', light: 'bg-amber-500/10', border: 'border-amber-500/20' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-400', gradient: 'from-orange-500 to-red-500', light: 'bg-orange-500/10', border: 'border-orange-500/20' },
  green: { bg: 'bg-green-600', text: 'text-green-400', gradient: 'from-green-500 to-emerald-500', light: 'bg-green-500/10', border: 'border-green-500/20' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-400', gradient: 'from-purple-500 to-pink-500', light: 'bg-purple-500/10', border: 'border-purple-500/20' },
  violet: { bg: 'bg-violet-600', text: 'text-violet-400', gradient: 'from-violet-500 to-purple-500', light: 'bg-violet-500/10', border: 'border-violet-500/20' },
};

const mediaFeatures = [
  { name: 'Economic Times', logo: 'https://m.economictimes.com/photo/msid-74726259,quality-100/et-logo.jpg', url: 'https://m.economictimes.com/industry/cons-products/fmcg/regulatory-delays-cripple-indian-cos-certifications-disrupt-fmcg-electronics-sectors-performance/amp_articleshow/126258894.cms' },
  { name: 'Business World', logo: 'https://static.businessworld.in/bw-main-logo.png', url: 'https://www.businessworld.in/article/survey-flags-red-tape-as-key-risk-to-indias-manufacturing-momentum-585429' },
  { name: 'Communications Today', logo: 'https://www.communicationstoday.co.in/wp-content/uploads/2020/10/glkgfdljkgkdf.png', url: 'https://www.communicationstoday.co.in/dot-revamps-security-certification-for-fibre-broadband-devices/' },
  { name: 'Entrepreneur India', logo: 'https://www.entrepreneurindia.com/insight-new/images/logo.svg', url: 'https://www.entrepreneurindia.com/blog/en/article/how-dots-streamlining-of-indias-efforts-to-simplify-security-testing-extend-the-pro-tem-certification-scheme-and-others-could-boost-indigenous-telecom-equipment-manufacturing-could-spur-local-telecom-growth.58714' },
  { name: 'Zee News', logo: 'https://english.cdn.zeenews.com/static/public/updated_logos/english.svg', url: 'https://zeenews.india.com/jr-compliance-a-house-for-all-global-compliance-services-2411707.html' },
  { name: 'Hindustan Times', logo: 'https://www.hindustantimes.com/static-content/1y/ht/ht_100_logoblack@2x.webp', url: 'https://www.hindustantimes.com/brand-post/jr-compliance-helping-indian-businesses-expand-global-outreach/story-vqZ4goyJEjTHMPwQiN2VxO.html' },
  { name: 'Dainik Bhaskar', logo: 'https://i.pinimg.com/736x/d7/a6/d0/d7a6d0bd61a6d438a8f402bf8b229f1e.jpg', url: 'https://www.bhaskar.com/local/delhi-ncr/gurgaon/news/rishikesh-mishra-of-jr-compliance-believes-that-corporate-compliance-will-facilitate-economic-growth-129422333.html' },
];

export default function AdGlobalTemplate({
  title,
  subtitle,
  description,
  color,
  process: processSteps,
  documents,
  faqs,
  whyJrText,
  eligibleSection,
  heroOnly,
  formName,
  source,
  responsible,
  stage,
  leadType,
}: AdGlobalProps) {
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);
  const consultFormRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', meetingDate: '', meetingTime: '' });
  const [countryCode, setCountryCode] = useState(countryCodes[0]); // USA default
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqPage, setFaqPage] = useState(0);
  const [showTopBar, setShowTopBar] = useState(true);

  // Consultation form (bottom section) state
  const [consultFormData, setConsultFormData] = useState({ name: '', email: '', phone: '', message: '', meetingDate: '', meetingTime: '' });
  const [consultCountryCode, setConsultCountryCode] = useState(countryCodes[0]); // USA default
  const [showConsultCountryDropdown, setShowConsultCountryDropdown] = useState(false);
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [isConsultSubmitted, setIsConsultSubmitted] = useState(false);
  const [consultSubmitError, setConsultSubmitError] = useState<string | null>(null);

  const colors = colorClasses[color] || colorClasses.blue;
  const isPhoneValid = formData.phone.length >= countryCode.minLen && formData.phone.length <= countryCode.maxLen;
  const currentStep = isPhoneValid ? 3 : formData.email.includes('@') ? 2 : formData.name.length > 2 ? 1 : 0;
  const isConsultPhoneValid = consultFormData.phone.length >= consultCountryCode.minLen && consultFormData.phone.length <= consultCountryCode.maxLen;
  const consultCurrentStep = isConsultPhoneValid ? 3 : consultFormData.email.includes('@') ? 2 : consultFormData.name.length > 2 ? 1 : 0;

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  const faqsPerPage = 5;
  const totalFaqPages = Math.ceil(faqs.length / faqsPerPage);
  const currentFaqs = faqs.slice(faqPage * faqsPerPage, (faqPage + 1) * faqsPerPage);

  useEffect(() => {
    const handleScroll = () => setShowTopBar(window.scrollY < 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const fullPhone = `${countryCode.code} ${formData.phone}`;
      await submitAdLead(
        { name: formData.name, email: formData.email, phone: fullPhone },
        { form_name: formName, source, responsible, stage, leadType },
        formData.message || undefined,
      );
      // Save meeting data to txt file
      if (formData.meetingDate && formData.meetingTime) {
        await fetch('/api/meeting', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: fullPhone,
            meetingDate: formData.meetingDate,
            meetingTime: formData.meetingTime,
            message: formData.message,
            formName,
            source: window.location.href,
          }),
        });
      }
      setIsSubmitted(true);
      router.push('/thank-you');
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again or call us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setConsultFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (consultSubmitError) setConsultSubmitError(null);
  };

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultSubmitting(true);
    setConsultSubmitError(null);
    try {
      const fullPhone = `${consultCountryCode.code} ${consultFormData.phone}`;
      await submitAdLead(
        { name: consultFormData.name, email: consultFormData.email, phone: fullPhone },
        { form_name: formName, source, responsible, stage, leadType },
        consultFormData.message || undefined,
      );
      // Save meeting data to txt file
      if (consultFormData.meetingDate && consultFormData.meetingTime) {
        await fetch('/api/meeting', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: consultFormData.name,
            email: consultFormData.email,
            phone: fullPhone,
            meetingDate: consultFormData.meetingDate,
            meetingTime: consultFormData.meetingTime,
            message: consultFormData.message,
            formName,
            source: window.location.href,
          }),
        });
      }
      setIsConsultSubmitted(true);
      router.push('/thank-you');
    } catch (error) {
      setConsultSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again or call us directly.'
      );
    } finally {
      setIsConsultSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Bar — Logo + WhatsApp + Call */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showTopBar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
            <Image src="/JRlogo2.png" alt="JR Compliance" width={250} height={75} className="w-auto h-12 sm:h-14 lg:h-16 object-contain brightness-0 invert" />
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://api.whatsapp.com/send?phone=919266450125&text=Hi%2C+I+need+help+with+compliance+services&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="tel:+919266663636"
                className={`flex items-center gap-1.5 bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Hero + Form */}
      <section id="hero" className="relative min-h-[60vh] sm:min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pb-16">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left — Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6">
                <Shield size={14} className={colors.text} />
                <span className="text-xs sm:text-sm font-medium text-gray-300">Trusted by 5000+ Businesses</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>{title}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 max-w-2xl">{subtitle}</p>

              {/* Client logos — desktop only */}
              <div className="hidden sm:block mb-6 overflow-hidden">
                <p className="text-xs text-gray-400 mb-3 text-center lg:text-left">Helped many global brands achieve compliance</p>
                <div className="relative overflow-hidden" style={{ maxWidth: '100%' }}>
                  <div className="flex animate-scroll">
                    {[0, 1].map((set) => (
                      <div key={set} className="flex items-center gap-6 md:gap-8 lg:gap-10 px-4 shrink-0">
                        {[
                          { src: '/logo/6750381b5985420c3fd6e61f_sony.png', alt: 'Sony' },
                          { src: '/logo/681867c363c09e87654cd69f_Tata_Play_2022_logo 1.png', alt: 'Tata Play' },
                          { src: '/logo/6750381ad02e6dfd82a68f4d_healthify.png', alt: 'Healthify' },
                          { src: '/logo/6750381bca61ce816f91953e_sennhe.png', alt: 'Sennheiser' },
                          { src: '/logo/672dc1a691c67b848963be5a_lipi logo.png', alt: 'Lipi' },
                          { src: '/logo/68495d3d9d0d20176f5d4f90_ISC Logo.png', alt: 'ISC' },
                          { src: '/logo/Gta3nPom.png', alt: 'Client' },
                          { src: '/logo/intertek.png', alt: 'Intertek' },
                          { src: '/logo/newline.png', alt: 'Newline' },
                          { src: '/logo/toray_logo.png', alt: 'Toray' },
                        ].map((logo) => (
                          <img key={`${set}-${logo.alt}`} src={logo.src} alt={logo.alt} className="h-8 md:h-9 lg:h-10 w-auto max-w-[100px] md:max-w-[120px] object-contain opacity-80 brightness-0 invert" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">{description}</p>

              {/* Why Choose — desktop */}
              <div className="hidden lg:block">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Why Choose <span className={colors.text}>JR Compliance?</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { icon: Zap, title: 'Speed', desc: 'Quotes in seconds, certification in days!' },
                    { icon: Users, title: 'Service', desc: 'Dedicated support, quick replies!' },
                    { icon: Award, title: 'Quality', desc: 'Expert guidance, 100% compliance!' },
                  ].map((item) => (
                    <div key={item.title} className="group p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Form Card */}
            <div ref={formRef} className="w-full max-w-sm sm:max-w-md mx-auto lg:mx-0 lg:ml-auto relative mt-4 lg:mt-0 overflow-hidden">
              <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden w-full max-w-full">
                {/* Premium Header */}
                <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 border-b border-white/5">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white">Get Expert Consultation</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Free quote in 2 minutes</p>
                  </div>
                  {/* Progress Steps */}
                  <div className="mt-4 flex items-center gap-2">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex-1 flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${currentStep >= step
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-white/5 text-gray-500 border border-white/10'}`}>
                          {currentStep > step ? <CheckCircle size={14} /> : step}
                        </div>
                        {step < 3 && (
                          <div className={`flex-1 h-0.5 rounded-full transition-all ${currentStep > step ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'}`} />
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
                      {/* Name */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative">
                          <Users size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                          {formData.name.length > 2 && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                        </div>
                      </div>
                      {/* Email */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative">
                          <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                          {formData.email.includes('@') && formData.email.includes('.') && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <div className="relative flex">
                          <button type="button" onClick={() => setShowCountryDropdown(!showCountryDropdown)} className="inline-flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 rounded-l-lg sm:rounded-l-xl bg-white/10 border border-r-0 border-white/10 text-cyan-400 font-medium text-xs sm:text-sm hover:bg-white/15 transition-colors whitespace-nowrap">
                            <span>{countryCode.flag}</span><span>{countryCode.code}</span>
                            <ChevronDown size={12} className="ml-0.5" />
                          </button>
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-56 max-h-48 overflow-y-auto bg-slate-800 border border-white/10 rounded-lg shadow-xl z-50">
                              {countryCodes.map((cc, i) => (
                                <button key={`${cc.code}-${cc.name}-${i}`} type="button" onClick={() => { setCountryCode(cc); setShowCountryDropdown(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-white hover:bg-white/10 transition-colors">
                                  <span>{cc.flag}</span><span className="text-cyan-400">{cc.code}</span><span className="text-gray-400 text-xs">{cc.name}</span>
                                </button>
                              ))}
                            </div>
                          )}
                          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-r-lg sm:rounded-r-xl bg-white/5 border border-l-0 border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                          {isPhoneValid && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                        </div>
                      </div>
                      {/* Meeting Date & Time */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <div className="relative">
                            <Calendar size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                            <input type="date" name="meetingDate" value={formData.meetingDate} onChange={handleChange} required min={today} className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none [color-scheme:dark]" />
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <div className="relative">
                            <Clock size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                            <input type="time" name="meetingTime" value={formData.meetingTime} onChange={handleChange} required className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none [color-scheme:dark]" />
                          </div>
                        </div>
                      </div>
                      {/* Message */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                        <textarea name="message" placeholder="Tell us about your requirements..." value={formData.message} onChange={handleChange} required rows={3} className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none resize-none" />
                      </div>
                      {/* Trust Indicators */}
                      <div className="flex items-center justify-between py-1.5 sm:py-2 px-0.5 sm:px-1">
                        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
                          <span className="flex items-center gap-0.5 sm:gap-1"><Shield size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> Secure</span>
                          <span className="flex items-center gap-0.5 sm:gap-1"><Clock size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> 2 min</span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500">No spam, ever</span>
                      </div>
                      {/* Submit */}
                      <button type="submit" disabled={isSubmitting} className="relative w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] hover:bg-right text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group">
                        <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Get Free Consultation'}</span>
                        {isSubmitting ? (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                        )}
                      </button>
                      {submitError && (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                          <AlertCircle size={16} className="flex-shrink-0" /><span>{submitError}</span>
                        </div>
                      )}
                    </form>
                  )}
                </div>

                {/* Media Features Reel */}
                <div className="px-2 sm:px-4 py-3 bg-white/[0.02] border-t border-white/5 overflow-hidden">
                  <p className="text-[11px] sm:text-[12px] text-gray-400 text-center font-medium tracking-wide mb-1">Trusted & Recognized By</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 text-center mb-2 px-1">Featured across reputed platforms</p>
                  <div className="relative overflow-hidden">
                    <div className="flex animate-scroll-slow hover:[animation-play-state:paused]">
                      {[0, 1].map((set) => (
                        <div key={set} className="flex shrink-0">
                          {mediaFeatures.map((media) => (
                            <a key={`${set}-${media.name}`} href={media.url} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity flex-shrink-0 mx-2 sm:mx-3">
                              <img src={media.logo} alt={media.name} className="h-5 sm:h-6 w-auto max-w-[130px] sm:max-w-[150px] object-contain brightness-0 invert transition-all" />
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Trust Bar */}
                <div className="px-3 sm:px-6 py-2 sm:py-3 bg-white/[0.02] border-t border-white/5">
                  <div className="flex items-center justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-gray-500">
                    <span className="flex items-center gap-1.5"><Award size={14} className="text-amber-400" /> 15+ Years of Industry Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Why Choose */}
          <div className="lg:hidden mt-6 sm:mt-8">
            <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 text-center">
              Why Choose <span className={colors.text}>JR Compliance?</span>
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: Zap, title: 'Speed', desc: 'Quick quotes!' },
                { icon: Users, title: 'Service', desc: 'Best support!' },
                { icon: Award, title: 'Quality', desc: 'Expert team!' },
              ].map((item) => (
                <div key={item.title} className="text-center p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-gradient-to-br ${colors.gradient} flex items-center justify-center mx-auto mb-1.5 sm:mb-2`}>
                    <item.icon size={12} className="text-white sm:w-4 sm:h-4" />
                  </div>
                  <h4 className="font-semibold text-white text-[10px] sm:text-xs mb-0.5">{item.title}</h4>
                  <p className="text-[8px] sm:text-[10px] text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections only if not heroOnly */}
      {!heroOnly && (
        <>
          {/* Section: Process */}
          <section id="process" className="py-10 sm:py-14 lg:py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
                  <FileCheck size={14} className={`${colors.text} sm:w-4 sm:h-4`} />
                  <span className="text-xs sm:text-sm font-medium text-gray-300">Process</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Simple <span className={colors.text}>Step-by-Step</span> Process
                </h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative group">
                    <div className="p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all h-full">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 text-white font-bold text-sm sm:text-base lg:text-lg`}>{i + 1}</div>
                      <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">{step.step}</h3>
                      <p className="text-xs sm:text-sm text-gray-400 line-clamp-3">{step.description}</p>
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Why JR Compliance */}
          <section id="why-jr" className="py-10 sm:py-14 lg:py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Why Choose <span className={colors.text}>JR Compliance?</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">Trusted by Sony, Tata & 500+ companies. Speed, service & expert quality.</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                {[
                  { icon: Award, value: '5000+', label: 'Certifications Done' },
                  { icon: Star, value: '4.9', label: 'Google Rating' },
                  { icon: Users, value: '15+', label: 'Years Experience' },
                  { icon: Shield, value: '99%', label: 'Success Rate' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                    <stat.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.text} mx-auto mb-2 sm:mb-3`} />
                    <div className={`text-2xl sm:text-3xl font-bold ${colors.text} mb-1`}>{stat.value}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">{whyJrText}</p>
              </div>
            </div>
          </section>

          {/* Section: Eligible Products / Countries (optional) */}
          {eligibleSection && (
            <section id={eligibleSection.sectionId} className="py-10 sm:py-14 lg:py-20 bg-slate-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-4">
                    <Sparkles size={14} className={`${colors.text} sm:w-4 sm:h-4`} />
                    <span className="text-xs sm:text-sm font-medium text-gray-300">{eligibleSection.title}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    {eligibleSection.title.split(' ').slice(0, -1).join(' ')}{' '}
                    <span className={colors.text}>{eligibleSection.title.split(' ').slice(-1)}</span>
                  </h2>
                  {eligibleSection.subtitle && (
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">{eligibleSection.subtitle}</p>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {eligibleSection.items.map((item, i) => (
                    <div key={i} className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                        <CheckCircle size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <p className="text-sm sm:text-base text-white font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Section: Documents */}
          <section id="documents" className="py-10 sm:py-14 lg:py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Required <span className={colors.text}>Documents</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle size={16} className={`${colors.text} sm:w-5 sm:h-5 flex-shrink-0`} />
                    <span className="text-sm sm:text-base text-white">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: FAQs */}
          {faqs.length > 0 && (
            <section id="faq" className="py-10 sm:py-14 lg:py-20 bg-slate-900">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                    Frequently Asked <span className={colors.text}>Questions</span>
                  </h2>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {currentFaqs.map((faq, i) => (
                    <div key={i} className="rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 overflow-hidden">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left">
                        <span className="text-sm sm:text-base text-white font-medium pr-3 sm:pr-4">{faq.question}</span>
                        <ChevronDown size={18} className={`text-gray-400 transition-transform flex-shrink-0 sm:w-5 sm:h-5 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                          <p className="text-sm sm:text-base text-gray-400">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {totalFaqPages > 1 && (
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                    <button onClick={() => setFaqPage(Math.max(0, faqPage - 1))} disabled={faqPage === 0} className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors">
                      <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                    </button>
                    <span className="text-gray-400 text-xs sm:text-sm">Page {faqPage + 1} of {totalFaqPages}</span>
                    <button onClick={() => setFaqPage(Math.min(totalFaqPages - 1, faqPage + 1))} disabled={faqPage === totalFaqPages - 1} className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-white/5 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/10 transition-colors">
                      <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Consultation Form (Bottom) */}
          <section id="consultation" className="py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Get Your Free <span className={colors.text}>Consultation</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
                  Speak to our {title} experts today. We&apos;ll guide you through the entire process.
                </p>
              </div>

              <div ref={consultFormRef} className="max-w-lg mx-auto">
                <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                  <div className="relative px-6 py-5 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 border-b border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
                    <div className="relative">
                      <h3 className="text-lg font-bold text-white">Request a Callback</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Our expert will reach out within 30 minutes</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      {[1, 2, 3].map((step) => (
                        <div key={step} className="flex-1 flex items-center gap-2">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${consultCurrentStep >= step
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                            : 'bg-white/5 text-gray-500 border border-white/10'}`}>
                            {consultCurrentStep > step ? <CheckCircle size={14} /> : step}
                          </div>
                          {step < 3 && (
                            <div className={`flex-1 h-0.5 rounded-full transition-all ${consultCurrentStep > step ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    {isConsultSubmitted ? (
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
                      <form onSubmit={handleConsultSubmit} className="space-y-3 sm:space-y-4">
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <div className="relative">
                            <Users size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                            <input type="text" name="name" placeholder="Full Name" value={consultFormData.name} onChange={handleConsultChange} required className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                            {consultFormData.name.length > 2 && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <div className="relative">
                            <svg className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-[18px] sm:h-[18px] text-gray-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            <input type="email" name="email" placeholder="Email Address" value={consultFormData.email} onChange={handleConsultChange} required className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                            {consultFormData.email.includes('@') && consultFormData.email.includes('.') && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <div className="relative flex">
                            <button type="button" onClick={() => setShowConsultCountryDropdown(!showConsultCountryDropdown)} className="inline-flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 rounded-l-lg sm:rounded-l-xl bg-white/10 border border-r-0 border-white/10 text-cyan-400 font-medium text-xs sm:text-sm hover:bg-white/15 transition-colors whitespace-nowrap">
                              <span>{consultCountryCode.flag}</span><span>{consultCountryCode.code}</span>
                              <ChevronDown size={12} className="ml-0.5" />
                            </button>
                            {showConsultCountryDropdown && (
                              <div className="absolute top-full left-0 mt-1 w-56 max-h-48 overflow-y-auto bg-slate-800 border border-white/10 rounded-lg shadow-xl z-50">
                                {countryCodes.map((cc, i) => (
                                  <button key={`consult-${cc.code}-${cc.name}-${i}`} type="button" onClick={() => { setConsultCountryCode(cc); setShowConsultCountryDropdown(false); }} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-white hover:bg-white/10 transition-colors">
                                    <span>{cc.flag}</span><span className="text-cyan-400">{cc.code}</span><span className="text-gray-400 text-xs">{cc.name}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                            <input type="tel" name="phone" placeholder="Phone Number" value={consultFormData.phone} onChange={handleConsultChange} required className="w-full pl-3 sm:pl-4 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-r-lg sm:rounded-r-xl bg-white/5 border border-l-0 border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm sm:text-base placeholder-gray-500 transition-all outline-none" />
                            {isConsultPhoneValid && <CheckCircle size={16} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-emerald-400 sm:w-[18px] sm:h-[18px]" />}
                          </div>
                        </div>
                        {/* Meeting Date & Time */}
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                            <div className="relative">
                              <Calendar size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                              <input type="date" name="meetingDate" value={consultFormData.meetingDate} onChange={handleConsultChange} required min={today} className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none [color-scheme:dark]" />
                            </div>
                          </div>
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                            <div className="relative">
                              <Clock size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors sm:w-[18px] sm:h-[18px]" />
                              <input type="time" name="meetingTime" value={consultFormData.meetingTime} onChange={handleConsultChange} required className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none [color-scheme:dark]" />
                            </div>
                          </div>
                        </div>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg sm:rounded-xl opacity-0 group-focus-within:opacity-100 blur-xl transition-opacity" />
                          <textarea name="message" placeholder="Tell us about your requirements..." value={consultFormData.message} onChange={handleConsultChange} rows={3} className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 text-white text-sm placeholder-gray-500 transition-all outline-none resize-none" />
                        </div>
                        <div className="flex items-center justify-between py-1.5 sm:py-2 px-0.5 sm:px-1">
                          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
                            <span className="flex items-center gap-0.5 sm:gap-1"><Shield size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> Secure</span>
                            <span className="flex items-center gap-0.5 sm:gap-1"><Clock size={10} className="text-cyan-400 sm:w-3 sm:h-3" /> 2 min</span>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-500">No spam, ever</span>
                        </div>
                        <button type="submit" disabled={isConsultSubmitting} className="relative w-full py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-[length:200%_100%] hover:bg-right text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] overflow-hidden group">
                          <span className="relative z-10">{isConsultSubmitting ? 'Submitting...' : 'Get Free Consultation'}</span>
                          {isConsultSubmitting ? (
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
                          )}
                        </button>
                        {consultSubmitError && (
                          <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            <AlertCircle size={16} className="flex-shrink-0" /><span>{consultSubmitError}</span>
                          </div>
                        )}
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
                <a href="tel:+919266663636" className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${colors.gradient} text-white font-semibold rounded-lg sm:rounded-xl hover:opacity-90 transition-all shadow-lg text-sm sm:text-base`}>
                  <Phone size={18} className="sm:w-5 sm:h-5" /><span>Call: +91 92666 63636</span>
                </a>
                <a href="https://api.whatsapp.com/send?phone=919266450125&text=Hi%2C+I+need+help+with+compliance+services&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg sm:rounded-xl border border-white/10 transition-all text-sm sm:text-base">
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" /><span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Minimal Footer */}
      <footer className="py-6 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src="/JRlogo2.png" alt="JR Compliance" width={32} height={32} />
            <span className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} JR Compliance. All rights reserved.</span>
          </div>
          <a href="tel:+919266663636" className={`${colors.text} hover:opacity-80 text-sm font-semibold flex items-center gap-1`}>
            <Phone className="w-4 h-4" /> +91 92666 63636
          </a>
        </div>
      </footer>
    </div>
  );
}
