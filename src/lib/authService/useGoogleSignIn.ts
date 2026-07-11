'use client'

import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "../auth-client";

export default function useGoogleSignIn() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const googleSignIn = async () => {
    setLoading(true);
    try {
   
     const { data, error } = await authClient.signIn.social({
      provider: "google",
    });


      if (error) {
        console.log(error);
        toast.error(error.message || "Registration failed!");
     
      } else {
        toast.success("Registration successful!");
       router.push('/')
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { googleSignIn, loading };
}