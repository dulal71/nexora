'use client'

import { authClient } from "@/lib/auth-client";
import {Button, Dropdown} from "@heroui/react";
import Link from "next/link";
import { BiUser, BiCart, BiDish, BiLogOut, BiLogIn, BiSignal1 } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import Logout from "./Logout";
import { SiGnu } from "react-icons/si";
import { FaRegistered } from "react-icons/fa6";

const ProfileDropdown =() => {
       const {data: session }= authClient.useSession() 
      const user = session?.user
      console.log(user);
    return (
        <Dropdown>
  <Button aria-label="Menu" variant="ghost">
    <BiUser size={18} />
  </Button>
  <Dropdown.Popover>
    <Dropdown.Menu>
      {
        user? 
        <>
          <Dropdown.Item>
        <Link href="/profile" className="flex items-center gap-2">
          <BiUser size={16} />
          Profile
        </Link>
      </Dropdown.Item>

      <Dropdown.Item>
        <Link href="/cart" className="flex items-center gap-2">
          <BiCart size={16} />
          Cart
        </Link>
      </Dropdown.Item>
      </>
        
        :
        <>
         <Dropdown.Item>
        <Link href="/login" className="flex items-center gap-2">
          <BiLogIn size={16} />
          Login
        </Link>
      </Dropdown.Item>
         <Dropdown.Item>
        <Link href="/register" className="flex items-center gap-2">
          <FaRegistered size={16} />
          Register
        </Link>
      </Dropdown.Item>

      </>
      }
      {user?.role === "admin" && (
        <Dropdown.Item id="admin-dashboard">
          <Link href="/admin" className="flex items-center gap-2">
            <MdOutlineDashboard size={16} />
            Admin Dashboard
          </Link>
        </Dropdown.Item>
      )}
       <Dropdown.Item>
        <Logout></Logout>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown>
    );
};

export default ProfileDropdown;