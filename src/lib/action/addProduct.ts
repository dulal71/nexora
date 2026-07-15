'use server'

import { revalidatePath } from "next/cache";
import { serverMutation } from "../service/post"

interface ProductPayload {
  name: string;
  category: string;
  brand: string;
  price: number;
  discountPrice: number | null;
  stock: number;
  images: string[];
  shortDescription: string;
  fullDescription: string;
  status: string;
  sizes: string[];
}

export const AddProduct = async (data: ProductPayload) => {
  const res = await serverMutation('/api/products', data);
  console.log(res);
  if (res.insertedId) {
    revalidatePath('/shop');
  }
  return res;
};

