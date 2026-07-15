"use client";

import {  useState } from "react";
import ProductGallery from "./ProductGallery";
import ProductInfoCard from "./ProductInfoCard";
import ProductActions from "./ProductActions";
export interface Product {
  _id: string;
  name: string;
  brand:string;
  price: number;
  discountPrice?: number;
  stock:number;
  sizes:string[];
  images: string[];
}
interface ProductDetailsProps {
  product: Product;
 }

export default function ProductDetailsView({
  product,
  
}: ProductDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const stockNumber = Number(product.stock) || 0;
  const isLowStock = stockNumber > 0 && stockNumber <= 10;
  const isOutOfStock = stockNumber === 0;

const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const incrementQuantity = () =>
    setQuantity((q) => Math.min(stockNumber || q + 1, q + 1));

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-2 md:px-6">
        {/* Gallery */}
        <ProductGallery activeImage={activeImage} product={product} setActiveImage={setActiveImage}></ProductGallery>
      {/* Details */}
      <div className="flex flex-col">
        <p className="text-sm text-neutral-500">{product.brand}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-900 dark:!text-slate-50">
          {product.name}
        </h1>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
           $ {Number(product.price)}
          </span>
          {product.discountPrice && (
            <span className="text-lg text-neutral-400 dark:text-white line-through">
              { Number(product.discountPrice)}
            </span>
          )}
        </div>

        {/* Size selector */}
        {product.sizes.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-700 dark:text-white">
                Size:{" "}
                <span className="font-medium text-neutral-900">
                  {selectedSize}
                </span>
              </span>
              <button
                type="button"
                className="text-sm font-medium text-neutral-900 underline underline-offset-2"
              >
                Size Chart
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={selectedSize === size}
                  className={`h-11 w-11 rounded-md text-sm font-medium transition ${
                    selectedSize === size
                      ? "bg-neutral-900 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stock message */}
        <div className="mt-4 min-h-[1.25rem] text-sm font-medium">
          {isOutOfStock ? (
            <span className="text-red-500">Out of stock</span>
          ) : isLowStock ? (
            <span className="text-amber-500">
              Only {stockNumber} left · Selling fast
            </span>
          ) : null}
        </div>

        {/* Quantity + Add to cart */}
         <ProductActions
         product={product}
         selectedSize={selectedSize}
          decrementQuantity={decrementQuantity}
 quantity={quantity} 
 incrementQuantity={incrementQuantity}
 isOutOfStock={isOutOfStock}
 setWishlisted={setWishlisted}
 wishlisted={wishlisted}
         ></ProductActions>
         
        {/* Info boxes */}
       <ProductInfoCard></ProductInfoCard>

      

        <p className="mt-4 text-xs text-neutral-400">
          Guaranteed safe checkout
        </p>
      </div>
    </div>
  );
}