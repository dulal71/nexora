"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useUserSignup from '@/lib/authService/userSignup';
import { toast } from 'sonner';
import useGoogleSignIn from '@/lib/authService/useGoogleSignIn';
import { useSearchParams } from 'next/navigation';

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits")
  .regex(/^\d+$/, "Phone number must contain only numbers"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
 
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const searchParams=useSearchParams()
  const redirectTo=searchParams.get('redirect') || "/"
    const { signup, isLoading}=useUserSignup()
      const { googleSignIn, loading}=useGoogleSignIn()
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
   });

  const onSubmit =async (data: RegisterFormValues) => {
    const {confirmPassword,...userData}=data
    await signup(userData,redirectTo)

  };

 const handleGoogleSignup = async () => {
 await googleSignIn()
 };

  // Reusable input classes for cleaner code
  const inputStyles = "w-full p-3 rounded-lg border bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all";

  return (
<div className="w-full flex justify-center items-center min-h-screen p-4">
  <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-colors duration-300">
  
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Create an Account</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className=''>Name</label>
          <input {...register("name")} placeholder="Full Name" className={inputStyles} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input {...register("email")} placeholder="Email" className={inputStyles} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label>Phone</label>
          <input {...register("phone")} placeholder="Phone Number" className={inputStyles} />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} placeholder="Password" className={inputStyles} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className={inputStyles} />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

       <button disabled={isLoading}>

           {
         isLoading ? "Creating Account..." : "Register"
           }

           </button>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300 dark:border-gray-700"></div></div>
          <div className="relative flex justify-center text-sm"><span className="bg-white dark:bg-gray-900 px-2 text-gray-500">Or continue with</span></div>
        </div>

        <button onClick={handleGoogleSignup} type="submit" className="w-full py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">
        {
 loading ? "Creating Account..." : "Register"
         }
        </button>
      </form>
  </div>
</div>
  
  );
};

export default RegisterForm;