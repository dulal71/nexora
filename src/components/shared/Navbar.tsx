'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";


  interface NavLink {
  name: string;
  path: string;
}
const Navbar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
const [scrolled,setScrolled]=useState<boolean>(false)

const toggleMobileMenu=()=>{
    setIsMobileMenuOpen(!isMobileMenuOpen)
}

useEffect(()=>{
  const handleScroll = ()=>setScrolled(window.scrollY > 10)  
  window.addEventListener('scroll',handleScroll)
  return ()=>window.removeEventListener('scroll',handleScroll)
},[])
    const navLinks:NavLink[] = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'BLOG', path: '/blog' },
 
  ];
    return (
        <nav className={`sticky top-0 transition-all duration-300 z-50  border-b bg-white  border-gray-100 px-4 md:px-[8%] flex items-center justify-between
       ${scrolled ? 'h-[55px] backdrop-blur-md shadow' : 'h-[70px] md:h-[90px] '}`}>
      
      {/* Mobile Menu Toggle Button */}
      <button 
        className="block md:hidden order-1 p-1 text-gray-800 hover:text-[#82a3c4] transition-colors"
        onClick={toggleMobileMenu}
        aria-label="Toggle Menu"
      >
        {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>

      {/* Logo Wrapper */}
      <div className="flex items-center font-sans text-2xl md:text-3xl font-bold text-gray-800 order-2 md:order-1 tracking-tight">
        {/* <Image src='/images/logo1.png' width={150} height={150} alt='rongo image logo'></Image> */}
      </div>

      {/* Navigation Links (Desktop + Mobile Dropdown Drawer) */}
      <ul className={`
        absolute md:static ${scrolled ? 'top-[55px]' : 'top-[70px]'} left-0 w-full md:w-auto bg-white md:bg-transparent
        flex flex-col md:flex-row gap-0 md:gap-4 list-none m-0 p-0
        border-b md:border-b-0 border-gray-200 shadow-md md:shadow-none
        transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible order-3 md:order-2
        ${isMobileMenuOpen ? 'max-h-[350px]' : 'max-h-0 md:max-h-none'}
      `}>
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          
          return (
            <li key={link.name} className="w-full md:w-auto" onClick={() => setIsMobileMenuOpen(false)}>
              <Link 
                href={link.path} 
                className={`
                  block text-[18px] font-semibold tracking-wider transition-all duration-200
                  px-5 md:px-[18px] py-4 md:py-2.5 w-full md:w-auto
                  ${isActive 
                    ? 'bg-[#82a3c4] text-white pl-7 md:pl-[18px]' 
                    : 'text-black hover:bg-[#82a3c4] hover:text-white hover:pl-7 md:hover:pl-[18px]'
                  }
                `}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    
      {/* Right Side Tools Utilities */}
      
        {/* user  */}
      <div className="flex items-center gap-3 md:gap-5 order-3">
        <div className="relative">

      <Link href={'/profile'}>
      <button className="p-1 text-gray-800 hover:text-[#82a3c4] transition-colors flex items-center cursor-pointer" aria-label="User">
        <BiUser size={18}></BiUser>
      </button>
      </Link>
    </div>
        
        <div className="w-[1px] h-[18px] md:h-[24px] bg-gray-200"></div>
        {/* cart */}
        <div className="relative flex items-center">
        <button
          
          className="p-1 text-gray-800 hover:text-[#82a3c4] transition-colors flex items-center" aria-label="Cart">
            <FiShoppingBag size={18} />
          </button>
          <span className="absolute -top-2 -right-2 text-[11px] font-medium text-gray-500">
            0
          </span>
      </div>
       <ThemeSwitch></ThemeSwitch>
       </div>
      
       
        
 </nav>
    );
};

export default Navbar;