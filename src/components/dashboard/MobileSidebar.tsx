import Link from "next/link";
import { LuChrome } from "react-icons/lu";
import Logout from "../shared/Logout";
import { adminLinks } from "../admin/adminLinks";
import { AnimatePresence,motion } from "framer-motion";

interface MobileProps{
    mobileOpen:boolean;
    collapsed:boolean
}

const MobileSidebar = ({mobileOpen,collapsed}:MobileProps) => {
    return (
       <AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }} 
          animate={{ height: "auto", opacity: 1 }} 
          exit={{ height: 0, opacity: 0 }} 
          transition={{ duration:0.5, ease: "easeInOut" }} 
      className="md:hidden overflow-hidden"
    >
      <nav className="border-b rounded-2xl border-default p-3">
        {adminLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center font-semibold text-black dark:text-white gap-3 rounded-xl px-3 py-2.5 hover:bg-default transition-colors"
          >
            <item.icon className="size-5" />
            <span>{item.name}</span>
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
    </motion.div>
  )}
</AnimatePresence>
    );
};

export default MobileSidebar;