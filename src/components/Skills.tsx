import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS_LIST, Skill } from '../data/portfolioData';
import { PythonIcon, JavaScriptIcon, CppIcon, JavaIcon, HTMLIcon, GitIcon, ProblemSolvingIcon } from './illustrations/TechIcons';
import { Sparkles, Code } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(SKILLS_LIST[0]);

  const categories = ['All', 'Programming', 'Web & Tools', 'Core Competencies'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_LIST
    : SKILLS_LIST.filter((s) => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
        return <PythonIcon className="w-14 h-14" />;
      case 'javascript':
        return <JavaScriptIcon className="w-14 h-14" />;
      case 'cpp':
        return <CppIcon className="w-14 h-14" />;
      case 'java':
        return <JavaIcon className="w-14 h-14" />;
      case 'html':
        return <HTMLIcon className="w-14 h-14" />;
      case 'git':
        return <GitIcon className="w-14 h-14" />;
      case 'problem-solving':
        return <ProblemSolvingIcon className="w-14 h-14" />;
      default:
        return <Code className="w-14 h-14 text-[#80FFDB]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Centered Mint Ice "Skills" Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
            Technical Competence
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
            Skills
          </h2>
          <p className="text-sm sm:text-base text-[#B8C7D9]">
            Programming languages, web technologies, and problem-solving tools extracted directly from resume.
          </p>

          {/* Category Tabs for intuitive navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#80FFDB] text-[#0B132B] font-bold shadow-md'
                    : 'bg-[#1C2541] text-[#B8C7D9] hover:text-[#F1FAF9] hover:bg-[#1E294B] border border-[#344563]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technical Skill Tiles Grid with Mint-Tinted Glow Shadow */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-5"
        >
          {filteredSkills.map((skill, index) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedSkill(skill)}
                className={`relative p-5 rounded-2xl bg-[#1C2541] border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group ${
                  isSelected
                    ? 'border-[#80FFDB] shadow-[0_8px_30px_rgba(128,255,219,0.3)] -translate-y-1.5 bg-[#101935]'
                    : 'border-[#344563] hover:border-[#80FFDB]/60 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(128,255,219,0.18)]'
                }`}
              >
                {/* Icon Container */}
                <div className="mb-3 transform group-hover:scale-110 transition-transform duration-200">
                  {renderIcon(skill.iconName)}
                </div>

                {/* Short Label Under Each Icon */}
                <h3 className="text-sm sm:text-base font-bold text-[#F1FAF9] tracking-wide group-hover:text-[#80FFDB] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono text-[#80FFDB] mt-1 font-semibold">
                  {skill.level}
                </span>

                {/* Subtle active indicator dot */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#80FFDB]" />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Skill Detail Banner */}
        {selectedSkill && (
          <div className="mt-10 p-6 rounded-2xl bg-[#1C2541] border border-[#80FFDB]/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#0B132B] border border-[#344563] shrink-0">
                {renderIcon(selectedSkill.iconName)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-[#F1FAF9]">{selectedSkill.name}</h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#80FFDB] text-[#0B132B] font-bold font-mono">
                    {selectedSkill.category}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#0B132B] text-[#80FFDB] border border-[#344563] font-mono">
                    {selectedSkill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C7D9] mt-1 max-w-2xl">
                  {selectedSkill.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-[#80FFDB]">
              <Sparkles className="w-4 h-4" />
              <span>Verified in Curriculum &amp; Projects</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
