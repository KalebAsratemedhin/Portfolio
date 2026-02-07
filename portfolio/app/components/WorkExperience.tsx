'use client'
import { useEffect, useRef, useState } from 'react';
import { getWorkExperiences } from '../lib/experiences';

const experiences = getWorkExperiences();

const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (experiences.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
            setVisibleItems((prev) => new Set([...prev, itemId]));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      
      const line = sectionRef.current.querySelector('.timeline-line') as HTMLElement;
      if (line) {
        const totalHeight = sectionRef.current.querySelector('.timeline-container')?.clientHeight || 0;
        line.style.height = `${scrollProgress * totalHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="experience" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-bgPrimary bg-texture overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/5 rounded-full blur-3xl animate-float"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">02. Work Experience</span>
          <h2 className="section-title mt-4">Professional Experience</h2>
          <p className="text-textSecondary mt-4 font-light">My professional journey</p>
        </div>

        <div className="relative timeline-container min-h-full">
          {/* Static timeline track - Brown vertical line (behind everything) */}
          <div 
            className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-0"
            style={{ backgroundColor: 'var(--warm-brown)' }}
          ></div>
          
          {/* Animated Timeline line (on top of static line) */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 timeline-line bg-gradient-to-b from-warm-brown via-warm-tan to-warm-brown transition-all duration-1000 ease-out z-[1]" style={{ height: '0%' }}></div>

          {experiences.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-textSecondary font-light">No work experiences found.</p>
            </div>
          ) : (
            <div className="space-y-16">
              {experiences.map((item, index) => {
                const isVisible = visibleItems.has(item.id);
                const delay = index * 150;
                const formatDate = (dateStr: string) => {
                  const date = new Date(dateStr);
                  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
                };
                const period = item.to ? `${formatDate(item.from)} - ${formatDate(item.to)}` : `${formatDate(item.from)} - Present`;
                const location = [item.city, item.country].filter(Boolean).join(', ') || null;
                
                return (
                  <div
                    key={item.id}
                    data-item-id={item.id}
                    className={`timeline-item relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Animated Timeline dot */}
                    <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 transition-all duration-700 ${
                      isVisible 
                        ? 'bg-accent scale-100 shadow-lg shadow-accent/50' 
                        : 'bg-border scale-50'
                    }`}>
                      <div className={`absolute inset-0 rounded-full bg-accent/30 animate-ping ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>

                    {/* Content with scroll animations - no card */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 transition-all duration-700 ${
                      index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${delay}ms` }}
                    >
                      <div className={`group pl-4 md:pl-0 border-l-2 md:border-l-0 md:border-none border-accent/40 md:border-none ${
                        isVisible ? 'animate-scale-in' : ''
                      }`}>
                        <div className="mb-2">
                          <span className={`text-xs font-light uppercase tracking-wider text-accent ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ transitionDelay: `${delay + 100}ms` }}
                          >
                            Work Experience
                          </span>
                        </div>
                        <h3 className={`text-xl md:text-2xl font-light text-textPrimary mb-1 group-hover:text-accent transition-colors duration-300 ${
                          isVisible ? 'translate-x-0' : index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'
                        }`}
                        style={{ transitionDelay: `${delay + 200}ms` }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-textSecondary font-light text-sm mb-0.5">{item.company_name}</p>
                        {location && <p className="text-textTertiary text-sm mb-1">{location}</p>}
                        <p className="text-textTertiary text-xs font-light mb-3">{period}</p>
                        <p className={`text-textSecondary leading-relaxed text-sm font-light transition-all duration-700 ${
                          isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: `${delay + 300}ms` }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;


