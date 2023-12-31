import useAuth from '@/hooks/useAuth';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`${isScroll && `bg-[#141414]`}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="Netflix Logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline w-6 h-8" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />

        <img
        onClick={logOut}
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  );
};

export default Header;
