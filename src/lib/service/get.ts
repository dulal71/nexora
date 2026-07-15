'use server'

import { authHeader } from "./post"




const baseUrl=process.env.SERVER_URL

export const serverFetch=async(path:string)=>{
  const res = await fetch(`${baseUrl}${path}`,{
    cache:'no-store'
  })  
  return res.json()
}
export const secureFetch=async(path:string)=>{
  const res = await fetch(`${baseUrl}${path}`,{
    cache:'no-store',
    headers:await authHeader()
  })  
  return res.json()
}