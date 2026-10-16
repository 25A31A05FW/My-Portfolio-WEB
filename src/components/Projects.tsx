import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_LIST, ProjectItem } from '../data/portfolioData';
import { Play, Code, ArrowRight, ShieldCheck, Terminal, FileCode, X, Award, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onOpenVerimediaDemo: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenVerimediaDemo }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [showCodeModal, setShowCodeModal] = useState<ProjectItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayProjects = showAll ? PROJECTS_LIST : PROJECTS_LIST;

  const handlePreviewClick = (project: ProjectItem) => {
    if (project.id === 'verimedia') {
      onOpenVerimediaDemo();
    } else {
      setSelectedProject(project);
    }
  };

  const handleCodeClick = (project: ProjectItem) => {
    setShowCodeModal(project);
  };

  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Centered Bold Mint Ice "Projects" Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
            Featured Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#B8C7D9]">
            Active software engineering projects from resume: media investigation with VERIMEDIA and C++ student management systems.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {displayProjects.map((project, pIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: pIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#1C2541] border-2 border-[#344563] hover:border-[#80FFDB] shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(128,255,219,0.18)] transition-all duration-300 hover:-translate-y-2 group"
            >
              <div>
                {/* Visual Thumbnail / Graphic Header */}
                <div className="w-full h-44 rounded-2xl bg-[#0B132B] border border-[#344563] group-hover:border-[#80FFDB]/40 overflow-hidden mb-6 flex flex-col items-center justify-center p-4 relative transition-colors">
                  {project.id === 'verimedia' ? (
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-[#80FFDB] flex items-center justify-center shadow-lg">
                        <ShieldCheck className="w-8 h-8 text-[#0B132B]" />
                      </div>
                      <span className="text-base font-bold text-[#F1FAF9] tracking-widest font-mono">
                        VERIMEDIA
                      </span>
                      <span className="text-[11px] text-[#80FFDB] font-mono">
                        React • TypeScript • Express • SQLite
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-[#1C2541] border-2 border-[#80FFDB] flex items-center justify-center shadow-lg">
                        <Terminal className="w-8 h-8 text-[#80FFDB]" />
                      </div>
                      <span className="text-base font-bold text-[#F1FAF9] tracking-widest font-mono">
                        STUDENT MANAGEMENT
                      </span>
                      <span className="text-[11px] text-[#80FFDB] font-mono">
                        C++ Centralized Architecture
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#1C2541]/90 border border-[#344563] text-[10px] font-mono font-semibold text-[#80FFDB]">
                    {project.status}
                  </div>
                </div>

                {/* Achievement Badge if present */}
                {project.achievementBadge && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B132B] border border-[#80FFDB]/30 text-xs font-mono text-[#80FFDB] font-semibold mb-3">
                    <Award className="w-3.5 h-3.5 text-[#80FFDB]" />
                    <span>{project.achievementBadge}</span>
                  </div>
                )}

                {/* Bold Frost White Project Title */}
                <h3 className="text-2xl font-black text-[#F1FAF9] tracking-tight leading-tight group-hover:text-[#80FFDB] transition-colors">
                  {project.title}
                </h3>

                {/* Subtitle / Role */}
                <p className="text-xs font-semibold text-[#80FFDB] mt-1 font-mono">
                  {project.subtitle}
                </p>

                {/* Description from resume */}
                <p className="text-xs sm:text-sm text-[#B8C7D9] font-normal leading-relaxed mt-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-bold bg-[#0B132B] text-[#80FFDB] border border-[#344563] rounded-lg shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Icons at Bottom of Card: Preview/Play icon at lower-left, Code icon at lower-right */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#344563]">
                {/* Circular preview/play-style action icon at lower-left */}
                <button
                  onClick={() => handlePreviewClick(project)}
                  className="w-12 h-12 rounded-full bg-[#80FFDB] text-[#0B132B] hover:bg-[#5EEAD4] flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
                  aria-label={`Preview live demo for ${project.title}`}
                  title={project.id === 'verimedia' ? 'Launch Verimedia Live Demo' : 'View Project Details'}
                >
                  <Play className="w-5 h-5 ml-0.5 fill-current text-[#0B132B]" />
                </button>

                {/* Code icon at lower-right */}
                <button
                  onClick={() => handleCodeClick(project)}
                  className="w-12 h-12 rounded-full bg-[#0B132B] text-[#80FFDB] hover:bg-[#80FFDB] hover:text-[#0B132B] border border-[#344563] hover:border-[#80FFDB] flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
                  aria-label={`View code implementation for ${project.title}`}
                  title="Inspect Architecture & Code"
                >
                  <Code className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link button beneath cards */}
        <div className="flex justify-center sm:justify-end items-center mt-12 max-w-5xl mx-auto">
          <a
            href="https://github.com/25A31A05FW"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1C2541] hover:bg-[#80FFDB] text-[#F1FAF9] hover:text-[#0B132B] border border-[#344563] hover:border-[#80FFDB] font-bold text-sm transition-all duration-200 group"
          >
            <span>View GitHub Repositories (25A31A05FW)</span>
            <ExternalLink className="w-4 h-4 text-[#80FFDB] group-hover:text-[#0B132B] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Code Inspector Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#1C2541] border-2 border-[#80FFDB] rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#344563]">
              <div className="flex items-center gap-3">
                <FileCode className="w-6 h-6 text-[#80FFDB]" />
                <div>
                  <h3 className="text-lg font-bold text-[#F1FAF9]">{showCodeModal.title} — Architecture</h3>
                  <p className="text-xs text-[#B8C7D9] font-mono">Technologies: {showCodeModal.technologies.join(', ')}</p>
                </div>
              </div>
              <button
                onClick={() => setShowCodeModal(null)}
                className="p-1 text-[#B8C7D9] hover:text-[#F1FAF9] rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-[#0B132B] p-4 rounded-xl border border-[#344563] font-mono text-xs text-[#B8C7D9] overflow-x-auto space-y-1">
              <span className="text-[#80FFDB]"># {showCodeModal.title} Specifications</span>
              {showCodeModal.id === 'verimedia' ? (
                <>
                  <p className="text-[#F1FAF9]">// React + TypeScript + Express + SQLite pipeline</p>
                  <p className="text-[#80FFDB]">import &#123; Request, Response &#125; from &apos;express&apos;;</p>
                  <p className="text-[#F1FAF9]">export const analyzeMediaContent = async (req: Request, res: Response) =&gt; &#123;</p>
                  <p className="pl-4 text-emerald-400">const mediaFingerprint = await computeIntegritySignature(req.file);</p>
                  <p className="pl-4 text-emerald-400">const forensicsResult = await evaluateManipulationIndicators(mediaFingerprint);</p>
                  <p className="pl-4 text-[#F1FAF9]">return res.json(&#123; verified: forensicsResult.isAuthentic, score: forensicsResult.confidence &#125;);</p>
                  <p className="text-[#F1FAF9]">&#125;;</p>
                </>
              ) : (
                <>
                  <p className="text-[#F1FAF9]">// C++ Student Management System Implementation</p>
                  <p className="text-[#80FFDB]">#include &lt;iostream&gt;</p>
                  <p className="text-[#80FFDB]">#include &lt;vector&gt;</p>
                  <p className="text-[#F1FAF9]">class StudentRecordManager &#123;</p>
                  <p className="pl-4 text-emerald-400">std::vector&lt;StudentRecord&gt; database;</p>
                  <p className="pl-4 text-[#F1FAF9]">public: void calculateGradeSheet(const std::string&amp; rollNumber);</p>
                  <p className="text-[#F1FAF9]">&#125;;</p>
                </>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#80FFDB]">Key Implementation Modules</h4>
              <ul className="space-y-1 text-xs text-[#B8C7D9]">
                {showCodeModal.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#80FFDB]">▸</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-[#344563]">
              <a
                href={showCodeModal.repoUrl || 'https://github.com/25A31A05FW'}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#0B132B] bg-[#80FFDB] hover:bg-[#5EEAD4] rounded-lg transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit GitHub Profile</span>
              </a>
              <button
                onClick={() => setShowCodeModal(null)}
                className="px-4 py-2 text-xs font-semibold text-[#F1FAF9] bg-[#0B132B] hover:bg-[#1E294B] border border-[#344563] rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#1C2541] border-2 border-[#80FFDB] rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#344563]">
              <div>
                <h3 className="text-xl font-bold text-[#F1FAF9]">{selectedProject.title}</h3>
                <span className="text-xs font-mono text-[#80FFDB]">{selectedProject.subtitle}</span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-[#B8C7D9] hover:text-[#F1FAF9]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-[#B8C7D9] leading-relaxed">{selectedProject.description}</p>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold uppercase text-[#80FFDB]">Features:</span>
              <ul className="space-y-1 text-xs text-[#B8C7D9]">
                {selectedProject.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#80FFDB]">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-[#344563]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-semibold text-[#F1FAF9] bg-[#0B132B] border border-[#344563] rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
