'use client'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

const Header = () => {

  return (
    <div className="flex items-center justify-between h-20 bg-white shadow-md px-4">
      <div className='flex gap-4 items-center'>
        <div className="text-2xl text-red-400">
        </div>
      </div>

      <nav className='hidden md:flex justify-between gap-12'>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/post'>blogs</Link>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/discover'>services</Link>
        <Link className='hover:text-red-400 hover:underline hover:underline-offset-8' href='/discover'>contact</Link>

     
      </nav>

    </div>
  );
};

export default Header;