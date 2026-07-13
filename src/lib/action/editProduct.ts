'use server'

import { revalidatePath } from "next/cache";
import { serverMutation } from "../service/post";

const EditProductById =async (id:string,data:object) => {
  const res =await  serverMutation(`/api/product/${id}`,data,'PATCH')  
   if (res.modifiedCount > 0) {
    revalidatePath(`/admin/products/${id}`)
    revalidatePath('/shop')
  }
return res
};

export default EditProductById;