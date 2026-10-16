import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';
import { VerimediaDemoModal } from './components/VerimediaDemoModal';

// Subtle, professional fade-in-up animation variants
const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [verimediaDemoOpen, setVerimediaDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B132B] text-[#F1FAF9] selection:bg-[#80FFDB] selection:text-[#0B132B] relative">
      {/* Upper-Right Hamburger Navigation Menu and Drawer */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections with Framer Motion scroll reveal wrappers */}
      <main>
        {/* SECTION 1: HERO / HOME (Split-Screen Hero with Overlapping Circular Avatar) */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* SECTION 2: ABOUT / WHO I AM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <About />
        </motion.div>

        {/* SECTION 3: EDUCATION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Education />
        </motion.div>

        {/* SECTION 4: SKILLS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Skills />
        </motion.div>

        {/* SECTION 5: EXPERIENCE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Experience />
        </motion.div>

        {/* SECTION 6: PROJECTS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Projects onOpenVerimediaDemo={() => setVerimediaDemoOpen(true)} />
        </motion.div>

        {/* SECTION 7: ACHIEVEMENTS & CERTIFICATIONS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Achievements />
        </motion.div>

        {/* SECTION 8: SERVICES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Services />
        </motion.div>

        {/* SECTION 9: CONTACT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUpVariants}
        >
          <Contact />
        </motion.div>
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING BACK TO TOP BUTTON */}
      <BackToTop />

      {/* RESUME / CV MODAL & DOWNLOAD CONTROLS */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* VERIMEDIA LIVE VERIFICATION DEMO MODAL */}
      <VerimediaDemoModal
        isOpen={verimediaDemoOpen}
        onClose={() => setVerimediaDemoOpen(false)}
      />
    </div>
  );
}
