'use client'

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../auth-client";


interface SignupData {
  name: string;
  email: string;
 password: string;

}

export default function useUserSignup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const signup = async (data: SignupData,redirectTo:string) => {
    setIsLoading(true);
    try {
   
      const { data: responseData, error } = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
      
      
      });

      if (error) {
        console.log(error);
        toast.error(error.message || "Registration failed!");
     
      } else {
        toast.success("Registration successful!");
       router.push(redirectTo)
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading };
}