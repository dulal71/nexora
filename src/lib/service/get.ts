'use server'




const baseUrl=process.env.SERVER_URL

export const serverFetch=async(path:string)=>{
  const res = await fetch(`${baseUrl}${path}`)  
  return res.json()
}