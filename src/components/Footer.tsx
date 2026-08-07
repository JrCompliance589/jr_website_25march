'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Building2, Cpu, MapPin } from 'lucide-react';

const corporateServices = [
  { name: 'Company Registration', href: '/corporate/private-limited-company-registration-consultant' },
  { name: 'GST Registration', href: '/corporate/gst-registration' },
  { name: 'Trademark Registration', href: '/corporate/trademark-registration' },
  { name: 'FSSAI License', href: '/corporate/fssai-certificate' },
  { name: 'PSARA License', href: '/corporate/psara-license-registration-consultant' },
];

const technicalServices = [
  { name: 'BIS Certification', href: '/approval/bis-certification' },
  { name: 'AERB License', href: '/approval/aerb-license' },
  { name: 'EPR Registration', href: '/approval/epr-registration' },
  { name: 'WPC License', href: '/approval/wpc-license' },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const usefulLinks = [
  { name: 'Blog', href: 'https://www.jrcompliance.com/blogs', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 text-sm">Get helpful business tips & compliance updates in your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40 text-sm"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/JRlogo2.png"
                  alt="JR Compliance"
                  width={250}
                  height={75}
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </Link>

              <div className="space-y-3">
                <a href="tel:+911800121410410" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <span className="text-gray-500">Call Us</span>
                  <span className="font-medium">+91-1800-121-410-410</span>
                </a>
                <a href="mailto:info@jrcompliance.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm">
                  <span className="text-gray-500">Write to Us</span>
                  <span className="font-medium">info@jrcompliance.com</span>
                </a>
              </div>
            </div>

            {/* Corporate Services */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Corporate Services</h4>
              <ul className="space-y-2">
                {corporateServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Services */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Technical Services</h4>
              <ul className="space-y-2">
                {technicalServices.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Useful Links</h4>
              <ul className="space-y-2">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-8 border-t border-white/10">
            <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <h5 className="font-semibold text-gray-300 text-sm mb-2">Disclaimer</h5>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                To all whom it may concern, JR Compliance is not liable for any direct, indirect, incidental, special, or consequential damages from the use of any information contained on our website or from any action/decision taken as a result of using the site.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                The information provided on this website is with the sole intention to give information, not a professional opinion. Moreover, our website might include copyrighted material that may or may not have been specifically authorized by the owner; however, it is used for the purpose of providing information. That constitutes a &quot;fair means&quot; under Section 52 of the Copyright Act, 1957.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                We do not promote or provide any government-issued documents. We are a private compliance consultancy firm offering professional guidance and support to business owners in obtaining the relevant certifications from the respective government authorities.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} JR Compliance. All rights reserved.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: 'https://www.facebook.com/jrcompliance' },
                  { Icon: Twitter, href: 'https://x.com/JrCompliance' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/company/jr-compliance-&-testing-labs' },
                  { Icon: Instagram, href: 'https://www.instagram.com/jrcompliance' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
