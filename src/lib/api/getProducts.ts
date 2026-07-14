'use server'

import { serverFetch } from "../service/get"



export const  getProducts=async(page:number = 1,search:string ='',sort:string='',category:string ='')=>{
    return await serverFetch(`/api/products?page=${page}&search=${search}&sort=${sort}&category=${category}`)
}