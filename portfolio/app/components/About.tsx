'use client'
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pageTurned, setPageTurned] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setPageTurned(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      const items = currentRef.querySelectorAll('.fade-in-item');
      items.forEach((item) => observer.observe(item));
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        const items = currentRef.querySelectorAll('.fade-in-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div 
      id="about" 
      ref={sectionRef} 
      className={`relative w-full min-h-screen py-32 bg-bgSecondary bg-texture overflow-hidden page-container page-turned ${
        pageTurned ? 'page-visible' : ''
      }`}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-tan/5 via-transparent to-warm-brown/5 pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-30 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Page shadow for depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] pointer-events-none z-0"></div>

      {/* Animated background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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

      {/* Flipped Paper Edge - Left side (where page was turned from) */}
      <div className="absolute left-0 top-0 bottom-0 w-12 pointer-events-none z-10">
        {/* Main shadow gradient showing the page was turned */}
        <div className="absolute left-0 top-0 bottom-0 w-full bg-gradient-to-r from-border/40 via-border/25 to-transparent"></div>
        {/* Edge highlight line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent/30 via-warm-brown/20 to-transparent"></div>
        {/* Curved shadow layers for 3D effect */}
        <div className="absolute left-1 top-0 bottom-0 w-6 bg-gradient-to-r from-black/8 to-transparent blur-sm"></div>
        <div className="absolute left-3 top-0 bottom-0 w-4 bg-gradient-to-r from-black/5 to-transparent blur-sm"></div>
        <div className="absolute left-6 top-0 bottom-0 w-2 bg-gradient-to-r from-black/3 to-transparent blur-sm"></div>
        {/* Subtle curl effect showing the page was lifted */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-32 bg-gradient-to-r from-accent/10 to-transparent blur-md transform skew-y-12"></div>
      </div>
    </div>
  );
};

export default About;
