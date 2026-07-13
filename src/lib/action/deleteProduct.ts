'use server'

import { revalidatePath } from "next/cache";
import { serverDelete } from "../service/delete";




export const deleteProduct=async(id:string)=>{
const res = await serverDelete(`/api/product/${id}`)
const data = res.data
if(data.deletedCount > 0){
    revalidatePath('/admin/products')
}
return data;
}