import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";



const Logout = () => {
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
            className="px-4 py-1 rounded-full font-medium transition-colors
                       bg-black text-white hover:bg-gray-800
                       dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
            Logout
        </button>
    );
};

export default Logout;