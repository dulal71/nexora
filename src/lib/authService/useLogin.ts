'use client'

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../auth-client";


interface LoginData {
 email: string;
password: string;
}

export default function useUserLogin() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const Login = async (userData: LoginData) => {
    setIsLoading(true);
    try {
   
     const { data, error } = await authClient.signIn.email({
   ...userData,
   });

      if (error) {
        console.log(error);
        toast.error(error.message || "Registration failed!");
     
      } else {
        toast.success("Registration successful!");
       router.push('/')
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { Login, isLoading };
}