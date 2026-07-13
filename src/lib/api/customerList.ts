'use server'

import { headers } from "next/headers";
import { auth } from "../auth";

interface CustomerListResponse {
  users: any[];
  total: number;
}

export const CustomerList = async (): Promise<CustomerListResponse> => {
  try {
    const result = await auth.api.listUsers({
      query: {
        sortBy: "createdAt",
      },
      headers: await headers(),
    });

    return {
      users: result.users ?? [],
      total: result.total ?? 0,
    };

  } catch (error) {
    console.log(error);
    return {
      users: [],
      total: 0,
    };
  }
};