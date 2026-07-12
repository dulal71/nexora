'use server'

import { serverFetch } from "../service/get"



export const  getProducts=async()=>{
    return await serverFetch('/api/products')
}