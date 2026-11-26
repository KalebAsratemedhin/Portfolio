'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ComponentType } from 'react';
import {
  SiAngular,
  SiCsharp,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGo,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import { skillsData } from '../data/portfolio';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

type IconComponent = ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;

type SkillVisual = {
  name: string;
  Icon?: IconComponent;
  /** Local public asset path when react-icons is unavailable */
  src?: string;
};

const skillVisuals: Record<string, SkillVisual> = {
  TypeScript: { name: 'TypeScript', Icon: SiTypescript },
  Python: { name: 'Python', Icon: SiPython },
  'C#': { name: 'C#', Icon: SiCsharp },
  Java: { name: 'Java', Icon: SiOpenjdk },
  Golang: { name: 'Golang', Icon: SiGo },
  JavaScript: { name: 'JavaScript', Icon: SiJavascript },
  FastAPI: { name: 'FastAPI', Icon: SiFastapi },
  Django: { name: 'Django', Icon: SiDjango },
  'Nest.js': { name: 'Nest.js', Icon: SiNestjs },
  'React.js': { name: 'React.js', Icon: SiReact },
  'Next.js': { name: 'Next.js', Icon: SiNextdotjs },
  Vue: { name: 'Vue', Icon: SiVuedotjs },
  'Angular.js': { name: 'Angular.js', Icon: SiAngular },
  'Express.js': { name: 'Express.js', Icon: SiExpress },
  MERN: { name: 'MERN', Icon: SiNodedotjs },
  'Vector DBs (Weaviate)': { name: 'Weaviate', src: '/skills/weaviate-icon.png' },
  MongoDB: { name: 'MongoDB', Icon: SiMongodb },
  MySQL: { name: 'MySQL', Icon: SiMysql },
  PostgreSQL: { name: 'PostgreSQL', Icon: SiPostgresql },
  Git: { name: 'Git', Icon: SiGit },
  Docker: { name: 'Docker', Icon: SiDocker },
  Linux: { name: 'Linux', Icon: SiLinux },
  gRPC: { name: 'gRPC', src: '/skills/grpc.svg' },
  Microservices: { name: 'Microservices', Icon: SiKubernetes },
  Langgraph: { name: 'LangGraph', Icon: SiLangchain },
  Langchain: { name: 'Langchain', Icon: SiLangchain },
  n8n: { name: 'n8n', Icon: SiN8N },
};

const skillCategories: {
  id: string;
  label: string;
  skills: string[];
  direction: 'left' | 'right';
}[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: skillsData.programmingLanguages,
    direction: 'left',
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    skills: skillsData.librariesAndFrameworks,
    direction: 'right',
  },
  {
    id: 'databases-tools',
    label: 'Databases & Tools',
    skills: [...skillsData.databases, ...skillsData.technologiesAndTools],
    direction: 'left',
  },
];

function resolveSkill(name: string): SkillVisual {
  return skillVisuals[name] ?? { name };
}

function SkillLogo({ skill }: { skill: SkillVisual }) {
  if (skill.Icon) {
    const Icon = skill.Icon;
    return <Icon className="w-8 h-8 md:w-9 md:h-9 text-textPrimary" aria-hidden />;
  }

  if (skill.src) {
    return (
      // Local brand assets (incl. SVG) — next/image disallows SVG by default
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={skill.src}
        alt=""
        width={36}
        height={36}
        className="w-8 h-8 md:w-9 md:h-9 object-contain"
        loading="lazy"
      />
    );
  }

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-sm font-semibold text-accent">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

function SkillCard({ skill }: { skill: SkillVisual }) {
  return (
    <div className="flex w-[9.5rem] md:w-[10.5rem] shrink-0 flex-col items-center gap-3 rounded-2xl border border-border/70 bg-bgPrimary px-4 py-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]">
      <div className="flex h-12 w-12 items-center justify-center">
        <SkillLogo skill={skill} />
      </div>
      <span className="text-center text-sm font-medium tracking-tight text-textPrimary">
        {skill.name}
      </span>
    </div>
  );
}

function SkillMarquee({
  label,
  skills,
  direction,
  index,
}: {
  label: string;
  skills: string[];
  direction: 'left' | 'right';
  index: number;
}) {
  const visuals = skills.map(resolveSkill);
  const copies = Math.max(2, Math.ceil(10 / Math.max(visuals.length, 1)));
  const half = Array.from({ length: copies }, () => visuals).flat();
  const track = [...half, ...half];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: easeOutExpo }}
      className="space-y-4"
    >
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent px-1">
        {label}
      </h3>
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-gradient-to-r from-[var(--section-surface)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-gradient-to-l from-[var(--section-surface)] to-transparent"
          aria-hidden
        />
        <div
          className={`skills-marquee-track ${
            direction === 'left' ? 'skills-marquee-left' : 'skills-marquee-right'
          }`}
        >
          {track.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.12,
    margin: '0px 0px -10% 0px',
  });

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen py-28 md:py-36 overflow-hidden section-bg-skills"
    >
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em]">
            05. Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4 text-textPrimary">
            Skills & Technologies
          </h2>
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-accent/60 to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </motion.header>

        <div className="space-y-10 md:space-y-12">
          {skillCategories.map(({ id, label, skills, direction }, index) => (
            <SkillMarquee
              key={id}
              label={label}
              skills={skills}
              direction={direction}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
