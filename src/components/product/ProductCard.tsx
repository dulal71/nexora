import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "./ProductContainer";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link href={`/product/${product._id}`} className="group block">
      <div className=" p-4 rounded-2xl  transition-all duration-300 border border-gray-100">
        
     
        <div className="relative w-full h-72 overflow-hidden rounded-xl mb-4 bg-gray-200">
          <Image
            fill
            src={product.images[0]} 
            alt={product.name}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

       
        <div className="text-center space-y-1">
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
          
          <div className="flex justify-center items-center gap-2">
            <span className="text-md font-bold text-black">${product.discountPrice}</span>
            {product.discountPrice && (
              <span className="text-sm text-gray-400 line-through">${product.price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;