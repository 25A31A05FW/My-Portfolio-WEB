import React, { useState } from 'react';
import { Terminal, Shield, Code2, Database, Layers, CheckCircle2 } from 'lucide-react';

export const AboutIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-auto max-w-lg' }) => {
  const [activeTab, setActiveTab] = useState<'verimedia' | 'cpp'>('verimedia');

  return (
    <div className={`relative ${className}`}>
      {/* Subtle Ambient Backing Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#80FFDB]/20 via-[#344563]/20 to-[#80FFDB]/10 blur-xl opacity-75 -z-10" />

      {/* Realistic Developer IDE & System Monitor Window */}
      <div className="rounded-2xl bg-[#1C2541] border border-[#344563] shadow-2xl overflow-hidden font-mono text-xs">
        {/* Window Chrome / Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B132B] border-b border-[#344563]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E06C75]/80" />
            <div className="w-3 h-3 rounded-full bg-[#E5C07B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#98C379]/80" />
            <span className="text-[11px] text-[#B8C7D9] ml-2 font-mono">
              sudheer-dev-environment
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded bg-[#1C2541] text-[10px] text-[#80FFDB] border border-[#344563]">
              Node v20.x • C++20
            </span>
          </div>
        </div>

        {/* Editor File Tabs */}
        <div className="flex items-center bg-[#101935] border-b border-[#344563] text-[11px] overflow-x-auto">
          <button
            onClick={() => setActiveTab('verimedia')}
            className={`flex items-center gap-2 px-4 py-2 border-r border-[#344563] transition-colors ${
              activeTab === 'verimedia'
                ? 'bg-[#1C2541] text-[#80FFDB] border-t-2 border-t-[#80FFDB] font-semibold'
                : 'text-[#B8C7D9] hover:text-[#F1FAF9]'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-[#80FFDB]" />
            <span>verimedia.pipeline.ts</span>
          </button>
          <button
            onClick={() => setActiveTab('cpp')}
            className={`flex items-center gap-2 px-4 py-2 border-r border-[#344563] transition-colors ${
              activeTab === 'cpp'
                ? 'bg-[#1C2541] text-[#80FFDB] border-t-2 border-t-[#80FFDB] font-semibold'
                : 'text-[#B8C7D9] hover:text-[#F1FAF9]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-[#80FFDB]" />
            <span>GradeManagement.cpp</span>
          </button>
        </div>

        {/* Code Content Pane */}
        <div className="p-4 bg-[#0B132B]/90 space-y-1.5 overflow-x-auto min-h-[220px]">
          {activeTab === 'verimedia' ? (
            <>
              <p className="text-[#B8C7D9]/60">// Project: VERIMEDIA (IBM SkillsBuild Hackathon Regional Finalist)</p>
              <p className="text-[#80FFDB]">import <span className="text-[#F1FAF9]">&#123; createHash &#125;</span> from <span className="text-[#98C379]">&apos;crypto&apos;</span>;</p>
              <p className="text-[#80FFDB]">import <span className="text-[#F1FAF9]">&#123; db &#125;</span> from <span className="text-[#98C379]">&apos;./database/sqlite&apos;</span>;</p>
              <p>&nbsp;</p>
              <p><span className="text-[#80FFDB]">export async function</span> <span className="text-[#61AFEF]">verifyMediaPayload</span>(stream: <span className="text-[#E5C07B]">MediaBuffer</span>) &#123;</p>
              <p className="pl-4 text-[#F1FAF9]">const hash = createHash(<span className="text-[#98C379]">&apos;sha256&apos;</span>).update(stream).digest(<span className="text-[#98C379]">&apos;hex&apos;</span>);</p>
              <p className="pl-4 text-[#B8C7D9]">const record = await db.query(<span className="text-[#98C379]">&apos;SELECT * FROM verifications WHERE hash = ?&apos;</span>, [hash]);</p>
              <p className="pl-4 text-[#80FFDB]">return &#123; status: <span className="text-[#98C379]">&apos;AUTHENTIC&apos;</span>, confidence: <span className="text-[#D19A66]">0.984</span>, hash &#125;;</p>
              <p>&#125;</p>
            </>
          ) : (
            <>
              <p className="text-[#B8C7D9]/60">// Project: Student Grade Sheet Management System (Completed C++)</p>
              <p className="text-[#80FFDB]">#include <span className="text-[#98C379]">&lt;iostream&gt;</span></p>
              <p className="text-[#80FFDB]">#include <span className="text-[#98C379]">&lt;vector&gt;</span></p>
              <p>&nbsp;</p>
              <p><span className="text-[#80FFDB]">class</span> <span className="text-[#E5C07B]">StudentRecordManager</span> &#123;</p>
              <p className="pl-4 text-[#80FFDB]">struct <span className="text-[#E5C07B]">StudentRecord</span> &#123; std::string rollNo; double cgpa; int attendance; &#125;;</p>
              <p className="pl-4 text-[#F1FAF9]">std::vector&lt;StudentRecord&gt; registry;</p>
              <p className="pl-4"><span className="text-[#80FFDB]">public:</span> <span className="text-[#61AFEF]">void computePerformanceReport</span>() &#123; /* verified CLI */ &#125;</p>
              <p>&#125;;</p>
            </>
          )}
        </div>

        {/* Mini Status / Diagnostics Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C2541] border-t border-[#344563] text-[11px]">
          <div className="flex items-center gap-2 text-[#80FFDB]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#80FFDB]" />
            <span>Pragati University • 8.74 CGPA</span>
          </div>
          <div className="flex items-center gap-3 text-[#B8C7D9]">
            <span>UTF-8</span>
            <span>TypeScript / C++</span>
          </div>
        </div>
      </div>
    </div>
  );
};
