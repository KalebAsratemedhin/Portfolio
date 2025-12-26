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
    <div id="about" ref={sectionRef} className="relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="fade-in-item text-center animate-fade-in-up">
            <span className="text-textSecondary text-sm uppercase tracking-widest font-light">01. About</span>
            <h2 className="section-title mt-4 text-left md:text-center">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="fade-in-item space-y-6 animate-slide-in">
              <p className="text-textPrimary text-xl md:text-2xl font-light leading-relaxed">
                Hi. I&apos;m <span className="font-normal text-accent">Kaleb Asratemedhin</span>, a passionate full-stack developer 
                dedicated to creating exceptional software solutions.
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-warm-brown to-warm-tan animate-glow"></div>
            </div>

            <div className="fade-in-item space-y-6" style={{ animationDelay: '200ms' }}>
              <p className="text-textSecondary leading-relaxed">
                I am passionate about building excellent software that improves the lives of those around me. 
                I specialize in creating software for clients ranging from individuals and small-businesses 
                all the way to large enterprise corporations.
              </p>
              <p className="text-textSecondary leading-relaxed">
                What would you do if you had a software expert available at your fingertips? I bring a unique 
                combination of technical expertise, creative problem-solving, and a commitment to delivering 
                solutions that not only meet but exceed expectations.
              </p>
              <a 
                href="/Resume-vl.pdf" 
                download="Kaleb_Resume.pdf"
                className="btn-minimal inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
