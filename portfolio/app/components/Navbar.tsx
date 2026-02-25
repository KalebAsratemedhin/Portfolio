'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'experience', label: 'Experience' },
    { id: 4, link: 'education', label: 'Education' },
    { id: 5, link: 'portfolio', label: 'Projects' },
    { id: 6, link: 'skills', label: 'Skills' },
    { id: 7, link: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which section is in view for active link styling
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'education', 'portfolio', 'skills', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setNav(false);
    const element = document.getElementById(link);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border ${
      scrolled ? 'bg-bgPrimary/80 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0 flex items-center overflow-visible">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block relative h-56 md:h-64 -my-4 md:-my-4 w-80 sm:w-96 md:w-[28rem] lg:w-[34rem] xl:w-[40rem]">
              <Image 
                src={theme === 'dark' ? "/logo-one-line-inverse.png" : "/logo-one-line-no-bg.png"} 
                alt="Kaleb Asratemedhin" 
                fill
                className="object-contain object-left transition-opacity duration-300"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {links.map(({ id, link, label }) => (
                <li key={id}>
                  <a
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`nav-link text-sm font-light uppercase tracking-wider transition-colors duration-200 ${
                      activeSection === link
                        ? 'text-accent font-medium'
                        : 'text-textSecondary hover:text-textPrimary'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            
            <button
              onClick={toggleTheme}
              className="p-2 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 border border-border"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
            <button
              onClick={() => setNav(!nav)}
              className="p-2 text-textPrimary"
              aria-label="Toggle menu"
            >
              {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {nav && (
        <div className="md:hidden fixed inset-0 bg-bgPrimary/95 backdrop-blur-md z-40 pt-24">
          <ul className="flex flex-col items-center space-y-8">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <a
                  href={`#${link}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-2xl font-light uppercase tracking-wider nav-link transition-colors duration-200 ${
                    activeSection === link
                      ? 'text-accent font-medium'
                      : 'text-textSecondary'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
