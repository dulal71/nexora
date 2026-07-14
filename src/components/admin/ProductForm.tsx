"use client";

import { AddProduct } from "@/lib/action/addProduct";
import { uploadImage } from "@/lib/service/imageUpload";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

interface ProductFormData {
  name: string;
  category: string;
  brand: string;
  price: number;
  discountPrice: string;
  stock: string;
  images: FileList | null;
  shortDescription: string;
  fullDescription: string;
  status: string;
  sizes: string[];
}

const initialFormData: ProductFormData = {
  name: "",
  category: "",
  brand: "",
  price:0 ,
  discountPrice: "",
  stock: "",
  images: null,
  shortDescription: "",
  fullDescription: "",
  status: "active",
  sizes: []
};

const inputStyle =
  "w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg px-3.5 py-2.5 text-sm outline-none focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-colors";

const labelStyle =
  "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

const ProductForm = () => {
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
   
   const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const AVAILABLE_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const handleSizeToggle = (size: string) => {
  setFormData((prev) => ({
    ...prev,
    sizes: prev.sizes.includes(size)
      ? prev.sizes.filter((s) => s !== size)
      : [...prev.sizes, size],
        
  }));

};

  const handleReset=()=>{
    setFormData(initialFormData)
    setPreviewUrls([])
  }
 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files) return;

  setFormData((prev) => ({ ...prev, images: files }));

  setPreviewUrls((prevUrls) => {
    prevUrls.forEach((url) => URL.revokeObjectURL(url));
    return Array.from(files).map((file) => URL.createObjectURL(file));
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    setIsSubmitting(true); 

    let uploadedUrls: string[] = [];

    if (formData.images) {
      const uploadPromises = Array.from(formData.images).map((file) => uploadImage(file));
      const results = await Promise.all(uploadPromises);
      uploadedUrls = results.map((res) => res.data.display_url);
    }

    const finalData = {
      ...formData,
      images: uploadedUrls, 
    };

    const res = await AddProduct(finalData);
    
    if(res.insertedId){
      toast.success("Product added successfully");
      handleReset(); 
    }
  } catch (error) {
    toast.error("Failed to add product");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Add New Product
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Fill in the details below to add a product to your store.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-6 md:p-8 space-y-8"
        >
          {/* Section: Basic Info */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelStyle}>
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Classic Denim Jacket"
                  required
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className={inputStyle}
                >
                  <option value="">Select category</option>
                  <option value="fashion">Fashion</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="accessories">Accessories</option>
                  <option value="shoes">Shoes</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="Optional"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className={labelStyle}>Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={inputStyle}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section: Pricing & Stock */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
              Pricing & Stock
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className={labelStyle}>
                  Price <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    min="0"
                     step='1'
                    required
                    className={`${inputStyle} pl-7`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>Discount Price</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    name="discountPrice"
                    value={formData.discountPrice}
                    onChange={handleChange}
                    placeholder="Optional"
                    min="0"
                    step="0.01"
                    className={`${inputStyle} pl-7`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyle}>
                  Stock Quantity <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  required
                  className={inputStyle}
                />
              </div>
            </div>
          </section>
          {/* Section: Sizes */}
           <section>
  <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
    Available Sizes
  </h2>
  <div className="flex flex-wrap gap-2">
    {AVAILABLE_SIZES.map((size) => {
      const isSelected = formData.sizes.includes(size);
      return (
        <button
          key={size}
          type="button"
          onClick={() => handleSizeToggle(size)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
            isSelected
              ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
              : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white"
          }`}
        >
          {size}
        </button>
      );
    })}
  </div>
             </section>

          {/* Section: Images */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
              Product Images
            </h2>
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl py-8 cursor-pointer hover:border-black dark:hover:border-white transition-colors"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Click to upload images (multiple allowed)
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                PNG, JPG up to 5MB each
              </span>
              <input
                id="images"
                type="file"
                name="images"
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
              />
            </label>

            {previewUrls.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {previewUrls.map((url, index) => (
                  <Image
                  width={300}
                  height={300}
                    key={index}
                    src={url}
                    alt={`Preview ${index + 1}`}
                    className="size-20 object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                ))}
              </div>
            )}
          </section>

          {/* Section: Description */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
              Description
            </h2>
            <div className="space-y-5">
              <div>
                <label className={labelStyle}>Short Description</label>
                <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Brief summary of the product"
                  rows={2}
                  className={`${inputStyle} resize-none`}
                />
              </div>

              <div>
                <label className={labelStyle}>Full Description</label>
                <textarea
                  name="fullDescription"
                  value={formData.fullDescription}
                  onChange={handleChange}
                  placeholder="Detailed product description"
                  rows={5}
                  className={`${inputStyle} resize-none`}
                />
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2 border-t border-gray-200 dark:border-gray-800">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-85 transition-opacity"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;