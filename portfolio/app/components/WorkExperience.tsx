'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getWorkExperiences } from '../lib/experiences';

const experiences = getWorkExperiences();

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div
      id="experience"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 bg-bgPrimary bg-texture overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">02. Work Experience</span>
          <h2 className="section-title mt-4">Professional Experience</h2>
          <p className="text-textSecondary mt-4 font-light">My professional journey</p>
        </motion.div>

        {experiences.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-textSecondary font-light">No work experiences found.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {experiences.map((item, index) => {
              const period = item.to
                ? `${formatDate(item.from)} - ${formatDate(item.to)}`
                : `${formatDate(item.from)} - Present`;
              const location = [item.city, item.country].filter(Boolean).join(', ') || null;

              return (
                <motion.article
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  className="rounded-xl border border-border bg-bgSecondary/50 p-6"
                  whileHover={{
                    y: -4,
                    borderColor: 'rgba(125, 90, 58, 0.5)',
                    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.08)',
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex flex-col h-full">
                    <span className="text-xs font-light uppercase tracking-wider text-accent mb-2">Work Experience</span>
                    <h3 className="text-xl font-light text-textPrimary mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-textSecondary font-light text-sm mb-0.5">{item.company_name}</p>
                    {location && <p className="text-textTertiary text-sm mb-1">{location}</p>}
                    <p className="text-textTertiary text-xs font-light mb-4">{period}</p>
                    <p className="text-textSecondary leading-relaxed text-sm font-light mt-auto">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
