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

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);


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
          {adminLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center rounded-xl px-3 py-2.5
                hover:bg-default transition-all
                ${collapsed ? "justify-center" : "gap-3"}
              `}
            >
              <item.icon className="size-5 shrink-0 text-black dark:text-white" />

              {!collapsed && (
                <span className="whitespace-nowrap text-black dark:text-white font-semibold">
                  {item.name}
                </span>
              )}
            </Link>
          ))}

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
<div
  className={`
    md:hidden
    overflow-hidden
    transition-all duration-300
    ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <nav className="border-b rounded-2xl border-default p-3">
    {adminLinks.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="flex items-center font-semibold text-black dark:text-white gap-3 rounded-xl px-3 py-2.5 hover:bg-default transition-colors"
      >
        <item.icon className="size-5 " />
        <span >{item.name}</span>
      </Link>
    ))}

    <div className="my-2 border-t border-default" />

    <Link
      href="/"
      className="flex items-center font-semibold text-black dark:text-white gap-3 rounded-xl px-3 py-2.5 hover:bg-default transition-colors"
    >
      <LuChrome className="size-5" />
      <span>Back to Home</span>
    </Link>

    <Logout collapsed={collapsed} />
  </nav>
</div> 
     
    </>
  );
};

export default DashboardSidebar;