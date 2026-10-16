import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, Code2, Briefcase, Award, Sparkles, Mail, User, Home, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Sparkles },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Services', href: '#services', icon: Sparkles },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation support: Close drawer on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Upper-right Hamburger Menu Button */}
      <div className={`fixed top-6 right-6 z-40 transition-all duration-300 ${scrolled ? 'scale-95' : 'scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1C2541]/90 hover:bg-[#80FFDB] text-[#F1FAF9] hover:text-[#0B132B] border border-[#344563] hover:border-[#80FFDB] shadow-lg backdrop-blur-md transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
          aria-label="Open Navigation Menu"
        >
          <Menu className="w-6 h-6 transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Slide-out Navigation Drawer & Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md bg-[#0B132B] border-l border-[#344563] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#344563]">
                <div>
                  <span className="font-signature text-3xl text-[#80FFDB] font-bold">
                    Sudheer
                  </span>
                  <p className="text-xs text-[#B8C7D9] uppercase tracking-wider mt-0.5">
                    Portfolio Navigation
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-[#1C2541] text-[#B8C7D9] hover:text-[#0B132B] hover:bg-[#80FFDB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollTo(item.href)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-all duration-150 group ${
                        isActive
                          ? 'bg-[#80FFDB] text-[#0B132B] font-semibold shadow-md'
                          : 'text-[#F1FAF9] hover:bg-[#1C2541] hover:text-[#80FFDB]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${isActive ? 'text-[#0B132B]' : 'text-[#80FFDB]'}`} />
                        <span className="text-base tracking-wide">{item.name}</span>
                      </div>
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          isActive ? 'text-[#0B132B]' : 'text-[#B8C7D9]'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="pt-6 border-t border-[#344563] space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1C2541] hover:bg-[#80FFDB] text-[#F1FAF9] hover:text-[#0B132B] border border-[#344563] hover:border-[#80FFDB] rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-[#80FFDB] group-hover:text-[#0B132B]" />
                <span>Download Resume (CV)</span>
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-[#B8C7D9]">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-[11px] text-[#80FFDB] mt-1 font-mono">
                  Pragati University CSE • 8.74 CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
