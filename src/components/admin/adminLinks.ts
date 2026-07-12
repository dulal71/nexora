import {
  FiHome,
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";


export const adminLinks = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FiHome,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FiBox,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FiShoppingCart,
  },
  {
    name: "Customers",
    href: "/admin/customers",
    icon: FiUsers,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: FiSettings,
  },
  {
    name: "Logout",
    href: "/logout",
    icon: FiLogOut,
  },
];