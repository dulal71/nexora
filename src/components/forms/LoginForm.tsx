
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useUserLogin from '@/lib/authService/useLogin';
import useGoogleSignIn from '@/lib/authService/useGoogleSignIn';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const registerSchema = z.object({
 email: z.string().email("Invalid email address"),
password: z.string().min(6, "Password must be at least 6 characters"),
 })

type RegisterFormValues = z.infer<typeof registerSchema>;
const LoginForm = () => {
  const searchParams=useSearchParams()
const redirectTo=searchParams.get('redirect') || "/"
     const { Login, isLoading}=useUserLogin()
     const { googleSignIn, loading}=useGoogleSignIn()
      const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
       });
      const onSubmit =async (data: RegisterFormValues) => {
         await Login(data,redirectTo)
     };
    
  const handleGoogleSignup = async () => {
 await googleSignIn()
};
       const inputStyles = "w-full p-3 rounded-lg border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";
    return (
       <div className="w-full flex justify-center items-center min-h-screen p-4">
  <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white dark:bg-black border border-gray-100 dark:border-gray-800 transition-colors duration-300">
  
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Create an Account</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Email */}
        <div>
          <label>Email</label>
          <input {...register("email")} placeholder="Email" className={inputStyles} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="Password" className={inputStyles} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

       <button disabled={isLoading} className='text-white dark:text-black bg-black dark:bg-white py-1.5 w-full rounded-full text-center'>
      Login
     </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-700"></div></div>
          <div className="relative flex justify-center text-sm"><span className="bg-white dark:bg-gray-900 px-2 text-white py-0.5">Or continue with</span></div>
        </div>

        <button onClick={handleGoogleSignup} type="submit" className="w-full py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
          {
       loading ? "Signing in..." : "Google Signin"
           }
        </button>
        <div className="text-center mt-4 text-sm text-gray-600 dark:text-white">
  Don&apos;t have an account?{" "}
  <Link href="/register" className="text-red-600 hover:underline font-medium">
    Sign up
  </Link>
</div>
      </form>
  </div>
</div>
    );
};

export default LoginForm;