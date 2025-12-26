'use client'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <HiMail size={18} />,
      href: "mailto:risekab@gmail.com",
      label: "Email"
    }, 
    {
      id: 2,
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaGithub size={18} />,
      href: "https://github.com/KalebAsratemedhin",
      label: "GitHub"
    },
    {
      id: 4,
      icon: <SiLeetcode size={18} />,
      href: "https://leetcode.com/4ureyes",
      label: "LeetCode"
    },
    {
      id: 5,
      icon: <FaTelegram size={18} />,
      href: "https://t.me/Thequantumduck",
      label: "Telegram"
    }
  ];

  return (
    <footer className="relative w-full bg-bgSecondary border-t border-border py-12 bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-4">
            {socialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border hover:bg-textPrimary hover:text-bgPrimary transition-all duration-300"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="w-24 h-px bg-border"></div>

          <div className="text-center">
            <p className="text-textSecondary text-sm font-light">
              © {new Date().getFullYear()} Kaleb Asratemedhin. All rights reserved.
            </p>
            <p className="text-textTertiary text-xs mt-2 font-light">
              Designed & Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
