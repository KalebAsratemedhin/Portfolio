'use client'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

const Header = () => {

  return (
    <div className="flex items-center justify-between h-20 bg-white shadow-sm sticky px-4">
      <div className='flex gap-4 items-center'>
        <div className="text-2xl text-red-400">
          <img src="/logo-one-line-no-bg.png" width={300} alt="logo" />
        </div>
      </div>

      <nav className='hidden md:flex justify-between gap-12'>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/portfolio'>portfolio</Link>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/services'>services</Link>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/contact'>contact</Link>

     
      </nav>

    </div>
  );
};

export default Header;