'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload } from 'react-icons/hi';

const easeOutExpo = [0.16, 1, 0.3, 1];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: '0px 0px -15% 0px',
  });

  return (
    <div
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bgSecondary bg-texture" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-tan/[0.03] to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-warm-brown/8 blur-3xl pointer-events-none"
        animate={{ x: [0, 20, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-warm-tan/8 blur-3xl pointer-events-none"
        animate={{ x: [0, -20, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.header
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <span className="text-textTertiary text-[10px] font-bold uppercase tracking-[0.25em]">
            01
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-3 text-textPrimary">
            About Me
          </h2>
          <p className="text-textSecondary text-sm font-light">
            Who I am and what I do
          </p>
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easeOutExpo }}
          >
            <p className="text-textPrimary text-xl md:text-2xl font-light leading-relaxed tracking-tight">
              Hi. I&apos;m{' '}
              <span className="font-semibold text-accent">Kaleb Asratemedhin</span>, a passionate
              full-stack developer dedicated to creating exceptional software solutions.
            </p>
            <div
              className="w-12 h-0.5 rounded-full bg-gradient-to-r from-warm-brown to-warm-tan"
              aria-hidden
            />
          </motion.div>

          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.25, duration: 0.6, ease: easeOutExpo }}
          >
            <p className="text-textSecondary leading-relaxed text-[15px] md:text-base">
              I am passionate about building excellent software that improves the lives of those
              around me. I specialize in creating software for clients ranging from individuals
              and small-businesses all the way to large enterprise corporations.
            </p>
            <p className="text-textSecondary leading-relaxed text-[15px] md:text-base">
              What would you do if you had a software expert available at your fingertips? I bring
              a unique combination of technical expertise, creative problem-solving, and a
              commitment to delivering solutions that not only meet but exceed expectations.
            </p>
            <motion.a
              href="/Resume-vl.pdf"
              download="Kaleb_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-textPrimary font-medium text-sm hover:bg-textPrimary hover:text-bgPrimary transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiDownload className="w-4 h-4 shrink-0" aria-hidden />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
