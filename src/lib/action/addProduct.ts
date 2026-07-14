'use server'

import { revalidatePath } from "next/cache";
import { serverMutation } from "../service/post"


export const  AddProduct=async(data:object)=>{
    const res =  await serverMutation('/api/products',data)
     console.log(res);
     if(res.insertedId){
        revalidatePath('/shop')
     }
    return res;
}