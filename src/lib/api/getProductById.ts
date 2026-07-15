'use server'

import { secureFetch } from "../service/get";

const getProductById =async (id:string) => {
  return await secureFetch(`/api/product/${id}`)
};

export default getProductById;