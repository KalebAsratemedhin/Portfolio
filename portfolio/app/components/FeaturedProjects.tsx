'use client'
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from "../types/project";
import { getProjects } from "../lib/projects";

const projects = getProjects();

const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set up Intersection Observer to track which project is in view
  useEffect(() => {
    if (projects.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setActiveProjectIndex(index);
          }
        });
      },
      { 
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-20% 0px -20% 0px' // Only trigger when section is in the middle portion of viewport
      }
    );

    const refs = projectRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const ProjectDemo = ({ project, isActive, compact }: { project: Project; isActive: boolean; compact?: boolean }) => {
    return (
      <div
        className={`w-full transition-all duration-700 ${
          isActive
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none absolute'
        }`}
      >
        <div className="w-full group h-full">
          <div className={`overflow-hidden relative ${compact ? 'h-[28rem] rounded-t-2xl' : 'h-64 md:h-80 lg:h-96 rounded-2xl border border-border/50 shadow-2xl'}`}>
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/30 via-warm-tan/20 to-warm-brown/30"></div>
            
            {/* Mock browser window */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="h-8 bg-bgPrimary/80 backdrop-blur-sm border-b border-border/50 flex items-center gap-2 px-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                </div>
                <div className="flex-1 mx-4 h-5 bg-bgSecondary rounded text-xs text-textTertiary flex items-center px-2 text-center">
                  {project.demo_link || 'localhost:3000'}
                </div>
              </div>
              <div className={`flex-1 bg-bgPrimary/40 backdrop-blur-sm flex items-center justify-center relative overflow-hidden min-w-0 ${compact ? 'min-h-[7rem]' : 'min-h-[12rem]'}`}>
                {project.demo_image_url ? (
                  <Image 
                    src={project.demo_image_url} 
                    alt={project.title} 
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : project.demo_link ? (
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Fixed 1280×800 viewport = desktop layout; scale so it fills card width on mobile */}
                    <div className={`origin-top-left pointer-events-none w-[1280px] h-[800px] block ${compact ? 'scale-[0.6]' : 'scale-[0.32] md:scale-[0.4] lg:scale-[0.48]'}`}>
                      <iframe
                        title={`${project.title} preview`}
                        src={project.demo_link}
                        className="border-0 w-[1280px] h-[800px] block"
                        sandbox="allow-scripts allow-same-origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-warm-brown/20 rounded-lg flex items-center justify-center">
                      <span className="text-4xl text-textPrimary">{project.title.charAt(0)}</span>
                    </div>
                    <p className="text-textSecondary text-sm font-light">{project.title}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons overlay */}
            <div className="absolute inset-0 z-20 bg-warm-brown/10 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="flex gap-4">
                {project.demo_link && (
                  <a
                    href={project.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-bgPrimary/90 backdrop-blur-md border border-border rounded-lg text-textPrimary hover:bg-accent hover:text-bgPrimary transition-all duration-300 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="text-sm font-light">View Live</span>
                  </a>
                )}
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-bgPrimary/90 backdrop-blur-md border border-border rounded-lg text-textPrimary hover:bg-accent hover:text-bgPrimary transition-all duration-300 flex items-center gap-2"
                >
                  <FaGithub size={16} />
                  <span className="text-sm font-light">View Code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative elements — only on desktop */}
          {!compact && (
            <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-warm-brown/20 to-warm-tan/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div id="portfolio" className="relative w-full bg-bgSecondary bg-texture">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="text-textSecondary text-sm uppercase tracking-widest font-light">04. Projects</span>
          <h2 className="section-title mt-4">Featured Work</h2>
          <p className="text-textSecondary mt-4 font-light">Check out some of my recent work</p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-textSecondary font-light">No projects found.</p>
          </div>
        ) : (
          <>
            {/* Mobile / small screens: stacked cards — one column, each project is preview + content */}
            <div className="flex flex-col gap-16 md:hidden">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="scroll-mt-24 rounded-2xl border border-border/50 overflow-hidden bg-bgPrimary/30 backdrop-blur-sm"
                >
                  <div className="w-full pb-0">
                    <ProjectDemo project={project} isActive={true} compact />
                  </div>
                  <div className="border-t border-border/60 p-6 pt-6 space-y-5">
                    <div>
                      <span className="text-accent text-sm font-light uppercase tracking-wider">
                        Featured Project {index + 1}
                      </span>
                      <h3 className="text-2xl font-light text-textPrimary mt-2 mb-3">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-textSecondary leading-relaxed text-sm font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs border border-border/50 bg-bgPrimary/50 text-textSecondary font-light rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                      >
                        <FaGithub size={18} />
                        <span className="text-sm font-light">GitHub</span>
                      </a>
                      {project.demo_link && (
                        <a
                          href={project.demo_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors"
                        >
                          <FaExternalLinkAlt size={18} />
                          <span className="text-sm font-light">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Desktop (md+): two columns — sticky demo left, scrollable content right */}
            <div className="hidden md:flex flex-row gap-12">
              <div className="w-1/2 sticky top-1/3 self-start" style={{ minHeight: '400px' }}>
                {projects.map((project, index) => (
                  <ProjectDemo
                    key={`demo-${project.id}`}
                    project={project}
                    isActive={activeProjectIndex === index}
                  />
                ))}
              </div>
              <div className="w-1/2">
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    ref={(el) => {
                      projectRefs.current[index] = el;
                    }}
                    data-project-index={index}
                    className="min-h-screen flex items-center"
                  >
                    <div className="w-full">
                      <div className="space-y-6">
                        <div>
                          <span className="text-accent text-sm font-light uppercase tracking-wider">
                            Featured Project {index + 1}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-light text-textPrimary mt-2 mb-4">
                            {project.title}
                          </h3>
                        </div>
                        <div className="glass-card">
                          <p className="text-textSecondary leading-relaxed text-base font-light">
                            {project.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 text-xs border border-border/50 bg-bgPrimary/50 text-textSecondary font-light rounded-full backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:text-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-textSecondary hover:text-accent transition-all duration-300 group/link"
                          >
                            <FaGithub className="group-hover/link:scale-110 transition-transform duration-300" size={20} />
                            <span className="text-sm font-light">GitHub</span>
                          </a>
                          {project.demo_link && (
                            <a
                              href={project.demo_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-all duration-300 group/link"
                            >
                              <FaExternalLinkAlt className="group-hover/link:scale-110 transition-transform duration-300" size={20} />
                              <span className="text-sm font-light">Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;