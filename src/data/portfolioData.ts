export interface Skill {
  name: string;
  category: 'Programming' | 'Web & Tools' | 'Core Competencies';
  level: string;
  description: string;
  iconName: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  grade?: string;
  highlights: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  type: string;
  description: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  status: 'In progress' | 'Completed';
  role?: string;
  description: string;
  technologies: string[];
  features: string[];
  achievementBadge?: string;
  liveDemoAvailable: boolean;
  repoAvailable: boolean;
  repoUrl?: string;
  liveUrl?: string;
}

export interface AchievementItem {
  title: string;
  category: string;
  issuer: string;
  date: string;
  description: string;
  credentialBadge?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

export const PERSONAL_INFO = {
  fullName: 'Neelapala Satya Sudheer',
  firstName: 'Sudheer',
  role: 'Software Developer',
  secondaryRole: 'Computer Science Engineering Student',
  cgpa: '8.74 CGPA',
  email: 'neelapalasrinu02@gmail.com',
  phone: '9160842823',
  phoneFormatted: '+91 9160842823',
  location: 'Rajahmundry, Andhra Pradesh, India',
  summary:
    'Software developer and Computer Science Engineering student at Pragati University, expected to graduate in 2029, with an 8.74 CGPA. Building practical skills in Python, JavaScript, C++, Java, and web technologies. Interested in software development and problem-solving. Current projects include VERIMEDIA, a media-investigation project focused on potentially manipulated or misused image, video, and audio content, and a Student Grade Sheet Management System.',
  languages: [
    { name: 'Telugu', proficiency: 'Fluent', percentage: 100 },
    { name: 'English', proficiency: 'Intermediate', percentage: 75 },
  ],
  socials: {
    email: 'mailto:neelapalasrinu02@gmail.com',
    phone: 'tel:+919160842823',
    github: 'https://github.com/25A31A05FW',
    linkedin: 'https://www.linkedin.com/in/neelapala-satya-sudheer-161863396/',
  },
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: 'Currently studying | Expected graduation: 2029',
    degree: 'B.Tech / B.E. in Computer Science Engineering',
    institution: 'Pragati University',
    location: 'Andhra Pradesh, India',
    grade: '8.74 CGPA',
    highlights: [
      'Maintaining strong academic performance with an 8.74 CGPA',
      'Core focus on Computer Science principles, Data Structures, OOP, and software systems',
      'Actively developing practical projects in C++, Python, JavaScript, and web technologies',
    ],
  },
  {
    period: '2023',
    degree: 'Intermediate (State Board)',
    institution: 'SASI Junior College',
    location: 'Andhra Pradesh, India',
    grade: '980 / 1000',
    highlights: [
      'Graduated with distinction scoring 980 out of 1000 marks',
      'Mathematics, Physics, and Chemistry (MPC) specialization',
      'Solid mathematical and analytical foundation for engineering',
    ],
  },
  {
    period: '2023',
    degree: 'Class 10 (Secondary School)',
    institution: 'Ravindra Bharathi High School',
    location: 'Andhra Pradesh, India',
    grade: '523 Marks',
    highlights: [
      'Completed secondary education with 523 marks',
      'Strong academic discipline and foundational science competencies',
    ],
  },
];

export const SKILLS_LIST: Skill[] = [
  {
    name: 'Python',
    category: 'Programming',
    level: 'Beginner',
    description: 'Foundational scripting, data processing logic, and problem-solving.',
    iconName: 'python',
  },
  {
    name: 'JavaScript',
    category: 'Programming',
    level: 'Beginner',
    description: 'DOM interaction, asynchronous requests, and web application logic.',
    iconName: 'javascript',
  },
  {
    name: 'C++',
    category: 'Programming',
    level: 'Beginner',
    description: 'Object-oriented programming, data structures, and management software systems.',
    iconName: 'cpp',
  },
  {
    name: 'Java',
    category: 'Programming',
    level: 'Beginner',
    description: 'Object-oriented software concepts, class hierarchies, and modular structure.',
    iconName: 'java',
  },
  {
    name: 'HTML',
    category: 'Web & Tools',
    level: 'Practicing',
    description: 'Semantic markup, accessible web structure, and responsive UI elements.',
    iconName: 'html',
  },
  {
    name: 'Git & GitHub',
    category: 'Web & Tools',
    level: 'Active',
    description: 'Version control workflows, commit history, repository management, and collaboration.',
    iconName: 'git',
  },
  {
    name: 'Problem-solving',
    category: 'Core Competencies',
    level: 'Active Practice',
    description: 'Algorithmic decomposition, logic structuring, debugging, and computational thinking.',
    iconName: 'problem-solving',
  },
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    period: '2026',
    role: 'Regional Finalist & Team Member — VERIMEDIA AI',
    organization: 'IBM SkillsBuild & SkillUp Hackathon',
    type: 'Regional Hackathon Finale',
    description:
      'Participated in the IBM SkillsBuild Regional Hackathon finale with project VERIMEDIA, focused on media authenticity.',
    bullets: [
      'Built a media-investigation project targeting manipulated or misused image, video, and audio assets.',
      'Contributed as a team member utilizing React, TypeScript, Express, and SQLite.',
      'Awarded Certificate of Excellence as Regional Finalist by SkillUp in collaboration with IBM SkillsBuild.',
    ],
  },
  {
    period: 'Currently Studying (Expected 2029)',
    role: 'B.Tech Computer Science Engineering Student',
    organization: 'Pragati University',
    type: 'Academic & Practical Labs',
    description:
      'Actively studying Computer Science Engineering with consistent academic excellence (8.74 CGPA).',
    bullets: [
      'Constructing practical competencies across Python, JavaScript, C++, Java, and web technologies.',
      'Applying structured object-oriented programming methodologies to software labs and course modules.',
      'Maintaining strong problem-solving fundamentals through systematic coursework.',
    ],
  },
  {
    period: 'Completed',
    role: 'Software Developer — Student Grade Sheet Management System',
    organization: 'Academic Project Engineering',
    type: 'Software Application',
    description:
      'Designed and completed a centralized student information and performance management software in C++.',
    bullets: [
      'Implemented modules for organizing student records, attendance, and exam result calculations.',
      'Engineered a structured command-line data workflow for seamless record retrieval.',
      'Validated input handling and data consistency using robust C++ code structures.',
    ],
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'verimedia',
    title: 'VERIMEDIA',
    subtitle: 'In progress | Team member — Media Investigation Platform',
    status: 'In progress',
    role: 'Team Member',
    description:
      'Media-investigation project focused on potentially manipulated or misused image, video, and audio content. Attended the IBM SkillsBuild Regional Hackathon finale with the project.',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite'],
    features: [
      'Media investigation pipeline for image, video, and audio manipulation diagnostics',
      'Engineered with React frontend, TypeScript logic, and Express server',
      'SQLite database integration for record keeping and analysis metrics',
      'Regional Finalist achievement at IBM SkillsBuild / SkillUp Hackathon 2026',
    ],
    achievementBadge: 'IBM SkillsBuild Regional Hackathon Finalist',
    liveDemoAvailable: true,
    repoAvailable: true,
    repoUrl: 'https://github.com/25A31A05FW',
  },
  {
    id: 'student-management',
    title: 'Student Grade Sheet Management System',
    subtitle: 'Completed — Student Management System',
    status: 'Completed',
    description:
      'Student-record management application for organizing student information such as attendance, academic performance, and examination results in a centralized system.',
    technologies: ['C++', 'Data Structures', 'File Handling', 'CLI'],
    features: [
      'Centralized student database for attendance tracking and academic records',
      'Automated grade calculation and examination performance reporting',
      'Console-based intuitive administration interface with validation',
      'Persistent data structures designed in structured C++',
    ],
    achievementBadge: 'Completed C++ Management System',
    liveDemoAvailable: true,
    repoAvailable: true,
    repoUrl: 'https://github.com/25A31A05FW',
  },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: 'Certificate of Excellence — SkillUp Hackathon 2026',
    category: 'Regional Hackathon Finale',
    issuer: 'SkillUp in collaboration with IBM SkillsBuild',
    date: '2026',
    description:
      'Recognized as Regional Finalist with Team VERIMEDIA AI for engineering an innovative media-investigation project targeting manipulated media content.',
    credentialBadge: 'Regional Finalist',
  },
  {
    title: 'Master the Art of Prompting',
    category: 'Prompt Engineering & AI',
    issuer: 'IBM SkillsBuild / 1M1B',
    date: '06 Oct 2026',
    description:
      'Certified in structured prompting paradigms, effective AI interaction design, and generative AI workflow orchestration.',
    credentialBadge: 'Certified',
  },
  {
    title: 'Introduction to Generative AI and Agents',
    category: 'Generative AI & Agent Architectures',
    issuer: 'Microsoft',
    date: '24 Aug 2026',
    description:
      'Certified completion covering principles of generative AI models, agentic workflows, prompt evaluation, and ethical AI deployment.',
    credentialBadge: 'Certified',
  },
  {
    title: 'AI Skills Passport',
    category: 'AI Literacy & Professional Competence',
    issuer: 'EY and Microsoft',
    date: 'Certified',
    description:
      'Certificate of Completion validating essential enterprise artificial intelligence skills, digital ethics, and technology readiness.',
    credentialBadge: 'Certificate of Completion',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    title: 'Web Development',
    description:
      'Constructing responsive web applications utilizing React, TypeScript, HTML, and Express backend services.',
    icon: 'layout',
    technologies: ['React', 'TypeScript', 'HTML', 'Express'],
  },
  {
    title: 'Software Development',
    description:
      'Building structured, modular applications with clean object-oriented logic in C++, Python, and Java.',
    icon: 'code',
    technologies: ['C++', 'Python', 'Java', 'SQLite'],
  },
  {
    title: 'C++ Systems & Record Tools',
    description:
      'Developing desktop and console management systems, such as student record, grade sheet, and attendance managers.',
    icon: 'cpu',
    technologies: ['C++', 'Algorithms', 'Data Management', 'CLI'],
  },
  {
    title: 'Media Investigation Tech',
    description:
      'Implementing detection and verification workflows for potentially manipulated image, audio, and video content.',
    icon: 'shield-check',
    technologies: ['VERIMEDIA AI', 'React', 'Express', 'Analysis'],
  },
  {
    title: 'Problem-Solving & Algorithms',
    description:
      'Decomposing computational requirements into clear, efficient programming logic with disciplined debugging.',
    icon: 'terminal',
    technologies: ['Problem-solving', 'Logic', 'Git', 'GitHub'],
  },
];
