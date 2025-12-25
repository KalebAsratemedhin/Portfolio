'use client'

import { useEffect, useRef } from "react";
import { projects } from "../data";
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll(".project-card");
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll(".project-card");
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div ref={sectionRef} id="portfolio" className="relative w-full min-h-screen bg-primary text-textPrimary py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <span className="text-secondary font-mono text-sm md:text-base">03. My Work</span>
          <h2 className="section-title mt-4">
            <span className="text-textPrimary">Featured</span>
            <span className="text-gradient ml-4">Projects</span>
          </h2>
          <p className="section-subtitle">
            Check out some of my recent work
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image/Placeholder */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-glass border border-secondary/20 rounded-lg overflow-hidden h-64 lg:h-80 flex items-center justify-center group-hover:border-secondary/50 transition-all duration-300">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300">
                        <FaCode className="text-secondary" size={32} />
                      </div>
                      <p className="text-textSecondary text-sm">{project.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-secondary font-mono text-sm">{project.date}</span>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-textPrimary group-hover:text-secondary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <div className="bg-glass p-6 rounded-lg border border-secondary/10">
                    <p className="text-textSecondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-textPrimary transition-colors duration-300 group"
                      >
                        <FaGithub className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">View Code</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-secondary hover:text-textPrimary transition-colors duration-300 group"
                        >
                          <FaExternalLinkAlt className="group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
