import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_LIST } from '../data/portfolioData';
import { Code, Layout, Cpu, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-8 h-8 text-[#80FFDB]" />;
      case 'layout':
        return <Layout className="w-8 h-8 text-[#80FFDB]" />;
      case 'cpu':
        return <Cpu className="w-8 h-8 text-[#80FFDB]" />;
      case 'shield-check':
        return <ShieldCheck className="w-8 h-8 text-[#80FFDB]" />;
      case 'terminal':
        return <Terminal className="w-8 h-8 text-[#80FFDB]" />;
      default:
        return <Layers className="w-8 h-8 text-[#80FFDB]" />;
    }
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#0B132B] text-[#F1FAF9]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Center Large Mint Ice "Services" Heading & Short Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs uppercase font-mono tracking-widest text-[#80FFDB] font-semibold">
            Capabilities &amp; Focus
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#80FFDB] tracking-tight">
            Services
          </h2>
          <p className="text-sm sm:text-base text-[#B8C7D9]">
            Applied software development capabilities grounded in Python, JavaScript, C++, Java, and media investigation.
          </p>
        </motion.div>

        {/* Evenly Spaced Cards in One Horizontal Row on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {SERVICES_LIST.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-[#1C2541] hover:bg-[#101935] border-2 border-[#344563] hover:border-[#80FFDB] shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_18px_40px_rgba(128,255,219,0.18)] transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Icon in Dark Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#0B132B] border border-[#344563] group-hover:border-[#80FFDB] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-200">
                {getServiceIcon(service.icon)}
              </div>

              {/* Short Centered Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#F1FAF9] tracking-tight leading-snug group-hover:text-[#80FFDB] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#B8C7D9] font-normal leading-relaxed mt-3">
                {service.description}
              </p>

              {/* Mini tech badges */}
              <div className="flex flex-wrap justify-center gap-1 mt-4 pt-4 border-t border-[#344563] w-full">
                {service.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[10px] font-bold bg-[#0B132B] text-[#80FFDB] border border-[#344563] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
