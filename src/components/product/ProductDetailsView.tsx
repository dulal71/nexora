"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiHeart, FiTruck, FiRotateCcw, FiMail, FiMinus, FiPlus, FiEye } from "react-icons/fi";
import { Product } from "@/type/product";
import Link from "next/link";




interface ProductDetailsProps {
  product: Product;
  /** Live "people viewing" style social proof number. Pass from an actual
   *  analytics/presence source if you have one — otherwise omit. */
  viewersCount?: number;
}

export default function ProductDetailsView({
  product,
  viewersCount,
}: ProductDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const stockNumber = Number(product.stock) || 0;
  const isLowStock = stockNumber > 0 && stockNumber <= 10;
  const isOutOfStock = stockNumber === 0;

  const price = Number(product.price) || 0;
  const discountPrice = product.discountPrice
    ? Number(product.discountPrice)
    : null;

  const formattedPrice = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(discountPrice ?? price),
    [price, discountPrice]
  );

  const formattedOriginalPrice = useMemo(
    () =>
      discountPrice
        ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)
        : null,
    [price, discountPrice]
  );

  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));
  const incrementQuantity = () =>
    setQuantity((q) => Math.min(stockNumber || q + 1, q + 1));

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-8 md:grid-cols-2 md:px-6">
      {/* Gallery */}
      <div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-neutral-100">
          {product.images[activeImage] && (
            <Image
              src={product.images[activeImage]}
              alt={`${product.name} - view ${activeImage + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          )}
        </div>

        {product.images.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={img + idx}
                type="button"
                onClick={() => setActiveImage(idx)}
                aria-label={`Show image ${idx + 1}`}
                aria-current={activeImage === idx}
                className={`relative aspect-square overflow-hidden rounded-md bg-neutral-100 ring-2 transition ${
                  activeImage === idx
                    ? "ring-neutral-900"
                    : "ring-transparent hover:ring-neutral-300"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <p className="text-sm text-neutral-500">{product.brand}</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-900 dark:!text-slate-50">
          {product.name}
        </h1>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500 dark:text-neutral-200">
          {product.barcode && <span>Barcode: {product.barcode}</span>}
          <span>SKU: {product.sku ?? product._id.slice(-8).toUpperCase()}</span>
        </div>

        <div className="mt-4 flex items-baseline gap-3">
          <span className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
            {formattedPrice}
          </span>
          {formattedOriginalPrice && (
            <span className="text-lg text-neutral-400 dark:text-white line-through">
              {formattedOriginalPrice}
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
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center rounded-full border border-neutral-200">
            <button
              type="button"
              onClick={decrementQuantity}
              aria-label="Decrease quantity"
              className="flex h-11 w-11 items-center justify-center text-neutral-600 hover:text-neutral-900 disabled:opacity-40"
              disabled={quantity <= 1}
            >
              <FiMinus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-sm font-medium">
              {quantity}
            </span>
            <button
              type="button"
              onClick={incrementQuantity}
              aria-label="Increase quantity"
              className="flex h-11 w-11 items-center justify-center text-neutral-600 hover:text-neutral-900 disabled:opacity-40"
              disabled={isOutOfStock}
            >
              <FiPlus className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            disabled={isOutOfStock}
            className="h-11 flex-1 rounded-full bg-neutral-900 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            Add To Cart
          </button>
        </div>
        
        <Link href={'/checkout'} 
         className=" flex justify-center items-center mt-3 h-12 rounded-full bg-[#f28b7f] text-sm font-medium text-white  transition hover:bg-[#ef7a6c] disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
        <button
          type="button"
          disabled={isOutOfStock}
          
        >
          Buy It Now
        </button>
         </Link>
        {/* Secondary actions */}
        <div className="mt-4 flex flex-wrap gap-6 text-sm text-neutral-700">
          <button
            type="button"
            onClick={() => setWishlisted((w) => !w)}
            className="flex items-center gap-2 hover:text-neutral-900"
          >
            <FiHeart
              className={`h-4 w-4 ${wishlisted ? "fill-neutral-900" : ""}`}
            />
            Add to wishlist
          </button>
          <button type="button" className="flex items-center gap-2 hover:text-neutral-900">
            <FiRotateCcw className="h-4 w-4" />
            Delivery & Return
          </button>
          <button type="button" className="flex items-center gap-2 hover:text-neutral-900">
            <FiMail className="h-4 w-4" />
            Ask a question
          </button>
        </div>

        {/* Info boxes */}
        <div className="mt-6 space-y-3">
          <div className="flex gap-3 rounded-lg bg-neutral-50 p-4">
            <FiTruck className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" />
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">
                Free Shipping
              </span>
              <br />
              We offer worldwide free delivery on all orders over $100.{" "}
              <a href="#" className="underline underline-offset-2">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex gap-3 rounded-lg bg-neutral-50 p-4">
            <FiRotateCcw className="mt-0.5 h-5 w-5 shrink-0 text-neutral-700" />
            <p className="text-sm text-neutral-600">
              <span className="font-medium text-neutral-900">
                Easy Returns
              </span>
              <br />
              Return within 30 days of purchase. Duties & taxes are
              non-refundable.{" "}
              <a href="#" className="underline underline-offset-2">
                Returns Details.
              </a>
            </p>
          </div>
        </div>

        {typeof viewersCount === "number" && viewersCount > 0 && (
          <p className="mt-4 flex items-center gap-2 text-sm text-neutral-500">
            <FiEye className="h-4 w-4" />
            {viewersCount} people looking at this product right now
          </p>
        )}

        <p className="mt-4 text-xs text-neutral-400">
          Guaranteed safe checkout
        </p>
      </div>
    </div>
  );
}