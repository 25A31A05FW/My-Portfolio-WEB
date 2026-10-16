import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto generation for authentic email delivery
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
                Get In Touch
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
                Contact Me
              </h2>
              <p className="text-sm sm:text-base text-[#B8C7D9] leading-relaxed">
                Reach out for software development opportunities, academic discussions, or inquiries regarding VERIMEDIA AI.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 transition-colors flex items-center justify-between group shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-[#344563] flex items-center justify-center text-[#80FFDB] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#B8C7D9] uppercase tracking-wider block">Email</span>
                    <a
                      href={PERSONAL_INFO.socials.email}
                      className="text-sm sm:text-base font-semibold text-[#F1FAF9] hover:text-[#80FFDB] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 text-[#B8C7D9] hover:text-[#80FFDB] hover:bg-[#0B132B] rounded-lg transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#80FFDB]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 transition-colors flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-[#344563] flex items-center justify-center text-[#80FFDB] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B8C7D9] uppercase tracking-wider block">Phone</span>
                  <a
                    href={PERSONAL_INFO.socials.phone}
                    className="text-sm sm:text-base font-semibold text-[#F1FAF9] hover:text-[#80FFDB] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 transition-colors flex items-center gap-4 shadow-md">
                <div className="w-12 h-12 rounded-xl bg-[#0B132B] border border-[#344563] flex items-center justify-center text-[#80FFDB] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#B8C7D9] uppercase tracking-wider block">Location</span>
                  <span className="text-sm sm:text-base font-semibold text-[#F1FAF9]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Profiles & Languages */}
            <div className="p-5 rounded-2xl bg-[#1C2541] border border-[#344563] space-y-3 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#80FFDB] block">
                Languages &amp; Professional Profiles
              </span>
              <div className="flex flex-wrap gap-4 text-xs">
                {PERSONAL_INFO.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span className="font-semibold text-[#F1FAF9]">{lang.name}:</span>
                    <span className="text-[#80FFDB] font-mono">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#344563]">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-[#344563] hover:border-[#80FFDB] text-xs font-mono text-[#80FFDB] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>25A31A05FW</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-[#344563] hover:border-[#80FFDB] text-xs font-mono text-[#80FFDB] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1C2541] border border-[#344563] shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F1FAF9] tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#B8C7D9] mb-8">
                Your message triggers client-side validation and opens your email client directly pre-filled with the message payload.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#0B132B] border border-[#80FFDB] text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-[#80FFDB] mx-auto" />
                  <h4 className="text-lg font-bold text-[#F1FAF9]">Message Prepared!</h4>
                  <p className="text-xs sm:text-sm text-[#B8C7D9]">
                    Your email client has been opened with your message. If it didn&apos;t open automatically, you can write directly to <strong className="text-[#80FFDB] underline">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 text-xs font-bold text-[#0B132B] bg-[#80FFDB] rounded-lg hover:bg-[#5EEAD4] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#B8C7D9] uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 bg-[#0B132B] rounded-xl border text-[#F1FAF9] placeholder-[#556987] text-sm focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#344563] focus:border-[#80FFDB]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-[#B8C7D9] uppercase tracking-wider block">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 bg-[#0B132B] rounded-xl border text-[#F1FAF9] placeholder-[#556987] text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500 focus:border-rose-500'
                            : 'border-[#344563] focus:border-[#80FFDB]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#B8C7D9] uppercase tracking-wider block">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      placeholder="Software Development / Project Inquiry"
                      className={`w-full px-4 py-3 bg-[#0B132B] rounded-xl border text-[#F1FAF9] placeholder-[#556987] text-sm focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#344563] focus:border-[#80FFDB]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-[#B8C7D9] uppercase tracking-wider block">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Hello Sudheer, I would like to discuss..."
                      className={`w-full px-4 py-3 bg-[#0B132B] rounded-xl border text-[#F1FAF9] placeholder-[#556987] text-sm focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500 focus:border-rose-500'
                          : 'border-[#344563] focus:border-[#80FFDB]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#80FFDB] hover:bg-[#5EEAD4] text-[#0B132B] font-bold rounded-xl transition-all duration-200 shadow-[0_8px_25px_rgba(128,255,219,0.3)] hover:shadow-[0_10px_30px_rgba(128,255,219,0.45)] hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-[#0B132B]" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
