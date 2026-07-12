'use server'

import { serverMutation } from "../service/post"


export const  AddProduct=async(data:object)=>{
    return await serverMutation('/api/products',data)
}