'use client'
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'portfolio', label: 'Projects' },
    { id: 4, link: 'skills', label: 'Skills' },
    { id: 5, link: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-glass shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block">
              <img 
                src="/logo-one-line-inverse.png" 
                alt="Kaleb Asratemedhin" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          <ul className="hidden md:flex space-x-1">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <a
                  href={`#${link}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="nav-link px-4 py-2 capitalize font-medium text-sm relative group"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute inset-0 bg-secondary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer text-textPrimary md:hidden z-50 p-2 hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {nav && (
        <div className="md:hidden fixed inset-0 bg-primary/95 backdrop-blur-md z-40 pt-20">
          <ul className="flex flex-col items-center space-y-8">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <a
                  href={`#${link}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className="text-3xl font-semibold nav-link capitalize py-2 px-6 relative group"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute inset-0 bg-secondary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
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
