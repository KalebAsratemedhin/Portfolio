'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { getWorkExperiences, getEducations } from '../lib/experiences';
import type { DescriptionPoint, Experience } from '../types/experience';

function descriptionToParagraphs(points: DescriptionPoint[]): string[] {
  return points.map((point) => {
    if (typeof point === 'string') return point;
    if (point.children && point.children.length > 0) {
      return `${point.text} ${point.children.join(' ')}`;
    }
    return point.text;
  });
}

function DescriptionParagraphs({ points }: { points: DescriptionPoint[] }) {
  const paragraphs = descriptionToParagraphs(points);
  return (
    <div className="space-y-3 text-textSecondary text-sm leading-relaxed font-light pl-1">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

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
  hidden: (i: number) => ({
    opacity: 0,
    y: 72,
    x: i % 2 === 0 ? -56 : 56,
    scale: 0.88,
    rotateZ: i % 2 === 0 ? -4 : 4,
    filter: 'blur(14px)',
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotateZ: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 16,
      mass: 0.85,
      opacity: { duration: 0.45, ease: easeOutExpo },
      filter: { duration: 0.55, ease: easeOutExpo },
    },
  },
};

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.35, duration: 0.85, ease: easeOutExpo },
  },
};

function ExperienceCard({
  item,
  index,
  variant,
  isFeatured,
  durationMonths,
  sectionInView,
}: {
  item: Experience;
  index: number;
  variant: 'work' | 'education';
  isFeatured: boolean;
  durationMonths: number;
  sectionInView: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const cardInView = useInView(ref, { amount: 0.35 });
  // Latch: play once per section visit; reset when the section leaves
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!sectionInView) {
      setRevealed(false);
      return;
    }
    if (cardInView) {
      setRevealed(true);
    }
  }, [sectionInView, cardInView]);

  const { from, to, isCurrent } = formatPeriod(item.from, item.to ?? null);
  const location = [item.city, item.country].filter(Boolean).join(', ') || null;
  const isWork = variant === 'work';
  const barWidth = Math.min(100, (durationMonths / MAX_DURATION_MONTHS) * 100);
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
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={revealed ? 'visible' : 'hidden'}
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
        {/* Accent border — visible at rest, stronger on hover */}
        <div
          className={`absolute -inset-px rounded-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
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
                animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.25, type: 'spring', stiffness: 400 }}
              >
                Current
              </motion.span>
            )}
          </div>

          <p className="text-xs font-semibold text-textTertiary tabular-nums mb-2 pl-1">
            {from} → {to}
          </p>
          <div className="h-1.5 w-full rounded-full bg-border/40 overflow-hidden mb-4 origin-left pl-1">
            <motion.div
              className={`h-full rounded-full ${isWork ? 'bg-gradient-to-r from-accent to-warm-tan' : 'bg-gradient-to-r from-warm-brown to-warm-tan'}`}
              style={{ width: `${barWidth}%` }}
              variants={barVariants}
              initial="hidden"
              animate={revealed ? 'visible' : 'hidden'}
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
          <DescriptionParagraphs points={item.description} />
        </div>
      </motion.div>
    </motion.article>
  );
}

function SectionHeader({
  label,
  title,
  inView,
  accentClass,
  barClass,
}: {
  label: string;
  title: string;
  inView: boolean;
  accentClass: string;
  barClass: string;
}) {
  return (
    <motion.header
      className="mb-10 md:mb-12"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: easeOutExpo }}
    >
      <motion.span
        className={`text-[10px] font-black uppercase tracking-[0.3em] ${accentClass}`}
        initial={{ letterSpacing: '0.5em', opacity: 0 }}
        animate={inView ? { letterSpacing: '0.3em', opacity: 1 } : {}}
        transition={{ delay: 0.15, duration: 0.6 }}
      >
        {label}
      </motion.span>
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4 text-textPrimary"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className={`h-px w-24 rounded-full ${barClass}`}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.header>
  );
}

export default function ExperienceAndEducation() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  // "some" keeps the section active while any part is on screen (avoids mid-scroll resets)
  const experienceInView = useInView(experienceRef, { amount: 'some' });
  const educationInView = useInView(educationRef, { amount: 'some' });

  return (
    <>
      {/* Professional Experience */}
      <div
        ref={experienceRef}
        id="experience"
        className="relative w-full py-28 md:py-36 overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-bgPrimary bg-texture" />

        <motion.span
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[min(28vw,320px)] font-black tracking-tighter text-textPrimary"
          style={{ opacity: 0.03 }}
          initial={{ opacity: 0 }}
          animate={experienceInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 0.8 }}
        >
          02
        </motion.span>

        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none"
          animate={{ x: [0, 24, 0], y: [0, -20, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="02. Experience"
            title="Professional Experience"
            inView={experienceInView}
            accentClass="text-accent"
            barClass="bg-gradient-to-r from-accent/60 to-transparent"
          />

          {workItems.length === 0 ? (
            <p className="text-textSecondary text-sm font-light">No work experience listed.</p>
          ) : (
            <div className="space-y-6">
              {workItems.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  variant="work"
                  isFeatured={index === 0}
                  durationMonths={getDurationMonths(item.from, item.to ?? null)}
                  sectionInView={experienceInView}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Education */}
      <div
        ref={educationRef}
        id="education"
        className="relative w-full py-28 md:py-36 overflow-hidden scroll-mt-24"
      >
        <div className="absolute inset-0 bg-bgPrimary bg-texture" />

        <motion.span
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[min(28vw,320px)] font-black tracking-tighter text-textPrimary"
          style={{ opacity: 0.03 }}
          initial={{ opacity: 0 }}
          animate={educationInView ? { opacity: 0.03 } : {}}
          transition={{ duration: 0.8 }}
        >
          03
        </motion.span>

        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-warm-brown/10 blur-3xl pointer-events-none"
          animate={{ x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="03. Education"
            title="Education"
            inView={educationInView}
            accentClass="text-warm-brown"
            barClass="bg-gradient-to-r from-warm-brown/60 to-transparent"
          />

          {educationItems.length === 0 ? (
            <p className="text-textSecondary text-sm font-light">No education listed.</p>
          ) : (
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  index={index}
                  variant="education"
                  isFeatured={index === 0}
                  durationMonths={getDurationMonths(item.from, item.to ?? null)}
                  sectionInView={educationInView}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
