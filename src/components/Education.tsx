import React from 'react';
import { motion } from 'motion/react';
import { EducationIllustration } from './illustrations/EducationIllustration';
import { EDUCATION_LIST } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Education Heading & Midnight Slate Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
                Academic Background
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((item, index) => (
                <div
                  key={index}
                  className="relative p-6 sm:p-7 rounded-3xl bg-[#1C2541] hover:bg-[#1E294B] border border-[#344563] hover:border-[#80FFDB]/60 shadow-[0_12px_35px_rgba(0,0,0,0.4)] transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#344563]">
                    <div className="flex items-center gap-4">
                      {/* Mint Ice circular icon containing graduation-cap symbol */}
                      <div className="w-14 h-14 rounded-full bg-[#80FFDB] flex items-center justify-center text-[#0B132B] shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <GraduationCap className="w-7 h-7 text-[#0B132B]" />
                      </div>
                      <div>
                        {/* Qualification in bold white text */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-[#F1FAF9] tracking-tight">
                            {item.degree}
                          </h3>
                          {item.grade && (
                            <span className="px-2.5 py-0.5 rounded-full bg-[#0B132B] border border-[#80FFDB]/40 text-xs font-mono font-bold text-[#80FFDB] shadow-xs">
                              {item.grade}
                            </span>
                          )}
                        </div>
                        {/* Institution in muted light gray */}
                        <p className="text-sm sm:text-base text-[#B8C7D9] font-medium flex items-center gap-1.5 mt-0.5">
                          <span>{item.institution}</span>
                          <span className="text-[#344563]">•</span>
                          <span className="flex items-center gap-1 text-xs text-[#B8C7D9]">
                            <MapPin className="w-3 h-3 text-[#80FFDB]" />
                            {item.location}
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Date in small Mint Ice text */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#344563] text-xs sm:text-sm font-mono font-semibold text-[#80FFDB] shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-4 space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#80FFDB] font-bold flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#80FFDB]" />
                      Curricular Details &amp; Achievements
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#B8C7D9] font-normal">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span className="text-[#80FFDB] font-bold mt-0.5">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education Themed Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <EducationIllustration className="w-full max-w-md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
