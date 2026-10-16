import React from 'react';
import { Award, GitBranch, Terminal, Shield, CheckCircle2, Cpu } from 'lucide-react';

export const ExperienceIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-md' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#80FFDB]/15 to-transparent blur-xl -z-10" />

      {/* Structured Engineering Track & Hackathon Milestone Card */}
      <div className="rounded-2xl bg-[#1C2541] border border-[#344563] shadow-2xl p-6 space-y-5 font-mono text-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#344563]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#0B132B] border border-[#80FFDB] flex items-center justify-center text-[#80FFDB]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#F1FAF9] font-sans">Engineering Milestones</h4>
              <p className="text-[11px] text-[#B8C7D9]">Hackathon &amp; Software Projects</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#0B132B] border border-[#80FFDB]/40 text-[10px] text-[#80FFDB] font-bold">
            2025–2026
          </span>
        </div>

        {/* Milestone 1: IBM SkillsBuild Regional Hackathon Finalist */}
        <div className="p-4 rounded-xl bg-[#0B132B] border border-[#80FFDB]/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#80FFDB] flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#80FFDB]" />
              SkillUp Hackathon 2026 Finale
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C2541] text-[#80FFDB] border border-[#344563]">
              Regional Finalist
            </span>
          </div>
          <p className="text-[11px] text-[#B8C7D9] font-sans">
            Collaborated in Team VERIMEDIA AI targeting media manipulation forensics (image, video, audio).
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['React', 'TypeScript', 'Express', 'SQLite'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-[#1C2541] text-[10px] text-[#F1FAF9]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Milestone 2: C++ Student Grade Sheet Management System */}
        <div className="p-4 rounded-xl bg-[#0B132B] border border-[#344563] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#F1FAF9] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#80FFDB]" />
              Student Management System
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C2541] text-emerald-400 border border-[#344563]">
              Completed
            </span>
          </div>
          <p className="text-[11px] text-[#B8C7D9] font-sans">
            Centralized C++ record management application for attendance, examinations, and grade sheets.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {['C++', 'Data Structures', 'File I/O', 'CLI'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded bg-[#1C2541] text-[10px] text-[#F1FAF9]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer audit indicator */}
        <div className="pt-2 border-t border-[#344563] flex items-center justify-between text-[11px] text-[#B8C7D9]">
          <span className="flex items-center gap-1.5 text-[#80FFDB]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Active CSE Undergraduate Lab Practice</span>
          </span>
          <span>Pragati Univ</span>
        </div>
      </div>
    </div>
  );
};
