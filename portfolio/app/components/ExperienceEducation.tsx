'use client'
import { useEffect, useRef, useState } from 'react';

const ExperienceEducation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const timelineItems = [
    {
      id: 1,
      type: 'experience',
      title: 'Full-Stack Developer',
      subtitle: 'Company Name',
      organization: 'Company Name',
      location: 'City, Country',
      period: '2023 - Present',
      description: 'Developing and maintaining web applications using modern technologies. Working on both frontend and backend systems.',
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Science',
      subtitle: 'Computer Science',
      organization: 'Your University',
      location: 'City, Country',
      period: '2020 - 2024',
      description: 'Focused on software engineering, algorithms, and data structures. Specialized in web development and AI.',
    },
    {
      id: 3,
      type: 'experience',
      title: 'Junior Developer',
      subtitle: 'Startup Company',
      organization: 'Startup Company',
      location: 'City, Country',
      period: '2022 - 2023',
      description: 'Worked on building responsive web applications and RESTful APIs. Collaborated with cross-functional teams.',
    },
    {
      id: 4,
      type: 'education',
      title: 'High School Diploma',
      subtitle: 'Science & Technology',
      organization: 'Your High School',
      location: 'City, Country',
      period: '2016 - 2020',
      description: 'Graduated with honors. Participated in programming competitions and tech clubs.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = parseInt(entry.target.getAttribute('data-item-id') || '0');
            setVisibleItems((prev) => new Set([...prev, itemId]));
            
            // Animate timeline line progress
            const progress = ((itemId) / timelineItems.length) * 100;
            const line = sectionRef.current?.querySelector('.timeline-line') as HTMLElement;
            if (line) {
              line.style.height = `${progress}%`;
            }
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
  }, [timelineItems.length]);

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
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-tan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">02. Experience & Education</span>
          <h2 className="section-title mt-4">Work Experience & Education</h2>
          <p className="text-textSecondary mt-4 font-light">My professional journey</p>
        </div>

        <div className="relative timeline-container">
          {/* Animated Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 timeline-line bg-gradient-to-b from-warm-brown via-warm-tan to-warm-brown transition-all duration-1000 ease-out" style={{ height: '0%' }}></div>
          
          {/* Static timeline track */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border/30"></div>

          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const isVisible = visibleItems.has(item.id);
              const delay = index * 150;
              
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

                  {/* Content with scroll animations */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 transition-all duration-700 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${delay}ms` }}
                  >
                    <div className={`glass-card group hover:scale-105 transition-all duration-500 ${
                      isVisible ? 'animate-scale-in' : ''
                    }`}>
                      <div className="mb-3">
                        <span className={`text-xs font-light uppercase tracking-wider px-3 py-1 rounded-full transition-all duration-500 ${
                          item.type === 'education' 
                            ? 'bg-warm-tan/20 text-warm-brown border border-warm-brown/30' 
                            : 'bg-warm-brown/20 text-accent border border-accent/30'
                        } ${isVisible ? 'scale-100' : 'scale-0'}`}
                        style={{ transitionDelay: `${delay + 100}ms` }}
                        >
                          {item.type === 'education' ? 'Education' : 'Work Experience'}
                        </span>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-light text-textPrimary mb-2 group-hover:text-accent transition-colors duration-300 ${
                        isVisible ? 'translate-x-0' : index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'
                      }`}
                      style={{ transitionDelay: `${delay + 200}ms` }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-textSecondary font-light mb-2">{item.subtitle}</p>
                      <p className="text-textTertiary text-sm mb-2">{item.organization} • {item.location}</p>
                      <p className="text-textTertiary text-xs font-light mb-4">{item.period}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
