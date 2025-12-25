'use client'
import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      const items = currentRef.querySelectorAll('.fade-in-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.fade-in-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div id="about" ref={sectionRef} className="relative w-full min-h-screen bg-primary text-textPrimary py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 fade-in-item">
          <span className="text-secondary font-mono text-sm md:text-base">01. About Me</span>
          <h2 className="section-title mt-4">
            <span className="text-textPrimary">About</span>
            <span className="text-gradient ml-4">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="fade-in-item space-y-6">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-textPrimary leading-relaxed">
              Hi. I&apos;m <span className="text-secondary">Kaleb Asratemedhin</span>, nice to meet you. 
              Please take a look around.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-accent"></div>
          </div>

          <div className="fade-in-item space-y-6" style={{ animationDelay: '200ms' }}>
            <p className="text-textSecondary text-lg leading-relaxed">
              I am passionate about building excellent software that improves the lives of those around me. 
              I specialize in creating software for clients ranging from individuals and small-businesses 
              all the way to large enterprise corporations.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              What would you do if you had a software expert available at your fingertips? I bring a unique 
              combination of technical expertise, creative problem-solving, and a commitment to delivering 
              solutions that not only meet but exceed expectations.
            </p>
            <div className="pt-4">
              <a 
                href="/Resume-vl.pdf" 
                download="Kaleb_Resume.pdf"
                className="btn-primary inline-flex items-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills preview */}
        <div className="mt-20 fade-in-item" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-textPrimary mb-8 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AI/ML'].map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-glass rounded-full border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105"
              >
                <span className="text-textPrimary font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
  