import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
}
interface DesktopMenuProps {
  navLinks: NavLink[];
}
const DesktopMenu = ({navLinks}:DesktopMenuProps) => {
    const pathname = usePathname()
    
    return (
        <ul className="hidden md:flex gap-6 font-medium text-sm text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path} className={`hover:text-[var(--accent)] ${pathname === link.path ? 'text-[var(--primary)]' : ''}`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
    );
};

export default DesktopMenu;