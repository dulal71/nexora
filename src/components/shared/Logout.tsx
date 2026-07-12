import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "sonner";

interface LogoutProps{
    collapsed:boolean
}

const Logout = ({collapsed = false}:LogoutProps) => {
    const router = useRouter();

    const handleSignOut = async (): Promise<void> => {
        try {
            await authClient.signOut();
             toast.success('Logged out successfully');
            router.push('/login');
            router.refresh();
           
        } catch (error) {
               toast.error('Failed to log out. Please try again.');
            console.error('Sign out failed:', error);
        }
    };

    return (
        <button
  onClick={handleSignOut}
  className={`
    flex  items-center rounded-xl px-3 py-2.5
    hover:bg-default transition-all
    ${collapsed ? "justify-center" : "gap-3"}
  `}
>
  <FaSignOutAlt className="size-5 shrink-0 text-danger" />

  {!collapsed && (
    <span className="text-danger font-medium">
      Log Out
    </span>
  )}
</button>
    );
};

export default Logout;