'use server'

import { headers } from "next/headers";
import { auth } from "../auth";

export const CustomerList=async()=>{
   const users = await auth.api.listUsers({
    query: {
       sortBy: "createdAt",
        },
   
    headers: await headers(),
}); 
return users;
}