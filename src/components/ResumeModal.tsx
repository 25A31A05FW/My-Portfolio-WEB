import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, GraduationCap, Github, Linkedin, Award, Code2, Globe2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `NEELAPALA SATYA SUDHEER
SOFTWARE DEVELOPER | COMPUTER SCIENCE ENGINEERING STUDENT
Rajahmundry, Andhra Pradesh | +91 9160842823 | neelapalasrinu02@gmail.com
GitHub: https://github.com/25A31A05FW | LinkedIn: https://www.linkedin.com/in/neelapala-satya-sudheer-161863396/

PROFESSIONAL SUMMARY
Software developer and Computer Science Engineering student at Pragati University, expected to graduate in 2029, with an 8.74 CGPA. Building practical skills in Python, JavaScript, C++, Java, and web technologies. Interested in software development and problem-solving. Current projects include VERIMEDIA, a media-investigation project focused on potentially manipulated or misused image, video, and audio content, and a Student Grade Sheet Management System.

TECHNICAL SKILLS
• Programming: Python (Beginner), JavaScript (Beginner), C++ (Beginner), Java (Beginner)
• Web and tools: HTML, Git, GitHub
• Additional: Problem-solving

PROJECTS
• VERIMEDIA | In progress | Team member — Media-investigation project focused on potentially manipulated or misused image, video, and audio content. Attended the IBM SkillsBuild Regional Hackathon finale with the project. Technologies: React, TypeScript, Express, SQLite.
• Student Grade Sheet Management / Student Management System | Completed — Student-record management application for organizing student information such as attendance, academic performance, and examination results in a centralized system. Technology: C++.

EDUCATION
• B.Tech / B.E. in Computer Science Engineering — Pragati University | Currently studying | Expected graduation: 2029 | CGPA: 8.74
• Intermediate — SASI Junior College, State Board | 2023 | 980/1000
• Class 10 — Ravindra Bharathi High School | 2023 | Marks: 523 (maximum score not provided)

CERTIFICATIONS & ACHIEVEMENTS
• AI Skills Passport — EY and Microsoft, Certificate of Completion.
• Master the Art of Prompting — IBM SkillsBuild / 1M1B. Certificate date: 06 Oct 2026.
• Introduction to Generative AI and Agents — Microsoft. Certificate date: 24 Aug 2026.
• Certificate of Excellence, SkillUp Hackathon 2026 — Regional Finalist, Team VERIMEDIA AI; SkillUp in collaboration with IBM SkillsBuild.

ADDITIONAL INFORMATION
• Languages: English (Intermediate), Telugu (Fluent)
• GitHub: https://github.com/25A31A05FW
• LinkedIn: https://www.linkedin.com/in/neelapala-satya-sudheer-161863396/
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Neelapala_Satya_Sudheer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0B132B] border-2 border-[#80FFDB] rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C2541] border-b border-[#344563] shrink-0">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#80FFDB]" />
            <h3 className="text-lg font-bold text-[#F1FAF9]">Resume — Neelapala Satya Sudheer</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#F1FAF9] bg-[#0B132B] hover:bg-[#344563] border border-[#344563] rounded-lg transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-[#80FFDB]" />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>
            <button
              onClick={handleDownloadText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0B132B] bg-[#80FFDB] hover:bg-[#5EEAD4] rounded-lg transition-colors shadow-sm font-bold"
              title="Download File"
            >
              <Download className="w-4 h-4 text-[#0B132B]" />
              <span>Download CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#B8C7D9] hover:text-[#F1FAF9] hover:bg-[#0B132B] rounded-lg transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-8 overflow-y-auto space-y-6 text-[#F1FAF9] bg-[#0B132B]" id="printable-resume">
          {/* Header */}
          <div className="border-b border-[#344563] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#1C2541] border-2 border-[#80FFDB] flex items-center justify-center rounded-lg shadow-inner">
                <span className="text-3xl font-black text-[#80FFDB]">N</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F1FAF9] tracking-tight">
                  Neelapala Satya Sudheer
                </h1>
                <p className="text-xs sm:text-sm text-[#80FFDB] font-semibold font-mono mt-0.5">
                  SOFTWARE DEVELOPER | COMPUTER SCIENCE ENGINEERING STUDENT
                </p>
                <p className="text-xs text-[#B8C7D9] mt-0.5 font-mono">
                  Pragati University • Expected 2029 • <span className="text-[#80FFDB] font-bold">8.74 CGPA</span>
                </p>
              </div>
            </div>

            <div className="text-xs text-[#B8C7D9] space-y-1 sm:text-right font-mono">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#80FFDB]" />
                <a href={PERSONAL_INFO.socials.phone} className="hover:text-[#80FFDB]">
                  +91 9160842823
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#80FFDB]" />
                <a href={PERSONAL_INFO.socials.email} className="hover:text-[#80FFDB]">
                  neelapalasrinu02@gmail.com
                </a>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#80FFDB]" />
                <span>Rajahmundry, Andhra Pradesh</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5 pt-1">
                <Github className="w-3.5 h-3.5 text-[#80FFDB]" />
                <a href="https://github.com/25A31A05FW" target="_blank" rel="noreferrer" className="text-[#80FFDB] underline">
                  github.com/25A31A05FW
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-[#B8C7D9] bg-[#1C2541] p-4 rounded-xl border border-[#344563]">
              Software developer and Computer Science Engineering student at Pragati University, expected to graduate in 2029, with an 8.74 CGPA. Building practical skills in Python, JavaScript, C++, Java, and web technologies. Interested in software development and problem-solving. Current projects include VERIMEDIA, a media-investigation project focused on potentially manipulated or misused image, video, and audio content, and a Student Grade Sheet Management System.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="text-xs font-mono font-bold text-[#80FFDB] uppercase block">Programming</span>
                <p className="text-xs text-[#F1FAF9] mt-1 font-medium">
                  Python (Beginner), JavaScript (Beginner), C++ (Beginner), Java (Beginner)
                </p>
              </div>
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="text-xs font-mono font-bold text-[#80FFDB] uppercase block">Web &amp; Tools</span>
                <p className="text-xs text-[#F1FAF9] mt-1 font-medium">
                  HTML, Git, GitHub
                </p>
              </div>
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="text-xs font-mono font-bold text-[#80FFDB] uppercase block">Additional</span>
                <p className="text-xs text-[#F1FAF9] mt-1 font-medium">
                  Problem-solving
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Education
            </h2>
            <div className="space-y-2">
              {/* College */}
              <div className="p-3.5 bg-[#1C2541] border border-[#80FFDB]/40 rounded-xl space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-[#F1FAF9]">B.Tech / B.E. in Computer Science Engineering</span>
                  <span className="text-xs text-[#80FFDB] font-mono font-bold">CGPA: 8.74</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#B8C7D9]">
                  <span>Pragati University | Currently studying</span>
                  <span className="font-mono">Expected graduation: 2029</span>
                </div>
              </div>

              {/* Intermediate */}
              <div className="p-3.5 bg-[#1C2541] border border-[#344563] rounded-xl space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-[#F1FAF9]">Intermediate — State Board</span>
                  <span className="text-xs text-[#80FFDB] font-mono font-bold">980 / 1000</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#B8C7D9]">
                  <span>SASI Junior College</span>
                  <span className="font-mono">2023</span>
                </div>
              </div>

              {/* Class 10 */}
              <div className="p-3.5 bg-[#1C2541] border border-[#344563] rounded-xl space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <span className="text-sm font-bold text-[#F1FAF9]">Class 10 (Secondary School)</span>
                  <span className="text-xs text-[#80FFDB] font-mono font-bold">Marks: 523</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#B8C7D9]">
                  <span>Ravindra Bharathi High School</span>
                  <span className="font-mono">2023</span>
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Projects
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-[#1C2541] border border-[#344563] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#F1FAF9]">VERIMEDIA</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B132B] text-[#80FFDB] border border-[#344563]">In progress | Team member</span>
                  </div>
                  <span className="text-xs font-mono text-[#80FFDB]">React, TypeScript, Express, SQLite</span>
                </div>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  Media-investigation project focused on potentially manipulated or misused image, video, and audio content. Attended the IBM SkillsBuild Regional Hackathon finale with the project.
                </p>
              </div>

              <div className="p-4 bg-[#1C2541] border border-[#344563] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#F1FAF9]">Student Grade Sheet Management / Student Management System</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B132B] text-emerald-400 border border-[#344563]">Completed</span>
                  </div>
                  <span className="text-xs font-mono text-[#80FFDB]">Technology: C++</span>
                </div>
                <p className="text-xs text-[#B8C7D9] leading-relaxed">
                  Student-record management application for organizing student information such as attendance, academic performance, and examination results in a centralized system.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Certifications &amp; Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="font-bold text-[#F1FAF9] block">• Certificate of Excellence, SkillUp Hackathon 2026</span>
                <span className="text-[#80FFDB] mt-0.5 block">Regional Finalist, Team VERIMEDIA AI; SkillUp in collaboration with IBM SkillsBuild</span>
              </div>
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="font-bold text-[#F1FAF9] block">• Master the Art of Prompting</span>
                <span className="text-[#B8C7D9] mt-0.5 block">IBM SkillsBuild / 1M1B (06 Oct 2026)</span>
              </div>
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="font-bold text-[#F1FAF9] block">• Introduction to Generative AI and Agents</span>
                <span className="text-[#B8C7D9] mt-0.5 block">Microsoft (24 Aug 2026)</span>
              </div>
              <div className="p-3 bg-[#1C2541] border border-[#344563] rounded-xl">
                <span className="font-bold text-[#F1FAF9] block">• AI Skills Passport</span>
                <span className="text-[#B8C7D9] mt-0.5 block">EY and Microsoft, Certificate of Completion</span>
              </div>
            </div>
          </div>

          {/* Languages & Additional Information */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#80FFDB] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#80FFDB]"></span>
              Additional Information
            </h2>
            <div className="p-3.5 bg-[#1C2541] border border-[#344563] rounded-xl space-y-2 text-xs">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-semibold text-[#F1FAF9]">Languages:</span>
                <span className="text-[#80FFDB] font-mono">English (Intermediate)</span>
                <span className="text-[#344563]">•</span>
                <span className="text-[#80FFDB] font-mono">Telugu (Fluent)</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-1 border-t border-[#344563]">
                <a href="https://github.com/25A31A05FW" target="_blank" rel="noreferrer" className="text-[#80FFDB] hover:underline font-mono">
                  GitHub: https://github.com/25A31A05FW
                </a>
                <span className="text-[#344563]">•</span>
                <a href="https://www.linkedin.com/in/neelapala-satya-sudheer-161863396/" target="_blank" rel="noreferrer" className="text-[#80FFDB] hover:underline font-mono">
                  LinkedIn: https://www.linkedin.com/in/neelapala-satya-sudheer-161863396/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#1C2541] border-t border-[#344563] flex items-center justify-between">
          <span className="text-xs text-[#B8C7D9]">Updated resume data for Neelapala Satya Sudheer</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#F1FAF9] bg-[#0B132B] hover:bg-[#344563] border border-[#344563] rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
