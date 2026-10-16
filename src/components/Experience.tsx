import React from 'react';
import { motion } from 'motion/react';
import { ExperienceIllustration } from './illustrations/ExperienceIllustration';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { Building, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Illustrative Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <ExperienceIllustration className="w-full max-w-md" />
          </motion.div>

          {/* Right Column: Experience Heading & Wide Midnight Slate Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
                Trajectory &amp; Applied Practice
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
                Experience
              </h2>
              <p className="text-sm sm:text-base text-[#B8C7D9]">
                Hands-on hackathon competition milestones, academic laboratory achievements, and software implementations.
              </p>
            </div>

            <div className="space-y-6">
              {EXPERIENCE_LIST.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative p-6 sm:p-7 rounded-3xl bg-[#1C2541] hover:bg-[#1E294B] border border-[#344563] hover:border-[#80FFDB]/60 shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                >
                  {/* Card Header: Role & Organization & Date */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#344563]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F1FAF9] tracking-tight group-hover:text-[#80FFDB] transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs sm:text-sm text-[#B8C7D9]">
                        <Building className="w-3.5 h-3.5 text-[#80FFDB]" />
                        <span className="font-medium text-[#F1FAF9]">{exp.organization}</span>
                        <span className="text-[#344563]">•</span>
                        <span className="text-xs font-mono text-[#80FFDB] font-semibold">{exp.type}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B132B] border border-[#344563] text-xs font-mono font-semibold text-[#80FFDB] shrink-0">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary & Bullet Responsibilities */}
                  <div className="pt-4 space-y-3">
                    <p className="text-xs sm:text-sm text-[#F1FAF9] leading-relaxed font-normal">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#B8C7D9]">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#80FFDB] mt-0.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
