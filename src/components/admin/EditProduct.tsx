"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "./ProductDetails";
import EditProductById from "@/lib/action/editProduct";
import { toast } from "sonner";

interface:product{
  
}

interface ProductDetailsProps {
  product: Product;
}

const EditProduct = ({ product }: ProductDetailsProps) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: product.name,
    category: product.category,
    brand: product.brand,
    price: Number(product.price),
    stock: Number(product.stock),
    description: product.description ?? "",
    sizes: product.sizes?.join(", ") ?? "",
   
  });
  const [isSaving, setIsSaving] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
   
    try {
      const payload = {
        name: form.name,
        category: form.category,
        brand: form.brand,
        price: Number(form.price),
        stock: Number(form.stock),
        description: form.description,
        sizes: form.sizes
          ? form.sizes.split(",").map((s) => s.trim()).filter(Boolean)
          : [],
};

const res = await EditProductById(product._id, payload);
   console.log(res);
if(res.data.modifiedCount >0){
    toast.success('Update Product Successfully')
   }else{
    toast.error('Something error try again')
   }
} catch (error) {
     console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#132238] px-3 py-2 text-sm text-[#112D4E] dark:text-[#F9F7F7] placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#112D4E] dark:focus:ring-[#F9F7F7] transition-colors";

  const labelClasses =
    "block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1";

  return (
    <div className="max-w-4xl mx-auto bg-[#F9F7F7] dark:bg-[#0F172A] shadow-md p-6 rounded-lg transition-colors">
      <div className="mb-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Edit product
        </p>
        <h1 className="text-2xl font-semibold text-[#112D4E] dark:text-[#F9F7F7]">
          {product.name}
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          ID: {product._id}
        </p>
      </div>

     <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClasses}>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>Brand</label>
            <input
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>Category</label>
            <input
              name="category"
              value={form.category}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>Price</label>
            <input
              name="price"
              type="number"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              className={inputClasses}
              required
            />
          </div>

          <div>
            <label className={labelClasses}>Stock</label>
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={handleChange}
              className={inputClasses}
              placeholder="0"
            />
          </div>

          <div>
            <label className={labelClasses}>Sizes (comma separated)</label>
            <input
              name="sizes"
              value={form.sizes}
              onChange={handleChange}
              className={inputClasses}
              placeholder="S, M, L, XL"
            />
          </div>
</div>

        <div>
          <label className={labelClasses}>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className={inputClasses}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-[#F9F7F7] px-4 py-2 text-sm font-medium text-white dark:text-[#0F172A] hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? "Saving..." : "Save changes"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium text-[#112D4E] dark:text-[#F9F7F7] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;