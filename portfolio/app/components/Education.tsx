'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { getEducations } from '../lib/experiences';

const education = getEducations();

const cardVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div
      id="education"
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-warm-tan/5 rounded-full blur-3xl"
        animate={{ x: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">03. Education</span>
          <h2 className="section-title mt-4">Educational Background</h2>
          <p className="text-textSecondary mt-4 font-light">My academic journey</p>
        </motion.div>

        {education.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-textSecondary font-light">No education found.</p>
          </div>
        ) : (
          <motion.div
            className="space-y-4"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {education.map((item, index) => {
              const period = item.to
                ? `${formatDate(item.from)} - ${formatDate(item.to)}`
                : `${formatDate(item.from)} - Present`;
              const location = `${item.city}, ${item.country}`;

              return (
                <motion.article
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  className="flex overflow-hidden rounded-r-xl border border-border border-l-4 border-l-warm-brown bg-bgPrimary/80 hover:border-l-accent"
                  whileHover={{
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
                    x: 4,
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.998 }}
                >
                  <div className="p-6 flex-1 min-w-0">
                    <span className="text-xs font-light uppercase tracking-wider text-warm-brown mb-2 block">
                      Education
                    </span>
                    <h3 className="text-xl font-light text-textPrimary mb-1">{item.title}</h3>
                    <p className="text-textSecondary font-light text-sm mb-0.5">{item.company_name}</p>
                    <p className="text-textTertiary text-sm mb-1">{location}</p>
                    <p className="text-textTertiary text-xs font-light mb-3">{period}</p>
                    <p className="text-textSecondary leading-relaxed text-sm font-light">
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

export default Education;
