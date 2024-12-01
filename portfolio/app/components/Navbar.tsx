'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'skills' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-textPrimary bg-primary fixed z-50">
      <div>
        <img src="logo-one-line-inverse.png" alt="" width={300}/>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-link px-4 capitalize font-medium hover:scale-105 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-textPrimary md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl nav-link"
              onClick={() => setNav(false)}
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
