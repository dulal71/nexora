"use client";


import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const ThemeSwitch = () => {
     const { theme, setTheme } = useTheme();
    return (
      <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className={`
    relative flex items-center justify-center
    size-8 rounded-full
    transition-colors duration-300
    ${theme === "dark" ? "bg-gray-700" : "bg-amber-100"}
  `}
>
  {theme === "dark" ? (
    <FaMoon className="size-4 text-gray-200" />
  ) : (
    <FaSun className="size-4 text-amber-500" />
  )}
</button>
    );
};

export default ThemeSwitch;