import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#80FFDB] text-[#0B132B] hover:bg-[#5EEAD4] flex items-center justify-center shadow-[0_8px_25px_rgba(128,255,219,0.4)] hover:shadow-[0_12px_30px_rgba(128,255,219,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 animate-in fade-in slide-in-from-bottom-4 focus:outline-none focus:ring-2 focus:ring-[#80FFDB]"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-6 h-6 stroke-[2.5]" />
    </button>
  );
};
