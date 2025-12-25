'use client'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <HiMail size={20} />,
      href: "mailto:risekab@gmail.com",
      label: "Email"
    }, 
    {
      id: 2,
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaGithub size={20} />,
      href: "https://github.com/KalebAsratemedhin",
      label: "GitHub"
    },
    {
      id: 4,
      icon: <SiLeetcode size={20} />,
      href: "https://leetcode.com/4ureyes",
      label: "LeetCode"
    },
    {
      id: 5,
      icon: <FaTelegram size={20} />,
      href: "https://t.me/Thequantumduck",
      label: "Telegram"
    }
  ];

  return (
    <footer className="relative w-full bg-primary text-textPrimary py-12 border-t border-secondary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-glass rounded-lg border border-secondary/10 
                         hover:border-secondary/50 hover:bg-secondary/10 text-textSecondary 
                         hover:text-secondary transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                {icon}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 
                               bg-secondary/90 text-primary px-2 py-1 rounded text-xs 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                               whitespace-nowrap pointer-events-none">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-textSecondary text-sm">
              © {new Date().getFullYear()} Kaleb Asratemedhin. All rights reserved.
            </p>
            <p className="text-textSecondary/70 text-xs mt-2">
              Designed & Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 p-2 text-textSecondary hover:text-secondary transition-colors duration-300 
                     hover:scale-110"
            aria-label="Back to top"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
