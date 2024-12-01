'use client'

import { useEffect, useRef } from "react";
import { projects } from "../data";

const Projects = () => {
  

  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          
            if (entry.isIntersecting){
              entry.target.classList.add("animate-slide-in")
            } 
            else {
              entry.target.classList.remove("animate-slide-in")
            }
          
        });
      },
      { threshold: 0.5 } 
    );

    const section = sectionRef.current;
    const items = section?.querySelectorAll(".slide-in-item");
    items?.forEach((item: Element) => observer.observe(item));

    return () => {
      items?.forEach((item: Element) => observer.unobserve(item));
    };
  }, []);

  return (
    <div ref={sectionRef} id="portfolio" className="w-full min-h-screen bg-primary text-textPrimary py-20">
      <div className="max-w-[1000px] mx-auto p-4">
        <div className="pb-8">
          <p className="section-title text-4xl font-bold">Projects</p>
          <p className="text-textSecondary text-2xl">Check out some of my recent work</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`slide-in-item relative flex md:justify-between items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>

              <div
                className={`ml-8 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-primary/50 p-6 rounded-lg shadow-lg border border-secondary/20">
                  <span className="text-secondary text-sm">{project.date}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-textSecondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 transition-colors"
                  >
                    View Project →
                  </a>
                  <br />
                  {
                    project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        Live Demo →
                      </a>
                    )
                  }
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
