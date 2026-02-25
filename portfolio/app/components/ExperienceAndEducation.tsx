'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { getWorkExperiences, getEducations } from '../lib/experiences';
import type { Experience } from '../types/experience';

const workItems = getWorkExperiences();
const educationItems = getEducations();

const easeOutExpo = [0.16, 1, 0.3, 1] as const;
const spring = { type: 'spring' as const, stiffness: 380, damping: 28 };

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

function formatPeriod(from: string, to: string | null) {
  const fromF = formatDate(from);
  const toF = to ? formatDate(to) : 'Now';
  return { from: fromF, to: toF, isCurrent: !to };
}

function getDurationMonths(from: string, to: string | null) {
  const start = new Date(from).getTime();
  const end = to ? new Date(to).getTime() : Date.now();
  return Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24 * 30)));
}

const MAX_DURATION_MONTHS = 60;

const TILT_STRENGTH = 18;

function WorkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: easeOutExpo },
  }),
};

const barVariants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: { delay: i * 0.1 + 0.25, duration: 0.8, ease: easeOutExpo },
  }),
};

function ExperienceCard({
  item,
  index,
  variant,
  isFeatured,
  durationMonths,
  idAttr,
}: {
  item: Experience;
  index: number;
  variant: 'work' | 'education';
  isFeatured: boolean;
  durationMonths: number;
  idAttr?: string;
}) {
  const { from, to, isCurrent } = formatPeriod(item.from, item.to ?? null);
  const location = [item.city, item.country].filter(Boolean).join(', ') || null;
  const isWork = variant === 'work';
  const barWidth = Math.min(100, (durationMonths / MAX_DURATION_MONTHS) * 100);
  const startYear = new Date(item.from).getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0.5, y: 0.5 });

  const tiltX = (mousePosition.y - 0.5) * TILT_STRENGTH;
  const tiltY = (mousePosition.x - 0.5) * -TILT_STRENGTH;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      id={idAttr}
      className="scroll-mt-24"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className={`group relative rounded-2xl overflow-visible p-6 md:p-6 ${
          isFeatured ? 'md:rounded-3xl' : ''
        }`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { handleMouseLeave(); setIsHovered(false); }}
        onMouseEnter={() => setIsHovered(true)}
        animate={{
          rotateX: tiltX,
          rotateY: tiltY,
          y: 0,
          scale: 1,
          transition: { type: 'spring', stiffness: 260, damping: 22 },
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
          transition: spring,
          boxShadow: isWork
            ? '0 40px 80px -16px rgba(0,0,0,0.18), 0 0 0 1px rgba(125,90,58,0.25)'
            : '0 40px 80px -16px rgba(0,0,0,0.18), 0 0 0 1px rgba(154,115,82,0.25)',
        }}
        whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          background: 'var(--bg-primary)',
          boxShadow: '0 8px 32px -8px rgba(0,0,0,0.08)',
        }}
      >
        {/* Hover gradient border */}
        <div
          className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            isFeatured ? 'md:rounded-3xl' : ''
          }`}
          style={{
            background: isWork
              ? 'linear-gradient(135deg, var(--accent), var(--warm-tan), var(--accent))'
              : 'linear-gradient(135deg, var(--warm-brown), var(--warm-tan), var(--warm-brown))',
            filter: 'blur(1px)',
          }}
          aria-hidden
        />
        <div
          className={`absolute inset-[1px] rounded-2xl bg-bgPrimary backdrop-blur-sm ${
            isFeatured ? 'md:rounded-[22px]' : ''
          }`}
        />

        {/* Shine sweep on hover */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" aria-hidden>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent w-1/2"
            animate={{ x: isHovered ? '200%' : '-100%' }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <motion.span
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                isWork ? 'bg-accent/15 text-accent' : 'bg-warm-brown/15 text-warm-brown'
              }`}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={spring}
            >
              {isWork ? <WorkIcon /> : <EducationIcon />}
              {isWork ? 'Work' : 'Education'}
            </motion.span>
            {isCurrent && (
              <motion.span
                className="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-textPrimary/10 text-textPrimary border border-border/60"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 400 }}
              >
                Current
              </motion.span>
            )}
          </div>

          <motion.span
            className={`absolute -top-2 right-2 text-6xl md:text-7xl font-black tracking-tighter select-none ${
              isWork ? 'text-accent' : 'text-warm-brown'
            }`}
            style={{ opacity: 0.08 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
          >
            {startYear}
          </motion.span>

          <p className="text-xs font-semibold text-textTertiary tabular-nums mb-2 pl-1">
            {from} → {to}
          </p>
          <div className="h-1.5 w-full rounded-full bg-border/40 overflow-hidden mb-4 origin-left pl-1">
            <motion.div
              className={`h-full rounded-full ${isWork ? 'bg-gradient-to-r from-accent to-warm-tan' : 'bg-gradient-to-r from-warm-brown to-warm-tan'}`}
              style={{ width: `${barWidth}%` }}
              custom={index}
              variants={barVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
          <h3 className={`font-semibold text-textPrimary leading-tight tracking-tight mb-1 pl-1 ${isFeatured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
            {item.title}
          </h3>
          <p className="text-textSecondary text-sm font-medium mb-1 pl-1">
            {item.company_name}
          </p>
          {location && (
            <p className="text-textTertiary text-xs font-light mb-3 pl-1">
              {location}
            </p>
          )}
          <p className="text-textSecondary text-sm leading-relaxed font-light pl-1">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function ExperienceAndEducation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.15,
    margin: '0px 0px -15% 0px',
  });
  const experienceInView = useInView(experienceRef, {
    once: false,
    amount: 0.2,
    margin: '0px 0px -20% 0px',
  });
  const educationInView = useInView(educationRef, {
    once: false,
    amount: 0.2,
    margin: '0px 0px -20% 0px',
  });

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-bgPrimary bg-texture" />

      <motion.span
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[min(28vw,320px)] font-black tracking-tighter text-textPrimary"
        style={{ opacity: 0.03 }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 0.8 }}
      >
        02
      </motion.span>

      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
        animate={{ x: [0, 24, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-warm-brown/10 blur-3xl pointer-events-none"
        animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="text-center mb-20 md:mb-24 relative"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <motion.span
            className="text-textTertiary text-[10px] font-black uppercase tracking-[0.3em]"
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={isInView ? { letterSpacing: '0.3em', opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Experience & Education
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-3 text-textPrimary"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            Where I build & learn
          </motion.h2>
          <motion.p
            className="text-textSecondary text-sm md:text-base font-light max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Work and education.
          </motion.p>
          <motion.div
            className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-accent/60 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />
        </motion.header>

        {/* Row 1: Professional Experience - slides in from LEFT */}
        <motion.section
          ref={experienceRef}
          id="experience"
          className="scroll-mt-24 mb-24 md:mb-32"
          initial={{ opacity: 0, x: -80 }}
          animate={experienceInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
          transition={{ duration: 0.85, ease: easeOutExpo }}
        >
          <motion.h3
            className="text-[11px] font-black uppercase tracking-[0.25em] text-accent mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -40 }}
            animate={experienceInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full" />
            Professional Experience
          </motion.h3>
          {workItems.length === 0 ? (
            <p className="text-textSecondary text-sm font-light">No work experience listed.</p>
          ) : (
            <motion.div
              className="space-y-6"
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
              initial="hidden"
              animate={experienceInView ? 'visible' : 'hidden'}
            >
              {workItems.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  variant="work"
                  isFeatured={index === 0}
                  durationMonths={getDurationMonths(item.from, item.to ?? null)}
                  idAttr={index === 0 ? 'experience' : undefined}
                />
              ))}
            </motion.div>
          )}
        </motion.section>

        {/* Row 2: Education - slides in from RIGHT */}
        <motion.section
          ref={educationRef}
          id="education"
          className="scroll-mt-24"
          initial={{ opacity: 0, x: 80 }}
          animate={educationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
          transition={{ duration: 0.85, ease: easeOutExpo }}
        >
          <motion.h3
            className="text-[11px] font-black uppercase tracking-[0.25em] text-warm-brown mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: 40 }}
            animate={educationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <span className="w-12 h-0.5 bg-gradient-to-r from-warm-brown to-transparent rounded-full" />
            Education
          </motion.h3>
          {educationItems.length === 0 ? (
            <p className="text-textSecondary text-sm font-light">No education listed.</p>
          ) : (
            <motion.div
              className="space-y-6"
              variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
              initial="hidden"
              animate={educationInView ? 'visible' : 'hidden'}
            >
              {educationItems.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  variant="education"
                  isFeatured={index === 0}
                  durationMonths={getDurationMonths(item.from, item.to ?? null)}
                  idAttr={index === 0 ? 'education' : undefined}
                />
              ))}
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
}
