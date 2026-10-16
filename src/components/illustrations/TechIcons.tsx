import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const PythonIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
  >
    <path
      fill="#80FFDB"
      d="M63.4 3.1c-14.9 0-26.7 1.4-32.9 3.6-13.8 4.9-14.8 15.2-14.8 24.5v18.2h29.5v5.1H25.7C11.5 54.5 0 66.8 0 83.3c0 17.5 12.1 27.8 28.1 27.8h9.8v-13.8c0-8.9 7.6-16.5 16.5-16.5h29.3c8.2 0 14.8-6.7 14.8-14.8V35.4c0-14.3-11.8-24.8-27-31.2-3.8-1.5-7.7-1.1-8.1-1.1zm-15.6 10.3c3.6 0 6.6 3 6.6 6.6 0 3.7-3 6.6-6.6 6.6-3.7 0-6.6-3-6.6-6.6 0-3.6 3-6.6 6.6-6.6z"
    />
    <path
      fill="#F1FAF9"
      d="M64.6 124.9c14.9 0 26.7-1.4 32.9-3.6 13.8-4.9 14.8-15.2 14.8-24.5V78.6H82.8v-5.1h29.5c14.2 0 25.7-12.3 25.7-28.8 0-17.5-12.1-27.8-28.1-27.8h-9.8v13.8c0 8.9-7.6 16.5-16.5 16.5H54.3c-8.2 0-14.8 6.7-14.8 14.8v50.4c0 14.3 11.8 24.8 27 31.2 3.8 1.5 7.7 1.3 8.1 1.3zm15.6-10.3c-3.6 0-6.6-3-6.6-6.6 0-3.7 3-6.6 6.6-6.6 3.7 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6z"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="128" height="128" rx="20" fill="#80FFDB" />
    <path
      fill="#0B132B"
      d="M71.4 87.2c2.6 4.3 6 7.6 12.3 7.6 5.2 0 8.5-2.6 8.5-6.2 0-4.3-3.4-5.9-9.1-8.4l-3.1-1.3c-9-3.9-14.9-8.8-14.9-19.1 0-9.5 7.3-16.7 18.7-16.7 8.1 0 13.9 2.8 18 10l-8.5 5.5c-2.1-3.7-4.4-5.2-9.5-5.2-4.1 0-6.7 2.6-6.7 5.7 0 3.9 2.5 5.4 7.9 7.7l3.1 1.3c10.6 4.5 16.3 9.4 16.3 19.8 0 11.3-8.8 17.5-20.9 17.5-11.8 0-19.1-5.7-22.9-13.7l8.8-4.5zm-34.9.7c1.8 3.1 3.4 5.7 7.2 5.7 3.7 0 6.1-1.5 6.1-7.2V44.2h12.5v46.4c0 12.5-7.3 18.1-18.1 18.1-9.8 0-15.5-5.1-18.7-12.6l11-8.2z"
    />
  </svg>
);

export const CppIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="128" height="128" rx="20" fill="#1C2541" stroke="#80FFDB" strokeWidth="4" />
    <text
      x="64"
      y="76"
      textAnchor="middle"
      fontSize="42"
      fontWeight="bold"
      fill="#F1FAF9"
      fontFamily="system-ui, sans-serif"
    >
      C<tspan fill="#80FFDB">++</tspan>
    </text>
  </svg>
);

export const JavaIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path
      fill="#80FFDB"
      d="M48.7 87.2c-12.7 1.3-15.4 6.8-5.3 8.3 12.6 1.8 30.6 1.7 42.4-.6 4.1-.8 7.4-2.1 7.4-3.6 0-3.9-15.4-4.8-44.5-4.1zm-1.8 13.9c-12.7 1.3-14.7 7.3-3.6 8.7 13.8 1.8 35 1.5 47.9-.7 4.5-.8 8.1-2.2 8.1-3.7 0-4.1-17.1-5-52.4-4.3zm29.8-31.5c4.7 4.8 6.4 9 3.5 12.6-3.7 4.5-12.3 5.4-21.8 5.7-13.4.4-26.4-.9-31.2-5.4-2.5-2.4-2.2-5.7 1.2-8.5 7.1-5.8 20.3-6.1 33.4-6.3 5.6-.1 10.9-.1 14.9 1.9z"
    />
    <path
      fill="#F1FAF9"
      d="M59.4 12.6c3.2 4.1.8 8.4-2.7 13-4.8 6.4-10.4 14.2-2.3 22.3 3.9 3.9 8.6 4.5 13.7 4.1 6.5-.5 13.1-2.9 18.6-6.1 1.7-1 1.2-2.8-.7-2.9-4.8-.3-9.5.4-13.9 2-3.1 1.1-6.1.5-8.2-1.7-4.1-4.3-1.6-9.7 2.1-14.8 4.2-5.9 7.6-11.8 2.2-16.7-2.6-2.3-6.4-2.2-8.8.8z"
    />
    <path
      fill="#80FFDB"
      d="M74.3 27.6c1.6 2.3.2 4.6-1.7 7-2.8 3.5-5.9 7.8-1.3 12.3 2.2 2.2 4.9 2.5 7.8 2.3 3.7-.3 7.4-1.6 10.5-3.4 1-.6.7-1.5-.4-1.6-2.7-.2-5.4.2-7.9 1.1-1.8.6-3.5.3-4.6-.9-2.3-2.4-.9-5.4 1.2-8.2 2.4-3.3 4.3-6.6 1.2-9.3-1.4-1.3-3.6-1.2-4.8.7z"
    />
  </svg>
);

export const HTMLIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="128" height="128" rx="20" fill="#1C2541" stroke="#344563" strokeWidth="3" />
    <path fill="#80FFDB" d="M28 20L36 104L64 112L92 104L100 20H28Z" />
    <path fill="#0B132B" d="M64 28V103L84 97L90 35H64V28Z" opacity="0.3" />
    <text
      x="64"
      y="75"
      textAnchor="middle"
      fontSize="24"
      fontWeight="900"
      fill="#0B132B"
      fontFamily="system-ui, sans-serif"
    >
      HTML
    </text>
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="128" height="128" rx="20" fill="#1C2541" stroke="#80FFDB" strokeWidth="3" />
    <path
      fill="#80FFDB"
      d="M104.8 54.4L73.6 23.2c-3.1-3.1-8.1-3.1-11.2 0l-9.1 9.1 14.1 14.1c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.5 6.6 2.3 9.9l13.6 13.6c3.3-1.1 7.2-.4 9.9 2.3 3.8 3.8 3.8 9.9 0 13.7s-9.9 3.8-13.7 0c-2.8-2.8-3.5-6.9-2.1-10.3L61.6 64.6v23.5c1.1.5 2.1 1.3 2.9 2.1 3.8 3.8 3.8 9.9 0 13.7s-9.9 3.8-13.7 0-3.8-9.9 0-13.7c1.2-1.2 2.6-2 4.1-2.4V62.4c-1.5-.4-3-1.2-4.1-2.4-2.8-2.8-3.5-6.9-2.1-10.3L34.9 35.8 23.2 47.5c-3.1 3.1-3.1 8.1 0 11.2l31.2 31.2c3.1 3.1 8.1 3.1 11.2 0l39.2-39.2c3.1-3.1 3.1-8.1 0-6.3z"
    />
  </svg>
);

export const ProblemSolvingIcon: React.FC<IconProps> = ({ className = 'w-10 h-10', size }) => (
  <svg
    viewBox="0 0 128 128"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="128" height="128" rx="20" fill="#1C2541" stroke="#80FFDB" strokeWidth="3" />
    <circle cx="64" cy="40" r="14" fill="#80FFDB" />
    <circle cx="36" cy="92" r="14" fill="#F1FAF9" />
    <circle cx="92" cy="92" r="14" fill="#F1FAF9" />
    <line x1="56" y1="48" x2="42" y2="80" stroke="#80FFDB" strokeWidth="4" />
    <line x1="72" y1="48" x2="86" y2="80" stroke="#80FFDB" strokeWidth="4" />
    <line x1="48" y1="92" x2="80" y2="92" stroke="#344563" strokeWidth="3" strokeDasharray="4 4" />
  </svg>
);
