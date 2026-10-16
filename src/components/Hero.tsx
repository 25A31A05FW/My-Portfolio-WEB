import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Mail, Github, Linkedin, Phone, MapPin, Camera, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0B132B]">
      {/* ================= LEFT REGION: MINT ICE PANEL (~35% width on desktop) ================= */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-[35%] bg-[#80FFDB] text-[#0B132B] flex flex-col justify-between p-8 sm:p-12 lg:p-14 z-10 min-h-[420px] lg:min-h-screen shadow-2xl"
      >
        {/* Upper-left: Handwritten Signature / Personal Logo */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-signature text-4xl sm:text-5xl font-bold tracking-wide text-[#0B132B] drop-shadow-xs select-none">
              Sudheer
            </span>
            <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#0B132B]/80 -mt-1">
              Neelapala Satya Sudheer
            </span>
          </div>
        </div>

        {/* Mobile profile image container (only on smaller screens) */}
        <div className="lg:hidden my-6 flex justify-center">
          <div className="relative w-44 h-44 rounded-full border-4 border-[#0B132B] shadow-2xl bg-[#0B132B] overflow-hidden flex items-center justify-center group">
            {profileImage ? (
              <img
                src={profileImage}
                alt={PERSONAL_INFO.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1C2541] to-[#0B132B] text-[#F1FAF9] p-4 text-center">
                <div className="w-16 h-16 rounded-full bg-[#80FFDB] flex items-center justify-center text-[#0B132B] font-black text-2xl shadow-lg">
                  NS
                </div>
                <span className="text-xs font-semibold text-[#F1FAF9] mt-2">Neelapala Satya Sudheer</span>
                <span className="text-[10px] text-[#80FFDB] font-mono">Profile Photo Placeholder</span>
              </div>
            )}
            {/* Upload trigger overlay */}
            <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-[#F1FAF9] cursor-pointer transition-opacity text-xs font-medium">
              <Camera className="w-6 h-6 mb-1 text-[#80FFDB]" />
              <span>Upload Photo</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
        </div>

        {/* Bottom of the Mint Ice panel: Social Media Icons & Verification Badges */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0B132B]/80">
              Connect
            </span>
            <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#0B132B] text-[#80FFDB]">
              8.74 CGPA
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.email}
              className="w-10 h-10 rounded-full bg-[#0B132B] text-[#80FFDB] hover:bg-[#1C2541] hover:text-[#F1FAF9] flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 border border-[#0B132B]"
              aria-label="Send Email"
              title={PERSONAL_INFO.email}
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.phone}
              className="w-10 h-10 rounded-full bg-[#0B132B] text-[#80FFDB] hover:bg-[#1C2541] hover:text-[#F1FAF9] flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 border border-[#0B132B]"
              aria-label="Call Phone"
              title={PERSONAL_INFO.phoneFormatted}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#0B132B] text-[#80FFDB] hover:bg-[#1C2541] hover:text-[#F1FAF9] flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 border border-[#0B132B]"
              aria-label="GitHub Profile"
              title="GitHub: 25A31A05FW"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#0B132B] text-[#80FFDB] hover:bg-[#1C2541] hover:text-[#F1FAF9] flex items-center justify-center transition-all duration-200 shadow-md hover:scale-105 border border-[#0B132B]"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Neelapala Satya Sudheer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[11px] font-mono text-[#0B132B]/85 flex items-center gap-1.5 mt-1 font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#0B132B]" />
            <span>Rajahmundry, Andhra Pradesh</span>
          </p>
        </div>
      </motion.div>

      {/* ================= OVERLAPPING CIRCULAR PROFILE IMAGE (Desktop 35% boundary) ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      >
        <div className="relative group w-64 h-64 xl:w-72 xl:h-72 rounded-full border-4 border-[#80FFDB] shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0B132B] overflow-hidden flex items-center justify-center">
          {profileImage ? (
            <img
              src={profileImage}
              alt={PERSONAL_INFO.fullName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1C2541] via-[#101935] to-[#0B132B] p-6 text-center select-none">
              <div className="w-24 h-24 rounded-full bg-[#80FFDB] flex items-center justify-center text-[#0B132B] font-black text-4xl shadow-xl ring-4 ring-[#80FFDB]/30">
                NS
              </div>
              <span className="text-sm font-bold text-[#F1FAF9] mt-3 tracking-wide">
                Neelapala Satya Sudheer
              </span>
              <span className="text-[11px] text-[#80FFDB] font-mono mt-0.5 font-semibold">
                Pragati University CSE &apos;29 • 8.74 CGPA
              </span>
              <span className="text-[10px] text-[#B8C7D9] mt-1 font-mono">
                Click to upload profile photo
              </span>
            </div>
          )}

          {/* Hover overlay to upload own picture */}
          <label className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-[#F1FAF9] cursor-pointer transition-opacity duration-200 text-xs font-semibold p-4 text-center">
            <Camera className="w-8 h-8 mb-2 text-[#80FFDB]" />
            <span>Click to upload your photo</span>
            <span className="text-[10px] text-[#B8C7D9] mt-1">PNG, JPG, or WEBP</span>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
          </label>
        </div>
      </motion.div>

      {/* ================= RIGHT REGION: DEEP SPACE PANEL (~65% width on desktop) ================= */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full lg:w-[65%] bg-[#0B132B] text-[#F1FAF9] flex flex-col justify-center px-8 sm:px-14 lg:pl-36 lg:pr-20 py-16 lg:py-24 z-20"
      >
        <div className="max-w-xl space-y-6">
          {/* Professional Role above Name */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#80FFDB] font-mono block">
                SOFTWARE DEVELOPER | CSE STUDENT
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1C2541] border border-[#344563] text-[11px] font-mono font-bold text-[#80FFDB]">
                8.74 CGPA
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-[#F1FAF9] tracking-tight leading-[1.1]">
              {PERSONAL_INFO.fullName}
            </h1>
          </div>

          {/* Concise Professional Introduction based on New Resume */}
          <p className="text-base sm:text-lg text-[#B8C7D9] leading-relaxed font-normal">
            {PERSONAL_INFO.summary}
          </p>

          {/* Key Skill Highlights directly from New Resume */}
          <div className="space-y-2 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#B8C7D9] mr-1">Skills:</span>
              {['Python', 'JavaScript', 'C++', 'Java', 'HTML', 'Git & GitHub'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold text-[#80FFDB] bg-[#1C2541] border border-[#344563] rounded-md shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-[#80FFDB] font-mono pt-1">
              <Award className="w-3.5 h-3.5" />
              <span>IBM SkillsBuild Regional Hackathon Finalist (Team VERIMEDIA AI)</span>
            </div>
          </div>

          {/* Two Buttons: Download CV and Contact */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-[#80FFDB] hover:bg-[#5EEAD4] text-[#0B132B] font-bold rounded-xl transition-all duration-200 shadow-[0_8px_25px_rgba(128,255,219,0.25)] hover:shadow-[0_10px_30px_rgba(128,255,219,0.4)] hover:-translate-y-0.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
            >
              <Download className="w-5 h-5 text-[#0B132B]" />
              <span>Download CV</span>
            </button>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#1C2541] hover:bg-[#80FFDB] text-[#F1FAF9] hover:text-[#0B132B] font-bold border-2 border-[#80FFDB] rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
            >
              <Mail className="w-5 h-5 text-[#80FFDB] group-hover:text-[#0B132B]" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
