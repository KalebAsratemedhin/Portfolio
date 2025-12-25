'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
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
    <div id="home" className="relative w-full min-h-screen bg-primary overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#112240] to-primary opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center min-h-screen gap-12 py-20">
        <div className="flex-1 space-y-6 animate-fade-in-up">
          <p className="text-secondary font-mono text-sm md:text-base animate-fade-in">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-textPrimary">Kaleb</span>
            <br />
            <span className="text-gradient">Asratemedhin</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textSecondary min-h-[3rem]">
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer',
                  'Frontend Developer',
                  'Backend Developer',
                  'AI Engineer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                cursor: '<span class="text-secondary">|</span>',
              }}
            />
          </h2>
          
          <p className="text-textSecondary text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            I&apos;m a passionate full-stack developer specializing in building exceptional digital experiences 
            that combine elegant design with robust functionality. Currently focused on creating responsive, 
            scalable web applications.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="btn-primary group flex items-center"
            >
              View My Work
              <HiArrowNarrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/KalebAsratemedhin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-glass rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-glass rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <WobblyImage imageUrl="/profile-no-bg.png" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
