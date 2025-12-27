'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import WobblyImage from './WobblyImage';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-texture page-container">
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-brown/5 via-transparent to-warm-tan/5 pointer-events-none z-0"></div>
      <div className="absolute inset-0 opacity-30 z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Page shadow for depth */}
      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] pointer-events-none z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warm-brown/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-tan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute inset-0 bg-bgSecondary/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 animate-fade-in-up text-center md:text-left">
            <div className="space-y-4">
              <p className="text-textSecondary text-sm md:text-base font-light uppercase tracking-widest">
                Full-Stack Developer
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
                <span className="block">Kaleb</span>
                <span className="block text-textSecondary">Asratemedhin</span>
              </h1>
            </div>
            
            <p className="text-textSecondary text-lg md:text-xl max-w-2xl font-light leading-relaxed">
              Building exceptional digital experiences through clean code and thoughtful design.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-8">
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="btn-minimal flex items-center gap-2 group"
              >
                View Work
                <HiArrowNarrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </button>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/KalebAsratemedhin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-rotate-in" style={{ animationDelay: '400ms' }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-warm-brown/20 rounded-full blur-2xl group-hover:bg-warm-tan/30 transition-all duration-500 animate-pulse"></div>
              <WobblyImage imageUrl="/profile-no-bg.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
