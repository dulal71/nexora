import { getSession } from "@/lib/api/userSession";
import Link from "next/link";

const UserProfile = async () => {
  const user = await getSession();

  return (
  
    <div className="flex justify-center items-center py-10">
      <div className="w-full max-w-sm">
        {user ? (
          <div className="flex items-center gap-4 p-6 border rounded-2xl bg-white  dark:bg-black shadow border-gray-100">
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xl shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>

            {/* User Info */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white ">
                {user.name.toUpperCase()}
              </span>
              <span className="text-sm md:text-md text-gray-500 dark:text-gray-200 mt-2">Email : {user.email}</span>
              
            </div>
          </div>
        ) : (
          <div className="text-center p-6 border rounded-2xl bg-white shadow-lg">
             <p className="text-gray-600 mb-4">You are not logged in</p>
             <Link
              href="/login"
              className="inline-block px-8 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;