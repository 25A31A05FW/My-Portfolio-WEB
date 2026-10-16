import React from 'react';

export const AboutIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-lg' }) => {
  return (
    <div className={`relative flex items-center justify-center p-4 ${className}`}>
      {/* Background glow disc */}
      <div className="absolute w-72 h-72 rounded-full bg-[#80FFDB]/15 blur-3xl -z-10 animate-pulse pointer-events-none" />
      
      <svg
        viewBox="0 0 500 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl"
      >
        {/* Soft background panel */}
        <rect x="30" y="30" width="440" height="360" rx="28" fill="#1C2541" stroke="#344563" strokeWidth="2" />
        
        {/* Mint top accent bar */}
        <path d="M30 58C30 42.536 42.536 30 58 30H442C457.464 30 470 42.536 470 58V70H30V58Z" fill="#80FFDB" />
        <circle cx="55" cy="50" r="5" fill="#0B132B" />
        <circle cx="70" cy="50" r="5" fill="#0B132B" />
        <circle cx="85" cy="50" r="5" fill="#0B132B" />
        <text x="250" y="55" fill="#0B132B" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
          developer.workspace.ts
        </text>

        {/* Code Editor Window */}
        <rect x="55" y="95" width="230" height="180" rx="12" fill="#0B132B" stroke="#80FFDB" strokeWidth="1.5" />
        <rect x="55" y="95" width="230" height="24" rx="12" fill="#1C2541" />
        <circle cx="70" cy="107" r="4" fill="#80FFDB" />
        <circle cx="82" cy="107" r="4" fill="#344563" />
        <circle cx="94" cy="107" r="4" fill="#5EEAD4" />

        {/* Code Lines */}
        <text x="75" y="140" fill="#80FFDB" fontSize="11" fontFamily="monospace">interface Developer &#123;</text>
        <text x="95" y="160" fill="#F1FAF9" fontSize="11" fontFamily="monospace">name: &quot;Sudheer&quot;;</text>
        <text x="95" y="180" fill="#B8C7D9" fontSize="11" fontFamily="monospace">university: &quot;Pragati&quot;;</text>
        <text x="95" y="200" fill="#80FFDB" fontSize="11" fontFamily="monospace">cgpa: 8.74;</text>
        <text x="95" y="220" fill="#B8C7D9" fontSize="11" fontFamily="monospace">project: &quot;VERIMEDIA&quot;;</text>
        <text x="75" y="240" fill="#80FFDB" fontSize="11" fontFamily="monospace">&#125;</text>

        {/* Terminal / Output Card */}
        <rect x="180" y="200" width="250" height="150" rx="16" fill="#1C2541" stroke="#344563" strokeWidth="2" />
        <rect x="180" y="200" width="250" height="26" rx="16" fill="#0B132B" />
        <text x="200" y="217" fill="#80FFDB" fontSize="11" fontWeight="bold" fontFamily="monospace">
          &gt; terminal: build output
        </text>
        <text x="200" y="250" fill="#80FFDB" fontSize="12" fontFamily="monospace">✔ VERIMEDIA: Regional Finalist</text>
        <text x="200" y="272" fill="#F1FAF9" fontSize="12" fontFamily="monospace">✔ IBM SkillsBuild Hackathon</text>
        <text x="200" y="294" fill="#B8C7D9" fontSize="11" fontFamily="monospace">[React, TS, Express, SQLite, C++]</text>
        <text x="200" y="320" fill="#80FFDB" fontSize="12" fontWeight="bold" fontFamily="monospace">Status: 8.74 CGPA Active</text>

        {/* Floating tech badge */}
        <g transform="translate(320, 100)">
          <rect width="110" height="70" rx="14" fill="#0B132B" stroke="#80FFDB" strokeWidth="2" />
          <circle cx="28" cy="35" r="14" fill="#80FFDB" />
          <path d="M23 35L27 39L34 31" stroke="#0B132B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="48" y="32" fill="#F1FAF9" fontSize="11" fontWeight="bold">Pragati Univ</text>
          <text x="48" y="48" fill="#80FFDB" fontSize="10">8.74 CGPA</text>
        </g>

        {/* Small decorative mint circles and crosses */}
        <circle cx="100" cy="340" r="16" fill="#80FFDB" fillOpacity="0.15" stroke="#80FFDB" strokeWidth="2" />
        <circle cx="100" cy="340" r="5" fill="#80FFDB" />
        
        <circle cx="430" cy="85" r="6" fill="#80FFDB" />
        <circle cx="390" cy="370" r="10" fill="#344563" />
        <line x1="60" y1="365" x2="80" y2="365" stroke="#80FFDB" strokeWidth="3" strokeLinecap="round" />
        <line x1="70" y1="355" x2="70" y2="375" stroke="#80FFDB" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};
