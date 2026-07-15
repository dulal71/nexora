import Link from "next/link";
import { FiHeart, FiMail, FiMinus, FiPlus, FiRotateCcw } from "react-icons/fi";
import CheckoutModal from "../checkout/CheckoutModal";
import { Product } from "./ProductDetailsView";

interface ProductActionsProps {
  product:Product
  quantity: number;
   selectedSize:string;
  wishlisted: boolean;
  isOutOfStock: boolean;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  setWishlisted: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductActions = ({
  product,
   selectedSize,
 decrementQuantity ,
 quantity,  
 incrementQuantity,
 isOutOfStock,
 setWishlisted,
 wishlisted,
}:ProductActionsProps) => {
    return (
        <>
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
        
        <CheckoutModal 
        product={product} 
        quantity={quantity}
        selectedSize={selectedSize}
         ></CheckoutModal>
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
        </>

    );
};

export default ProductActions;