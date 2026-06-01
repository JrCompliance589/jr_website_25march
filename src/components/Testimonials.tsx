'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Kate Tran',
    role: 'Founder',
    company: 'TechVentures',
    content: 'JR Compliance was lightning fast! I got multiple quotes in seconds, bought my certification instantly, and my business was compliant right away. What usually takes days happened in minutes!',
    rating: 5,
  },
  {
    name: 'PN Dhawanjewar',
    role: 'Director',
    company: 'ElectroTech India',
    content: 'JR Compliance truly simplified certification for us. They were patient with questions, gave good advice, the prices were the best we could find, and the communication all round was very positive.',
    rating: 5,
  },
  {
    name: 'Atish Bihani',
    role: 'CEO',
    company: 'Sunrise Exports',
    content: 'Dealing with JR Compliance has been a great experience. Their prices are the best in the market, and their process to procure the certification is seamless and straightforward.',
    rating: 5,
  },
  {
    name: 'Rahul Sharma',
    role: 'Managing Director',
    company: 'InnovateTech Solutions',
    content: 'Extremely professional company and very prompt service. I am associated with them from last 4 to 5 years. I am extremely happy and satisfied with the service given by them.',
    rating: 5,
  },
  {
    name: 'Ekaterina Okopnaia',
    role: 'Representative',
    company: 'Acryl Salavat',
    content: 'As a representative of Acryl Salavat, a Russian manufacturer, I want to thank Pulkit Arora and Lalit Gupta for their diligence and very productive work on our FMCS project. They worked quickly, helped us through different issues, and remained flexible even though our payment approval system and contract process are very complex. We successfully passed the audit, received the license, and completed its renewal within the established timeframe. As a Russian entity, we face certain challenges, but with the JR team\'s help, we are successfully overcoming them.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Real Review for Real <span className="italic text-blue-600">Speed</span>
          </h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="grid grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl transition-all duration-300 bg-white shadow-xl border border-gray-100"
                >
                  <p className="mb-6 leading-relaxed text-gray-700">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.company}</div>
                      </div>
                    </div>
                    <div className="w-16 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-gray-400 font-medium">{testimonial.company.substring(0, 6)}...</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Single Card with Navigation */}
        <div className="lg:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              {testimonials[activeIndex].content}
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-gray-500">{testimonials[activeIndex].role} • {testimonials[activeIndex].company}</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
