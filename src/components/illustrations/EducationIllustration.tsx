import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';

export const EducationIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-md' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#80FFDB]/15 to-transparent blur-xl -z-10" />

      {/* Structured Academic Performance Card */}
      <div className="rounded-2xl bg-[#1C2541] border border-[#344563] shadow-2xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#344563]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0B132B] border border-[#80FFDB] flex items-center justify-center text-[#80FFDB]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F1FAF9]">Academic Standing</h4>
              <p className="text-xs text-[#B8C7D9]">Computer Science Engineering</p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#0B132B] border border-[#80FFDB]/50 text-xs font-mono font-bold text-[#80FFDB]">
            8.74 CGPA
          </span>
        </div>

        {/* Milestone Breakdown */}
        <div className="space-y-4 font-mono text-xs">
          {/* Pragati University */}
          <div className="p-3.5 rounded-xl bg-[#0B132B] border border-[#344563] space-y-1.5">
            <div className="flex items-center justify-between text-[#F1FAF9] font-bold">
              <span>Pragati University</span>
              <span className="text-[#80FFDB]">8.74 CGPA</span>
            </div>
            <p className="text-[11px] text-[#B8C7D9] font-sans">
              B.Tech / B.E. in Computer Science Engineering • Expected 2029
            </p>
            <div className="w-full bg-[#1C2541] rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-[#80FFDB] h-full rounded-full" style={{ width: '87.4%' }} />
            </div>
          </div>

          {/* SASI Junior College */}
          <div className="p-3.5 rounded-xl bg-[#0B132B] border border-[#344563] space-y-1.5">
            <div className="flex items-center justify-between text-[#F1FAF9] font-bold">
              <span>SASI Junior College</span>
              <span className="text-[#80FFDB]">980 / 1000 (98%)</span>
            </div>
            <p className="text-[11px] text-[#B8C7D9] font-sans">
              Intermediate State Board • Graduated 2023 with Distinction
            </p>
            <div className="w-full bg-[#1C2541] rounded-full h-1.5 mt-2 overflow-hidden">
              <div className="bg-[#80FFDB] h-full rounded-full" style={{ width: '98%' }} />
            </div>
          </div>

          {/* Ravindra Bharathi High School */}
          <div className="p-3.5 rounded-xl bg-[#0B132B] border border-[#344563] space-y-1.5">
            <div className="flex items-center justify-between text-[#F1FAF9] font-bold">
              <span>Ravindra Bharathi High School</span>
              <span className="text-[#80FFDB]">523 Marks</span>
            </div>
            <p className="text-[11px] text-[#B8C7D9] font-sans">
              Class 10 Secondary Education • Completed 2023
            </p>
          </div>
        </div>

        {/* Footer Key metric */}
        <div className="pt-2 border-t border-[#344563] flex items-center justify-between text-xs text-[#B8C7D9]">
          <span className="flex items-center gap-1.5 text-[#80FFDB]">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Verified from Official Transcripts</span>
          </span>
          <span className="font-mono">Rajahmundry, AP</span>
        </div>
      </div>
    </div>
  );
};
