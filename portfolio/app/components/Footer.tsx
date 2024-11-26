import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMailchimp, FaMailBulk } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-8 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 flex flex-col items-start">     
          <img src="/logo-one-line-inverse.png" className="" width={650} alt="logo" />
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-red-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-red-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Contact me</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Phone: +251 996304541</li>
            <li>Email: risekab@gmail.com</li>
            <li>Address: King George IV Street, Addis Ababa, Ethiopia</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-semibold mb-4">Follow me</h3>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-blue-500">
              <IoIosMail size={24} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedinIn size={24} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;