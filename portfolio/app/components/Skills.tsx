'use client'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGit, FaPython, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiTensorflow, SiPytorch, SiExpress, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { id: 1, name: 'HTML', icon: <FaHtml5 size={40} />, level: 90 },
        { id: 2, name: 'CSS', icon: <FaCss3 size={40} />, level: 90 },
        { id: 3, name: 'JavaScript', icon: <FaJs size={40} />, level: 85 },
        { id: 4, name: 'React', icon: <FaReact size={40} />, level: 85 },
        { id: 5, name: 'Next.js', icon: <SiNextdotjs size={40} />, level: 80 },
        { id: 6, name: 'Tailwind', icon: <SiTailwindcss size={40} />, level: 90 },
        { id: 7, name: 'TypeScript', icon: <SiTypescript size={40} />, level: 80 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { id: 8, name: 'Node.js', icon: <FaNode size={40} />, level: 85 },
        { id: 9, name: 'Express', icon: <SiExpress size={40} />, level: 85 },
        { id: 10, name: 'MongoDB', icon: <SiMongodb size={40} />, level: 80 },
        { id: 11, name: 'PostgreSQL', icon: <SiPostgresql size={40} />, level: 75 },
        { id: 12, name: 'Python', icon: <FaPython size={40} />, level: 80 },
        { id: 13, name: 'Docker', icon: <FaDocker size={40} />, level: 70 },
      ]
    },
    {
      title: "AI Engineering",
      skills: [
        { id: 14, name: 'TensorFlow', icon: <SiTensorflow size={40} />, level: 75 },
        { id: 15, name: 'PyTorch', icon: <SiPytorch size={40} />, level: 75 },
        { id: 16, name: 'Python', icon: <FaPython size={40} />, level: 80 },
        { id: 17, name: 'Git', icon: <FaGit size={40} />, level: 85 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                (bar as HTMLElement).style.width = width || '0%';
              }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll('.skill-category');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.skill-category');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div id="skills" ref={sectionRef} className="relative w-full min-h-screen bg-primary text-textPrimary py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-secondary font-mono text-sm md:text-base">04. My Skills</span>
          <h2 className="section-title mt-4">
            <span className="text-textPrimary">Technologies</span>
            <span className="text-gradient ml-4">I Use</span>
          </h2>
          <p className="section-subtitle">
            These are the technologies I&apos;ve worked with
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-secondary flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-secondary to-accent"></span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group bg-glass p-6 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-secondary/10"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="text-secondary group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div className="w-full">
                        <p className="text-textPrimary font-medium mb-2">{skill.name}</p>
                        <div className="w-full h-2 bg-primary rounded-full overflow-hidden">
                          <div
                            className="skill-bar-fill h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-1000 ease-out"
                            data-width={`${skill.level}%`}
                            style={{ width: '0%' }}
                          ></div>
                        </div>
                        <p className="text-textSecondary text-xs mt-1">{skill.level}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

