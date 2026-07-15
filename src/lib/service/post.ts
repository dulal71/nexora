'use server'

import { getUserToken } from "../api/userSession"

const baseUrl=process.env.SERVER_URL


export const authHeader = async (): Promise<Record<string, string>> => {
  const token = await getUserToken();
  const header: Record<string, string> = token
    ? { authorization: `Bearer ${token}` }
    : {};
  return header;
};




export const serverMutation=async(path:string , data : unknown, method:string = "POST")=>{
  const res = await fetch(`${baseUrl}${path}`,{
    method:method,
    headers:{
        'Content-Type':'application/json',
        ...await authHeader()
    },
    body:JSON.stringify(data)
  })  
  return res.json()
}