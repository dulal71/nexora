'use client'

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import MobileSearchBar from "./MobileSearchBar";
interface NavLink {
  name: string;
  path: string;
}
interface MobileMenuProps {
    setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>
  isMobileMenuOpen: boolean;
  navLinks: NavLink[];
}


const MobileMenu = ({isMobileMenuOpen, setIsMobileMenuOpen,navLinks}:MobileMenuProps) => {
   const pathname = usePathname();
    return (
       <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }} 
          animate={{ height: "auto", opacity: 1 }} 
          exit={{ height: 0, opacity: 0 }} 
          transition={{ duration:0.5, ease: "easeInOut" }} 
          className="md:hidden absolute w-full bg-white border-b border-gray-200 shadow-md overflow-hidden z-40"
        >
          {/* Mobile Search Bar */}
          <MobileSearchBar></MobileSearchBar>
          <ul className="flex flex-col p-4 gap-4 font-semibold text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 border-b border-gray-50 ${pathname === link.path ? 'text-[#82a3c4]' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <ThemeSwitch />
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
    );
};

export default MobileMenu;