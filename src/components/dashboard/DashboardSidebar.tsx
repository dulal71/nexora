"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ImMenu } from "react-icons/im";

import { LuChevronLeft,  LuChrome } from "react-icons/lu";



import { FaRegWindowClose } from "react-icons/fa";
import { adminLinks } from "../admin/adminLinks";
import Logout from "../shared/Logout";
import { CgMoveLeft, CgMoveRight } from "react-icons/cg";
import MobileSidebar from "./MobileSidebar";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);
   const pathname = usePathname()


  return (
    <>
      {/* ================= Desktop Sidebar ================= */}
      <aside
        className={`
          hidden md:flex flex-col h-screen
          border-r border-default
          transition-all duration-600 ease-in-out
          ${collapsed ? "w-20" : "w-64"}
        `}
      >
        {/* Collapse Button */}
        <div className="flex justify-end p-3">
          <button
  className="text-black dark:text-white text-3xl"
  onClick={() => setCollapsed(!collapsed)}
>
  {
    collapsed 
      ? <CgMoveRight size={30} />
      : <CgMoveLeft size={30} />
  }
</button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-1 px-3">
       {adminLinks.map((item) => {
  const isActive = pathname === item.href;

  return (
    <Link
      key={item.name}
      href={item.href}
      className={`
        flex items-center rounded-xl px-3 py-2.5 transition-all
        ${collapsed ? "justify-center" : "gap-3"}
        ${
          isActive
            ? "bg-[#d8d8de] dark:bg-white/10 translate-x-3"
            : "hover:bg-[#f7f7f9] dark:hover:bg-white/10"
        }
      `}
    >
      <item.icon
        className={`size-5 shrink-0 ${
          isActive
            ? "text-black dark:text-white"
            : "text-black/70 dark:text-white/70"
        }`}
      />

      {!collapsed && (
        <span
          className={`whitespace-nowrap font-semibold ${
            isActive
              ? "text-black dark:text-white"
              : "text-black/70 dark:text-white/70"
          }`}
        >
          {item.name}
        </span>
      )}
    </Link>
  );
})}

          <div className="my-2 border-t border-default" />

          <Link
            href="/"
            className={`
             text-black dark:text-white font-semibold flex items-center rounded-xl px-3 py-2.5
              hover:bg-default transition-all
              ${collapsed ? "justify-center" : "gap-3"}
            `}
          >
            <LuChrome className="size-5 shrink-0 " />

            {!collapsed && <span>Back to Home</span>}
          </Link>

          <Logout collapsed={collapsed} />
        </nav>
      </aside>

      {/* ================= Mobile Menu ================= */}
     <div className="md:hidden border-b border-default p-3">
  <Button
  variant="ghost"
    onPress={() => setMobileOpen(!mobileOpen)}
    className="w-full justify-start text-black dark:text-white"
  
  >
    {
      mobileOpen ? <FaRegWindowClose className="size-4"/>: <ImMenu className="size-4" />
    }
    
    Dashboard
  </Button>
</div>

{/* Mobile Sidebar */}
 <MobileSidebar mobileOpen={mobileOpen} collapsed={collapsed}></MobileSidebar>
     
    </>
  );
};

export default DashboardSidebar;