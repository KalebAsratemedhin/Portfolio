'use client'
import { useEffect, useState } from 'react';

export default function ScrollWatcher() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-primary/50 backdrop-blur-sm z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-secondary via-accent to-secondary transition-all duration-150 ease-out shadow-lg shadow-secondary/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>    
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-4 bg-glass border border-secondary/30 rounded-full 
                   shadow-lg hover:border-secondary hover:bg-secondary/10 text-secondary 
                   transition-all duration-300 z-50 group ${
                     showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                   }`}
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
