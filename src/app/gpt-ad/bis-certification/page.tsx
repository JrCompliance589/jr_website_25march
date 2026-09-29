'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Bell, Clock3, ShieldCheck, Star, UsersRound } from 'lucide-react';
import ServicePageTemplate from '@/components/ServicePageTemplate';

const impactStats = [
  { value: '10,000+', label: 'Businesses Served', icon: UsersRound },
  { value: '15+', label: 'Years Experience', icon: Clock3 },
  { value: '98%', label: 'Success Rate', icon: Award },
  { value: '50+', label: 'Expert Consultants', icon: ShieldCheck },
];

const ctaStats = [
  { value: '5000+', label: 'Certifications Done' },
  { value: '25+', label: 'Services' },
  { value: '500+', label: 'Businesses Served' },
  { value: '10+', label: 'Years Experience' },
];

const WHATSAPP_PHONE = '919266450125';
const WHATSAPP_MESSAGE = "Hi, I'd like to know which compliances apply to my business.";

function BISImpactSection() {
  return (
    <motion.section
      id="bis-impact"
      className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-950 py-14 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      aria-label="JR Compliance results"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-y-0 left-0 -z-10 w-2/3 bg-[radial-gradient(circle_at_35%_50%,rgba(37,99,235,0.48),transparent_60%)]" />
      <Award
        className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 text-cyan-300/[0.04]"
        strokeWidth={1}
        aria-hidden="true"
      />

      <motion.div
        className="absolute left-[8%] top-10 hidden text-amber-200/70 sm:block"
        animate={{ rotate: [0, 10, -8, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Star size={28} fill="currentColor" />
      </motion.div>
      <motion.div
        className="absolute right-[9%] top-1/2 hidden text-amber-300/70 sm:block"
        animate={{ rotate: [0, 13, -13, 0], y: [0, -5, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Bell size={27} fill="currentColor" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-8">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/[0.13] px-3 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.13),0_18px_55px_rgba(2,6,23,0.22)] backdrop-blur-md sm:px-6 sm:py-8"
                variants={{
                  hidden: { opacity: 0, y: 34, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <motion.div
                  className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/35 to-blue-500/35 text-cyan-300 shadow-lg shadow-cyan-950/20 sm:h-12 sm:w-12"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </motion.div>
                <strong className="block text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </strong>
                <span className="mt-1.5 block text-xs font-medium text-slate-300 sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function BISWhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const openTimer = window.setTimeout(() => setIsOpen(true), 1800);
    const typingTimer = window.setTimeout(() => setIsTyping(false), 2900);
    const closeTimer = window.setTimeout(() => setIsOpen(false), 3800);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(typingTimer);
      window.clearTimeout(closeTimer);
    };
  }, []);

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bis-jrwa">
      <div
        className={`bis-jrwa-bubble${isOpen ? ' is-visible' : ''}`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className="bis-jrwa-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close WhatsApp introduction"
        >
          ×
        </button>
        <div className="bis-jrwa-bubble-head">
          <div className="bis-jrwa-avatar" aria-hidden="true">JR</div>
          <div className="bis-jrwa-who">
            <b>JR Compliance Assistant</b>
            <span><i />Online now · 24/7</span>
          </div>
        </div>

        {isTyping ? (
          <div className="bis-jrwa-typing" aria-label="Assistant is typing">
            <span /><span /><span />
          </div>
        ) : (
          <p className="bis-jrwa-msg">
            👋 Hi! Got a compliance question? I&apos;m available round the clock,{' '}
            <b>powered by JR&apos;s own compliance intelligence system</b> — ask me anything.
          </p>
        )}

        <button type="button" className="bis-jrwa-cta" onClick={openWhatsApp}>
          <WhatsAppIcon className="h-4 w-4" />
          Chat on WhatsApp
        </button>
      </div>

      <button
        type="button"
        className="bis-jrwa-btn"
        onClick={openWhatsApp}
        aria-label="Chat with us on WhatsApp"
      >
        <span className="bis-jrwa-ring bis-jrwa-ring-one" />
        <span className="bis-jrwa-ring bis-jrwa-ring-two" />
        <span className="bis-jrwa-badge"><span className="bis-jrwa-dot" />24/7 AI</span>
        <WhatsAppIcon className="relative z-[2] h-[30px] w-[30px]" />
      </button>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.44.79 3.06 1.2 4.72 1.2h.01c5.46 0 9.91-4.45 9.91-9.91.01-5.46-4.44-9.91-9.9-9.91zm0 18.14h-.01c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.11.82.83-3.03-.19-.31a8.19 8.19 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.22-8.3 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.76 2.69 4.27 3.77.6.26 1.06.41 1.43.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export default function GPTAdBISCertificationPage() {
  return (
    <>
      <ServicePageTemplate
        title="BIS Certification"
        contactPopupDelayMs={5000}
        landingPageMode
        subtitle="Ensuring Product Compliance with BIS Standards"
        logo="/services_logo/bis.png"
        color="cyan"
        description="Helping manufacturers meet Indian quality and safety standards through structured certification and ongoing compliance support."
        serviceInfo="At JR Compliance, our team of experienced BIS consultants guides you through every step of the certification process, from initial product assessment to final approval. We handle all documentation requirements, coordinate with BIS-recognized laboratories for product testing, and ensure your application meets all regulatory standards. With our deep understanding of Indian Standards and BIS procedures, we minimize delays and help you achieve certification efficiently. Our dedicated support team provides regular updates throughout the process and assists with any queries from BIS officials. Post-certification, we offer comprehensive renewal management, surveillance audit preparation, and assistance with amendments or expansions to your product range."
        additionalContent={<BISImpactSection />}
        finalCtaContent={(
          <div className="mx-auto mb-7 max-w-3xl sm:mb-8">
            <p className="mb-5 text-sm font-medium text-slate-200 sm:text-base">
              Join 5,000+ Indian businesses &amp; protect your business today.
            </p>
            <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-cyan-300/15 bg-white/[0.04] sm:grid-cols-4">
              {ctaStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-3 py-3.5 sm:px-4 ${index % 2 !== 0 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10 sm:border-t-0' : ''} ${index > 0 ? 'sm:border-l sm:border-white/10' : ''}`}
                >
                  <strong className="block text-lg font-extrabold text-cyan-400 sm:text-xl">{stat.value}</strong>
                  <span className="mt-0.5 block text-[11px] leading-tight text-slate-400 sm:text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        benefits={[
          '<strong class="block text-base text-white">Expert product evaluation</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">We identify the right BIS standard and certification route for your product.</span>',
          '<strong class="block text-base text-white">Complete documentation support</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">Our experts prepare, verify, and organize every required application document.</span>',
          '<strong class="block text-base text-white">Factory inspection coordination</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">We coordinate the audit schedule and help your facility stay inspection-ready.</span>',
          '<strong class="block text-base text-white">Sample testing facilitation</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">We manage sample submission and testing with BIS-recognized laboratories.</span>',
          '<strong class="block text-base text-white">Quick processing and follow-up</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">We track your application and respond promptly to observations and queries.</span>',
          '<strong class="block text-base text-white">Surveillance audit support</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">Stay prepared with organized records, evidence, and expert audit guidance.</span>',
          '<strong class="block text-base text-white">License renewal services</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">We manage timely renewals so your BIS license remains active and compliant.</span>',
          '<strong class="block text-base text-white">Multi-product certification</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">Add eligible models, variants, and product ranges through one expert team.</span>',
          '<strong class="block text-base text-white">Foreign manufacturer registration</strong><span class="mt-2 block text-sm font-normal leading-6 text-slate-400">Complete FMCS and Authorized Indian Representative support for global brands.</span>',
        ]}
        process={[
          { step: 'Product Analysis', description: 'Analyze product to determine applicable BIS standards.' },
          { step: 'Testing', description: 'Coordinate product testing at BIS-recognized labs.' },
          { step: 'Application', description: 'Prepare and submit application with test reports.' },
          { step: 'Certification', description: 'Receive BIS certificate after approval.' },
        ]}
        documents={[
          'Company incorporation documents',
          'Factory/manufacturing details',
          'Product specifications and technical documents',
          'Quality management system documents',
          'Test equipment calibration certificates',
          'Previous test reports (if any)',
          'Authorization letter for Indian representative',
          'Brand ownership proof',
        ]}
        faqs={[
          {
            question: 'What products require BIS certification?',
            answer: 'Electronics, IT products, steel, cement, batteries, toys, footwear, and many other products require BIS certification. The list is regularly updated by the government.',
          },
          {
            question: 'What is the difference between ISI Mark and CRS?',
            answer: 'ISI Mark is for domestic manufacturers following quality standards. CRS (Compulsory Registration Scheme) is specifically for electronic and IT products.',
          },
          {
            question: 'How long does BIS registration take?',
            answer: 'BIS registration typically takes 3-6 months depending on product category, testing requirements, and factory audit scheduling.',
          },
          {
            question: 'Can foreign manufacturers get BIS certification?',
            answer: 'Yes, foreign manufacturers can obtain BIS certification through an Authorized Indian Representative (AIR).',
          },
        ]}
      />

      <BISWhatsAppWidget />

      <style jsx global>{`
        .bis-jrwa {
          --jrwa-navy-950: #030f2b;
          --jrwa-navy-800: #041a43;
          --jrwa-line: rgba(151, 214, 255, 0.22);
          --jrwa-ink: #eaf6ff;
          --jrwa-ink-faint: rgba(169, 200, 229, 0.65);
          --jrwa-green: #25d366;
          --jrwa-teal: #128c7e;
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.9rem;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
        }

        .bis-jrwa-btn {
          position: relative;
          display: flex;
          width: 60px;
          height: 60px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border: 0;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(150deg, var(--jrwa-green), var(--jrwa-teal));
          box-shadow: 0 12px 28px rgba(18, 140, 126, 0.45), inset 0 1px rgba(255, 255, 255, 0.3);
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bis-jrwa-btn:hover { transform: translateY(-3px) scale(1.04); }

        .bis-jrwa-ring {
          position: absolute;
          inset: 0;
          border: 2px solid var(--jrwa-green);
          border-radius: 999px;
          opacity: 0;
          pointer-events: none;
          animation: bisJrwaPing 2.6s ease-out infinite;
        }

        .bis-jrwa-ring-two { animation-delay: 0.9s; }

        .bis-jrwa-badge {
          position: absolute;
          top: -38px;
          left: 50%;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.7rem 0.4rem 0.55rem;
          transform: translateX(-50%);
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(135deg, #1b95ff, #376bed);
          box-shadow: 0 8px 18px rgba(15, 113, 241, 0.45), inset 0 1px rgba(255, 255, 255, 0.25);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.01em;
          white-space: nowrap;
          animation: bisJrwaFloat 3s ease-in-out infinite;
        }

        .bis-jrwa-badge::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 9px;
          height: 9px;
          transform: translateX(-50%) rotate(45deg);
          border-radius: 0 0 2px;
          background: #2e7ff0;
        }

        .bis-jrwa-dot {
          width: 5px;
          height: 5px;
          flex: none;
          border-radius: 50%;
          background: #5fe3b0;
          box-shadow: 0 0 6px #5fe3b0;
          animation: bisJrwaBlink 1.6s ease-in-out infinite;
        }

        .bis-jrwa-bubble {
          position: absolute;
          right: 0;
          bottom: 100px;
          width: 290px;
          padding: 1rem 1.1rem 1.1rem;
          transform: translateY(14px) scale(0.96);
          border: 1px solid var(--jrwa-line);
          border-radius: 18px;
          opacity: 0;
          background: linear-gradient(155deg, var(--jrwa-navy-800), var(--jrwa-navy-950));
          box-shadow: 0 26px 60px rgba(0, 8, 34, 0.5);
          pointer-events: none;
          transition: opacity 0.35s cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bis-jrwa-bubble.is-visible {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: auto;
        }

        .bis-jrwa-bubble::after {
          content: '';
          position: absolute;
          right: 22px;
          bottom: -8px;
          width: 16px;
          height: 16px;
          transform: rotate(45deg);
          border-right: 1px solid var(--jrwa-line);
          border-bottom: 1px solid var(--jrwa-line);
          border-radius: 0 0 3px;
          background: var(--jrwa-navy-950);
        }

        .bis-jrwa-bubble-head {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.7rem;
        }

        .bis-jrwa-avatar {
          display: flex;
          width: 34px;
          height: 34px;
          flex: none;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(181, 229, 255, 0.5);
          border-radius: 50%;
          color: #fff;
          background: radial-gradient(circle at 30% 22%, #489fff 0%, #1467ca 46%, #08295f 100%);
          font-size: 0.85rem;
        }

        .bis-jrwa-who b {
          display: block;
          color: #fff;
          font-size: 0.82rem;
          font-weight: 700;
        }

        .bis-jrwa-who span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.1rem;
          color: #5fe3b0;
          font-size: 0.68rem;
          font-weight: 600;
        }

        .bis-jrwa-who i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5fe3b0;
          box-shadow: 0 0 6px #5fe3b0;
          animation: bisJrwaBlink 1.6s ease-in-out infinite;
        }

        .bis-jrwa-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          border: 0;
          color: var(--jrwa-ink-faint);
          background: none;
          font-size: 1rem;
          line-height: 1;
          cursor: pointer;
        }

        .bis-jrwa-close:hover { color: #fff; }

        .bis-jrwa-typing {
          display: flex;
          gap: 4px;
          padding: 0.5rem 0 1.1rem;
        }

        .bis-jrwa-typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--jrwa-ink-faint);
          animation: bisJrwaTyping 1.1s ease-in-out infinite;
        }

        .bis-jrwa-typing span:nth-child(2) { animation-delay: 0.15s; }
        .bis-jrwa-typing span:nth-child(3) { animation-delay: 0.3s; }

        .bis-jrwa-msg {
          margin-bottom: 0.9rem;
          color: var(--jrwa-ink);
          font-size: 0.82rem;
          line-height: 1.55;
        }

        .bis-jrwa-msg b { color: #8bdcff; }

        .bis-jrwa-cta {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.7rem 1rem;
          border: 0;
          border-radius: 999px;
          color: #fff;
          background: linear-gradient(150deg, var(--jrwa-green), var(--jrwa-teal));
          box-shadow: 0 8px 18px rgba(18, 140, 126, 0.4);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .bis-jrwa-cta:hover { transform: translateY(-2px); }

        @keyframes bisJrwaPing {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        @keyframes bisJrwaFloat {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-4px); }
        }

        @keyframes bisJrwaBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @keyframes bisJrwaTyping {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }

        @media (max-width: 480px) {
          .bis-jrwa { right: 1rem; bottom: 1rem; }
          .bis-jrwa-bubble { width: calc(100vw - 2rem); right: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bis-jrwa *, .bis-jrwa *::before, .bis-jrwa *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
