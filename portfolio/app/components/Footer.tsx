// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMailchimp, FaMailBulk } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-8 md:px-16">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         <div className="col-span-1 flex flex-col items-start">     
//           <img src="/logo-one-line-inverse.png" className="" width={650} alt="logo" />
//         </div>
//         <div className="col-span-1">
//           <h3 className="font-semibold mb-4">Contact me</h3>
//           <ul className="space-y-2 text-gray-300">
//             <li>+251 996304541</li>
//             <li>risekab@gmail.com</li>
//             <li>King George IV Street, Addis Ababa, Ethiopia</li>
//           </ul>
//         </div>

//         <div className="col-span-1">
//           <h3 className="font-semibold mb-4">Follow me</h3>
//           <div className="flex space-x-4">
//             <Link href="https://facebook.com" className="hover:text-blue-500">
//               <IoIosMail size={24} />
//             </Link>
//             <Link href="https://twitter.com" className="hover:text-blue-400">
//               <FaTwitter size={24} />
//             </Link>
//             <Link href="https://instagram.com" className="hover:text-pink-500">
//               <FaInstagram size={24} />
//             </Link>
//             <Link href="https://linkedin.com" className="hover:text-blue-700">
//               <FaLinkedinIn size={24} />
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
//         <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <HiMail size={24} />,
      href: "mailto:your.email@example.com",
      label: "Email"
    },
    {
      id: 2,
      icon: <FaLinkedin size={24} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      id: 3,
      icon: <FaGithub size={24} />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      id: 4,
      icon: <SiLeetcode size={24} />,
      href: "https://leetcode.com/yourusername",
      label: "LeetCode"
    },
    {
      id: 5,
      icon: <FaTwitter size={24} />,
      href: "https://twitter.com/yourusername",
      label: "Twitter"
    },
    {
      id: 6,
      icon: <FaTelegram size={24} />,
      href: "https://t.me/yourusername",
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
