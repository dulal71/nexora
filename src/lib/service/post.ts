'use server'

const baseUrl=process.env.SERVER_URL

export const serverMutation=async(path:string , data : unknown, method:string = "POST")=>{
  const res = await fetch(`${baseUrl}${path}`,{
    method:method,
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })  
  return res.json()
}