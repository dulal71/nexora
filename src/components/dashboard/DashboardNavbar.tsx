'use client'
import Logo from '../shared/Logo';
import { IoMdNotificationsOutline } from 'react-icons/io';
import ThemeSwitch from '../shared/ThemeSwitch';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface DashboardNavbarProps {
  onMenuClick?: () => void;
}

const DashboardNavbar = ({ onMenuClick }: DashboardNavbarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50">
      <div
        className={`bg-white dark:bg-black border-b border-gray-100 dark:border-gray-800 px-4 md:px-[8%] flex items-center gap-4 transition-all duration-300 ${
          scrolled ? 'h-[60px]' : 'h-[80px]'
        }`}
      >
        {/* Mobile menu toggle */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          aria-label="Toggle sidebar"
        >
          <FiMenu size={20} />
        </button>

        <Logo />

        {/* Search - desktop only */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-[320px] ml-6 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-transparent focus-within:border-gray-200 dark:focus-within:border-gray-700 transition-colors">
          <FiSearch size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full text-gray-800 dark:text-gray-100 placeholder:text-gray-400"
          />
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          <button
            className="relative cursor-pointer hidden md:flex p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            aria-label="Notifications"
          >
            <IoMdNotificationsOutline size={30} className="text-gray-700 dark:text-gray-200" />
            <span className="absolute top-1 right-1 bg-black dark:bg-white text-white dark:text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
              0
            </span>
          </button>

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;