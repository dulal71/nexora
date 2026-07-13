'use server'

import { serverFetch } from "../service/get";

const getProductById =async (id:string) => {
  return await serverFetch(`/api/product/${id}`)
};

export default getProductById;