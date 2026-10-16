import React from 'react';

export const ExperienceIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-md' }) => {
  return (
    <div className={`relative flex items-center justify-center p-4 ${className}`}>
      <div className="absolute w-64 h-64 rounded-full bg-[#80FFDB]/15 blur-3xl -z-10 animate-pulse pointer-events-none" />

      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        {/* Frame container */}
        <rect x="20" y="20" width="420" height="340" rx="28" fill="#1C2541" stroke="#344563" strokeWidth="2" />
        
        {/* Top header bar */}
        <rect x="20" y="20" width="420" height="45" rx="28" fill="#0B132B" />
        <rect x="20" y="45" width="420" height="20" fill="#0B132B" />
        <circle cx="45" cy="42" r="5" fill="#80FFDB" />
        <circle cx="60" cy="42" r="5" fill="#344563" />
        <circle cx="75" cy="42" r="5" fill="#5EEAD4" />
        <text x="230" y="47" fill="#B8C7D9" fontSize="12" textAnchor="middle" fontFamily="monospace">
          hackathon-pipeline: verimedia-ai
        </text>

        {/* Server & Pipeline Stack */}
        <g transform="translate(50, 85)">
          {/* Server Unit 1 - VERIMEDIA */}
          <rect x="0" y="0" width="360" height="52" rx="10" fill="#0B132B" stroke="#80FFDB" strokeWidth="1.5" />
          <circle cx="25" cy="26" r="6" fill="#80FFDB" />
          <line x1="45" y1="20" x2="160" y2="20" stroke="#F1FAF9" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="32" x2="110" y2="32" stroke="#80FFDB" strokeWidth="3" strokeLinecap="round" />
          <rect x="230" y="14" width="115" height="24" rx="6" fill="#1C2541" stroke="#80FFDB" strokeWidth="1" />
          <text x="287" y="30" fill="#80FFDB" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            VERIMEDIA AI
          </text>

          {/* Connection Lines */}
          <line x1="180" y1="52" x2="180" y2="75" stroke="#80FFDB" strokeWidth="2" strokeDasharray="4 4" />

          {/* Server Unit 2 - IBM SkillsBuild Hackathon */}
          <rect x="0" y="75" width="360" height="52" rx="10" fill="#1C2541" stroke="#344563" strokeWidth="1.5" />
          <circle cx="25" cy="101" r="6" fill="#F1FAF9" />
          <line x1="45" y1="95" x2="200" y2="95" stroke="#F1FAF9" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="107" x2="140" y2="107" stroke="#80FFDB" strokeWidth="3" strokeLinecap="round" />
          <rect x="230" y="89" width="115" height="24" rx="6" fill="#0B132B" />
          <text x="287" y="105" fill="#80FFDB" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            REGIONAL FINALIST
          </text>

          {/* Connection Lines */}
          <line x1="180" y1="127" x2="180" y2="150" stroke="#80FFDB" strokeWidth="2" strokeDasharray="4 4" />

          {/* Server Unit 3 - C++ Student Management System */}
          <rect x="0" y="150" width="360" height="52" rx="10" fill="#0B132B" stroke="#344563" strokeWidth="1.5" />
          <circle cx="25" cy="176" r="6" fill="#80FFDB" />
          <line x1="45" y1="170" x2="170" y2="170" stroke="#B8C7D9" strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="182" x2="120" y2="182" stroke="#80FFDB" strokeWidth="3" strokeLinecap="round" />
          <rect x="230" y="164" width="115" height="24" rx="6" fill="#1C2541" />
          <text x="287" y="180" fill="#F1FAF9" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            C++ MANAGEMENT
          </text>
        </g>

        {/* Lower Metric bar */}
        <g transform="translate(50, 310)">
          <rect width="360" height="34" rx="8" fill="#0B132B" stroke="#344563" strokeWidth="1" />
          <text x="20" y="22" fill="#80FFDB" fontSize="11" fontFamily="monospace">
            &gt; IBM SkillsBuild &amp; Pragati Univ
          </text>
          <text x="340" y="22" fill="#F1FAF9" fontSize="11" textAnchor="end" fontFamily="monospace">
            8.74 CGPA
          </text>
        </g>
      </svg>
    </div>
  );
};
