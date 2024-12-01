'use client'
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";

const Header = () => {

  return (
    <div className="flex items-center z-20 justify-between h-20 bg-white shadow-sm  w-full px-4">
      <div className='flex gap-4 items-center'>
        <div className="text-2xl text-red-400">
          <img src="/logo-one-line-no-bg.png" width={300} alt="logo" />
        </div>
      </div>

      <nav className='hidden md:flex justify-between gap-12'>
        <Link className='text-purple-800 hover:-translate-y-[2px] hover:underline-offset-8' href='/#portfolio'>portfolio</Link>
        <Link className='text-purple-800 hover:-translate-y-[2px] hover:underline-offset-8' href='/#resume'>resume</Link>
        <Link className='text-purple-800 hover:-translate-y-[2px] hover:underline-offset-8' href='/#services'>services</Link>
        <Link className='text-purple-800 hover:-translate-y-[2px] hover:underline-offset-8' href='/#skills'>skills</Link>
        <Link className='text-purple-800 hover:-translate-y-[2px] hover:underline-offset-8' href='/#contact'>contact</Link>

     
      </nav>

    </div>
  );
};

export default Header;