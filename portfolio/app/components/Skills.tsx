'use client'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiTensorflow, SiPytorch, SiExpress, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const frontendSkills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={40} /> },
    { id: 2, name: 'CSS', icon: <FaCss3 size={40} /> },
    { id: 3, name: 'JavaScript', icon: <FaJs size={40} /> },
    { id: 4, name: 'React', icon: <FaReact size={40} /> },
    { id: 5, name: 'Next.js', icon: <SiNextdotjs size={40} /> },
    { id: 6, name: 'Tailwind', icon: <SiTailwindcss size={40} /> },
    { id: 7, name: 'TypeScript', icon: <SiTypescript size={40} /> },
  ];

  const backendSkills = [
    { id: 8, name: 'Node.js', icon: <FaNode size={40} /> },
    { id: 9, name: 'Express', icon: <SiExpress size={40} /> },
    { id: 10, name: 'MongoDB', icon: <SiMongodb size={40} /> },
    { id: 11, name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
    { id: 12, name: 'Python', icon: <FaPython size={40} /> },
    { id: 13, name: 'Docker', icon: <FaDocker size={40} /> },
    { id: 16, name: 'Git', icon: <FaGit size={40} /> },
  ];

  const aiSkills = [
    { id: 14, name: 'TensorFlow', icon: <SiTensorflow size={40} /> },
    { id: 15, name: 'PyTorch', icon: <SiPytorch size={40} /> },
    { id: 12, name: 'Python', icon: <FaPython size={40} /> },
  ];

  // Create multiple copies for seamless infinite loop
  const createInfiniteCarousel = (skills: typeof frontendSkills) => {
    // Create enough copies to ensure seamless loop (at least 3-4 sets)
    return [...skills, ...skills, ...skills, ...skills];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const SkillCarousel = ({ skills, title }: { skills: typeof frontendSkills; title: string }) => {
    const carouselItems = createInfiniteCarousel(skills);
    // Calculate animation duration: move through one set of skills
    // Since we have 4 copies, moving 25% = 1 set, which creates seamless loop
    const animationDuration = skills.length * 2.5; // 2.5 seconds per skill for smooth scrolling
    
    return (
      <div className="space-y-4 animate-slide-in w-full">
        <h3 className="text-lg font-light text-textPrimary mb-6 group-hover:text-accent transition-colors duration-300">{title}</h3>
        <div className="relative overflow-hidden w-full -mx-4 sm:-mx-6 lg:-mx-8">
          <div 
            className="flex gap-12 px-4 sm:px-6 lg:px-8 carousel-scroll" 
            style={{ 
              width: 'max-content',
              animationDuration: `${animationDuration}s`
            }}
          >
            {carouselItems.map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 group hover:scale-110 transition-all duration-300"
                style={{ minWidth: '120px' }}
              >
                <div className="text-textSecondary group-hover:text-accent transition-all duration-300 group-hover:scale-125">
                  {skill.icon}
                </div>
                <span className="text-textSecondary text-sm font-light group-hover:text-accent transition-colors duration-300 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-bgPrimary bg-texture overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">05. Skills</span>
          <h2 className="section-title mt-4">Technologies</h2>
          <p className="text-textSecondary mt-4 font-light">Technologies I work with</p>
        </div>

        <div className="space-y-16 w-full sm:p-24">
          <SkillCarousel skills={frontendSkills} title="Frontend" />
          <SkillCarousel skills={backendSkills} title="Backend" />
          <SkillCarousel skills={aiSkills} title="AI/ML" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
