'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowRight, Building2, Cpu, FileCheck, Shield, Scale, 
  Briefcase, Award, Sparkles, CheckCircle2, ChevronRight, LucideIcon
} from 'lucide-react';

interface ServiceItem {
  name: string;
  href: string;
  description: string;
  icon?: LucideIcon;
  logo?: string;
  features: string[];
  color: string;
  gradient: string;
  shadowColor: string;
}

const corporateServices: ServiceItem[] = [
  { 
    name: 'Company Registration', 
    href: '/corporate/private-limited-company-registration-consultant', 
    description: 'Register Private Limited, LLP, OPC & more with expert guidance',
    icon: Building2,
    features: ['Private Limited', 'LLP', 'OPC', 'Partnership'],
    color: 'blue',
    gradient: 'from-blue-600 to-blue-400',
    shadowColor: 'shadow-blue-500/25',
  },
  { 
    name: 'GST & Tax Services', 
    href: '/corporate/gst-registration', 
    description: 'Complete GST registration, filing, and compliance solutions',
    icon: Scale,
    features: ['GST Registration', 'GST Returns', 'Tax Compliance', 'Amendments'],
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-400',
    shadowColor: 'shadow-emerald-500/25',
  },
  { 
    name: 'FSSAI Licensing', 
    href: '/corporate/fssai-certificate', 
    description: 'Food business licensing and compliance for all categories',
    logo: '/services_logo/fssai.png',
    features: ['Basic License', 'State License', 'Central License', 'Modifications'],
    color: 'amber',
    gradient: 'from-amber-500 to-orange-400',
    shadowColor: 'shadow-amber-500/25',
  },
  { 
    name: 'Trademark & IP', 
    href: '/corporate/trademark-registration', 
    description: 'Protect your brand with trademark and IP registration',
    icon: Shield,
    features: ['Trademark', 'Copyright', 'Patent', 'IP Protection'],
    color: 'purple',
    gradient: 'from-purple-600 to-indigo-400',
    shadowColor: 'shadow-purple-500/25',
  },
  { 
    name: 'Startup India', 
    href: '/corporate/startup-india-registration', 
    description: 'DPIIT recognition and startup ecosystem registration',
    icon: Briefcase,
    features: ['DPIIT Recognition', 'Seed Fund', 'Tax Benefits', 'Mentorship'],
    color: 'rose',
    gradient: 'from-rose-500 to-pink-400',
    shadowColor: 'shadow-rose-500/25',
  },
];

const technicalServices: ServiceItem[] = [
  { 
    name: 'BIS Certification', 
    href: '/approval/bis-certification', 
    description: 'Bureau of Indian Standards certification for products',
    logo: '/services_logo/bis.png',
    features: ['CRS Scheme', 'FMCS', 'ISI Mark Certification', 'Lab Testing'],
    color: 'cyan',
    gradient: 'from-cyan-500 to-teal-400',
    shadowColor: 'shadow-cyan-500/25',
  },
  { 
    name: 'TEC Certification', 
    href: '/approval/tec-certificate', 
    description: 'Telecom Engineering Centre approval for telecom equipment',
    logo: '/services_logo/TEC.png',
    features: ['TEC Approval', 'Type Approval', 'MTCTE', 'Compliance'],
    color: 'indigo',
    gradient: 'from-indigo-500 to-blue-400',
    shadowColor: 'shadow-indigo-500/25',
  },
  { 
    name: 'ISI Certification', 
    href: '/approval/isi-mark-certification', 
    description: 'ISI Mark certification for quality assurance of products',
    logo: '/services_logo/isi.png',
    features: ['ISI Mark Certification', 'Quality Testing', 'Product Certification', 'Renewal'],
    color: 'teal',
    gradient: 'from-teal-500 to-emerald-400',
    shadowColor: 'shadow-teal-500/25',
  },
  { 
    name: 'EPR Compliance', 
    href: '/approval/epr-certification', 
    description: 'Extended Producer Responsibility for waste management',
    icon: Shield,
    features: ['E-Waste', 'Plastic Waste', 'Battery Waste', 'Tyre Waste'],
    color: 'green',
    gradient: 'from-green-500 to-emerald-400',
    shadowColor: 'shadow-green-500/25',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      className="group relative"
    >
      <Link href={service.href}>
        {/* Gradient Glow Background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
        />
        
        {/* Card Content */}
        <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-transparent transition-all duration-500 overflow-hidden h-full">
          {/* Decorative Corner */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full`} />
          
          {/* Icon or Logo */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`relative w-14 h-14 rounded-2xl ${service.logo ? 'bg-white border border-gray-200' : `bg-gradient-to-br ${service.gradient}`} flex items-center justify-center shadow-lg ${service.shadowColor} mb-5 overflow-hidden`}
          >
            {service.logo ? (
              <Image
                src={service.logo}
                alt={service.name}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : service.icon ? (
              <service.icon size={26} className="text-white" />
            ) : null}
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <Sparkles size={10} className="text-amber-500" />
            </motion.div>
          </motion.div>
          
          {/* Title & Description */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all">
            {service.name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {service.description}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {service.features.map((feature) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-${service.color}-50 text-${service.color}-600 text-xs font-medium`}
              >
                <CheckCircle2 size={10} />
                {feature}
              </motion.span>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-sm font-semibold"
          >
            <span className={`text-${service.color}-600`}>Learn More</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={16} className={`text-${service.color}-600`} />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles size={16} className="text-blue-600" />
            </motion.div>
            <span className="text-sm font-semibold text-blue-700">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive{' '}
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Compliance Solutions
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 -skew-x-6 origin-left"
              />
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From company registration to technical certifications, we provide end-to-end compliance services trusted by 10,000+ businesses across India
          </p>
        </motion.div>

        {/* Corporate Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
            >
              <Building2 size={24} className="text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Corporate Services</h3>
              <p className="text-gray-500 text-sm">Business registration & compliance solutions</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {corporateServices.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <Link
              href="/site-map"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all group"
            >
              View All Corporate Services
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Technical Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/30"
            >
              <Cpu size={24} className="text-white" />
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Services</h3>
              <p className="text-gray-500 text-sm">Certifications & regulatory approvals</p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {technicalServices.map((service, index) => (
              <ServiceCard key={service.name} service={service} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <Link
              href="/site-map"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all group"
            >
              View All Technical Services
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl blur-xl opacity-20" />
          <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
            />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield size={16} className="text-emerald-400" />
                  </motion.div>
                  <span className="text-sm font-medium text-white">Free Consultation Available</span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Not sure which service you need?
                </h3>
                <p className="text-gray-300 max-w-lg">
                  Our compliance experts will guide you through the process and recommend the right certifications for your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/919266450125?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20compliance%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:1800121410410"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Call: 1800-121-410-410</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
