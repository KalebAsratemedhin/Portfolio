'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';
import WobblyImage from './WobblyImage';

const HeroSection = () => {
  return (
    <div id="home" className="w-full h-screen bg-primary">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full gap-8">
        <div className="flex-1">
          <p className="text-secondary animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-textPrimary animate-slide-in">
            Kaleb 
          </h1>
          <h2 className="text-2xl sm:text-2xl font-bold text-textSecondary">
            <Typewriter
              options={{
                strings: [
                  'Frontend Developer',
                  'Backend Developer',
                  'AI Engineer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </h2>
          <p className="text-textSecondary py-4 max-w-[700px] animate-slide-in" style={{ animationDelay: '400ms' }}>
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building responsive full-stack web applications.
          </p>
          
          <div className="flex gap-4 animate-slide-in" style={{ animationDelay: '600ms' }}>
            <button className="btn-primary group">
              View Work 
              <span className="group-hover:rotate-90 duration-300 inline-block ml-2">
                <HiArrowNarrowRight />
              </span>
            </button>
            
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FaGithub size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex-1 mt-8 md:mt-0">
          <WobblyImage imageUrl="/profile-no-bg.png" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
