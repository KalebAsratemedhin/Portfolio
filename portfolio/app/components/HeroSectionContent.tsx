'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import WobblyImage from './WobblyImage';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

export default function HeroSectionContent() {
  return (
    <motion.div
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-texture page-container"
      initial={false}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/5 via-transparent to-warm-tan/5 pointer-events-none z-0" />
      <div
        className="absolute inset-0 opacity-30 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] pointer-events-none z-0" />
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <div className="absolute inset-0 bg-bgSecondary/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 space-y-8 text-center md:text-left"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-4">
              <motion.p
                className="text-textSecondary text-sm md:text-base font-light uppercase tracking-widest"
                variants={item}
              >
                Full-Stack Developer
              </motion.p>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight"
                variants={item}
              >
                <span className="block">Kaleb</span>
                <span className="block text-textSecondary">Asratemedhin</span>
              </motion.h1>
            </div>
            <motion.p
              className="text-textSecondary text-lg md:text-xl max-w-2xl font-light leading-relaxed"
              variants={item}
            >
              Building exceptional digital experiences through clean code and thoughtful design.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4 pt-8"
              variants={item}
            >
              <motion.button
                onClick={() => scrollToSection('portfolio')}
                className="btn-minimal flex items-center gap-2 group"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </motion.button>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/KalebAsratemedhin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-colors duration-300"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-colors duration-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-warm-brown/20 rounded-2xl md:rounded-3xl blur-2xl -z-10"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <WobblyImage imageUrl="/profile-2.png" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
