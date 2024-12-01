'use client'

import { useEffect, useRef } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description of project 1. Add your project details here.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/project1",
      year: "2024",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of project 2. Add your project details here.",
      tech: ["Python", "TensorFlow", "Flask"],
      link: "https://github.com/yourusername/project2",
      year: "2023",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of project 3. Add your project details here.",
      tech: ["React", "Firebase", "Tailwind"],
      link: "https://github.com/yourusername/project3",
      year: "2023",
    },
  ];

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
          <p className="section-title">Projects</p>
          <p className="text-textSecondary">Check out some of my recent work</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/30"></div>

          {/* Projects */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`slide-in-item relative flex md:justify-between items-start mb-16 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } animate-slide-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-primary/50 p-6 rounded-lg shadow-lg border border-secondary/20">
                  <span className="text-secondary text-sm">{project.year}</span>
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
