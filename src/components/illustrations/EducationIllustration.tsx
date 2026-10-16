import React from 'react';

export const EducationIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-md' }) => {
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
        
        {/* Graduation cap background glow */}
        <circle cx="230" cy="150" r="70" fill="#344563" fillOpacity="0.4" />
        
        {/* Graduation Cap Vector */}
        <g id="graduation-cap">
          {/* Diamond top */}
          <path
            d="M230 75L350 120L230 165L110 120L230 75Z"
            fill="#80FFDB"
            stroke="#0B132B"
            strokeWidth="3"
          />
          {/* Cap Skull */}
          <path
            d="M155 140V185C155 210 305 210 305 185V140"
            fill="#1C2541"
            stroke="#80FFDB"
            strokeWidth="2.5"
          />
          {/* Tassel Button & String */}
          <circle cx="230" cy="120" r="6" fill="#0B132B" />
          <path
            d="M230 120Q310 140 315 190"
            stroke="#F1FAF9"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="310" y="190" width="10" height="20" rx="4" fill="#80FFDB" />
        </g>

        {/* Stack of Academic Books */}
        <g id="cs-books" transform="translate(60, 235)">
          {/* Book 1 (Bottom - B.Tech CSE Pragati) */}
          <rect x="0" y="55" width="340" height="32" rx="6" fill="#0B132B" stroke="#80FFDB" strokeWidth="1.5" />
          <rect x="15" y="60" width="12" height="22" rx="2" fill="#80FFDB" />
          <text x="40" y="76" fill="#F1FAF9" fontSize="12" fontWeight="bold" fontFamily="monospace">
            B.Tech CSE — Pragati Univ (8.74 CGPA)
          </text>

          {/* Book 2 (Middle - SASI Junior College) */}
          <rect x="25" y="26" width="290" height="28" rx="6" fill="#1C2541" stroke="#344563" strokeWidth="1.5" />
          <rect x="38" y="31" width="10" height="18" rx="2" fill="#80FFDB" />
          <text x="60" y="45" fill="#B8C7D9" fontSize="11" fontFamily="monospace">
            Intermediate — SASI Jr (980/1000)
          </text>

          {/* Book 3 (Top - Class 10 Ravindra Bharathi) */}
          <rect x="50" y="0" width="240" height="26" rx="6" fill="#80FFDB" stroke="#0B132B" strokeWidth="1.5" />
          <text x="70" y="17" fill="#0B132B" fontSize="11" fontWeight="bold" fontFamily="monospace">
            Class 10 — Ravindra Bharathi (523 M)
          </text>
        </g>

        {/* Decorative badge top right */}
        <g transform="translate(315, 45)">
          <rect width="105" height="40" rx="10" fill="#0B132B" stroke="#80FFDB" strokeWidth="1.5" />
          <text x="52" y="25" fill="#80FFDB" fontSize="12" fontWeight="bold" textAnchor="middle">
            8.74 CGPA
          </text>
        </g>
      </svg>
    </div>
  );
};
