'use client'

import { authClient } from "@/lib/auth-client";
import {Button, Dropdown} from "@heroui/react";
import Link from "next/link";
import { BiUser, BiCart, BiDish, BiLogOut } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";

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

      {user?.role === "admin" && (
        <Dropdown.Item id="admin-dashboard">
          <Link href="/dashboard" className="flex items-center gap-2">
            <MdOutlineDashboard size={16} />
            Admin Dashboard
          </Link>
        </Dropdown.Item>
      )}
    </Dropdown.Menu>
  </Dropdown.Popover>
</Dropdown>
    );
};

export default ProfileDropdown;