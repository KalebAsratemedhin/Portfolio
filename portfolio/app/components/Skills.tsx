'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../data/portfolio';

const easeOutExpo = [0.16, 1, 0.3, 1];
const spring = { type: 'spring' as const, stiffness: 400, damping: 28 };

const skillCategories: { key: keyof typeof skillsData; label: string; color: 'accent' | 'warm-brown' | 'warm-tan' }[] = [
  { key: 'programmingLanguages', label: 'Programming Languages', color: 'accent' },
  { key: 'librariesAndFrameworks', label: 'Libraries & Frameworks', color: 'warm-brown' },
  { key: 'databases', label: 'Databases', color: 'warm-tan' },
  { key: 'technologiesAndTools', label: 'Technologies & Tools', color: 'accent' },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: easeOutExpo },
  }),
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.025, duration: 0.3, ease: easeOutExpo },
  }),
};

const colorClasses = {
  accent: {
    border: 'border-accent/40 hover:border-accent',
    bg: 'bg-accent/5 hover:bg-accent/10',
    text: 'text-textPrimary hover:text-accent',
  },
  'warm-brown': {
    border: 'border-warm-brown/40 hover:border-warm-brown',
    bg: 'bg-warm-brown/5 hover:bg-warm-brown/10',
    text: 'text-textPrimary hover:text-warm-brown',
  },
  'warm-tan': {
    border: 'border-warm-tan/40 hover:border-warm-tan',
    bg: 'bg-warm-tan/5 hover:bg-warm-tan/10',
    text: 'text-textPrimary hover:text-warm-tan',
  },
};

function SkillPill({
  name,
  index,
  colorKey,
}: {
  name: string;
  index: number;
  colorKey: 'accent' | 'warm-brown' | 'warm-tan';
}) {
  const c = colorClasses[colorKey];
  return (
    <motion.span
      custom={index}
      variants={pillVariants}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border transition-colors duration-300 whitespace-nowrap ${c.border} ${c.bg} ${c.text}`}
      whileHover={{
        scale: 1.06,
        y: -2,
        boxShadow: '0 6px 20px -4px rgba(0,0,0,0.1)',
        transition: spring,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {name}
    </motion.span>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
    margin: '0px 0px -15% 0px',
  });

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-bgPrimary bg-texture" />
      <motion.div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/5 blur-3xl pointer-events-none"
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-warm-brown/5 blur-3xl pointer-events-none"
        animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <span className="text-textTertiary text-[10px] font-bold uppercase tracking-[0.25em]">
            05
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-3 text-textPrimary">
            Skills & Technologies
          </h2>
          <p className="text-textSecondary text-sm md:text-base font-light">
            What I use to build with
          </p>
          <motion.div
            className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />
        </motion.header>

        <motion.div
          className="space-y-10 md:space-y-12"
          variants={{
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0.12 },
            },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map(({ key, label, color }, index) => (
            <motion.section
              key={key}
              custom={index}
              variants={sectionVariants}
              className="relative"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-textSecondary mb-4">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[key].map((skill, i) => (
                  <SkillPill key={skill} name={skill} index={i} colorKey={color} />
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
