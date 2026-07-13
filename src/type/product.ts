export interface Product {
  _id: string;
  name: string;
  category: string;
  brand: string;
  price: string;
  discountPrice?: string;
  fullDescription?: string;
  shortDescription?: string;
  images: string[];
  sizes: string[];
  status: "active" | "inactive" | "draft";
  stock: string;
  createdAt: string;
  sku?: string;
  barcode?: string;
}