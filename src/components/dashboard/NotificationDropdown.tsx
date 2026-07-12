'use client'

import {Button, Dropdown, Label} from "@heroui/react";
import { IoMdNotificationsOutline } from "react-icons/io";

const NotificationDropdown = () => {
    return (
         <Dropdown>
      <Button
  variant="ghost"
  className="relative cursor-pointer hidden md:flex h-11 w-11 rounded-full items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
  aria-label="Notifications"
>
  <IoMdNotificationsOutline size={24} className="text-gray-700 dark:text-gray-200" />
  
  <span className="absolute top-1 right-1 bg-black dark:bg-white text-white dark:text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium border border-white dark:border-gray-950">
    0
  </span>
</Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
    );
};

export default NotificationDropdown;