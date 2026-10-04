import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { profileData } from '../data/profile';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || 'Server could not process your message at this time.'
        );
      }

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setSubmitError(
        err.message ||
          'Failed to send message. You can send an email directly using the link below.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const directMailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Rishabh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
  )}`;

  return (
    <div className="relative">
      <SectionHeading
        eyebrow="Initiate Collaboration"
        title="Let's Build Intelligent Systems"
        subtitle="Interested in AI Agents, LLMs, Generative AI, Edge AI, or Computer Vision projects? Let's connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="paper-card p-6 border border-[#DCD4BC]">
            <h3 className="text-base font-bold text-[#39402F] mb-1.5">
              Direct Channels
            </h3>
            <p className="text-xs text-[#77745F] mb-5 leading-relaxed">
              Direct engineering collaboration for autonomous agentic workflows, local RAG architectures, hardware-aware edge silicon, and computer vision pipelines.
            </p>

            <div className="space-y-2.5 text-xs font-mono">
              {/* Email */}
              <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8E1C9] text-[#405C3A]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#77745F]">EMAIL</div>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-[#39402F] font-sans font-medium hover:text-[#405C3A]"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#77745F] hover:text-[#39402F] rounded-md hover:bg-[#E8E1C9] transition-colors"
                  title="Copy email"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[#405C3A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8E1C9] text-[#405C3A]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#77745F]">PHONE / WHATSAPP</div>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-[#39402F] font-sans font-medium hover:text-[#405C3A]"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-1.5 text-[#77745F] hover:text-[#39402F] rounded-md hover:bg-[#E8E1C9] transition-colors"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-[#405C3A]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8E1C9] text-[#405C3A]">
                    <Linkedin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#77745F]">LINKEDIN</div>
                    <span className="text-[#39402F] font-sans font-medium">
                      rishabh-parmar-650541200
                    </span>
                  </div>
                </div>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#405C3A] hover:underline"
                >
                  Connect &rarr;
                </a>
              </div>

              {/* GitHub */}
              <div className="p-3 rounded-xl bg-[#FAF7EE] border border-[#DCD4BC] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-[#E8E1C9] text-[#405C3A]">
                    <Github className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#77745F]">GITHUB</div>
                    <span className="text-[#39402F] font-sans font-medium">
                      Rishabh3243
                    </span>
                  </div>
                </div>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#405C3A] hover:underline"
                >
                  Follow &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="paper-card p-6 sm:p-8 border border-[#DCD4BC]">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#E8E1C9] border border-[#405C3A]/40 text-[#405C3A] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#39402F] mb-1.5 font-sans">
                  Message Transmitted Successfully
                </h4>
                <p className="text-xs sm:text-sm text-[#77745F] max-w-sm mx-auto mb-5">
                  Thank you! Your message has been delivered to Rishabh, and an acknowledgement email has been sent to your inbox. He will review your inquiry and contact you in a while.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#405C3A] text-[#F6F0DC] hover:bg-[#344C30] transition-colors"
                >
                  Send Another Note
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-[#77745F] uppercase font-semibold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 bg-[#FAF7EE] border rounded-xl text-xs text-[#39402F] placeholder:text-[#77745F] focus:outline-none ${
                        errors.name ? 'border-red-400' : 'border-[#DCD4BC] focus:border-[#405C3A]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#77745F] uppercase font-semibold mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-3.5 py-2.5 bg-[#FAF7EE] border rounded-xl text-xs text-[#39402F] placeholder:text-[#77745F] focus:outline-none ${
                        errors.email ? 'border-red-400' : 'border-[#DCD4BC] focus:border-[#405C3A]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#77745F] uppercase font-semibold mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="e.g. AI Agents & LLM Integration / Edge Vision Project"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF7EE] border rounded-xl text-xs text-[#39402F] placeholder:text-[#77745F] focus:outline-none ${
                      errors.subject ? 'border-red-400' : 'border-[#DCD4BC] focus:border-[#405C3A]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#77745F] uppercase font-semibold mb-1.5">
                    Project Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe your technical requirements, architecture, or inquiry..."
                    className={`w-full px-3.5 py-2.5 bg-[#FAF7EE] border rounded-xl text-xs text-[#39402F] placeholder:text-[#77745F] focus:outline-none ${
                      errors.message ? 'border-red-400' : 'border-[#DCD4BC] focus:border-[#405C3A]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Error Banner with fallback mailto option */}
                {submitError && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-300 text-xs text-amber-900 space-y-1.5">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Transmission Note: </span>
                        <span>{submitError}</span>
                      </div>
                    </div>
                    <div className="pl-6 pt-0.5">
                      <a
                        href={directMailtoUrl}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#405C3A] hover:underline"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Send directly via your email app (mailto)</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#F6F0DC] bg-[#405C3A] hover:bg-[#344C30] transition-colors shadow-sm disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Dispatching via Gmail...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
