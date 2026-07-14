'use server'

import { serverFetch } from "../service/get"



export const  getProducts=async(page:number = 1)=>{
    return await serverFetch(`/api/products?page=${page}`)
}