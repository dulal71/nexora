'use client'


import { BiSearch} from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import ThemeSwitch from "./ThemeSwitch";
import { AiOutlineHeart } from 'react-icons/ai'
import ProfileDropdown from "./ProfileDropdown";
import { useCart } from "@/context/CartContext";

interface NavActionsProps {
  openMenu: () => void;
}
const NavActions = ({openMenu}:NavActionsProps) => {
   const { openCart,cartItems} = useCart();
  return (
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <ProfileDropdown></ProfileDropdown> 
        <div className="relative cursor-pointer hidden md:block">
            <AiOutlineHeart size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          
          <BiSearch onClick={openMenu}  size={20} className="cursor-pointer block md:hidden" />
       
          <div className="relative cursor-pointer">
            <FiShoppingBag onClick={openCart} size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">{cartItems.length}</span>
          </div>
          
          <div className="hidden md:block">
            <ThemeSwitch></ThemeSwitch>
          </div>
          </div>
    );
};

export default NavActions;