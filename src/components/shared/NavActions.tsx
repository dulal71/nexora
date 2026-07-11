'use client'

import Link from "next/link";
import { BiSearch, BiUser } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import { AiOutlineHeart } from 'react-icons/ai'

interface NavActionsProps {
  openMenu: () => void;
}
const NavActions = ({openMenu}:NavActionsProps) => {
    return (
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
           <Link href={'/profile'}>
             <button className="p-1  hover:text-[var(--primary)] transition-colors flex items-center cursor-pointer" aria-label="User">
         <BiUser size={18}></BiUser>
            </button>
            </Link>

            <div className="relative cursor-pointer">
            <AiOutlineHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          
          <BiSearch onClick={openMenu}  size={20} className="cursor-pointer block md:hidden" />
         
          <div className="relative cursor-pointer">
            <FiShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          
          <div className="hidden md:block">
            <ThemeSwitch></ThemeSwitch>
          </div>
          </div>
    );
};

export default NavActions;