import React from 'react';
import { motion } from 'motion/react';
import { AboutIllustration } from './illustrations/AboutIllustration';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Globe2, Award, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9] overflow-hidden"
    >
      {/* Decorative thin mint line and small mint circles near the top */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 sm:px-12 mb-16"
      >
        <div className="flex items-center gap-3">
          <div className="w-3.5 h-3.5 rounded-full bg-[#80FFDB] ring-4 ring-[#80FFDB]/20" />
          <div className="w-2 h-2 rounded-full bg-[#80FFDB]/60" />
          <div className="h-[2px] flex-1 bg-gradient-to-r from-[#80FFDB] via-[#80FFDB]/40 to-transparent" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Who I Am Heading & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
                Introduction
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
                Who I Am
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-[#B8C7D9] leading-relaxed">
              <p>
                I am a software developer and Computer Science Engineering student at <strong className="text-[#F1FAF9] font-semibold">Pragati University</strong> (Expected Graduation: 2029) based in Rajahmundry, Andhra Pradesh, maintaining a high academic standing with an <strong className="text-[#80FFDB] font-bold">8.74 CGPA</strong>.
              </p>

              <p>
                I am actively building practical skills across <strong className="text-[#F1FAF9] font-semibold">Python, JavaScript, C++, Java, HTML, Git, and GitHub</strong>. Passionate about software development and algorithmic problem-solving, I focus on engineering clean, reliable solutions that address practical challenges.
              </p>

              <p>
                My active initiatives include <strong className="text-[#80FFDB] font-semibold">VERIMEDIA</strong>, a media-investigation project focused on potentially manipulated or misused image, video, and audio content—which led our team to become <strong className="text-[#F1FAF9] font-semibold">Regional Finalists at the IBM SkillsBuild Regional Hackathon finale</strong>. I also developed a centralized <strong className="text-[#F1FAF9] font-semibold">Student Grade Sheet Management System</strong> in C++.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 rounded-2xl flex items-start gap-3 transition-colors shadow-md">
                <div className="p-2.5 bg-[#0B132B] border border-[#344563] rounded-xl text-[#80FFDB] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F1FAF9]">Pragati University</h4>
                  <p className="text-xs text-[#80FFDB] font-mono mt-0.5 font-semibold">8.74 CGPA • CSE (2025–2029)</p>
                </div>
              </div>

              <div className="p-4 bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 rounded-2xl flex items-start gap-3 transition-colors shadow-md">
                <div className="p-2.5 bg-[#0B132B] border border-[#344563] rounded-xl text-[#80FFDB] shrink-0">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F1FAF9]">Languages</h4>
                  <p className="text-xs text-[#B8C7D9] mt-0.5">Telugu (Fluent) • English (Intermediate)</p>
                </div>
              </div>

              <div className="p-4 bg-[#1C2541] border border-[#344563] hover:border-[#80FFDB]/60 rounded-2xl flex items-start gap-3 transition-colors shadow-md sm:col-span-2">
                <div className="p-2.5 bg-[#0B132B] border border-[#344563] rounded-xl text-[#80FFDB] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F1FAF9]">IBM SkillsBuild Regional Finalist</h4>
                  <p className="text-xs text-[#B8C7D9] mt-0.5">
                    SkillUp Hackathon 2026 Regional Finalist with Team VERIMEDIA AI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stylized Thematic Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <AboutIllustration className="w-full max-w-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
