import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <HiMail size={24} />,
      href: "mailto:risekab@gmail.com",
      label: "Email"
    }, 
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/kaleb-asratemedhin-81748625b/",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaGithub size={24} />,
      href: "https://github.com/KalebAsratemedhin",
      label: "GitHub"
    },
    {
      id: 4,
      icon: <SiLeetcode size={24} />,
      href: "https://leetcode.com/4ureyes",
      label: "LeetCode"
    },
    {
      id: 6,
      icon: <FaTelegram size={24} />,
      href: "https://t.me/Thequantumduck",
      label: "Telegram"
    }
  ];

  return (
    <footer className="w-full bg-primary text-textPrimary py-8 border-t border-secondary/20">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-textSecondary mb-4 md:mb-0">
            © {new Date().getFullYear()} Kaleb Asratemedhin. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link group relative"
                aria-label={label}
              >
                {icon}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-secondary/10 text-secondary px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
