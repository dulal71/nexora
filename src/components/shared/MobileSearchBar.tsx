'use client'

import { BiSearch } from "react-icons/bi";

const MobileSearchBar = () => {
    return (
       
<div className="px-4 pt-4">
  <div
    className="
      flex items-center
      bg-gray-100 dark:bg-gray-800
      rounded-full
      px-3 py-2
    "
  >
 {/* Input */}
    <input
      type="text"
      placeholder="Search products..."
      className="
        flex-1
        bg-transparent
        outline-none
        px-3
        text-sm
        text-gray-800 dark:text-gray-100
      "
    />

   {/* Clear Button */}
    <button
      type="button"
      className="
        w-9 h-9
        ml-2
        flex items-center justify-center
        rounded-full
       
        backdrop-blur-md
        text-black
       
        transition
      "
    >
      ✕
    </button>
    {/* Search Button */}
    <button
      type="button"
      className="
        w-8 h-8
        flex items-center justify-center
        rounded-full
         bg-black
         text-white
       
       
      "
    >
      <BiSearch></BiSearch>
    </button>


    

  </div>
</div>
    );
};

export default MobileSearchBar;