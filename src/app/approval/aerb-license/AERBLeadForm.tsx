'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';
import { submitLeadWithAutoDetection } from '@/lib/api';

export default function AERBLeadForm() {
  const pathname = usePathname();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const currentStep =
    formData.phone.length === 10
      ? 3
      : formData.email.includes('@')
        ? 2
        : formData.name.length > 2
          ? 1
          : 0;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitLeadWithAutoDetection(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        },
        `AERB License - ${pathname}`,
        formData.message || undefined,
      );
      router.push('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again or call us directly.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md justify-self-center lg:justify-self-end">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 shadow-2xl shadow-black/50">
        <div className="relative border-b border-white/5 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-orange-600/10 px-5 py-5 sm:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-lg font-bold text-white">Get a free consultation.</h2>
            <div className="mt-4 flex items-center gap-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-1 items-center gap-2">
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-all ${
                      currentStep >= step
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                        : 'border border-white/10 bg-white/5 text-gray-500'
                    }`}
                  >
                    {currentStep > step ? <CheckCircle className="h-3.5 w-3.5" /> : step}
                  </div>
                  {step < 3 && (
                    <div
                      className={`h-0.5 flex-1 rounded-full transition-all ${
                        currentStep > step
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
                          : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5 sm:p-6">
          <label className="block">
            <span className="sr-only">Full Name</span>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500/50 focus:bg-white/10 sm:text-base"
              />
            </div>
          </label>

          <label className="block">
            <span className="sr-only">Email Address</span>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500/50 focus:bg-white/10 sm:text-base"
              />
            </div>
          </label>

          <label className="block">
            <span className="sr-only">Mobile Number</span>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500/50 focus:bg-white/10 sm:text-base"
              />
            </div>
          </label>

          <label className="block">
            <span className="sr-only">Message</span>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 pl-10 text-sm text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-500/50 focus:bg-white/10"
              />
            </div>
          </label>

          {submitError && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:opacity-95 disabled:opacity-70 sm:text-base"
          >
            <span>{isSubmitting ? 'Submitting...' : 'Get a free consultation'}</span>
            {isSubmitting ? (
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
