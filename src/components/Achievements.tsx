import React from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';
import { Award, CheckCircle, Calendar, GraduationCap, ShieldCheck, Sparkles, Bot } from 'lucide-react';

export const Achievements: React.FC = () => {
  const getThumbnailIcon = (title: string) => {
    if (title.includes('SkillUp') || title.includes('Hackathon')) {
      return <Award className="w-6 h-6 text-[#80FFDB]" />;
    }
    if (title.includes('Prompting')) {
      return <Sparkles className="w-6 h-6 text-[#80FFDB]" />;
    }
    if (title.includes('Generative AI') || title.includes('Agents')) {
      return <Bot className="w-6 h-6 text-[#80FFDB]" />;
    }
    if (title.includes('Passport')) {
      return <ShieldCheck className="w-6 h-6 text-[#80FFDB]" />;
    }
    return <Award className="w-6 h-6 text-[#80FFDB]" />;
  };

  return (
    <section
      id="achievements"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Elegant Italic Introductory Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-24"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
                Milestones &amp; Credentials
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
                Certifications &amp; Achievements
              </h2>
            </div>

            {/* Short introductory paragraph in an elegant italic style */}
            <p className="text-base sm:text-lg italic font-normal text-[#B8C7D9] leading-relaxed border-l-2 border-[#80FFDB] pl-4">
              &ldquo;Committed to practical technology mastery. From qualifying as a Regional Finalist at the IBM SkillsBuild Hackathon with VERIMEDIA AI to completing Microsoft and EY credentials in Generative AI and Prompting.&rdquo;
            </p>

            <div className="p-6 rounded-2xl bg-[#1C2541] border border-[#344563] space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0B132B] border border-[#344563] text-[#80FFDB]">
                  <CheckCircle className="w-5 h-5 text-[#80FFDB]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F1FAF9]">Verified Credentials</h4>
                  <p className="text-xs text-[#B8C7D9]">EY, Microsoft, IBM SkillsBuild, 1M1B &amp; SkillUp</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Wide, Rounded Midnight Slate Achievement Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {ACHIEVEMENTS_LIST.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 sm:p-7 rounded-3xl bg-[#1C2541] hover:bg-[#1E294B] border border-[#344563] hover:border-[#80FFDB]/60 shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group"
              >
                {/* Content */}
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#80FFDB]">
                      {item.category}
                    </span>
                    <span className="text-[#344563]">•</span>
                    <span className="text-xs text-[#B8C7D9] font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#80FFDB]" />
                      {item.date}
                    </span>
                    {item.credentialBadge && (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0B132B] border border-[#80FFDB]/40 text-[#80FFDB]">
                        {item.credentialBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#F1FAF9] tracking-tight group-hover:text-[#80FFDB] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B8C7D9] leading-relaxed font-normal">
                    {item.description}
                  </p>

                  <span className="text-xs font-medium text-[#B8C7D9] block pt-1">
                    Issuer: <span className="text-[#F1FAF9] font-semibold">{item.issuer}</span>
                  </span>
                </div>

                {/* Small thumbnail image / badge aligned to the right */}
                <div className="w-16 h-16 rounded-2xl bg-[#0B132B] border-2 border-[#344563] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 group-hover:border-[#80FFDB] transition-all">
                  {getThumbnailIcon(item.title)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
