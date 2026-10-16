import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0B132B] border-t border-[#344563] text-[#F1FAF9] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Signature & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <span className="font-signature text-3xl font-bold text-[#80FFDB]">
            Sudheer
          </span>
          <p className="text-sm font-semibold text-[#F1FAF9]">
            {PERSONAL_INFO.fullName}
          </p>
          <p className="text-xs text-[#B8C7D9]">
            Software Developer • Computer Science Engineering, Pragati University (8.74 CGPA)
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.socials.email}
            className="w-10 h-10 rounded-full bg-[#1C2541] hover:bg-[#80FFDB] text-[#80FFDB] hover:text-[#0B132B] flex items-center justify-center transition-colors border border-[#344563] hover:border-[#80FFDB]"
            aria-label="Email"
            title={PERSONAL_INFO.email}
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.phone}
            className="w-10 h-10 rounded-full bg-[#1C2541] hover:bg-[#80FFDB] text-[#80FFDB] hover:text-[#0B132B] flex items-center justify-center transition-colors border border-[#344563] hover:border-[#80FFDB]"
            aria-label="Phone"
            title={PERSONAL_INFO.phoneFormatted}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#1C2541] hover:bg-[#80FFDB] text-[#80FFDB] hover:text-[#0B132B] flex items-center justify-center transition-colors border border-[#344563] hover:border-[#80FFDB]"
            aria-label="GitHub"
            title="GitHub: 25A31A05FW"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#1C2541] hover:bg-[#80FFDB] text-[#80FFDB] hover:text-[#0B132B] flex items-center justify-center transition-colors border border-[#344563] hover:border-[#80FFDB]"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Scroll to top link */}
        <div className="flex items-center gap-4 text-xs text-[#B8C7D9]">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#80FFDB] hover:underline font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#80FFDB]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
