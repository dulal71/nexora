'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiUser, BiSearch } from "react-icons/bi";
import { FiMenu, FiShoppingBag, FiX, FiHeart } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import Logo from "./Logo";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import OfferMarquee from "./OfferMarquee";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const openMenu = ()=>{
setIsMobileMenuOpen(!isMobileMenuOpen)
 }
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'FEATURES', path: '/features' },
    { name: 'NEW IN', path: '/new-in' },

  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Announcement Bar */}
      <OfferMarquee></OfferMarquee>

      {/* Main Navbar */}
      <div className={`bg-white dark:dark:bg-black  border-b border-gray-100 dark:border-none px-4 md:px-[8%] flex items-center justify-between  transition-all duration-500 ${scrolled ? 'h-[60px]' : 'h-[80px]'}`}>
        
        {/* Mobile Toggle */}
        <button  aria-expanded={isMobileMenuOpen} className="md:hidden p-2" onClick={openMenu}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Logo */}
         <Logo></Logo>

        {/* Desktop Links */}
        <DesktopMenu navLinks={navLinks}></DesktopMenu>

        {/* Icons */}
        <NavActions openMenu={openMenu} ></NavActions>
      </div>

      
      {/* Mobile Menu Drawer - Smooth Transition */}
       <MobileMenu navLinks={navLinks} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}></MobileMenu>
    </nav>
  );
};

export default Navbar;